'use client'

import React, { useEffect, useRef, useState } from 'react'
import { Bell, BellRing, Check } from 'lucide-react'
import { Button } from '../../components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card'
import { useWebSocket } from './WebSocketProvider'

interface NotificationItem {
  id: string | number
  title: string
  message: string
  timestamp: Date | number
  read: boolean
  type?: string
  data?: Record<string, any> | null
  relatedId?: number | null
}

export function NotificationBell() {
  const { notifications, markNotificationRead, clearNotifications, getUnreadCount, openDirectChat } = useWebSocket()
  const [isOpen, setIsOpen] = useState(false)
  const [position, setPosition] = useState<{ x: number; y: number } | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const dragDataRef = useRef<{ pointerId: number | null; offsetX: number; offsetY: number }>({
    pointerId: null,
    offsetX: 0,
    offsetY: 0
  })
  const containerRef = useRef<HTMLDivElement>(null)
  const unreadCount = getUnreadCount()
  const previousUnreadRef = useRef(0)
  const latestPositionRef = useRef<{ x: number; y: number } | null>(null)

  useEffect(() => {
    latestPositionRef.current = position
  }, [position])

  const clampPosition = (nextX: number, nextY: number) => {
    if (typeof window === 'undefined' || !containerRef.current) {
      return { x: nextX, y: nextY }
    }
    const width = containerRef.current.offsetWidth || 80
    const height = containerRef.current.offsetHeight || 80
    const margin = 12
    const maxX = window.innerWidth - width - margin
    const maxY = window.innerHeight - height - margin
    return {
      x: Math.min(Math.max(nextX, margin), Math.max(maxX, margin)),
      y: Math.min(Math.max(nextY, margin), Math.max(maxY, margin))
    }
  }

  useEffect(() => {
    if (typeof window === 'undefined') return
    const saved = window.localStorage.getItem('notification-bell-position')
    if (saved) {
      try {
        const parsed = JSON.parse(saved)
        setPosition(clampPosition(parsed.x ?? 0, parsed.y ?? 0))
        return
      } catch (error) {
        console.warn('Failed to parse notification bell position', error)
      }
    }
    const defaultPos = clampPosition(window.innerWidth - 96, window.innerHeight - 120)
    setPosition(defaultPos)
  }, [])

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!containerRef.current) return
    containerRef.current.setPointerCapture(event.pointerId)
    const rect = containerRef.current.getBoundingClientRect()
    dragDataRef.current = {
      pointerId: event.pointerId,
      offsetX: event.clientX - rect.left,
      offsetY: event.clientY - rect.top
    }
    setIsDragging(true)
  }

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return
    const { offsetX, offsetY } = dragDataRef.current
    const next = clampPosition(event.clientX - offsetX, event.clientY - offsetY)
    setPosition(next)
  }

  const handlePointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging || !containerRef.current) return
    containerRef.current.releasePointerCapture(event.pointerId)
    setIsDragging(false)
    if (typeof window !== 'undefined' && latestPositionRef.current) {
      window.localStorage.setItem('notification-bell-position', JSON.stringify(latestPositionRef.current))
    }
  }

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (unreadCount > previousUnreadRef.current) {
      try {
        const AudioCtx = window.AudioContext || (window as any).webkitAudioContext
        if (AudioCtx) {
          const ctx = new AudioCtx()
          const oscillator = ctx.createOscillator()
          const gain = ctx.createGain()
          oscillator.type = 'triangle'
          oscillator.frequency.value = 920
          gain.gain.setValueAtTime(0.0001, ctx.currentTime)
          gain.gain.exponentialRampToValueAtTime(0.25, ctx.currentTime + 0.01)
          gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.4)
          oscillator.connect(gain)
          gain.connect(ctx.destination)
          oscillator.start()
          oscillator.stop(ctx.currentTime + 0.4)
        }
      } catch (error) {
        console.warn('Notification sound failed', error)
      }
    }
    previousUnreadRef.current = unreadCount
  }, [unreadCount])

  const handleMarkRead = (notificationId: string | number) => {
    markNotificationRead(notificationId)
  }

  const handleClearAll = () => {
    if (confirm('Are you sure you want to clear all notifications?')) {
      clearNotifications()
    }
  }

  const formatTime = (timestamp: number) => {
    return new Intl.RelativeTimeFormat('en', { numeric: 'auto' }).format(
      Math.round((timestamp - Date.now()) / (1000 * 60)),
      'minute'
    )
  }

  const handleChatNotification = (notification: NotificationItem) => {
    const payload = notification.data || {}
    const senderId = payload.sender_id ?? payload.senderId
    if (!senderId) {
      return
    }
    const senderName = payload.sender || payload.sender_username || `User ${senderId}`
    openDirectChat({
      id: senderId,
      username: senderName,
      full_name: senderName,
      avatar: null,
      last_active: new Date().toISOString()
    })
    markNotificationRead(notification.id)
    setIsOpen(false)
  }

  const floatingStyle = position
    ? { top: position.y, left: position.x }
    : { bottom: 24, right: 24 }

  return (
    <div
      ref={containerRef}
      className="fixed z-[1000] cursor-grab active:cursor-grabbing select-none"
      style={floatingStyle}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
    >
      {/* Notification Bell Button */}
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        className="relative rounded-full h-9 w-9 hover:bg-gray-100 dark:hover:bg-gray-800"
      >
        {unreadCount > 0 ? (
          <>
            <BellRing className="w-5 h-5 text-orange-500" />
            <span className="absolute flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full -top-1 -right-1">
              {unreadCount > 99 ? '99+' : unreadCount}
            </span>
          </>
        ) : (
          <Bell className="w-5 h-5 text-gray-500" />
        )}
      </Button>

      {/* Notifications Dropdown */}
      {isOpen && (
        <Card className="absolute right-0 z-50 mt-2 bg-white border border-gray-200 shadow-xl w-80 dark:border-gray-700 dark:bg-gray-800 max-h-96">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">
                Notifications
                {unreadCount > 0 && (
                  <span className="ml-2 text-sm font-normal text-gray-600 dark:text-gray-400">
                    ({unreadCount} unread)
                  </span>
                )}
              </CardTitle>
              {notifications.length > 0 && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleClearAll}
                  className="text-xs text-red-600 h-7 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-950"
                >
                  Clear All
                </Button>
              )}
            </div>
          </CardHeader>
          <CardContent className="overflow-y-auto max-h-80">
            {notifications.length === 0 ? (
              <div className="py-8 text-center text-gray-500">
                <Bell className="w-8 h-8 mx-auto mb-2 opacity-50" />
                <p className="text-sm">No notifications yet</p>
              </div>
            ) : (
              <div className="space-y-2">
                {notifications.map((notification: NotificationItem) => {
                  const isChatMessage = notification.type === 'chat_message'
                  const timestampValue = notification.timestamp instanceof Date
                    ? notification.timestamp.getTime()
                    : notification.timestamp
                  return (
                    <div
                      key={notification.id}
                      className={`p-3 rounded-lg border transition-all ${
                        notification.read
                          ? 'bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-700 opacity-75'
                          : 'bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800'
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4 className={`text-sm font-medium ${
                            notification.read ? 'text-gray-700 dark:text-gray-300' : 'text-gray-900 dark:text-gray-100'
                          }`}>
                            {notification.title}
                          </h4>
                          <p className="mt-1 text-xs text-gray-600 dark:text-gray-400">
                            {notification.message}
                          </p>
                          <span className="inline-block mt-1 text-xs text-gray-500 dark:text-gray-500">
                            {formatTime(timestampValue)}
                          </span>
                          {isChatMessage && (
                            <button
                              type="button"
                              onClick={() => handleChatNotification(notification)}
                              className="inline-flex items-center mt-2 text-xs font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-300"
                            >
                              Open chat
                            </button>
                          )}
                        </div>

                        {!notification.read && (
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleMarkRead(notification.id)}
                            className="w-6 h-6 p-0 ml-2 text-green-600 hover:text-green-700 hover:bg-green-50 dark:hover:bg-green-950"
                          >
                            <Check className="w-3 h-3" />
                          </Button>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {/* Overlay to close dropdown */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  )
}
