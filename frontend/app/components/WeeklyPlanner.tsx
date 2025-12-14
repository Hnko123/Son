"use client";

import React, {
  useMemo,
  useState,
  useEffect,
  useCallback,
  useRef
} from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Loader2, Plus, Trash2 } from 'lucide-react';
import ScopeToggle, { ViewScope } from './ui/scope-toggle';

interface PlannerEntry {
  id: number;
  text: string;
  date: string;
  assigned_to?: number | null;
  assigned_name?: string | null;
  created_by?: number | null;
  isSaving?: boolean;
  isNew?: boolean;
}

interface DayColumn {
  key: DayKey;
  label: string;
  accent: string;
  border: string;
  bg: string;
}

interface UserLite {
  id: number;
  username: string | null;
  full_name: string | null;
}

type PlannerState = Record<DayKey, PlannerEntry[]>;
type DayKey = 'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat' | 'sun';
type PlannerPayload = Partial<PlannerEntry> & { assigned_username?: string };

const mentionRegex = /@([\w.\-]+)/i;

const extractMentionUsername = (text?: string) => {
  if (!text) return null;
  const match = text.match(mentionRegex);
  if (!match) return null;
  return match[1].trim();
};

const buildAssignmentPayload = (text?: string, entry?: PlannerEntry) => {
  const username = extractMentionUsername(text);
  if (username) {
    return { assigned_username: username };
  }
  const hadAssignment = Boolean(entry?.assigned_to || entry?.assigned_name);
  if (hadAssignment) {
    return { assigned_username: '' };
  }
  return {};
};

const dayConfig: DayColumn[] = [
  { key: 'mon', label: 'Mon', accent: 'text-indigo-200', border: 'border-indigo-400/40', bg: 'from-indigo-400/10 to-transparent' },
  { key: 'tue', label: 'Tue', accent: 'text-sky-200', border: 'border-sky-400/40', bg: 'from-sky-400/10 to-transparent' },
  { key: 'wed', label: 'Wed', accent: 'text-emerald-200', border: 'border-emerald-400/40', bg: 'from-emerald-400/10 to-transparent' },
  { key: 'thu', label: 'Thu', accent: 'text-orange-200', border: 'border-orange-400/40', bg: 'from-orange-400/10 to-transparent' },
  { key: 'fri', label: 'Fri', accent: 'text-pink-200', border: 'border-pink-400/40', bg: 'from-pink-400/10 to-transparent' },
  { key: 'sat', label: 'Sat', accent: 'text-teal-200', border: 'border-teal-400/40', bg: 'from-teal-400/10 to-transparent' },
  { key: 'sun', label: 'Sun', accent: 'text-amber-200', border: 'border-amber-400/40', bg: 'from-amber-400/10 to-transparent' },
];

const emptyPlannerState = (): PlannerState => ({
  mon: [],
  tue: [],
  wed: [],
  thu: [],
  fri: [],
  sat: [],
  sun: [],
});

const WEEKDAY_KEYS: DayKey[] = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const formatDateKey = (date: Date) => [
  date.getFullYear(),
  String(date.getMonth() + 1).padStart(2, '0'),
  String(date.getDate()).padStart(2, '0'),
].join('-');

