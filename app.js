document.addEventListener("DOMContentLoaded", () => {

  const searchInput = document.getElementById("searchInput");
  const searchBtn = document.getElementById("searchBtn");
  const resultado = document.getElementById("resultado");
  const resultadoContent = document.getElementById("resultadoContent");
  const volverBtn = document.getElementById("volverBtn");
  const arrowDown = document.getElementById("arrowDown");

  const respuestas = {
    policia: "<h2>🚓 Policía</h2><p>Llama al 110 en emergencias.</p>",
    hospital: "<h2>🏥 Hospital</h2><p>Llama al 119 si es emergencia médica.</p>",
    taxi: "<h2>🚕 Taxi</h2><p>Puedes tomar taxi en estaciones o usar Uber.</p>",
    hotel: "<h2>🏨 Hotel</h2><p>Busca hoteles en Booking o Agoda.</p>"
  };

  function mostrarResultado(html) {
    resultadoContent.innerHTML = html;
    resultado.classList.remove("hidden");
    window.scrollTo({ top: resultado.offsetTop, behavior: "smooth" });
  }

  function buscar() {
    const valor = searchInput.value.trim().toLowerCase();
    if (!valor) return;

    if (respuestas[valor]) {
      mostrarResultado(respuestas[valor]);
    } else {
      mostrarResultado("<h2>No encontrado</h2><p>Intenta otra palabra.</p>");
    }
  }

  searchBtn.addEventListener("click", buscar);

  searchInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") buscar();
  });

  volverBtn.addEventListener("click", () => {
    resultado.classList.add("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  arrowDown.addEventListener("click", () => {
    document.getElementById("main").scrollIntoView({ behavior: "smooth" });
  });

  document.querySelectorAll(".chip").forEach(chip => {
    chip.addEventListener("click", () => {
      searchInput.value = chip.dataset.key;
      buscar();
    });
  });

});