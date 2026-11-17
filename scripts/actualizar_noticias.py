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
MAX_ITEMS = 30
# Filtro conservador: solo titulares vinculados con la vida en Japón.
CATEGORIES = [
    ("Inmigración y residencia", ("外国人", "在留", "入管", "ビザ", "永住", "技能実習", "特定技能", "不法滞在", "入国管理", "在留資格", "帰化", "難民")),
    ("Trabajo y salarios", ("最低賃金", "賃上げ", "賃金", "雇用", "労働", "求人", "失業", "ハローワーク")),
    ("Costo de vida", ("物価", "値上げ", "電気料金", "ガス料金", "食料品", "家計", "給付金")),
    ("Impuestos y obligaciones", ("所得税", "住民税", "消費税", "確定申告", "年末調整", "納税", "税制", "税金", "固定資産税")),
    ("Seguros y pensiones", ("年金", "健康保険", "社会保険", "国民健康保険", "保険料", "介護保険")),
    ("Trámites y servicios", ("マイナンバー", "手続き", "自治体", "行政サービス")),
    ("Cursos y capacitación", ("日本語教室", "外国人向け", "職業訓練", "研修", "講習")),
    ("Seguridad y emergencias", ("地震", "津波", "台風", "避難指示", "大雨特別警報", "詐欺", "外国人犯罪")),
]
def category(title):
    for label, terms in CATEGORIES:
        if any(term in title for term in terms):
            return label
    return None


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
    # Refiltrar también noticias antiguas: no conservar deportes o política general.
    selected = []
    for item in sorted(items.values(), key=lambda x: x.get("published_at") or "", reverse=True):
        label = category(item.get("title", ""))
        if label:
            selected.append({**item, "category_es": label})
        if len(selected) >= MAX_ITEMS:
            break
    priority = {"Inmigración y residencia", "Impuestos y obligaciones", "Seguros y pensiones", "Trabajo y salarios", "Trámites y servicios"}
    archive = {x["id"]: x for x in previous.get("archive", [])}
    for item in items.values():
        label = category(item.get("title", ""))
        if label in priority:
            archive[item["id"]] = {**item, "category_es": label}
    history = sorted(archive.values(), key=lambda x: x.get("published_at") or "", reverse=True)
    output = {"updated_at": dt.datetime.now(dt.timezone.utc).isoformat(), "items": selected, "archive": history}
    DEST.parent.mkdir(parents=True, exist_ok=True)
    DEST.write_text(json.dumps(output, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"Guardadas {len(selected)} noticias")

if __name__ == "__main__":
    main()
