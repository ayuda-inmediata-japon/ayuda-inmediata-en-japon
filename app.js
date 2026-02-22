document.addEventListener("DOMContentLoaded", function () {
  const continueBtn = document.getElementById("continueBtn");
  const searchInput = document.getElementById("searchInput");
  const chips = document.querySelectorAll(".chip");
  const blocks = document.querySelectorAll("section.block");
  const main = document.getElementById("main");

  // ✅ BOTÓN CONTINUAR (baja al main)
  if (continueBtn && main) {
    continueBtn.addEventListener("click", function () {
      main.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  // ✅ Botón volver (se crea solo cuando entras en modo enfoque)
  function ensureBackBtn() {
    let backBtn = document.getElementById("backBtn");
    if (backBtn) return backBtn;

    backBtn = document.createElement("button");
    backBtn.id = "backBtn";
    backBtn.type = "button";
    backBtn.textContent = "🔙 Volver";

    // estilos simples (para que se vea aunque falte CSS)
    backBtn.style.margin = "16px 0";
    backBtn.style.padding = "10px 14px";
    backBtn.style.borderRadius = "10px";
    backBtn.style.fontWeight = "700";
    backBtn.style.border = "1px solid rgba(255,255,255,0.25)";
    backBtn.style.background = "rgba(0,0,0,0.25)";
    backBtn.style.color = "#fff";

    backBtn.addEventListener("click", function () {
      // mostrar todo
      blocks.forEach(b => (b.style.display = "block"));
      // quitar modo enfoque
      document.body.classList.remove("focus-mode");
      // limpiar buscador
      if (searchInput) searchInput.value = "";
      // quitar botón
      backBtn.remove();
      // volver arriba del main
      if (main) main.scrollIntoView({ behavior: "smooth", block: "start" });
    });

    if (main) main.prepend(backBtn);
    return backBtn;
  }

  // ✅ Mostrar solo una sección
  function showOnly(targetId) {
    let found = false;

    blocks.forEach(block => {
      if (block.id === targetId) {
        block.style.display = "block";
        found = true;
      } else {
        block.style.display = "none";
      }
    });

    if (!found) return;

    // activar modo enfoque (por si luego quieres CSS blanco)
    document.body.classList.add("focus-mode");

    ensureBackBtn();

    // ir a main
    if (main) main.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  // ✅ CHIPS (botones de categorías)
  chips.forEach(chip => {
    chip.addEventListener("click", function () {
      const target = chip.getAttribute("data-target");
      if (target) showOnly(target);
    });
  });

  // ✅ BUSCADOR (modo app)
  if (searchInput) {
    let timer = null;

    searchInput.addEventListener("input", function () {
      clearTimeout(timer);

      timer = setTimeout(() => {
        const value = searchInput.value.trim().toLowerCase();

        // si está vacío, mostrar todo y salir de modo enfoque
        if (!value) {
          blocks.forEach(b => (b.style.display = "block"));
          document.body.classList.remove("focus-mode");
          const backBtn = document.getElementById("backBtn");
          if (backBtn) backBtn.remove();
          return;
        }

        // buscar coincidencia dentro del texto de cada bloque
        for (const block of blocks) {
          const text = (block.innerText || "").toLowerCase();
          if (text.includes(value)) {
            showOnly(block.id);
            break;
          }
        }
      }, 120); // pequeño delay para que no “salte” mientras escribes
    });
  }
});