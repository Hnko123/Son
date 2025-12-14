"use client";

import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "../../components/ui/button";
import AttachmentBadge, { AttachmentMeta } from "./AttachmentBadge";
import { Paperclip } from "lucide-react";
import ScopeToggle, { ViewScope } from "./ui/scope-toggle";

type ShoppingItem = {
  id: number;
  date: string | null;
  assigned: string;
  item: string;
  amount: string;
  note: string;
  done: boolean;
  updated_at?: string | null;
  attachment?: AttachmentMeta | null;
};

type ShoppingItemPatch = Partial<Omit<ShoppingItem, "id">>;

const inputClasses =
  "w-full bg-transparent text-white placeholder:text-white/40 focus:outline-none focus:ring-0 text-[13px]";
const tableCellClass =
  "border border-white/15 px-3 py-2 bg-black/20";

const SHOPPING_IMAGE_TYPES = ["image/jpeg", "image/png", "image/jpg"];

const ShoppingList: React.FC = () => {
  const [items, setItems] = useState<ShoppingItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [savingMap, setSavingMap] = useState<Record<number, boolean>>({});
  const [isAdding, setIsAdding] = useState(false);
  const [users, setUsers] = useState<Array<{ id: number; full_name: string; username: string }>>([]);
  const shoppingAttachmentInputs = useRef<Record<number, HTMLInputElement | null>>({});
  const [uploadingShoppingId, setUploadingShoppingId] = useState<number | null>(null);
  const [dataScope, setDataScope] = useState<ViewScope>("global");
  const [currentUserId, setCurrentUserId] = useState<number | null>(null);

  const authHeaders = useCallback((): Record<string, string> => {
    const headers: Record<string, string> = {};
    if (typeof window === "undefined") {
      return headers;
    }
    const token = localStorage.getItem("access_token");
    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }
    return headers;
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const stored = window.localStorage.getItem("user");
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed?.id) {
          setCurrentUserId(parsed.id);
        }
      }
    } catch (err) {
      console.warn("Shopping list user info parse failed", err);
    }
  }, []);

  const uploadShoppingAttachment = useCallback(async (file: File): Promise<AttachmentMeta | null> => {
    if (!SHOPPING_IMAGE_TYPES.includes(file.type)) {
      alert("Sadece JPG veya PNG görseller ekleyebilirsiniz.");
      return null;
    }
    if (file.size > 8 * 1024 * 1024) {
      alert("Dosya boyutu 8MB üzerinde olamaz.");
      return null;
    }
    try {
      const formData = new FormData();
      formData.append("file", file);
      const response = await fetch("/api/uploads/image", {
        method: "POST",
        headers: authHeaders(),
        body: formData,
      });
      if (!response.ok) {
        const errorText = await response.text();
        alert(`Dosya yüklenemedi: ${errorText}`);
        return null;
      }
      const payload = await response.json();
      return payload.attachment as AttachmentMeta;
    } catch (error) {
      console.error("Attachment upload failed", error);
      alert("Dosya yüklenemedi. Lütfen tekrar deneyin.");
      return null;
    }
  }, [authHeaders]);

  const normalizeItem = useCallback((item: ShoppingItem): ShoppingItem => {
    return {
      ...item,
      date: item.date ? item.date.split("T")[0] : "",
      assigned: item.assigned || "",
      amount: item.amount || "",
      note: item.note || "",
      item: item.item || "",
      attachment: item.attachment || null,
    };
  }, []);

  const loadItems = useCallback(async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams({
        scope: dataScope,
      });
      const response = await fetch(`/api/shopping-list?${params.toString()}`, {
        headers: {
          Accept: "application/json",
          ...authHeaders(),
        },
      });

      if (!response.ok) {
        throw new Error(`Shopping list alınamadı (status ${response.status})`);
      }

      const data = (await response.json()) as ShoppingItem[];
      setItems(data.map(normalizeItem));
      setError(null);
    } catch (err) {
      console.error("Shopping list yüklenemedi:", err);
      setError(
        err instanceof Error ? err.message : "Shopping list verisi alınamadı"
      );
    } finally {
      setLoading(false);
    }
  }, [authHeaders, normalizeItem, dataScope]);

  const loadUsers = useCallback(async () => {
    try {
      const response = await fetch("/api/users", {
        headers: {
          Accept: "application/json",
          ...authHeaders(),
        },
      });
      if (response.ok) {
        const data = await response.json();
        setUsers(
          (Array.isArray(data) ? data : []).map((user: any) => ({
            id: user.id,
            full_name: user.full_name || "",
            username: user.username || "",
          }))
        );
      }
    } catch (err) {
      console.warn("Kullanıcı listesi alınamadı:", err);
    }
  }, [authHeaders]);

  useEffect(() => {
    loadItems();
    loadUsers();
  }, [loadItems, loadUsers]);

  const persistChange = useCallback(
    async (id: number, patch: ShoppingItemPatch) => {
      if (!Object.keys(patch).length) return;
      setSavingMap((prev) => ({ ...prev, [id]: true }));
      try {
        const response = await fetch(`/api/shopping-list/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            ...authHeaders(),
          },
          body: JSON.stringify(patch),
        });

        if (!response.ok) {
          throw new Error(`Satır güncellenemedi (status ${response.status})`);
        }

        const updated = normalizeItem(
          (await response.json()) as ShoppingItem
        );
        setItems((prev) =>
          prev.map((item) => (item.id === id ? { ...item, ...updated } : item))
        );
        setError(null);
      } catch (err) {
        console.error("Shopping row update failed:", err);
        setError(
          err instanceof Error ? err.message : "Shopping satırı güncellenemedi"
        );
        await loadItems();
      } finally {
        setSavingMap((prev) => {
          const next = { ...prev };
          delete next[id];
          return next;
        });
      }
    },
    [authHeaders, loadItems, normalizeItem]
  );

  const handleInlineChange = useCallback(
    (id: number, field: keyof ShoppingItemPatch, value: string | boolean) => {
      setItems((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, [field]: value } : item
        )
      );
    },
    []
  );

  const handleCheckboxChange = useCallback(
    (id: number, checked: boolean) => {
      handleInlineChange(id, "done", checked);
      void persistChange(id, { done: checked });
    },
    [handleInlineChange, persistChange]
  );

  const handleShoppingAttachmentSelect = useCallback(async (item: ShoppingItem, event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    event.target.value = "";
    if (!file) return;
    setUploadingShoppingId(item.id);
    const attachment = await uploadShoppingAttachment(file);
    setUploadingShoppingId(null);
    if (attachment) {
      await persistChange(item.id, { attachment });
    }
  }, [persistChange, uploadShoppingAttachment]);

  const handleRemoveShoppingAttachment = useCallback(async (item: ShoppingItem) => {
    await persistChange(item.id, { attachment: null });
  }, [persistChange]);

  const handleBlur = useCallback(
    (id: number, field: keyof ShoppingItemPatch, value: string) => {
      const normalizedValue =
        field === "date" ? (value ? value : null) : value;
      void persistChange(id, { [field]: normalizedValue } as ShoppingItemPatch);
    },
    [persistChange]
  );

  const handleAddRow = useCallback(async () => {
    setIsAdding(true);
    try {
      const today = new Date().toISOString().split("T")[0];
      const response = await fetch("/api/shopping-list", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...authHeaders(),
        },
        body: JSON.stringify({
          date: today,
          assigned: "",
          item: "Yeni alışveriş kalemi",
          amount: "",
          note: "",
          done: false,
        }),
      });

      if (!response.ok) {
        throw new Error(`Yeni satır eklenemedi (status ${response.status})`);
      }

      const created = normalizeItem(
        (await response.json()) as ShoppingItem
      );
      setItems((prev) => {
        const next = [...prev, created];
        return next.sort((a, b) => (a.date || "").localeCompare(b.date || ""));
      });
      setError(null);
    } catch (err) {
      console.error("Yeni shopping satırı eklenemedi:", err);
      setError(
        err instanceof Error ? err.message : "Yeni satır ekleme başarısız"
      );
    } finally {
      setIsAdding(false);
    }
  }, [authHeaders, normalizeItem]);

  const handleDeleteRow = useCallback(async (id: number) => {
    if (!confirm('Bu alışveriş kaydını silmek istediğinize emin misiniz?')) return;
    try {
      const response = await fetch(`/api/shopping-list/${id}`, {
        method: "DELETE",
        headers: {
          ...authHeaders(),
        },
      });
      if (!response.ok) {
        throw new Error(`Satır silinemedi (status ${response.status})`);
      }
      setItems(prev => prev.filter(item => item.id !== id));
    } catch (err) {
      console.error("Shopping row delete failed:", err);
      setError(err instanceof Error ? err.message : "Satır silinemedi");
    }
  }, [authHeaders]);

  const isSaving = useMemo(
    () => Object.keys(savingMap).length > 0,
    [savingMap]
  );

  const renderRows = () => {
    if (loading) {
      return (
        <tr>
          <td colSpan={8} className="py-10 text-center text-white/70 border border-white/15 bg-black/20">
            Shopping list yükleniyor...
          </td>
        </tr>
      );
    }

    if (!items.length) {
      return (
        <tr>
          <td colSpan={8} className="py-10 text-center text-white/60 border border-white/15 bg-black/20">
            Henüz kayıt yok. İlk satırı eklemek için yukarıdaki butonu kullanın.
          </td>
        </tr>
      );
    }

    return items.map((item, index) => (
      <tr
        key={item.id}
        className={`text-sm text-white/85 ${index % 2 === 0 ? 'bg-white/5' : 'bg-transparent'} hover:bg-white/10 transition`}
      >
        <td className={`${tableCellClass}`}>
          <input
            type="date"
            value={item.date || ""}
            className={`${inputClasses}`}
            onChange={(e) =>
              handleInlineChange(item.id, "date", e.target.value)
            }
            onBlur={(e) => handleBlur(item.id, "date", e.target.value)}
          />
        </td>
        <td className={`${tableCellClass} text-center`}>
          <input
            type="checkbox"
            checked={item.done}
            onChange={(e) => handleCheckboxChange(item.id, e.target.checked)}
            className="h-5 w-5 rounded border-white/50 bg-transparent text-emerald-400 accent-emerald-400"
            aria-label={`${item.item} tamamlandı mı?`}
          />
        </td>
        <td className={tableCellClass}>
          <input
            type="text"
            value={item.assigned || ""}
            placeholder="Sorumlu kişi"
            className={`${inputClasses}`}
            list="shopping-assign-users"
            onChange={(e) =>
              handleInlineChange(item.id, "assigned", e.target.value)
            }
            onBlur={(e) => handleBlur(item.id, "assigned", e.target.value)}
          />
        </td>
        <td className={tableCellClass}>
          <input
            type="text"
            value={item.item || ""}
            placeholder="Alınacaklar"
            className={`${inputClasses}`}
            onChange={(e) => handleInlineChange(item.id, "item", e.target.value)}
            onBlur={(e) => handleBlur(item.id, "item", e.target.value)}
          />
        </td>
        <td className={tableCellClass}>
          <input
            type="text"
            value={item.amount || ""}
            placeholder="₺0,00"
            className={`${inputClasses}`}
            onChange={(e) =>
              handleInlineChange(item.id, "amount", e.target.value)
            }
            onBlur={(e) => handleBlur(item.id, "amount", e.target.value)}
          />
        </td>
        <td className={`${tableCellClass}`}>
          <textarea
            value={item.note || ""}
            placeholder="Not ekleyin"
            rows={2}
            className={`${inputClasses} resize-none`}
            onChange={(e) =>
              handleInlineChange(item.id, "note", e.target.value)
            }
            onBlur={(e) => handleBlur(item.id, "note", e.target.value)}
          />
        </td>
        <td className={`${tableCellClass}`}>
          <div className="flex items-center justify-center gap-2">
            {item.attachment && item.attachment.url ? (
              <AttachmentBadge
                attachment={item.attachment}
                onRemove={() => handleRemoveShoppingAttachment(item)}
                compact
              />
            ) : (
              <button
                type="button"
                className="inline-flex items-center gap-1 text-xs text-white/70 hover:text-white px-2 py-1 border border-white/20 rounded-full"
                onClick={() => shoppingAttachmentInputs.current[item.id]?.click()}
                disabled={uploadingShoppingId === item.id}
              >
                <Paperclip className="w-3 h-3" />
                {uploadingShoppingId === item.id ? "Yükleniyor..." : "Ek ekle"}
              </button>
            )}
            <input
              type="file"
              accept="image/jpeg,image/png"
              className="hidden"
              ref={(el) => {
                if (el) {
                  shoppingAttachmentInputs.current[item.id] = el;
                } else {
                  delete shoppingAttachmentInputs.current[item.id];
                }
              }}
              onChange={(event) => handleShoppingAttachmentSelect(item, event)}
            />
          </div>
        </td>
        <td className={`${tableCellClass} text-center`}>
          <button
            type="button"
            className="px-2 py-1 text-xs border border-red-500/40 text-red-200 rounded-full hover:bg-red-500/20"
            onClick={() => handleDeleteRow(item.id)}
            aria-label="Satırı sil"
          >
            Sil
          </button>
        </td>
      </tr>
    ));
  };

  return (
    <div className="flex flex-col w-full min-h-full p-6 gap-4 text-white">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <h2 className="text-3xl font-semibold text-white">Shopping List</h2>
            <ScopeToggle
              scope={dataScope}
              onScopeChange={(value) => setDataScope(value)}
              disabledPersonal={!currentUserId}
            />
          </div>
          <p className="text-sm text-white/70">
            Tarih bazlı atölye alışverişlerini tek ekrandan düzenleyin.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button
            variant="outline"
            className="border-white/60 text-white hover:bg-white/20"
            onClick={loadItems}
            disabled={loading}
          >
            Yenile
          </Button>
          <Button
            className="bg-white text-black font-semibold hover:bg-white/80"
            onClick={handleAddRow}
            disabled={isAdding}
          >
            {isAdding ? "Satır ekleniyor..." : "Yeni Satır Ekle"}
          </Button>
        </div>
      </div>

      {(error || isSaving) && (
        <div className="flex flex-col gap-2">
          {error && (
            <div className="px-4 py-2 border border-red-400/60 bg-red-500/20 rounded-lg text-sm text-red-100">
              {error}
            </div>
          )}
          {isSaving && (
            <div className="px-4 py-2 border border-white/40 bg-white/10 rounded-lg text-xs text-white/70">
              Değişiklikler kaydediliyor...
            </div>
          )}
        </div>
      )}

      <motion.div
        className="flex-1 min-h-0"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="flex h-full flex-col border border-white/15 bg-gradient-to-b from-white/10/0 to-transparent backdrop-blur rounded-3xl overflow-hidden shadow-2xl shadow-purple-500/10">
          <datalist id="shopping-assign-users">
            {users.map((user) => {
              const label = user.full_name || user.username || "";
              return (
                <option key={user.id} value={label}>
                  {user.username}
                </option>
              );
            })}
          </datalist>
          <div className="flex-1 overflow-auto">
            <table className="w-full text-[13px] text-white/85 border border-white/20 border-collapse">
              <thead className="bg-white/5 text-[12px] uppercase tracking-wide text-white/70">
                <tr>
                  <th className="border border-white/15 px-4 py-2 text-left">Tarih</th>
                  <th className="border border-white/15 px-4 py-2 text-center">Durum</th>
                  <th className="border border-white/15 px-4 py-2 text-left">Assign</th>
                  <th className="border border-white/15 px-4 py-2 text-left">Shopping</th>
                  <th className="border border-white/15 px-4 py-2 text-left">Tutar</th>
                  <th className="border border-white/15 px-4 py-2 text-left">Not</th>
                  <th className="border border-white/15 px-4 py-2 text-center">Ek</th>
                  <th className="border border-white/15 px-4 py-2 text-center">Sil</th>
                </tr>
              </thead>
              <tbody>{renderRows()}</tbody>
            </table>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ShoppingList;
