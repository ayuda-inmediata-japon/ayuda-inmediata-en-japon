document.addEventListener("DOMContentLoaded", function () {

  const continueBtn = document.getElementById("continueBtn");
  const main = document.getElementById("main");
  const searchInput = document.getElementById("searchInput");

  if (continueBtn) {
    continueBtn.addEventListener("click", function () {
      main.scrollIntoView({
        behavior: "smooth"
      });
    });
  }

  const content = {
    tren: `
      <h3>🚆 Cómo usar el tren</h3>
      <p>1. Compra ticket o usa tarjeta IC.</p>
      <p>2. Respeta el silencio.</p>
      <div>この電車は〇〇に行きますか？</div>
    `,

    hotel: `
      <h3>🏨 Hotel</h3>
      <p>Presenta tu pasaporte.</p>
      <p>Respeta horario de check-in.</p>
      <div>予約があります。</div>
    `,

    hospital: `
      <h3>🏥 Hospital</h3>
      <p>Llama 119 si es urgente.</p>
      <p>Lleva tu tarjeta de seguro.</p>
      <div>病院に行きたいです。</div>
    `
  };

  searchInput.addEventListener("keypress", function (e) {

    if (e.key === "Enter") {

      const value = searchInput.value.toLowerCase().trim();

      if (content[value]) {
        main.innerHTML = `
          <button onclick="location.reload()">🔙 Volver</button>
          ${content[value]}
        `;
      } else {
        main.innerHTML = `
          <button onclick="location.reload()">🔙 Volver</button>
          <h3>🔎 No encontramos ese tema todavía.</h3>
          <p>Puedes escribirnos por WhatsApp.</p>
        `;
      }

    }

  });

});