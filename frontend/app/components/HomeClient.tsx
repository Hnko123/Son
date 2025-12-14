"use client";

import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Vortex } from '../../components/ui/vortex'; // Vortex bileşenini import ediyoruz
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import KanbanBoard from './KanbanBoard';

import Tasks from './Tasks';
import Orders from './Orders';
import Calendar from './Calendar';
import Chat from './Chat';
import Profile from './Profile';
import ShoppingList from './ShoppingList';
import WeeklyPlanner from './WeeklyPlanner';
import AdminTools from './AdminTools';
import Finance from './Finance';
import Returns from './Returns';
import { ACTIVE_VIEW_EVENT, ACTIVE_VIEW_STORAGE_KEY } from './WebSocketProvider';
import { Megaphone, Menu } from 'lucide-react';

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

interface DashboardStats {
  total_assigned: number;
  completed: number;
  completed_on_time: number;
  overdue_completed: number;
  in_progress: number;
  overdue_in_progress: number;
  overdue_total: number;
}

interface AnnouncementBanner {
  id: number;
  title?: string | null;
  content: string;
  target_user_name?: string | null;
}

export default function HomeClient({ orders = [], dashboardStats }: { orders?: OrderData[]; dashboardStats?: DashboardStats | null }) {
  console.log("HomeClient received orders:", orders?.length || 0, orders);
  console.log("HomeClient received dashboardStats:", dashboardStats);

  const [activeView, setActiveView] = useState('dashboard');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [activeAnnouncement, setActiveAnnouncement] = useState<AnnouncementBanner | null>(null);
  const [announcementPulse, setAnnouncementPulse] = useState(0);
  const [announcementVisible, setAnnouncementVisible] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return
    try {
      window.sessionStorage?.setItem(ACTIVE_VIEW_STORAGE_KEY, activeView)
    } catch {
      // ignore storage failures
    }
    window.dispatchEvent(new CustomEvent(ACTIVE_VIEW_EVENT, { detail: { view: activeView } }))
  }, [activeView])

  useEffect(() => {
    const determineRole = () => {
      if (typeof window === 'undefined') return;
      try {
        const stored = window.localStorage.getItem('user');
        if (!stored) {
          setIsAdmin(false);
          return;
        }
        const parsed = JSON.parse(stored);
        setIsAdmin(parsed?.role === 'admin');
      } catch (error) {
        console.warn('Unable to parse user info for admin check', error);
        setIsAdmin(false);
      }
    };
    determineRole();
    window.addEventListener('auth-token-updated', determineRole);
    return () => window.removeEventListener('auth-token-updated', determineRole);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const determineViewport = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
      if (mobile) {
        setSidebarCollapsed(true);
      } else {
        setMobileSidebarOpen(false);
        setSidebarCollapsed(window.innerWidth < 1280);
      }
    };
    determineViewport();
    window.addEventListener('resize', determineViewport);
    return () => window.removeEventListener('resize', determineViewport);
  }, []);

  useEffect(() => {
    if (!isMobile) return;
    setSidebarCollapsed(true);
  }, [isMobile]);

  useEffect(() => {
    if (!isMobile) return;
    setMobileSidebarOpen(false);
  }, [activeView, isMobile]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const stored = window.localStorage.getItem('reduce-motion');
    if (stored !== null) {
      setReduceMotion(stored === 'true');
      return;
    }
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduceMotion(media.matches);
    const handleChange = (event: MediaQueryListEvent) => {
      if (!window.localStorage.getItem('reduce-motion')) {
        setReduceMotion(event.matches);
      }
    };
    media.addEventListener('change', handleChange);
    return () => media.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const handleStorage = (event: StorageEvent) => {
      if (event.key === 'reduce-motion' && event.newValue !== null) {
        setReduceMotion(event.newValue === 'true');
      }
    };
    const handleCustom = () => {
      const stored = window.localStorage.getItem('reduce-motion');
      if (stored !== null) {
        setReduceMotion(stored === 'true');
      }
    };
    window.addEventListener('storage', handleStorage);
    window.addEventListener('reduce-motion-updated', handleCustom as EventListener);
    return () => {
      window.removeEventListener('storage', handleStorage);
      window.removeEventListener('reduce-motion-updated', handleCustom as EventListener);
    };
  }, []);

  const fetchUserAnnouncement = useCallback(
    async (signal?: AbortSignal) => {
      if (typeof window === 'undefined') return;
      const token = window.localStorage.getItem('access_token');
      if (!token) {
        setActiveAnnouncement(null);
        setAnnouncementVisible(false);
        return;
      }
      try {
        const res = await fetch('/api/announcements/me', {
          headers: {
            Authorization: `Bearer ${token}`
          },
          credentials: 'include',
          signal
        });
        if (!res.ok) {
          throw new Error('Duyuru bilgisi alınamadı');
        }
        const payload = await res.json();
        if (Array.isArray(payload) && payload.length > 0) {
          setActiveAnnouncement(payload[0]);
          setAnnouncementPulse((prev) => prev + 1);
        } else {
          setActiveAnnouncement(null);
          setAnnouncementVisible(false);
        }
      } catch (error: any) {
        if (error?.name === 'AbortError') return;
        console.warn('Announcement fetch failed', error);
      }
    },
    []
  );

  useEffect(() => {
    const controller = new AbortController();
    fetchUserAnnouncement(controller.signal);
    return () => controller.abort();
  }, [activeView, fetchUserAnnouncement]);

  useEffect(() => {
    if (!activeAnnouncement) {
      setAnnouncementVisible(false);
      return;
    }
    if (announcementPulse === 0) return;
    setAnnouncementVisible(true);
    const timeout = window.setTimeout(() => setAnnouncementVisible(false), 3500);
    return () => window.clearTimeout(timeout);
  }, [activeAnnouncement, announcementPulse]);

  const shouldRenderVortex = useMemo(
    () => !reduceMotion && activeView === 'dashboard',
    [reduceMotion, activeView]
  );

  const renderContent = () => {
    const pageVariants = {
      initial: { opacity: 0, x: 20 },
      in: { opacity: 1, x: 0 },
      out: { opacity: 0, x: -20 }
    };

    const pageTransition = {
      duration: 0.4
    };

    // Not: Dashboard'dan <Vortex>'i ve diğer sarmalayıcıları kaldırdık,
    // çünkü arka plan artık global.
    switch (activeView) {
      case 'dashboard':
        return (
          <motion.div key="dashboard" variants={pageVariants} transition={pageTransition} initial="initial" animate="in" exit="out">
            {/* Dashboard bileşeni artık SADECE kartları render etmeli */}
            <Dashboard orders={orders || []} dashboardStats={dashboardStats} />
          </motion.div>
        );

      case 'table':
        return (
          <motion.div key="table" variants={pageVariants} transition={pageTransition} initial="initial" animate="in" exit="out">
            <Orders orders={orders || []} />
          </motion.div>
        );
      case 'orders':
        return (
          <motion.div key="orders" variants={pageVariants} transition={pageTransition} initial="initial" animate="in" exit="out">
            <Orders orders={orders || []} />
          </motion.div>
        );
      case 'returns':
        return (
          <motion.div key="returns" variants={pageVariants} transition={pageTransition} initial="initial" animate="in" exit="out">
            <Returns />
          </motion.div>
        );
      case 'tasks':
        return (
          <motion.div key="tasks" variants={pageVariants} transition={pageTransition} initial="initial" animate="in" exit="out">
            <Tasks />
          </motion.div>
        );
      case 'shopping':
        return (
          <motion.div key="shopping" variants={pageVariants} transition={pageTransition} initial="initial" animate="in" exit="out">
            <ShoppingList />
          </motion.div>
        );
      case 'weekly':
        return (
          <motion.div key="weekly" variants={pageVariants} transition={pageTransition} initial="initial" animate="in" exit="out">
            <WeeklyPlanner />
          </motion.div>
        );
      case 'finance':
        return (
          <motion.div key="finance" variants={pageVariants} transition={pageTransition} initial="initial" animate="in" exit="out">
            {isAdmin ? (
              <Finance />
            ) : (
              <div className="flex items-center justify-center h-full text-white/70">
                Bu sayfa yalnızca admin kullanıcılar içindir.
              </div>
            )}
          </motion.div>
        );
      case 'calendar':
        return (
          <motion.div key="calendar" variants={pageVariants} transition={pageTransition} initial="initial" animate="in" exit="out">
            <Calendar />
          </motion.div>
        );
      case 'chat':
        return (
          <motion.div key="chat" variants={pageVariants} transition={pageTransition} initial="initial" animate="in" exit="out">
            <Chat />
          </motion.div>
        );
      case 'admin':
        return (
          <motion.div key="admin" variants={pageVariants} transition={pageTransition} initial="initial" animate="in" exit="out">
            {isAdmin ? (
              <AdminTools />
            ) : (
              <div className="flex items-center justify-center h-full text-white/70">
                Bu sayfa yalnızca admin kullanıcılar içindir.
              </div>
            )}
          </motion.div>
        );
      case 'profile':
        return (
          <motion.div key="profile" variants={pageVariants} transition={pageTransition} initial="initial" animate="in" exit="out">
            <Profile />
          </motion.div>
        );
      default:
        // 'default' case'i de dashboard'u çağırmalı
        return (
          <motion.div key="dashboard-default" variants={pageVariants} transition={pageTransition} initial="initial" animate="in" exit="out">
            <Dashboard orders={orders || []} />
          </motion.div>
        );
    }
  };

  const handleSidebarStateChange = (collapsed: boolean) => {
    if (isMobile) return;
    setSidebarCollapsed(collapsed);
  };

  // ANA LAYOUT DÜZELTMESİ
  return (
    // 'fixed inset-0' tüm ekranı kaplar
    <div className="fixed inset-0 w-full h-full">

      {/* 1. VORTEX sadece Dashboard'da ve hareket izni verildiğinde çalışsın */}
      {shouldRenderVortex ? (
        <div className="absolute inset-0 z-0">
          <Vortex
            backgroundColor="black"
            rangeY={1200}
            particleCount={450}
            baseHue={280}
            baseSpeed={0.04}
            rangeSpeed={0.3}
            baseRadius={0.7}
            rangeRadius={1}
            className="flex flex-col items-center justify-center w-full h-full px-2 py-4 md:px-10"
          >
            {/* Boş children - sadece background efekti için */}
          </Vortex>
        </div>
      ) : (
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-black via-slate-900/90 to-black" />
      )}

      {/* 2. TÜM İÇERİĞİ 'z-10' İLE METEORS'UN ÜSTÜNE ALDIK */}
      <div className="relative z-10 flex w-full h-full">
        <Sidebar
          activePage={activeView}
          onPageChange={setActiveView}
          collapsed={sidebarCollapsed}
          onStateChange={handleSidebarStateChange}
          isAdmin={isAdmin}
          isMobile={isMobile}
          mobileOpen={mobileSidebarOpen}
          onMobileClose={() => setMobileSidebarOpen(false)}
          onMobileNavigate={() => setMobileSidebarOpen(false)}
        />

        {/* 3. SAYFA YAPI SORUNUNU ÇÖZDÜK */}
        {/* 'min-w-0': İçerideki tablonun (TableView) ana yapıyı bozmasını engeller.
          'ml-64' / 'ml-20': Standart Tailwind sınıfları (w-64 = 16rem, w-20 = 5rem).
        */}
        <main
          className="flex-1 h-full flex flex-col transition-all duration-300 min-w-0"
        >
          {/* MAIN CONTENT AREA - FULLSCREEN */}
          <div className="sticky top-0 z-20 flex items-center justify-between gap-3 px-4 py-3 text-white bg-black/60 backdrop-blur lg:hidden">
            <button
              type="button"
              onClick={() => setMobileSidebarOpen(true)}
              className="inline-flex items-center justify-center w-10 h-10 rounded-xl border border-white/20 bg-white/5"
              aria-label="Menüyü aç"
            >
              <Menu className="w-5 h-5" />
            </button>
            <div className="flex flex-col text-right">
              <span className="text-xs uppercase tracking-[0.3em] text-white/60">Five Monkeys</span>
              <span className="text-base font-semibold">Workspace</span>
            </div>
          </div>
          <div className="flex-1 w-full overflow-auto">
            <div className="flex w-full">
              <div className="w-full flex flex-col min-w-0">
                <AnimatePresence mode="wait">
                  {renderContent()}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </main>
      </div>

      <AnimatePresence>
        {announcementVisible && activeAnnouncement && (
          <motion.div
            key={`announcement-${activeAnnouncement.id}-${announcementPulse}`}
            className="pointer-events-none absolute inset-0 z-30 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="pointer-events-none"
            >
              <div className="pointer-events-none w-[min(420px,90vw)] rounded-3xl border border-white/15 bg-slate-900/95 p-6 text-white shadow-2xl shadow-black/60 backdrop-blur">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-500/30 text-pink-100">
                    <Megaphone className="h-6 w-6" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                      {activeAnnouncement.target_user_name ? `${activeAnnouncement.target_user_name} için` : 'Duyuru'}
                    </p>
                    <h3 className="text-xl font-semibold">
                      {activeAnnouncement.title || 'Önemli Duyuru'}
                    </h3>
                    <p className="text-sm text-white/80">{activeAnnouncement.content}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {isMobile && mobileSidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/60 backdrop-blur-sm"
          onClick={() => setMobileSidebarOpen(false)}
        />
      )}

    </div>
  );
}
