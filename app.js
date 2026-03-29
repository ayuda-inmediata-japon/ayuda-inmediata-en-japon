document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("searchInput");
  const searchBtn = document.getElementById("searchBtn");
  
  const resultado = document.getElementById("resultado");
  const resultadoContent = document.getElementById("resultadoContent");
  const volverBtn = document.getElementById("volverBtn");
  const arrowDown = document.getElementById("arrowDown");

  const paypalLink = document.getElementById("paypalLink");
  const kofiLink = document.getElementById("kofiLink");
  const paypayLink = document.getElementById("paypayLink");

  // ======= LINKS (edítalos si quieres) =======
  const WHATS_NUMBER = "819084462319";
  const WHATS_MSG = "Hola, necesito ayuda en Japón. Mi consulta es: ";

  // Si ya tienes tus links reales, pégalos aquí:
  if (paypalLink) paypalLink.href = "https://paypal.me/JGarciaUmey";
  if (kofiLink) kofiLink.href = "https://ko-fi.com/ayudainmediatajapon";
  if (paypayLink) paypayLink.href = "#"; // aquí puedes poner link/imagen o dejarlo para después

  // ======= Flecha baja al buscador =======
  const bajar = () => {
    const buscador = document.getElementById("buscador");
    if (buscador) buscador.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  if (arrowDown) {
    arrowDown.addEventListener("click", bajar);
  }

  // ======= Normalizar: minúsculas + sin acentos =======
  const normalizar = (txt) => {
    return (txt || "")
      .toLowerCase()
      .trim()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  };

  // ======= RESPUESTAS (clave -> HTML) =======
  // Puedes ampliar con calma luego.
  const respuestas = {
    taxi: `
      <h2>🚕 Taxi en Japón</h2>
      <p><strong>Cómo pedirlo:</strong> busca una parada de taxi (タクシー乗り場) o usa apps como GO / DiDi (según zona).</p>
      <p><strong>Frases útiles:</strong> 「ここまでお願いします」(Koko made onegaishimasu) = “Hasta aquí por favor”.</p>
    `,

    hospital: `
      <h2>🏥 Salud / Hospital</h2>
      <p><strong>Emergencia grave:</strong> llama al <strong>119</strong> (ambulancia).</p>
      <p><strong>Si no es emergencia:</strong> busca clínica (クリニック) cercana o “内科” (medicina interna).</p>
    `,

    hotel: `
      <h2>🏨 Alojamiento / Hotel</h2>
      <p><strong>Check-in:</strong> muestra pasaporte y reserva. Si llegas tarde, avisa al hotel.</p>
      <p><strong>Problemas:</strong> si hay ruido, limpieza o cobro, pide hablar con recepción (フロント).</p>
    `,
<h2 id="policia">🚓 Policía en Japón</h2>

<p><strong>En Japón la policía forma parte de la vida cotidiana y es muy segura.</strong></p>

<p>Su función es ayudar, orientar y proteger. No dudes en acudir a ellos.</p>

<p><strong>Importante:</strong> en Japón es normal acercarse a la policía incluso por cosas pequeñas.</p>

<p><strong>Koban (交番):</strong> pequeñas estaciones de policía en barrios y calles.</p>

<img src="koban.jpg" class="info-img">

<p><strong>Si necesitas ayuda de la policía, busca un Koban.</strong> Puedes pedir orientación o ayuda.</p>

<p><strong>📞 Policía: 110</strong></p>

<p><strong>🟢 Presiona una situación para ver qué hacer:</strong></p>

<!-- SITUACIONES -->

<button class="option-btn" onclick="toggle('robo')">🚨 Me robaron algo o fui víctima de estafa</button>
<div id="robo" class="hidden">
<p>Ve a un Koban y explica lo sucedido. Lleva documentos si es posible.</p>
</div>

<button class="option-btn" onclick="toggle('perdida')">📄 Perdí mi billetera o documentos</button>
<div id="perdida" class="hidden">
<p>Ve a un Koban. En Japón muchas cosas se recuperan gracias a la policía.</p>
</div>

<button class="option-btn" onclick="toggle('accidente')">🚗 Tuve un accidente</button>
<div id="accidente" class="hidden">
<p>Llama al 110 o busca ayuda inmediata. No abandones el lugar.</p>
</div>

<button class="option-btn" onclick="toggle('perdido')">🧭 Estoy perdido</button>
<div id="perdido" class="hidden">
<p>Un Koban puede darte direcciones claras o ayudarte directamente.</p>
</div>

<button class="option-btn" onclick="toggle('koban')">📍 Cómo encontrar un Koban</button>
<div id="koban" class="hidden">
<p>Busca edificios pequeños con el símbolo de policía o pregunta a locales.</p>
</div>

<!-- IDIOMA -->

<p><strong>🌐 Si tienes dificultad con el idioma:</strong></p>

<p>Puedes mostrar este mensaje al policía:</p>

<ul style="line-height:1.9">

<li>
<strong>Español</strong><br>
Disculpe, no hablo mucho japonés.<br>

<strong>Romaji</strong><br>
Sumimasen, nihongo ga amari hanasemasen.<br>

<strong>日本語</strong><br>
<span style="font-size:24px;font-weight:bold;">
すみません、日本語があまり話せません。
</span>
</li>

<br>

<li>
<strong>Español</strong><br>
¿Dónde está el Koban?<br>

<strong>Romaji</strong><br>
Koban wa doko desu ka?<br>

<strong>日本語</strong><br>
<span style="font-size:24px;font-weight:bold;">
交番はどこですか？
</span>
</li>

</ul>

<!-- BOTONES ACCIONES -->

<p>🙏 Si esta información te fue útil, puedes:</p>

<div style="display:flex;gap:10px;flex-wrap:wrap;justify-content:center;">

<button onclick="navigator.share({title:'Ayuda en Japón',url:window.location.href})"
class="action-btn">↗ Compartir</button>

<button onclick="mostrarGuardar()" class="action-btn">• Guardar</button>

<button onclick="mostrarApoyo()" class="action-btn support">♥ Apoyar</button>

</div>

<!-- GUARDAR -->

<div id="guardar-pagina" style="display:none;margin-top:16px;">
  <p><strong>📌 Cómo guardar esta página</strong></p>

  <p><b>En iPhone / iPad:</b><br>
  Pulsa compartir → "Añadir a pantalla de inicio"</p>

  <p><b>En Android:</b><br>
  Menú → "Añadir a pantalla de inicio"</p>

  <p><b>En computadora:</b><br>
  ⭐ o Ctrl + D</p>
</div>

<!-- APOYO -->

<div id="apoyo" style="display:none;margin-top:16px;" class="support-section">

<p>🙏 Gracias por utilizar esta guía</p>

<h3>❤️ Apoya esta guía</h3>

<p>Si esta guía te ayudó, puedes apoyar con una pequeña colaboración.</p>

<div class="support-buttons">
<a class="support-btn" href="https://paypal.me/JGarciaUmey" target="_blank">💳 PayPal</a>
<a class="support-btn" href="https://ko-fi.com/ayudainmediatajapon" target="_blank">☕ Ko-fi</a>
<a class="support-btn" href="https://qr.paypay.ne.jp/p2p01_uhtObkY1IUOc9WQ6" target="_blank">📱 PayPay</a>
</div>

<p class="support-note">
Incluso una pequeña colaboración ayuda a mantener esta guía gratuita.
</p>

</div>

<p style="font-size:12px;color:#777;margin-top:12px;">
También es posible colaborar utilizando tarjeta de crédito o débito.
</p>

<!-- BOTONES VOLVER MEJORADOS -->

<div style="margin-top:30px;display:flex;gap:12px;flex-wrap:wrap;justify-content:center;">

<button onclick="document.getElementById('contenido').innerHTML = inicio"
style="
padding:14px 20px;
border-radius:10px;
background:#22c55e;
color:#fff;
border:none;
font-size:16px;
font-weight:600;
min-width:180px;
box-shadow:0 4px 10px rgba(0,0,0,0.4);
">
⬅ Volver al buscador
</button>

<button onclick="document.getElementById('contenido').innerHTML = temas.policia"
style="
padding:14px 20px;
border-radius:10px;
background:#3b82f6;
color:#fff;
border:none;
font-size:16px;
font-weight:600;
min-width:180px;
box-shadow:0 4px 10px rgba(0,0,0,0.4);
">
⬆ Volver al tema Policía
</button>

</div>
`,
transporte: `
      <h2>🚆 Transporte</h2>
      <p><strong>Trenes:</strong> usa Google Maps para rutas y andenes.</p>
      <p><strong>IC Card:</strong> Suica / ICOCA sirve para trenes y buses en muchas zonas.</p>
    `,

    dinero: `
      <h2>💴 Dinero y pagos</h2>
      <p><strong>Efectivo:</strong> aún se usa mucho. Cajeros confiables: 7-Eleven / Japan Post.</p>
      <p><strong>Pagos:</strong> PayPay, tarjetas, y efectivo según lugar.</p>
    `,

    vida: `
      <h2>🏠 Vida diaria</h2>
      <p><strong>Basura:</strong> cada ciudad tiene reglas (燃えるごみ / 燃えないごみ / 資源ごみ).</p>
      <p><strong>Consejo:</strong> revisa el calendario de tu municipio.</p>
    `,

    tramites: `
      <h2>📄 Trámites</h2>
      <p><strong>Ward/City Office:</strong> 市役所 / 区役所 (registro, papeles, seguro).</p>
      <p>Si necesitas ayuda con traducción de documentos, escríbenos.</p>
    `,

    servicios: `
      <h2>🧰 Servicios personalizados</h2>
      <ul>
        <li>Interpretación (teléfono o presencial)</li>
        <li>Traducción de documentos</li>
        <li>Acompañamiento a trámites, hospital, hotel</li>
        <li>Planificación y presupuesto de gastos</li>
        <li>Soporte para organizar tu experiencia en Japón</li>
      </ul>
    `,
  };

  // Alias (sinónimos) para buscar
  const alias = {
  // 🚓 POLICÍA
  pol: "policia",
  poli: "policia",
  polic: "policia",
  policia: "policia",
  patrulla: "policia",
  comisaria: "policia",
  koban: "policia",
  robo: "policia",
  robaron: "policia",
  hurto: "policia",
  perdida: "policia",
  perdi: "policia",
  extravio: "policia",
  denuncia: "policia",
  documentos: "policia",
  pasaporte: "policia",
  billetera: "policia",
  cartera: "policia",
  rina: "policia",
  pelea: "policia",

  // 🚨 EMERGENCIA
  emergencia: "emergencia",
  urgencia: "emergencia",
  urgente: "emergencia",
  ayuda: "emergencia",
  ambulancia: "emergencia",
  "119": "emergencia",
  accidente: "emergencia",
  choque: "emergencia",
  atropello: "emergencia",
  herido: "emergencia",
  sangre: "emergencia",
  inconsciente: "emergencia",
  desmayo: "emergencia",
  bomberos: "emergencia",
  incendio: "emergencia",
  fuego: "emergencia",
  humo: "emergencia",
  rescate: "emergencia",
  explosion: "emergencia",

  // 🏥 SALUD
  hospital: "hospital",
  hos: "hospital",
  doctor: "hospital",
  medico: "hospital",
  farmacia: "hospital",
  enfermo: "hospital",
  fiebre: "hospital",
  dolor: "hospital",

  // 🚕 TRANSPORTE
  tax: "taxi",
  taxi: "taxi",
  uber: "taxi",
  tren: "transporte",
  metro: "transporte",
  bus: "transporte",
  autobus: "transporte",
  estacion: "transporte",
  shinkansen: "transporte",
  jr: "transporte",
  avion: "transporte",
  aeropuerto: "transporte",
  vuelo: "transporte",
  pasaje: "transporte",
  boleto: "transporte",
  ticket: "transporte",
  reserva: "transporte",
  equipaje: "transporte",
  maleta: "transporte",
  valija: "transporte",

  // 🏨 ALOJAMIENTO
  hotel: "hotel",
  hostal: "hotel",
  alojamiento: "hotel",
  dormir: "hotel",
  habitacion: "hotel",
  reservar: "hotel",
  checkin: "hotel",
  checkout: "hotel",
  recepcion: "hotel",
  hostel: "hotel",
  ryokan: "hotel",
  capsula: "hotel",
  capsule: "hotel",
  airbnb: "hotel",

  // 💴 DINERO
  dinero: "dinero",
  yen: "dinero",
  efectivo: "dinero",
  cajero: "dinero",
  atm: "dinero",
  tarjeta: "dinero",
  pagar: "dinero",
  pago: "dinero",
  precio: "dinero",
  costo: "dinero",
  cambio: "dinero",
  retirar: "dinero",
  transferencia: "dinero",
  paypay: "dinero",
  suica: "dinero",
  pasmo: "dinero",

  // 🏪 VIDA DIARIA
  basura: "vida",
  reciclaje: "vida",
  conbini: "vida",
  combini: "vida",
  supermercado: "vida",
  compras: "vida",
  comida: "vida",
  lavanderia: "vida",
  restaurante: "vida",
  restaurantes: "vida",
  ramen: "vida",
  sushi: "vida",
  wifi: "vida",
  internet: "vida",
  bano: "vida",
  baño: "vida",
  toilet: "vida",
  ducha: "vida",
  tienda: "vida",
  konbini: "vida",
  "7eleven": "vida",
  lawson: "vida",
  familymart: "vida",

  // 📄 TRÁMITES
  tramite: "tramites",
  tramites: "tramites",
  documento: "tramites",
  documentos: "tramites",
  papeles: "tramites",
  visa: "tramites",
  migracion: "tramites",
  residencia: "tramites",
  alcaldia: "tramites",
  ayuntamiento: "tramites",
  registro: "tramites",
  zairyu: "tramites",
  zairyucard: "tramites",
  tarjetaresidencia: "tramites",
  direccion: "tramites",
  mudanza: "tramites",
  cambio_direccion: "tramites",
  seguro: "tramites",
  nenkin: "tramites",
  hoken: "tramites",
  impuestos: "tramites"
};

  const mostrar = (html) => {
    if (!resultado || !resultadoContent) return;
    resultadoContent.innerHTML = html;
    resultado.classList.remove("oculto");
    resultado.scrollIntoView({ behavior: "smooth", block: "start" });
  };

const mostrarNoEncontrado = () => {
  mostrar(`

<h2>🤔 No encontré información exacta</h2>

<p>
Intenta buscar nuevamente usando <strong>palabras similares</strong>
o una forma diferente de escribir tu consulta.
</p>

<p>
Si aún no encuentras lo que buscas y necesitas ayuda,
puedes contactarnos con toda confianza.
</p>

<p><strong>💬 WhatsApp</strong></p>

<a
style="background:#25D366;color:white;padding:16px;border-radius:30px;text-decoration:none;display:block;text-align:center;font-size:18px;font-weight:600;margin-top:12px;width:100%;"
href="https://wa.me/819084462319?text=Hola,%20quisiera%20información%20general%20sobre:"
target="_blank">
📲 Orientación general
</a>

<a
style="background:#25D366;color:white;padding:16px;border-radius:30px;text-decoration:none;display:block;text-align:center;font-size:18px;font-weight:600;margin-top:12px;width:100%;"
href="https://wa.me/819084462319?text=Hola,%20quisiera%20orientación%20personalizada%20sobre:"
target="_blank">
📞 Orientación personalizada
</a>

  `);
};

  function buscar() {
    const valor = normalizar(searchInput ? searchInput.value : "");
    if (!valor) return;

  const palabras = valor.split(/\s+/);
let clave = alias[valor] || valor;

for (const palabra of palabras) {
  if (alias[palabra]) {
    clave = alias[palabra];
    break;
  }
}

    if (respuestas[clave]) {
      mostrar(respuestas[clave]);
    } else {
      mostrarNoEncontrado();
    }
  }

  // Buscar con botón
  if (searchBtn) searchBtn.addEventListener("click", buscar);

  // Buscar con Enter
  if (searchInput) {
    searchInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") buscar();
    });
  }

  // ✅ Auto-buscar SOLO si hay coincidencia exacta (no interrumpe al escribir)
  let tAuto = null;
  if (searchInput) {
    searchInput.addEventListener("input", () => {
      clearTimeout(tAuto);

      tAuto = setTimeout(() => {
        const valor = normalizar(searchInput.value);
        if (!valor) return;

        const clave = alias[valor] || valor;

        // Solo dispara si existe EXACTO
        if (respuestas[clave]) buscar();
      }, 50); // 👈 velocidad (50 rápido, 200 normal, 600 lento)
    });
  }

  // Volver
  if (volverBtn) {
    volverBtn.addEventListener("click", () => {
      if (resultado) resultado.classList.add("oculto");
      if (resultadoContent) resultadoContent.innerHTML = "";
      if (searchInput) searchInput.value = "";

      const buscador = document.getElementById("buscador");
      if (buscador) buscador.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  // Chips (mapea categorías a claves reales)
  const chips = document.querySelectorAll(".chip");

  // OJO: tus data-key son: emergencia, transporte, salud, alojamiento, dinero, vida-diaria, tramites, servicios
  // Pero tus respuestas reales son: emergencia, transporte, hospital, hotel, dinero, vida, tramites, servicios
  const chipMap = {
    emergencia: "emergencia",
    transporte: "transporte",
    salud: "hospital",
    alojamiento: "hotel",
    dinero: "dinero",
    "vida-diaria": "vida",
    vida: "vida",
    tramites: "tramites",
    servicios: "servicios",
  };

  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      const raw = (chip.getAttribute("data-key") || "").trim().toLowerCase();
      const key = chipMap[raw] || raw;

      if (respuestas[key]) {
        // Opcional: también pone la palabra en el buscador
        if (searchInput) searchInput.value = key;
        mostrar(respuestas[key]);
      }
    });
  });
});
function mostrarGuardar() {
  const guardar = document.getElementById("guardar-pagina");
  const apoyo = document.getElementById("apoyo");

  if (guardar) guardar.style.display = "block";
  if (apoyo) apoyo.style.display = "none";
}

function mostrarApoyo() {
  const guardar = document.getElementById("guardar-pagina");
  const apoyo = document.getElementById("apoyo");

  if (apoyo) apoyo.style.display = "block";
  if (guardar) guardar.style.display = "none";
}
// BOTONES ORIENTACIÓN

const btnGeneral = document.getElementById("btnGeneral");
const btnPersonalizada = document.getElementById("btnPersonalizada");

const servicioModal = document.getElementById("servicioModal");
const cancelarServicioModal = document.getElementById("cancelarServicioModal");
const cerrarServicioModal = document.getElementById("cerrarServicioModal");
if (cancelarServicioModal) {
  cancelarServicioModal.addEventListener("click", cerrarModalServicio);
}
const servicioModalTitulo = document.getElementById("servicioModalTitulo");
const servicioModalTexto = document.getElementById("servicioModalTexto");
const servicioModalWhatsapp = document.getElementById("servicioModalWhatsapp");

function abrirServicioModal(titulo, html, whatsappUrl, btnClass = "general") {
  if (!servicioModal) return;

  servicioModalTitulo.textContent = titulo;
  servicioModalTexto.innerHTML = html;
  servicioModalWhatsapp.href = whatsappUrl;

  servicioModalWhatsapp.classList.remove("general", "personalizada");
  servicioModalWhatsapp.classList.add(btnClass);

  servicioModal.classList.remove("oculto");
  document.body.classList.add("modal-abierto");
}

function cerrarModalServicio() {
  if (!servicioModal) return;
  servicioModal.classList.add("oculto");
  document.body.classList.remove("modal-abierto");
}

if (btnGeneral) {
  btnGeneral.addEventListener("click", function () {
    abrirServicioModal(
      "💬 ORIENTACIÓN GENERAL",
      `
      <p>La guía y las respuestas del buscador están pensadas para resolver la mayoría de las situaciones de forma rápida.</p>

      <p>La orientación general es gratuita y está pensada para ayudarte a entender cómo funcionan muchas cosas en Japón.</p>

      <p>Puede servirte por ejemplo para:</p>

      <ul>
        <li>resolver dudas sencillas</li>
        <li>entender trámites en Japón</li>
        <li>recibir orientación sobre situaciones básicas</li>
        <li>saber qué pasos seguir en ciertos casos</li>
      </ul>

      <p>Si tienes una duda puntual o necesitas una aclaración, puedes contactarnos y trataremos de orientarte.</p>

      <p><strong>Si estás de acuerdo, presiona el botón para contactarnos por WhatsApp.</strong></p>
      `,
      "https://wa.me/819084462319?text=Hola,%20requiero%20orientaci%C3%B3n%20general.",
      "general"
    );
  });
}

if (btnPersonalizada) {
  btnPersonalizada.addEventListener("click", function () {
    abrirServicioModal(
      "📞 AYUDA PERSONALIZADA",
      `
      <p>La ayuda personalizada es cuando tu situación requiere intervención directa, coordinación o acompañamiento.</p>

      <p>Puede incluir por ejemplo:</p>

      <ul>
        <li>llamadas en japonés para resolver una situación</li>
        <li>comunicación con hoteles, hospitales o instituciones</li>
        <li>traducción de documentos sencillos</li>
        <li>acompañamiento como intérprete en hospitales u oficinas</li>
        <li>orientación directa según tu caso específico</li>
        <li>ayuda para planificar tu estadía en Japón</li>
        <li>planificación de viajes o turismo</li>
        <li>propuestas y estimación de costos para tours o viajes</li>
        <li>guía personalizada para visitas o actividades</li>
        <li>acompañamiento para compras o recorridos en la ciudad</li>
      </ul>

      <p>Este tipo de asistencia es un servicio profesional con costo.</p>

      <p><strong>Si estás de acuerdo, presiona el botón para contactarnos por WhatsApp.</strong></p>
      `,
      "https://wa.me/819084462319?text=Hola,%20requiero%20orientaci%C3%B3n%20personalizada.",
      "personalizada"
    );
  });
}

if (cerrarServicioModal) {
  cerrarServicioModal.addEventListener("click", cerrarModalServicio);
}

if (servicioModal) {
  servicioModal.addEventListener("click", function (e) {
    if (e.target === servicioModal) {
      cerrarModalServicio();
    }
  });
}