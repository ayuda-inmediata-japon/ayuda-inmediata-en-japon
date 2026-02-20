// Configuración
const WHATSAPP_NUMBER = "819084462319"; // tu número sin + y sin espacios
const WA_DEFAULT_MSG = "Hola, estoy en Japón y necesito ayuda con: ";
const WA_EXPERIENCE_MSG = "Hola, me gustaría contarte mi experiencia con la guía y compartir una sugerencia.";

// Elementos
const scrollHint = document.getElementById("scrollHint");
const main = document.getElementById("main");
const searchInput = document.getElementById("searchInput");
const focus = document.getElementById("focus");
const focusCard = document.getElementById("focusCard");
const backBtn = document.getElementById("backBtn");
const backSearchBtn = document.getElementById("backSearchBtn");
const waBtn = document.getElementById("waBtn");
const expBtn = document.getElementById("expBtn");

// Estado simple
let lastPanelScrollY = 0;

// Utilidad: abrir WhatsApp con mensaje
function openWhatsApp(text){
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  window.open(url, "_blank");
}

// Botones
waBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const q = (searchInput.value || "").trim();
  openWhatsApp(WA_DEFAULT_MSG + (q ? q : "..."));
});

expBtn.addEventListener("click", (e) => {
  e.preventDefault();
  openWhatsApp(WA_EXPERIENCE_MSG);
});

scrollHint.addEventListener("click", () => {
  main.scrollIntoView({behavior:"smooth"});
});

// Índice por chips
document.querySelectorAll(".chip").forEach(btn => {
  btn.addEventListener("click", () => {
    const key = btn.dataset.key;
    showResult(key, btn.textContent.trim());
  });
});

// Búsqueda (enter)
searchInput.addEventListener("keydown", (e) => {
  if(e.key === "Enter"){
    const q = (searchInput.value || "").trim();
    handleSearch(q);
  }
});

// Lógica de búsqueda básica (por palabras clave)
function handleSearch(q){
  if(!q){
    return;
  }

  const text = q.toLowerCase();

  // Mapeo mínimo (vamos ampliando luego)
  if(text.includes("taxi")) return showResult("transporte", "🚕 Taxi en Japón", taxiContent());
  if(text.includes("tren") || text.includes("metro") || text.includes("shinkansen")) return showResult("transporte", "🚆 Transporte en Japón", transporteMini(q));
  if(text.includes("hotel")) return showResult("vida", "🏨 Hotel en Japón", placeholder("Hotel", q));
  if(text.includes("cajero") || text.includes("atm")) return showResult("dinero", "💴 ATM / Cajeros", placeholder("ATM / Cajeros", q));
  if(text.includes("polic") || text.includes("110")) return showResult("emergencia", "🆘 Policía (110)", placeholder("Policía", q));
  if(text.includes("hospital") || text.includes("ambul") || text.includes("119")) return showResult("emergencia", "🆘 Emergencia médica (119)", placeholder("Emergencia médica", q));

  // Si no encuentra
  showNotFound(q);
}

// Modo enfoque
function showResult(sectionKey, title, html){
  lastPanelScrollY = window.scrollY;

  focus.hidden = false;
  focusCard.innerHTML = `
    <h2 style="margin:0 0 10px">${escapeHtml(title)}</h2>
    <div>${html || placeholder("Sección", title)}</div>
  `;

  // transición suave tipo app
  focus.scrollIntoView({behavior:"smooth"});
}

// Volver atrás / volver al buscador
backBtn.addEventListener("click", () => {
  window.scrollTo({top:lastPanelScrollY, behavior:"smooth"});
});
backSearchBtn.addEventListener("click", () => {
  searchInput.focus();
  main.scrollIntoView({behavior:"smooth"});
});

function showNotFound(q){
  showResult("notfound", "🔎 No encontramos esa información todavía.", `
    <p>Estamos ampliando constantemente esta guía.</p>
    <p><b>🟢 Puedes escribirnos por WhatsApp y contarnos tu situación.</b><br/>Te orientaremos con gusto.</p>
    <p style="margin-top:10px">
      <button id="waNow" style="padding:12px 14px;border-radius:14px;border:1px solid #22c55e;background:rgba(34,197,94,.18);cursor:pointer;font-weight:700">
        🟢💬 Escribir por WhatsApp
      </button>
    </p>
  `);

  setTimeout(() => {
    const waNow = document.getElementById("waNow");
    if(waNow){
      waNow.addEventListener("click", () => openWhatsApp(WA_DEFAULT_MSG + q));
    }
  }, 0);
}

// Contenido: Taxi (tu versión definitiva)
function taxiContent(){
  return `
    <h3>✅ Cómo tomar un taxi</h3>
    <ul>
      <li>Puedes encontrar taxis en paradas oficiales (タクシー乗り場) cerca de estaciones, hospitales y hoteles.</li>
      <li>En ciudades grandes también puedes detener un taxi en la calle si la luz indica que está libre.</li>
      <li>En zonas menos transitadas es mejor esperar en una parada oficial o llamar.</li>
    </ul>

    <h3>🗣️ Qué decir</h3>
    <div style="background:#f4f6f8;border-radius:12px;padding:12px;margin:10px 0">
      <b>📍 Mostrar dirección:</b><br>
      「ここに行きたいです。」<br><small>Quiero ir aquí.</small>
    </div>
    <div style="background:#f4f6f8;border-radius:12px;padding:12px;margin:10px 0">
      <b>📍 Preguntar dónde está la parada:</b><br>
      「タクシー乗り場はどこですか？」<br><small>¿Dónde está la parada de taxis?</small>
    </div>
    <div style="background:#f4f6f8;border-radius:12px;padding:12px;margin:10px 0">
      <b>💴 Preguntar precio aproximado:</b><br>
      「だいたいいくらですか？」<br><small>¿Cuánto cuesta aproximadamente?</small>
    </div>

    <h3>⚠️ Consejo importante</h3>
    <ul>
      <li>La puerta trasera se abre automáticamente.</li>
      <li>Después de medianoche la tarifa aumenta.</li>
      <li>Lleva la dirección escrita en japonés.</li>
    </ul>
  `;
}

function transporteMini(q){
  return `
    <p><b>✅ Qué hacer</b></p>
    <ul>
      <li>Busca tu ruta en Google Maps.</li>
      <li>Verifica línea y plataforma.</li>
      <li>Haz fila en el andén.</li>
      <li>Deja salir antes de entrar.</li>
    </ul>
    <p style="margin-top:10px;color:#444"><small>Consulta específica: <b>${escapeHtml(q)}</b></small></p>
  `;
}

function placeholder(topic, q){
  return `
    <p><b>✅ Qué hacer</b></p>
    <ul>
      <li>Estamos preparando esta sección con pasos claros.</li>
      <li>Mientras tanto, si es urgente, escríbenos por WhatsApp.</li>
    </ul>
    <p style="margin-top:10px;color:#444"><small>Tu búsqueda: <b>${escapeHtml(q)}</b></small></p>
  `;
}

function escapeHtml(str){
  return String(str).replace(/[&<>"']/g, s => ({
    "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"
  }[s]));
}