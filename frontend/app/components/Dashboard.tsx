"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '../../components/ui/card';
import { useWebSocket } from './WebSocketProvider';
import FestiveSnowOverlay from './decor/FestiveSnowOverlay';

// Define TypeScript interfaces
interface OrderData {
  transaction?: string;
  productname?: string;
  buyername?: string;
  buyeremail?: string;
  tarih?: string;
  status?: string;
  assigned_to_user_id?: number | null;
  photo?: string;
  [key: string]: any;
}

interface StageTrendPoint {
  date: string;
  produce: number;
  ready: number;
  shipped: number;
}

interface DashboardStats {
  total_assigned: number;
  completed: number;
  completed_on_time: number;
  overdue_completed: number;
  in_progress: number;
  overdue_in_progress: number;
  overdue_total: number;
  weekly_assigned?: number;
}

interface DashboardProps {
  orders: OrderData[];
  dashboardStats?: DashboardStats | null;
}

interface OrdersSummaryStats {
  completed: number;
  pending: number;
  produce: number;
  ready: number;
  shipped: number;
  daily_completed: number;
  monthly_trend: { date: string; count: number }[];
  stage_trend?: StageTrendPoint[];
}

const normalizeOrderFlag = (value: unknown) => {
  if (typeof value === 'boolean') return value;
  if (typeof value === 'number') return value === 1;
  if (typeof value === 'string') {
    const normalized = value.trim().toLowerCase();
    return normalized === 'true' || normalized === '1' || normalized === 'yes';
  }
  return false;
};

const tryParseDate = (raw?: unknown): Date | null => {
  if (typeof raw !== 'string') return null;
  const trimmed = raw.trim();
  if (!trimmed) return null;
  const direct = new Date(trimmed);
  if (!Number.isNaN(direct.getTime())) return direct;
  const pattern = trimmed.match(/^(\d{1,2})[./-](\d{1,2})[./-](\d{2,4})$/);
  if (pattern) {
    const [, d, m, y] = pattern;
    const year = y.length === 2 ? `20${y}` : y.padStart(4, '20');
    const iso = `${year}-${m.padStart(2, '0')}-${d.padStart(2, '0')}`;
    const fallback = new Date(iso);
    if (!Number.isNaN(fallback.getTime())) return fallback;
  }
  return null;
};

const getOrderDate = (order: OrderData): Date | null => {
  const candidates = [
    order.tarih,
    (order as any)?.tarihh,
    (order as any)?.created_at,
    (order as any)?.updated_at
  ];
  for (const candidate of candidates) {
    const parsed = tryParseDate(candidate);
    if (parsed) return parsed;
  }
  return null;
};

const formatDateKey = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

const formatDayLabel = (date: Date) => String(date.getDate()).padStart(2, '0');

const TASK_CARD_ORDER_STORAGE_KEY = 'dashboard-task-card-order';

const FestiveGarland: React.FC = () => {
  return (
    <div
      className="pointer-events-none absolute left-1/2 top-6 z-[5] flex w-full max-w-3xl -translate-x-1/2 items-center justify-center"
      aria-hidden="true"
    >
      <span className="text-2xl drop-shadow-[0_0_8px_rgba(16,185,129,0.6)]">🎄</span>
    </div>
  );
};

