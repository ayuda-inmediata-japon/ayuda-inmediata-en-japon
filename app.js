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

  const btnGeneral = document.getElementById("btnGeneral");
  const btnPersonalizada = document.getElementById("btnPersonalizada");
  const servicioModal = document.getElementById("servicioModal");
  const cancelarServicioModal = document.getElementById("cancelarServicioModal");
  const cerrarServicioModal = document.getElementById("cerrarServicioModal");
  const servicioModalTitulo = document.getElementById("servicioModalTitulo");
  const servicioModalTexto = document.getElementById("servicioModalTexto");
  const servicioModalWhatsapp = document.getElementById("servicioModalWhatsapp");

  const WHATS_NUMBER = "819084462319";

  if (paypalLink) paypalLink.href = "https://paypal.me/JGarciaUmey";
  if (kofiLink) kofiLink.href = "https://ko-fi.com/ayudainmediatajapon";
  if (paypayLink) paypayLink.href = "https://qr.paypay.ne.jp/p2p01_uhtObkY1IUOc9WQ6";

  const normalizar = (txt) =>
    (txt || "")
      .toLowerCase()
      .trim()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

  const makeWhatsAppUrl = (msg) =>
    `https://wa.me/${WHATS_NUMBER}?text=${encodeURIComponent(msg)}`;

  const accionesResultado = `
    <div class="resultado-acciones" style="display:flex; gap:10px; flex-wrap:wrap; margin-top:24px;">
      <button type="button" class="accion-resultado" data-action="compartir">↗ Compartir</button>
      <button type="button" class="accion-resultado" data-action="guardar">🔖 Guardar</button>
      <button type="button" class="accion-resultado" data-action="apoyar">❤️ Apoyar</button>
    </div>
    <div id="guardar-pagina" style="display:none; margin-top:16px;">
      <strong>Cómo guardar esta página</strong><br><br>
      En iPhone / iPad:<br>
      Pulsa el botón compartir del navegador y elige “Añadir a favoritos” o “Añadir a pantalla de inicio”.<br><br>
      En Android:<br>
      Pulsa el menú del navegador (⋮) y selecciona “Añadir a favoritos” o “Añadir a pantalla de inicio”.<br><br>
      En computadora:<br>
      Pulsa la estrella ⭐ del navegador o presiona Ctrl + D.
    </div>
  `;

  const respuestas = {
    emergencia: `
      <h2>🆘 Emergencia en Japón</h2>
      <p><strong>Ambulancia / Bomberos:</strong> 119</p>
      <p><strong>Policía:</strong> 110</p>
      <p>Si hay peligro inmediato, llama de una vez. Si no hablas japonés, di despacio tu ubicación y muestra el teléfono a alguien cercano si puedes.</p>
      <p><strong>Frases útiles:</strong></p>
      <p>救急車をお願いします<br>Kyuukyuusha o onegaishimasu<br>Por favor, una ambulancia</p>
      <p>助けてください<br>Tasukete kudasai<br>Ayuda por favor</p>
      ${accionesResultado}
    `,

    taxi: `
      <h2>🚕 Taxi en Japón</h2>
      <p>Busca una parada de taxi (タクシー乗り場) o usa apps como GO o DiDi, según la zona.</p>
      <p><strong>Frase útil:</strong><br>
      ここまでお願いします<br>
      Koko made onegaishimasu<br>
      Hasta aquí por favor</p>
      ${accionesResultado}
    `,

    transporte: `
      <h2>🚆 Transporte en Japón</h2>
      <p>Para moverte, normalmente lo más fácil es usar Google Maps y seguir la línea, andén y horario.</p>
      <p>Si usas tren, revisa bien:</p>
      <ul>
        <li>nombre de la estación</li>
        <li>número de andén</li>
        <li>último tren</li>
        <li>si necesitas IC card o boleto</li>
      </ul>
      <p>Si estás perdido en una estación, muestra tu destino al personal.</p>
      ${accionesResultado}
    `,

    hospital: `
      <h2>🏥 Salud / Hospital</h2>
      <p>Si es una emergencia grave, llama al <strong>119</strong>.</p>
      <p>Si no es emergencia, busca una clínica cercana o “内科” (medicina interna).</p>
      <p>Si tienes seguro o tarjeta de residencia, llévalos contigo.</p>
      ${accionesResultado}
    `,

    hotel: `
      <h2>🏨 Alojamiento / Hotel</h2>
      <p>En el check-in normalmente debes mostrar pasaporte y reserva.</p>
      <p>Si llegas tarde, avisa al hotel con anticipación.</p>
      <p>Si hay un problema de ruido, limpieza o cobro, pide hablar con recepción: フロント.</p>
      ${accionesResultado}
    `,

    policia: `
      <h2>👮 Policía en Japón</h2>
      <p>En Japón la policía puede orientarte y ayudarte. Si necesitas ayuda, busca un <strong>Koban (交番)</strong>.</p>
      <p><strong>Policía:</strong> 110</p>

      <h3>Si te robaron algo o sufriste una estafa</h3>
      <ol>
        <li>Mantén la calma.</li>
        <li>Busca un Koban cercano o llama al 110.</li>
        <li>Explica lo ocurrido con claridad.</li>
        <li>Guarda capturas, mensajes o pruebas.</li>
      </ol>

      <h3>Si perdiste billetera o documentos</h3>
      <ol>
        <li>Busca un Koban.</li>
        <li>Explica qué perdiste y dónde crees que ocurrió.</li>
        <li>Da detalles: color, contenido, lugar y hora aproximada.</li>
      </ol>

      <p><strong>Frases útiles:</strong></p>
      <p>財布を落としました<br>Saifu o otoshimashita<br>Perdí mi billetera</p>
      <p>パスポートをなくしました<br>Pasupooto o nakushimashita<br>Perdí mi pasaporte</p>
      <p>交番はどこですか？<br>Koban wa doko desu ka?<br>¿Dónde está el Koban?</p>

      <p><strong>Si no hablas japonés:</strong></p>
      <p>すみません、日本語があまり話せません。<br>Sumimasen, nihongo ga amari hanasemasen.<br>No hablo mucho japonés.</p>

      ${accionesResultado}
    `,

    dinero: `
      <h2>💴 Dinero y pagos</h2>
      <p>En Japón todavía conviene llevar algo de efectivo.</p>
      <p>Para sacar dinero, muchas veces funcionan bien cajeros de 7-Eleven y JP Bank, aunque puede variar según la tarjeta.</p>
      <p>Si tu tarjeta no pasa, intenta en otro cajero o paga en efectivo.</p>
      ${accionesResultado}
    `,

    vida: `
      <h2>🏪 Vida diaria</h2>
      <p>Basura: cada ciudad tiene reglas diferentes.</p>
      <p>Conviene revisar el calendario de tu municipio.</p>
      <p>En conbini puedes resolver muchas cosas: comida, pagos, cajero, impresiones y envíos.</p>
      ${accionesResultado}
    `,

    tramites: `
      <h2>🏛️ Trámites</h2>
      <p>Ayuntamiento / City Office: 市役所 / 区役所</p>
      <p>Ahí puedes ver temas como registro, dirección, seguro, residencia y algunos documentos.</p>
      <p>Si necesitas ayuda con traducción de documentos, puedes escribirnos.</p>
      ${accionesResultado}
    `,

    servicios: `
      <h2>🗣️ Servicios personalizados</h2>
      <ul>
        <li>Interpretación por teléfono o presencial</li>
        <li>Traducción de documentos</li>
        <li>Acompañamiento a hospital, trámites u hotel</li>
        <li>Planificación y presupuesto</li>
        <li>Soporte para organizar tu experiencia en Japón</li>
      </ul>
      ${accionesResultado}
    `,
  };

  const alias = {
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
    pasaporte: "policia",
    billetera: "policia",
    cartera: "policia",
    pelea: "policia",

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

    hospital: "hospital",
    hos: "hospital",
    doctor: "hospital",
    medico: "hospital",
    farmacia: "hospital",
    enfermo: "hospital",
    fiebre: "hospital",
    dolor: "hospital",

    tax: "taxi",
    taxi: "taxi",

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
    seguro: "tramites",
    nenkin: "tramites",
    hoken: "tramites",
    impuestos: "tramites",
  };

  const chipMap = {
    emergencia: "emergencia",
    policia: "policia",
    transporte: "transporte",
    salud: "hospital",
    alojamiento: "hotel",
    dinero: "dinero",
    "vida-diaria": "vida",
    vida: "vida",
    tramites: "tramites",
    servicios: "servicios",
  };

  function activarModoResultado() {
    if (arrowDown) arrowDown.style.display = "none";
    if (btnGeneral) btnGeneral.style.display = "none";
    if (btnPersonalizada) btnPersonalizada.style.display = "none";
  }

  function restaurarModoNormal() {
    if (arrowDown) arrowDown.style.display = "";
    if (btnGeneral) btnGeneral.style.display = "";
    if (btnPersonalizada) btnPersonalizada.style.display = "";
  }

  const mostrar = (html) => {
    if (!resultado || !resultadoContent) return;

    resultadoContent.innerHTML = html;
    resultado.classList.remove("oculto");
    activarModoResultado();

    resultado.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const mostrarNoEncontrado = () => {
    mostrar(`
      <h2>🤔 No encontré información exacta</h2>
      <p>Intenta buscar con otras palabras como: taxi, hospital, hotel, policía, emergencia, tren, dinero, trámites.</p>
      <p>Si aún no encuentras lo que buscas, puedes escribirnos con confianza.</p>
      <div style="display:flex; gap:10px; flex-wrap:wrap; margin-top:18px;">
        <a href="${makeWhatsAppUrl("Hola, requiero orientación general.")}" target="_blank" rel="noopener noreferrer">🟢 Orientación general</a>
        <a href="${makeWhatsAppUrl("Hola, requiero orientación personalizada.")}" target="_blank" rel="noopener noreferrer">🟢 Orientación personalizada</a>
      </div>
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

  function volverAlBuscador() {
    if (resultado) resultado.classList.add("oculto");
    if (resultadoContent) resultadoContent.innerHTML = "";
    if (searchInput) searchInput.value = "";

    restaurarModoNormal();

    const buscador = document.getElementById("buscador");
    if (buscador) {
      buscador.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  function mostrarGuardar() {
    const guardar = document.getElementById("guardar-pagina");
    if (guardar) {
      guardar.style.display =
        guardar.style.display === "block" ? "none" : "block";
    }
  }

  function irAApoyo() {
    const apoyo = document.getElementById("apoyo");
    if (apoyo) {
      apoyo.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  async function compartirPagina() {
    const url = window.location.href;
    const title = document.title || "Ayuda Inmediata en Japón";

    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text: "Mira esta guía:",
          url,
        });
      } catch (_) {}
    } else if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(url);
        alert("Enlace copiado.");
      } catch (_) {
        alert("No se pudo copiar el enlace.");
      }
    } else {
      alert("Tu navegador no permite compartir automáticamente.");
    }
  }

  const bajar = () => {
    const buscador = document.getElementById("buscador");
    if (buscador) {
      buscador.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  if (arrowDown) {
    arrowDown.addEventListener("click", bajar);
  }

  if (searchBtn) {
    searchBtn.addEventListener("click", buscar);
  }

  if (searchInput) {
    searchInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") buscar();
    });

    let tAuto = null;
    searchInput.addEventListener("input", () => {
      clearTimeout(tAuto);
      tAuto = setTimeout(() => {
        const valor = normalizar(searchInput.value);
        if (!valor) return;
        const clave = alias[valor] || valor;
        if (respuestas[clave]) buscar();
      }, 50);
    });
  }

  if (volverBtn) {
    volverBtn.addEventListener("click", volverAlBuscador);
  }

  const chips = document.querySelectorAll(".chip");
  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      const raw = (chip.getAttribute("data-key") || "").trim().toLowerCase();
      const key = chipMap[raw] || raw;
      if (respuestas[key]) {
        if (searchInput) searchInput.value = key;
        mostrar(respuestas[key]);
      }
    });
  });

  if (resultadoContent) {
    resultadoContent.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-action]");
      if (!btn) return;

      const action = btn.getAttribute("data-action");

      if (action === "compartir") compartirPagina();
      if (action === "guardar") mostrarGuardar();
      if (action === "apoyar") irAApoyo();
    });
  }

  function abrirServicioModal(titulo, html, whatsappUrl, btnClass = "general") {
    if (!servicioModal) return;

    if (servicioModalTitulo) servicioModalTitulo.textContent = titulo;
    if (servicioModalTexto) servicioModalTexto.innerHTML = html;

    if (servicioModalWhatsapp) {
      servicioModalWhatsapp.href = whatsappUrl;
      servicioModalWhatsapp.classList.remove("general", "personalizada");
      servicioModalWhatsapp.classList.add(btnClass);
    }

    servicioModal.classList.remove("oculto");
    document.body.classList.add("modal-abierto");
  }

  function cerrarModalServicio() {
    if (!servicioModal) return;
    servicioModal.classList.add("oculto");
    document.body.classList.remove("modal-abierto");
  }

  if (btnGeneral) {
    btnGeneral.addEventListener("click", () => {
      abrirServicioModal(
        "ORIENTACIÓN GENERAL",
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
          <p>Si estás de acuerdo, presiona el botón para contactarnos por WhatsApp.</p>
        `,
        makeWhatsAppUrl("Hola, requiero orientación general."),
        "general"
      );
    });
  }

  if (btnPersonalizada) {
    btnPersonalizada.addEventListener("click", () => {
      abrirServicioModal(
        "AYUDA PERSONALIZADA",
        `
          <p>La ayuda personalizada es cuando tu situación requiere intervención directa, coordinación o acompañamiento.</p>
          <p>Puede incluir por ejemplo:</p>
          <ul>
            <li>llamadas en japonés</li>
            <li>comunicación con hoteles, hospitales o instituciones</li>
            <li>traducción de documentos sencillos</li>
            <li>acompañamiento como intérprete</li>
            <li>orientación directa según tu caso</li>
            <li>planificación de estadía, viajes o turismo</li>
          </ul>
          <p>Este tipo de asistencia es un servicio profesional con costo.</p>
          <p>Si estás de acuerdo, presiona el botón para contactarnos por WhatsApp.</p>
        `,
        makeWhatsAppUrl("Hola, requiero orientación personalizada."),
        "personalizada"
      );
    });
  }

  if (cancelarServicioModal) {
    cancelarServicioModal.addEventListener("click", cerrarModalServicio);
  }

  if (cerrarServicioModal) {
    cerrarServicioModal.addEventListener("click", cerrarModalServicio);
  }

  if (servicioModal) {
    servicioModal.addEventListener("click", (e) => {
      if (e.target === servicioModal) {
        cerrarModalServicio();
      }
    });
  }
});