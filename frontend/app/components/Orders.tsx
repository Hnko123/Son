"use client";

import React, { CSSProperties, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Paperclip, Trash2 } from 'lucide-react';
import ImageWithFallback from '../components/ImageWithFallback';
import { useWebSocket } from './WebSocketProvider';
import FestiveSnowOverlay from './decor/FestiveSnowOverlay';

interface OrderData {
  transaction?: string;
  productname?: string;
  buyername?: string;
  buyeremail?: string;
  tarihh?: string;
  status?: string;
  photo?: string;
  material?: string;
  'Chain Length'?: string;
  Personalization?: string;
  Quantity?: string;
  itemprice?: string;
  salestax?: string;
  ordertotal?: string;
  Kesildi?: boolean;
  Hazır?: boolean;
  Gönderildi?: boolean;
  isManual?: boolean;
  __manualId?: string;
  created_at?: string;
  _sortKey?: string;
  isLocalOnly?: boolean;
  [key: string]: any;
}

interface OrdersProps {
  orders?: OrderData[];
}

interface NoteAttachment {
  name: string;
  mimeType: string;
  dataUrl: string;
  uploadedAt: number;
}

const MATERIAL_OPTIONS = [
  { value: 'gold plated', label: 'Gold Plated' },
  { value: 'silver', label: 'Silver' },
  { value: 'solid gold', label: 'Solid Gold' },
  { value: 'rose plated', label: 'Rose Plated' },
];

const ORDER_FIELD_MAPPING: Record<string, string> = {
  Produce: 'Kesildi',
  Ready: 'Hazır',
  Shipped: 'Gönderildi',
  Note: 'importantnote'
};

const ATTACHMENT_STORAGE_KEY = 'orders-note-attachments';
const ACCEPTED_ATTACHMENT_TYPES = '.svg,.png,.jpg,.jpeg,.pdf';
const ALLOWED_ATTACHMENT_MIME_TYPES = new Set([
  'image/png',
  'image/jpeg',
  'image/jpg',
  'image/svg+xml',
  'application/pdf'
]);

const TEXT_WRAP_EXCLUDED_COLUMNS = new Set(['photo', 'Produce', 'Ready', 'Shipped', 'Note', 'Personalization']);
const TEXT_WRAP_ALWAYS_KEYS = new Set([
  'buyername',
  'productname',
  'buyeremail',
  'FullAdress',
  'Buyer Note',
  'buyermessage',
  'material',
  'Chain Length',
  'shop',
  'ioss',
  'transaction',
  'Expres',
  'tarih'
]);

const TEXT_WRAP_STYLE: CSSProperties = {
  whiteSpace: 'pre-wrap',
  wordBreak: 'break-word',
  overflowWrap: 'anywhere'
};

const FULL_HEIGHT_WRAP_COLUMNS = new Set(['material', 'Chain Length', 'productname']);

const FULL_HEIGHT_WRAP_STYLE: CSSProperties = {
  ...TEXT_WRAP_STYLE,
  display: 'block',
  height: '100%',
  overflow: 'hidden'
};

const shouldApplyTextWrap = (key: string, value: any): boolean => {
  if (TEXT_WRAP_EXCLUDED_COLUMNS.has(key)) return false;
  if (value === null || value === undefined) return false;
  if (TEXT_WRAP_ALWAYS_KEYS.has(key)) return true;
  return typeof value === 'string';
};

const normalizeBoolean = (value: any) => {
  if (typeof value === 'boolean') return value;
  if (typeof value === 'number') return value === 1;
  if (typeof value === 'string') {
    const normalized = value.trim().toLowerCase();
    return normalized === 'true' || normalized === '1' || normalized === 'yes';
  }
  return Boolean(value);
};

const FALLBACK_BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:8080';

const normalizeImagePath = (value?: string | null) => {
  if (!value) return undefined;
  const trimmed = value.trim();
  if (!trimmed) return undefined;

  if (/^https?:\/\//i.test(trimmed) || trimmed.startsWith('data:') || trimmed.startsWith('blob:')) {
    return trimmed;
  }

  if (trimmed.startsWith('/')) {
    return trimmed;
  }

  if (trimmed.startsWith('images/')) {
    return `/${trimmed}`;
  }

  return undefined;
};

const getBackendOrigin = () => {
  if (typeof window === 'undefined') {
    return FALLBACK_BACKEND_URL;
  }
  const hostname = window.location.hostname;
  const isLocalhost = hostname === 'localhost' || hostname === '127.0.0.1';
  return isLocalhost ? FALLBACK_BACKEND_URL : window.location.origin;
};

const ensureBackendImageUrl = (value: string) => {
  if (value.startsWith('/images/')) {
    const origin = getBackendOrigin().replace(/\/+$/, '');
    return `${origin}${value}`;
  }
  return value;
};

interface AnimatedCheckboxProps {
  label: string;
  checked: boolean;
  onToggle: (checked: boolean) => void;
}

const AnimatedCheckbox: React.FC<AnimatedCheckboxProps> = ({ label, checked, onToggle }) => {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onToggle(!checked);
    }
  };

  return (
    <motion.button
      type="button"
      role="checkbox"
      aria-checked={checked}
      aria-label={label}
      onClick={() => onToggle(!checked)}
      onKeyDown={handleKeyDown}
      className={`relative flex items-center justify-center w-10 h-10 rounded-xl border transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/60 ${
        checked
          ? 'border-emerald-300/70 bg-emerald-500/20 text-white shadow-lg shadow-emerald-500/40'
          : 'border-white/25 bg-slate-900/70 text-white/70 shadow-inner shadow-black/40 hover:border-white/40'
      }`}
      whileTap={{ scale: 0.9 }}
    >
      <motion.span
        className="absolute inset-0 rounded-xl pointer-events-none"
        initial={false}
        animate={{
          opacity: checked ? 1 : 0,
          scale: checked ? 1 : 0.9,
          boxShadow: checked ? '0 0 20px rgba(16,185,129,0.35)' : '0 0 0 rgba(0,0,0,0)'
        }}
        transition={{ duration: 0.25 }}
      />
      <motion.span
        className="relative text-lg font-semibold"
        initial={false}
        animate={{ scale: checked ? 1 : 0.9, opacity: checked ? 1 : 0.5 }}
        transition={{ duration: 0.15 }}
      >
        ✓
      </motion.span>
      <span className="sr-only">{label}</span>
    </motion.button>
  );
};

const resolveOrderPhoto = (order: OrderData) => {
  const candidates = [
    typeof order.photo === 'string' ? order.photo : '',
    typeof order['Image'] === 'string' ? order['Image'] : '',
    typeof order['image'] === 'string' ? order['image'] : ''
  ];

  for (const candidate of candidates) {
    const normalized = normalizeImagePath(candidate);
    if (normalized) {
      return ensureBackendImageUrl(normalized);
    }
  }

  return undefined;
};

const PRIVILEGED_USER_EMAILS = ['hakanozturkk@windowslive.com', 'busra@luminousluxcrafts.com'];
const MANUAL_PENDING_TTL_MS = 8000;

const normalizeMultiline = (value: any): string => {
  if (value === null || value === undefined) return '';
  const strValue = value.toString();
  // Convert both real CRLF characters and literal "\n" sequences to actual new lines
  return strValue
    .replace(/\r\n/g, '\n')
    .replace(/\r/g, '\n')
    .replace(/\\n/g, '\n');
};

const getRowId = (order: OrderData) => {
  if (order.__manualId) return order.__manualId;
  if (order.transaction) return order.transaction;
  const fallback = order.buyername || order.productname || order.buyeremail;
  return fallback ? `${fallback}-${order._sortKey ?? ''}` : `${order._sortKey ?? ''}`;
};