const Dashboard: React.FC<DashboardProps> = ({ orders = [], dashboardStats }) => {
  const { notifications, markNotificationRead } = useWebSocket();
  const [ordersSummary, setOrdersSummary] = React.useState<OrdersSummaryStats | null>(null);
  const [taskCardOrder, setTaskCardOrder] = React.useState<string[]>([]);
  const [draggingTaskCard, setDraggingTaskCard] = React.useState<string | null>(null);
  const [preciousPrices, setPreciousPrices] = React.useState<{ gold: number | null; silver: number | null; fetchedAt: string | null }>({
    gold: null,
    silver: null,
    fetchedAt: null
  });
  const [preciousLoading, setPreciousLoading] = React.useState(true);
  const [preciousError, setPreciousError] = React.useState<string | null>(null);
  const formatPreciousValue = React.useCallback(
    (value: number | null) => {
      if (value === null || Number.isNaN(value)) return '—';
      return value.toLocaleString('tr-TR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    },
    []
  );
  const preciousUpdatedLabel = React.useMemo(() => {
    if (!preciousPrices.fetchedAt) return null;
    try {
      return new Date(preciousPrices.fetchedAt).toLocaleString('tr-TR');
    } catch {
      return preciousPrices.fetchedAt;
    }
  }, [preciousPrices.fetchedAt]);

  const fetchOrdersSummary = React.useCallback(async () => {
    try {
      const response = await fetch('/api/dashboard/orders-stats');
      if (response.ok) {
        const data = await response.json();
        setOrdersSummary(data);
      }
    } catch (error) {
      console.error('Unable to fetch dashboard order stats', error);
    }
  }, []);

  React.useEffect(() => {
    fetchOrdersSummary();
    const interval = window.setInterval(fetchOrdersSummary, 10000);
    return () => window.clearInterval(interval);
  }, [fetchOrdersSummary]);

  React.useEffect(() => {
    let cancelled = false;
    const fetchPrecious = async () => {
      try {
        setPreciousLoading(true);
        setPreciousError(null);
        const response = await fetch('/api/precious-prices');
        if (!response.ok) {
          throw new Error('Fiyat verisi alınamadı');
        }
        const data = await response.json();
        if (!cancelled) {
          setPreciousPrices({
            gold: typeof data.gold_sell === 'number' ? data.gold_sell : (typeof data.gold_sell === 'string' ? Number(data.gold_sell) : null),
            silver: typeof data.silver_sell === 'number' ? data.silver_sell : (typeof data.silver_sell === 'string' ? Number(data.silver_sell) : null),
            fetchedAt: data.fetched_at || null
          });
        }
      } catch (error) {
        if (!cancelled) {
          setPreciousError(error instanceof Error ? error.message : 'Fiyat verisi alınamadı');
        }
      } finally {
        if (!cancelled) {
          setPreciousLoading(false);
        }
      }
    };
    fetchPrecious();
    const interval = window.setInterval(fetchPrecious, 6 * 60 * 60 * 1000);
    return () => {
      cancelled = true;
      window.clearInterval(interval);
    };
  }, []);

  const processedOrders = React.useMemo(() => {
    return orders.map(order => {
      const produce = normalizeOrderFlag(order.Produce ?? order['Kesildi']);
      const ready = normalizeOrderFlag(order.Ready ?? order['Hazır']);
      const shipped = normalizeOrderFlag(order.Shipped ?? order['Gönderildi']);
      return { order, produce, ready, shipped };
    });
  }, [orders]);

  const completedOrders = React.useMemo(
    () => processedOrders.filter(item => item.produce && item.ready && item.shipped),
    [processedOrders]
  );

  // Calculate fallback stats from orders data
  const localStats = React.useMemo(() => {
    return {
      completed: completedOrders.length,
      pending: Math.max(orders.length - completedOrders.length, 0),
      produce: processedOrders.filter(
        item => item.produce && !item.ready
      ).length,
      ready: processedOrders.filter(item => item.produce && item.ready && !item.shipped).length,
      shipped: processedOrders.filter(item => item.shipped).length
    };
  }, [completedOrders.length, orders.length, processedOrders]);

  const todayCompletedFallback = React.useMemo(() => {
    const todayKey = formatDateKey(new Date());
    return completedOrders.filter(item => {
      const date = getOrderDate(item.order);
      return date ? formatDateKey(date) === todayKey : false;
    }).length;
  }, [completedOrders]);

  const fallbackMonthlyTrend = React.useMemo(() => {
    const entries = new Map<string, number>();
    completedOrders.forEach(item => {
      const date = getOrderDate(item.order);
      if (!date) return;
      const key = formatDateKey(date);
      entries.set(key, (entries.get(key) || 0) + 1);
    });

    const today = new Date();
    const result: { key: string; label: string; count: number }[] = [];
    for (let i = 29; i >= 0; i--) {
      const day = new Date(today);
      day.setDate(today.getDate() - i);
      const key = formatDateKey(day);
      result.push({
        key,
        label: formatDayLabel(day),
        count: entries.get(key) || 0
      });
    }
    return result;
  }, [completedOrders]);

  const monthlyCompletedTrend = React.useMemo(() => {
    if (ordersSummary?.monthly_trend) {
      return ordersSummary.monthly_trend.map(point => {
        const dateObj = new Date(point.date);
        return {
          key: point.date,
          label: formatDayLabel(dateObj),
          count: point.count
        };
      });
    }
    return fallbackMonthlyTrend;
  }, [fallbackMonthlyTrend, ordersSummary]);

  const fallbackStageTrend = React.useMemo(() => {
    const today = new Date();
    const buckets = new Map<string, { key: string; label: string; produce: number; ready: number; shipped: number }>();
    for (let i = 29; i >= 0; i--) {
      const day = new Date(today);
      day.setDate(today.getDate() - i);
      const key = formatDateKey(day);
      buckets.set(key, {
        key,
        label: formatDayLabel(day),
        produce: 0,
        ready: 0,
        shipped: 0
      });
    }
    processedOrders.forEach(item => {
      const date = getOrderDate(item.order);
      if (!date) return;
      const key = formatDateKey(date);
      const bucket = buckets.get(key);
      if (!bucket) return;
      if (item.produce) bucket.produce += 1;
      if (item.ready) bucket.ready += 1;
      if (item.shipped) bucket.shipped += 1;
    });
    return Array.from(buckets.values());
  }, [processedOrders]);

  const stageGridData = React.useMemo(() => {
    if (ordersSummary?.stage_trend?.length) {
      return ordersSummary.stage_trend.map(point => {
        const dateObj = new Date(point.date);
        return {
          key: point.date,
          label: formatDayLabel(dateObj),
          produce: point.produce ?? 0,
          ready: point.ready ?? 0,
          shipped: point.shipped ?? 0
        };
      });
    }
    return fallbackStageTrend;
  }, [ordersSummary, fallbackStageTrend]);

  const maxStageCellValue = React.useMemo(() => {
    if (!stageGridData.length) return 1;
    const maxValue = stageGridData.reduce((max, point) => {
      const total = point.produce + point.ready + point.shipped;
      return total > max ? total : max;
    }, 0);
    return maxValue || 1;
  }, [stageGridData]);

  const monthlyCompletedTotal = React.useMemo(
    () => monthlyCompletedTrend.reduce((sum, point) => sum + point.count, 0),
    [monthlyCompletedTrend]
  );

  const busiestDay = React.useMemo(() => {
    if (!monthlyCompletedTrend.length) return null;
    return monthlyCompletedTrend.reduce((prev, point) =>
      point.count > prev.count ? point : prev
    );
  }, [monthlyCompletedTrend]);

  const derivedStats = React.useMemo(() => ({
    completed: ordersSummary?.completed ?? localStats.completed,
    pending: ordersSummary?.pending ?? localStats.pending,
    produce: ordersSummary?.produce ?? localStats.produce,
    ready: localStats.ready,
    shipped: ordersSummary?.shipped ?? localStats.shipped,
    daily_completed: ordersSummary?.daily_completed ?? todayCompletedFallback
  }), [localStats.completed, localStats.pending, localStats.produce, localStats.ready, localStats.shipped, ordersSummary, todayCompletedFallback]);

  const taskNotifications = notifications
    .filter(notification => notification.type === 'task_assigned' && !notification.read)
    .slice(0, 5);

  const statCards = [
    { icon: '⏳', value: derivedStats.pending, label: 'Pending' },
    { icon: '✂️', value: derivedStats.produce, label: 'Produce' },
    { icon: '✅', value: derivedStats.ready, label: 'Ready' },
    { icon: '🚚', value: derivedStats.shipped, label: 'Shipped' },
    { icon: '🔥', value: derivedStats.daily_completed, label: 'Daily Completed' },
    { icon: '🏁', value: derivedStats.completed, label: 'Completed Orders' }
  ];

  const taskStatCards = dashboardStats ? [
    { icon: '📋', value: dashboardStats.total_assigned, label: 'Total Assigned Tasks' },
    { icon: '📅', value: dashboardStats.weekly_assigned ?? 0, label: 'Weekly Planner Tasks' },
    { icon: '✅', value: dashboardStats.completed, label: 'Completed Tasks' },
    { icon: '⏰', value: dashboardStats.completed_on_time, label: 'On Time' },
    { icon: '⚠️', value: dashboardStats.overdue_in_progress, label: 'Overdue Tasks', alert: true },
    { icon: '🔄', value: dashboardStats.in_progress, label: 'In Progress' }
  ] : [];

  const persistTaskCardOrder = React.useCallback((order: string[]) => {
    if (typeof window === 'undefined') return;
    try {
      window.localStorage.setItem(TASK_CARD_ORDER_STORAGE_KEY, JSON.stringify(order));
    } catch (error) {
      console.warn('Unable to persist task card order', error);
    }
  }, []);

  React.useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      const stored = window.localStorage.getItem(TASK_CARD_ORDER_STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          setTaskCardOrder(parsed.filter((label: unknown): label is string => typeof label === 'string'));
        }
      }
    } catch (error) {
      console.warn('Unable to load task card order', error);
    }
  }, []);

  React.useEffect(() => {
    if (!taskStatCards.length) {
      setTaskCardOrder([]);
      return;
    }
    setTaskCardOrder(prev => {
      const validPrev = prev.filter(label => taskStatCards.some(card => card.label === label));
      const missing = taskStatCards
        .map(card => card.label)
        .filter(label => !validPrev.includes(label));
      const nextOrder = [...validPrev, ...missing];
      if (nextOrder.length === prev.length && nextOrder.every((label, idx) => label === prev[idx])) {
        return prev;
      }
      persistTaskCardOrder(nextOrder);
      return nextOrder;
    });
  }, [taskStatCards, persistTaskCardOrder]);

  const orderedTaskStatCards = React.useMemo(() => {
    if (!taskStatCards.length) return [];
    if (!taskCardOrder.length) return taskStatCards;
    const orderMap = taskCardOrder
      .map(label => taskStatCards.find(card => card.label === label))
      .filter((card): card is typeof taskStatCards[number] => Boolean(card));
    const missing = taskStatCards.filter(card => !taskCardOrder.includes(card.label));
    return [...orderMap, ...missing];
  }, [taskCardOrder, taskStatCards]);

  const handleTaskCardDragStart = React.useCallback((label: string) => {
    setDraggingTaskCard(label);
  }, []);

  const handleTaskCardDragEnd = React.useCallback(() => {
    setDraggingTaskCard(null);
  }, []);

  const handleTaskCardDrop = React.useCallback((targetLabel: string) => {
    setTaskCardOrder(prev => {
      if (!draggingTaskCard || draggingTaskCard === targetLabel) return prev;
      const fromIndex = prev.indexOf(draggingTaskCard);
      const toIndex = prev.indexOf(targetLabel);
      if (fromIndex === -1 || toIndex === -1) {
        return prev;
      }
      const next = [...prev];
      next.splice(fromIndex, 1);
      next.splice(toIndex, 0, draggingTaskCard);
      persistTaskCardOrder(next);
      return next;
    });
    setDraggingTaskCard(null);
  }, [draggingTaskCard, persistTaskCardOrder]);

  const handleTaskCardDragOver = React.useCallback((event: React.DragEvent<HTMLDivElement>) => {
    if (draggingTaskCard) {
      event.preventDefault();
    }
  }, [draggingTaskCard]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative min-h-screen p-0 m-0 bg-transparent overflow-hidden"
    >
      <FestiveSnowOverlay />
      <FestiveGarland />
      <div className="relative z-10 p-6">
        <div className="mb-6 flex items-center justify-center text-2xl text-white drop-shadow-[0_0_8px_rgba(16,185,129,0.6)]">
          🎄
        </div>
        <div className="mb-6 grid gap-4 grid-cols-1 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/15 bg-white/5 px-5 py-4 text-white shadow-lg shadow-black/20">
            <div className="text-xs uppercase tracking-[0.3em] text-white/60">Gram Has Altın</div>
            <div className="mt-2 text-3xl font-semibold">
              {preciousLoading ? 'Yükleniyor...' : formatPreciousValue(preciousPrices.gold)}
            </div>
            <div className="mt-1 text-xs text-white/60">
              {preciousError
                ? preciousError
                : preciousUpdatedLabel
                  ? `Harem Altın • ${preciousUpdatedLabel}`
                  : 'Harem Altın'}
            </div>
          </div>
          <div className="rounded-2xl border border-white/15 bg-white/5 px-5 py-4 text-white shadow-lg shadow-black/20">
            <div className="text-xs uppercase tracking-[0.3em] text-white/60">Gram Gümüş</div>
            <div className="mt-2 text-3xl font-semibold">
              {preciousLoading ? 'Yükleniyor...' : formatPreciousValue(preciousPrices.silver)}
            </div>
            <div className="mt-1 text-xs text-white/60">
              {preciousError
                ? preciousError
                : preciousUpdatedLabel
                  ? `Harem Altın • ${preciousUpdatedLabel}`
                  : 'Harem Altın'}
            </div>
          </div>
        </div>
        {taskNotifications.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="p-5 mb-8 border rounded-2xl bg-black/40 border-white/10 shadow-lg"
          >
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/50">
                  Yeni Görev Atamaları
                </p>
                <h3 className="mt-1 text-xl font-semibold text-white">
                  {taskNotifications.length} görev sizden aksiyon bekliyor
                </h3>
                <p className="text-sm text-white/60">
                  Detayları görmek için Tasks sayfasını açabilir veya aşağıdan bildirimleri okuyabilirsiniz.
                </p>
              </div>
              <div className="flex-1 mt-4 space-y-3 md:mt-0">
                {taskNotifications.map((notification) => (
                  <div
                    key={notification.id}
                    className="flex flex-wrap items-center gap-3 p-3 text-sm text-white rounded-xl bg-white/5 border border-white/10"
                  >
                    <div className="flex-1">
                      <p className="font-semibold">{notification.title || 'Yeni görev'}</p>
                      <p className="text-white/70">{notification.message}</p>
                    </div>
                    <button
                      onClick={() => markNotificationRead(notification.id)}
                      className="px-3 py-1 text-xs font-semibold text-black bg-white rounded-full hover:bg-white/80"
                    >
                      Tamamlandı
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        <div className="grid gap-8 lg:grid-cols-1 xl:grid-cols-[2.2fr,1fr]">
          <div className="space-y-8">
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
              {statCards.map((card, index) => (
                <motion.div
                  key={card.label}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.05 }}
                  className="relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5 shadow-lg shadow-black/20 min-h-[140px]"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-black/20 text-2xl">
                      {card.icon}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm text-white/60">{card.label}</span>
                      <span className="text-3xl font-semibold text-white">{card.value}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="grid gap-6 lg:grid-cols-2"
            >
              <div className="p-4 rounded-3xl border border-white/10 bg-white/5 w-full">
                <div className="grid grid-cols-3 gap-1 sm:grid-cols-5 lg:grid-cols-7">
                  {stageGridData.map(point => {
                    const total = point.produce + point.ready + point.shipped;
                    const intensity = Math.min(1, total / maxStageCellValue);
                    return (
                      <div
                        key={point.key}
                        className="relative h-14 sm:h-16 rounded-xl border border-white/10 px-2 pt-3 pb-1 text-white/80 transition-colors"
                        title={`${point.key}: Produce ${point.produce}, Ready ${point.ready}, Shipped ${point.shipped}`}
                        style={{
                          background: `linear-gradient(135deg, rgba(16,185,129,${0.08 + intensity * 0.35}), rgba(14,116,144,${0.04 + intensity * 0.25}))`,
                          borderColor: `rgba(16,185,129,${0.15 + intensity * 0.35})`
                        }}
                      >
                        <span className="absolute top-1 left-1 text-[9px] font-semibold text-white/60">
                          {point.label}
                        </span>
                        <div className="flex h-full items-end justify-between gap-1 text-[11px] font-semibold">
                          <span className="text-emerald-200" aria-label="Produce">{point.produce}</span>
                          <span className="text-amber-200" aria-label="Ready">{point.ready}</span>
                          <span className="text-sky-200" aria-label="Shipped">{point.shipped}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="mt-3 flex items-center justify-between text-[10px] uppercase tracking-wide text-white/50">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
                      Produce
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-300" />
                      Ready
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-sky-300" />
                      Shipped
                    </span>
                  </div>
                  <span className="text-white/40 text-[9px]">Son 30 Gün</span>
                </div>
              </div>
              <div className="p-4 rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5">
                <h4 className="text-base font-semibold text-white mb-4">Monthly Snapshot</h4>
                <div className="grid grid-cols-1 gap-4 text-white/80 text-sm sm:grid-cols-2">
                  <div className="p-3 rounded-2xl bg-black/20">
                    <p className="text-xs uppercase tracking-wide text-white/60">Ortalama / Gün</p>
                    <p className="text-2xl font-semibold text-white">
                      {(monthlyCompletedTotal / Math.max(1, monthlyCompletedTrend.length)).toFixed(1)}
                    </p>
                  </div>
                  <div className="p-3 rounded-2xl bg-black/20">
                    <p className="text-xs uppercase tracking-wide text-white/60">Bugün</p>
                    <p className="text-2xl font-semibold text-white">{derivedStats.daily_completed}</p>
                  </div>
                  <div className="p-3 rounded-2xl bg-black/20">
                    <p className="text-xs uppercase tracking-wide text-white/60">En Yoğun Gün</p>
                    <p className="text-lg font-semibold text-white">
                      {busiestDay ? `${busiestDay.label}. gün` : '-'}
                    </p>
                  </div>
                  <div className="p-3 rounded-2xl bg-black/20">
                    <p className="text-xs uppercase tracking-wide text-white/60">Bekleyen Sipariş</p>
                    <p className="text-2xl font-semibold text-white">{derivedStats.pending}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {orderedTaskStatCards.length > 0 && (
            <div className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-5">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-lg font-semibold text-white/90"
              >
                Your Task Statistics
              </motion.h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {orderedTaskStatCards.map((card, index) => {
                  const isDragging = draggingTaskCard === card.label;
                  return (
                    <motion.div
                      key={`task-${card.label}`}
                      draggable
                      onDragStart={() => handleTaskCardDragStart(card.label)}
                      onDragEnd={handleTaskCardDragEnd}
                      onDragOver={handleTaskCardDragOver}
                      onDrop={(event) => {
                        event.preventDefault();
                        handleTaskCardDrop(card.label);
                      }}
                      initial={{ scale: 0.9, y: 20, opacity: 0 }}
                      animate={{ scale: 1, y: 0, opacity: 1 }}
                      transition={{
                        duration: 0.4,
                        delay: 0.6 + index * 0.05,
                        type: "spring",
                        stiffness: 200
                      }}
                      whileHover={{
                        scale: 1.04,
                        y: -4,
                        boxShadow: card.alert ? "0 15px 30px rgba(220, 38, 38, 0.35)" : "0 15px 30px rgba(99, 102, 241, 0.25)",
                        border: "1px solid rgba(255, 255, 255, 0.2)",
                        transition: { duration: 0.25 }
                      }}
                      whileTap={{ scale: 0.97 }}
                      className={`relative overflow-hidden cursor-${isDragging ? 'grabbing' : 'grab'} ${isDragging ? 'opacity-70 ring-2 ring-white/30' : ''}`}
                    >
                      <div className={`flex items-center gap-4 p-5 transition-all duration-300 border shadow-2xl bg-gradient-to-br border-white/10 rounded-xl backdrop-blur-xl hover:border-white/20 ${
                        card.alert
                          ? 'from-red-900/20 to-red-800/10 hover:from-red-900/30 hover:to-red-800/20'
                          : 'from-white/10 to-white/5 hover:from-white/15 hover:to-white/10'
                      }`}>
                        <motion.div
                          className={`text-3xl ${card.alert ? 'text-red-300' : 'text-white/90'}`}
                          whileHover={{
                            scale: 1.3,
                            rotate: 15,
                            color: card.alert ? "#fca5a5" : "#667eea",
                            transition: { duration: 0.3 }
                          }}
                        >
                          {card.icon}
                        </motion.div>
                        <div className="flex flex-col flex-1 min-w-0">
                          <motion.div
                            className={`mb-1 text-2xl font-bold whitespace-nowrap ${
                              card.alert ? 'text-red-200' : 'text-white'
                            }`}
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.7 + index * 0.05 }}
                            whileHover={{ color: card.alert ? "#fecaca" : "#ffffff", transition: { duration: 0.2 } }}
                          >
                            {card.value}
                          </motion.div>
                          <motion.div
                            className={`text-sm font-medium ${
                              card.alert ? 'text-red-300/70' : 'text-white/70'
                            }`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3, delay: 0.8 + index * 0.05 }}
                          >
                            {card.label}
                          </motion.div>
                        </div>
                      </div>
                      {card.alert && (
                        <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-br from-red-500/10 to-red-700/5 rounded-xl hover:opacity-100"></div>
                      )}
                    </motion.div>
                  )
                })}
              </div>
            </div>
          )}
        </div>

      </div>
    </motion.div>
  );
};

export default Dashboard;
