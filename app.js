// ✅ Ayuda Inmediata en Japón - app.js (versión estable)
// Reemplaza TODO tu archivo app.js con esto.

document.addEventListener("DOMContentLoaded", () => {
  // =========================
  // Helpers
  // =========================
  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => Array.from(document.querySelectorAll(sel));

  function smoothScrollTo(el) {
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function normalize(str) {
    return (str || "")
      .toLowerCase()
      .trim()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  }

  // =========================
  // 1) Botón "Continuar / Siguiente"
  // =========================
  const continueBtn = document.getElementById("continueBtn") || document.getElementById("continue");

  if (continueBtn) {
    // Click funciona siempre
    continueBtn.addEventListener("click", () => {
      const main = document.getElementById("main") || $("main");
      if (main) smoothScrollTo(main);
      else window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
    });

    // (Opcional) mini “vida” visual a la flecha si existe span.arrow dentro del botón
    const arrow = continueBtn.querySelector(".arrow");
    if (arrow) {
      arrow.style.display = "inline-block";
      arrow.style.transition = "transform 0.35s ease";
      let down = false;
      setInterval(() => {
        down = !down;
        arrow.style.transform = down ? "translateY(4px)" : "translateY(0px)";
      }, 500);
    }
  }

  // =========================
  // 2) Chips / Botones de secciones (clase .chip)
  // Deben tener: data-target="transporte" (por ejemplo)
  // =========================
  $$(".chip").forEach((chip) => {
    chip.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = chip.getAttribute("data-target") || chip.getAttribute("href")?.replace("#", "");
      if (!targetId) return;
      const target = document.getElementById(targetId);
      smoothScrollTo(target);
    });
  });

  // =========================
  // 3) Buscador (acepta varios IDs por si cambiaste nombres)
  // =========================
  const searchInput =
    document.getElementById("searchInput") ||
    document.getElementById("buscador") ||
    document.getElementById("search") ||
    document.getElementById("q");

  // Mapa de palabras -> sección
  const keywordMap = [
    // Hoteles / Hospedaje
    { keys: ["hotel", "hoteles", "hostal", "hostel", "airbnb", "hospedaje", "alojamiento"], id: "hoteles" },
    // Hospital / Salud
    { keys: ["hospital", "doctor", "medico", "clinica", "farmacia", "ambulancia", "salud"], id: "hospitales" },
    // Transporte
    { keys: ["transporte", "tren", "metro", "subte", "bus", "autobus", "taxi", "suica", "pasmo", "icoca"], id: "transporte" },
    // Emergencia
    { keys: ["emergencia", "policia", "koban", "incendio", "bomberos", "112", "110", "119", "perdido"], id: "emergencia" },
    // Dinero
    { keys: ["dinero", "cajero", "atm", "tarjeta", "cambio", "yen", "pago", "pagos"], id: "dinero" },
    // Vida diaria
    { keys: ["vida", "basura", "conbini", "super", "lavanderia", "wifi", "internet", "recarga"], id: "vida" },
    // Trámites
    { keys: ["tramites", "documentos", "visa", "residencia", "zairyu", "ward", "shiyakusho", "yakusho"], id: "tramites" },
    // Servicios
    { keys: ["servicios", "traduccion", "interpretacion", "acompanamiento", "whatsapp"], id: "servicios" },
  ];

  function findSectionIdFromQuery(q) {
    const v = normalize(q);
    if (!v) return null;

    // match directo por nombre de sección si escriben “transporte”, “vida”, etc.
    const directIds = ["emergencia", "transporte", "hoteles", "hospitales", "dinero", "vida", "tramites", "servicios"];
    for (const id of directIds) {
      if (v.includes(id)) return id;
    }

    // match por keywords
    for (const entry of keywordMap) {
      if (entry.keys.some((k) => v.includes(normalize(k)))) return entry.id;
    }
    return null;
  }

  // =========================
  // 4) Si una sección está vacía, ponemos un texto mínimo para que NO se vea “en blanco”
  // =========================
  function ensureNotEmpty(sectionId, title) {
    const sec = document.getElementById(sectionId);
    if (!sec) return;

    // Si solo tiene el h3 o casi nada, agregamos placeholder
    const text = normalize(sec.textContent);
    if (text.length < 20) {
      const p = document.createElement("p");
      p.textContent = `🛠️ Contenido de "${title}" en construcción. (Lo agregamos en el index en el siguiente paso)`;
      p.style.opacity = "0.9";
      sec.appendChild(p);
    }
  }

  ensureNotEmpty("emergencia", "Emergencia");
  ensureNotEmpty("transporte", "Transporte");
  ensureNotEmpty("hoteles", "Hoteles");
  ensureNotEmpty("hospitales", "Hospitales");
  ensureNotEmpty("dinero", "Dinero y pagos");
  ensureNotEmpty("vida", "Vida diaria");
  ensureNotEmpty("tramites", "Trámites");
  ensureNotEmpty("servicios", "Servicios");

  // =========================
  // 5) Acción del buscador: al escribir, te lleva a la sección
  // =========================
  if (searchInput) {
    let lastGo = 0;

    searchInput.addEventListener("input", () => {
      const now = Date.now();
      if (now - lastGo < 250) return; // anti “saltos” por cada tecla
      const id = findSectionIdFromQuery(searchInput.value);
      if (!id) return;

      const target = document.getElementById(id);
      if (target) {
        smoothScrollTo(target);
        lastGo = now;
      }
    });

    // Enter también
    searchInput.addEventListener("keydown", (e) => {
      if (e.key !== "Enter") return;
      const id = findSectionIdFromQuery(searchInput.value);
      const target = id ? document.getElementById(id) : null;
      if (target) smoothScrollTo(target);
    });
  }
});