const Orders: React.FC<OrdersProps> = ({ orders: initialOrders }) => {
  const [apiOrders, setApiOrders] = useState<OrderData[]>(initialOrders || []);
  const [manualRows, setManualRows] = useState<OrderData[]>([]);
  const [isLoadingOrders, setIsLoadingOrders] = useState(true);
  const [columnWidths, setColumnWidths] = useState<Record<string, number>>({});
  const [noteAttachments, setNoteAttachments] = useState<Record<string, NoteAttachment>>({});
  const [globalRowHeight, setGlobalRowHeight] = useState<number | null>(null);
  const [isResizing, setIsResizing] = useState(false);
  const [resizingColumn, setResizingColumn] = useState<string>('');
  const [resizingRow, setResizingRow] = useState<number | null>(null);
  const [resizingMode, setResizingMode] = useState<'column' | 'row' | null>(null);
  const [columnOrder, setColumnOrder] = useState<string[]>([]);
  const [draggedColumn, setDraggedColumn] = useState<string | null>(null);
  const tableRef = useRef<HTMLTableElement>(null);
  const hasTriggeredApiFetch = useRef(false);
  const noteUpdateQueueRef = useRef<Record<string, string>>({});
  const inlineEditLockRef = useRef(false);
  const pendingOrdersReloadRef = useRef(false);
  const manualPendingFieldsRef = useRef<Record<string, Record<string, number>>>({});
  const [manualDrafts, setManualDrafts] = useState<Record<string, Record<string, string>>>({});
  const getAuthHeaders = React.useCallback((): Record<string, string> => {
    if (typeof window === 'undefined') return {};
    const token = window.localStorage.getItem('access_token');
    return token ? { Authorization: `Bearer ${token}` } : {};
  }, []);
  const [filterText, setFilterText] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'Produce' | 'Ready' | 'Shipped'>('all');
  const [materialFilter, setMaterialFilter] = useState<string[]>([]);
  const [isRefreshingOrders, setIsRefreshingOrders] = useState(false);
  const [refreshError, setRefreshError] = useState<string | null>(null);
  const [refreshMessage, setRefreshMessage] = useState<string | null>(null);
  const userKeyRef = useRef<string>('anon');
  const filterStorageKeyRef = useRef<string>('orders-filters-anon');
  const columnStorageKeyRef = useRef<string>('orders-columns-anon');
  const [rowOrder, setRowOrder] = useState<string[]>([]);
  const rowOrderReadyRef = useRef(false);
  const [draggedRowId, setDraggedRowId] = useState<string | null>(null);
  const [currentUserEmail, setCurrentUserEmail] = useState<string | null>(null);
  const isPrivilegedUser = useMemo(() => {
    if (!currentUserEmail) return false;
    return PRIVILEGED_USER_EMAILS.includes(currentUserEmail.toLowerCase());
  }, [currentUserEmail]);

  const { ordersEventVersion, socketReady } = useWebSocket();

  const createLocalManualRow = () => {
    const manualId =
      typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function'
        ? crypto.randomUUID()
        : `manual-${Date.now()}-${Math.random()}`;
    const timestamp = new Date().toISOString();
    return {
      transaction: `MANUAL-${Date.now()}`,
      isManual: true,
      isLocalOnly: true,
      __manualId: manualId,
      buyername: '',
      productname: '',
      Quantity: '1',
      Note: '',
      Produce: 'FALSE',
      Ready: 'FALSE',
      Shipped: 'FALSE',
      created_at: timestamp,
      _sortKey: timestamp
    } as OrderData;
  };

  const appendManualRowToState = (row: OrderData) => {
    setManualRows(prev => [...prev, row]);
    setCurrentPage(1);
  };

  const handleAddManualRow = async () => {
    const localRow = createLocalManualRow();
    appendManualRowToState(localRow);
    const authHeaders = getAuthHeaders();
    const payload: Record<string, any> = { ...localRow };
    delete payload.isLocalOnly;
    try {
      const headers: Record<string, string> = {
        'Content-Type': 'application/json',
        ...(authHeaders.Authorization ? { Authorization: authHeaders.Authorization } : {})
      };
      const response = await fetch('/api/orders/manual', {
        method: 'POST',
        headers,
        body: JSON.stringify(payload)
      });
      if (response.ok) {
        const created: OrderData = await response.json();
        const normalized = { ...created, isLocalOnly: false };
        setManualRows(prev =>
          prev.map(row =>
            row.__manualId === localRow.__manualId
              ? {
                  ...normalized,
                  ...row,
                  isLocalOnly: false
                }
              : row
          )
        );
      } else {
        console.error('Failed to create manual order', await response.text());
      }
    } catch (error) {
      console.error('Manual order creation failed', error);
    }
  };

  const handleColumnDragStart = useCallback((event: React.DragEvent<HTMLTableHeaderCellElement>, key: string) => {
    event.dataTransfer.effectAllowed = 'move';
    event.dataTransfer.setData('text/plain', key);
    setDraggedColumn(key);
  }, []);

  const toggleMaterialFilter = (value: string) => {
    setMaterialFilter(prev =>
      prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
    );
  };

  const isManualRecord = (order: OrderData) => Boolean(order.isManual && order['__manualId']);

  const getTransactionId = (order: OrderData) =>
    String(order.transaction || order['Transaction ID'] || '');

  const updateManualRowField = (__manualId: string | undefined, field: string, value: any) => {
    if (!__manualId) return;
    setManualRows(prev =>
      prev.map(row =>
        row['__manualId'] === __manualId
          ? {
              ...row,
              [field]: value
            }
          : row
      )
    );
    markManualFieldsPending(__manualId, [field]);
    persistManualOrderField(__manualId, { [field]: value })
      .finally(() => clearManualFieldPending(__manualId, field));
  };

  const updateManualRowFieldLocally = (__manualId: string, field: string, value: any) => {
    setManualRows(prev =>
      prev.map(row =>
        row['__manualId'] === __manualId
          ? {
              ...row,
              [field]: value
            }
          : row
      )
    );
  };

  const setManualDraftValue = (__manualId: string, field: string, value: string) => {
    setManualDrafts(prev => ({
      ...prev,
      [__manualId]: {
        ...(prev[__manualId] || {}),
        [field]: value
      }
    }));
  };

  const clearManualDraftValue = (__manualId: string, field: string) => {
    setManualDrafts(prev => {
      if (!prev[__manualId]) return prev;
      const nextDraft = { ...prev[__manualId] };
      delete nextDraft[field];
      if (Object.keys(nextDraft).length === 0) {
        const { [__manualId]: _removed, ...rest } = prev;
        return rest;
      }
      return {
        ...prev,
        [__manualId]: nextDraft
      };
    });
  };

  const getManualDisplayValue = (__manualId: string, field: string, fallback: string) => {
    return manualDrafts[__manualId]?.[field] ?? fallback;
  };

  const markManualFieldsPending = (__manualId: string | undefined, fields: string[]) => {
    if (!__manualId) return;
    const now = Date.now();
    const current = manualPendingFieldsRef.current[__manualId] ?? {};
    fields.forEach(field => {
      current[field] = now;
    });
    manualPendingFieldsRef.current[__manualId] = current;
  };

  const clearManualFieldPending = (__manualId: string | undefined, field?: string) => {
    if (!__manualId) return;
    const pending = manualPendingFieldsRef.current[__manualId];
    if (!pending) return;
    if (field) {
      delete pending[field];
    } else {
      delete manualPendingFieldsRef.current[__manualId];
      return;
    }
    if (Object.keys(pending).length === 0) {
      delete manualPendingFieldsRef.current[__manualId];
    }
  };

  const applyPendingManualLocks = (manualId: string | undefined, localRow: OrderData | undefined, incomingRow: OrderData) => {
    if (!manualId) return incomingRow;
    const pending = manualPendingFieldsRef.current[manualId];
    if (!pending) return incomingRow;
    const now = Date.now();
    const nextRow = { ...incomingRow };
    Object.entries(pending).forEach(([field, timestamp]) => {
      if (now - timestamp < MANUAL_PENDING_TTL_MS) {
        if (localRow && localRow[field] !== undefined) {
          nextRow[field] = localRow[field];
        }
      } else {
        delete pending[field];
      }
    });
    if (Object.keys(pending).length === 0) {
      delete manualPendingFieldsRef.current[manualId];
    }
    return nextRow;
  };

  const mergeManualRows = useCallback((existing: OrderData[], incoming: OrderData[]) => {
    const incomingMap = new Map<string, OrderData>();
    incoming.forEach(row => {
      const key = row.__manualId || row.transaction || '';
      if (key) {
        incomingMap.set(key, row);
      }
    });
    const next: OrderData[] = [];
    existing.forEach(row => {
      if (row.isLocalOnly) {
        next.push(row);
        return;
      }
      const key = row.__manualId || row.transaction || '';
      if (!key) {
        next.push(row);
        return;
      }
      const incomingRow = incomingMap.get(key);
      if (incomingRow) {
        const merged = applyPendingManualLocks(key, row, { ...row, ...incomingRow, isLocalOnly: false });
        next.push(merged);
        incomingMap.delete(key);
      } else {
        next.push(row);
      }
    });
    incomingMap.forEach((row, key) => {
      const merged = applyPendingManualLocks(key, undefined, { ...row, isLocalOnly: false });
      next.push(merged);
    });
    return next;
  }, []);

  const updateApiOrderField = (transactionId: string, field: string, value: any) => {
    setApiOrders(prev =>
      prev.map(order =>
        getTransactionId(order) === transactionId
          ? {
              ...order,
              [field]: value
            }
          : order
      )
    );
  };

  const persistOrderField = useCallback(
    async (transactionId: string, frontendField: string, value: any, rollback?: () => void) => {
      const backendField = ORDER_FIELD_MAPPING[frontendField] || frontendField;
      const headers: Record<string, string> = {
        'Content-Type': 'application/json',
        ...getAuthHeaders()
      };
      try {
        const payloadValue =
          typeof value === 'boolean' ? (value ? 'TRUE' : 'FALSE') : value ?? '';

        const response = await fetch(`/api/orders/${transactionId}/edit`, {
          method: 'PUT',
          headers,
          body: JSON.stringify({ [backendField]: payloadValue })
        });

        if (!response.ok) {
          const errorText = await response.text();
          console.error('Failed to update order field:', errorText);
          rollback?.();
          return false;
        }
        return true;
      } catch (error) {
        console.error('Error updating order field:', error);
        rollback?.();
        return false;
      }
    },
    [getAuthHeaders]
  );

  const handlePrivilegedCellChange = (order: OrderData, key: string, value: any) => {
    if (isManualRecord(order)) {
      const manualId = order['__manualId'];
      if (!manualId) return;
      updateManualRowFieldLocally(manualId, key, value);
      return;
    }
    const transactionId = getTransactionId(order);
    if (!transactionId) return;
    updateApiOrderField(transactionId, key, value);
  };

  const handlePrivilegedCellBlur = async (order: OrderData, key: string, value: any) => {
    if (isManualRecord(order)) {
      const manualId = order['__manualId'];
      if (!manualId) return;
      markManualFieldsPending(manualId, [key]);
      try {
        await persistManualOrderField(manualId, { [key]: value });
      } finally {
        clearManualFieldPending(manualId, key);
      }
      return;
    }
    const transactionId = getTransactionId(order);
    if (!transactionId) return;
    await persistOrderField(transactionId, key, value);
  };

  const persistManualOrderField = useCallback(
    async (__manualId: string, updates: Record<string, any>) => {
      const authHeaders = getAuthHeaders();
      if (!authHeaders.Authorization) return;
      const headers: Record<string, string> = {
        'Content-Type': 'application/json',
        ...authHeaders
      };
      try {
        await fetch(`/api/orders/manual/${__manualId}`, {
          method: 'PUT',
          headers,
          body: JSON.stringify(updates)
        });
      } catch (error) {
        console.error('Failed to persist manual order', error);
      }
    },
    [getAuthHeaders]
  );

  const handleRemoveManualRow = async (__manualId: string) => {
    if (!isPrivilegedUser) {
      alert('Manuel satırları yalnızca admin kullanıcılar kaldırabilir.');
      return;
    }
    setManualRows(prev => prev.filter(row => row['__manualId'] !== __manualId));
    const authHeaders = getAuthHeaders();
    if (!authHeaders.Authorization) return;
    try {
      await fetch(`/api/orders/manual/${__manualId}`, {
        method: 'DELETE',
        headers: authHeaders
      });
    } catch (error) {
      console.error('Failed to delete manual order', error);
    }
  };

  const handleManualImageUpload = (__manualId: string, file: File | null) => {
    if (!file) return;
    if (!file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      updateManualRowField(__manualId, 'photo', result);
    };
    reader.readAsDataURL(file);
  };

  const handleManualCellInput = (__manualId: string, field: string, value: string) => {
    setManualDraftValue(__manualId, field, value);
  };

  const handleManualCellBlur = async (__manualId: string | undefined, field: string, value: string) => {
    if (!__manualId) return;
    clearManualDraftValue(__manualId, field);
    updateManualRowFieldLocally(__manualId, field, value);
    markManualFieldsPending(__manualId, [field]);
    try {
      await persistManualOrderField(__manualId, { [field]: value });
    } finally {
      clearManualFieldPending(__manualId, field);
    }
  };

  const handleManualCellKeyDown = (
    event: React.KeyboardEvent<HTMLDivElement | HTMLTextAreaElement>
  ) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      if (typeof document !== 'undefined') {
        document.execCommand('insertLineBreak');
      }
    }
  };

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 100;

  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      const stored = window.localStorage.getItem(ATTACHMENT_STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed && typeof parsed === 'object') {
          setNoteAttachments(parsed);
        }
      }
    } catch (error) {
      console.warn('Unable to load note attachments from storage:', error);
    }
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      window.localStorage.setItem(ATTACHMENT_STORAGE_KEY, JSON.stringify(noteAttachments));
    } catch (error) {
      console.warn('Unable to persist note attachments:', error);
    }
  }, [noteAttachments]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    let parsedUser: any = null;
    try {
      const storedUser = window.localStorage.getItem('user');
      if (storedUser) {
        parsedUser = JSON.parse(storedUser);
        const identifier = parsedUser?.id || parsedUser?.email || parsedUser?.username || 'anon';
        userKeyRef.current = String(identifier);
        setCurrentUserEmail(parsedUser?.email ? String(parsedUser.email).toLowerCase() : null);
      } else {
        userKeyRef.current = 'anon';
        setCurrentUserEmail(null);
      }
    } catch (err) {
      console.warn('Unable to parse user info for filter storage:', err);
      setCurrentUserEmail(null);
    }
    filterStorageKeyRef.current = `orders-filters-${userKeyRef.current}`;
    columnStorageKeyRef.current = `orders-columns-${userKeyRef.current}`;
    const savedFilters = window.localStorage.getItem(filterStorageKeyRef.current);
    if (savedFilters) {
      try {
        const parsed = JSON.parse(savedFilters);
        if (typeof parsed.filterText === 'string') setFilterText(parsed.filterText);
        if (parsed.statusFilter) setStatusFilter(parsed.statusFilter);
        if (Array.isArray(parsed.materialFilter)) setMaterialFilter(parsed.materialFilter);
      } catch (err) {
        console.warn('Unable to parse saved filters:', err);
      }
    }

    const savedColumnOrder = window.localStorage.getItem(columnStorageKeyRef.current);
    if (savedColumnOrder) {
      try {
        const parsed: string[] = JSON.parse(savedColumnOrder);
        if (Array.isArray(parsed) && parsed.length) {
          setColumnOrder(parsed);
        }
      } catch (err) {
        console.warn('Unable to parse saved column order:', err);
      }
    }
  }, []);


  useEffect(() => {
    if (typeof window === 'undefined') return;
    const payload = {
      filterText,
      statusFilter,
      materialFilter
    };
    try {
      window.localStorage.setItem(filterStorageKeyRef.current, JSON.stringify(payload));
    } catch (err) {
      console.warn('Unable to persist filters:', err);
    }
  }, [filterText, statusFilter, materialFilter]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      if (!columnOrder.length) {
        window.localStorage.removeItem(columnStorageKeyRef.current);
      } else {
        window.localStorage.setItem(columnStorageKeyRef.current, JSON.stringify(columnOrder));
      }
    } catch (err) {
      console.warn('Unable to persist column order:', err);
    }
  }, [columnOrder]);

  const fetchRowOrder = useCallback(async () => {
    if (typeof window === 'undefined') return;
    const headers = getAuthHeaders();
    try {
      if (!headers.Authorization) {
        rowOrderReadyRef.current = true;
        return;
      }
      const response = await fetch('/api/orders/sequence', { headers });
      if (response.ok) {
        const data = await response.json();
        if (Array.isArray(data?.sequence)) {
          setRowOrder(data.sequence.map((id: any) => String(id)));
        }
      }
    } catch (error) {
      console.warn('Unable to fetch order sequence', error);
    } finally {
      rowOrderReadyRef.current = true;
    }
  }, [getAuthHeaders]);

  useEffect(() => {
    fetchRowOrder();
    const handler = () => fetchRowOrder();
    window.addEventListener('auth-token-updated', handler);
    return () => window.removeEventListener('auth-token-updated', handler);
  }, [fetchRowOrder]);

  const persistRowOrder = useCallback(async (sequence: string[]) => {
    const headers = getAuthHeaders();
    if (!headers.Authorization) return;
    try {
      await fetch('/api/orders/sequence', {
        method: 'PUT',
        headers: {
          ...headers,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ sequence })
      });
    } catch (error) {
      console.warn('Unable to persist order sequence', error);
    }
  }, [getAuthHeaders]);

  const combinedOrders = useMemo(() => {
    const merged = [...manualRows, ...apiOrders];
    const parseDateValue = (value: any): number | null => {
      if (!value && value !== 0) return null;
      const raw = String(value).trim();
      if (!raw) return null;
      const dotFormat = /^(\d{2})\.(\d{2})\.(\d{4})$/;
      const slashFormat = /^(\d{2})\/(\d{2})\/(\d{4})$/;
      let timestamp: number | null = null;
      if (dotFormat.test(raw)) {
        const [, day, month, year] = raw.match(dotFormat) ?? [];
        timestamp = Date.parse(`${year}-${month}-${day}T00:00:00Z`);
      } else if (slashFormat.test(raw)) {
        const [, month, day, year] = raw.match(slashFormat) ?? [];
        timestamp = Date.parse(`${year}-${month}-${day}T00:00:00Z`);
      } else {
        const parsed = new Date(raw).getTime();
        timestamp = Number.isNaN(parsed) ? null : parsed;
      }
      return timestamp ?? null;
    };
    const getSortValue = (order: OrderData) => {
      const candidates = [
        order._sortKey,
        (order as any).data,
        (order as any).Data,
        order.tarih,
        order.tarihh,
        order.created_at,
      ];
      for (const candidate of candidates) {
        const parsed = parseDateValue(candidate);
        if (parsed !== null) {
          return parsed;
        }
      }
      return 0;
    };
    return merged.sort((a, b) => getSortValue(b) - getSortValue(a));
  }, [apiOrders, manualRows]);

  const latestTopIdRef = useRef<string | null>(null);
  useEffect(() => {
    if (!combinedOrders.length) return;
    const topId = getRowId(combinedOrders[0]);
    if (topId && topId !== latestTopIdRef.current) {
      latestTopIdRef.current = topId;
      setCurrentPage(1);
    }
  }, [combinedOrders]);

  const filteredOrders = useMemo(() => {
    const normalizedSearch = filterText.trim().toLowerCase();
    const matchesSearch = (order: OrderData) => {
      if (!normalizedSearch) return true;
      const haystack = [
        order.transaction,
        order.buyername,
        order.productname,
        order.buyeremail,
        order.Note
      ].map(val => (val ? String(val).toLowerCase() : ''));
      return haystack.some(section => section.includes(normalizedSearch));
    };

    const normalizeFlag = (value: any) => {
      if (value === undefined || value === null) return false;
      if (typeof value === 'boolean') return value;
      if (typeof value === 'string') return value.toLowerCase() === 'true' || value === '1';
      if (typeof value === 'number') return value === 1;
      return false;
    };

    const matchesStatus = (order: OrderData) => {
      if (statusFilter === 'all') return true;
      return normalizeFlag(order[statusFilter]);
    };

    const matchesMaterial = (order: OrderData) => {
      if (materialFilter.length === 0) return true;
      const materialValue = String(order.material || '').toLowerCase();
      return materialFilter.some(option => materialValue.includes(option));
    };

    return combinedOrders.filter(order => matchesSearch(order) && matchesStatus(order) && matchesMaterial(order));
  }, [combinedOrders, filterText, statusFilter, materialFilter]);

  const orderedFilteredOrders = useMemo(() => {
    if (!rowOrder.length) return filteredOrders;
    const orderIndex = new Map<string, number>();
    rowOrder.forEach((id, index) => orderIndex.set(id, index));
    return [...filteredOrders].sort((a, b) => {
      const aIndex = orderIndex.get(getRowId(a));
      const bIndex = orderIndex.get(getRowId(b));
      if (aIndex !== undefined && bIndex !== undefined) return aIndex - bIndex;
      if (aIndex !== undefined) return -1;
      if (bIndex !== undefined) return 1;
      return 0;
    });
  }, [filteredOrders, rowOrder]);

  useEffect(() => {
    if (!rowOrderReadyRef.current && rowOrder.length === 0) return;
    const presentIds = combinedOrders.map(getRowId);
    setRowOrder(prev => {
      const existing = prev.filter(id => presentIds.includes(id));
      const missing = presentIds.filter(id => !existing.includes(id));
      if (!missing.length && existing.length === prev.length) {
        return prev;
      }
      return [...missing, ...existing];
    });
  }, [combinedOrders, rowOrder.length]);

  useEffect(() => {
    if (!isPrivilegedUser || !rowOrderReadyRef.current) return;
    persistRowOrder(rowOrder);
  }, [rowOrder, isPrivilegedUser, persistRowOrder]);

  const totalOrders = orderedFilteredOrders.length;
  const totalPages = Math.ceil(totalOrders / itemsPerPage);

  // Get orders for current page
  const getCurrentPageOrders = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return orderedFilteredOrders.slice(startIndex, endIndex);
  };

  // Pagination handlers
  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Filter out unwanted columns and set specific column order
  const excludedColumns = ['Kesildi', 'Hazır', 'Gönderildi', 'Problem', 'gonderimdurumu', 'status', 'isManual', '_sortKey', '__manualId'];
  // Specific column order as requested by user (removed duplicates, buyermessage, and importantnote)
  const requiredColumnOrder = [
    'photo',  // Image
    'buyername',  // Name
    'Produce',
    'Ready',
    'Shipped',
    'Note',
    'productname',  // Product
    'Quantity',
    'material',  // Material & Size
    'Chain Length',
    'Personalization',
    'ioss',  // IOSS Number
    'FullAdress',
    'itemprice',  // Item Price
    'discount',  // Discount
    'salestax',  // Sales Tax
    'ordertotal',  // Order Total
    'buyeremail',  // Buyer Email
    'tarih',  // Data
    'vatcollected',  // VAT
    'vatid',  // VAT ID
    'shop',  // Shop Name
    'vatpaidchf',  // VAT Paid CHF
    'transaction',  // Transaction ID
    'Buyer Note',  // Buyer Note
    'Expres'  // Express
  ];

  const baseColumnsSource = apiOrders.length > 0 ? apiOrders[0] : combinedOrders[0];
  const baseColumns = useMemo(() => {
    const sourceCols = baseColumnsSource ? Object.keys(baseColumnsSource) : [];
    const filtered = sourceCols.filter(col => !excludedColumns.includes(col));
    const ordered = requiredColumnOrder.filter(col => filtered.includes(col));
    const remaining = filtered.filter(col => !ordered.includes(col));
    return [...ordered, ...remaining];
  }, [baseColumnsSource]);

  const normalizeColumnOrder = useCallback((order: string[]) => {
    const filtered = order.filter(col => baseColumns.includes(col));
    const missing = baseColumns.filter(col => !filtered.includes(col));
    return [...filtered, ...missing];
  }, [baseColumns]);

  const reorderColumns = useCallback((sourceKey: string, targetKey: string) => {
    if (sourceKey === targetKey) return;
    setColumnOrder(prev => {
      const workingOrder = prev.length ? normalizeColumnOrder(prev) : [...baseColumns];
      const sourceIndex = workingOrder.indexOf(sourceKey);
      const targetIndex = workingOrder.indexOf(targetKey);
      if (sourceIndex === -1 || targetIndex === -1) return prev;
      const updated = [...workingOrder];
      const [removed] = updated.splice(sourceIndex, 1);
      updated.splice(targetIndex, 0, removed);
      return updated;
    });
  }, [baseColumns, normalizeColumnOrder]);

  const effectiveColumnOrder = useMemo(() => {
    if (!columnOrder.length) return baseColumns;
    return normalizeColumnOrder(columnOrder);
  }, [baseColumns, columnOrder, normalizeColumnOrder]);

  const displayedColumns = effectiveColumnOrder;

  const handleColumnDragOver = useCallback((event: React.DragEvent<HTMLTableHeaderCellElement>) => {
    if (!draggedColumn) return;
    event.preventDefault();
  }, [draggedColumn]);

  const handleColumnDrop = useCallback((event: React.DragEvent<HTMLTableHeaderCellElement>, key: string) => {
    if (!draggedColumn) return;
    event.preventDefault();
    reorderColumns(draggedColumn, key);
    setDraggedColumn(null);
  }, [draggedColumn, reorderColumns]);

  const handleColumnDragEnd = useCallback(() => {
    setDraggedColumn(null);
  }, []);

  // Column header mapping for better display
  const columnHeaders: Record<string, string> = {
    'transaction': 'Transaction ID',
    'productname': 'Product',
    'buyername': 'Name',
    'buyeremail': 'Buyer Email',
    'tarih': 'Data',
    'status': 'Status',
    'photo': 'Image',
    'material': 'Material & Size',
    'Chain Length': 'Chain Length',
    'Personalization': 'Personalization',
    'Quantity': 'Quantity',
    'itemprice': 'Item Price',
    'discount': 'Discount',
    'salestax': 'Sales Tax',
    'ordertotal': 'Order Total',
    'vatcollected': 'VAT',
    'vatpaidchf': 'VAT Paid CHF',
    'vatid': 'VAT ID',
    'shop': 'Shop Name',
    'buyermessage': 'Müşteri Mesajı',
    'Buyer Note': 'Buyer Note',
    'Expres': 'Express',
    'express': 'Express',
    'gonderimdurumu': 'Shipping Status',
    'ioss': 'IOSS Number',
    'importantnote': 'Important Note',
    'Produce': 'Produce',
    'Ready': 'Ready',
    'Shipped': 'Shipped',
    'FullAdress': 'FullAdress',
    'Problem': 'Problem'
  };

  const getColumnHeader = (key: string) => columnHeaders[key] || key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());

  const handleCheckboxChange = async (order: OrderData, checkboxKey: string, checked: boolean) => {
    const previousValue = normalizeBoolean(order[checkboxKey]);

    if (
      checkboxKey === 'Produce' &&
      previousValue &&
      !checked &&
      !isPrivilegedUser
    ) {
      alert('Produce durumunu yalnızca admin kullanıcılar FALSE konumuna getirebilir.');
      return;
    }

    if (isManualRecord(order)) {
      const manualId = order['__manualId'];
      if (manualId) {
        updateManualRowField(manualId, checkboxKey, checked);
      }
      return;
    }

    const transactionId = getTransactionId(order);
    if (!transactionId) {
      console.error('No transaction ID found for order update');
      return;
    }

    updateApiOrderField(transactionId, checkboxKey, checked);

    const rollback = () => updateApiOrderField(transactionId, checkboxKey, previousValue);
    const success = await persistOrderField(transactionId, checkboxKey, checked, rollback);
    if (!success) {
      console.warn(`Unable to persist ${checkboxKey} change for ${transactionId}`);
    }
  };

  const handleNoteChange = (order: OrderData, note: string) => {
    if (isManualRecord(order)) {
      const manualId = order['__manualId'];
      if (manualId) {
        updateManualRowField(manualId, 'Note', note);
      }
      return;
    }
    const transactionId = getTransactionId(order);
    if (!transactionId) return;
    updateApiOrderField(transactionId, 'Note', note);
    noteUpdateQueueRef.current[transactionId] = note;
  };

  const handleNoteBlur = async (order: OrderData) => {
    if (isManualRecord(order)) return;
    const transactionId = getTransactionId(order);
    if (!transactionId) return;
    const pendingValue = noteUpdateQueueRef.current[transactionId];
    if (pendingValue === undefined) return;
    const success = await persistOrderField(transactionId, 'Note', pendingValue);
    if (success) {
      delete noteUpdateQueueRef.current[transactionId];
    } else {
      console.warn(`Retry note update later for ${transactionId}`);
    }
  };

  const handleRowDragStart = (event: React.DragEvent<HTMLTableRowElement>, rowId: string) => {
    if (!isPrivilegedUser) return;
    setDraggedRowId(rowId);
    event.dataTransfer.effectAllowed = 'move';
    event.dataTransfer.setData('text/plain', rowId);
  };

  const handleRowDragOver = (event: React.DragEvent<HTMLTableRowElement>) => {
    if (!isPrivilegedUser) return;
    event.preventDefault();
  };

  const handleRowDrop = (event: React.DragEvent<HTMLTableRowElement>, targetRowId: string) => {
    if (!isPrivilegedUser || !draggedRowId) return;
    event.preventDefault();
    if (draggedRowId === targetRowId) return;
    setRowOrder(() => {
      const baseIds = orderedFilteredOrders.map(order => getRowId(order));
      const withoutDragged = baseIds.filter(id => id !== draggedRowId);
      const targetIndex = withoutDragged.indexOf(targetRowId);
      if (targetIndex === -1) {
        return [...withoutDragged, draggedRowId];
      }
      const updated = [...withoutDragged];
      updated.splice(targetIndex, 0, draggedRowId);
      return updated;
    });
    setDraggedRowId(null);
  };

  const handleRowDragEnd = () => {
    if (!isPrivilegedUser) return;
    setDraggedRowId(null);
  };

  const handleAttachmentUpload = (order: OrderData, file: File | null) => {
    if (!file) return;
    const rowId = getRowId(order);
    if (!rowId) return;
    const mimeType = file.type;
    const extension = file.name.split('.').pop()?.toLowerCase() || '';
    const isAllowedType = ALLOWED_ATTACHMENT_MIME_TYPES.has(mimeType) || ['svg', 'png', 'jpg', 'jpeg', 'pdf'].includes(extension);
    if (!isAllowedType) {
      alert('Sadece SVG, PNG, JPG, JPEG veya PDF dosyaları yükleyebilirsiniz.');
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result;
      if (typeof result !== 'string') return;
      setNoteAttachments(prev => ({
        ...prev,
        [rowId]: {
          name: file.name,
          mimeType: mimeType || 'application/octet-stream',
          dataUrl: result,
          uploadedAt: Date.now()
        }
      }));
    };
    reader.readAsDataURL(file);
  };

  const handleAttachmentInputChange = (order: OrderData, event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    handleAttachmentUpload(order, file);
    event.target.value = '';
  };

  const handleAttachmentDownload = (order: OrderData) => {
    const rowId = getRowId(order);
    if (!rowId) return;
    const attachment = noteAttachments[rowId];
    if (!attachment) return;
    const link = document.createElement('a');
    link.href = attachment.dataUrl;
    link.download = attachment.name || 'note-attachment';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleAttachmentRemove = (order: OrderData) => {
    const rowId = getRowId(order);
    if (!rowId) return;
    setNoteAttachments(prev => {
      if (!prev[rowId]) return prev;
      const next = { ...prev };
      delete next[rowId];
      return next;
    });
  };

  const getMaterialCellBackgroundClass = (material: string) => {
    const lowerMaterial = material?.toLowerCase() || '';
    if (lowerMaterial.includes('gold plated')) return 'bg-yellow-500/40';
    if (lowerMaterial.includes('solid gold')) return 'bg-orange-500/40';
    if (lowerMaterial.includes('silver')) return 'bg-gray-500/40';
    if (lowerMaterial.includes('rose gold') || lowerMaterial.includes('rose plated')) return 'bg-purple-500/40';
    return '';
  };

  const handleMouseDown = (e: React.MouseEvent, columnKey: string, mode: 'column' | 'row', rowIndex?: number) => {
    e.preventDefault();
    setIsResizing(true);
    setResizingMode(mode);

    if (mode === 'column') {
      setResizingColumn(columnKey);
      setResizingRow(null);

      const startX = e.clientX;
      const startWidth = columnWidths[columnKey] || 120;

      const handleMouseMove = (e: MouseEvent) => {
        const newWidth = startWidth + (e.clientX - startX);
        if (newWidth > 50) { // Minimum width
          setColumnWidths(prev => ({
            ...prev,
            [columnKey]: newWidth
          }));
        }
      };

      const handleMouseUp = () => {
        setIsResizing(false);
        setResizingColumn('');
        setResizingMode(null);
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };

      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    } else if (mode === 'row' && rowIndex !== undefined) {
      setResizingRow(rowIndex);
      setResizingColumn('');

      const startY = e.clientY;
      const startHeight = globalRowHeight || 32;

      const handleMouseMove = (e: MouseEvent) => {
        const newHeight = startHeight + (e.clientY - startY);
        if (newHeight > 20) { // Minimum height
          setGlobalRowHeight(newHeight);
        }
      };

      const handleMouseUp = () => {
        setIsResizing(false);
        setResizingRow(null);
        setResizingMode(null);
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };

      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }
  };

  // Initialize column widths on first load
  React.useEffect(() => {
    if (baseColumns.length > 0 && Object.keys(columnWidths).length === 0) {
      const initialWidths: Record<string, number> = {};
      baseColumns.forEach(col => {
        initialWidths[col] = 120; // Default width
      });
      setColumnWidths(initialWidths);
    }
  }, [baseColumns, columnWidths]);

  React.useEffect(() => {
    setCurrentPage(1);
  }, [filterText, statusFilter, materialFilter]);

  const applyPendingNoteEdits = (orders: OrderData[]): OrderData[] => {
    const queue = noteUpdateQueueRef.current;
    if (!queue || Object.keys(queue).length === 0) return orders;
    return orders.map(order => {
      const transactionId = getTransactionId(order);
      if (transactionId && queue[transactionId] !== undefined) {
        return {
          ...order,
          Note: queue[transactionId]
        };
      }
      return order;
    });
  };

  const loadExistingOrders = React.useCallback(async (showSpinner = true) => {
    try {
      if (showSpinner) {
        setIsLoadingOrders(true);
      }
      console.info('Loading existing orders from API...');
      const apiUrl = '/api/orders'; // Relative URL should work with proxy
      console.debug('Making API call to:', apiUrl);

      const response = await fetch(apiUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const ordersData: OrderData[] = await response.json();
        console.info(`Loaded ${ordersData.length} orders`);
        const manualEntries = ordersData.filter(order => order.isManual);
        const apiEntries = ordersData.filter(order => !order.isManual);
        setManualRows(prev => mergeManualRows(prev, manualEntries));
        const mergedApiEntries = applyPendingNoteEdits(apiEntries);
        setApiOrders(mergedApiEntries);
      } else {
        const errorText = await response.text();
        console.error('Failed to load orders - Response:', errorText);
      }
    } catch (error) {
      console.error('Error loading orders:', error);
    } finally {
      if (showSpinner) {
        setIsLoadingOrders(false);
      }
    }
  }, []);

  const refreshOrders = useCallback(async () => {
    setRefreshError(null);
    setRefreshMessage(null);
    setIsRefreshingOrders(true);
    setApiOrders([]);
    setManualRows([]);
    setCurrentPage(1);
    try {
      const response = await fetch('/api/orders/refresh', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || 'Yenileme isteği başarısız oldu');
      }

      const payload = await response.json();
      setRefreshMessage(payload.message ?? 'Siparişler yenilendi');
      await loadExistingOrders(true);
    } catch (error: any) {
      console.error('Siparişleri yenileme hatası:', error);
      setRefreshError(error?.message || 'Sipariş yenileme sırasında hata oluştu');
    } finally {
      setIsRefreshingOrders(false);
    }
  }, [loadExistingOrders]);

  const beginInlineEdit = useCallback(() => {
    inlineEditLockRef.current = true;
  }, []);

  const endInlineEdit = useCallback(() => {
    inlineEditLockRef.current = false;
    if (pendingOrdersReloadRef.current) {
      pendingOrdersReloadRef.current = false;
      loadExistingOrders(false);
    }
  }, [loadExistingOrders]);

  // Load existing orders on component mount if no initial orders provided
  React.useEffect(() => {
    if (initialOrders && initialOrders.length > 0) {
      setApiOrders(initialOrders);
      setIsLoadingOrders(false);
      return;
    }

    if (hasTriggeredApiFetch.current) {
      return;
    }

    hasTriggeredApiFetch.current = true;
    loadExistingOrders(true);
  }, [initialOrders, loadExistingOrders]);

  // Periodically refresh orders so other users' edits appear without manual reload
  useEffect(() => {
    if (socketReady) {
      return undefined;
    }
    const interval = window.setInterval(() => {
      if (inlineEditLockRef.current) {
        pendingOrdersReloadRef.current = true;
        return;
      }
      loadExistingOrders(false);
    }, 4000);
    return () => window.clearInterval(interval);
  }, [loadExistingOrders, socketReady]);

  useEffect(() => {
    if (!socketReady) return;
    if (ordersEventVersion === 0) return;
    if (inlineEditLockRef.current) {
      pendingOrdersReloadRef.current = true;
      return;
    }
    loadExistingOrders(false);
  }, [ordersEventVersion, socketReady, loadExistingOrders]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative min-h-screen px-0 py-6 bg-transparent"
    >
      <FestiveSnowOverlay />
      {isLoadingOrders ? (
        <div className="flex items-center justify-center py-12">
          <div className="w-8 h-8 border-2 border-white rounded-full animate-spin border-t-transparent"></div>
          <span className="ml-3 text-white">Loading orders...</span>
        </div>
      ) : (
        <>
          <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
            <div className="flex flex-1 gap-2 min-w-[260px]">
              <input
                value={filterText}
                onChange={(e) => setFilterText(e.target.value)}
                placeholder="Sipariş / müşteri ara"
                className="flex-1 px-3 py-2 text-sm text-white bg-black/40 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400/50"
              />
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value as 'all' | 'Produce' | 'Ready' | 'Shipped')}
                className="px-3 py-2 text-sm text-white bg-black/40 border border-white/10 rounded-lg focus:outline-none"
              >
                <option value="all">Tümü</option>
                <option value="Produce">Produce</option>
                <option value="Ready">Ready</option>
                <option value="Shipped">Shipped</option>
              </select>
              <button
                type="button"
                onClick={handleAddManualRow}
                className="inline-flex items-center gap-2 px-3 py-2 text-xs font-semibold text-black bg-white/90 rounded-lg border border-white/20 shadow-sm hover:bg-white/80 transition"
              >
                <span className="text-base leading-none">＋</span>
                Manuel Satır
              </button>
              <button
                type="button"
                onClick={refreshOrders}
                disabled={isRefreshingOrders || isLoadingOrders}
                className="inline-flex items-center px-3 py-2 text-xs font-semibold text-white bg-blue-500/80 rounded-lg border border-blue-400/70 shadow-sm hover:bg-blue-500 transition disabled:cursor-not-allowed disabled:bg-blue-500/40"
              >
                {isRefreshingOrders ? 'Yenileniyor…' : 'Temizle & Yeni Siparişleri Çek'}
              </button>
            </div>
          </div>

          {(refreshError || refreshMessage) && (
            <div className="mb-3 text-xs font-semibold">
              {refreshError && <span className="text-red-400">{refreshError}</span>}
              {refreshMessage && !refreshError && <span className="text-emerald-300">{refreshMessage}</span>}
            </div>
          )}

          <div className="flex flex-wrap gap-2 mb-4">
            {MATERIAL_OPTIONS.map(option => (
              <button
                key={option.value}
                type="button"
                onClick={() => toggleMaterialFilter(option.value)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-full border transition ${
                  materialFilter.includes(option.value)
                    ? 'bg-amber-500/30 text-amber-100 border-amber-400/60'
                    : 'text-white/70 border-white/15 hover:border-white/40'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>

          {orderedFilteredOrders.length > 0 ? (
            <div className="relative w-full overflow-x-auto">
          {/* Column resize handles overlay */}
          <div className="absolute top-0 left-0 right-0 z-20 pointer-events-none" style={{ height: '48px' }}>
            <div className="relative h-full">
              {displayedColumns.map((key, index) => {
                const cumulativeWidth = displayedColumns.slice(0, index + 1).reduce((sum, k) => sum + (columnWidths[k] || 120), 0);
                return index < displayedColumns.length - 1 && !excludedColumns.includes(key) ? (
                  <div
                    key={`col-resize-${key}`}
                    className={`absolute h-6 w-1 cursor-col-resize hover:bg-blue-500/50 pointer-events-auto ${
                      isResizing && resizingMode === 'column' && resizingColumn === key ? 'bg-blue-500' : ''
                    }`}
                    style={{ left: cumulativeWidth - 2, top: '45%' }}
                    onMouseDown={(e) => handleMouseDown(e, key, 'column')}
                  />
                ) : null;
              })}
            </div>
          </div>

          {/* Row resize handles overlay */}
          <div className="absolute top-0 bottom-0 left-0 right-0 z-20 pointer-events-none" style={{ marginTop: '48px' }}>
            <div className="relative h-full">
              {getCurrentPageOrders().map((_, orderIndex) => {
                const rowHeight = globalRowHeight || 80;
                const rowTop = (orderIndex + 1) * rowHeight;
                const actualRowIndex = (currentPage - 1) * itemsPerPage + orderIndex;
                return orderIndex < getCurrentPageOrders().length - 1 ? ( // Don't add handle after last row
                  <div
                    key={`row-resize-${actualRowIndex}`}
                    className="absolute left-0 w-full pointer-events-auto"
                    style={{
                      top: rowTop - 1, // Position right on the border line
                      height: '3px',
                      cursor: 'row-resize',
                      backgroundColor: 'transparent'
                    }}
                    onMouseDown={(e) => handleMouseDown(e, '', 'row', actualRowIndex)}
                  />
                ) : null;
              })}
            </div>
          </div>

          <table
            className="relative w-full border border-collapse text-white/90 border-white/10 text-[13px]"
            style={{ tableLayout: 'fixed', borderColor: 'rgba(255, 255, 255, 0.125)', fontSize: '13px' }}
          >
            <thead className="bg-black/50">
              <tr className="border-b border-white/25">
                {displayedColumns.map((key, index) => (
                  <th
                    key={key}
                    draggable
                    onDragStart={(event) => handleColumnDragStart(event, key)}
                    onDragOver={handleColumnDragOver}
                    onDrop={(event) => handleColumnDrop(event, key)}
                    onDragEnd={handleColumnDragEnd}
                    aria-grabbed={draggedColumn === key}
                    title="Sütunu sürükleyerek yeniden sıralayın"
                    className={`p-4 font-semibold text-left capitalize border-r text-white/90 bg-gray-700/95 border-white/15 relative select-none text-[15px] cursor-grab active:cursor-grabbing ${
                      draggedColumn === key ? 'opacity-60 cursor-grabbing ring-1 ring-purple-400/40' : ''
                    }`}
                    style={{ width: `${columnWidths[key] || 120}px`, minWidth: `${columnWidths[key] || 120}px`, borderColor: 'rgba(255, 255, 255, 0.15)' }}
                  >
                    {getColumnHeader(key)}
                    {index < displayedColumns.length - 1 && (
                      <div
                        className={`absolute right-0 top-0 h-full w-1 cursor-col-resize hover:bg-blue-500/50 z-10 ${
                          isResizing && resizingMode === 'column' && resizingColumn === key ? 'bg-blue-500' : ''
                        }`}
                        onMouseDown={(e) => {
                          e.stopPropagation();
                          handleMouseDown(e, key, 'column');
                        }}
                      />
                    )}
                  </th>
                ))}

              </tr>
            </thead>
            <tbody>
              {getCurrentPageOrders().map((order, pageIndex) => {
                const actualIndex = (currentPage - 1) * itemsPerPage + pageIndex;
                const isManualRow = Boolean(order.isManual);
                const manualId = order['__manualId'] as string | undefined;
                const rowId = getRowId(order);
                const primaryColumnKey = displayedColumns[0] || 'buyername';
                const isFullyCompleted =
                  normalizeBoolean(order.Produce) &&
                  normalizeBoolean(order.Ready) &&
                  normalizeBoolean(order.Shipped);
                const completedRowClasses = isFullyCompleted
                  ? 'bg-emerald-500/20 ring-1 ring-emerald-400/30'
                  : '';
                const rowStyle: CSSProperties = {
                  height: globalRowHeight ? `${globalRowHeight}px` : 'auto',
                  borderColor: 'rgba(255, 255, 255, 0.15)',
                  ...(isFullyCompleted
                    ? {
                        backgroundColor: 'rgba(16, 185, 129, 0.12)',
                        boxShadow: '0 0 20px rgba(16, 185, 129, 0.25) inset',
                      }
                    : {}),
                };
                const hasCustomerMessage =
                  typeof order['buyermessage'] === 'string' && order['buyermessage'].trim().length > 0;
                return (
                  <tr
                    key={actualIndex}
                    className={`border-b border-white/15 transition ${
                      isManualRow ? 'bg-purple-900/10' : ''
                    } ${completedRowClasses}`}
                    style={rowStyle}
                    draggable={isPrivilegedUser}
                    onDragStart={(e) => handleRowDragStart(e, rowId)}
                    onDragOver={(e) => handleRowDragOver(e)}
                    onDrop={(e) => handleRowDrop(e, rowId)}
                    onDragEnd={handleRowDragEnd}
                  >
                    {displayedColumns.concat(['Produce', 'Ready', 'Shipped', 'Note'].filter(col => !displayedColumns.includes(col))).map((key) => {
                      const isNoteColumn = key === 'Note';
                      const hasExpress = order['Expres'] && String(order['Expres']).trim() !== '';
                      const isExpressRowNameCell = key === 'buyername' && hasExpress;
                      const isMaterialColumn = key === 'material';
                      const isProductColumn = key === 'productname';
                      const isChainColumn = key === 'Chain Length';
                      const isFullHeightWrapColumn = FULL_HEIGHT_WRAP_COLUMNS.has(key);
                      const baseCellClass = isExpressRowNameCell
                        ? "p-2 border-r text-white/80 border-white/15 bg-blue-500/30 font-bold text-center"
                        : "p-2 border-r text-white/80 border-white/15 last:border-r-0 text-center";
                      const materialCellClass = isMaterialColumn ? getMaterialCellBackgroundClass(order.material || '') : '';
                      const wrapCellClass = isFullHeightWrapColumn
                        ? 'min-h-[48px] align-top text-left'
                        : '';
                      const showRemoveButton = isManualRow && manualId && key === primaryColumnKey && isPrivilegedUser;
                      const highlightNameCell =
                        hasCustomerMessage && key === 'buyername' ? 'bg-red-900/30 ring-1 ring-red-500/40' : '';
                      const hasNoteHighlight = isNoteColumn && typeof order.Note === 'string' && order.Note.trim().length > 0;
                      const noteHighlightClass = hasNoteHighlight ? 'bg-red-500/50 text-white shadow-inner shadow-red-500/40' : '';
                      const rawCellValue = order[key];
                      const normalizedStringValue = typeof rawCellValue === 'string' ? rawCellValue.trim() : rawCellValue;
                      const displayCellValue = rawCellValue !== null && rawCellValue !== undefined ? rawCellValue.toString() : '';
                      const shouldWrapTextContent = shouldApplyTextWrap(key, rawCellValue);
                      const shouldHighlightTaxCell = (() => {
                        if (key === 'ioss') {
                          if (typeof normalizedStringValue === 'string') {
                            const lower = normalizedStringValue.toLowerCase();
                            return lower.length > 0 && lower !== 'yok';
                          }
                          return normalizedStringValue !== null && normalizedStringValue !== undefined && normalizedStringValue !== '';
                        }
                        if (key === 'vatcollected' || key === 'vatid') {
                          if (typeof normalizedStringValue === 'string') {
                            return normalizedStringValue.length > 0;
                          }
                          return normalizedStringValue !== null && normalizedStringValue !== undefined && normalizedStringValue !== '';
                        }
                        return false;
                      })();
                      const taxHighlightClass = shouldHighlightTaxCell ? 'bg-teal-400/50 text-slate-900 font-semibold' : '';
                      const cellClass = `${baseCellClass} ${materialCellClass} ${wrapCellClass} ${showRemoveButton ? 'relative' : ''} ${highlightNameCell} ${noteHighlightClass} ${taxHighlightClass}`;
                      const manualEditableColumn = isManualRow && manualId && !['photo', 'Produce', 'Ready', 'Shipped', 'Note'].includes(key);
                      const isPrivilegedEditableColumn =
                        isPrivilegedUser &&
                        !isManualRow &&
                        !['photo', 'Produce', 'Ready', 'Shipped', 'Note'].includes(key);

                      return (
                        <td key={key} className={cellClass} style={{
                          width: isNoteColumn ? '120px' : '100px',
                          fontSize: '13px',
                          paddingTop: '8px',
                          paddingBottom: '8px'
                        }}>
                          {key === 'photo' ? (
                            isManualRow && manualId ? (
                              order.photo ? (
                                <div className="flex items-center justify-center h-full">
                                  <img
                                    src={resolveOrderPhoto(order)}
                                    alt="Manual Upload"
                                    className="object-contain w-full h-full rounded-md"
                                  />
                                </div>
                              ) : (
                                <div className="flex flex-col items-center justify-center h-full gap-2">
                                  <span className="text-xs text-white/40">No image</span>
                                  <label className="px-2 py-1 text-xs font-semibold text-white bg-purple-600/80 rounded cursor-pointer hover:bg-purple-600">
                                    Upload
                                    <input
                                      type="file"
                                      accept="image/png,image/jpeg,image/jpg"
                                      className="hidden"
                                      onChange={(e) => handleManualImageUpload(manualId, e.target.files?.[0] || null)}
                                    />
                                  </label>
                                </div>
                              )
                            ) : (
                              <div className="flex items-center justify-center h-full">
                                <ImageWithFallback
                                  src={resolveOrderPhoto(order)}
                                  alt="Product Image"
                                  size={Math.max((columnWidths[key] || 120) - 16, 24)}
                                  transaction={order.transaction}
                                />
                              </div>
                            )
                          ) : (key === 'Produce' || key === 'Ready' || key === 'Shipped') ? (
                            <div className="flex items-center justify-center h-full">
                              <AnimatedCheckbox
                                label={`${key} checkbox`}
                                checked={normalizeBoolean(order[key])}
                                onToggle={(next) => handleCheckboxChange(order, key, next)}
                              />
                            </div>
                          ) : key === 'Note' ? (
                            <div className="relative w-full h-full group">
                              <textarea
                                value={order.Note || ''}
                                onChange={(e) => handleNoteChange(order, e.target.value)}
                                onFocus={beginInlineEdit}
                                onBlur={async () => {
                                  await handleNoteBlur(order);
                                  endInlineEdit();
                                }}
                                className="w-full h-full px-2 py-1 pr-16 text-[13px] leading-snug text-white bg-transparent border-0 outline-none resize-none overflow-hidden focus:ring-0 placeholder:text-white/40"
                                placeholder="Click to add note..."
                                rows={2}
                              />
                              <div className="absolute bottom-1 right-1 flex items-center gap-1 opacity-0 pointer-events-none transition-all duration-150 group-hover:opacity-100 group-hover:pointer-events-auto">
                                <label
                                  className="flex items-center justify-center w-7 h-7 rounded-full border border-white/20 bg-black/30 text-white/70 hover:text-white hover:border-white/50 transition-colors cursor-pointer"
                                  title="Not ekine dosya ekle"
                                >
                                  <Paperclip className="w-3.5 h-3.5" />
                                  <input
                                    type="file"
                                    accept={ACCEPTED_ATTACHMENT_TYPES}
                                    className="hidden"
                                    onChange={(e) => handleAttachmentInputChange(order, e)}
                                  />
                                </label>
                                {noteAttachments[rowId] && (
                                  <>
                                    <button
                                      type="button"
                                      onClick={() => handleAttachmentRemove(order)}
                                      title="Eklenen dosyayı kaldır"
                                      className="flex items-center justify-center w-7 h-7 rounded-full border border-white/20 bg-black/30 text-white/70 hover:text-rose-200 hover:border-rose-300/80 transition-colors"
                                    >
                                      <Trash2 className="w-3.5 h-3.5" />
                                    </button>
                                    <button
                                      type="button"
                                      onClick={() => handleAttachmentDownload(order)}
                                      title={`${noteAttachments[rowId].name} dosyasını indir`}
                                      className="flex items-center justify-center w-7 h-7 text-sm font-semibold text-amber-200 border border-amber-400/70 rounded-full bg-amber-500/10 shadow-lg shadow-amber-500/30 hover:bg-amber-500/20 transition-colors animate-pulse"
                                    >
                                      <span className="sr-only">Dosyayı indir</span>
                                      ⬇
                                    </button>
                                  </>
                                )}
                              </div>
                            </div>
                          ) : key === 'Personalization' && isManualRow && manualId ? (
                            <textarea
                              value={getManualDisplayValue(manualId, String(key), normalizeMultiline(order[key]) || '')}
                              onFocus={beginInlineEdit}
                              onChange={(e) =>
                                handleManualCellInput(manualId, String(key), e.target.value)
                              }
                              onBlur={async (e) => {
                                await handleManualCellBlur(manualId, String(key), e.target.value);
                                endInlineEdit();
                              }}
                              rows={3}
                              className="w-full min-h-[48px] px-1.5 py-1 text-[13px] text-white bg-transparent border border-transparent border-b border-white/25 focus:border-white/60 focus:ring-0 resize-none"
                              placeholder="Metin girin..."
                            />
                          ) : key === 'Personalization' ? (
                            <div className="w-full h-full overflow-auto">
                              <div className="pr-1 text-[13px] leading-snug whitespace-pre-wrap break-words">
                                {normalizeMultiline(order[key])}
                              </div>
                            </div>
                          ) : key === 'ioss' ? (
                            <div className={`w-full h-full overflow-hidden ${shouldWrapTextContent ? 'text-left' : ''}`}>
                              <div
                                className={`${shouldWrapTextContent ? 'whitespace-pre-wrap break-words leading-snug' : ''}`}
                                style={shouldWrapTextContent ? TEXT_WRAP_STYLE : { display: '-webkit-box', WebkitLineClamp: 5, WebkitBoxOrient: 'vertical' }}
                              >
                                {(() => {
                                  if (typeof normalizedStringValue === 'string' && normalizedStringValue.toLowerCase() === 'yok') {
                                    return '';
                                  }
                                  return displayCellValue;
                                })()}
                              </div>
                            </div>
                          ) : manualEditableColumn ? (
                            <input
                              type="text"
                              value={getManualDisplayValue(manualId, String(key), (order[key] ?? '')?.toString())}
                              onFocus={beginInlineEdit}
                            onChange={(e) =>
                              handleManualCellInput(manualId, String(key), e.target.value)
                            }
                            onBlur={async (e) => {
                              await handleManualCellBlur(manualId, String(key), e.target.value || '');
                              endInlineEdit();
                            }}
                            className="w-full px-1.5 py-1 text-[13px] text-white bg-transparent border border-transparent border-b border-white/25 focus:border-white/60 focus:ring-0 outline-none"
                              placeholder="Değer girin"
                            />
                          ) : isPrivilegedEditableColumn ? (
                            <input
                              value={rawCellValue !== null && rawCellValue !== undefined ? rawCellValue.toString() : ''}
                            onChange={(e) => handlePrivilegedCellChange(order, key, e.target.value)}
                            onFocus={beginInlineEdit}
                            onBlur={async (e) => {
                              await handlePrivilegedCellBlur(order, key, e.target.value);
                              endInlineEdit();
                            }}
                              className="w-full bg-transparent text-white text-[13px] px-1 py-0.5 border-none outline-none focus:outline-none focus:ring-0 focus:bg-white/5 transition-colors appearance-none"
                            />
                          ) : key.includes('Kesildi') || key.includes('Hazır') || key.includes('Gönderildi') ? (
                            <span className={`px-2 py-1 text-xs rounded font-bold ${
                              normalizeBoolean(order[key]) ? 'bg-green-600' : 'bg-gray-600'
                            }`}>
                              {normalizeBoolean(order[key]) ? '✓' : '✗'}
                            </span>
                          ) : (
                            <div
                              className={`w-full h-full overflow-hidden ${
                                shouldWrapTextContent || isFullHeightWrapColumn ? 'text-left' : ''
                              } ${isFullHeightWrapColumn ? 'flex items-start' : ''}`}
                            >
                              <div
                                className={`${shouldWrapTextContent ? 'whitespace-pre-wrap break-words leading-snug' : ''} ${
                                  isFullHeightWrapColumn ? 'flex-1 h-full overflow-hidden' : ''
                                }`}
                                style={
                                  isFullHeightWrapColumn
                                    ? FULL_HEIGHT_WRAP_STYLE
                                    : shouldWrapTextContent
                                      ? TEXT_WRAP_STYLE
                                      : { display: '-webkit-box', WebkitLineClamp: 5, WebkitBoxOrient: 'vertical' }
                                }
                              >
                                {displayCellValue}
                              </div>
                            </div>
                          )}
                          {showRemoveButton && manualId && (
                            <button
                              type="button"
                              onClick={() => handleRemoveManualRow(manualId)}
                              className="absolute -top-1 -right-1 flex items-center justify-center w-5 h-5 text-xs text-white bg-red-600/80 rounded-full hover:bg-red-600"
                              title="Manuel satırı kaldır"
                            >
                              ×
                            </button>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center mt-6 space-x-4">
              <button
                onClick={goToPreviousPage}
                disabled={currentPage === 1}
                className="px-4 py-2 text-sm font-medium text-white transition-colors duration-200 border border-gray-600 rounded-lg bg-gray-700/50 hover:bg-gray-600/50 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-gray-700/50"
              >
                Previous
              </button>

              <div className="flex items-center space-x-2">
                <span className="text-sm text-white/70">Page {currentPage} of {totalPages}</span>
                <span className="text-sm text-white/50">({totalOrders} total orders)</span>
              </div>

              <button
                onClick={goToNextPage}
                disabled={currentPage === totalPages}
                className="px-4 py-2 text-sm font-medium text-white transition-colors duration-200 border border-gray-600 rounded-lg bg-gray-700/50 hover:bg-gray-600/50 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-gray-700/50"
              >
                Next
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="flex items-center justify-center py-12">
          <span className="text-white/50">Filtreye uyan sipariş bulunamadı</span>
        </div>
      )}
        </>
      )}
    </motion.div>
  );
};

export default Orders;
