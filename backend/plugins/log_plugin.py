"""
Örnek plugin: Yeni sipariş sayısını konsola yazdırır.
"""

def post_process(orders):
    """Sipariş listesi alındığında çağrılır."""
    print(f"[Plugin] İşlenen yeni sipariş sayısı: {len(orders)}")
