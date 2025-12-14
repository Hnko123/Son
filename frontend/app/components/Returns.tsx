"use client";

import React, { useCallback, useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { RefreshCw, RotateCcw } from "lucide-react";
import { Button } from "../../components/ui/button";

interface ReturnRecord {
  id: number;
  refund_date?: string | null;
  store_name?: string | null;
  order_number?: string | null;
  customer_name?: string | null;
  refund_amount?: number | null;
  currency?: string | null;
  reason?: string | null;
  created_at?: string | null;
}

  interface ReturnsResponse {
    records: ReturnRecord[];
    last_sync?: string | null;
  }

  const Returns: React.FC = () => {
    const [records, setRecords] = useState<ReturnRecord[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [lastSync, setLastSync] = useState<string | null>(null);
  const [isSyncing, setIsSyncing] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
      if (typeof window === "undefined") return;
    try {
      const stored = window.localStorage.getItem("user");
      if (!stored) return;
      const parsed = JSON.parse(stored);
      setIsAdmin(parsed?.role === "admin");
    } catch {
      setIsAdmin(false);
      }
    }, []);

  const getAuthToken = useCallback(() => {
    if (typeof window === "undefined") return null;
    const token = window.localStorage.getItem("access_token");
    return token ? `Bearer ${token}` : null;
  }, []);

  const fetchReturns = useCallback(
      async (withSpinner: boolean = true) => {
      if (withSpinner) {
        setLoading(true);
      }
        try {
          setError(null);
          const headers = new Headers({ Accept: "application/json" });
          const authToken = getAuthToken();
          if (authToken) {
            headers.set("Authorization", authToken);
          }
          const response = await fetch("/api/returns?limit=500", { headers });
          if (!response.ok) {
            throw new Error(`İadeler listesi alınamadı (${response.status})`);
          }
        const payload: ReturnsResponse = await response.json();
        setRecords(payload.records || []);
        setLastSync(payload.last_sync || null);
      } catch (err) {
        console.error("Returns fetch failed", err);
        setError(err instanceof Error ? err.message : "İadeler yüklenemedi");
      } finally {
        if (withSpinner) {
          setLoading(false);
        }
      }
    },
    [getAuthToken]
  );

  useEffect(() => {
    fetchReturns();
  }, [fetchReturns]);

  const handleManualSync = async () => {
      if (!isAdmin) return;
      setIsSyncing(true);
      try {
        const headers = new Headers({ "Content-Type": "application/json" });
        const authToken = getAuthToken();
        if (authToken) {
          headers.set("Authorization", authToken);
        }
        const response = await fetch("/api/returns/sync", {
          method: "POST",
          headers,
        });
      if (!response.ok) {
        const text = await response.text();
        throw new Error(text || "İade verileri senkronize edilemedi");
      }
      await fetchReturns(false);
    } catch (err) {
      console.error("Manual returns sync failed", err);
      alert(err instanceof Error ? err.message : "Senkronizasyon başarısız");
    } finally {
      setIsSyncing(false);
    }
  };

  const formattedLastSync = useMemo(() => {
    if (!lastSync) return "—";
    try {
      return new Date(lastSync).toLocaleString("tr-TR");
    } catch {
      return lastSync;
    }
  }, [lastSync]);

  const formatDate = (value?: string | null) => {
    if (!value) return "—";
    try {
      return new Date(value).toLocaleDateString("tr-TR", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      });
    } catch {
      return value;
    }
  };

  const formatCurrency = (amount?: number | null, currency?: string | null) => {
    if (amount === null || amount === undefined) return "—";
    try {
      return new Intl.NumberFormat("tr-TR", {
        style: "currency",
        currency: currency || "USD",
        minimumFractionDigits: 2,
      }).format(amount);
    } catch {
      return `${currency || "USD"} ${amount.toFixed(2)}`;
    }
  };

  const totalRefund = useMemo(() => {
    return records.reduce((sum, record) => sum + (record.refund_amount || 0), 0);
  }, [records]);

    return (
    <div className="flex flex-col w-full min-h-full p-6 space-y-4 text-white">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="text-xs text-white/60">
          Son senkron: <span className="text-white">{formattedLastSync}</span>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button
            variant="outline"
            className="border-white/60 text-white hover:bg-white/20"
            onClick={() => fetchReturns()}
            disabled={loading}
          >
            <RefreshCw className="w-4 h-4 mr-2" /> Yenile
          </Button>
          {isAdmin && (
            <Button
              className="bg-white text-black font-semibold hover:bg-white/80"
              onClick={handleManualSync}
              disabled={isSyncing}
            >
              {isSyncing ? "Senkronize ediliyor..." : "Manuel Senkron"}
            </Button>
          )}
        </div>
      </div>

      {error && (
        <div className="px-4 py-2 border border-red-400/60 bg-red-500/20 rounded-lg text-sm text-red-100">
          {error}
        </div>
      )}

      <motion.div
        className="flex-1 min-h-0"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex flex-col border border-white/15 bg-gradient-to-b from-white/10/0 to-transparent rounded-3xl overflow-hidden shadow-2xl shadow-slate-900/40">
          <div className="flex flex-wrap items-center justify-between px-5 py-3 border-b border-white/15 text-sm text-white/70 gap-3">
            <span>
              Toplam kayıt: <span className="text-white">{records.length}</span>
            </span>
            <span>
              Toplam iade:{" "}
              <span className="text-emerald-300">
                {formatCurrency(totalRefund, records[0]?.currency || "USD")}
              </span>
            </span>
          </div>
          <div className="flex-1 overflow-auto">
            {loading ? (
              <div className="flex items-center justify-center py-12 text-white/70">
                İade verileri yükleniyor...
              </div>
            ) : records.length === 0 ? (
              <div className="flex items-center justify-center py-12 text-white/60">
                Kayıt bulunamadı.
              </div>
            ) : (
              <div className="min-w-full overflow-auto">
                <table className="w-full text-sm text-white/90 border border-white/15 border-collapse rounded-lg overflow-hidden">
                  <thead className="bg-white/10 text-xs uppercase tracking-wide text-white/70">
                    <tr>
                      <th className="px-4 py-3 text-left border border-white/15">Tarih</th>
                      <th className="px-4 py-3 text-left border border-white/15">Mağaza</th>
                      <th className="px-4 py-3 text-left border border-white/15">Sipariş No</th>
                      <th className="px-4 py-3 text-left border border-white/15">Müşteri</th>
                      <th className="px-4 py-3 text-left border border-white/15">İade Tutarı</th>
                      <th className="px-4 py-3 text-left border border-white/15">Neden</th>
                    </tr>
                  </thead>
                  <tbody>
                    {records.map((record) => (
                      <tr
                        key={record.id}
                        className="border-b border-white/5 hover:bg-white/5 transition"
                      >
                        <td className="px-4 py-3 text-white/80 border border-white/10">
                          {formatDate(record.refund_date)}
                        </td>
                        <td className="px-4 py-3 text-white/90 font-semibold border border-white/10">
                          {record.store_name || "—"}
                        </td>
                        <td className="px-4 py-3 text-white/80 border border-white/10">
                          <span className="font-mono tracking-wide">{record.order_number || "—"}</span>
                        </td>
                        <td className="px-4 py-3 text-white/80 border border-white/10">
                          {record.customer_name || "—"}
                        </td>
                        <td className="px-4 py-3 text-emerald-300 border border-white/10">
                          {formatCurrency(record.refund_amount, record.currency)}
                        </td>
                        <td className="px-4 py-3 text-white/80 border border-white/10">
                          <div className="text-sm leading-snug whitespace-pre-wrap">
                            {record.reason || "—"}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Returns;
