/* Noticias automáticas: enlaces a fuentes, sin traducciones inventadas. */
(async function () {
  const root = document.getElementById('noticias-automaticas');
  const status = document.getElementById('estado-noticias-automaticas');
  if (!root) return;
  try {
    const response = await fetch('data/noticias.json', {cache:'no-store'});
    if (!response.ok) throw new Error('HTTP ' + response.status);
    const data = await response.json();
    const items = Array.isArray(data.items) ? data.items : [];
    root.replaceChildren();
    if (!items.length) {
      status.textContent = 'Todavía no hay titulares automáticos disponibles. Consulta las noticias explicadas más abajo.';
      return;
    }
    const topics = [
      ['Inmigración y residencia', /外国人|在留|入管|ビザ|永住|技能実習|特定技能|不法滞在/],
      ['Trabajo y salarios', /最低賃金|賃上げ|賃金|雇用|労働|求人|失業|ハローワーク/],
      ['Costo de vida', /物価|値上げ|電気料金|ガス料金|食料品|家計|給付金|消費税/],
      ['Trámites y servicios', /年金|健康保険|マイナンバー|住民税|社会保険|手続き/],
      ['Cursos y capacitación', /日本語教室|外国人向け|職業訓練|研修|講習/],
      ['Seguridad y emergencias', /地震|津波|台風|避難指示|大雨特別警報|詐欺|外国人犯罪/]
    ];
    const relevant = items.map(item => ({...item, category_es: topics.find(t => t[1].test(item.title || ''))?.[0] || ''})).filter(item => item.category_es);
    if (!relevant.length) {
      status.textContent = 'No hay titulares recientes que coincidan con nuestras categorías. Consulta las noticias en español y las fuentes oficiales.';
      return;
    }
    for (const item of relevant.slice(0, 12)) {
      if (!item || typeof item.title !== 'string' || typeof item.url !== 'string') continue;
      let url;
      try { url = new URL(item.url); } catch { continue; }
      if (url.protocol !== 'https:') continue;
      const article = document.createElement('article');
      article.className = 'noticia-automatica';
      const a = document.createElement('a');
      a.href = url.href;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      a.textContent = item.title;
      const info = document.createElement('p');
      info.className = 'fecha';
      const date = item.published_at ? new Date(item.published_at) : null;
      const dateText = date && !isNaN(date.getTime()) ? date.toLocaleDateString('es-ES',{day:'numeric',month:'long',year:'numeric',timeZone:'Asia/Tokyo'}) : 'Fecha no disponible';
      info.textContent = (item.source || 'Fuente externa') + ' · ' + dateText + ' · Titular original en japonés';
      const category = document.createElement('p');
      category.className = 'etiqueta';
      category.textContent = item.category_es;
      article.append(category, a, info);
      root.append(article);
    }
    status.textContent = 'Selección automática por temas útiles para extranjeros. Titulares originales en japonés, aún sin traducción verificada.';
  } catch (error) {
    status.textContent = 'No fue posible cargar los titulares automáticos. Las noticias explicadas siguen disponibles abajo.';
  }
})();