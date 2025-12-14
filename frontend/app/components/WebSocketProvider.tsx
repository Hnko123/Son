'use client'

import React, { createContext, useContext, useEffect, useState, useRef, useCallback } from 'react'

// Dynamic import for socket.io-client
let io: any = null
if (typeof window !== 'undefined') {
  try {
    io = require('socket.io-client').io
  } catch (e) {
    // Fallback - socket unavailable
    console.warn('Socket.io not available, using fallback')
  }
}

interface Notification {
  id: number | string
  title: string
  message: string
  type: string
  data: Record<string, any> | null
  relatedId?: number | null
  timestamp: Date
  read: boolean
}

interface ChatMessageData {
  id: number
  sender: string
  sender_id?: number | null
  recipient_id?: number | null
  text: string
  time: string
  isOwn?: boolean
  isDirect?: boolean
}

interface ActivityEntry {
  id: number
  actor_name?: string | null
  action: string
  description: string
  entity_type?: string | null
  entity_id?: number | null
  metadata?: Record<string, unknown> | null
  created_at: string
}

export interface OnlinePresenceSource {
  session_id?: string
  client_type?: string | null
  state?: string | null
  last_seen?: string | null
  app_state?: string | null
  active_page?: string | null
}

export interface OnlineUser {
  id: number
  username: string
  full_name?: string | null
  avatar?: string | null
  last_active?: string | null
  client_types?: string[]
  presence_summary?: string | null
  is_online?: boolean
  presence?: OnlinePresenceSource[]
}

type TypingUser = {
  userId: number
  displayName: string
  expiresAt: number
}

interface ReadReceipt {
  messageId: number
  readerId: number
  readerName: string
}

interface WebSocketContextValue {
  socket: any
  isConnected: boolean
  notifications: Notification[]
  markNotificationRead: (notificationId: number | string) => void
  clearNotifications: () => void
  getUnreadCount: () => number
  // Chat popup functionality
  showChatPopup: boolean
  setShowChatPopup: (show: boolean) => void
  latestChatMessage: ChatMessageData | null
  latestDirectChatMessage: ChatMessageData | null
  latestActivityEntry: ActivityEntry | null
  onlineUsers: OnlineUser[]
  openDirectChat: (user: OnlineUser) => void
  closeDirectChat: (windowId: string) => void
  directChatWindows: DirectChatWindowState[]
  typingUsers: TypingUser[]
  readReceipts: ReadReceipt[]
  notifyTyping: (payload: Partial<{ recipient_id?: number | null }>) => void
  notifyRead: (payload: { message_id: number }) => void
  connectionAlert: { message: string; severity: 'info' | 'warning' | 'error' } | null
  realtimeEnabled: boolean
  socketReady: boolean
  latestOrdersEvent: SocketUpdateMessage | null
  ordersEventVersion: number
  latestTasksEvent: SocketUpdateMessage | null
  tasksEventVersion: number
}

interface SocketUpdateMessage<T = Record<string, any>> {
  event: string
  payload: T | null
  receivedAt: number
}

interface DirectChatWindowState {
  id: string
  recipient: OnlineUser
}

// Create WebSocket context
const WebSocketContext = createContext<WebSocketContextValue | null>(null)
const AUTH_TOKEN_EVENT = 'auth-token-updated'
const TOKEN_REFRESH_HEADROOM_MS = 2 * 60 * 1000
const MIN_TOKEN_REFRESH_INTERVAL_MS = 30 * 1000
const ENABLE_WEBSOCKETS = process.env.NEXT_PUBLIC_ENABLE_WEBSOCKETS === 'true'
const SOCKET_PATH = process.env.NEXT_PUBLIC_WEBSOCKET_PATH || '/socket.io'
const SOCKET_URL = process.env.NEXT_PUBLIC_WEBSOCKET_URL
const ORDERS_SOCKET_EVENT = 'orders:update'
const TASKS_SOCKET_EVENT = 'tasks:update'
const CHAT_MESSAGE_EVENT = 'chat:message'
const CHAT_TYPING_EVENT = 'chat:typing'
const CHAT_READ_EVENT = 'chat:read'
const PRESENCE_UPDATE_EVENT = 'presence:update'
const HEALTH_PING_EVENT = 'health:ping'
const TYPING_INDICATOR_TIMEOUT_MS = 4000
const PRESENCE_UPDATE_EVENT = 'presence:update'
const HEALTH_PING_EVENT = 'health:ping'
const HEALTH_PONG_EVENT = 'health:pong'
const HEALTH_PING_INTERVAL_MS = 30000
const MAX_MISSED_PONGS = 3

