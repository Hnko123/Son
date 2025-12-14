"use client";
import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../../components/ui/button';
import { cn } from '../lib/utils';
import {
  Home,
  ClipboardList,
  Calendar,
  MessageSquare,
  Settings,
  LifeBuoy,
  LogOut,
  FolderKanban,
  CalendarClock,
  ShieldCheck,
  Wallet,
  RotateCcw
} from "lucide-react";

// Define types for props
interface SidebarProps {
  activePage: string;
  onPageChange: (pageId: string) => void;
  collapsed: boolean;
  onStateChange: (collapsed: boolean) => void;
  isAdmin?: boolean;
  isMobile?: boolean;
  mobileOpen?: boolean;
  onMobileClose?: () => void;
  onMobileNavigate?: () => void;
}

const normalizeAvatarUrl = (value?: string | null) => {
  if (!value) return null;
  if (value.startsWith('http') || value.startsWith('//') || value.startsWith('/')) {
    return value;
  }
  return `/${value.replace(/^\/+/, '')}`;
};

const getInitials = (name: string) => {
  const safe = (name || '').trim();
  if (!safe) return '??';
  const parts = safe.split(' ').filter(Boolean);
  if (parts.length >= 2) {
    return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
  }
  return safe.substring(0, 2).toUpperCase();
};

