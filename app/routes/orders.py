from fastapi import APIRouter, HTTPException, BackgroundTasks
from pydantic import BaseModel
from typing import List, Optional
import json
from pathlib import Path
import time
import sys
import os
from datetime import datetime

router = APIRouter()

# JSON dosya yolu
DATA_DIR = Path(__file__).parent.parent.parent / "data"
ORDERS_FILE = DATA_DIR / "etsy_orders.json"

# Pydantic models
class FulfillmentUpdate(BaseModel):
    cut: Optional[bool] = None
    ready: Optional[bool] = None
    shipped: Optional[bool] = None

class StatusUpdate(BaseModel):
    status: str

class LoginRequest(BaseModel):
    username: str
    password: str

class ImportRequest(BaseModel):
    google_sheet_url: str

class ImportResponse(BaseModel):
    success: bool
    message: str
    fetch_duration: float = 0.0
    sync_duration: float = 0.0
    orders_count: int = 0
    errors: List[str] = []

@router.post("/auth/login")
def login(request: LoginRequest):
    """NextAuth için dummy auth endpoint - production'da gerçek authentication kullanın"""
    # Demo amaçlı - gerçek uygulamada gerçek auth logic ekleyin
    return {
        "id": "1",
        "username": request.username,
        "email": f"{request.username}@example.com",
        "full_name": request.username.title(),
        "access_token": "demo_token_123",
        "role": "user",
        "avatar": "",
        "skills": [],
        "phone": ""
    }

def load_orders():
    # DEBUG: Log the file path that is being read
    print(f"🚀 load_orders() → {ORDERS_FILE}")
    """JSON dosyadan orders yükle"""
    if ORDERS_FILE.exists():
        try:
            with open(ORDERS_FILE, "r", encoding="utf-8") as f:
                data = json.load(f)
                print(f"✅ {len(data)} order yüklendi")
                return data
        except Exception as e:
            print(f"❌ JSON okuma hatası: {e}")
            return []
    else:
        print("❌ JSON dosya yok")
        return []

def save_orders(orders):
    # DEBUG: Log the file path that is being written
    print(f"✅ {len(orders)} order kaydedildi → {ORDERS_FILE}")
    """Orders'ları JSON dosyaya kaydet"""
    try:
        with open(ORDERS_FILE, "w", encoding="utf-8") as f:
            json.dump(orders, f, indent=2, ensure_ascii=False)
        print(f"✅ {len(orders)} order kaydedildi")
        return True
    except Exception as e:
        print(f"❌ JSON kaydetme hatası: {e}")
        return False

def map_order_for_frontend(order):
    """Frontend için order data structure'ını map et - Sadece frontend'in beklediği kolonları döndür"""
    order_date = order.get("order_date", "")
    if order_date.endswith("Z"):
        order_date = order_date[:-1] + "+00:00"

    # Frontend'in beklediği exact kolonlar - 1:1 mapping
    return {
        "photo": order.get("product", {}).get("image_url", ""),
        "buyername": order.get("customer", {}).get("name", ""),
        "Produce": order.get("fulfillment", {}).get("cut", False),
        "Ready": order.get("fulfillment", {}).get("ready", False),
        "Shipped": order.get("fulfillment", {}).get("shipped", False),
        "Note": order.get("fulfillment", {}).get("notes", ""),
        "productname": order.get("product", {}).get("name", ""),
        "Quantity": str(order.get("product", {}).get("quantity", 1)),
        "material": order.get("product", {}).get("material_size", ""),
        "Chain Length": order.get("product", {}).get("chain_length", ""),
        "Personalization": order.get("product", {}).get("personalization", ""),
        "ioss": order.get("shop", {}).get("ioss_number", False),
        "FullAdress": order.get("customer", {}).get("address", ""),
        "itemprice": str(order.get("pricing", {}).get("item_price", 0.0)),
        "discount": str(order.get("pricing", {}).get("discount", 0.0)),
        "salestax": str(order.get("pricing", {}).get("sales_tax", 0.0)),
        "ordertotal": str(order.get("pricing", {}).get("order_total", 0.0)),
        "buyeremail": order.get("customer", {}).get("email", ""),
        "tarih": order_date,
        "vatcollected": str(order.get("pricing", {}).get("vat_collected", 0.0)),
        "vatid": order.get("shop", {}).get("ioss_number", "Yok"),
        "shop": order.get("shop", {}).get("name", ""),
        "vatpaidchf": str(order.get("pricing", {}).get("vat_paid_chf", 0.0)),
        "transaction": order.get("transaction_id"),
        "Buyer Note": order.get("customer", {}).get("buyer_note", ""),
        "Expres": order.get("shipping", {}).get("express", False)
    }

