document.addEventListener("DOMContentLoaded", function () {

  const searchInput = document.getElementById("searchInput");
  const searchBtn = document.getElementById("searchBtn");
  const resultado = document.getElementById("resultado");
  const resultadoContent = document.getElementById("resultadoContent");
  const volverBtn = document.getElementById("volverBtn");

  const respuestas = {
    taxi: `
      <h2>🚕 Taxi en Japón</h2>
      <p>Puedes tomar taxi en estaciones principales o pedirlo por app.</p>
      <p><strong>Frase útil:</strong></p>
      <div class="jap-box">タクシーを呼んでください。</div>
      <button onclick="window.location.href='https://wa.me/819084462319'">
        🟢 Necesito ayuda por WhatsApp
      </button>
    `,
    hospital: `
      <h2>🏥 Hospital en Japón</h2>
      <p>Busca hospital general cercano o llama al 119 en emergencia.</p>
      <div class="jap-box">病院に行きたいです。</div>
      <button onclick="window.location.href='https://wa.me/819084462319'">
        🟢 Necesito ayuda por WhatsApp
      </button>
    `
  };

  function buscar() {
    const valor = searchInput.value.toLowerCase().trim();

    if (valor === "") return;

    if (respuestas[valor]) {
      resultadoContent.innerHTML = respuestas[valor];
    } else {
      resultadoContent.innerHTML = `
        <h2>🔎 No encontramos esa información todavía.</h2>
        <p>Estamos ampliando constantemente esta guía.</p>
        <p>🟢 Puedes escribirnos por WhatsApp y contarnos tu situación.</p>
        <button onclick="window.location.href='https://wa.me/819084462319'">
          🟢 Contactar por WhatsApp
        </button>
      `;
    }

    resultado.classList.remove("oculto");
  }

  searchBtn.addEventListener("click", buscar);

  searchInput.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
      buscar();
    }
  });

  volverBtn.addEventListener("click", function() {
    resultado.classList.add("oculto");
    searchInput.value = "";
  });

});