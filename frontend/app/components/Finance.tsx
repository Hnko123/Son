"use client";

import React, { useCallback, useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "../../components/ui/button";

interface FinanceRecord {
  id: number;
  data: Record<string, string>;
  created_at?: string | null;
}

interface FinanceResponse {
  columns: string[];
  records: FinanceRecord[];
  last_sync?: string | null;
}

const CURRENT_COLUMN = "Güncel";
const TRANSFER_COLUMN = "Transfer";
const REMAINING_COLUMN = "Kalan Miktar";
const STORE_KEYWORDS = ["mağaza", "magaza", "mağaza adi", "magaza adi", "shop", "store"];
const ROW_COLOR_PALETTE = ["#F97316", "#22D3EE", "#C084FC", "#10B981", "#F43F5E", "#F59E0B"];

const normalizeKey = (value: string) =>
  (value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

const isCurrentColumnName = (value: string) => {
  const normalized = normalizeKey(value);
  return normalized === "guncel" || normalized === "guncel bakiye";
};

const isTransferColumnName = (value: string) => normalizeKey(value) === "transfer";

const isRemainingColumnName = (value: string) => {
  const normalized = normalizeKey(value);
  return normalized === "kalan miktar" || normalized === "kalan";
};

const matchesStoreKeyword = (value: string) =>
  STORE_KEYWORDS.some((keyword) => normalizeKey(value).includes(keyword));

const parseCurrencyInput = (value: string): number | null => {
  if (!value) return null;
  let sanitized = value.replace(/\s/g, "").replace(/[^\d.,-]/g, "");
  const hasComma = sanitized.includes(",");
  const hasDot = sanitized.includes(".");
  if (hasComma && hasDot) {
    sanitized = sanitized.replace(/\./g, "").replace(",", ".");
  } else if (hasComma) {
    sanitized = sanitized.replace(",", ".");
  }
  const parsed = parseFloat(sanitized);
  return Number.isNaN(parsed) ? null : parsed;
};

const formatCurrencyValue = (value: number): string => {
  return new Intl.NumberFormat("tr-TR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
};

const hexToRgba = (hex: string, alpha: number) => {
  const normalized = hex.replace("#", "");
  const bigint = parseInt(normalized.length === 3 ? normalized.repeat(2) : normalized, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

const getRecordStoreName = (record: FinanceRecord): string | null => {
  if (!record?.data) return null;
  for (const [key, rawValue] of Object.entries(record.data)) {
    if (matchesStoreKeyword(key)) {
      const label = typeof rawValue === "string" ? rawValue.trim() : String(rawValue ?? "");
      if (label) {
        return label;
      }
    }
  }
  return null;
};

const Finance: React.FC = () => {
  const [columns, setColumns] = useState<string[]>([]);
  const [records, setRecords] = useState<FinanceRecord[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(100);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [syncing, setSyncing] = useState(false);
  const [lastSync, setLastSync] = useState<string | null>(null);
  const [savingCells, setSavingCells] = useState<Record<string, boolean>>({});

  const specialColumns = useMemo(() => {
    const current = columns.find(isCurrentColumnName) ?? CURRENT_COLUMN;
    const transfer = columns.find(isTransferColumnName) ?? TRANSFER_COLUMN;
    const remaining = columns.find(isRemainingColumnName) ?? REMAINING_COLUMN;
    return { current, transfer, remaining };
  }, [columns]);

  const authHeaders = useCallback((withJson = false) => {
    if (typeof window === "undefined") return {};
    const token = localStorage.getItem("access_token");
    const headers: Record<string, string> = { Accept: "application/json" };
    if (withJson) {
      headers["Content-Type"] = "application/json";
    }
    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }
    return headers;
  }, []);

  const fetchFinance = useCallback(async (withSpinner = true) => {
    if (withSpinner) {
      setLoading(true);
    }
    try {
      const response = await fetch("/api/finance", {
        headers: authHeaders(),
      });
      if (!response.ok) {
        throw new Error(`Finance datası alınamadı (${response.status})`);
      }
      const payload: FinanceResponse = await response.json();
      setColumns(payload.columns || []);
      setRecords(payload.records || []);
      setCurrentPage(1);
      setLastSync(payload.last_sync || null);
      setError(null);
    } catch (err) {
      console.error("Finance datası alınamadı:", err);
      setError(err instanceof Error ? err.message : "Finance datası alınamadı");
    } finally {
      if (withSpinner) {
        setLoading(false);
      }
    }
  }, [authHeaders]);

  useEffect(() => {
    fetchFinance();
  }, [fetchFinance]);

  const handleSync = async () => {
    setSyncing(true);
    try {
      const response = await fetch("/api/finance/sync", {
        method: "POST",
        headers: authHeaders(true),
      });
      if (!response.ok) {
        throw new Error(`Finance sync başarısız (${response.status})`);
      }
      await fetchFinance();
    } catch (err) {
      console.error("Finance sync hatası:", err);
      setError(err instanceof Error ? err.message : "Finance sync başarısız");
    } finally {
      setSyncing(false);
    }
  };

  const excludedColumns = useMemo(() => {
    const blacklist = [
      "fonderen",
      "fonden",
      "eposta linki",
      "e-posta linki",
      "eposta link",
      "email link",
      "gönderen",
      "gonderen",
      "banka adı",
      "banka adi"
    ];
    return new Set(blacklist);
  }, []);

  const visibleColumns = useMemo(() => {
    if (!columns.length) return [];
    const sanitized = columns
      .filter(col => !excludedColumns.has(col.trim().toLowerCase()))
      .filter((value, index, self) => self.indexOf(value) === index);
    const specials = [specialColumns.current, specialColumns.transfer, specialColumns.remaining];
    const withoutSpecials = sanitized.filter(col => !specials.includes(col));
    const insertionIndex = Math.min(4, withoutSpecials.length);
    withoutSpecials.splice(insertionIndex, 0, ...specials);
    return withoutSpecials;
  }, [columns, excludedColumns, specialColumns]);

  const editableColumns = useMemo(
    () => new Set(["transfer", "kalan miktar", "kalan", "güncel", "guncel", "guncel bakiye"]),
    []
  );

  const isEditableColumn = useCallback(
    (column: string) => editableColumns.has(column.trim().toLowerCase()),
    [editableColumns]
  );

  const cellKey = (recordId: number, column: string) => `${recordId}-${column}`;

  const markSaving = useCallback((key: string, saving: boolean) => {
    setSavingCells(prev => {
      const next = { ...prev };
      if (saving) {
        next[key] = true;
      } else {
        delete next[key];
      }
      return next;
    });
  }, []);

  const updateRecordField = useCallback((recordId: number, column: string, value: string) => {
    setRecords(prev =>
      prev.map(record =>
        record.id === recordId ? { ...record, data: { ...record.data, [column]: value } } : record
      )
    );
  }, []);

  const persistFinanceField = useCallback(
    async (recordId: number, column: string, value: string) => {
      const headers = authHeaders(true);
      const key = cellKey(recordId, column);
      if (!headers.Authorization) return;
      markSaving(key, true);
      try {
        const response = await fetch(`/api/finance/${recordId}`, {
          method: "PUT",
          headers,
          body: JSON.stringify({ updates: { [column]: value } })
        });
        if (!response.ok) {
          throw new Error(`Finance kaydı güncellenemedi (${response.status})`);
        }
        const payload: FinanceRecord = await response.json();
        setRecords(prev => prev.map(record => (record.id === recordId ? payload : record)));
        setError(null);
      } catch (err) {
        console.error("Finance güncellemesi hatası:", err);
        setError(err instanceof Error ? err.message : "Finance kaydı güncellenemedi");
        await fetchFinance(false);
      } finally {
        markSaving(key, false);
      }
    },
    [authHeaders, fetchFinance, markSaving]
  );

  const parseDateValue = (value?: string | null) => {
    if (!value) return null;
    const trimmed = value.trim();
    if (!trimmed) return null;
    const dotFormat = /^(\d{2})\.(\d{2})\.(\d{4})$/;
    const slashFormat = /^(\d{2})\/(\d{2})\/(\d{4})$/;
    let timestamp: number | null = null;
    if (dotFormat.test(trimmed)) {
      const [, day, month, year] = trimmed.match(dotFormat) ?? [];
      timestamp = Date.parse(`${year}-${month}-${day}T00:00:00Z`);
    } else if (slashFormat.test(trimmed)) {
      const [, month, day, year] = trimmed.match(slashFormat) ?? [];
      timestamp = Date.parse(`${year}-${month}-${day}T00:00:00Z`);
    } else {
      const parsed = Date.parse(trimmed);
      timestamp = Number.isNaN(parsed) ? null : parsed;
    }
    return timestamp ?? null;
  };

  const sortedRecords = useMemo(() => {
    if (!records.length) return [];
    const primaryColumn =
      visibleColumns.find(column => column.toLowerCase().includes("tarih")) ||
      visibleColumns[0] ||
      columns.find(col => col.toLowerCase().includes("tarih")) ||
      columns[0];
    return [...records].sort((a, b) => {
      const aValue = parseDateValue(a.data?.[primaryColumn || ""] ?? a.created_at) ?? 0;
      const bValue = parseDateValue(b.data?.[primaryColumn || ""] ?? b.created_at) ?? 0;
      if (bValue === aValue) {
        return (b.created_at ? Date.parse(b.created_at) : 0) - (a.created_at ? Date.parse(a.created_at) : 0);
      }
      return bValue - aValue;
    });
  }, [records, visibleColumns, columns]);

  const storeColorMap = useMemo(() => {
    const map = new Map<string, string>();
    let paletteIndex = 0;
    sortedRecords.forEach(record => {
      const storeName = getRecordStoreName(record);
      if (storeName && !map.has(storeName)) {
        map.set(storeName, ROW_COLOR_PALETTE[paletteIndex % ROW_COLOR_PALETTE.length]);
        paletteIndex += 1;
      }
    });
    return map;
  }, [sortedRecords]);

  const paginatedRecords = useMemo(() => {
    if (!sortedRecords.length) return [];
    const start = (currentPage - 1) * pageSize;
    return sortedRecords.slice(start, start + pageSize);
  }, [sortedRecords, currentPage, pageSize]);

  const totalPages = useMemo(() => {
    if (!sortedRecords.length) return 1;
    return Math.max(1, Math.ceil(sortedRecords.length / pageSize));
  }, [sortedRecords, pageSize]);

  const formattedLastSync = useMemo(() => {
    if (!lastSync) return null;
    try {
      return new Date(lastSync).toLocaleString();
    } catch {
      return lastSync;
    }
  }, [lastSync]);

  return (
    <div className="flex flex-col w-full min-h-full p-6 gap-4 text-white">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-3xl font-semibold text-white">Finance</h2>
          <p className="text-sm text-white/70">
            Google Sheets verilerini izleyin ve 4 saatte bir otomatik güncellenen finans kaydını kontrol edin.
          </p>
          {formattedLastSync && (
            <p className="text-xs text-white/50 mt-1">
              Son senkron: {formattedLastSync}
            </p>
          )}
        </div>
        <div className="flex flex-wrap gap-3">
          <Button
            variant="outline"
            className="border-white/60 text-white hover:bg-white/20"
            onClick={() => fetchFinance()}
            disabled={loading || syncing}
          >
            Yenile
          </Button>
          <Button
            className="bg-white text-black font-semibold hover:bg-white/80"
            onClick={handleSync}
            disabled={syncing}
          >
            {syncing ? "Sync ediliyor..." : "Manuel Sync"}
          </Button>
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
        <div className="flex h-full flex-col border border-white/15 bg-gradient-to-b from-white/10/0 to-transparent backdrop-blur rounded-3xl overflow-hidden shadow-2xl shadow-purple-500/10">
          <div className="flex items-center justify-between px-5 py-3 border-b border-white/15">
            <span className="text-xs uppercase tracking-wide text-white/60">
              Toplam kayıt: {records.length}
            </span>
          </div>
          <div className="flex-1 overflow-auto">
            {loading ? (
              <div className="flex items-center justify-center py-12 text-white/70">
                Finance verileri yükleniyor...
              </div>
            ) : records.length === 0 ? (
              <div className="flex items-center justify-center py-12 text-white/60">
                Kayıt bulunamadı.
              </div>
            ) : (
              <div className="min-w-full overflow-auto">
                <table className="w-full text-sm text-white/90 border border-white/25 border-collapse rounded-lg overflow-hidden">
                  <thead className="bg-white/10 text-xs uppercase tracking-wide text-white/70">
                    <tr>
                      {visibleColumns.map((column) => (
                        <th
                          key={column}
                          className="px-4 py-3 text-left border border-white/15 bg-black/50 backdrop-blur"
                        >
                          {column}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {paginatedRecords.map((record) => {
                      const storeName = getRecordStoreName(record);
                      const accentColor = storeName ? storeColorMap.get(storeName) : undefined;
                      const rowBackground = accentColor ? hexToRgba(accentColor, 0.15) : undefined;
                      return (
                        <tr
                          key={record.id}
                          className="border-b border-white/5 transition"
                          style={rowBackground ? { backgroundColor: rowBackground } : undefined}
                        >
                          {visibleColumns.map((column) => {
                            const rawValue = record.data?.[column] ?? "";
                            const value =
                              typeof rawValue === "string" ? rawValue : rawValue ? String(rawValue) : "";
                            const editable = isEditableColumn(column);
                            const key = cellKey(record.id, column);
                            const isSaving = Boolean(savingCells[key]);
                            const handleBlur = async (content: string) => {
                              const trimmed = content ?? "";
                              await persistFinanceField(record.id, column, trimmed);
                              if (isTransferColumnName(column)) {
                                const currentRaw =
                                  record.data?.[specialColumns.current] ??
                                  record.data?.[CURRENT_COLUMN] ??
                                  record.data?.["Guncel"] ??
                                  "";
                                const currentValue = parseCurrencyInput(currentRaw);
                                const transferValue = parseCurrencyInput(trimmed);
                                if (currentValue !== null && transferValue !== null) {
                                  const remainingValue = currentValue - transferValue;
                                  const formattedRemaining = formatCurrencyValue(remainingValue);
                                  updateRecordField(record.id, specialColumns.remaining, formattedRemaining);
                                  await persistFinanceField(
                                    record.id,
                                    specialColumns.remaining,
                                    formattedRemaining
                                  );
                                }
                              }
                            };
                            const cellStyle = accentColor
                              ? { backgroundColor: hexToRgba(accentColor, 0.08) }
                              : undefined;
                            return (
                              <td
                                key={`${record.id}-${column}-${value}`}
                                className="px-4 py-2 text-white/80 border border-white/10 align-top"
                                style={cellStyle}
                              >
                                {editable ? (
                                  <input
                                    type="text"
                                    defaultValue={value}
                                    disabled={isSaving}
                                    inputMode="decimal"
                                    autoComplete="off"
                                    className={`w-full min-h-[32px] px-2 py-1 text-sm text-white bg-transparent border border-transparent rounded cursor-text focus:outline-none ${
                                      isSaving ? "bg-white/10 opacity-70" : "hover:bg-white/5 focus:border-white/30"
                                    }`}
                                    style={{ direction: "ltr", textAlign: "left" }}
                                    onBlur={(e) => {
                                      void handleBlur(e.currentTarget.value);
                                    }}
                                    onKeyDown={(e) => {
                                      if (e.key === "Enter") {
                                        e.preventDefault();
                                        e.currentTarget.blur();
                                      }
                                    }}
                                  />
                                ) : (
                                  <div className="whitespace-pre-wrap text-left">{value || "-"}</div>
                                )}
                              </td>
                            );
                          })}
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
                <div className="flex flex-wrap items-center justify-between px-4 py-3 border-t border-white/10 text-sm text-white/70">
                  <div>
                    Sayfa {currentPage} / {totalPages} ({sortedRecords.length} kayıt)
                  </div>
                  <div className="flex items-center gap-3">
                    <label className="text-xs uppercase tracking-wide">
                      Sayfa Boyutu:
                      <select
                        className="ml-2 bg-black/30 border border-white/20 rounded px-2 py-1"
                        value={pageSize}
                        onChange={(e) => {
                          setPageSize(Number(e.target.value));
                          setCurrentPage(1);
                        }}
                      >
                        {[25, 50, 100, 200].map(size => (
                          <option key={size} value={size}>
                            {size}
                          </option>
                        ))}
                      </select>
                    </label>
                    <Button
                      variant="outline"
                      className="border-white/40 text-white/80 px-3 py-1"
                      onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                      disabled={currentPage === 1}
                    >
                      Önceki
                    </Button>
                    <Button
                      variant="outline"
                      className="border-white/40 text-white/80 px-3 py-1"
                      onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                      disabled={currentPage === totalPages}
                    >
                      Sonraki
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Finance;