const Sidebar: React.FC<SidebarProps> = ({
  activePage,
  onPageChange,
  collapsed,
  onStateChange,
  isAdmin = false,
  isMobile = false,
  mobileOpen = false,
  onMobileClose,
  onMobileNavigate
}) => {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [profileSummary, setProfileSummary] = useState<{ name: string; role: string; avatar: string | null }>({
    name: 'Five Monkeys',
    role: 'Workspace',
    avatar: null
  });

  const baseNavItems = useMemo(() => [
    { id: 'dashboard', icon: Home, text: 'Dashboard' },
    { id: 'orders', icon: ClipboardList, text: 'Orders' },
    { id: 'returns', icon: RotateCcw, text: 'Returns' },
    { id: 'chat', icon: MessageSquare, text: 'Chat' },
    { id: 'tasks', icon: ClipboardList, text: 'Tasks' },
    { id: 'shopping', icon: FolderKanban, text: 'Shopping List' },
    { id: 'weekly', icon: CalendarClock, text: 'Weekly Planner' },
    { id: 'calendar', icon: Calendar, text: 'Calendar' }
  ], []);

  const navItems = useMemo(() => {
    const items = [...baseNavItems];
    if (isAdmin) {
      const financeItem = { id: 'finance', icon: Wallet, text: 'Finance' };
      items.splice(5, 0, financeItem);
      items.splice(items.length - 1, 0, { id: 'admin', icon: ShieldCheck, text: 'Admin Tools' });
    }
    return items;
  }, [baseNavItems, isAdmin]);

  const footerItems = [
    { id: 'settings', icon: Settings, text: 'Settings' },
    { id: 'help', icon: LifeBuoy, text: 'Help' },
    { id: 'logout', icon: LogOut, text: 'Logout' }
  ];

  useEffect(() => {
    const loadProfile = () => {
      if (typeof window === 'undefined') return;
      try {
        const stored = window.localStorage.getItem('user');
        if (!stored) return;
        const parsed = JSON.parse(stored);
        setProfileSummary({
          name: parsed.full_name || parsed.username || 'Kullanıcı',
          role: parsed.role || 'Member',
          avatar: parsed.avatar || null
        });
      } catch (error) {
        console.warn('Sidebar profile info unavailable', error);
      }
    };
    loadProfile();
    window.addEventListener('user-profile-updated', loadProfile);
    return () => {
      window.removeEventListener('user-profile-updated', loadProfile);
    };
  }, []);

  const profileAvatar = useMemo(() => normalizeAvatarUrl(profileSummary.avatar), [profileSummary.avatar]);
  const profileInitials = useMemo(() => getInitials(profileSummary.name), [profileSummary.name]);

  const handleMouseEnter = () => {
    if (isMobile) return;
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    if (onStateChange) {
      onStateChange(false);
    }
  };

  const handleMouseLeave = () => {
    if (isMobile) return;
    timeoutRef.current = setTimeout(() => {
      if (onStateChange) {
        onStateChange(true);
      }
    }, 3000);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const sidebarVariants = {
    collapsed: { width: "80px" }, // Tailwind w-20
    expanded: { width: "256px" }  // Tailwind w-64
  };

  const visualCollapsed = isMobile ? false : collapsed;

  const handleFooterAction = async (itemId: string) => {
    if (isMobile && onMobileNavigate) {
      onMobileNavigate();
    }
    if (itemId === 'logout') {
      // Clear authentication data
      localStorage.removeItem('access_token');
      localStorage.removeItem('user');
      window.dispatchEvent(new Event('auth-token-updated'));
      try {
        await fetch('/api/auth/logout', { method: 'POST', credentials: 'include' });
      } catch (error) {
        console.warn('Logout request failed:', error);
      }
      // Redirect to signin page
      window.location.href = '/auth/signin';
    } else if (itemId === 'settings') {
      // For now, show an alert - could navigate to settings page later
      alert('Settings functionality coming soon!');
    } else if (itemId === 'help') {
      // Show help information
      alert('Help functionality coming soon!');
    }
  };

  const handleNav = (pageId: string) => {
    onPageChange(pageId);
    if (isMobile && onMobileNavigate) {
      onMobileNavigate();
    }
  };

  const mobileAnimate = isMobile ? { x: mobileOpen ? 0 : -320 } : undefined;

  const positionClasses = isMobile
    ? 'fixed top-0 left-0 h-screen w-[min(18rem,85vw)] shadow-2xl shadow-black/50'
    : 'relative h-full';

  return (
    <motion.aside
      className={cn(
        "z-40 flex flex-col overflow-hidden border-r flex-shrink-0",
        "bg-[#0f1429] text-white border-white/5 shadow-2xl shadow-black/50",
        positionClasses
      )}
      animate={isMobile ? mobileAnimate : (visualCollapsed ? "collapsed" : "expanded")}
      variants={isMobile ? undefined : sidebarVariants}
      initial={false}
      transition={isMobile ? { type: 'spring', stiffness: 260, damping: 30 } : { duration: 0.3, ease: "easeInOut" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Logo Area */}
      <div className={`flex items-center gap-2 p-4 border-b border-white/10 h-[60px] transition-all duration-300 ${visualCollapsed ? 'justify-center' : ''}`}>
        <motion.div
          className="flex items-center justify-center flex-shrink-0 w-8 h-8 font-bold text-white rounded-md cursor-pointer bg-gradient-to-br from-indigo-500 to-purple-600"
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
        >
          🐒
        </motion.div>
        {!visualCollapsed && (
          <motion.span
            className="text-lg font-semibold whitespace-nowrap text-foreground"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2, delay: 0.1 }}
          >
          Five Monkeys
        </motion.span>
        )}
        {isMobile && (
          <button
            type="button"
            onClick={onMobileClose}
            className="ml-auto inline-flex items-center justify-center rounded-lg border border-white/15 p-2 text-white/80"
            aria-label="Menüyü kapat"
          >
            X
          </button>
        )}
      </div>

      {/* Navigation Menu with Shadcn Buttons */}
      <nav className="flex-1 px-2 py-4 space-y-1">
        {navItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { delay: index * 0.1, duration: 0.3 }
            }}
          >
            <Button
              variant="ghost"
              className={cn(
                "w-full justify-start px-3 py-2 text-sm font-medium transition-all duration-300 rounded-xl",
                visualCollapsed ? "px-2" : "",
                activePage === item.id
                  ? "bg-white/15 text-white shadow-lg"
                  : "text-white/60 hover:bg-white/10 hover:text-white"
              )}
              onClick={() => handleNav(item.id)}
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.2 }}
                className={`flex items-center justify-center ${!visualCollapsed ? 'mr-3' : ''}`}
              >
                <item.icon className="w-5 h-5" />
              </motion.div>
              {!visualCollapsed && (
                <motion.span
                  className="whitespace-nowrap"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {item.text}
                </motion.span>
              )}
            </Button>
          </motion.div>
        ))}
      </nav>

      {/* Footer Settings & Help Section */}
      <div className={cn("mt-auto p-3 border-t border-white/10 space-y-3", visualCollapsed ? "px-1" : "px-2")}>
        <button
          type="button"
          onClick={() => handleNav('profile')}
          className={`w-full flex items-center gap-3 rounded-2xl border border-white/10 px-3 py-3 text-left text-white transition hover:border-white/30 hover:bg-white/10 ${visualCollapsed ? 'justify-center px-2' : ''}`}
        >
          <div className="flex items-center justify-center w-11 h-11 rounded-full border border-white/20 bg-gradient-to-br from-indigo-500/40 to-purple-500/30 overflow-hidden text-sm font-semibold">
            {profileAvatar ? (
              <img src={profileAvatar} alt={profileSummary.name} className="object-cover w-full h-full" />
            ) : (
              profileInitials
            )}
          </div>
          {!visualCollapsed && (
            <div className="flex flex-col truncate">
              <span className="text-sm font-semibold leading-tight truncate">{profileSummary.name}</span>
              <span className="text-xs text-white/60">{profileSummary.role || 'Member'}</span>
            </div>
          )}
        </button>
        {footerItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { delay: (navItems.length * 0.1) + index * 0.05, duration: 0.2 }
            }}
          >
            <Button
              variant="ghost"
              className={cn(
                "w-full justify-start px-3 py-1 text-sm transition-all duration-300 rounded-xl",
                visualCollapsed ? "px-2" : "",
                "text-white/60 hover:bg-white/10 hover:text-white"
              )}
              onClick={() => handleFooterAction(item.id)}
            >
              <item.icon className={`h-5 w-5 flex-shrink-0 ${!visualCollapsed ? 'mr-3' : ''}`} />
              {!visualCollapsed && (
                <span className="whitespace-nowrap">{item.text}</span>
              )}
            </Button>
          </motion.div>
        ))}
      </div>
    </motion.aside>
  );
};

export default Sidebar;
