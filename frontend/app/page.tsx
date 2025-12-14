'use client';

import React, { useEffect, useState, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import HomeClient from './components/HomeClient'

// Type for order data structure
interface OrderData {
  transaction?: string;
  productname?: string;
  buyername?: string;
  buyeremail?: string;
  tarih?: string;
  status?: string;
  assigned_to_user_id?: number | null;
  [key: string]: any; // For other dynamic properties
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

export default function Home() {
  const [orders, setOrders] = useState<OrderData[]>([]);
  const [dashboardStats, setDashboardStats] = useState<DashboardStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [authChecked, setAuthChecked] = useState(false);
  const [isRedirecting, setIsRedirecting] = useState(false);
  const router = useRouter();

  const redirectToLogin = useCallback(() => {
    setIsRedirecting(true);
    router.replace('/auth/signin');
  }, [router]);

  useEffect(() => {
    let cancelled = false;
    const ensureAuthenticated = async () => {
      if (typeof window === 'undefined') return;
      const token = localStorage.getItem('access_token');
      if (token) {
        setAuthChecked(true);
        return;
      }
      try {
        const response = await fetch('/api/auth/refresh', {
          method: 'POST',
          credentials: 'include',
          headers: { 'Content-Type': 'application/json' }
        });
        if (response.ok) {
          const data = await response.json();
          if (data?.access_token) {
            localStorage.setItem('access_token', data.access_token);
            window.dispatchEvent(new Event('auth-token-updated'));
            if (!cancelled) {
              setAuthChecked(true);
            }
            return;
          }
        }
      } catch (error) {
        console.warn('Session refresh failed', error);
      }
      if (!cancelled) {
        redirectToLogin();
      }
    };
    ensureAuthenticated();
    return () => {
      cancelled = true;
    };
  }, [redirectToLogin]);

  useEffect(() => {
    if (!authChecked) return;

    async function fetchData() {
      const token = localStorage.getItem('access_token');
      const headers: Record<string, string> = { 'Accept': 'application/json' };
      if (token) {
        headers['Authorization'] = `Bearer ${token}`;
      }

      try {
        // Fetch orders
        const ordersUrl = `/api/orders`;
        console.log("Fetching orders through proxy:", ordersUrl);

        const ordersRes = await fetch(ordersUrl, {
          cache: 'no-cache',
          headers,
        });

        if (ordersRes.status === 401) {
          localStorage.removeItem('access_token');
          localStorage.removeItem('user');
          redirectToLogin();
          return;
        }

        if (!ordersRes.ok) {
          throw new Error(`HTTP ${ordersRes.status}: Unable to fetch orders`);
        }

        const ordersBatch = await ordersRes.json();
        console.log("Loaded orders:", ordersBatch.length);
        setOrders(ordersBatch);

        // Fetch dashboard stats if user is logged in
        if (token) {
          const statsUrl = `/api/users/me/dashboard-stats`;
          console.log("Fetching dashboard stats:", statsUrl);

          const statsRes = await fetch(statsUrl, {
            cache: 'no-cache',
            headers,
          });

          if (statsRes.status === 401) {
            localStorage.removeItem('access_token');
            localStorage.removeItem('user');
            redirectToLogin();
            return;
          }

          if (statsRes.ok) {
            const stats = await statsRes.json();
            console.log("Loaded dashboard stats:", stats);
            setDashboardStats(stats);
          } else {
            console.warn("Could not fetch dashboard stats:", statsRes.status);
          }
        }

        setError(null);
      } catch (error) {
        console.error("Backend bağlantı hatası:", error);
        setError(`Connection error: ${error instanceof Error ? error.message : 'Unknown error'}`);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [authChecked, redirectToLogin]);

  console.log("Page component state:", { loading, error, orderCount: orders.length });

  if (isRedirecting) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black text-white">
        Yönlendiriliyor...
      </div>
    );
  }

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black">
        <div className="text-xl text-white">Loading orders from backend...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-red-900">
        <div className="text-xl text-white">
          Error loading orders:<br/>
          {error}
          <br/><br/>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 mt-4 text-white bg-blue-600 rounded hover:bg-blue-700"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return <HomeClient orders={orders} dashboardStats={dashboardStats} />;
}
