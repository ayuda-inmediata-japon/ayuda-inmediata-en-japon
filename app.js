document.addEventListener("DOMContentLoaded", function () {

  const continueBtn = document.getElementById("continueBtn");
  const main = document.getElementById("main");

  if (continueBtn && main) {
    continueBtn.addEventListener("click", function () {
      main.scrollIntoView({ behavior: "smooth" });
    });
  }

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

  const searchInput = document.getElementById("searchInput");

  if (searchInput) {
    searchInput.addEventListener("keydown", function (e) {
      if (e.key === "Enter") {
        const value = searchInput.value.toLowerCase();

        const sections = [
          "emergencia",
          "transporte",
          "dinero",
          "vida",
          "tramites",
          "servicios"
        ];

        sections.forEach(function (id) {
          if (value.includes(id)) {
            const target = document.getElementById(id);
            if (target) {
              target.scrollIntoView({ behavior: "smooth" });
            }
          }
        });
      }
    });
  }

});