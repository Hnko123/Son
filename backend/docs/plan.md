# Portable Etsy Order Manager – High‑Level Design & Usage

> **Bu belge, yeni bir sohbet başlatırken tekrar açıklama yapmanıza gerek kalmaması için tüm teknik detayları içerir.**

## 1️⃣ Genel Bakış
- **Amaç:** Gmail’den “You made a sale” maillerini çekip temiz HTML’leri JSON’a dönüştürmek.
- **Çıktı:** `orders.json` (React/Next.js için) ve `orders.csv`. Ayrıca API üzerinden de erişilebilir.
- **Arayüz:** 3‑D kanban (React + Three.js + drag‑and‑drop).

## 2️⃣ Backend (FastAPI)
| Katman | Açıklama |
|--------|----------|
| **Email Processor** | `gmail_processor.py` – imaplib, BeautifulSoup, regex ile Gmail’den mailleri alır ve JSON oluşturur. |
| **Database** | SQLModel (SQLite dev; PostgreSQL prod) – Order modeli, status enum. |
| **API** | `/api/orders`, `/api/orders/{id}/status` – CRUD + status güncelleme. CORS & health endpoint. |
| **Background Job** | `APScheduler` veya Celery ile her X dk’de otomatik fetch (opsiyonel). |

### Önemli Dosyalar
- `app/main.py`
- `app/routes/orders.py`
- `app/services/gmail_processor.py`
- `models.py`
- `db.py`
- `requirements.txt` (`fastapi`, `uvicorn`, `sqlmodel`, `beautifulsoup4`, `lxml`).

## 3️⃣ Frontend (React + Three.js)
| Katman | Açıklama |
|--------|----------|
| **Canvas** | `react-three-fiber` + `drei`. 3‑D kartlar (`OrderCard3D.jsx`) oluşturur. |
| **Kanban** | `react-beautiful-dnd` ile sütun bazlı drag‑and‑drop. Status güncellemesi API’ye PATCH gönderir. |
| **API Wrapper** | Axios (`api.js`). |
| **App** | `App.jsx` → veri çeker, kanban gösterir. |

### Önemli Dosyalar
- `src/App.jsx`
- `src/components/KanbanBoard.jsx`
- `src/components/OrderCard3D.jsx`
- `src/api.js`
- `package.json` (`react`, `three`, `@react-three/fiber`, `react-beautiful-dnd`).

## 4️⃣ Çalıştırma
```bash
# 1. Backend (port 8000)
uicorn app.main:app --reload

# 2. Frontend (port 5173)
npm run dev   # vite içinde proxy /api/orders → http://localhost:8000/api/orders
```
> **Docker** – `docker-compose.yml` ile backend+frontend aynı kapsayıcıda çalıştırılabilir.

## 5️⃣ İpuçları
- Gmail OAuth2 yerine uygulama şifresi kullanabilirsiniz (`config/gmail_credentials.txt`).
- GMail’ten alınan HTML’i temizlemek için BeautifulSoup `decompose()` yöntemleri kullanın.
- Status güncelleme sonrası frontend’de “optimistic UI” ile hemen yeni durumu gösterin.
- İstatistik raporu için `enhancements.py` içinde `generate_stats()` fonksiyonunu kullanabilirsiniz.

---

> **Not:** Bu dosya, sonraki sohbetlerde referans olarak kullanılabilir. Tekrar açıklama yapmanıza gerek kalmaz. 🚀
