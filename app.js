document.addEventListener("DOMContentLoaded", function () {

  /* =========================
     BOTÓN CONTINUAR
  ========================== */

  const continueBtn = document.getElementById("continueBtn");

  if (continueBtn) {
    continueBtn.addEventListener("click", function () {
      const main = document.getElementById("main");
      if (main) {
        main.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  }


  /* =========================
     CHIPS (Botones de sección)
  ========================== */

  const chips = document.querySelectorAll(".chip");

  chips.forEach(function (chip) {
    chip.addEventListener("click", function () {

      const targetId = chip.getAttribute("data-target");
      const target = document.getElementById(targetId);

      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }

    });
  });


  /* =========================
     BUSCADOR
  ========================== */

  const searchInput = document.getElementById("searchInput");

  const sections = [
    "emergencia",
    "transporte",
    "dinero",
    "vida",
    "tramites",
    "servicios",
    "hoteles"
  ];

  if (searchInput) {

    searchInput.addEventListener("input", function () {

      const value = searchInput.value.toLowerCase();

      sections.forEach(function (id) {

        if (value.includes(id)) {

          const target = document.getElementById(id);

          if (target) {
            target.scrollIntoView({
              behavior: "smooth",
              block: "start"
            });
          }

        }

      });

    });

  }

});