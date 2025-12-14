"use client";

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageCircle, Send } from 'lucide-react';
import { type OnlineUser } from './WebSocketProvider';

interface DirectMessage {
  id: number;
  sender: string;
  text: string;
  time: string;
  isOwn: boolean;
  imageUrl?: string | null;
}

interface DirectChatWindowProps {
  windowId: string;
  recipient: OnlineUser;
  onClose: (id: string) => void;
  offsetIndex: number;
}

const getAuthHeaders = (): Record<string, string> => {
  if (typeof window === 'undefined') {
    return {};
  }
  const token = localStorage.getItem('access_token');
  return token ? { Authorization: `Bearer ${token}` } : {};
};

const getJsonHeaders = (): Record<string, string> => ({
  'Content-Type': 'application/json',
  ...getAuthHeaders(),
});

const getCurrentUsername = () => {
  if (typeof window === 'undefined') return '';
  try {
    const stored = window.localStorage.getItem('user');
    if (stored) {
      const parsed = JSON.parse(stored);
      return (parsed?.username || parsed?.full_name || '').toLowerCase();
    }
  } catch (error) {
    console.warn('Unable to parse current user info for direct chat', error);
  }
  return '';
};

const DirectChatWindow: React.FC<DirectChatWindowProps> = ({
  windowId,
  recipient,
  onClose,
  offsetIndex,
}) => {
  const [messages, setMessages] = useState<DirectMessage[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const popupRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<{ x: number; y: number } | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const dragDataRef = useRef<{ pointerId: number | null; offsetX: number; offsetY: number }>({
    pointerId: null,
    offsetX: 0,
    offsetY: 0,
  });
  const latestPositionRef = useRef<{ x: number; y: number } | null>(null);
  const storageKey = `direct-chat-popup-position-${windowId}`;
  const currentUsername = useRef<string>(getCurrentUsername());

  useEffect(() => {
    latestPositionRef.current = position;
  }, [position]);

  const clampPosition = useCallback((nextX: number, nextY: number) => {
    if (typeof window === 'undefined' || !popupRef.current) {
      return { x: nextX, y: nextY };
    }
    const width = popupRef.current.offsetWidth || 320;
    const height = popupRef.current.offsetHeight || 380;
    const margin = 12;
    const maxX = window.innerWidth - width - margin;
    const maxY = window.innerHeight - height - margin;
    return {
      x: Math.min(Math.max(nextX, margin), Math.max(maxX, margin)),
      y: Math.min(Math.max(nextY, margin), Math.max(maxY, margin)),
    };
  }, []);

  const fetchMessages = useCallback(async () => {
    if (!recipient?.id) return;
    try {
      const response = await fetch(`/api/chat/messages?recipient_id=${recipient.id}`, {
        headers: getAuthHeaders(),
      });
      if (response.ok) {
        const data = await response.json();
        const normalized = data.slice(-40).map((msg: any) => ({
          id: msg.id,
          sender: msg.sender,
          text: msg.text,
          time: msg.time,
          isOwn: (msg.sender || '').toLowerCase() === currentUsername.current,
          imageUrl: msg.image_url || msg.imageUrl || null,
        }));
        setMessages(normalized);
      }
    } catch (error) {
      console.warn('Error fetching direct messages:', error);
    }
  }, [recipient]);

  useEffect(() => {
    if (!recipient?.id) return;
    fetchMessages();
    const interval = window.setInterval(fetchMessages, 5000);
    return () => window.clearInterval(interval);
  }, [recipient, fetchMessages]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    if (position || typeof window === 'undefined') return;
    try {
      const saved = window.localStorage.getItem(storageKey);
      if (saved) {
        const parsed = JSON.parse(saved);
        setPosition(clampPosition(parsed.x ?? 0, parsed.y ?? 0));
        return;
      }
    } catch (error) {
      console.warn('Direct chat popup position parse failed', error);
    }
    const baseX = window.innerWidth - 420 - offsetIndex * 30;
    const baseY = window.innerHeight - 420 - offsetIndex * 20;
    setPosition(clampPosition(baseX, baseY));
  }, [clampPosition, offsetIndex, position, storageKey]);

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if ((event.target as HTMLElement)?.closest('button')) return;
    if (!popupRef.current) return;
    const rect = popupRef.current.getBoundingClientRect();
    dragDataRef.current = {
      pointerId: event.pointerId,
      offsetX: event.clientX - rect.left,
      offsetY: event.clientY - rect.top,
    };
    setIsDragging(true);
    event.preventDefault();
  };

  useEffect(() => {
    if (!isDragging) return;

    const handleMove = (event: PointerEvent) => {
      if (dragDataRef.current.pointerId !== event.pointerId) return;
      const { offsetX, offsetY } = dragDataRef.current;
      const next = clampPosition(event.clientX - offsetX, event.clientY - offsetY);
      setPosition(next);
    };

    const handleUp = (event: PointerEvent) => {
      if (dragDataRef.current.pointerId !== event.pointerId) return;
      setIsDragging(false);
      dragDataRef.current.pointerId = null;
      if (typeof window !== 'undefined' && latestPositionRef.current) {
        window.localStorage.setItem(storageKey, JSON.stringify(latestPositionRef.current));
      }
    };

    window.addEventListener('pointermove', handleMove);
    window.addEventListener('pointerup', handleUp);
    window.addEventListener('pointercancel', handleUp);
    return () => {
      window.removeEventListener('pointermove', handleMove);
      window.removeEventListener('pointerup', handleUp);
      window.removeEventListener('pointercancel', handleUp);
    };
  }, [isDragging, clampPosition, storageKey]);

  if (!recipient) {
    return null;
  }

  const recipientLabel = recipient.full_name || recipient.username || 'Kullanıcı';

  const sendMessage = async () => {
    if (!newMessage.trim() || isSending || !recipient?.id) return;
    setIsSending(true);
    try {
      const response = await fetch('/api/chat/messages', {
        method: 'POST',
        headers: getJsonHeaders(),
        body: JSON.stringify({
          text: newMessage,
          recipient_id: recipient.id,
        }),
      });
      if (response.ok) {
        setNewMessage('');
        await fetchMessages();
      } else {
        console.error('Failed to send direct message');
      }
    } catch (error) {
      console.error('Error sending direct message:', error);
    } finally {
      setIsSending(false);
    }
  };

  const closePopup = () => {
    onClose(windowId);
    setMessages([]);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        ref={popupRef}
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.8, y: 20 }}
        transition={{ duration: 0.2 }}
        className="fixed z-50 overflow-hidden border rounded-lg shadow-2xl w-80 max-h-[26rem] bg-black/90 backdrop-blur-lg border-white/20 cursor-default select-none"
        style={position ? { top: position.y, left: position.x } : { bottom: 16, right: 384 }}
      >
        <div
          className="flex items-center justify-between p-3 border-b border-white/10 cursor-move active:cursor-grabbing"
          onPointerDown={handlePointerDown}
        >
          <div className="flex items-center gap-2">
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span className="text-sm font-medium text-white">{recipientLabel}</span>
          </div>
          <button
            onClick={closePopup}
            className="p-1 transition-colors rounded hover:bg-white/10"
            title="Close chat popup"
          >
            <X className="w-4 h-4 text-gray-400" />
          </button>
        </div>

        <div className="p-3 space-y-2 overflow-y-auto max-h-64">
          {messages.length === 0 ? (
            <div className="py-6 text-xs text-center text-white/50">No messages yet</div>
          ) : (
            messages.map(message => (
              <div
                key={message.id}
                className={`flex ${message.isOwn ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[220px] rounded-2xl px-3 py-2 text-xs ${
                    message.isOwn
                      ? 'bg-emerald-500/20 text-white border border-emerald-400/30'
                      : 'bg-white/10 text-white/90 border border-white/10'
                  }`}
                >
                  {!message.isOwn && (
                    <div className="mb-1 text-[10px] uppercase tracking-wide text-white/60">
                      {message.sender}
                    </div>
                  )}
                  <div className="leading-snug whitespace-pre-wrap break-words">{message.text}</div>
                  <div className="mt-1 text-[10px] text-white/40 text-right">{message.time}</div>
                </div>
              </div>
            ))
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="flex items-center gap-2 p-3 border-t border-white/10">
          <textarea
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={handleKeyPress}
            rows={2}
            placeholder={recipient?.id ? 'Type a message...' : 'Recipient unavailable'}
            disabled={!recipient?.id}
            className="flex-1 px-2 py-1 text-sm text-white bg-transparent border border-white/20 rounded-lg resize-none focus:outline-none focus:ring-1 focus:ring-emerald-400/70 disabled:opacity-50"
          />
          <button
            onClick={sendMessage}
            disabled={isSending || !newMessage.trim() || !recipient?.id}
            className="p-2 transition-colors rounded-full bg-emerald-500/70 hover:bg-emerald-500 disabled:opacity-40"
            title="Send direct message"
          >
            <Send className="w-4 h-4 text-white" />
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default DirectChatWindow;
