// Número de WhatsApp (sin + ni espacios)
const WHATSAPP_NUMBER = "819084462319";

// Elementos
const continueBtn = document.getElementById("continueBtn");
const main = document.getElementById("main");
const searchInput = document.getElementById("searchInput");

// Función para ir a sección
function goToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

// Botón "Continuar"
if (continueBtn) {
  continueBtn.addEventListener("click", function () {
    if (main) {
      main.scrollIntoView({ behavior: "smooth" });
    }
  });
}

// Botones tipo chip
const chips = document.querySelectorAll(".chip");
chips.forEach(function (button) {
  button.addEventListener("click", function () {
    const target = button.getAttribute("data-target");
    goToSection(target);
  });
});

// Buscador con Enter
if (searchInput) {
  searchInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      const query = searchInput.value.toLowerCase();

      if (query.includes("hospital") || query.includes("polic") || query.includes("emer")) {
        goToSection("emergencia");
      } else if (query.includes("tren") || query.includes("metro") || query.includes("bus")) {
        goToSection("transporte");
      } else if (query.includes("dinero") || query.includes("pago") || query.includes("cajero")) {
        goToSection("dinero");
      } else if (query.includes("vida") || query.includes("basura")) {
        goToSection("vida");
      } else if (query.includes("tramite") || query.includes("visa")) {
        goToSection("tramites");
      } else {
        goToSection("servicios");
      }
    }
  });
}