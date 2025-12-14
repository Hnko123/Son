# Cloudflare WebSocket Enablement Checklist

Bu proje Cloudflare DNS/Proxy arkasında çalışıyor. Gerçek zamanlı chat ve sipariş güncellemelerini sağlamak için aşağıdaki adımları sırayla uygula. Aşağıdaki yönergeler sisteme doğrudan müdahale etmez, ancak prod ortamında `NEXT_PUBLIC_ENABLE_WEBSOCKETS` gibi env değişkenlerini aktif hale getirip /socket.io bağlantılarını izin verirsen websocket’ler güvenli biçimde çalışacaktır.

1. **Ortama gerekli değişkenleri ekle**
   - Üretimde kullanılan .env dosyası, Container ortamı veya Kubernetes Secret içinde şu tuple’ı tanımla:
     ```env
     NEXT_PUBLIC_ENABLE_WEBSOCKETS=true
     NEXT_PUBLIC_WEBSOCKET_URL=wss://<domain>/socket.io
     NEXT_PUBLIC_WEBSOCKET_PATH=/socket.io
     ```
   - Cloudflare proxy’li domain `wss` kullandığından `NEXT_PUBLIC_WEBSOCKET_URL`’i `https`/`wss` olacak şekilde ayarlamalısın; yoksa `WebSocketProvider` try-catch’te bağlantıyı atlar.

2. **Cloudflare’da socket route’u izinlendir**
   - Cloudflare ekranında DNS kayıtların `proxy (orange cloud)` olarak işaretli. `Page Rules` ve `Firewall` ayarlarında `/socket.io/` yolunu kapsayan özel kural ekle: `Disable Security` (WAF, Bot Fight Mode) ve `Browser Integrity Check`’i `Off`.
   - `Argo Smart Routing` eğer aktifse devre dışı bırak; Cloudflare Argo ve WebSocket’ler birlikte çalışmaz.
   - Cloudflare API (örneğin `cloudflare` CLI) ile:
     ```bash
     cfcli dns records update ...  # mgmt details (env token hazır)
     cfcli firewall rules create --expression 'http.request.uri.path contains "/socket.io"' --mode challenge
     ```
     (Token’ı kullanarak `cfcli` ya da `curl` ile Cloudflare API çağrısı yapabilirsin.)

3. **Nginx /socket.io proxy’sini doğrula**
   `backend/nginx.prod.conf`’ta `/socket.io/` bölümü `proxy_set_header Upgrade $http_upgrade;` ve `Connection "upgrade"` içeriyor. Bu blok aktif olduğundan ve Cloudflare’dan gelen `Upgrade` header’ıyla `backend`’e geçirdiğinden emin ol. Deploy sonrası Nginx’i yeniden yükle.

4. **Keepalive/reconnect uyarılarını kontrol et**
   - `WebSocketProvider` artık 30 sn’de bir `health:ping` gönderip `health:pong` bekliyor. Cloudflare bağlantı kesince `missedPong` 3’ü geçerse socket düşüyor ve yeniden bağlanıyor. Bu yüzden prod ortamında `socket.io` loglarında `Request`/`Ping`/`Pong` olaylarını izleyerek Cloudflare kesintilerini gör.
   - Cloudflare, deploy sırasında bağlantıları koparmaya meyilli; bu yüzden `health_ping` response’ları (backend `sio.event`) loglarında gör al; `socket.io` reconnection delay ayarları (1s-5s) yeterli olmalı.

5. **Chat/Notification event akışını doğrula**
   - Backend `emit_orders_update`/`emit_tasks_update` çağrılarına benzer şekilde `chat:message` gibi özel event’leri de `sio.emit` ile yayabilir. Yeni bir helper `emit_chat_message(payload)` ekle ve chat payload’larını JSON’la birlikte o event’le ilet.
   - Frontend’e `WebSocketProvider` içinde `socket.on('chat:message', handler)` ekleyerek `latestChatMessage`/`directChatWindows` gibi state’leri güncelle. Cloudflare’e gönderdiğiniz token ile `authenticate_socket_user` chat payload’ındaki `sender_id` gibi bilgileri doğrular.
   - Chat mesajlarını test etmek için iki tarayıcıda aynı kullanıcıyı açıp mesaj gönderildiğinde diğerinin anında yanıt aldığını doğrula; ihtiyaç varsa log’da sohbet event’lerini `logger.debug` ile kaydet.

6. **Deployment sonrası doğrulama**
   - Yeni sürüm landing’inde Cloudflare cache’ini temizle (Purging).
   - UI’da chat/order güncellemesi yapan iki tarayıcı aç; biri değişiklik yaparken diğerinde instant senkron olup olmadığını doğrula.
   - Service Worker (PWA) “Yeni sürüm” bildirimi yerine `SKIP_WAITING` mesajı atacak şekilde /public/sw.js’te güncelleme varsa `ServiceWorkerManager`’a yeni worker broadcast mesajı ekle.

Bu adımlar yürütüldüğünde WebSocket chat/notification altyapısı Cloudflare üzerinden güvenli biçimde çalışacaktır; MCPI erişimi sayesinde Token bazlı Cloudflare CLI (ayrı talimatla kullan) ile WAF/PageRule değişikliklerini hemen uygulayabilirsin.
