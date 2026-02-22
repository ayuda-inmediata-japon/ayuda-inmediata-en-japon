document.addEventListener("DOMContentLoaded", function () {

  const input = document.getElementById("buscador");
  const boton = document.getElementById("buscarBtn");
  const resultado = document.getElementById("resultado");
  const contenido = document.getElementById("contenido");

  function mostrarResultado(html) {
    contenido.style.display = "none";
    resultado.style.display = "block";
    resultado.innerHTML = `
      <button class="volver" onclick="volverInicio()">⬅ Volver</button>
      ${html}
    `;
    resultado.scrollIntoView({ behavior: "smooth" });
  }

  window.volverInicio = function () {
    resultado.style.display = "none";
    contenido.style.display = "block";
    input.value = "";
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  function buscar() {
    const query = input.value.toLowerCase().trim();

    if (!query) return;

    // 🚨 EMERGENCIAS
    if (
      query.includes("policia") ||
      query.includes("policía") ||
      query.includes("110")
    ) {
      mostrarResultado(`
        <h2>🚓 Policía en Japón</h2>
        <p><strong>Número:</strong> 110</p>
        <p>Para robos, accidentes o peligro inmediato.</p>
        <div class="jap-box">
          日本語が話せません<br>
          Nihongo ga hanasemasen<br>
          (No hablo japonés)
        </div>
      `);
      return;
    }

    if (
      query.includes("ambulancia") ||
      query.includes("hospital") ||
      query.includes("119")
    ) {
      mostrarResultado(`
        <h2>🚑 Ambulancia en Japón</h2>
        <p><strong>Número:</strong> 119</p>
        <p>Llama en caso de emergencia médica.</p>
        <div class="jap-box">
          救急車をお願いします<br>
          Kyūkyūsha o onegaishimasu<br>
          (Necesito una ambulancia)
        </div>
      `);
      return;
    }

    // 🚆 TRANSPORTE
    if (
      query.includes("transporte") ||
      query.includes("taxi") ||
      query.includes("tren") ||
      query.includes("bus") ||
      query.includes("autobus") ||
      query.includes("suica") ||
      query.includes("pasmo")
    ) {
      mostrarResultado(`
        <h2>🚆 Transporte en Japón</h2>

        <h3>🚕 Taxi</h3>
        <p>Precio inicial: ¥500 – ¥700</p>
        <p>Sube según distancia. +20% de noche.</p>
        <div class="jap-box">
          タクシーをお願いします<br>
          Takushī o onegaishimasu<br>
          (Un taxi, por favor)
        </div>

        <h3>🚆 Tren</h3>
        <p>El transporte más usado. Puedes pagar con boleto o tarjeta IC.</p>

        <h3>🚌 Autobús</h3>
        <p>Se paga al bajar. Mira la pantalla para saber cuánto pagar.</p>

        <h3>💳 Tarjetas IC</h3>
        <p>Suica o Pasmo sirven para tren, bus y pequeñas compras.</p>
      `);
      return;
    }

    // 🏨 HOTEL
    if (
      query.includes("hotel") ||
      query.includes("hospedaje")
    ) {
      mostrarResultado(`
        <h2>🏨 Hotel en Japón</h2>
        <p>Puedes buscar en Booking, Agoda o directamente en Google Maps.</p>
        <div class="jap-box">
          予約しています<br>
          Yoyaku shiteimasu<br>
          (Tengo una reserva)
        </div>
      `);
      return;
    }

    // 💰 DINERO
    if (
      query.includes("dinero") ||
      query.includes("yen") ||
      query.includes("cambio")
    ) {
      mostrarResultado(`
        <h2>💴 Dinero en Japón</h2>
        <p>La moneda es el yen (¥).</p>
        <p>Muchos lugares aceptan tarjeta, pero siempre es bueno tener efectivo.</p>
      `);
      return;
    }

    // ❌ NO ENCONTRADO
    mostrarResultado(`
      <h2>⚠ No encontramos esa información</h2>
      <p>Intenta escribir otra palabra clave.</p>
    `);
  }

  boton.addEventListener("click", buscar);

  input.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      buscar();
    }
  });

});