const formatUserDisplay = (user?: Pick<UserLite, 'username' | 'full_name'> | null) => {
  const raw = user?.full_name || user?.username || '';
  if (!raw) return '';
  return raw
    .split(/\s+/)
    .filter(Boolean)
    .map(part => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
    .join(' ');
};

const parsePlannerDate = (value: string): Date => {
  if (!value) return new Date();
  const [datePart] = value.split('T');
  if (datePart) {
    return new Date(`${datePart}T12:00:00`);
  }
  return new Date(value);
};

const getDayKeyForDate = (dateStr: string): DayKey => {
  const date = parsePlannerDate(dateStr);
  const weekday = date.getDay(); // 0 = Sunday
  if (Number.isNaN(weekday)) return 'mon';
  if (weekday === 0) return 'sun';
  return WEEKDAY_KEYS[weekday - 1];
};

const WeeklyPlanner = () => {
  const router = useRouter();
  const [planner, setPlanner] = useState<PlannerState>(() => emptyPlannerState());
  const [weekStart, setWeekStart] = useState(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const weekday = (today.getDay() + 6) % 7; // convert so Monday=0
    const start = new Date(today);
    start.setDate(today.getDate() - weekday);
    return start;
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [users, setUsers] = useState<UserLite[]>([]);
  const saveTimers = useRef<Record<number, ReturnType<typeof setTimeout>>>({});
  const highlightTimers = useRef<Record<number, ReturnType<typeof setTimeout>>>({});
  const [isSyncing, setIsSyncing] = useState(false);
  const [entryHighlights, setEntryHighlights] = useState<Record<number, boolean>>({});
  const [dataScope, setDataScope] = useState<ViewScope>("global");
  const [currentUserId, setCurrentUserId] = useState<number | null>(null);

  const getAuthHeaders = useCallback((withJson = false): Record<string, string> => {
    if (typeof window === 'undefined') return {};
    const token = localStorage.getItem('access_token');
    const headers: Record<string, string> = {
      Accept: 'application/json'
    };
    if (withJson) {
      headers['Content-Type'] = 'application/json';
    }
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }
    return headers;
  }, []);

  const weekDates = useMemo(() => {
    return dayConfig.map((day, index) => {
      const date = new Date(weekStart);
      date.setDate(weekStart.getDate() + index);
      return { ...day, date };
    });
  }, [weekStart]);

  const weekStartKey = useMemo(() => formatDateKey(weekStart), [weekStart]);

  const groupEntries = useCallback((entries: PlannerEntry[]): PlannerState => {
    const grouped = emptyPlannerState();
    entries.forEach(entry => {
      const key = getDayKeyForDate(entry.date);
      grouped[key] = [...grouped[key], entry];
    });
    return grouped;
  }, []);

  const handleUnauthorized = useCallback((status: number) => {
    if (status === 401) {
      localStorage.removeItem('access_token');
      localStorage.removeItem('user');
      window.dispatchEvent(new Event('auth-token-updated'));
      if (typeof window !== 'undefined') {
        fetch('/api/auth/logout', { method: 'POST', credentials: 'include' }).catch(() => {});
      }
      router.replace('/auth/signin');
      return true;
    }
    return false;
  }, [router]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      const stored = window.localStorage.getItem('user');
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed?.id) {
          setCurrentUserId(parsed.id);
        }
      }
    } catch (err) {
      console.warn('Weekly planner user parse failed', err);
    }
  }, []);

  const loadEntries = useCallback(async (showSpinner: boolean = true) => {
    if (showSpinner) {
      setLoading(true);
    }
    setError(null);
    try {
      const params = new URLSearchParams({
        week_start: weekStartKey,
        scope: dataScope,
      });
      const res = await fetch(`/api/weekly-planner?${params.toString()}`, {
        headers: {
          Accept: "application/json",
          ...getAuthHeaders(),
        },
      });
      if (!res.ok) {
        if (handleUnauthorized(res.status)) return;
        throw new Error(`Haftalık plan yüklenemedi (${res.status})`);
      }
      const data: PlannerEntry[] = await res.json();
      setPlanner(groupEntries(data));
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Weekly planner yüklenemedi';
      setError(message);
    } finally {
      if (showSpinner) {
        setLoading(false);
      }
    }
  }, [getAuthHeaders, groupEntries, handleUnauthorized, weekStartKey, dataScope]);


  const loadUsers = useCallback(async () => {
    try {
      const res = await fetch('/api/users', { headers: getAuthHeaders() });
      if (res.ok) {
        const data: UserLite[] = await res.json();
        setUsers(data);
      }
    } catch (err) {
      console.warn('Kullanıcı listesi alınamadı', err);
    }
  }, [getAuthHeaders]);

  useEffect(() => {
    loadEntries(true);
    loadUsers();
  }, [loadEntries, loadUsers]);

  useEffect(() => {
    const interval = window.setInterval(() => {
      loadEntries(false);
    }, 15000);
    return () => window.clearInterval(interval);
  }, [loadEntries]);

  useEffect(() => {
    return () => {
      Object.values(saveTimers.current).forEach(timer => clearTimeout(timer));
    };
  }, []);

  const replaceEntryInState = useCallback((updated: PlannerEntry) => {
    setPlanner(prev => {
      const flat = WEEKDAY_KEYS.flatMap(day => prev[day]).filter(entry => entry.id !== updated.id);
      const regrouped = groupEntries(flat);
      const key = getDayKeyForDate(updated.date);
      regrouped[key] = [...(regrouped[key] || []), updated];
      return regrouped;
    });
  }, [groupEntries]);

  const handleAddEntry = async (dayKey: DayKey) => {
    const date = weekDates.find(d => d.key === dayKey)?.date;
    if (!date) return;
    const isoDate = formatDateKey(date);
    const optimistic: PlannerEntry = {
      id: Date.now() * -1,
      text: '',
      date: isoDate,
      isSaving: true,
      isNew: true,
    };
    setPlanner(prev => ({
      ...prev,
      [dayKey]: [...prev[dayKey], optimistic],
    }));

    try {
      setIsSyncing(true);
      const res = await fetch('/api/weekly-planner', {
        method: 'POST',
        headers: getAuthHeaders(true),
        body: JSON.stringify({ date: isoDate, text: '' }),
      });
      if (!res.ok) {
        if (handleUnauthorized(res.status)) return;
        throw new Error('Not oluşturulamadı');
      }
      const created: PlannerEntry = await res.json();
      let pendingText = '';
      setPlanner(prev => {
        const updatedColumn = prev[dayKey].map(entry => {
          if (entry.id === optimistic.id) {
            pendingText = entry.text;
            return { ...created, text: entry.text };
          }
          return entry;
        });
        return {
          ...prev,
          [dayKey]: updatedColumn,
        };
      });
      if (pendingText.trim().length > 0) {
        persistEntry(created.id, { text: pendingText }, created);
      }
    } catch (err) {
      console.error(err);
      setError(err instanceof Error ? err.message : 'Not eklenemedi');
      setPlanner(prev => ({
        ...prev,
        [dayKey]: prev[dayKey].filter(entry => entry.id !== optimistic.id),
      }));
    } finally {
      setIsSyncing(false);
    }
  };

  const persistEntry = useCallback(async (entryId: number, payload: PlannerPayload, entry?: PlannerEntry) => {
    try {
      const res = await fetch(`/api/weekly-planner/${entryId}`, {
        method: 'PUT',
        headers: getAuthHeaders(true),
        body: JSON.stringify({
          ...payload,
          ...buildAssignmentPayload(payload.text, entry),
        }),
      });
      if (!res.ok) {
        if (handleUnauthorized(res.status)) return;
        throw new Error('Not güncellenemedi');
      }
      const updated: PlannerEntry = await res.json();
      replaceEntryInState(updated);
    } catch (err) {
      console.error(err);
      setError(err instanceof Error ? err.message : 'Not kaydedilemedi');
    }
  }, [getAuthHeaders, handleUnauthorized, replaceEntryInState]);

  const triggerEntryHighlight = useCallback((entryId: number) => {
    if (highlightTimers.current[entryId]) {
      clearTimeout(highlightTimers.current[entryId]);
    }
    setEntryHighlights(prev => ({ ...prev, [entryId]: true }));
    highlightTimers.current[entryId] = setTimeout(() => {
      setEntryHighlights(prev => {
        const next = { ...prev };
        delete next[entryId];
        return next;
      });
      delete highlightTimers.current[entryId];
    }, 1200);
  }, []);

  const debouncedUpdate = (entry: PlannerEntry, text: string) => {
    if (!entry || entry.id < 0) return;
    if (saveTimers.current[entry.id]) {
      clearTimeout(saveTimers.current[entry.id]);
    }
    saveTimers.current[entry.id] = setTimeout(() => {
      persistEntry(entry.id, { text }, entry);
    }, 700);
  };

  const handleTextChange = (dayKey: DayKey, entryId: number, text: string) => {
    setPlanner(prev => ({
      ...prev,
      [dayKey]: prev[dayKey].map(entry =>
        entry.id === entryId ? { ...entry, text } : entry
      ),
    }));

    const entry = planner[dayKey].find(item => item.id === entryId);
    if (!entry) return;
    debouncedUpdate(entry, text);
  };

  const handleEntryKeyDown = (
    event: React.KeyboardEvent<HTMLTextAreaElement>,
    entry: PlannerEntry
  ) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      persistEntry(entry.id, { text: entry.text }, entry);
      triggerEntryHighlight(entry.id);
    }
  };

  const handleDelete = async (dayKey: DayKey, entryId: number) => {
    setPlanner(prev => ({
      ...prev,
      [dayKey]: prev[dayKey].filter(entry => entry.id !== entryId),
    }));
    try {
      const res = await fetch(`/api/weekly-planner/${entryId}`, {
        method: 'DELETE',
        headers: getAuthHeaders(),
      });
      if (!res.ok) {
        if (handleUnauthorized(res.status)) return;
        throw new Error('Not silinemedi');
      }
    } catch (err) {
      console.error(err);
      setError(err instanceof Error ? err.message : 'Not silinemedi');
      loadEntries();
    }
  };

  const assignedPreview = (entry: PlannerEntry) => {
    if (entry.assigned_name) return entry.assigned_name;
    const match = entry.text.match(/@([\w\.\-]+)/);
    if (!match) return null;
    const token = match[1].toLowerCase();
    const found = users.find(user =>
      (user.username && user.username.toLowerCase() === token) ||
      (user.full_name && user.full_name.toLowerCase().includes(token))
    );
    return formatUserDisplay(found);
  };

  const formatDateLabel = (date: Date) => {
    return date.toLocaleDateString('tr-TR', { day: 'numeric', month: 'short' });
  };

  const weekRangeLabel = useMemo(() => {
    const end = new Date(weekStart);
    end.setDate(weekStart.getDate() + 6);
    const formatter = new Intl.DateTimeFormat('tr-TR', { day: '2-digit', month: 'short' });
    return `${formatter.format(weekStart)} - ${formatter.format(end)}`;
  }, [weekStart]);

  const shiftWeek = (direction: -1 | 1) => {
    setWeekStart(prev => {
      const next = new Date(prev);
      next.setDate(prev.getDate() + direction * 7);
      return next;
    });
  };

  useEffect(() => {
    return () => {
      Object.values(highlightTimers.current).forEach(timer => clearTimeout(timer));
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen w-full p-6"
    >
      <div className="flex flex-col gap-3 mb-6 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <motion.h1
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-3xl font-semibold text-white"
            >
              Weekly Planner
            </motion.h1>
            <ScopeToggle
              scope={dataScope}
              onScopeChange={(value) => setDataScope(value)}
              disabledPersonal={!currentUserId}
            />
          </div>
          <p className="text-sm text-white/70">
            @kullanıcı yazarak görevlendirme yapabilir, görevli kullanıcı Dashboard&apos;unda bu planı görebilir.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => shiftWeek(-1)}
            className="px-3 py-1 text-sm text-white border border-white/20 rounded-full hover:bg-white/10 transition"
          >
            Önceki Hafta
          </button>
          <div className="px-4 py-1 text-sm font-semibold text-white/80 bg-white/5 rounded-full border border-white/10">
            {weekRangeLabel}
          </div>
          <button
            onClick={() => shiftWeek(1)}
            className="px-3 py-1 text-sm text-white border border-white/20 rounded-full hover:bg-white/10 transition"
          >
            Sonraki Hafta
          </button>
        </div>
      </div>

      {error && (
        <div className="mb-4 rounded-xl border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-200">
          {error}
        </div>
      )}

      {loading ? (
        <div className="flex items-center justify-center py-20 text-white/70">
          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
          Haftalık veriler yükleniyor...
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-7">
          {weekDates.map(day => (
            <motion.div
              key={day.key}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={`rounded-2xl border ${day.border} bg-gradient-to-b ${day.bg} p-4 flex flex-col min-h-[260px]`}
            >
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex flex-col">
                  <span className={`text-xs font-semibold uppercase tracking-wide ${day.accent}`}>
                    {day.label}
                  </span>
                  <span className="text-sm text-white/70">
                    {formatDateLabel(day.date)}
                  </span>
                </div>
                <button
                  className="p-1 text-white/70 rounded-full border border-white/20 hover:bg-white/10 transition"
                  onClick={() => handleAddEntry(day.key)}
                  title="Add note"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              <div className="flex-1 mt-3 space-y-3">
                {planner[day.key].length === 0 && (
                  <p className="text-xs text-white/40">Henüz not yok</p>
                )}

                {planner[day.key].map(entry => {
                  const assignedLabel = assignedPreview(entry);
                  return (
                    <div
                      key={entry.id}
                      className={`relative rounded-xl border border-white/15 bg-white/5 p-3 shadow-inner shadow-black/20 group transition ring-0 ${
                        entryHighlights[entry.id] ? 'ring-2 ring-emerald-400/70 bg-emerald-500/10' : ''
                      }`}
                    >
                      <textarea
                        value={entry.text}
                        onChange={(e) => handleTextChange(day.key, entry.id, e.target.value)}
                        onKeyDown={(e) => handleEntryKeyDown(e, entry)}
                        placeholder="@username yazarak görevlendir"
                        className="w-full bg-transparent text-sm text-white resize-none focus:outline-none"
                        rows={3}
                      />
                      <div className="mt-2 flex items-center justify-between text-[11px] text-white/60">
                        <div className="flex items-center gap-2">
                          {assignedLabel && (
                            <span className="inline-flex items-center rounded-full bg-white/10 px-2 py-0.5 text-xs text-white/80 border border-white/15">
                              @{assignedLabel}
                            </span>
                          )}
                          {entry.isSaving && (
                            <Loader2 className="w-3 h-3 animate-spin text-white/50" />
                          )}
                        </div>
                        <button
                          type="button"
                          className="text-white/40 hover:text-red-300 transition"
                          onClick={() => handleDelete(day.key, entry.id)}
                          title="Notu sil"
                        >
                          <Trash2 className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              <button
                onClick={() => handleAddEntry(day.key)}
                className="mt-3 inline-flex items-center justify-center gap-2 rounded-xl border border-dashed border-white/20 py-2 text-xs font-semibold uppercase tracking-wide text-white/70 hover:border-white/40 hover:text-white transition"
              >
                <Plus className="w-4 h-4" /> Add note
              </button>
            </motion.div>
          ))}
        </div>
      )}

      {isSyncing && (
        <div className="fixed bottom-6 right-6 flex items-center gap-2 rounded-full border border-white/10 bg-black/70 px-4 py-2 text-xs text-white/70 backdrop-blur">
          <Loader2 className="w-4 h-4 animate-spin" />
          Değişiklikler kaydediliyor...
        </div>
      )}
    </motion.div>
  );
};

export default WeeklyPlanner;
