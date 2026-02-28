/* =========================
   Ayuda Inmediata Japón - app.js
   (versión estable: buscar + chips + mensajes)
   ========================= */

document.addEventListener("DOMContentLoaded", () => {
  // ====== Elementos ======
  const searchInput = document.getElementById("searchInput");
  const searchBtn = document.getElementById("searchBtn");

  const resultado = document.getElementById("resultado");
  const resultadoContent = document.getElementById("resultadoContent");
  const volverBtn = document.getElementById("volverBtn");

  const arrowDown = document.getElementById("arrowDown");

  const whatsLink = document.getElementById("whatsLink");
  const paypalLink = document.getElementById("paypalLink");
  const kofiLink = document.getElementById("kofiLink");
  const paypayLink = document.getElementById("paypayLink");

  // ====== Links ======
  const WHATS_NUMBER = "819084462319";
  const WHATS_MSG = "Hola, necesito ayuda en Japón. Mi situación es:";

  const WHATS_URL = `https://wa.me/${WHATS_NUMBER}?text=${encodeURIComponent(WHATS_MSG)}`;

  if (whatsLink) whatsLink.href = WHATS_URL;
  if (paypalLink) paypalLink.href = "https://paypal.me/JGarciaUmey";
  if (kofiLink) kofiLink.href = "https://ko-fi.com/ayudainmediatajapon";
  if (paypayLink) paypayLink.href = "#"; // aquí luego pondrás tu QR o link

  // ====== Utilidades ======
  const normalizar = (txt) => {
    return (txt || "")
      .toString()
      .trim()
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, ""); // quita acentos
  };

  const abrirResultado = (html) => {
    if (!resultado || !resultadoContent) return;
    resultadoContent.innerHTML = html;
    resultado.classList.remove("oculto");
    resultado.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const cerrarResultado = () => {
    if (!resultado) return;
    resultado.classList.add("oculto");
    if (searchInput) searchInput.value = "";
    const buscador = document.getElementById("buscador");
    if (buscador) buscador.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // ====== Flecha bajar ======
  const bajar = () => {
    const buscador = document.getElementById("buscador");
    if (buscador) buscador.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  if (arrowDown) arrowDown.addEventListener("click", bajar);

  // ====== Contenido (respuestas) ======
  // OJO: Las claves “reales” deben coincidir con lo que buscas.
  const respuestas = {
    emergencia: `
      <div class="resultado-content">
        emergencia: `
  <div class="resultado-content">
    <h2>🚨 Emergencias en Japón</h2>

    <p>
      En Japón, una emergencia es cualquier situación que represente
      peligro inmediato para tu vida, salud o seguridad.
    </p>

    <ul>
      <li>Accidentes graves</li>
      <li>Incendios</li>
      <li>Robos o violencia</li>
      <li>Problemas médicos urgentes</li>
    </ul>

    <hr style="margin:18px 0; opacity:0.25;">

    <h3>📞 Números importantes</h3>

    <ul>
      <li><strong>110</strong> – Policía</li>
      <li><strong>119</strong> – Ambulancia o Bomberos</li>
    </ul>

    <p>
      Estos números son gratuitos y funcionan las 24 horas.
    </p>

    <hr style="margin:18px 0; opacity:0.25;">

    <h3>🧭 ¿Cómo funciona el sistema?</h3>

    <ul>
      <li>Un operador responderá rápidamente.</li>
      <li>Te preguntarán tu ubicación exacta.</li>
      <li>Te pedirán explicar qué está ocurriendo.</li>
      <li>La ayuda suele llegar con rapidez.</li>
    </ul>

    <p>
      Es importante mantener la calma y hablar despacio.
    </p>

    <hr style="margin:18px 0; opacity:0.25;">

    <h3>⚠️ Consejos importantes</h3>

    <ul>
      <li>Usa el mapa del teléfono para mostrar tu ubicación.</li>
      <li>No uses estos números para consultas leves.</li>
      <li>Si no hablas japonés, intenta usar frases simples.</li>
    </ul>

    <hr style="margin:18px 0; opacity:0.25;">

    <p><strong>Selecciona el tipo de emergencia:</strong></p>

    <div class="subchips">
      <button onclick="buscarDirecto('policia')" class="chip-sub">👮 Policía</button>
      <button onclick="buscarDirecto('ambulancia')" class="chip-sub">🚑 Ambulancia</button>
      <button onclick="buscarDirecto('incendio')" class="chip-sub">🚒 Bomberos</button>
    </div>

  </div>
`,
    policia: `
      <div class="resultado-content">
        <h2>👮 Policía (110)</h2>
        <p>Para emergencias o ayuda policial inmediata en Japón, llama al <strong>110</strong>.</p>
        <p>Si no hablas japonés, podemos ayudarte a explicar tu situación.</p>
      </div>
    `,
    taxi: `
      <div class="resultado-content">
        <h2>🚕 Taxi</h2>
        <p>En Japón puedes tomar taxi en la calle (zonas permitidas) o pedirlo por apps.</p>
        <p>Si necesitas decir destino o explicar algo al conductor, te ayudamos.</p>
      </div>
    `,
    hospital: `
      <div class="resultado-content">
        <h2>🏥 Hospital / Clínica</h2>
        <p>Si es grave: llama al <strong>119</strong>.</p>
        <p>Si es consulta o necesitas traducción/interpretación, escríbenos y te orientamos.</p>
      </div>
    `,
    hotel: `
      <div class="resultado-content">
        <h2>🏨 Hotel / Hospedaje</h2>
        <p>¿Problema con check-in, reserva o comunicación? Te ayudamos a explicar tu situación.</p>
      </div>
    `,
    transporte: `
      <div class="resultado-content">
        <h2>🚆 Transporte</h2>
        <p>Trenes, metro, bus, aeropuertos. Si te perdiste o no entiendes una señal, te guiamos.</p>
      </div>
    `,
    dinero: `
      <div class="resultado-content">
        <h2>💴 Dinero y pagos</h2>
        <p>Tarjetas, cajeros, efectivo, recargas, PayPay. Te orientamos según tu caso.</p>
      </div>
    `,
    "vida-diaria": `
      <div class="resultado-content">
        <h2>🏠 Vida diaria</h2>
        <p>Basura, reglas del edificio, supermercados, convivencia, etc. Te ayudamos paso a paso.</p>
      </div>
    `,
    tramites: `
      <div class="resultado-content">
        <h2>📄 Trámites</h2>
        <p>Ayuda para entender documentos, procedimientos, citas, y qué hacer en cada paso.</p>
      </div>
    `,
    servicios: `
      <div class="resultado-content">
        <h2>📦 Servicios</h2>
        <blockquote style="margin:14px 0; padding:14px; border-left:4px solid rgba(255,255,255,0.18); opacity:0.95;">
          <strong>Si requieres apoyo específico —como traducción de documentos, interpretación telefónica o presencial, planificación o acompañamiento— puedes escribirnos con confianza.</strong>
        </blockquote>

        <p style="margin-top:12px;">
          Ofrecemos <strong>interpretación</strong>, <strong>traducción</strong>, <strong>acompañamiento</strong> y <strong>planificación</strong> en Japón.
        </p>

        <a href="${WHATS_URL}" class="cta-whatsapp">💬 Necesito ayuda por WhatsApp</a>

        <hr style="margin:18px 0; opacity:0.25;">

        <p style="font-size:14px; opacity:0.85; line-height:1.5;">
          La guía y la orientación inicial son gratuitas.<br>
          Si te resultan útiles, puedes apoyar el proyecto de forma voluntaria.
        </p>
      </div>
    `
  };

  // ====== Alias (sin acentos) ======
  const alias = {
    // Emergencia / policía
    emergencia: "emergencia",
    urgente: "emergencia",
    urgencia: "emergencia",
    policia: "policia",
    "policia 110": "policia",
    robo: "policia",

    // Taxi
    taxi: "taxi",
    uber: "taxi",

    // Salud
    hospital: "hospital",
    clinica: "hospital",
    medico: "hospital",
    doctor: "hospital",
    ambulancia: "hospital",

    // Hotel
    hotel: "hotel",
    hospedaje: "hotel",
    alojamiento: "hotel",

    // Transporte
    transporte: "transporte",
    tren: "transporte",
    metro: "transporte",
    bus: "transporte",
    aeropuerto: "transporte",

    // Dinero
    dinero: "dinero",
    cajero: "dinero",
    tarjeta: "dinero",
    efectivo: "dinero",
    paypay: "dinero",

    // Vida diaria
    vida: "vida-diaria",
    "vida diaria": "vida-diaria",
    basuras: "vida-diaria",
    basura: "vida-diaria",

    // Trámites
    tramite: "tramites",
    tramites: "tramites",
    documento: "tramites",
    documentos: "tramites",

    // Servicios
    servicio: "servicios",
    servicios: "servicios",
    interpretacion: "servicios",
    traduccion: "servicios",
    acompanamiento: "servicios",
    planificacion: "servicios"
  };

  // ====== WhatsApp (2 tipos) ======
const WHATS_GENERAL_URL =
  "https://wa.me/819084462319?text=" +
  encodeURIComponent("Hola, necesito orientación general sobre: ");

const WHATS_PERSONAL_URL =
  "https://wa.me/819084462319?text=" +
  encodeURIComponent("Hola, necesito orientación personalizada (servicio específico) sobre: ");

// ====== Mensaje cuando NO encuentra ======
const htmlNoEncontrado = () => `
  <div class="resultado-content">
    <h2>🤔 No encontré resultados con esa búsqueda.</h2>

    <p>
      Puedes intentar con otras palabras como:
      <strong>taxi</strong>, <strong>hospital</strong>, <strong>hotel</strong>,
      <strong>policía</strong> o <strong>emergencia</strong>.
    </p>

    <p>Si aun así no encuentras lo que necesitas,
puedes contactarnos.
Estamos aquí para ayudarte.
</p>
    <a href="${WHATS_GENERAL_URL}" class="cta-whatsapp">💬 Orientación general por WhatsApp</a>

    <hr style="margin:18px 0; opacity:0.25;">

    <p style="font-size:14px; opacity:0.85; line-height:1.5;">
      La guía es gratis.<br>
      Si te resultó útil, puedes apoyar el proyecto de forma voluntaria.
    </p>
  </div>
`;

  // ====== Buscar ======
  const buscar = () => {
    const valor = normalizar(searchInput ? searchInput.value : "");
    if (!valor) return;

    // 1) Exacto por alias
    const clave = alias[valor] || valor;

    // 2) Si existe respuesta exacta
    if (respuestas[clave]) {
      abrirResultado(respuestas[clave]);
      return;
    }

    // 3) Intento: si el usuario escribió una frase y contiene una palabra clave
    // (ej: "necesito taxi" -> taxi)
    const palabras = valor.split(/\s+/).filter(Boolean);
    for (const p of palabras) {
      const c = alias[p] || p;
      if (respuestas[c]) {
        abrirResultado(respuestas[c]);
        return;
      }
    }

    // 4) No encontró
    abrirResultado(htmlNoEncontrado());
  };

  // ====== Volver ======
  if (volverBtn) volverBtn.addEventListener("click", cerrarResultado);

  // ====== Botón Buscar ======
  if (searchBtn) searchBtn.addEventListener("click", buscar);

  // ====== Enter ======
  if (searchInput) {
    searchInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") buscar();
    });
  }

  // ====== Auto-buscar SOLO si hay coincidencia exacta ======
  let tAuto = null;
  if (searchInput) {
    searchInput.addEventListener("input", () => {
      clearTimeout(tAuto);
      tAuto = setTimeout(() => {
        const valor = normalizar(searchInput.value);
        if (!valor) return;
        const clave = alias[valor] || valor;
        if (respuestas[clave]) {
          abrirResultado(respuestas[clave]);
        }
      }, 120); // velocidad (50 rápido, 200 normal)
    });
  }

  // ====== Chips ======
  const chips = document.querySelectorAll(".chip");
  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      const raw = normalizar(chip.getAttribute("data-key"));
      const clave = alias[raw] || raw;
      if (searchInput) searchInput.value = raw;

      if (respuestas[clave]) abrirResultado(respuestas[clave]);
      else abrirResultado(htmlNoEncontrado());
    });
  });
});