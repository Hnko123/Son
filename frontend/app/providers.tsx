'use client'

import React, { useEffect, useMemo, useRef, useState } from 'react'
import { SessionProvider } from 'next-auth/react'
import { initClientLogger } from './lib/clientLogger'

const canUseServiceWorker = () =>
  typeof window !== 'undefined' && 'serviceWorker' in navigator

function ServiceWorkerManager() {
  const [updateAvailable, setUpdateAvailable] = useState(false)
  const [registrationError, setRegistrationError] = useState<string | null>(null)
  const waitingWorkerRef = useRef<ServiceWorker | null>(null)
  const shouldReloadRef = useRef(false)

  useEffect(() => {
    if (!canUseServiceWorker()) return
    const isSecure =
      window.location.protocol === 'https:' || window.location.hostname === 'localhost'
    if (!isSecure) return

    let isMounted = true

    const handleControllerChange = () => {
      if (shouldReloadRef.current) {
        window.location.reload()
      }
    }

    navigator.serviceWorker.addEventListener('controllerchange', handleControllerChange)

    navigator.serviceWorker
      .register('/sw.js')
      .then((reg) => {
        if (!isMounted) return
        if (reg.waiting) {
          waitingWorkerRef.current = reg.waiting
          setUpdateAvailable(true)
        }
        reg.addEventListener('updatefound', () => {
          const installer = reg.installing
          if (!installer) return
          installer.addEventListener('statechange', () => {
            if (
              installer.state === 'installed' &&
              navigator.serviceWorker.controller
            ) {
              waitingWorkerRef.current = installer
              setUpdateAvailable(true)
            }
          })
        })
      })
      .catch((error) => {
        console.warn('Service worker registration failed', error)
        if (isMounted) {
          setRegistrationError('Servis çalışanı kaydı başarısız oldu.')
        }
      })

    return () => {
      isMounted = false
      navigator.serviceWorker.removeEventListener('controllerchange', handleControllerChange)
    }
  }, [])

  const handleReload = () => {
    const waitingWorker = waitingWorkerRef.current
    if (waitingWorker) {
      shouldReloadRef.current = true
      waitingWorker.postMessage({ type: 'SKIP_WAITING' })
      setUpdateAvailable(false)
    }
  }

  const showBanner = useMemo(
    () => updateAvailable || Boolean(registrationError),
    [updateAvailable, registrationError]
  )

  if (!showBanner) return null

  return (
    <div className="fixed bottom-4 right-4 z-[1000] flex flex-col gap-2">
      {updateAvailable && (
        <div className="flex items-center gap-3 rounded-2xl border border-white/20 bg-black/80 px-4 py-3 text-sm text-white shadow-xl shadow-purple-900/40">
          <span>Yeni sürüm hazır. Devam etmek için yenile.</span>
          <button
            type="button"
            onClick={handleReload}
            className="rounded-full bg-purple-500 px-3 py-1 text-xs font-semibold text-white hover:bg-purple-400"
          >
            Yenile
          </button>
        </div>
      )}
      {registrationError && (
        <div className="rounded-2xl border border-red-400/40 bg-red-500/20 px-4 py-3 text-xs text-red-100 shadow-lg">
          {registrationError}
        </div>
      )}
    </div>
  )
}

export function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    initClientLogger()
  }, [])

  return (
    <SessionProvider>
      <ServiceWorkerManager />
      {children}
    </SessionProvider>
  )
}
