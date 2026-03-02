/* ============================
   Ayuda Inmediata Japón – app.js
   versión estable limpia
============================ */

document.addEventListener("DOMContentLoaded", () => {

  // ===== WhatsApp URLs =====
  const WHATS_GENERAL_URL =
    "https://wa.me/819084462319?text=Hola,%20necesito%20orientaci%C3%B3n%20general.";
  
  const WHATS_PERSONAL_URL =
    "https://wa.me/819084462319?text=Hola,%20necesito%20orientaci%C3%B3n%20personalizada.";

  // ===== Elementos =====
  const searchInput = document.getElementById("searchInput");
  const searchBtn = document.getElementById("searchBtn");
  const resultado = document.getElementById("resultado");
  const resultadoContent = document.getElementById("resultadoContent");
  const volverBtn = document.getElementById("volverBtn");
  const arrowDown = document.getElementById("arrowDown");

  // ===== Normalizar =====
  const normalizar = (texto) =>
    (texto || "")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .trim();

  // ===== Alias =====
  const alias = {
    policia: "policia",
    ambulancia: "ambulancia",
    bomberos: "bomberos",
    hospital: "hospital",
    taxi: "taxi",
    hotel: "hotel",
    emergencia: "emergencia"
  };

  // ===== Respuestas =====
  const respuestas = {

    taxi: `
      <h2>🚕 Taxi en Japón</h2>
      <p>Puedes detener un taxi en la calle si la luz está encendida.</p>
      <a href="${WHATS_GENERAL_URL}" class="cta-whatsapp">💬 Orientación general</a>
    `,

    hospital: `
      <h2>🏥 Hospital</h2>
      <p>Si es emergencia grave llama al 119.</p>
      <a href="${WHATS_GENERAL_URL}" class="cta-whatsapp">💬 Orientación general</a>
    `,

    hotel: `
      <h2>🏨 Hotel</h2>
      <p>La mayoría de hoteles aceptan tarjeta.</p>
      <a href="${WHATS_GENERAL_URL}" class="cta-whatsapp">💬 Orientación general</a>
    `,

    policia: `
      <h2>🚓 Policía</h2>
      <p>Llama al 110.</p>
      <a href="${WHATS_PERSONAL_URL}" class="cta-whatsapp">🟢 Orientación personalizada</a>
    `,

    ambulancia: `
      <h2>🚑 Ambulancia</h2>
      <p>Llama al 119.</p>
      <a href="${WHATS_PERSONAL_URL}" class="cta-whatsapp">🟢 Orientación personalizada</a>
    `,

    bomberos: `
      <h2>🚒 Bomberos</h2>
      <p>Llama al 119.</p>
      <a href="${WHATS_PERSONAL_URL}" class="cta-whatsapp">🟢 Orientación personalizada</a>
    `

  };

  // ===== No encontrado =====
  const htmlNoEncontrado = () => `
    <h2>No encontramos esa sección</h2>
    <p>Intenta con: taxi, hospital, hotel, policía o emergencia.</p>
    <a href="${WHATS_GENERAL_URL}" class="cta-whatsapp">💬 Orientación general</a>
  `;

  // ===== Abrir resultado =====
  const abrirResultado = (html) => {
    if (!resultado || !resultadoContent) return;
    resultadoContent.innerHTML = html;
    resultado.style.display = "block";
    resultado.scrollIntoView({ behavior: "smooth" });
  };

  // ===== Buscar normal =====
  const buscar = () => {
    const valor = normalizar(searchInput ? searchInput.value : "");
    if (!valor) return;

    const clave = alias[valor] || valor;

    if (respuestas[clave]) {
      abrirResultado(respuestas[clave]);
      return;
    }

    abrirResultado(htmlNoEncontrado());
  };

  // ===== Buscar directo (subchips) =====
  window.buscarDirecto = (clave) => {
    const k = normalizar(clave || "");
    const real = alias[k] || k;

    if (respuestas[real]) {
      abrirResultado(respuestas[real]);
      return;
    }

    abrirResultado(htmlNoEncontrado());
  };

  // ===== Chips principales =====
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

  // ===== Flecha bajar =====
  if (arrowDown) {
    arrowDown.addEventListener("click", () => {
      if (searchInput)
        searchInput.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  // ===== Botón buscar =====
  if (searchBtn) searchBtn.addEventListener("click", buscar);

  // ===== Enter =====
  if (searchInput) {
    searchInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") buscar();
    });
  }

});