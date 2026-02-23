document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("searchInput");
  const searchBtn = document.getElementById("searchBtn");
  const resultado = document.getElementById("resultado");
  const resultadoContent = document.getElementById("resultadoContent");
  const volverBtn = document.getElementById("volverBtn");
  const arrowDown = document.getElementById("arrowDown");

  // Flecha baja al buscador
  const bajar = () => {
    const buscador = document.getElementById("buscador");
    if (buscador) buscador.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  if (arrowDown) {
    arrowDown.addEventListener("click", bajar);
    arrowDown.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") bajar();
    });
  }

  // Normaliza: minusculas + sin acentos
  const normalizar = (txt) => {
    return (txt || "")
      .toLowerCase()
      .trim()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  };

  // RESPUESTAS (clave -> HTML)
  const respuestas = {
    taxi: `
      <h2>🚕 Taxi en Japón</h2>
      <p><strong>Cómo pedirlo:</strong> en la calle (si está libre), en paradas oficiales o pidiendo en recepción.</p>
      <p><strong>En estaciones/hoteles:</strong> pide en recepción o busca el “Taxi Stand”.</p>
      <p><strong>Frase útil:</strong></p>
      <div class="jap-box">ここまでお願いします。<br><small>(Koko made onegaishimasu) = “Hasta aquí, por favor.”</small></div>
      <p><strong>Si no te entienden:</strong> muestra el mapa/dirección en el teléfono.</p>
    `,

    hospital: `
      <h2>🏥 Hospital / Emergencia médica</h2>
      <p><strong>Urgencia grave:</strong> llama <strong>119</strong> (ambulancia).</p>
      <p><strong>No urgente:</strong> busca clínica/hospital cercano en Google Maps.</p>
      <p><strong>Frase útil:</strong></p>
      <div class="jap-box">病院に行きたいです。<br><small>(Byouin ni ikitai desu) = “Quiero ir al hospital.”</small></div>
      <p>Si puedes, lleva: pasaporte, tarjeta de seguro (si tienes) y dirección del lugar donde te alojas.</p>
    `,

    hotel: `
      <h2>🏨 Hotel (check-in / problemas)</h2>
      <p><strong>Check-in:</strong> normalmente te piden pasaporte y confirmación de reserva.</p>
      <p><strong>Si no aparece tu reserva:</strong> muestra el correo de confirmación y pide que revisen el nombre/fecha.</p>
      <p><strong>Frase útil:</strong></p>
      <div class="jap-box">予約があります。確認できますか？<br><small>(Yoyaku ga arimasu. Kakunin dekimasu ka?) = “Tengo una reserva. ¿Puede confirmar?”</small></div>
      <p><strong>Llave perdida:</strong> ve a recepción inmediatamente (puede haber penalidad).</p>
    `,

    emergencia: `
      <h2>🚨 Emergencia</h2>
      <p><strong>Policía:</strong> 110</p>
      <p><strong>Ambulancia / Bomberos:</strong> 119</p>
    `,

    transporte: `
      <h2>🚆 Transporte</h2>
      <p>Trenes, metro, buses, Suica/Pasmo, y qué hacer si te pierdes.</p>
    `,

    policia: `
      <h2>👮 Policía</h2>
      <p><strong>Emergencia:</strong> 110</p>
      <p>Si necesitas ayuda no urgente, busca un <strong>Koban</strong> (caseta policial) cercano.</p>
      <p><strong>Frase útil:</strong></p>
      <div class="jap-box">助けてください。<br><small>(Tasukete kudasai) = “Ayúdeme, por favor.”</small></div>
    `
  };

  // SINÓNIMOS / ALIAS
  const alias = {
    // taxi
    taxi: "taxi",
    taksi: "taxi",
    cab: "taxi",

    // hospital
    hospital: "hospital",
    clinica: "hospital",
    medico: "hospital",
    ambulancia: "hospital",
    emergencia: "emergencia",

    // hotel
    hotel: "hotel",
    hostel: "hotel",
    checkin: "hotel",
    "check-in": "hotel",
    reserva: "hotel",

    // transporte
    tren: "transporte",
    metro: "transporte",
    bus: "transporte",
    suica: "transporte",

    // policia
    policia: "policia",
    koban: "policia"
  };

  function mostrar(html) {
    document.body.classList.add("modo-resultado");
    if (resultado) resultado.classList.remove("oculto");
    if (resultadoContent) {
      resultadoContent.innerHTML =
        html +
        `
        <br>
        <button class="search-btn" style="padding:14px 16px;border-radius:12px;font-weight:700"
          onclick="window.location.href='https://wa.me/819084462319'">
          🟢💬 Necesito ayuda por WhatsApp
        </button>
      `;
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function mostrarNoEncontrado() {
    mostrar(`
      <h2>🔎 No encontramos esa información todavía</h2>
      <p>Estamos ampliando constantemente esta guía.</p>
      <p>🟢 Puedes escribirnos por WhatsApp y contarnos tu situación. Te orientaremos con gusto.</p>
    `);
  }

  function buscar() {
    const valor = normalizar(searchInput ? searchInput.value : "");
    if (!valor) return;

    const clave = alias[valor] || valor;

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

  // Volver
  if (volverBtn) {
    volverBtn.addEventListener("click", () => {
      document.body.classList.remove("modo-resultado");
      if (resultado) resultado.classList.add("oculto");
      if (resultadoContent) resultadoContent.innerHTML = "";
      if (searchInput) searchInput.value = "";
      const buscador = document.getElementById("buscador");
      if (buscador) buscador.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  // Chips
  const chips = document.querySelectorAll(".chip");
  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      const key = chip.getAttribute("data-key");
      if (key && respuestas[key]) mostrar(respuestas[key]);
    });
  });
});