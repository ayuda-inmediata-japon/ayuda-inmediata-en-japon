document.addEventListener("DOMContentLoaded", function () {

  // BOTÓN CONTINUAR
  const continueBtn = document.getElementById("continueBtn");
  const main = document.getElementById("main");

  if (continueBtn && main) {
    continueBtn.addEventListener("click", function () {
      main.scrollIntoView({ behavior: "smooth" });
    });
  }

  // CHIPS
  const chips = document.querySelectorAll(".chip");

  chips.forEach(function (chip) {
    chip.addEventListener("click", function () {
      const targetId = chip.getAttribute("data-target");
      const target = document.getElementById(targetId);

      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // BUSCADOR
  const searchInput = document.getElementById("searchInput");

  const sections = [
    "emergencia",
    "transporte",
    "dinero",
    "vida",
    "tramites",
    "servicios"
  ];

  if (searchInput) {
    searchInput.addEventListener("input", function () {

      const value = searchInput.value.toLowerCase();

      sections.forEach(function (id) {
        if (value.includes(id)) {
          const target = document.getElementById(id);
          if (target) {
            target.scrollIntoView({ behavior: "smooth" });
          }
        }
      });

    });
  }

});