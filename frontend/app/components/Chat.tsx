'use client';

import React, { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import styled from 'styled-components';
import { type OnlineUser, useWebSocket } from './WebSocketProvider';
import FestiveSnowOverlay from './decor/FestiveSnowOverlay';

const ONLINE_REFRESH_INTERVAL = 20000;
const INVALID_DISPLAY_VALUES = new Set(['undefined', 'null', 'none', 'nan', '-', '--']);
const CHAT_PAGE_SIZE = 25;
const HISTORY_BATCH_PAGES = 2;

const sanitizeDisplayValue = (value?: string | null): string | null => {
  if (typeof value !== 'string') return null;
  const trimmed = value.trim();
  if (!trimmed) return null;
  if (INVALID_DISPLAY_VALUES.has(trimmed.toLowerCase())) return null;
  return trimmed;
};

const resolveDisplayName = (username?: string | null, fullName?: string | null, fallback = 'Misafir Kullanıcı'): string => {
  return sanitizeDisplayValue(fullName) || sanitizeDisplayValue(username) || fallback;
};

const normalizeAvatarUrl = (value?: string | null): string | null => {
  const sanitized = sanitizeDisplayValue(value);
  if (!sanitized) return null;
  if (sanitized.startsWith('http') || sanitized.startsWith('//') || sanitized.startsWith('/')) {
    return sanitized;
  }
  return `/${sanitized.replace(/^\/+/, '')}`;
};

const formatClientTypes = (types?: string[] | null): string | null => {
  if (!types || !types.length) return null;
  const formatted = types
    .map(type => sanitizeDisplayValue(type))
    .filter(Boolean)
    .map(type => {
      const safe = type as string;
      return safe.charAt(0).toUpperCase() + safe.slice(1);
    });
  return formatted.length ? formatted.join(', ') : null;
};

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

const ChatContainer = styled.div`
  min-height: 100vh;
  height: 100vh;
  background: transparent;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const PageHeader = styled.div`
  background: #2a2a2a;
  border-bottom: 1px solid #3a3a3a;
  padding: 20px 30px;
  
  h1 {
    color: white;
    font-size: 24px;
    font-weight: 600;
    margin: 0 0 8px 0;
  }
  
  p {
    color: #a0a0a0;
    margin: 0;
    font-size: 14px;
  }
`;

const ChatArea = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.05);
  min-height: 0;
  overflow: hidden;
`;

const ChannelHeader = styled.div`
  background: #2a2a2a;
  border-bottom: 1px solid #3a3a3a;
  padding: 15px 20px;
  display: flex;
  align-items: center;
  gap: 12px;
  
  .channel-icon {
    width: 40px;
    height: 40px;
    background: #667eea;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    color: white;
  }
  
  .channel-info {
    flex: 1;
    
    h3 {
      color: white;
      margin: 0 0 4px 0;
      font-size: 16px;
      font-weight: 600;
    }
    
    p {
      color: #a0a0a0;
      margin: 0;
      font-size: 12px;
    }
  }
  
  .online-count {
    color: #4CAF50;
    font-size: 12px;
    font-weight: 500;
  }
`;

const ChatMessages = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #3a3a3a;
  min-height: 0;
  overflow: hidden;
`;

const OnlineUsers = styled.div<{ $collapsed: boolean }>`
  width: ${({ $collapsed }) => ($collapsed ? '72px' : '280px')};
  background: rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(8px);
  border-left: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  transition: width 0.3s ease;
  cursor: ${({ $collapsed }) => ($collapsed ? 'pointer' : 'default')};
  height: 100%;
  max-height: 100vh;
  position: sticky;
  top: 0;
`;

const OnlineUsersHeader = styled.div<{ $collapsed: boolean }>`
  padding: ${({ $collapsed }) => ($collapsed ? '20px 12px' : '20px')};
  border-bottom: 1px solid rgba(58, 58, 58, 0.5);
  background: rgba(42, 42, 42, 0.7);
  display: flex;
  align-items: center;
  justify-content: ${({ $collapsed }) => ($collapsed ? 'center' : 'space-between')};
  transition: padding 0.3s ease;

  h3 {
    color: white;
    margin: 0;
    font-size: 16px;
    font-weight: 600;
    opacity: ${({ $collapsed }) => ($collapsed ? 0 : 1)};
    transform: translateX(${({ $collapsed }) => ($collapsed ? '-10px' : '0')});
    transition: opacity 0.2s ease, transform 0.2s ease;
    white-space: nowrap;
  }

  .online-count {
    color: #4CAF50;
    font-size: 12px;
    font-weight: 500;
    opacity: ${({ $collapsed }) => ($collapsed ? 0 : 1)};
    transition: opacity 0.2s ease;
  }
`;

const UserListArea = styled.div<{ $collapsed: boolean }>`
  flex: 1;
  padding: ${({ $collapsed }) => ($collapsed ? '15px 8px' : '15px')};
  overflow-y: auto;
  transition: padding 0.3s ease;
  min-height: 0;
`;

const OnlineUserItem = styled.div<{ $userColor: string; $collapsed: boolean; $isOnline: boolean }>`
  display: flex;
  align-items: center;
  justify-content: ${({ $collapsed }) => ($collapsed ? 'center' : 'flex-start')};
  gap: ${({ $collapsed }) => ($collapsed ? '6px' : '12px')};
  padding: ${({ $collapsed }) => ($collapsed ? '10px 6px' : '8px 10px')};
  border-radius: 12px;
  margin-bottom: 6px;
  cursor: pointer;
  transition: background-color 0.2s, transform 0.2s;
  border: 1px solid transparent;

  &:hover {
    background: rgba(255, 255, 255, 0.05);
  }

  .avatar-wrapper {
    position: relative;
    width: ${({ $collapsed }) => ($collapsed ? '38px' : '34px')};
    height: ${({ $collapsed }) => ($collapsed ? '38px' : '34px')};
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .user-avatar {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: ${props => props.$userColor};
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 14px;
    font-weight: 600;
    border: 1.5px solid ${props => (props.$isOnline ? 'rgba(76, 175, 80, 0.85)' : 'rgba(255, 255, 255, 0.15)')};
    box-shadow: ${props => (props.$isOnline ? '0 0 10px rgba(76, 175, 80, 0.3)' : 'none')};
    overflow: hidden;
  }

  .user-avatar img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    border-radius: 50%;
  }

  .user-info {
    flex: 1;
    opacity: ${({ $collapsed }) => ($collapsed ? 0 : 1)};
    transform: translateX(${({ $collapsed }) => ($collapsed ? '-10px' : '0')});
    transition: opacity 0.2s ease, transform 0.2s ease;
    width: ${({ $collapsed }) => ($collapsed ? '0' : 'auto')};
    overflow: hidden;
    display: ${({ $collapsed }) => ($collapsed ? 'none' : 'block')};

    .user-name {
      color: white;
      font-size: 14px;
      font-weight: 500;
      margin: 0;
      white-space: nowrap;
    }

    .user-role {
      color: #a0a0a0;
      font-size: 11px;
      margin: 0;
      opacity: 0.8;
      white-space: nowrap;
    }
  }

  .status-indicator {
    position: absolute;
    bottom: 2px;
    right: 2px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    border: 2px solid #151515;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.4);
    &.online {
      background: #4caf50;
      box-shadow: 0 0 8px rgba(76, 175, 80, 0.6);
    }
    &.offline {
      background: #f44336;
    }
  }
`;

const MessagesArea = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  background: transparent;
  min-height: 0;
`;

const MessagesBody = styled.div`
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-right: 8px;
  margin-right: -4px;
  gap: 12px;
`;

const MessagesHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
  padding-bottom: 8px;
  border-bottom: 1px dashed rgba(255, 255, 255, 0.1);

  h4 {
    margin: 0;
    color: white;
    font-size: 14px;
    font-weight: 500;
  }

  .actions {
    display: flex;
    align-items: center;
    gap: 8px;
    flex-wrap: wrap;
    justify-content: flex-end;
  }

  button {
    background: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: white;
    border-radius: 999px;
    font-size: 12px;
    padding: 6px 14px;
    cursor: pointer;
    transition: background 0.2s ease, border 0.2s ease;

    &:hover {
      background: rgba(255, 255, 255, 0.16);
      border-color: rgba(255, 255, 255, 0.3);
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }

  .ghost-button {
    background: transparent;
    border-color: rgba(255, 255, 255, 0.25);
    color: rgba(255, 255, 255, 0.8);

    &:hover {
      background: rgba(255, 255, 255, 0.08);
    }
  }
`;

const Message = styled.div<{ $isOwn?: boolean }>`
  display: flex;
  justify-content: ${props => (props.$isOwn ? 'flex-end' : 'flex-start')};
  margin-bottom: 0;

  .bubble {
    max-width: 70%;
    padding: 14px 18px;
    border-radius: 18px;
    color: white;
    backdrop-filter: blur(14px);
    background: ${props =>
      props.$isOwn
        ? 'rgba(106, 76, 255, 0.35)'
        : 'rgba(23, 23, 23, 0.65)'};
    border: 1px solid
      ${props =>
        props.$isOwn ? 'rgba(124, 92, 255, 0.5)' : 'rgba(255, 255, 255, 0.08)'};
    box-shadow: ${props =>
      props.$isOwn
        ? '0 12px 25px rgba(124, 92, 255, 0.35)'
        : '0 10px 18px rgba(0, 0, 0, 0.35)'};
    &.image-only {
      background: transparent;
      border: none;
      box-shadow: none;
      padding: 0;
    }
  }

  .message-username {
    font-size: 11px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    opacity: 0.85;
    margin-bottom: 6px;
  }

  .message-text {
    word-wrap: break-word;
    line-height: 1.5;
    font-size: 14px;
  }

  .chat-image-preview {
    margin-top: 10px;
    border-radius: 18px;
    overflow: hidden;
    border: 1px solid rgba(255, 255, 255, 0.18);
    width: 150px;
    background: rgba(6, 6, 6, 0.6);
    box-shadow: 0 18px 35px rgba(3, 7, 18, 0.45);

    .chat-image-frame {
      width: 100%;
      height: 150px;
      background: radial-gradient(circle at 30% 30%, rgba(255,255,255,0.22), rgba(0,0,0,0.65));
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }

    .chat-image-footer {
      display: flex;
      flex-direction: column;
      gap: 4px;
      padding: 8px 10px 10px;
      font-size: 12px;
      background: rgba(0, 0, 0, 0.55);
    }

    .chat-image-footer strong {
      color: rgba(255, 255, 255, 0.9);
      display: block;
      max-width: 130px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .chat-image-footer p {
      margin: 0;
      color: rgba(255, 255, 255, 0.65);
      font-size: 11px;
      line-height: 1.35;
    }

    .chat-image-footer a {
      color: #8be9fd;
      text-decoration: none;
      font-weight: 600;
      font-size: 11px;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  .chat-attachment-chip {
    margin-top: 8px;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 12px;
    padding: 6px 10px;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.15);
    color: rgba(255, 255, 255, 0.8);
  }
`;

const MessageInput = styled.div`
  padding: 20px;
  background: rgba(42, 42, 42, 0.7);
  border-top: 1px solid rgba(58, 58, 58, 0.5);
  display: flex;
  gap: 12px;
  backdrop-filter: blur(8px);

  input {
    flex: 1;
    background: rgba(26, 26, 26, 0.8);
    border: 1px solid rgba(58, 58, 58, 0.5);
    border-radius: 8px;
    padding: 12px 16px;
    color: white;
    backdrop-filter: blur(4px);

    &::placeholder {
      color: #666;
    }

    &:focus {
      outline: none;
      border-color: #667eea;
    }
  }

  .file-input {
    display: none;
  }

  .attachment-button {
    background: rgba(58, 58, 58, 0.8);
    border: 1px solid rgba(58, 58, 58, 0.3);
    color: white;
    padding: 12px;
    border-radius: 8px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(4px);
    transition: all 0.2s;

    &:hover {
      background: rgba(58, 58, 58, 0.9);
      border-color: #667eea;
    }

    svg {
      width: 18px;
      height: 18px;
    }
  }

  button {
    background: rgba(102, 126, 234, 0.8);
    border: 1px solid rgba(102, 126, 234, 0.3);
    color: white;
    padding: 12px 20px;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 600;
    backdrop-filter: blur(4px);

    &:hover {
      background: rgba(102, 126, 234, 0.9);
    }
  }
`;

const Chat = () => {
  interface Message {
    id: number;
    text: string;
    sender: string;
    time: string;
    isSystem?: boolean;
    isOwn?: boolean;
    imageUrl?: string | null;
    attachmentName?: string | null;
    attachmentType?: string | null;
  }

  interface User {
    id: number;
    username: string;
    role: string;
    isOnline: boolean;
    onlineRef?: OnlineUser | null;
  }

  interface DerivedPresenceUser {
    id: number;
    username?: string | null;
    full_name?: string | null;
    displayName: string;
    avatar?: string | null;
    isOnline: boolean;
    lastActive: number;
    onlineRef?: OnlineUser | null;
  }

  const [newMessage, setNewMessage] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const {
    onlineUsers,
    openDirectChat,
    typingUsers,
    readReceipts,
    notifyTyping,
    notifyRead
  } = useWebSocket();
  const [currentUsername, setCurrentUsername] = useState('Atölye');
  const [sidebarOnlineUsers, setSidebarOnlineUsers] = useState<OnlineUser[]>([]);
  const [onlineFetchError, setOnlineFetchError] = useState<string | null>(null);
  const lastReadMessageIdRef = useRef<number | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      const storedUser = window.localStorage.getItem('user');
      if (storedUser) {
        const parsed = JSON.parse(storedUser);
        setCurrentUsername(parsed?.username || parsed?.full_name || 'Atölye');
      }
    } catch (error) {
      console.warn('Unable to determine chat username:', error);
    }
  }, []);

  const refreshSidebarOnlineUsers = useCallback(async () => {
    try {
      const headers = getAuthHeaders();
      if (!headers.Authorization) {
        setSidebarOnlineUsers([]);
        setOnlineFetchError(null);
        return;
      }
      const response = await fetch('/api/online/users', { headers, cache: 'no-store' });
      if (!response.ok) {
        if (response.status === 401) {
          setSidebarOnlineUsers([]);
        }
        throw new Error(`HTTP ${response.status}`);
      }
      const payload: OnlineUser[] = await response.json();
      setSidebarOnlineUsers(payload);
      setOnlineFetchError(null);
    } catch (err) {
      console.warn('Unable to fetch online users for chat sidebar', err);
      setOnlineFetchError('Çevrim içi kullanıcılar alınamadı');
    }
  }, []);

  useEffect(() => {
    refreshSidebarOnlineUsers();
    const interval = window.setInterval(refreshSidebarOnlineUsers, ONLINE_REFRESH_INTERVAL);
    return () => window.clearInterval(interval);
  }, [refreshSidebarOnlineUsers]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const handler = () => {
      refreshSidebarOnlineUsers();
    };
    window.addEventListener('user-profile-updated', handler);
    return () => {
      window.removeEventListener('user-profile-updated', handler);
    };
  }, [refreshSidebarOnlineUsers]);

  // kullanıcı renklerini oluştur
  const getUserColor = (username: string) => {
    if (!username || username === 'Atölye') return '#667eea';
    if (username === 'Sistem') return '#4CAF50';

    // İsimden hash oluştur ve renk üret
    let hash = 0;
    for (let i = 0; i < username.length; i++) {
      const char = username.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // 32-bit integer'a çevir
    }

    // Parlak renkler için hue değeri hesapla
    const hue = Math.abs(hash) % 360;
    return `hsl(${hue}, 70%, 50%)`;
  };

  // Keep chat messages clean - just welcome message
  const getDefaultMessages = (): Message[] => {
    return [{
      id: 1,
      text: "🎉 Welcome! This is the general chat channel.",
      sender: "System",
      time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
      isSystem: true
    }];
  };

  // Fallback function for loading messages
  const loadMessages = (): Message[] => {
    return getDefaultMessages();
  };

  // İlk başlangıç - default mesaj ile başlat
  const [messages, setMessages] = useState<Message[]>(getDefaultMessages);
  const [isUserSidebarCollapsed, setIsUserSidebarCollapsed] = useState(true);
  const [historyMode, setHistoryMode] = useState(false);
  const [historyOffset, setHistoryOffset] = useState(0);
  const [hasMoreHistory, setHasMoreHistory] = useState(true);
  const [isLoadingHistory, setIsLoadingHistory] = useState(false);
  const [pendingScrollRestore, setPendingScrollRestore] = useState<number | null>(null);
  const [shouldAutoScroll, setShouldAutoScroll] = useState(true);
  const messagesBodyRef = useRef<HTMLDivElement | null>(null);

  const mapServerMessages = useCallback((payload: any[]) => {
    const normalizedName = (currentUsername || '').trim().toLowerCase();
    return payload.map((msg: any) => ({
      id: typeof msg.id === 'number' ? msg.id : Number(msg.id) || Date.now(),
      text: msg.text ?? '',
      sender: msg.sender ?? 'System',
      time: msg.time ?? '',
      isOwn: (msg.sender || '').toLowerCase() === normalizedName,
      isSystem: msg.sender === "System" || msg.isSystem,
      imageUrl: msg.image_url || msg.imageUrl || null,
      attachmentName: msg.attachment_name || msg.attachmentName || null,
      attachmentType: msg.attachment_type || msg.attachmentType || null
    }));
  }, [currentUsername]);

  const fetchMessagesFromApi = useCallback(async (options: { limit?: number; offset?: number } = {}) => {
    const headers = getJsonHeaders();
    if (!headers.Authorization) {
      return [];
    }
    const params = new URLSearchParams();
    if (typeof options.limit === 'number') {
      params.append('limit', String(options.limit));
    }
    if (typeof options.offset === 'number' && options.offset > 0) {
      params.append('offset', String(options.offset));
    }
    const query = params.toString();
    const response = await fetch(`/api/chat/messages${query ? `?${query}` : ''}`, {
      method: 'GET',
      headers
    });
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    const payload = await response.json();
    return mapServerMessages(payload);
  }, [mapServerMessages]);

  const mergeMessages = useCallback((incoming: Message[], position: 'append' | 'prepend' = 'append') => {
    if (!incoming.length) return;
    setMessages(prev => {
      const combined = position === 'prepend' ? [...incoming, ...prev] : [...prev, ...incoming];
      const map = new Map<number, Message>();
      combined.forEach(msg => {
        const key = typeof msg.id === 'number' ? msg.id : Number(msg.id) || Date.now();
        if (map.has(key)) {
          map.set(key, { ...map.get(key)!, ...msg });
        } else {
          map.set(key, msg);
        }
      });
      const merged = Array.from(map.entries())
        .sort((a, b) => a[0] - b[0])
        .map(([, value]) => value);
      const hasRealMessages = merged.some(entry => !entry.isSystem);
      const cleaned = hasRealMessages
        ? merged.filter(entry => !(entry.isSystem && entry.sender === 'System' && entry.text.includes('Welcome')))
        : merged;
      setHistoryOffset(cleaned.length);
      return cleaned.length ? cleaned : getDefaultMessages();
    });
  }, []);

  const loadLatestMessages = useCallback(async () => {
    try {
      const latest = await fetchMessagesFromApi({ limit: CHAT_PAGE_SIZE });
      if (!latest.length) {
        setHasMoreHistory(false);
        setHistoryOffset(0);
        setMessages(prev => (prev.length ? prev : getDefaultMessages()));
        return;
      }
      if (historyOffset === 0 && latest.length < CHAT_PAGE_SIZE) {
        setHasMoreHistory(false);
      }
      mergeMessages(latest, 'append');
    } catch (error) {
      console.error('Mesajlar yüklenemedi:', error);
      setMessages(prev => (prev.length ? prev : loadMessages()));
    }
  }, [fetchMessagesFromApi, historyOffset, mergeMessages]);

  const loadOlderHistory = useCallback(async () => {
    if (isLoadingHistory || !hasMoreHistory) return;
    setHistoryMode(true);
    setShouldAutoScroll(false);
    const container = messagesBodyRef.current;
    if (container) {
      setPendingScrollRestore(container.scrollHeight - container.scrollTop);
    }
    setIsLoadingHistory(true);
    try {
      const limit = CHAT_PAGE_SIZE * HISTORY_BATCH_PAGES;
      const older = await fetchMessagesFromApi({ limit, offset: historyOffset });
      if (!older.length) {
        setHasMoreHistory(false);
        return;
      }
      mergeMessages(older, 'prepend');
      if (older.length < limit) {
        setHasMoreHistory(false);
      }
    } catch (error) {
      console.error('Geçmiş sohbet yüklenemedi:', error);
    } finally {
      setIsLoadingHistory(false);
    }
  }, [fetchMessagesFromApi, hasMoreHistory, historyOffset, isLoadingHistory, mergeMessages]);

  const handleHistoryButton = useCallback(() => {
    if (isLoadingHistory) return;
    loadOlderHistory();
  }, [isLoadingHistory, loadOlderHistory]);

  const resetHistoryView = useCallback(() => {
    setHistoryMode(false);
    setShouldAutoScroll(true);
    setPendingScrollRestore(0);
    const container = messagesBodyRef.current;
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  }, []);

  // Component mount olduğunda mesajları yükle
  useEffect(() => {
    loadLatestMessages();
  }, [loadLatestMessages]);

  useEffect(() => {
    const interval = window.setInterval(() => {
      loadLatestMessages();
    }, 5000);
    return () => window.clearInterval(interval);
  }, [loadLatestMessages]);

  // mesajlar değiştiğinde localStorage'a kaydet
  useEffect(() => {
    try {
      localStorage.setItem('chat-messages', JSON.stringify(messages));
    } catch (error) {
      console.error('Mesajlar kaydedilirken hata:', error);
    }
  }, [messages]);

  const queueOfflineMessage = async (payload: Record<string, any>) => {
    if (typeof navigator === 'undefined' || !('serviceWorker' in navigator)) return;
    try {
      const registration = await navigator.serviceWorker.ready;
      registration.active?.postMessage({ type: 'queue-chat-message', payload });
      if (registration.sync) {
        registration.sync.register('chat-sync').catch(() => {});
      }
    } catch (queueError) {
      console.warn('Failed to queue offline chat message:', queueError);
    }
  };

  const handleSendMessage = async () => {
    if (newMessage.trim()) {
      const senderName = currentUsername || 'Atölye';
      const messageTime = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
      const messageData = {
        text: newMessage,
        sender: senderName,
        time: messageTime,
        recipient_id: null,
        isOwn: true
      };

      const fallbackLocalMessage = () => {
        setMessages(prev => [
          ...prev,
          {
            id: Date.now(),
            text: newMessage,
            sender: senderName,
            time: messageTime,
            isOwn: true
          }
        ]);
        setNewMessage('');
      };

      try {
        const response = await fetch('/api/chat/messages', {
          method: 'POST',
          headers: getJsonHeaders(),
          body: JSON.stringify(messageData)
        });

        if (response.ok) {
          loadLatestMessages();
          setNewMessage('');
        } else {
          console.error('Mesaj gönderilemedi:', response.status);
          fallbackLocalMessage();
        }
      } catch (error) {
        console.error('Mesaj gönderme hatası:', error);
        fallbackLocalMessage();
        queueOfflineMessage(messageData);
      }
    }
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      handleFileUpload(file);
    }
    // Reset input
    event.target.value = '';
  };

  const handleFileUpload = async (file: File) => {
    // Validate file type
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    if (!allowedTypes.includes(file.type)) {
      alert('Only JPEG, JPG and PNG files are allowed');
      return;
    }

    // Validate file size (10MB)
    if (file.size > 10 * 1024 * 1024) {
      alert('File size must be less than 10MB');
      return;
    }

    setIsUploading(true);

    try {
      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch('/api/chat/upload-image', {
        method: 'POST',
        headers: getAuthHeaders(),
        body: formData,
      });

      if (response.ok) {
        // Image uploaded successfully, reload messages
        loadLatestMessages();
      } else {
        const error = await response.text();
        alert(`Upload failed: ${error}`);
      }
    } catch (error) {
      console.error('Upload error:', error);
      alert('Upload failed. Please try again.');
    } finally {
      setIsUploading(false);
    }
  };

  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const getInitials = (name: string): string => {
    const safeName = sanitizeDisplayValue(name) || 'User';
    const parts = safeName.split(' ').filter(Boolean);
    if (parts.length >= 2) {
      return (parts[0][0] + parts[1][0]).toUpperCase();
    }
    return safeName.substring(0, 2).toUpperCase();
  };

  const sortedMessages = useMemo(() => {
    return [...messages].sort((a, b) => {
      const aId = typeof a.id === 'number' ? a.id : 0;
      const bId = typeof b.id === 'number' ? b.id : 0;
      return aId - bId;
    });
  }, [messages]);

  const activeTypingUsers = useMemo(() => {
    const currentNormalized = currentUsername?.toLowerCase() || '';
    const now = Date.now();
    return typingUsers
      .filter(user => user.expiresAt > now)
      .filter(user => user.displayName?.toLowerCase() !== currentNormalized)
      .sort((a, b) => b.expiresAt - a.expiresAt);
  }, [typingUsers, currentUsername]);

  const typingIndicatorText = useMemo(() => {
    if (!activeTypingUsers.length) return null;
    const names = activeTypingUsers.map(user => user.displayName).filter(Boolean) as string[];
    if (!names.length) return null;
    if (names.length === 1) {
      return `${names[0]} yazıyor…`;
    }
    return `${names[0]} ve ${names.length - 1} kişi yazıyor…`;
  }, [activeTypingUsers]);

  const lastMessageReadBy = useMemo(() => {
    const lastMessage = sortedMessages[sortedMessages.length - 1];
    if (!lastMessage) return null;
    const readers = readReceipts
      .filter(entry => entry.messageId === lastMessage.id)
      .map(entry => entry.readerName || 'Anonim');
    if (!readers.length) return null;
    const unique = Array.from(new Set(readers));
    if (unique.length === 1) {
      return `${unique[0]} mesajı okudu`;
    }
    return `${unique[0]} ve ${unique.length - 1} kişi mesajı okudu`;
  }, [readReceipts, sortedMessages]);

  const handleMessagesScroll = useCallback(() => {
    const container = messagesBodyRef.current;
    if (!container) return;
    const distanceToBottom = container.scrollHeight - container.scrollTop - container.clientHeight;
    if (!historyMode && distanceToBottom > 80) {
      setHistoryMode(true);
    }
    if (historyMode && hasMoreHistory && container.scrollTop <= 40 && !isLoadingHistory) {
      loadOlderHistory();
    }
    setShouldAutoScroll(distanceToBottom <= 40 && !historyMode);
  }, [hasMoreHistory, historyMode, isLoadingHistory, loadOlderHistory]);

  useEffect(() => {
    const container = messagesBodyRef.current;
    if (!container) return;
    container.addEventListener('scroll', handleMessagesScroll);
    return () => {
      container.removeEventListener('scroll', handleMessagesScroll);
    };
  }, [handleMessagesScroll]);

  useEffect(() => {
    if (pendingScrollRestore === null) return;
    const container = messagesBodyRef.current;
    if (!container) {
      setPendingScrollRestore(null);
      return;
    }
    requestAnimationFrame(() => {
      const target = Math.max(0, container.scrollHeight - pendingScrollRestore);
      container.scrollTop = target;
      setPendingScrollRestore(null);
    });
  }, [pendingScrollRestore]);

  useEffect(() => {
    if (!shouldAutoScroll) return;
    if (historyMode) return;
    const container = messagesBodyRef.current;
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  }, [sortedMessages, shouldAutoScroll, historyMode]);

  useEffect(() => {
    if (!shouldAutoScroll || historyMode) return;
    const lastMessage = sortedMessages[sortedMessages.length - 1];
    if (!lastMessage || lastMessage.isOwn) return;
    if (lastReadMessageIdRef.current === lastMessage.id) return;
    notifyRead({ message_id: lastMessage.id });
    lastReadMessageIdRef.current = lastMessage.id;
  }, [sortedMessages, shouldAutoScroll, historyMode, notifyRead]);

  const getLastActive = (value?: string | null) => {
    if (!value) return 0;
    const parsed = Date.parse(value);
    return Number.isNaN(parsed) ? 0 : parsed;
  };

  const derivedUsers = useMemo<DerivedPresenceUser[]>(() => {
    const merged = new Map<number, OnlineUser>();
    const now = Date.now();
    sidebarOnlineUsers.forEach(user => {
      if (typeof user?.id === 'number') {
        merged.set(user.id, user);
      }
    });
    onlineUsers.forEach(user => {
      if (typeof user?.id === 'number') {
        merged.set(user.id, { ...merged.get(user.id), ...user });
      }
    });
    return Array.from(merged.values())
      .map(user => {
        const lastActive = getLastActive(user.last_active);
        const connectedRef = onlineUsers.find(candidate => candidate.id === user.id) || user;
        const hasPresence = Boolean(connectedRef?.presence && connectedRef.presence.length > 0);
        const fallbackOnline = lastActive > 0 ? now - lastActive <= ONLINE_REFRESH_INTERVAL * 2 : false;
        const isOnline = Boolean(connectedRef?.is_online || hasPresence || fallbackOnline);
        const displayName = resolveDisplayName(
          connectedRef?.username ?? user.username,
          connectedRef?.full_name ?? user.full_name
        );
        const avatar = normalizeAvatarUrl(connectedRef?.avatar ?? user.avatar ?? null);
        return {
          id: user.id,
          username: sanitizeDisplayValue(connectedRef?.username ?? user.username),
          full_name: sanitizeDisplayValue(connectedRef?.full_name ?? user.full_name),
          displayName,
          avatar,
          isOnline,
          lastActive,
          onlineRef: connectedRef
        };
      })
      .sort((a, b) => {
        if (a.isOnline !== b.isOnline) {
          return a.isOnline ? -1 : 1;
        }
        if (b.lastActive !== a.lastActive) {
          return b.lastActive - a.lastActive;
        }
        return a.displayName.localeCompare(b.displayName);
      });
  }, [onlineUsers, sidebarOnlineUsers]);

  return (
    <div className="relative min-h-screen bg-transparent">
      <FestiveSnowOverlay />
      <ChatContainer>
        <ChatArea>
        <ChatMessages>
          <MessagesArea>
            <MessagesHeader>
              <h4>
                Recent messages
              </h4>
              <div className="actions">
                {historyMode && (
                  <button
                    type="button"
                    className="ghost-button"
                    onClick={resetHistoryView}
                  >
                    Back to recent
                  </button>
                )}
                <button
                  type="button"
                  onClick={handleHistoryButton}
                  disabled={isLoadingHistory || (!hasMoreHistory && !historyMode)}
                >
                  {isLoadingHistory
                    ? 'Loading history...'
                    : historyMode
                      ? (hasMoreHistory ? 'Show recent chats' : 'History fully loaded')
                      : hasMoreHistory
                        ? 'Show chat history'
                        : 'History unavailable'}
                </button>
              </div>
            </MessagesHeader>

            <MessagesBody ref={messagesBodyRef}>
              {sortedMessages.map(message => {
                const displayName = message.sender || 'Sistem';
                const userColor = getUserColor(displayName);
                const isImageMessage = Boolean(message.imageUrl);
                const caption = (message.text || '').trim();
                const attachmentName = (message.attachmentName || '').trim();
                const showCaption = Boolean(caption && caption !== attachmentName);
                const bubbleClass = isImageMessage ? ' image-only' : '';
                return (
                  <Message key={message.id} $isOwn={message.isOwn}>
                    <div className={`bubble${bubbleClass}`}>
                      {!message.isSystem && (
                        <div
                          className="message-username"
                          style={{ color: message.isOwn ? 'rgba(255,255,255,0.8)' : userColor }}
                        >
                          {displayName}
                        </div>
                      )}
                      {!isImageMessage && caption && (
                        <div className="message-text">{caption}</div>
                      )}
                      {message.imageUrl && (
                        <div className="chat-image-preview">
                          <div className="chat-image-frame">
                            <img src={message.imageUrl} alt={attachmentName || 'Gönderilen görsel'} />
                          </div>
                          <div className="chat-image-footer">
                            <strong>{attachmentName || 'Gönderilen görsel'}</strong>
                            {showCaption && <p>{caption}</p>}
                            <a href={message.imageUrl} download rel="noreferrer">
                              İndir
                            </a>
                          </div>
                        </div>
                      )}
                    </div>
                  </Message>
                );
              })}
            </MessagesBody>
            {typingIndicatorText && (
              <div className="typing-indicator text-xs text-white/60 px-3 py-1">
                {typingIndicatorText}
              </div>
            )}
            {lastMessageReadBy && (
              <div className="read-receipt text-[11px] text-emerald-200 px-3 py-1">
                {lastMessageReadBy}
              </div>
            )}
          </MessagesArea>

          <MessageInput>
            <input
              type="text"
              placeholder="Type your message..."
              value={newMessage}
              onChange={(e) => {
                setNewMessage(e.target.value)
                notifyTyping?.()
              }}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            />

            <input
              ref={fileInputRef}
              type="file"
              accept="image/jpeg,image/jpg,image/png"
              onChange={handleFileSelect}
              className="file-input"
            />

            <button
              className="attachment-button"
              onClick={() => fileInputRef.current?.click()}
              disabled={isUploading}
              title="Attach image"
            >
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
              </svg>
            </button>

            <button onClick={handleSendMessage}>Send</button>
          </MessageInput>
        </ChatMessages>

        <OnlineUsers
          $collapsed={isUserSidebarCollapsed}
          onMouseEnter={() => setIsUserSidebarCollapsed(false)}
          onMouseLeave={() => setIsUserSidebarCollapsed(true)}
        >
          <OnlineUsersHeader $collapsed={isUserSidebarCollapsed}>
            <h3>Online Users</h3>
            <div className="online-count">{derivedUsers.filter(u => u.isOnline).length} Online</div>
          </OnlineUsersHeader>

          <UserListArea $collapsed={isUserSidebarCollapsed}>
            {derivedUsers.length === 0 ? (
              <div className="text-xs text-white/60 px-3 py-4">
                {onlineFetchError || 'Şu anda çevrim içi kullanıcı yok.'}
              </div>
            ) : derivedUsers.map(user => {
              const displayName = user.displayName;
              const userColor = getUserColor(displayName);
              const presenceLabel =
                sanitizeDisplayValue(user.onlineRef?.presence_summary) ||
                formatClientTypes(user.onlineRef?.client_types) ||
                (user.isOnline ? 'Online' : 'Offline');
              const avatarUrl = user.avatar;

              const handleClick = () => {
                const target = user.onlineRef || {
                  id: user.id,
                  username: user.username || user.displayName,
                  full_name: user.full_name || user.displayName,
                  avatar: user.avatar ?? null,
                  last_active: user.lastActive ? new Date(user.lastActive).toISOString() : new Date().toISOString(),
                } as OnlineUser;
                openDirectChat(target);
              };

              return (
                <OnlineUserItem
                  key={user.id}
                  $userColor={userColor}
                  $collapsed={isUserSidebarCollapsed}
                  $isOnline={user.isOnline}
                  onClick={handleClick}
                  style={{
                    opacity: 1,
                    borderColor: 'transparent',
                  }}
                >
                  <div className="avatar-wrapper">
                    <div
                      className="user-avatar"
                      style={{
                        backgroundColor: avatarUrl ? 'transparent' : userColor,
                      }}
                    >
                      {avatarUrl ? (
                        <img src={avatarUrl} alt={`${displayName} avatar`} />
                      ) : (
                        getInitials(displayName)
                      )}
                    </div>
                    <span className={`status-indicator ${user.isOnline ? 'online' : 'offline'}`} />
                  </div>
                  <div className="user-info">
                    <p className="user-name">{displayName}</p>
                    {presenceLabel && (
                      <p className="user-role" style={{ color: user.isOnline ? '#7dffb1' : '#a0a0a0' }}>
                        {presenceLabel}
                      </p>
                    )}
                  </div>
                </OnlineUserItem>
              );
            })}
          </UserListArea>
        </OnlineUsers>
        </ChatArea>
      </ChatContainer>
    </div>
  );
};

export default Chat;
