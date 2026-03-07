document.addEventListener("DOMContentLoaded", () => {
  // =========================
  // Utilidad para buscar elementos aunque el id cambie un poco
  // =========================
  const getFirstById = (...ids) => {
    for (const id of ids) {
      const el = document.getElementById(id);
      if (el) return el;
    }
    return null;
  };

  const searchInput = getFirstById("search-input", "searchInput", "busqueda", "search");
  const sugerenciasBox = getFirstById("sugerencias", "suggestions", "sugerencias-box");
  const searchBtn = getFirstById("search-btn", "searchBtn", "buscar-btn", "buscar");
  const resultado = getFirstById("resultado", "resultados", "resultado-box");
  const resultadoContent = getFirstById("resultado-content", "resultadoContent", "resultado-texto");
  const volverBtn = getFirstById("volver-btn", "volver", "back-btn");
  const arrowDown = getFirstById("arrow-down", "arrowDown", "flecha-abajo", "scroll-down");

  const whatsLink = getFirstById("whatsapp-btn", "whats-btn", "whatsapp");
  const paypalLink = getFirstById("paypal-btn", "paypal");
  const kofiLink = getFirstById("kofi-btn", "kofi");
  const paypayLink = getFirstById("paypay-btn", "paypay");

  // =========================
  // Links
  // =========================
  const WHATS_NUMBER = "819084462319";
  const MSG_GENERAL = "Hola, necesito orientación general sobre Japón.";
  const MSG_PERSONAL = "Hola, necesito orientación personalizada sobre mi caso en Japón.";

  if (whatsLink) {
    whatsLink.href = `https://wa.me/${WHATS_NUMBER}?text=${encodeURIComponent(MSG_GENERAL)}`;
  }

  if (paypalLink) {
    paypalLink.href = "https://paypal.me/JGarciaUmey";
  }

  if (kofiLink) {
    kofiLink.href = "https://ko-fi.com/ayudainmediatajapon";
  }

  if (paypayLink) {
    paypayLink.href = "#";
  }

  // =========================
  // Flecha baja al buscador
  // =========================
  const bajar = () => {
    const buscador =
      document.getElementById("buscador") ||
      document.querySelector(".search-section") ||
      searchInput;

    if (buscador) {
      buscador.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  if (arrowDown) {
    arrowDown.addEventListener("click", bajar);
  }

  // =========================
  // Normalizar texto
  // =========================
  const normalizar = (txt) => {
    return (txt || "")
      .toLowerCase()
      .trim()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  };

  // =========================
  // Respuestas
  // =========================
  const respuestas = {
    taxi: `
      <h2>🚕 Taxi en Japón</h2>
      <p><strong>Cómo pedirlo:</strong> puedes buscar una parada de taxi, pedirlo por app o solicitarlo desde hotel, estación o comercio.</p>
      <p><strong>Frase útil:</strong> "Taxi onegaishimasu" (タクシーお願いします).</p>
      <p><strong>Consejo:</strong> en Japón la puerta suele abrirse sola. No la abras tú.</p>
    `,

    hospital: `
      <h2>🏥 Salud / Hospital</h2>
      <p><strong>Emergencia grave:</strong> llama al <strong>119</strong> para ambulancia.</p>
      <p><strong>Si no es emergencia:</strong> busca una clínica u hospital cercano según tu zona.</p>
      <p><strong>Frase útil:</strong> "Byoin wa doko desu ka?" (病院はどこですか？).</p>
    `,

    hotel: `
      <h2>🏨 Alojamiento / Hotel</h2>
      <p><strong>Check-in:</strong> muestra tu reserva o pasaporte si te lo solicitan.</p>
      <p><strong>Problemas:</strong> si no encuentras el hotel, revisa el nombre exacto y la dirección en japonés.</p>
      <p><strong>Frase útil:</strong> "Koko ni yoyaku ga arimasu" (ここに予約があります).</p>
    `,

    policia: `
      <h2>🚓 Policía</h2>
      <p><strong>Emergencia:</strong> llama al <strong>110</strong>.</p>
      <p><strong>Koban:</strong> son mini-comisarías muy útiles para pedir ayuda, ubicación o reportar pérdidas.</p>
      <p><strong>Frase útil:</strong> "Keisatsu o onegaishimasu" (警察をお願いします).</p>
      <p><strong>Consejo:</strong> si perdiste algo, intenta ir al koban más cercano.</p>
    `,

    emergencia: `
      <h2>🚨 Emergencia</h2>
      <p><strong>Policía:</strong> 110</p>
      <p><strong>Ambulancia / Bomberos:</strong> 119</p>
      <p><strong>Consejo:</strong> habla con calma, da tu ubicación y usa puntos de referencia visibles.</p>
    `,

    transporte: `
      <h2>🚆 Transporte</h2>
      <p><strong>Tren:</strong> revisa estación, línea y andén antes de subir.</p>
      <p><strong>Bus:</strong> en algunas ciudades se paga al subir y en otras al bajar.</p>
      <p><strong>Consejo:</strong> muestra el nombre del destino escrito si necesitas ayuda.</p>
    `,

    dinero: `
      <h2>💴 Dinero y pagos</h2>
      <p><strong>Efectivo:</strong> todavía se usa mucho en Japón.</p>
      <p><strong>Tarjeta:</strong> no todos los lugares aceptan tarjeta extranjera.</p>
      <p><strong>Consejo:</strong> los combinis suelen servir para retirar dinero de cajeros.</p>
    `,

    vida: `
      <h2>🏠 Vida diaria</h2>
      <p><strong>Basura:</strong> cada ciudad tiene reglas distintas para separar y sacar residuos.</p>
      <p><strong>Consejo:</strong> revisa horarios, bolsas permitidas y calendario local de tu zona.</p>
    `,

    tramites: `
      <h2>📄 Trámites</h2>
      <p><strong>Ward / City Office:</strong> para registro, residencia, seguro, impuestos y otros procedimientos.</p>
      <p>Si necesitas ayuda con traducción o acompañamiento, puedes pedir orientación personalizada.</p>
    `,

    servicios: `
      <h2>🧰 Servicios personalizados</h2>
      <ul>
        <li>Interpretación por teléfono o presencial</li>
        <li>Traducción de documentos</li>
        <li>Acompañamiento a trámites, hospitales o gestiones</li>
        <li>Planificación y orientación personalizada</li>
        <li>Soporte para organizar tu experiencia en Japón</li>
      </ul>
    `
  };

  // =========================
  // Sugerencias visibles
  // =========================
  const listaSugerencias = [
    "policía",
    "hospital",
    "hotel",
    "taxi",
    "emergencia",
    "transporte",
    "dinero",
    "vida diaria",
    "trámites",
    "servicios"
  ];

  // =========================
  // Alias para buscar
  // OJO: los valores apuntan a claves SIN acento
  // =========================
  const aliasBusqueda = {
    pol: "policia",
    poli: "policia",
    police: "policia",
    policia: "policia",
    policias: "policia",
    koban: "policia",

    hos: "hospital",
    hosp: "hospital",
    hospital: "hospital",
    doctor: "hospital",
    doctora: "hospital",
    medico: "hospital",
    salud: "hospital",

    hot: "hotel",
    hotel: "hotel",
    hoteles: "hotel",
    alojamiento: "hotel",

    tax: "taxi",
    taxi: "taxi",

    emer: "emergencia",
    emergencia: "emergencia",
    ambulancia: "emergencia",

    trans: "transporte",
    transporte: "transporte",
    tren: "transporte",
    metro: "transporte",
    bus: "transporte",
    buses: "transporte",

    dinero: "dinero",
    pago: "dinero",
    pagos: "dinero",

    vida: "vida",
    "vida diaria": "vida",
    "vida-diaria": "vida",
    basura: "vida",

    tram: "tramites",
    tramite: "tramites",
    tramites: "tramites",
    documentos: "tramites",

    serv: "servicios",
    servicio: "servicios",
    servicios: "servicios"
  };

  // =========================
  // Mostrar resultado
  // =========================
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
        Intenta buscar nuevamente usando <strong>otra palabra parecida</strong>
        o una forma diferente de escribir tu consulta.
      </p>

      <p>
        Si aún no encuentras lo que buscas, puedes contactarnos con toda confianza.
      </p>

      <p><strong>💬 WhatsApp</strong></p>

      <a class="boton-whatsapp"
         style="background:#25D366;color:white;padding:12px 18px;border-radius:12px;display:inline-block;text-decoration:none;margin:8px 0;"
         href="https://wa.me/${WHATS_NUMBER}?text=${encodeURIComponent(MSG_GENERAL)}"
         target="_blank">
         📲 Orientación general
      </a>

      <br>

      <a class="boton-whatsapp"
         style="background:#25D366;color:white;padding:12px 18px;border-radius:12px;display:inline-block;text-decoration:none;margin:8px 0;"
         href="https://wa.me/${WHATS_NUMBER}?text=${encodeURIComponent(MSG_PERSONAL)}"
         target="_blank">
         📲 Orientación personalizada
      </a>
    `);
  };

  // =========================
  // Buscar
  // =========================
  function buscar() {
    const valorOriginal = normalizar(searchInput ? searchInput.value : "");
    if (!valorOriginal) return;

    if (sugerenciasBox) sugerenciasBox.innerHTML = "";

    const clave = aliasBusqueda[valorOriginal] || valorOriginal;

    if (respuestas[clave]) {
      mostrar(respuestas[clave]);
    } else {
      mostrarNoEncontrado();
    }
  }

  // =========================
  // Buscar con botón
  // =========================
  if (searchBtn) {
    searchBtn.addEventListener("click", buscar);
  }

  // =========================
  // Buscar con Enter
  // =========================
  if (searchInput) {
    searchInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") buscar();
    });
  }

  // =========================
  // Auto-sugerencias
  // =========================
  const renderSugerencias = (texto) => {
    if (!sugerenciasBox) return;

    const q = normalizar(texto);
    sugerenciasBox.innerHTML = "";

    if (!q) return;

    const matches = listaSugerencias.filter((item) =>
      normalizar(item).includes(q)
    );

    matches.slice(0, 6).forEach((item) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.textContent = item;
      btn.style.display = "block";
      btn.style.width = "100%";
      btn.style.textAlign = "left";
      btn.style.padding = "10px 14px";
      btn.style.border = "none";
      btn.style.background = "white";
      btn.style.cursor = "pointer";

      btn.addEventListener("click", () => {
        if (searchInput) searchInput.value = item;
        sugerenciasBox.innerHTML = "";
        buscar();
      });

      sugerenciasBox.appendChild(btn);
    });
  };

  let tAuto = null;

  if (searchInput) {
    searchInput.addEventListener("input", () => {
      clearTimeout(tAuto);

      tAuto = setTimeout(() => {
        const valorOriginal = normalizar(searchInput.value);
        if (!valorOriginal) {
          if (sugerenciasBox) sugerenciasBox.innerHTML = "";
          return;
        }

        renderSugerencias(searchInput.value);

        const clave = aliasBusqueda[valorOriginal] || valorOriginal;
        if (respuestas[clave]) {
          buscar();
        }
      }, 250);
    });
  }

  // =========================
  // Volver
  // =========================
  if (volverBtn) {
    volverBtn.addEventListener("click", () => {
      if (resultado) resultado.classList.add("oculto");
      if (resultadoContent) resultadoContent.innerHTML = "";
      if (searchInput) searchInput.value = "";

      const buscador =
        document.getElementById("buscador") ||
        document.querySelector(".search-section") ||
        searchInput;

      if (buscador) {
        buscador.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    });
  }

  // =========================
  // Chips
  // =========================
  const chips = document.querySelectorAll(".chip, [data-key]");

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
    policia: "policia",
    taxi: "taxi",
    hospital: "hospital",
    hotel: "hotel"
  };

  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      const raw =
        chip.getAttribute("data-key") ||
        normalizar(chip.textContent || "");

      const key = chipMap[normalizar(raw)] || normalizar(raw);

      if (searchInput) {
        const etiquetaVisible = {
          policia: "policía",
          hospital: "hospital",
          hotel: "hotel",
          taxi: "taxi",
          emergencia: "emergencia",
          transporte: "transporte",
          dinero: "dinero",
          vida: "vida diaria",
          tramites: "trámites",
          servicios: "servicios"
        };

        searchInput.value = etiquetaVisible[key] || key;
      }

      if (respuestas[key]) {
        mostrar(respuestas[key]);
      }
    });
  });
});