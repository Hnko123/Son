const CACHE_VERSION = 'llc-app-cache-v1';
const STATIC_ASSETS = ['/favicon.ico', '/manifest.json'];
const STATIC_DESTINATIONS = new Set(['style', 'script', 'image', 'font', 'worker', 'manifest']);

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_VERSION).then((cache) => cache.addAll(STATIC_ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys.map((key) => {
            if (key !== CACHE_VERSION) {
              return caches.delete(key);
            }
            return Promise.resolve();
          })
        )
      )
      .then(() => self.clients.claim())
  );
});

const shouldQueueChatRequest = (request) => {
  if (request.method !== 'POST') return false
  const url = new URL(request.url)
  return url.pathname.includes('/api/chat/messages')
}

const queueChatFetch = async (request) => {
  try {
    return await fetch(request)
  } catch (error) {
    const payload = await request.clone().json().catch(() => null)
    if (payload) {
      await queueChatMessage(payload)
    }
    return new Response(JSON.stringify({ offline: true }), {
      status: 503,
      headers: { 'Content-Type': 'application/json' }
    })
  }
}

const shouldBypass = (request) => {
  const url = new URL(request.url);
  if (request.method !== 'GET') return true;
  if (url.pathname.startsWith('/api') || url.pathname.startsWith('/socket.io')) return true;
  if (request.headers.get('accept')?.includes('text/event-stream')) return true;
  if (request.headers.get('accept')?.includes('text/html')) return true;
  if (STATIC_DESTINATIONS.has(request.destination)) return false;
  if (url.pathname.startsWith('/_next/static/')) return false;
  return true;
};

self.addEventListener('fetch', (event) => {
  if (shouldQueueChatRequest(event.request)) {
    event.respondWith(queueChatFetch(event.request.clone()));
    return;
  }

  if (shouldBypass(event.request)) {
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      const fetchPromise = fetch(event.request)
        .then((networkResponse) => {
          const responseClone = networkResponse.clone();
          caches.open(CACHE_VERSION).then((cache) => cache.put(event.request, responseClone)).catch(() => {});
          return networkResponse;
        })
        .catch(() => cachedResponse);
      return cachedResponse || fetchPromise;
    })
  );
});

const QUEUE_DB_NAME = 'llc-chat-queue';
const QUEUE_STORE_NAME = 'messages';
const QUEUE_DB_VERSION = 1;
const SYNC_TAG = 'chat-sync';

const openQueueDB = () => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(QUEUE_DB_NAME, QUEUE_DB_VERSION);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(QUEUE_STORE_NAME)) {
        db.createObjectStore(QUEUE_STORE_NAME, { keyPath: 'id', autoIncrement: true });
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
};

const withQueueStore = async (mode, callback) => {
  const db = await openQueueDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(QUEUE_STORE_NAME, mode);
    const store = tx.objectStore(QUEUE_STORE_NAME);
    try {
      callback(store);
    } catch (err) {
      reject(err);
    }
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
};

const storeQueuedMessage = async (payload) => {
  await withQueueStore('readwrite', store => {
    store.add({
      payload,
      timestamp: Date.now()
    });
  });
};

const readQueuedMessages = async () => {
  const db = await openQueueDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(QUEUE_STORE_NAME, 'readonly');
    const store = tx.objectStore(QUEUE_STORE_NAME);
    const request = store.getAll();
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
};

const removeQueuedMessage = async (id) => {
  await withQueueStore('readwrite', store => {
    store.delete(id);
  });
};

const queueChatMessage = async (payload) => {
  await storeQueuedMessage(payload);
  if (self.registration.sync) {
    try {
      await self.registration.sync.register(SYNC_TAG);
    } catch (err) {
      console.warn('[SW] Failed to register chat-sync', err);
    }
  }
};

const flushQueue = async () => {
  try {
    const entries = await readQueuedMessages();
    for (const entry of entries) {
      const response = await fetch('/api/chat/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(entry.payload)
      });
      if (response.ok) {
        await removeQueuedMessage(entry.id);
      } else {
        console.warn('[SW] chat queue flush failed, status', response.status);
        break;
      }
    }
  } catch (error) {
    console.warn('[SW] flushQueue error', error);
  }
};

self.addEventListener('message', (event) => {
  if (!event.data) return;
  if (event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  } else if (event.data.type === 'queue-chat-message' && event.data.payload) {
    queueChatMessage(event.data.payload);
  }
});

self.addEventListener('sync', (event) => {
  if (event.tag === SYNC_TAG) {
    event.waitUntil(flushQueue());
  }
});
