# 🕵️‍♀️ Pazar Analizi & Tag Scraper Aracı

`market_intel_agent.py` scripti Etsy rakip mağazalardan tag toplamak ve Google Search Console (GSC) verilerini çekmek için hazırlanmıştır. Komut satırından parametre vererek tek seferlik raporlar veya cron tabanlı otomasyonlar oluşturabilirsiniz.

## Kurulum
```bash
cd HakanAp/localetsymanagement
source venv/bin/activate        # varsa
pip install -r requirements.txt
```

## Gerekli Ortam Değişkenleri
| Değişken | Açıklama |
|----------|----------|
| `ETSY_API_KEY` | Etsy v3 API anahtarı. [developers.etsy.com](https://developers.etsy.com/) üzerinden alınır. |
| `GOOGLE_APPLICATION_CREDENTIALS` | (Opsiyonel) Search Console API için service account JSON dosya yolu. Komutta `--service-account` geçilmediği durumda kullanılır. |

```bash
export ETSY_API_KEY="your_key_here"
export GOOGLE_APPLICATION_CREDENTIALS="/path/to/service-account.json"
```

## Kullanım Senaryoları
### 1. Anahtar Kelime ile Tag Toplamak
```bash
python market_intel_agent.py etsy \
  --query "gold initial necklace" \
  --limit 40 \
  --output data/gold_initial_tags.json
```
- İlk 40 listede kullanılan tag’ler toplanır.
- Varsayılan çıktı JSON’dur; `--format csv` derseniz `*.listings.csv` ve `*.tags.csv` dosyaları oluşur.

### 2. Belirli Bir Mağazayı İzlemek
```bash
python market_intel_agent.py etsy \
  --shop-name MyTargetShop \
  --limit 60 \
  --top-tags 50 \
  --output data/my_target_shop.json
```
- `--shop-id` biliyorsanız direk kullanabilirsiniz. Mağaza adı girildiğinde script otomatik olarak ID’yi çözer.

### 3. Google Search Console Raporu
```bash
python market_intel_agent.py gsc \
  --site-url https://example.com \
  --start-date 2024-01-01 \
  --end-date 2024-01-31 \
  --row-limit 75 \
  --output data/gsc_january.json
```
- Eğer belirli bir sorguya filtrelemek isterseniz `--query "necklace"` ekleyebilirsiniz.

## Çıktı İçeriği
```json
{
  "query": "gold initial necklace",
  "shop_id": null,
  "listing_count": 32,
  "listings": [
    {
      "listing_id": 1234567890,
      "title": "Personalized Gold Initial Necklace",
      "price": "45.00 USD",
      "shop_id": 111222,
      "shop_name": "MyTargetShop",
      "url": "https://www.etsy.com/listing/1234567890",
      "tags": ["initial necklace", "personalized", "gold jewelry"]
    }
  ],
  "top_tags": [
    {"tag": "initial necklace", "count": 14},
    {"tag": "personalized gift", "count": 8}
  ]
}
```
- Tag listesi lower-case normalize edilir; bu sayede aynı anlamdaki tag’ler birleşir.
- CSV çıktısı iki dosya üretir: `.listings.csv` (tüm listingler) ve `.tags.csv` (tag frekansı).

## Otomasyon Önerisi
`cron_jobs/` klasörüne basit bir cron script’i ekleyerek günlük/haftalık tag raporları alabilirsiniz:
```bash
0 7 * * 1 cd /root/HakanAp/localetsymanagement && \
  source venv/bin/activate && \
  python market_intel_agent.py etsy --shop-name MyTargetShop --limit 80 --output data/cron_reports/my_shop_$(date +\%F).json
```

## Sorun Giderme
- **401 Unauthorized**: Etsy API anahtarı hatalı veya izinleri eksik. Developers panelinden doğru uygulamayı seçtiğinizden emin olun.
- **429 Rate Limit**: Çok hızlı istek atıyorsunuz. `--limit` değerini düşürün veya cron aralığını açın.
- **Google kitaplık hataları**: `pip install google-api-python-client google-auth google-auth-oauthlib` komutuyla eksik bağımlılıkları yükleyin.

> Script yalnızca Etsy’nin resmi API’sini kullanır; HTML scraping yapılmadığı için anti-bot engelleriyle uğraşmazsınız.
