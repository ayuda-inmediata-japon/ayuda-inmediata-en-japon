document.addEventListener("DOMContentLoaded", () => {
  // Elementos
  const searchInput = document.getElementById("searchInput");
  const searchBtn = document.getElementById("searchBtn");
  const resultado = document.getElementById("resultado");
  const resultadoContent = document.getElementById("resultadoContent");
  const volverBtn = document.getElementById("volverBtn");
  const arrowDown = document.getElementById("arrowDown");

  // Asegurar estado inicial correcto
  document.body.classList.remove("modo-resultado");
  if (resultado) resultado.classList.add("oculto");
  if (resultadoContent) resultadoContent.innerHTML = "";

  // Flecha baja al buscador
  const bajar = () => {
    const buscador = document.getElementById("buscador");
    if (buscador) buscador.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  if (arrowDown) {
    arrowDown.addEventListener("click", (e) => {
      e.preventDefault();
      bajar();
    });
    arrowDown.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        bajar();
      }
    });
  }

  // Normaliza: minúsculas + sin acentos
  const normalizar = (txt) => {
    return (txt || "")
      .toLowerCase()
      .trim()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  };

  // Respuestas (ejemplo base)
  const respuestas = {
    taxi: `
      <h2>🚕 Taxi en Japón</h2>
      <p><strong>Cómo pedirlo:</strong> en la calle (si está libre) o en paradas oficiales.</p>
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
      <p>Si puedes, lleva: pasaporte, tarjeta de seguro (si tienes) y dirección del lugar.</p>
    `,
    hotel: `
      <h2>🏨 Hotel (check-in / problemas)</h2>
      <p><strong>Check-in:</strong> normalmente te piden pasaporte y confirmación de reserva.</p>
      <p><strong>Si no aparece tu reserva:</strong> muestra el correo de confirmación y pide que revisen el nombre.</p>
      <p><strong>Frase útil:</strong></p>
      <div class="jap-box">予約があります。確認できますか？<br><small>(Yoyaku ga arimasu. Kakunin dekimasu ka?) = “Tengo una reserva. ¿Puede confirmar?”</small></div>
      <p><strong>Llave perdida:</strong> ve a recepción inmediatamente (puede haber penalidad).</p>
    `,
    emergencia: `
      <h2>🚨 Emergencia</h2>
      <p>Llama <strong>110</strong> (policía) o <strong>119</strong> (ambulancia/bomberos).</p>
    `,
    transporte: `
      <h2>🚆 Transporte</h2>
      <p>Trenes, metro, buses y taxi. Si estás perdido, busca “駅 (eki)” o muestra Google Maps.</p>
    `,
  };

  // Alias (sinónimos)
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

    // hotel
    hotel: "hotel",
    hostel: "hotel",
    checkin: "hotel",
    "check-in": "hotel",
    reserva: "hotel",

    // emergencia / transporte
    emergencia: "emergencia",
    urgente: "emergencia",
    policia: "emergencia",
    transporte: "transporte",
    tren: "transporte",
    metro: "transporte",
    bus: "transporte",
  };

  function mostrar(html) {
    document.body.classList.add("modo-resultado");
    if (resultado) resultado.classList.remove("oculto");
    if (resultadoContent) {
      resultadoContent.innerHTML =
        html +
        `
        <br><br>
        <button class="search-btn" style="padding:14px 16px; border-radius:12px; font-weight:700"
          onclick="window.location.href='https://wa.me/819084462319?text=Hola%2C%20estoy%20en%20Jap%C3%B3n%20y%20necesito%20ayuda%20con%3A%20'">
          🟢💬 Necesito ayuda por WhatsApp
        </button>
      `;
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function buscar() {
    const valor = normalizar(searchInput?.value);
    if (!valor) return;

    const clave = alias[valor] || valor;

    if (respuestas[clave]) {
      mostrar(respuestas[clave]);
    } else {
      mostrar(`
        <h2>🔎 No encontramos esa información</h2>
        <p>Estamos ampliando la guía constantemente.</p>
        <p>🟢 Puedes escribirnos por WhatsApp y contarnos tu situación. Te orientamos con gusto.</p>
      `);
    }
  }

  // Botón buscar
  if (searchBtn) searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    buscar();
  });

  // Enter en input
  if (searchInput) {
    searchInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        buscar();
      }
    });
  }

  // Volver atrás
  if (volverBtn) {
    volverBtn.addEventListener("click", (e) => {
      e.preventDefault();
      document.body.classList.remove("modo-resultado");
      if (resultado) resultado.classList.add("oculto");
      if (resultadoContent) resultadoContent.innerHTML = "";
      if (searchInput) searchInput.value = "";
      const buscador = document.getElementById("buscador");
      if (buscador) buscador.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  // Chips (funciona con cualquier elemento que tenga class="chip" y data-key="taxi" etc.)
  const chips = document.querySelectorAll(".chip");
  chips.forEach((chip) => {
    chip.addEventListener("click", (e) => {
      e.preventDefault();
      const key = chip.getAttribute("data-key");
      if (key && respuestas[key]) mostrar(respuestas[key]);
    });
  });
});