'use client'

import React, { useState, useEffect, useRef, useCallback } from 'react'
import { useWebSocket } from './WebSocketProvider'
import { motion, AnimatePresence } from 'framer-motion'
import { X, MessageCircle, Send } from 'lucide-react'

interface ChatMessageData {
  id: number
  sender: string
  text: string
  time: string
  isOwn: boolean
  imageUrl?: string | null
}

const getAuthHeaders = (): Record<string, string> => {
  if (typeof window === 'undefined') {
    return {}
  }
  const token = localStorage.getItem('access_token')
  return token ? { Authorization: `Bearer ${token}` } : {}
}

const getJsonHeaders = (): Record<string, string> => ({
  'Content-Type': 'application/json',
  ...getAuthHeaders(),
})

export default function ChatPopup() {
  const { showChatPopup, setShowChatPopup } = useWebSocket()
  const [isVisible, setIsVisible] = useState(false)
  const [newMessage, setNewMessage] = useState('')
  const [isSending, setIsSending] = useState(false)
  const [messages, setMessages] = useState<ChatMessageData[]>([])
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const popupRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState<{ x: number; y: number } | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const dragDataRef = useRef<{ pointerId: number | null; offsetX: number; offsetY: number }>({
    pointerId: null,
    offsetX: 0,
    offsetY: 0
  })
  const latestPositionRef = useRef<{ x: number; y: number } | null>(null)
  const [collapsed, setCollapsed] = useState(false)

  const headerTitle = 'Genel Mesajlar'

  useEffect(() => {
    latestPositionRef.current = position
  }, [position])

  const clampPosition = useCallback((nextX: number, nextY: number) => {
    if (typeof window === 'undefined' || !popupRef.current) {
      return { x: nextX, y: nextY }
    }
    const width = popupRef.current.offsetWidth || 320
    const height = popupRef.current.offsetHeight || 380
    const margin = 12
    const maxX = window.innerWidth - width - margin
    const maxY = window.innerHeight - height - margin
    return {
      x: Math.min(Math.max(nextX, margin), Math.max(maxX, margin)),
      y: Math.min(Math.max(nextY, margin), Math.max(maxY, margin))
    }
  }, [])

  const fetchMessages = useCallback(async () => {
    try {
      const response = await fetch(`/api/chat/messages`, {
        headers: getAuthHeaders()
      })
      if (response.ok) {
        const data = await response.json()
        const normalized = data.slice(-10).map((msg: any) => ({
          id: msg.id,
          sender: msg.sender,
          text: msg.text,
          time: msg.time,
          isOwn: msg.isOwn,
          imageUrl: msg.image_url || msg.imageUrl || null,
        }))
        setMessages(normalized)
      }
    } catch (error) {
      console.warn('Error fetching messages:', error)
    }
  }, [])

  // Fetch current messages when popup opens
  useEffect(() => {
    if (showChatPopup) {
      fetchMessages()
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }, [showChatPopup, fetchMessages])

  useEffect(() => {
    if (!isVisible || position) return
    if (typeof window === 'undefined') return
    const saved = window.localStorage.getItem('chat-popup-position')
    if (saved) {
      try {
        const parsed = JSON.parse(saved)
        setPosition(clampPosition(parsed.x ?? 0, parsed.y ?? 0))
        return
      } catch (error) {
        console.warn('Chat popup position parse failed', error)
      }
    }
    const defaultPos = clampPosition(window.innerWidth - 360, window.innerHeight - 420)
    setPosition(defaultPos)
  }, [isVisible, position, clampPosition])

  const sendMessage = async () => {
    if (!newMessage.trim() || isSending) return

    setIsSending(true)
    try {
      const response = await fetch('/api/chat/messages', {
        method: 'POST',
        headers: getJsonHeaders(),
        body: JSON.stringify({
          sender: 'You',
          text: newMessage,
          time: new Date().toLocaleTimeString(),
          isOwn: true,
          recipient_id: null
        }),
      })

      if (response.ok) {
        setNewMessage('')
        // Refresh messages
        await fetchMessages()
      } else {
        console.error('Failed to send message')
      }
    } catch (error) {
      console.error('Error sending message:', error)
    } finally {
      setIsSending(false)
    }
  }

  const closePopup = () => {
    setShowChatPopup(false)
    setMessages([])
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  // Auto scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if ((event.target as HTMLElement)?.closest('button')) return
    if (!popupRef.current) return
    if (!position && typeof window !== 'undefined') {
      const defaultPos = clampPosition(window.innerWidth - 360, window.innerHeight - 420)
      setPosition(defaultPos)
    }
    const rect = popupRef.current.getBoundingClientRect()
    dragDataRef.current = {
      pointerId: event.pointerId,
      offsetX: event.clientX - rect.left,
      offsetY: event.clientY - rect.top
    }
    setIsDragging(true)
    event.preventDefault()
  }

  useEffect(() => {
    if (!isDragging) return

    const handleMove = (event: PointerEvent) => {
      if (dragDataRef.current.pointerId !== event.pointerId) return
      const { offsetX, offsetY } = dragDataRef.current
      const next = clampPosition(event.clientX - offsetX, event.clientY - offsetY)
      setPosition(next)
    }

    const handleUp = (event: PointerEvent) => {
      if (dragDataRef.current.pointerId !== event.pointerId) return
      setIsDragging(false)
      dragDataRef.current.pointerId = null
      if (typeof window !== 'undefined' && latestPositionRef.current) {
        window.localStorage.setItem('chat-popup-position', JSON.stringify(latestPositionRef.current))
      }
    }

    window.addEventListener('pointermove', handleMove)
    window.addEventListener('pointerup', handleUp)
    window.addEventListener('pointercancel', handleUp)
    return () => {
      window.removeEventListener('pointermove', handleMove)
      window.removeEventListener('pointerup', handleUp)
      window.removeEventListener('pointercancel', handleUp)
    }
  }, [isDragging, clampPosition])

  if (!isVisible) return null

  return (
    <AnimatePresence>
      <motion.div
        ref={popupRef}
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.8, y: 20 }}
        transition={{ duration: 0.2 }}
        className="fixed z-50 overflow-hidden border rounded-lg shadow-2xl w-80 max-h-96 bg-black/90 backdrop-blur-lg border-white/20 cursor-default select-none"
        style={position ? { top: position.y, left: position.x } : { bottom: 16, right: 16 }}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between p-3 border-b border-white/10 cursor-move active:cursor-grabbing"
          onPointerDown={handlePointerDown}
        >
          <div className="flex items-center gap-2">
            <MessageCircle className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-white">{headerTitle}</span>
          </div>
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={() => setCollapsed(prev => !prev)}
              className="p-1 transition-colors rounded hover:bg-white/10 text-white"
              title={collapsed ? 'Pop-up penceresini aç' : 'Pop-up penceresini küçült'}
            >
              {collapsed ? '▢' : '−'}
            </button>
            <button
              onClick={closePopup}
              className="p-1 transition-colors rounded hover:bg-white/10"
              title="Close chat popup"
            >
              <X className="w-4 h-4 text-gray-400" />
            </button>
          </div>
        </div>

        {/* Messages */}
        {!collapsed && (
          <div className="p-3 space-y-2 overflow-y-auto max-h-64">
            {messages.length === 0 ? (
              <div className="py-4 text-sm text-center text-gray-400">
                No messages yet
              </div>
            ) : (
              messages.map((message) => (
                <div key={message.id} className={`flex ${message.isOwn ? 'justify-end' : 'justify-start'}`}>
                  <div
                    className={`max-w-[70%] px-3 py-2 rounded-lg text-sm ${
                      message.isOwn
                        ? 'bg-blue-600/80 text-white'
                        : 'bg-white/10 text-white/90'
                    }`}
                  >
                    <div className="mb-1 text-xs font-medium">{message.sender}</div>
                    {!message.imageUrl && <div>{message.text}</div>}
                    {message.imageUrl && (
                      <div className="mt-1 text-xs flex items-center gap-1 opacity-80">
                        <span>🖼</span>
                        <span>Görsel eklendi</span>
                      </div>
                    )}
                    <div className="mt-1 text-xs opacity-70">{message.time}</div>
                  </div>
                </div>
              ))
            )}
            <div ref={messagesEndRef} />
          </div>
        )}

        {/* Input */}
        {!collapsed && (
          <div className="p-3 border-t border-white/10">
            <div className="flex gap-2">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 text-sm text-white border rounded-lg bg-white/5 border-white/20 focus:bg-white/10 focus:border-white/40 focus:outline-none"
                disabled={isSending}
              />
              <button
                onClick={sendMessage}
                disabled={!newMessage.trim() || isSending}
                className="flex items-center gap-2 px-3 py-2 transition-colors rounded-lg bg-blue-600/80 hover:bg-blue-600/90 disabled:bg-gray-600/50 disabled:cursor-not-allowed"
                title="Send message"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  )
}
