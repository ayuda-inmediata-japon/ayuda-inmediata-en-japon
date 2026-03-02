document.addEventListener("DOMContentLoaded", () => {

  // ===== WhatsApp (GENERAL vs PERSONAL) =====
  const WHATS_GENERAL_URL =
    "https://wa.me/819084462319?text=Hola,%20necesito%20orientaci%C3%B3n%20general.%20(No%20encontr%C3%A9%20la%20informaci%C3%B3n%20en%20la%20gu%C3%ADa).";

  const WHATS_PERSONAL_URL =
    "https://wa.me/819084462319?text=Hola,%20necesito%20orientaci%C3%B3n%20personalizada%20sobre:%20";

  // ===== Elementos =====
  const searchInput = document.getElementById("searchInput");
  const searchBtn = document.getElementById("searchBtn");
  const resultado = document.getElementById("resultado");
  const resultadoContent = document.getElementById("resultadoContent");
  const volverBtn = document.getElementById("volverBtn");
  const arrowDown = document.getElementById("arrowDown");
  const whatsPersonalBtn = document.getElementById("whatsPersonalBtn");

  if (whatsPersonalBtn) whatsPersonalBtn.href = WHATS_PERSONAL_URL;

  // ===== Helpers =====
  const normalizar = (t) =>
    (t || "")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .trim();

  const abrirResultado = (html) => {
    if (!resultado || !resultadoContent) return;
    resultadoContent.innerHTML = html;
    resultado.style.display = "block";
    resultado.setAttribute("aria-hidden", "false");
    resultado.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const cerrarResultado = () => {
    if (!resultado) return;
    resultado.style.display = "none";
    resultado.setAttribute("aria-hidden", "true");
  };

  // ===== No encontrado (Orientación general) =====
  const htmlNoEncontrado = () => `
    <h2>🤔 No encontré resultados con esa búsqueda.</h2>

    <p>Puedes intentar con otras palabras como:</p>
    <p><strong>taxi, hospital, hotel, policía o emergencia.</strong></p>

    <p>Si aun así no encuentras lo que necesitas, <strong>contáctanos</strong>.</p>
    <p class="muted">Puedes escribirnos por WhatsApp y te orientamos.</p>

    <div class="cta-row">
      <a class="cta-whatsapp" href="${WHATS_GENERAL_URL}" target="_blank" rel="noopener">
        💬 Orientación general por WhatsApp
      </a>
      <a class="cta-soft" href="#searchSection" onclick="document.getElementById('volverBtn').click(); return false;">
        Volver al buscador
      </a>
    </div>
  `;

  // ===== Alias (para que encuentre aunque escriban diferente) =====
  const alias = {
    // principales
    "emergencia": "emergencia",
    "transporte": "transporte",
    "salud": "salud",
    "alojamiento": "alojamiento",
    "dinero": "dinero",
    "vida": "vida",
    "vida diaria": "vida",
    "tramites": "tramites",
    "trámites": "tramites",
    "servicios": "servicios",

    // subtemas directos
    "policia": "policia",
    "policía": "policia",
    "ambulancia": "ambulancia",
    "bomberos": "bomberos",

    "taxi": "taxi",
    "shinkansen": "shinkansen",
    "tren": "tren",
    "tren local": "tren",
    "bicicleta": "bicicleta",
    "monopatin": "monopatin",
    "monopatín": "monopatin",

    "hospital": "hospital",
    "hotel": "hotel"
  };

  // ===== Respuestas (estructura categoría → subcategoría) =====
  const respuestas = {

    emergencia: `
      <h2>🚨 Emergencias en Japón</h2>
      <p>
        Una emergencia es una situación con peligro inmediato para tu vida, salud o seguridad.
        Mantén la calma y busca ayuda.
      </p>

      <h3>📞 Números importantes</h3>
      <ul>
        <li><strong>110</strong> — Policía</li>
        <li><strong>119</strong> — Ambulancia / Bomberos</li>
      </ul>

      <h3>Selecciona el tipo de emergencia:</h3>
      <div class="subchips">
        <button onclick="window.buscarDirecto('policia')" class="chip-sub">👮 Policía</button>
        <button onclick="window.buscarDirecto('ambulancia')" class="chip-sub">🚑 Ambulancia</button>
        <button onclick="window.buscarDirecto('bomberos')" class="chip-sub">🚒 Bomberos</button>
      </div>
    `,

    policia: `
      <h2>👮 Policía (110)</h2>
      <p>Usa el <strong>110</strong> para robo, violencia, accidentes, pérdida de pasaporte o situaciones de riesgo.</p>

      <h3>Qué decir (simple)</h3>
      <ul>
        <li><strong>場所はここです。</strong> (Basho wa koko desu) — Estoy en este lugar.</li>
        <li><strong>助けてください。</strong> (Tasukete kudasai) — Ayúdeme, por favor.</li>
        <li><strong>パスポートをなくしました。</strong> (Pasupōto o nakushimashita) — Perdí mi pasaporte.</li>
      </ul>

      <div class="cta-row">
        <a class="cta-whatsapp" href="${WHATS_PERSONAL_URL}polic%C3%ADa" target="_blank" rel="noopener">
          🟢 Orientación personalizada por WhatsApp
        </a>
      </div>
    `,

    ambulancia: `
      <h2>🚑 Ambulancia (119)</h2>
      <p>Llama al <strong>119</strong> si hay emergencia médica grave.</p>
      <h3>Frases útiles</h3>
      <ul>
        <li><strong>救急車をお願いします。</strong> (Kyūkyūsha o onegaishimasu) — Necesito una ambulancia.</li>
        <li><strong>意識がありません。</strong> (Ishiki ga arimasen) — Está inconsciente.</li>
      </ul>
      <div class="cta-row">
        <a class="cta-whatsapp" href="${WHATS_PERSONAL_URL}ambulancia" target="_blank" rel="noopener">
          🟢 Orientación personalizada por WhatsApp
        </a>
      </div>
    `,

    bomberos: `
      <h2>🚒 Bomberos (119)</h2>
      <p>Llama al <strong>119</strong> si hay incendio o rescate urgente.</p>
      <h3>Frases útiles</h3>
      <ul>
        <li><strong>火事です！</strong> (Kaji desu!) — ¡Hay un incendio!</li>
        <li><strong>助けてください。</strong> (Tasukete kudasai) — Ayúdeme, por favor.</li>
      </ul>
      <div class="cta-row">
        <a class="cta-whatsapp" href="${WHATS_PERSONAL_URL}bomberos" target="_blank" rel="noopener">
          🟢 Orientación personalizada por WhatsApp
        </a>
      </div>
    `,

    transporte: `
      <h2>🚆 Transporte</h2>
      <p>Elige el medio de transporte para ver la guía.</p>

      <div class="subchips">
        <button onclick="window.buscarDirecto('taxi')" class="chip-sub">🚕 Taxi</button>
        <button onclick="window.buscarDirecto('shinkansen')" class="chip-sub">🚄 Shinkansen</button>
        <button onclick="window.buscarDirecto('tren')" class="chip-sub">🚆 Tren local</button>
        <button onclick="window.buscarDirecto('bicicleta')" class="chip-sub">🚲 Bicicleta</button>
        <button onclick="window.buscarDirecto('monopatin')" class="chip-sub">🛴 Monopatín</button>
      </div>
    `,

    taxi: `
      <h2>🚕 Taxi</h2>
      <p>En Japón el taxi es seguro. La puerta trasera suele abrirse automáticamente.</p>
      <ul>
        <li>Pago: efectivo, tarjeta o app (depende del taxi)</li>
        <li>Evita discutir: muestra el mapa/dirección</li>
      </ul>
      <div class="cta-row">
        <a class="cta-whatsapp" href="${WHATS_GENERAL_URL}" target="_blank" rel="noopener">
          💬 Orientación general por WhatsApp
        </a>
      </div>
    `,

    shinkansen: `
      <h2>🚄 Shinkansen</h2>
      <p>Compra en ventanilla (Midori no Madoguchi), máquinas o apps.</p>
      <p class="muted">Aquí luego agregamos: reservas, asientos, maletas, precios, etc.</p>
    `,

    tren: `
      <h2>🚆 Tren local</h2>
      <p>Usa IC card (ICOCA/Suica) o boletos. Respeta filas y horarios.</p>
      <p class="muted">Aquí luego agregamos: transbordos, estaciones, últimos trenes, etc.</p>
    `,

    bicicleta: `
      <h2>🚲 Bicicleta</h2>
      <p>En muchas ciudades es obligatorio registrar la bicicleta.</p>
      <p class="muted">Aquí luego ponemos: estacionamiento, normas, multas, candado, etc.</p>
    `,

    monopatin: `
      <h2>🛴 Monopatín</h2>
      <p>Normas varían según ciudad/modelo. Prioriza seguridad.</p>
      <p class="muted">Luego ponemos: reglas, zonas, apps, costos.</p>
    `,

    salud: `
      <h2>🏥 Salud</h2>
      <p>Si es urgente llama al 119. Para consultas, busca clínica/hospital cercano.</p>
      <div class="subchips">
        <button onclick="window.buscarDirecto('hospital')" class="chip-sub">🏥 Hospital</button>
      </div>
    `,

    hospital: `
      <h2>🏥 Hospital</h2>
      <p>Ten tu seguro (si aplica) y explica síntomas con calma.</p>
      <p class="muted">Luego agregamos: qué llevar, costos aproximados, frases útiles, etc.</p>
    `,

    alojamiento: `
      <h2>🏨 Alojamiento</h2>
      <div class="subchips">
        <button onclick="window.buscarDirecto('hotel')" class="chip-sub">🏨 Hotel</button>
      </div>
    `,

    hotel: `
      <h2>🏨 Hotel</h2>
      <p>Check-in suele ser desde la tarde. Ten pasaporte listo.</p>
      <p class="muted">Luego agregamos: reservas, cancelaciones, reglas, etc.</p>
    `,

    dinero: `
      <h2>💴 Dinero</h2>
      <p class="muted">Luego: cajeros, cambio, tarjetas, PayPay, emergencias de dinero.</p>
    `,

    vida: `
      <h2>🧩 Vida diaria</h2>
      <p class="muted">Luego: baños públicos, basura, reglas, comida, etc.</p>
    `,

    tramites: `
      <h2>📄 Trámites</h2>
      <p class="muted">Luego: visa, ward office, residencia, documentos, etc.</p>
    `,

    servicios: `
      <h2>🟢 Servicios</h2>
      <p>
        Si requieres apoyo más específico —como traducción de documentos, interpretación telefónica o presencial,
        planificación de gastos, paseos, estadía o acompañamiento— puedes contactarnos con confianza.
      </p>
      <div class="cta-row">
        <a class="cta-whatsapp" href="${WHATS_PERSONAL_URL}" target="_blank" rel="noopener">
          🟢 Orientación personalizada por WhatsApp
        </a>
      </div>
    `
  };

  // ===== Buscar =====
  const buscar = () => {
    const q = normalizar(searchInput ? searchInput.value : "");
    if (!q) return;

    const key = alias[q] || q;

    if (respuestas[key]) {
      abrirResultado(respuestas[key]);
      return;
    }

    abrirResultado(htmlNoEncontrado());
  };

  // ===== Buscar directo (para subchips onclick) =====
  window.buscarDirecto = (clave) => {
    const k = normalizar(clave || "");
    const key = alias[k] || k;

    if (respuestas[key]) {
      abrirResultado(respuestas[key]);
      return;
    }

    abrirResultado(htmlNoEncontrado());
  };

  // ===== Chips (principales) =====
  const chips = document.querySelectorAll(".chip");
  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      const raw = chip.getAttribute("data-key") || "";
      const key = alias[normalizar(raw)] || normalizar(raw);
      if (searchInput) searchInput.value = raw;
      if (respuestas[key]) abrirResultado(respuestas[key]);
      else abrirResultado(htmlNoEncontrado());
    });
  });

  // ===== Flecha bajar =====
  if (arrowDown) {
    arrowDown.addEventListener("click", () => {
      if (searchInput) searchInput.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  // ===== Volver =====
  if (volverBtn) volverBtn.addEventListener("click", cerrarResultado);

  // ===== Buscar (botón + Enter) =====
  if (searchBtn) searchBtn.addEventListener("click", buscar);

  if (searchInput) {
    searchInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") buscar();
    });
  }

});