@router.get("/orders")
def get_orders(skip: int = 0, limit: int = 1000):
    """JSON dosyadan orders listesi döndür"""
    print(f"\n📚 GET /api/orders (skip={skip}, limit={limit})")
    
    try:
        orders = load_orders()
        mapped_orders = [map_order_for_frontend(order) for order in orders]
        
        # Pagination
        start = skip
        end = skip + limit
        result = mapped_orders[start:end]
        
        print(f"✅ {len(result)} order döndürüldü")
        return result
        
    except Exception as e:
        print(f"❌ GET orders error: {e}")
        raise HTTPException(status_code=500, detail=str(e))

@router.patch("/orders/{transaction_id}/status")
def update_order_status(transaction_id: int, status_data: StatusUpdate):
    """Order status güncelle"""
    print(f"\n🔄 PATCH /api/orders/{transaction_id}/status -> {status_data.status}")
    
    valid_statuses = ["pending", "cut", "ready", "shipped"]
    if status_data.status not in valid_statuses:
        raise HTTPException(status_code=400, detail=f"Invalid status. Must be one of: {valid_statuses}")
    
    try:
        orders = load_orders()
        order_found = False
        
        # Order bul ve güncelle
        for order in orders:
            if order.get("transaction_id") == transaction_id:
                order["status"] = status_data.status
                order_found = True
                print(f"✅ Order {transaction_id} status -> {status_data.status}")
                break
        
        if not order_found:
            raise HTTPException(status_code=404, detail="Order not found")
        
        # Kaydet
        if save_orders(orders):
            return {"transaction_id": transaction_id, "status": status_data.status}
        else:
            raise HTTPException(status_code=500, detail="Failed to save")
    
    except HTTPException:
        raise
    except Exception as e:
        print(f"❌ Status update error: {e}")
        raise HTTPException(status_code=500, detail=str(e))

@router.patch("/orders/{transaction_id}/fulfillment")
def update_order_fulfillment(transaction_id: int, fulfillment_data: FulfillmentUpdate):
    """Order fulfillment güncelle (cut, ready, shipped)"""
    print(f"\n📦 PATCH /api/orders/{transaction_id}/fulfillment")
    print(f"   Data: {fulfillment_data.dict(exclude_unset=True)}")
    
    try:
        orders = load_orders()
        order_found = False
        
        # Order bul ve güncelle
        for order in orders:
            if order.get("transaction_id") == transaction_id:
                if "fulfillment" not in order:
                    order["fulfillment"] = {}
                
                # Sadece gönderilen field'ları güncelle
                update_data = fulfillment_data.dict(exclude_unset=True)
                for key, value in update_data.items():
                    order["fulfillment"][key] = value
                    print(f"   ✅ {key} -> {value}")
                
                order_found = True
                break
        
        if not order_found:
            raise HTTPException(status_code=404, detail="Order not found")
        
        # Kaydet
        if save_orders(orders):
            return {
                "transaction_id": transaction_id, 
                "fulfillment": order["fulfillment"]
            }
        else:
            raise HTTPException(status_code=500, detail="Failed to save")
    
    except HTTPException:
        raise
    except Exception as e:
        print(f"❌ Fulfillment update error: {e}")
        raise HTTPException(status_code=500, detail=str(e))

@router.put("/orders/{transaction_id}")
def update_full_order(transaction_id: int, order_data: dict):
    """Order'ın tüm bilgilerini güncelle"""
    print(f"\n🔄 PUT /api/orders/{transaction_id}")
    
    try:
        orders = load_orders()
        order_found = False
        
        # Order bul ve güncelle
        for i, order in enumerate(orders):
            if order.get("transaction_id") == transaction_id:
                # Mevcut order'ı yeni data ile güncelle
                orders[i] = {**order, **order_data}
                order_found = True
                print(f"✅ Order {transaction_id} fully updated")
                break
        
        if not order_found:
            raise HTTPException(status_code=404, detail="Order not found")
        
        # Kaydet
        if save_orders(orders):
            return {"transaction_id": transaction_id, "message": "Order updated successfully"}
        else:
            raise HTTPException(status_code=500, detail="Failed to save")
    
    except HTTPException:
        raise
    except Exception as e:
        print(f"❌ Full order update error: {e}")
        raise HTTPException(status_code=500, detail=str(e))