const BACKEND_URL = typeof window !== 'undefined' && window.location.hostname !== 'localhost'
  ? '' // Use relative URLs in production (nginx proxy)
  : (process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:8080")

export const ACTIVE_VIEW_EVENT = 'active-view-changed'
export const ACTIVE_VIEW_STORAGE_KEY = 'active-view'
const CHAT_VIEW_ID = 'chat'
const PRESENCE_SESSION_STORAGE_KEY = 'presence-session-id'

const decodeJwtExpiry = (token: string | null): number | null => {
  if (typeof window === 'undefined' || !token) return null
  const parts = token.split('.')
  if (parts.length < 2) return null
  try {
    const normalized = parts[1].replace(/-/g, '+').replace(/_/g, '/')
    const padLength = normalized.length % 4
    const padded = normalized + (padLength === 0 ? '' : '='.repeat(4 - padLength))
    const decoded = window.atob(padded)
    const payload = JSON.parse(decoded)
    return typeof payload?.exp === 'number' ? payload.exp : null
  } catch (error) {
    console.warn('Failed to decode token expiry', error)
    return null
  }
}

const generatePresenceSessionId = () => {
  if (typeof window !== 'undefined' && window.crypto?.randomUUID) {
    return window.crypto.randomUUID()
  }
  return `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`
}

interface WebSocketProviderProps {
  children: React.ReactNode
}

export function WebSocketProvider({ children }: WebSocketProviderProps) {
  const [socket, setSocket] = useState<any>(null)
  const [isConnected, setIsConnected] = useState(false)
  const [notifications, setNotifications] = useState<Notification[]>([])
  const [authTokenVersion, setAuthTokenVersion] = useState(0)
  const [onlineUsers, setOnlineUsers] = useState<OnlineUser[]>([])
  const [directChatWindows, setDirectChatWindows] = useState<DirectChatWindowState[]>([])
  const [latestDirectChatMessage, setLatestDirectChatMessage] = useState<ChatMessageData | null>(null)

  // Chat popup functionality
  const [showChatPopup, setShowChatPopup] = useState(false)
  const [latestChatMessage, setLatestChatMessage] = useState<ChatMessageData | null>(null)
  const [latestActivityEntry, setLatestActivityEntry] = useState<ActivityEntry | null>(null)
  const currentUserRef = useRef<{ id: number | null; username: string }>({ id: null, username: '' })
  const lastGeneralCountRef = useRef(0)
  const lastDirectCountRef = useRef(0)
  const generalMessagesInitializedRef = useRef(false)
  const directMessagesInitializedRef = useRef(false)
  const socketRef = useRef<any>(null)
  const [latestOrdersEvent, setLatestOrdersEvent] = useState<SocketUpdateMessage | null>(null)
  const [latestTasksEvent, setLatestTasksEvent] = useState<SocketUpdateMessage | null>(null)
  const [ordersEventVersion, setOrdersEventVersion] = useState(0)
  const [tasksEventVersion, setTasksEventVersion] = useState(0)
  const presenceSessionIdRef = useRef<string | null>(null)
  const previousNotificationIdsRef = useRef<Set<string>>(new Set())
  const assignmentSoundTypes = useRef(new Set(['task_assigned', 'event_assigned', 'weekly_entry_assigned']))
  const tokenRefreshTimeoutRef = useRef<number | null>(null)
  const refreshAttemptedRef = useRef(false)
  const chatViewActiveRef = useRef(false)
  const missedPongRef = useRef(0)
  const keepaliveIntervalRef = useRef<number | null>(null)
  const [typingUsers, setTypingUsers] = useState<TypingUser[]>([])
  const [readReceipts, setReadReceipts] = useState<ReadReceipt[]>([])
  const typingCleanupIntervalRef = useRef<number | null>(null)
  const lastTypingSentRef = useRef<number>(0)
  const [connectionAlert, setConnectionAlert] = useState<{ message: string; severity: 'info' | 'warning' | 'error' } | null>(null)

  const getAuthHeaders = useCallback(() => {
    if (typeof window === 'undefined') return {}
    const token = localStorage.getItem('access_token')
    return token ? { Authorization: `Bearer ${token}` } : {}
  }, [])

  const makeJsonHeaders = useCallback((additional: Record<string, string | undefined> = {}) => {
    return Object.fromEntries(
      Object.entries({
        ...getAuthHeaders(),
        'Content-Type': 'application/json',
        ...additional
      }).filter(([, value]) => typeof value === 'string')
    ) as Record<string, string>
  }, [getAuthHeaders])

  const clearScheduledRefresh = useCallback(() => {
    if (typeof window === 'undefined') return
    if (tokenRefreshTimeoutRef.current !== null) {
      window.clearTimeout(tokenRefreshTimeoutRef.current)
      tokenRefreshTimeoutRef.current = null
    }
  }, [])

  const clearAuthState = useCallback(() => {
    if (typeof window === 'undefined') return
    window.localStorage.removeItem('access_token')
    window.localStorage.removeItem('user')
    refreshAttemptedRef.current = false
    clearScheduledRefresh()
    window.dispatchEvent(new Event(AUTH_TOKEN_EVENT))
    fetch('/api/auth/logout', { method: 'POST', credentials: 'include' }).catch(() => {})
  }, [clearScheduledRefresh])

  useEffect(() => {
    if (typingCleanupIntervalRef.current) return
    const interval = window.setInterval(() => {
      const now = Date.now()
      setTypingUsers(prev => {
        const filtered = prev.filter(entry => entry.expiresAt > now)
        return filtered.length === prev.length ? prev : filtered
      })
    }, 1000)
    typingCleanupIntervalRef.current = interval
    return () => {
      window.clearInterval(interval)
      typingCleanupIntervalRef.current = null
    }
  }, [])

  const notifyTyping = useCallback((payload: Partial<{ recipient_id?: number | null }> = {}) => {
    if (!socket?.connected) return
    const now = Date.now()
    if (now - lastTypingSentRef.current < 1200) return
    socket.emit(CHAT_TYPING_EVENT, payload)
    lastTypingSentRef.current = now
  }, [socket])

  const notifyRead = useCallback((payload: { message_id: number }) => {
    if (!socket?.connected) return
    socket.emit(CHAT_READ_EVENT, payload)
  }, [socket])

  const showConnectionAlert = useCallback((message: string, severity: 'info' | 'warning' | 'error' = 'warning') => {
    setConnectionAlert({ message, severity })
  }, [])

  useEffect(() => {
    if (!connectionAlert) return
    const timeout = window.setTimeout(() => {
      setConnectionAlert(null)
    }, 6000)
    return () => window.clearTimeout(timeout)
  }, [connectionAlert])

  const hasAuthToken = () => {
    if (typeof window === 'undefined') return false
    return Boolean(localStorage.getItem('access_token'))
  }

  const ensurePresenceSessionId = useCallback(() => {
    if (presenceSessionIdRef.current) return presenceSessionIdRef.current
    if (typeof window === 'undefined') return null
    try {
      const storage = window.sessionStorage || window.localStorage
      let existing = storage.getItem(PRESENCE_SESSION_STORAGE_KEY)
      if (!existing) {
        existing = generatePresenceSessionId()
        storage.setItem(PRESENCE_SESSION_STORAGE_KEY, existing)
      }
      presenceSessionIdRef.current = existing
      return existing
    } catch (error) {
      console.warn('Presence session id storage failed', error)
      const fallback = generatePresenceSessionId()
      presenceSessionIdRef.current = fallback
      return fallback
    }
  }, [])

  const buildPresencePayload = useCallback((status: 'online' | 'offline' = 'online') => {
    if (typeof window === 'undefined') return null
    const sessionId = ensurePresenceSessionId()
    if (!sessionId) return null
    const activePage = (() => {
      try {
        return window.location?.pathname
      } catch {
        return undefined
      }
    })()
    const appState = typeof document !== 'undefined' ? document.visibilityState : undefined
    return {
      session_id: sessionId,
      client_type: 'browser',
      status,
      active_page: activePage,
      app_state: appState
    }
  }, [ensurePresenceSessionId])

  const refreshAccessToken = useCallback(async ({ silent }: { silent?: boolean } = {}) => {
    if (typeof window === 'undefined') return false
    const hadToken = Boolean(window.localStorage.getItem('access_token'))
    try {
      const response = await fetch('/api/auth/refresh', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      if (!response.ok) {
        if (response.status === 401 && hadToken) {
          clearAuthState()
        }
        return false
      }
      const data = await response.json()
      if (data?.access_token) {
        window.localStorage.setItem('access_token', data.access_token)
        window.dispatchEvent(new Event(AUTH_TOKEN_EVENT))
        refreshAttemptedRef.current = false
        return true
      }
      return false
    } catch (error) {
      if (!silent) {
        console.warn('Token refresh failed', error)
      }
      return false
    }
  }, [clearAuthState])

  const playNotificationTone = useCallback((preset: 'chat' | 'assignment') => {
    if (typeof window === 'undefined') return
    const AudioCtx = (window.AudioContext || (window as any).webkitAudioContext)
    if (!AudioCtx) return
    try {
      const ctx = new AudioCtx()
      const frequencies = preset === 'chat' ? [880, 660] : [520, 640, 420]
      frequencies.forEach((frequency, idx) => {
        const osc = ctx.createOscillator()
        const gain = ctx.createGain()
        osc.type = preset === 'chat' ? 'sine' : 'triangle'
        osc.frequency.value = frequency
        const start = ctx.currentTime + idx * 0.12
        const end = start + 0.18
        gain.gain.setValueAtTime(0.0001, start)
        gain.gain.exponentialRampToValueAtTime(0.25, start + 0.02)
        gain.gain.exponentialRampToValueAtTime(0.0001, end)
        osc.connect(gain)
        gain.connect(ctx.destination)
        osc.start(start)
        osc.stop(end)
      })
    } catch (error) {
      console.warn('Notification tone failed', error)
    }
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') return

    const handleTokenChange = () => {
      setAuthTokenVersion(prev => prev + 1)
    }

    window.addEventListener('focus', handleTokenChange)
    window.addEventListener('storage', handleTokenChange)
    window.addEventListener(AUTH_TOKEN_EVENT, handleTokenChange as EventListener)
    handleTokenChange()

    return () => {
      window.removeEventListener('focus', handleTokenChange)
      window.removeEventListener('storage', handleTokenChange)
      window.removeEventListener(AUTH_TOKEN_EVENT, handleTokenChange as EventListener)
    }
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.localStorage.getItem('access_token')) return
    if (refreshAttemptedRef.current) return
    refreshAttemptedRef.current = true
    refreshAccessToken({ silent: true })
  }, [refreshAccessToken])

  useEffect(() => {
    if (typeof window === 'undefined') return
    clearScheduledRefresh()
    const token = window.localStorage.getItem('access_token')
    if (!token) return
    const expiry = decodeJwtExpiry(token)
    if (!expiry) return
    const msUntilExpiry = expiry * 1000 - Date.now()
    if (msUntilExpiry <= TOKEN_REFRESH_HEADROOM_MS) {
      refreshAccessToken({ silent: true })
      return
    }
    const waitTime = Math.max(msUntilExpiry - TOKEN_REFRESH_HEADROOM_MS, MIN_TOKEN_REFRESH_INTERVAL_MS)
    tokenRefreshTimeoutRef.current = window.setTimeout(() => {
      refreshAccessToken({ silent: true })
    }, waitTime)
    return () => clearScheduledRefresh()
  }, [authTokenVersion, refreshAccessToken, clearScheduledRefresh])

  useEffect(() => {
    if (typeof window === 'undefined') return
    const syncActiveView = () => {
      try {
        const stored = window.sessionStorage?.getItem(ACTIVE_VIEW_STORAGE_KEY)
        chatViewActiveRef.current = stored === CHAT_VIEW_ID
      } catch {
        chatViewActiveRef.current = false
      }
    }
    syncActiveView()
    const handleActiveViewChange = (event: Event) => {
      const detail = (event as CustomEvent<{ view?: string }>).detail
      if (detail && typeof detail.view === 'string') {
        chatViewActiveRef.current = detail.view === CHAT_VIEW_ID
      }
    }
    window.addEventListener(ACTIVE_VIEW_EVENT, handleActiveViewChange as EventListener)
    return () => {
      window.removeEventListener(ACTIVE_VIEW_EVENT, handleActiveViewChange as EventListener)
    }
  }, [])

  useEffect(() => {
    if (!hasAuthToken()) {
      setNotifications([])
      setShowChatPopup(false)
      setLatestChatMessage(null)
      setLatestActivityEntry(null)
      generalMessagesInitializedRef.current = false
      directMessagesInitializedRef.current = false
      lastGeneralCountRef.current = 0
      lastDirectCountRef.current = 0
      presenceSessionIdRef.current = null
    }
  }, [authTokenVersion, buildPresencePayload])

  useEffect(() => {
    if (!hasAuthToken()) return
    ensurePresenceSessionId()
  }, [authTokenVersion, ensurePresenceSessionId])

  useEffect(() => {
    if (!hasAuthToken()) {
      setOnlineUsers([])
      return
    }

    let isMounted = true
    const headers = makeJsonHeaders()
    const payload = buildPresencePayload('online')

    const sendOnlinePing = async () => {
      try {
        await fetch('/api/online/ping', {
          method: 'POST',
          headers,
          body: payload ? JSON.stringify(payload) : undefined,
          keepalive: true
        })
      } catch (err) {
        console.warn('Online ping failed', err)
      }
    }

    const fetchUsersOnce = async () => {
      try {
        const response = await fetch('/api/online/users', {
          headers
        })
        if (response.status === 401) {
          clearAuthState()
          return
        }
        if (!response.ok) return
        const data: OnlineUser[] = await response.json()
        if (isMounted) {
          setOnlineUsers(data)
        }
      } catch (err) {
        console.warn('Fetching online users failed', err)
      }
    }

    fetchUsersOnce()
    sendOnlinePing()
    const interval = window.setInterval(sendOnlinePing, 20000)

    return () => {
      isMounted = false
      clearInterval(interval)
    }
  }, [authTokenVersion, buildPresencePayload])

  useEffect(() => {
    const syncCurrentUser = () => {
      if (typeof window === 'undefined') return
      try {
        const storedUser = window.localStorage.getItem('user')
        if (storedUser) {
          const parsed = JSON.parse(storedUser)
          currentUserRef.current = {
            id: parsed?.id ?? null,
            username: (parsed?.username || parsed?.full_name || '').toLowerCase()
          }
          setOnlineUsers(prev => prev.map(user => {
            if (!parsed?.id || user.id !== parsed.id) return user
            return {
              ...user,
              username: parsed.username || user.username,
              full_name: parsed.full_name || user.full_name,
              avatar: parsed.avatar ?? user.avatar
            }
          }))
        } else {
          currentUserRef.current = { id: null, username: '' }
        }
      } catch {
        currentUserRef.current = { id: null, username: '' }
      }
    }
    syncCurrentUser()
    if (typeof window !== 'undefined') {
      window.addEventListener('user-profile-updated', syncCurrentUser)
      return () => {
        window.removeEventListener('user-profile-updated', syncCurrentUser)
      }
    }
    return () => {}
  }, [authTokenVersion, setOnlineUsers])

  const openDirectChat = useCallback((user: OnlineUser) => {
    setDirectChatWindows(prev => {
      const recipientId = user.id ?? null
      if (recipientId && prev.some(window => window.recipient.id === recipientId)) {
        return prev
      }
      const windowId = recipientId ? `direct-${recipientId}` : `direct-${Date.now()}-${Math.random().toString(16).slice(2)}`
      return [...prev, { id: windowId, recipient: user }]
    })
  }, [])

  const closeDirectChat = useCallback((windowId: string) => {
    setDirectChatWindows(prev => prev.filter(window => window.id !== windowId))
  }, [])

  const notifyOffline = useCallback(() => {
    const headers = {
      ...getAuthHeaders(),
      'Content-Type': 'application/json'
    }
    if (!headers.Authorization) return
    const payload = buildPresencePayload('offline')
    fetch('/api/online/leave', {
      method: 'POST',
      headers,
      body: payload ? JSON.stringify(payload) : undefined,
      keepalive: true
    }).catch(() => {})
  }, [buildPresencePayload])

  useEffect(() => {
    if (typeof window === 'undefined') return
    const handleBeforeUnload = () => notifyOffline()
    window.addEventListener('beforeunload', handleBeforeUnload)
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload)
    }
  }, [notifyOffline])

  const destroyExistingSocket = useCallback(() => {
    if (socketRef.current) {
      try {
        socketRef.current.disconnect()
      } catch {
        // ignored
      }
      socketRef.current = null
    }
    setSocket(null)
    setIsConnected(false)
  }, [])

  // WebSocket keepalive and reconnection logic
  useEffect(() => {
    if (!ENABLE_WEBSOCKETS) {
      destroyExistingSocket()
      console.info('WebSocket connection skipped (set NEXT_PUBLIC_ENABLE_WEBSOCKETS=true to enable).')
      return
    }

    if (typeof window === 'undefined') {
      return
    }

    if (!hasAuthToken()) {
      destroyExistingSocket()
      setLatestOrdersEvent(null)
      setLatestTasksEvent(null)
      console.info('WebSocket connection waiting for authentication token.')
      return
    }

    if (!io) {
      console.warn('socket.io-client is unavailable; falling back to polling.')
      return
    }

    const token = window.localStorage.getItem('access_token')
    if (!token) {
      destroyExistingSocket()
      return
    }

    if (socketRef.current) {
      socketRef.current.disconnect()
      socketRef.current = null
    }

    const determineSocketUrl = () => {
      if (SOCKET_URL) return SOCKET_URL
      const host = window.location.hostname
      if (host === 'localhost' || host === '127.0.0.1') {
        return BACKEND_URL || 'http://localhost:8080'
      }
      // Use relative connection for production through nginx proxy
      return undefined
    }

    const targetUrl = determineSocketUrl()
    const connectionOptions = {
      path: SOCKET_PATH,
      transports: ['websocket'],
      withCredentials: true,
      reconnection: true,
      reconnectionAttempts: Infinity,
      reconnectionDelay: 1000,
      reconnectionDelayMax: 5000,
      timeout: 10000,
      auth: {
        token
      }
    }

    const socketInstance = targetUrl
      ? io(targetUrl, connectionOptions)
      : io(connectionOptions)

    socketRef.current = socketInstance
    setSocket(socketInstance)

    const handleConnect = () => {
      setIsConnected(true)
      showConnectionAlert('WebSocket bağlantısı kuruldu', 'info')
    }

    const handleDisconnect = (reason: string) => {
      setIsConnected(false)
      if (reason === 'io server disconnect') {
        socketInstance.connect()
      }
      showConnectionAlert('WebSocket bağlantısı kesildi, yeniden bağlanıyor...', 'warning')
    }

    const handleConnectError = (error: Error & { message?: string }) => {
      console.warn('WebSocket connection error:', error?.message || error)
      if ((error as any)?.message === 'unauthorized') {
        clearAuthState()
      }
      showConnectionAlert('WebSocket bağlantısı hatası yaşandı, yeniden bağlanıyor...', 'error')
    }

    const handlePresenceUpdate = (payload: { users?: OnlineUser[] }) => {
      const users = payload?.users
      if (users) {
        setOnlineUsers(users)
      }
    }

    const handleOrdersUpdate = (message: { event?: string; payload?: any }) => {
      const payload = {
        event: message?.event || ORDERS_SOCKET_EVENT,
        payload: message?.payload ?? null,
        receivedAt: Date.now()
      }
      setLatestOrdersEvent(payload)
      setOrdersEventVersion(prev => prev + 1)
    }

    const handleTasksUpdate = (message: { event?: string; payload?: any }) => {
      const payload = {
        event: message?.event || TASKS_SOCKET_EVENT,
        payload: message?.payload ?? null,
        receivedAt: Date.now()
      }
      setLatestTasksEvent(payload)
      setTasksEventVersion(prev => prev + 1)
    }

    const handleChatTyping = (payload: { sender?: string; sender_id?: number }) => {
      if (!payload?.sender || typeof payload.sender_id !== 'number') return
      setTypingUsers(prev => {
        const filtered = prev.filter(entry => entry.userId !== payload.sender_id)
        const expiresAt = Date.now() + TYPING_INDICATOR_TIMEOUT_MS
        return [...filtered, {
          userId: payload.sender_id,
          displayName: payload.sender,
          expiresAt
        }]
      })
    }

    const handleChatRead = (payload: { sender?: string; sender_id?: number; message_id?: number }) => {
      if (!payload?.sender || typeof payload.sender_id !== 'number' || typeof payload.message_id !== 'number') return
      setReadReceipts(prev => {
        const filtered = prev.filter(
          entry => !(entry.messageId === payload.message_id && entry.readerId === payload.sender_id)
        )
        const updated = [...filtered, {
          messageId: payload.message_id,
          readerId: payload.sender_id,
          readerName: payload.sender
        }]
        return updated.slice(-100)
      })
    }

    socketInstance.on('connect', handleConnect)
    socketInstance.on('disconnect', handleDisconnect)
    socketInstance.on('connect_error', handleConnectError)
    socketInstance.on(ORDERS_SOCKET_EVENT, handleOrdersUpdate)
    socketInstance.on(TASKS_SOCKET_EVENT, handleTasksUpdate)
    socketInstance.on(PRESENCE_UPDATE_EVENT, handlePresenceUpdate)
    socketInstance.on(CHAT_TYPING_EVENT, handleChatTyping)
    socketInstance.on(CHAT_READ_EVENT, handleChatRead)

    return () => {
      socketInstance.off('connect', handleConnect)
      socketInstance.off('disconnect', handleDisconnect)
      socketInstance.off('connect_error', handleConnectError)
      socketInstance.off(ORDERS_SOCKET_EVENT, handleOrdersUpdate)
      socketInstance.off(TASKS_SOCKET_EVENT, handleTasksUpdate)
      socketInstance.off(PRESENCE_UPDATE_EVENT, handlePresenceUpdate)
      socketInstance.off(CHAT_TYPING_EVENT, handleChatTyping)
      socketInstance.off(CHAT_READ_EVENT, handleChatRead)
      socketInstance.disconnect()
      if (socketRef.current === socketInstance) {
        socketRef.current = null
        setSocket(null)
        setIsConnected(false)
      }
    }
  }, [authTokenVersion, destroyExistingSocket, clearAuthState])

  useEffect(() => {
    if (!socket || typeof window === 'undefined') {
      missedPongRef.current = 0
      if (keepaliveIntervalRef.current) {
        window.clearInterval(keepaliveIntervalRef.current)
        keepaliveIntervalRef.current = null
      }
      return
    }

    const handlePong = () => {
      missedPongRef.current = 0
    }

    socket.on(HEALTH_PONG_EVENT, handlePong)

    if (!isConnected) {
      return () => {
        socket.off(HEALTH_PONG_EVENT, handlePong)
      }
    }

    const sendHealthPing = () => {
      if (!socket || !socket.connected) return
      try {
        socket.emit(HEALTH_PING_EVENT, { timestamp: Date.now() })
      } catch (error) {
        console.warn('WebSocket health ping failed:', error)
        return
      }
      missedPongRef.current += 1
      if (missedPongRef.current >= MAX_MISSED_PONGS) {
        console.warn('WebSocket keepalive missed pong responses, forcing reconnect')
        showConnectionAlert('WebSocket yanıt vermiyor, yeniden bağlanılıyor...', 'warning')
        missedPongRef.current = 0
        socket.disconnect()
      } else if (connectionAlert && connectionAlert.severity !== 'info') {
        setConnectionAlert(null)
      }
    }

    sendHealthPing()
    keepaliveIntervalRef.current = window.setInterval(sendHealthPing, HEALTH_PING_INTERVAL_MS)

    return () => {
      socket.off(HEALTH_PONG_EVENT, handlePong)
      if (keepaliveIntervalRef.current) {
        window.clearInterval(keepaliveIntervalRef.current)
        keepaliveIntervalRef.current = null
      }
    }
  }, [socket, isConnected, connectionAlert, showConnectionAlert])

  // Monitor chat messages for popup notifications
  useEffect(() => {
    if (!hasAuthToken()) {
      return
    }

    const fetchMessages = async (url: string) => {
      const headers = getAuthHeaders()
      if (!headers.Authorization) {
        return null
      }
      try {
        const response = await fetch(url, { headers })
        if (response.status === 401) {
          clearAuthState()
          return null
        }
        if (!response.ok) return null
        return response.json()
      } catch (error) {
        console.warn('Error checking for chat messages:', error)
        return null
      }
    }

    const isOwnMessage = (message: ChatMessageData) => {
      const currentUsername = currentUserRef.current?.username || ''
      return currentUsername && message.sender?.toLowerCase() === currentUsername
    }

    const processMessages = (messages: ChatMessageData[] | null, scope: 'general' | 'direct') => {
      if (!messages || !messages.length) return
      const ref = scope === 'direct' ? lastDirectCountRef : lastGeneralCountRef
      const initRef = scope === 'direct' ? directMessagesInitializedRef : generalMessagesInitializedRef
      if (!initRef.current) {
        ref.current = messages.length
        initRef.current = true
        return
      }
      if (messages.length <= ref.current) {
        ref.current = messages.length
        return
      }
      ref.current = messages.length
      const latest = messages[messages.length - 1]
      if (!latest || isOwnMessage(latest)) return
      const enriched: ChatMessageData = { ...latest, isDirect: scope === 'direct' }
      if (scope === 'direct') {
        playNotificationTone('chat')
        setLatestDirectChatMessage(enriched)
        const directRecipient: OnlineUser = {
          id: latest.sender_id ?? 0,
          username: latest.sender,
          full_name: latest.sender,
          avatar: null,
          last_active: new Date().toISOString()
        }
        openDirectChat(directRecipient)
      } else {
        if (chatViewActiveRef.current) {
          setLatestChatMessage(enriched)
          return
        }
        playNotificationTone('chat')
        setLatestChatMessage(enriched)
        setShowChatPopup(true)
      }
    }

    const checkForNewMessages = async () => {
      const generalMessages = await fetchMessages(`${BACKEND_URL}/api/chat/messages`)
      processMessages(generalMessages, 'general')

      const recipientId = currentUserRef.current?.id
      if (recipientId) {
        const directMessages = await fetchMessages(`${BACKEND_URL}/api/chat/messages?recipient_id=${recipientId}`)
        processMessages(directMessages, 'direct')
      }
    }

    checkForNewMessages()
    const interval = setInterval(checkForNewMessages, 5000)

    return () => clearInterval(interval)
  }, [authTokenVersion, playNotificationTone, openDirectChat, getAuthHeaders, clearAuthState])

  useEffect(() => {
    if (!hasAuthToken()) {
      setLatestActivityEntry(null)
      return
    }

    let isMounted = true

    const fetchLatestActivity = async () => {
      const headers = getAuthHeaders()
      if (!headers.Authorization) {
        return
      }

      try {
        const response = await fetch('/api/activity-feed?limit=1', {
          headers,
          cache: 'no-store',
        })
        if (response.status === 401) {
          clearAuthState()
          return
        }
        if (!response.ok) return
        const data: ActivityEntry[] = await response.json()
        if (!isMounted || data.length === 0) return
        const newEntry = data[0]
        setLatestActivityEntry(prev => (prev?.id === newEntry.id ? prev : newEntry))
      } catch (error) {
        console.warn('Error polling activity feed:', error)
      }
    }

    fetchLatestActivity()
    const interval = setInterval(fetchLatestActivity, 8000)
    return () => {
      isMounted = false
      clearInterval(interval)
    }
  }, [authTokenVersion, getAuthHeaders, clearAuthState])

  useEffect(() => {
    if (!hasAuthToken()) {
      setNotifications([])
      return
    }

    let isMounted = true
    const fetchNotifications = async () => {
      try {
        const response = await fetch('/api/notifications', {
          headers: makeJsonHeaders()
        })
        if (response.status === 401) {
          clearAuthState()
          return
        }
        if (!response.ok) return
        const data = await response.json()
        if (!isMounted) return
        setNotifications(
          data.map((notification: any) => ({
            id: notification.id,
            title: notification.title,
            message: notification.message,
            type: notification.type,
            data: (() => {
              if (!notification.data) return null
              try {
                return JSON.parse(notification.data)
              } catch {
                return notification.data
              }
            })(),
            relatedId: notification.related_id,
            timestamp: new Date(notification.created_at),
            read: Boolean(notification.is_read)
          }))
        )
      } catch (error) {
        console.warn('Error fetching notifications:', error)
      }
    }

    fetchNotifications()
    const interval = setInterval(fetchNotifications, 15000)
    return () => {
      isMounted = false
      clearInterval(interval)
    }
  }, [authTokenVersion, makeJsonHeaders, clearAuthState])

  useEffect(() => {
    const previous = previousNotificationIdsRef.current
    const newNotifications = notifications.filter(notification => !previous.has(String(notification.id)))
    if (newNotifications.some(notification => assignmentSoundTypes.current.has(notification.type || ''))) {
      playNotificationTone('assignment')
    }
    previousNotificationIdsRef.current = new Set(notifications.map(notification => String(notification.id)))
  }, [notifications, playNotificationTone])

  // Function to mark notification as read
  const markNotificationRead = (notificationId: number | string) => {
    setNotifications(prev =>
      prev.map(notification =>
        notification.id === notificationId
          ? { ...notification, read: true }
          : notification
      )
    )
    fetch(`/api/notifications/${notificationId}/read`, {
      method: 'PUT',
      headers: makeJsonHeaders()
    }).catch(err => console.warn('Failed to mark notification as read', err))
  }

  // Function to clear all notifications
  const clearNotifications = () => {
    const unreadIds = notifications.filter(n => !n.read).map(n => n.id)
    setNotifications([])
    unreadIds.forEach(id => {
      fetch(`/api/notifications/${id}/read`, {
        method: 'PUT',
        headers: makeJsonHeaders()
      }).catch(err => console.warn('Failed to mark notification as read', err))
    })
  }

  // Function to get unread count
  const getUnreadCount = () => {
    return notifications.filter(n => !n.read).length
  }

  const value = {
    socket,
    isConnected,
    notifications,
    markNotificationRead,
    clearNotifications,
    getUnreadCount,
    // Chat popup functionality
    showChatPopup,
    setShowChatPopup,
    latestChatMessage,
    latestDirectChatMessage,
    latestActivityEntry,
    onlineUsers,
    openDirectChat,
    closeDirectChat,
    directChatWindows,
    typingUsers,
    readReceipts,
    notifyTyping,
    notifyRead,
    connectionAlert,
    realtimeEnabled: ENABLE_WEBSOCKETS,
    socketReady: ENABLE_WEBSOCKETS && isConnected,
    latestOrdersEvent,
    ordersEventVersion,
    latestTasksEvent,
    tasksEventVersion,
  }

  return (
    <WebSocketContext.Provider value={value}>
      {children}
    </WebSocketContext.Provider>
  )
}

// Hook to use WebSocket context
export function useWebSocket() {
  const context = useContext(WebSocketContext)
  if (!context) {
    throw new Error('useWebSocket must be used within a WebSocketProvider')
  }
  return context
}
