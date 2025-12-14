import json
from pathlib import Path
from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.responses import HTMLResponse
from fastapi.middleware.cors import CORSMiddleware
from fastapi.middleware.gzip import GZipMiddleware

try:
    from .db import init_db
    init_db()
except Exception:
    pass

app = FastAPI(title="Portable Etsy Order Manager API")

# CORS middleware ekle
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Production'da specific domain kullan
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# GZip compression middleware ekle (büyük response'lar için)
app.add_middleware(GZipMiddleware, minimum_size=1000)

# Routes'ları dahil et
from .routes.orders import router as orders_router
app.include_router(orders_router, prefix="/api")
print("Orders routes loaded successfully")

from .routes.tasks import router as tasks_router
app.include_router(tasks_router, prefix="/api/tasks")
print("Tasks routes loaded successfully")

from .routes.users import router as users_router
app.include_router(users_router, prefix="/api/users")
print("Users routes loaded successfully")

from .routes.calendar import router as calendar_router
app.include_router(calendar_router, prefix="/api/calendar")
print("Calendar routes loaded successfully")

# Statik içerikleri sun (frontend/dist → app/static)
static_dir = Path(__file__).parent / "static"
if not static_dir.exists():
    # PyInstaller ile build edildiğinde static dosyalar kök dizinde olur
    static_dir = Path.cwd() / "static"
app.mount("/static", StaticFiles(directory=static_dir), name="static")

# Image cache dizinini /images endpoint'inden sun (Performant görüntü sunumu için)
image_cache_dir = Path(__file__).parent.parent / "static" / "image_cache"
if image_cache_dir.exists():
    app.mount("/images", StaticFiles(directory=str(image_cache_dir)), name="images")
    print(f"Image cache mounted at /images from: {image_cache_dir}")
else:
    print(f"Warning: Image cache directory not found: {image_cache_dir}")
    print("Creating image cache directory...")
    try:
        image_cache_dir.mkdir(parents=True, exist_ok=True)
        print(f"Created image cache directory: {image_cache_dir}")
    except Exception as e:
        print(f"Failed to create image cache directory: {e}")

@app.get("/debug", response_class=HTMLResponse)
def debug_page():
    """Debug sayfası"""
    debug_file = Path(__file__).parent.parent / "debug.html"
    if debug_file.exists():
        with open(debug_file, "r", encoding="utf-8") as f:
            return f.read()
    return "<h1>Debug sayfası bulunamadı</h1>"


@app.get("/", response_class=HTMLResponse)
def root():
    """Ana sayfa - HTML dosyasını döndür"""
    static_dir = Path(__file__).parent / "static"
    index_file = static_dir / "index.html"
    if index_file.exists():
        with open(index_file, "r", encoding="utf-8") as f:
            return f.read()
    return "<h1>Portable Etsy Manager API</h1><p>Frontend dosyaları bulunamadı</p>"


@app.get("/health")
def health():
    return {"status": "ok", "message": "Portable Etsy Manager API çalışıyor"}
