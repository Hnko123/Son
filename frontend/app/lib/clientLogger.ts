type LogPayload = {
  level: string
  message: string
  stack?: string | null
  url?: string
  user_agent?: string
  extra?: Record<string, unknown>
}

const CLIENT_LOG_ENDPOINT = '/api/client-logs'
let initialized = false

const postLog = (payload: LogPayload) => {
  try {
    if (navigator.sendBeacon) {
      const blob = new Blob([JSON.stringify(payload)], {
        type: 'application/json',
      })
      navigator.sendBeacon(CLIENT_LOG_ENDPOINT, blob)
      return
    }
    void fetch(CLIENT_LOG_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
      keepalive: true,
      credentials: 'include',
    })
  } catch (err) {
    // Swallow errors to avoid recursive logging
    console.debug('clientLogger failed', err)
  }
}

const buildPayload = (partial: Partial<LogPayload>): LogPayload => ({
  level: partial.level || 'error',
  message: partial.message || 'Unknown client error',
  stack: partial.stack,
  url: partial.url || (typeof window !== 'undefined' ? window.location.href : undefined),
  user_agent: navigator.userAgent,
  extra: partial.extra,
})

export const initClientLogger = () => {
  if (initialized || typeof window === 'undefined') return
  if (process.env.NEXT_PUBLIC_ENABLE_CLIENT_LOGS === '0') return
  initialized = true

  window.addEventListener('error', (event) => {
    if (!event.message) return
    postLog(
      buildPayload({
        message: event.message,
        stack: event.error?.stack || event.filename,
        extra: {
          lineno: event.lineno,
          colno: event.colno,
        },
      })
    )
  })

  window.addEventListener('unhandledrejection', (event) => {
    const reason = event.reason || {}
    const message =
      typeof reason === 'string'
        ? reason
        : reason?.message || 'Unhandled promise rejection'
    postLog(
      buildPayload({
        message,
        stack: reason?.stack,
        extra: {
          reason: typeof reason === 'object' ? reason : undefined,
        },
      })
    )
  })

  const originalConsoleError = console.error
  console.error = (...args: unknown[]) => {
    try {
      postLog(
        buildPayload({
          level: 'error',
          message: args.map((arg) => String(arg)).join(' '),
          extra: {
            console: true,
          },
        })
      )
    } catch {
      // ignore
    }
    originalConsoleError(...args)
  }
}
