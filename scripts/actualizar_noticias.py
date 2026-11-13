"""Actualiza titulares oficiales sin inventar traducciones ni resúmenes.
Los titulares se conservan en su idioma original. Requiere revisión editorial
para convertirlos en artículos explicativos en español.
"""
import datetime as dt
import email.utils
import hashlib
import json
from pathlib import Path
import urllib.request
import xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parents[1]
DEST = ROOT / "data" / "noticias.json"
SOURCES = [
    ("NHK Noticias", "https://news.web.nhk/n-data/conf/na/rss/cat0.xml"),
    ("NHK Noticias (alternativa)", "https://www.nhk.or.jp/rss/news/cat0.xml"),
]
MAX_ITEMS = 60

def get(url):
    request = urllib.request.Request(url, headers={"User-Agent": "AyudaInmediataJaponNews/1.0"})
    with urllib.request.urlopen(request, timeout=20) as response:
        return response.read()

def parse_rss(xml, source):
    root = ET.fromstring(xml)
    result = []
    for item in root.findall(".//item"):
        title = (item.findtext("title") or "").strip()
        link = (item.findtext("link") or "").strip()
        pub = (item.findtext("pubDate") or "").strip()
        if not title or not link.startswith("https://"):
            continue
        try:
            date = email.utils.parsedate_to_datetime(pub).astimezone(dt.timezone.utc).isoformat()
        except (TypeError, ValueError, OverflowError):
            date = ""
        result.append({"id": hashlib.sha256(link.encode()).hexdigest()[:20],
                       "title": title[:240], "url": link, "source": source,
                       "published_at": date, "language": "ja"})
    return result

def main():
    previous = json.loads(DEST.read_text(encoding="utf-8")) if DEST.exists() else {"items": []}
    items = {x["id"]: x for x in previous.get("items", [])}
    successful = False
    for name, url in SOURCES:
        try:
            parsed = parse_rss(get(url), name)
            if not parsed:
                raise ValueError("La fuente no contiene titulares válidos")
            for item in parsed:
                items[item["id"]] = item
            successful = True
            break
        except Exception as exc:
            print(f"No se pudo consultar {name}: {exc}")
    if not successful:
        print("Sin fuentes disponibles: se conserva el archivo anterior")
        return
    selected = sorted(items.values(), key=lambda x: x.get("published_at") or "", reverse=True)[:MAX_ITEMS]
    if selected == previous.get("items", []):
        print("No hay noticias nuevas")
        return
    output = {"updated_at": dt.datetime.now(dt.timezone.utc).isoformat(), "items": selected}
    DEST.parent.mkdir(parents=True, exist_ok=True)
    DEST.write_text(json.dumps(output, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"Guardadas {len(selected)} noticias")

if __name__ == "__main__":
    main()
