// ===== Configuración =====
const WHATSAPP_NUMBER = "819084462319"; // tu número sin +, sin espacios
const WA_DEFAULT_MSG = "Hola, estoy en Japón y necesito ayuda. Mi consulta es: ";
const WA_EXPERIENCE_MSG = "Hola, me gustaría contar mi experiencia sobre Ayuda Inmediata en Japón.";

// ===== Utilidad: abrir WhatsApp =====
function openWhatsApp(text){
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  window.open(url, "_blank");
}

function scrollToId(id){
  const el = document.getElementById(id);
  if(!el) return;
  el.scrollIntoView({ behavior:"smooth", block:"start" });
}

document.addEventListener("DOMContentLoaded", () => {
  const continueBtn = document.getElementById("continueBtn");
  const waBtn = document.getElementById("waBtn");
  const searchInput = document.getElementById("searchInput");
  const catButtons = document.querySelectorAll(".cat-btn");

  // Botón continuar
  if(continueBtn){
    continueBtn.addEventListener("click", () => {
      scrollToId("searchSection");
      if(searchInput) setTimeout(()=>searchInput.focus(), 350);
    });
  }

  // WhatsApp principal
  if(waBtn){
    waBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const q = (searchInput?.value || "").trim();
      openWhatsApp(WA_DEFAULT_MSG + (q ? q : "—"));
    });
  }

  // Botones de categorías
  catButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const target = btn.getAttribute("data-target");
      if(target) scrollToId(target);
    });
  });

  // Enter en buscador = abrir WhatsApp (opcional, práctico)
  if(searchInput){
    searchInput.addEventListener("keydown", (e) => {
      if(e.key === "Enter"){
        const q = (searchInput.value || "").trim();
        openWhatsApp(WA_DEFAULT_MSG + (q ? q : "—"));
      }
    });
  }
});