@router.post("/orders/import", response_model=ImportResponse)
def import_google_sheet(import_data: ImportRequest):
    """Google Sheets'ten veri import et"""
    print(f"\n📥 POST /api/orders/import -> {import_data.google_sheet_url}")

    try:
        start_time = time.time()
        errors = []

        # Step 1: Fetch Google Sheet data
        print("🌐 Fetching data from Google Sheets...")
        from fetch_google_sheet import fetch_google_sheet_to_json
        fetch_start = time.time()
        orders = fetch_google_sheet_to_json(import_data.google_sheet_url)
        fetch_duration = time.time() - fetch_start
        print(f"✅ Fetched {len(orders)} orders in {fetch_duration:.2f}s")

        # Step 2: Sync to database
        print("🔄 Syncing to database...")
        sync_start = time.time()
        try:
            sys.path.append(os.path.dirname(__file__).replace('routes', ''))
            from sync_data import sync_json_to_db_for_orders
            sync_success = sync_json_to_db_for_orders()
            sync_duration = time.time() - sync_start
            print(f"✅ Database sync in {sync_duration:.2f}s")
        except Exception as e:
            sync_success = False
            errors.append(f"Database sync failed: {str(e)}")
            sync_duration = time.time() - sync_start

        total_duration = time.time() - start_time

        if sync_success:
            return ImportResponse(
                success=True,
                message=f"Successfully imported {len(orders)} orders",
                fetch_duration=fetch_duration,
                sync_duration=sync_duration,
                orders_count=len(orders),
                errors=errors
            )
        else:
            return ImportResponse(
                success=False,
                message="Import partially successful but database sync failed",
                fetch_duration=fetch_duration,
                sync_duration=sync_duration,
                orders_count=len(orders),
                errors=errors
            )

    except HTTPException:
        raise
    except Exception as e:
        print(f"❌ Import error: {e}")
        return ImportResponse(
            success=False,
            message=f"Import failed: {str(e)}",
            errors=[str(e)]
        )

@router.put("/orders/{transaction_id}/edit")
def edit_order_field(transaction_id: int, field_data: dict):
    """Order'ın belirli bir field'ını güncelle - Frontend checkbox ve note güncellemeleri için"""
    print(f"\n🔄 PUT /api/orders/{transaction_id}/edit")
    print(f"   Data: {field_data}")

    try:
        orders = load_orders()
        order_found = False

        # Field mapping - Frontend field isimlerini backend field isimlerine çevir
        field_mapping = {
            'Produce': 'cut',
            'Ready': 'ready',
            'Shipped': 'shipped',
            'Kesildi': 'cut',
            'Hazır': 'ready',
            'Gönderildi': 'shipped',
            'Note': 'notes'
        }

        # Order bul ve güncelle
        for order in orders:
            if order.get("transaction_id") == transaction_id:
                # Fulfillment objesi yoksa oluştur
                if "fulfillment" not in order:
                    order["fulfillment"] = {}

                # Her field'i güncelle
                for frontend_field, value in field_data.items():
                    backend_field = field_mapping.get(frontend_field, frontend_field)

                    # Boolean conversion for checkbox fields
                    if backend_field in ['cut', 'ready', 'shipped']:
                        # String "TRUE"/"FALSE" to boolean
                        if isinstance(value, str):
                            order["fulfillment"][backend_field] = value.upper() == "TRUE"
                        else:
                            order["fulfillment"][backend_field] = bool(value)
                    else:
                        # Notes field'ını fulfillment altında sakla
                        order["fulfillment"][backend_field] = value

                    print(f"   ✅ {frontend_field} -> fulfillment.{backend_field} = {order['fulfillment'][backend_field]}")

                order_found = True
                break

        if not order_found:
            raise HTTPException(status_code=404, detail="Order not found")

        # Kaydet
        if save_orders(orders):
            return {"transaction_id": transaction_id, "message": "Order field updated successfully"}
        else:
            raise HTTPException(status_code=500, detail="Failed to save")

    except HTTPException:
        raise
    except Exception as e:
        print(f"❌ Edit order field error: {e}")
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/orders/{transaction_id}")
def get_single_order(transaction_id: int):
    """Tek order getir"""
    print(f"\n📄 GET /api/orders/{transaction_id}")

    try:
        orders = load_orders()

        for order in orders:
            if order.get("transaction_id") == transaction_id:
                mapped_order = map_order_for_frontend(order)
                print(f"✅ Order {transaction_id} found")
                return mapped_order

        raise HTTPException(status_code=404, detail="Order not found")

    except HTTPException:
        raise
    except Exception as e:
        print(f"❌ Get single order error: {e}")
        raise HTTPException(status_code=500, detail=str(e))
