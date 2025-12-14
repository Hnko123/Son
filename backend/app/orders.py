import json
from pathlib import Path

# Define path to orders.json relative to project root
ORDERS_FILE = Path(__file__).resolve().parent.parent / "data" / "etsy_orders.json"

def load_orders():
    """Load orders from the JSON file. Return a list of order dicts.
    If the file does not exist or cannot be parsed, return an empty list.
    """
    if not ORDERS_FILE.exists():
        # Ensure the file exists with an empty array
        try:
            with open(ORDERS_FILE, 'w', encoding='utf-8') as f:
                json.dump([], f)
        except Exception:
            pass
        return []
    try:
        with open(ORDERS_FILE, 'r', encoding='utf-8') as f:
            data = json.load(f)
            if isinstance(data, list):
                return data
            # If file contains something else, reset to empty list
            return []
    except Exception as e:
        # Log error if needed; for now just return empty list
        return []

def save_orders(orders):
    """Save the provided orders list back to the JSON file.
    Returns True on success, False otherwise.
    """
    try:
        with open(ORDERS_FILE, 'w', encoding='utf-8') as f:
            json.dump(orders, f, indent=2, ensure_ascii=False)
        return True
    except Exception as e:
        return False
