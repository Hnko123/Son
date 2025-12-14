'use client'

import React, { useCallback, useEffect, useMemo, useState } from 'react'

interface UserSummary {
  id: number
  email: string
  full_name?: string
  username?: string
}

interface AnnouncementSummary {
  id: number
  title?: string | null
  content: string
  target_user_id?: number | null
  target_user_name?: string | null
  is_active: boolean
  created_at?: string | null
  created_by_name?: string | null
}

const AdminTools: React.FC = () => {
  const [users, setUsers] = useState<UserSummary[]>([])
  const [selectedEmail, setSelectedEmail] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [passwordStatus, setPasswordStatus] = useState<string | null>(null)
  const [passwordError, setPasswordError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [isAdmin, setIsAdmin] = useState(false)
  const [announcementUserId, setAnnouncementUserId] = useState('')
  const [announcementTitle, setAnnouncementTitle] = useState('')
  const [announcementMessage, setAnnouncementMessage] = useState('')
  const [announcementStatus, setAnnouncementStatus] = useState<string | null>(null)
  const [announcementError, setAnnouncementError] = useState<string | null>(null)
  const [announcementLoading, setAnnouncementLoading] = useState(false)
  const [announcements, setAnnouncements] = useState<AnnouncementSummary[]>([])
  const [loadingAnnouncements, setLoadingAnnouncements] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('user')
    if (stored) {
      try {
        const parsed = JSON.parse(stored)
        setIsAdmin(parsed?.role === 'admin')
      } catch (_) {
        setIsAdmin(false)
      }
    }
  }, [])

  const fetchAnnouncements = useCallback(
    async (signal?: AbortSignal) => {
      if (typeof window === 'undefined') return
      const token = localStorage.getItem('access_token')
      if (!token) {
        setAnnouncements([])
        return
      }
      try {
        setAnnouncementError(null)
        setLoadingAnnouncements(true)
        const res = await fetch('/api/admin/announcements', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          credentials: 'include',
          signal,
        })
        if (!res.ok) {
          const data = await res.json().catch(() => ({}))
          throw new Error(data.detail || 'Duyuru listesi alınamadı')
        }
        const payload = await res.json()
        const normalized = Array.isArray(payload)
          ? payload.filter((item: AnnouncementSummary) => item?.is_active)
          : []
        setAnnouncements(normalized)
      } catch (err: any) {
        if (err?.name === 'AbortError') return
        setAnnouncementError(err?.message || 'Duyuru listesi alınamadı')
      } finally {
        setLoadingAnnouncements(false)
      }
    },
    []
  )

  useEffect(() => {
    if (!isAdmin) {
      setAnnouncements([])
      return
    }
    const controller = new AbortController()
    fetchAnnouncements(controller.signal)
    return () => controller.abort()
  }, [fetchAnnouncements, isAdmin])

  useEffect(() => {
    const token = localStorage.getItem('access_token')
    if (!token) return
    const controller = new AbortController()
    fetch('/api/users', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      credentials: 'include',
      signal: controller.signal,
    })
      .then(async (res) => {
        if (!res.ok) {
          throw new Error(`Kullanıcı listesi alınamadı (${res.status})`)
        }
        const data = await res.json()
        setUsers(data)
      })
      .catch((err) => {
        if (err.name !== 'AbortError') {
          setPasswordError(err.message)
          setAnnouncementError(err.message)
        }
      })
    return () => controller.abort()
  }, [])

  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault()
    setPasswordStatus(null)
    setPasswordError(null)

    if (!selectedEmail || !newPassword) {
      setPasswordError('Lütfen kullanıcı ve yeni şifre girin')
      return
    }

    try {
      setLoading(true)
      const token = localStorage.getItem('access_token')
      const res = await fetch('/api/admin/reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        credentials: 'include',
        body: JSON.stringify({ email: selectedEmail, new_password: newPassword }),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.detail || 'Şifre sıfırlanamadı')
      }
      setPasswordStatus('Şifre başarıyla güncellendi')
      setNewPassword('')
    } catch (err: any) {
      setPasswordError(err.message || 'Beklenmeyen hata')
    } finally {
      setLoading(false)
    }
  }

  const userOptions = useMemo(() => users.sort((a, b) => a.email.localeCompare(b.email)), [users])

  const formatDateTime = (value?: string | null) => {
    if (!value) return ''
    try {
      return new Date(value).toLocaleString('tr-TR')
    } catch {
      return value
    }
  }

  const handleAnnouncementSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setAnnouncementStatus(null)
    setAnnouncementError(null)

    if (!announcementUserId || !announcementMessage.trim()) {
      setAnnouncementError('Lütfen kullanıcı ve duyuru metni girin')
      return
    }

    try {
      setAnnouncementLoading(true)
      const token = localStorage.getItem('access_token')
      if (!token) {
        throw new Error('Oturum bulunamadı')
      }
      const res = await fetch('/api/admin/announcements', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        credentials: 'include',
        body: JSON.stringify({
          user_id: Number(announcementUserId),
          title: announcementTitle.trim() || null,
          content: announcementMessage.trim(),
        }),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.detail || 'Duyuru gönderilemedi')
      }
      setAnnouncementStatus('Duyuru gönderildi')
      setAnnouncementTitle('')
      setAnnouncementMessage('')
      setAnnouncementUserId('')
      await fetchAnnouncements()
    } catch (err: any) {
      setAnnouncementError(err?.message || 'Duyuru gönderilemedi')
    } finally {
      setAnnouncementLoading(false)
    }
  }

  const handleAnnouncementDeactivate = async (announcementId: number) => {
    setAnnouncementError(null)
    try {
      const token = localStorage.getItem('access_token')
      if (!token) {
        throw new Error('Oturum bulunamadı')
      }
      const res = await fetch(`/api/admin/announcements/${announcementId}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        credentials: 'include',
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.detail || 'Duyuru kaldırılamadı')
      }
      setAnnouncementStatus('Duyuru kaldırıldı')
      setAnnouncements(prev => prev.filter(announcement => announcement.id !== announcementId))
      await fetchAnnouncements()
    } catch (err: any) {
      setAnnouncementError(err?.message || 'Duyuru kaldırılamadı')
    }
  }

  if (!isAdmin) {
    return (
      <div className="p-6 text-white">
        <h2 className="text-2xl font-semibold mb-4">Admin Paneli</h2>
        <p>Bu alan sadece yönetici hesapları tarafından görüntülenebilir.</p>
      </div>
    )
  }

  return (
    <div className="p-6 space-y-6 text-white">
      <div>
        <h2 className="text-3xl font-semibold mb-2">Admin Araçları</h2>
        <p className="text-sm text-gray-300">
          Whitelist kullanıcılarının şifrelerini ve duyurularını bu bölümden yönetebilirsiniz.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-slate-900/30 p-6">
          <h3 className="text-xl font-semibold mb-4">Şifre Sıfırlama</h3>
          <form onSubmit={handleReset} className="space-y-4">
            <div>
              <label className="block mb-1 text-sm text-white/80">Kullanıcı</label>
              <select
                className="w-full px-3 py-2 rounded-lg bg-gray-900 border border-gray-700"
                value={selectedEmail}
                onChange={(e) => setSelectedEmail(e.target.value)}
              >
                <option value="">Bir kullanıcı seçin...</option>
                {userOptions.map((user) => (
                  <option key={user.id} value={user.email}>
                    {user.full_name || user.username || user.email} ({user.email})
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block mb-1 text-sm text-white/80">Yeni Şifre</label>
              <input
                type="password"
                className="w-full px-3 py-2 rounded-lg bg-gray-900 border border-gray-700"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="En az 8 karakter"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 transition disabled:opacity-50"
            >
              {loading ? 'Güncelleniyor...' : 'Şifreyi Sıfırla'}
            </button>
          </form>
          {passwordStatus && <p className="mt-4 text-sm text-emerald-400">{passwordStatus}</p>}
          {passwordError && <p className="mt-2 text-sm text-red-400">{passwordError}</p>}
        </div>

        <div className="rounded-2xl border border-white/10 bg-slate-900/30 p-6 space-y-4">
          <div>
            <h3 className="text-xl font-semibold mb-1">Kullanıcıya Duyuru Gönder</h3>
            <p className="text-sm text-white/70">Hedef kullanıcı uygulamaya her giriş yaptığında duyuru pop-up olarak gösterilir.</p>
          </div>
          <form onSubmit={handleAnnouncementSubmit} className="space-y-4">
            <div>
              <label className="block mb-1 text-sm text-white/80">Kullanıcı</label>
              <select
                className="w-full px-3 py-2 rounded-lg bg-gray-900 border border-gray-700"
                value={announcementUserId}
                onChange={(e) => setAnnouncementUserId(e.target.value)}
              >
                <option value="">Bir kullanıcı seçin...</option>
                {userOptions.map((user) => (
                  <option key={user.id} value={user.id}>
                    {user.full_name || user.username || user.email}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block mb-1 text-sm text-white/80">Başlık (opsiyonel)</label>
              <input
                type="text"
                className="w-full px-3 py-2 rounded-lg bg-gray-900 border border-gray-700"
                value={announcementTitle}
                onChange={(e) => setAnnouncementTitle(e.target.value)}
                placeholder="Örn. Üretim Güncellemesi"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm text-white/80">Duyuru Metni</label>
              <textarea
                className="w-full h-28 px-3 py-2 rounded-lg bg-gray-900 border border-gray-700"
                value={announcementMessage}
                onChange={(e) => setAnnouncementMessage(e.target.value)}
                placeholder="Kullanıcıya göstermek istediğiniz mesaj..."
              />
            </div>
            <button
              type="submit"
              disabled={announcementLoading}
              className="px-4 py-2 rounded-lg bg-pink-600 hover:bg-pink-500 transition disabled:opacity-50"
            >
              {announcementLoading ? 'Gönderiliyor...' : 'Duyuruyu Gönder'}
            </button>
          </form>
          {announcementStatus && <p className="text-sm text-emerald-400">{announcementStatus}</p>}
          {announcementError && <p className="text-sm text-red-400">{announcementError}</p>}

          <div className="pt-2">
            <h4 className="text-lg font-semibold mb-3">Duyuru Listesi</h4>
            {loadingAnnouncements ? (
              <p className="text-sm text-white/70">Duyurular yükleniyor...</p>
            ) : announcements.length === 0 ? (
              <p className="text-sm text-white/60">Henüz aktif duyuru yok.</p>
            ) : (
              <div className="space-y-3 max-h-64 overflow-auto pr-1">
                {announcements.map((announcement) => (
                  <div key={announcement.id} className="rounded-xl border border-white/10 bg-black/30 p-4">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-xs uppercase tracking-widest text-white/50">
                          {announcement.target_user_name || 'Genel Duyuru'}
                        </p>
                        <h5 className="text-lg font-semibold">{announcement.title || 'Duyuru'}</h5>
                        <p className="mt-1 text-sm text-white/80">{announcement.content}</p>
                        <div className="mt-2 text-xs text-white/60 space-y-1">
                          {announcement.created_by_name && <p>Gönderen: {announcement.created_by_name}</p>}
                          {announcement.created_at && <p>{formatDateTime(announcement.created_at)}</p>}
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <span
                          className={`rounded-full px-3 py-0.5 text-xs font-semibold ${
                            announcement.is_active ? 'bg-emerald-500/20 text-emerald-300' : 'bg-white/10 text-white/60'
                          }`}
                        >
                          {announcement.is_active ? 'Aktif' : 'Pasif'}
                        </span>
                        {announcement.is_active && (
                          <button
                            type="button"
                            onClick={() => handleAnnouncementDeactivate(announcement.id)}
                            className="text-xs px-3 py-1 rounded-full border border-white/30 text-white hover:bg-white/10"
                          >
                            Kaldır
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminTools
