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
    for (const item of items.slice(0, 20)) {
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
      info.textContent = (item.source || 'Fuente externa') + ' · ' + dateText + ' · Titular original en inglés';
      article.append(a, info);
      root.append(article);
    }
    status.textContent = 'Titulares enlazados a su fuente original. Se muestran en inglés para evitar traducciones automáticas imprecisas.';
  } catch (error) {
    status.textContent = 'No fue posible cargar los titulares automáticos. Las noticias explicadas siguen disponibles abajo.';
  }
})();