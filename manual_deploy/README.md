# Manuel Kurulum Paketi

Bu klasör Docker kullanmadan projeyi ayağa kaldırmak için gerekli adımları özetler. Var olan `backend/` ve `frontend/` dizinlerini kullanıyoruz; sadece servisleri elle başlatarak aynı UI/UX’i elde edeceksin.

## Gereksinimler

- Python 3.10+
- Node.js 18+ ve npm
- PostgreSQL veya SQLite (varsayılan SQLite)

## Backend’i Çalıştırma

```bash
cd /root/app # ya da repo yolu
./manual_deploy/backend_setup.sh
```

Script şu işlemleri yapar:

1. `.venv-manual` isimli temiz bir virtualenv oluşturur.
2. `backend/requirements.txt`’i kurar.
3. `.env.manual` dosyası yoksa örnek değerlerle oluşturur.
4. `uvicorn backend.app.main:app --reload --port 8080` komutunu başlatır.

İstersen scriptteki `UVICORN_OPTS` değişkenini düzenleyebilirsin.

## Frontend’i Çalıştırma

```bash
cd /root/app
./manual_deploy/frontend_setup.sh
```

Bu script `frontend/` dizininde `npm install` çalıştırır, `.env.local` yoksa oluşturur ve `npm run dev` ile Next.js’i 3000 portunda başlatır.

## Notlar

- Docker dosyaları hâlâ repoda ama bu klasörle tamamen bypass edebilirsin.
- Yeni sunucuda sadece bu adımları takip edip aynı UI’yi elde edeceksin. Gerektiğinde `.env` dosyalarını güncellemeyi unutma.
