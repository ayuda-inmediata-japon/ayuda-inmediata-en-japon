document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("searchInput");
  const searchBtn = document.getElementById("searchBtn");
  const resultado = document.getElementById("resultado");
  const resultadoContent = document.getElementById("resultadoContent");
  const volverBtn = document.getElementById("volverBtn");
  const arrowDown = document.getElementById("arrowDown");

  const whatsLink = document.getElementById("whatsLink");
  const paypalLink = document.getElementById("paypalLink");
  const kofiLink = document.getElementById("kofiLink");
  const paypayLink = document.getElementById("paypayLink");

  // ======= LINKS (edítalos si quieres) =======
  const WHATS_NUMBER = "819084462319";
  const WHATS_MSG = "Hola, necesito ayuda en Japón. Mi consulta es: ";
  if (whatsLink) {
    whatsLink.href = `https://wa.me/${WHATS_NUMBER}?text=${encodeURIComponent(WHATS_MSG)}`;
  }

  // Si ya tienes tus links reales, pégalos aquí:
  if (paypalLink) paypalLink.href = "https://paypal.me/JGarciaUmey";
  if (kofiLink) kofiLink.href = "https://ko-fi.com/ayudainmediatajapon";
  if (paypayLink) paypayLink.href = "#"; // aquí puedes poner link/imagen o dejarlo para después

  // ======= Flecha baja al buscador =======
  const bajar = () => {
    const buscador = document.getElementById("buscador");
    if (buscador) buscador.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  if (arrowDown) {
    arrowDown.addEventListener("click", bajar);
  }

  // ======= Normalizar: minúsculas + sin acentos =======
  const normalizar = (txt) => {
    return (txt || "")
      .toLowerCase()
      .trim()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  };

  // ======= RESPUESTAS (clave -> HTML) =======
  // Puedes ampliar con calma luego.
  const respuestas = {
    taxi: `
      <h2>🚕 Taxi en Japón</h2>
      <p><strong>Cómo pedirlo:</strong> busca una parada de taxi (タクシー乗り場) o usa apps como GO / DiDi (según zona).</p>
      <p><strong>Frases útiles:</strong> 「ここまでお願いします」(Koko made onegaishimasu) = “Hasta aquí por favor”.</p>
    `,

    hospital: `
      <h2>🏥 Salud / Hospital</h2>
      <p><strong>Emergencia grave:</strong> llama al <strong>119</strong> (ambulancia).</p>
      <p><strong>Si no es emergencia:</strong> busca clínica (クリニック) cercana o “内科” (medicina interna).</p>
    `,

    hotel: `
      <h2>🏨 Alojamiento / Hotel</h2>
      <p><strong>Check-in:</strong> muestra pasaporte y reserva. Si llegas tarde, avisa al hotel.</p>
      <p><strong>Problemas:</strong> si hay ruido, limpieza o cobro, pide hablar con recepción (フロント).</p>
    `,

    policia: `
      <h2>🚓 Policía</h2>
      <p><strong>Emergencia:</strong> <strong>110</strong></p>
      <p><strong>Koban:</strong> mini-comisaría local (交番). Útil para pérdidas, direcciones, ayuda rápida.</p>
    `,

    emergencia: `
      <h2>🧯 Emergencia</h2>
      <p><strong>Policía:</strong> 110</p>
      <p><strong>Ambulancia / Bomberos:</strong> 119</p>
      <p>Si no hablas japonés, di: <strong>“Spanish / English please”</strong> y tu ubicación.</p>
    `,

    transporte: `
      <h2>🚆 Transporte</h2>
      <p><strong>Trenes:</strong> usa Google Maps para rutas y andenes.</p>
      <p><strong>IC Card:</strong> Suica / ICOCA sirve para trenes y buses en muchas zonas.</p>
    `,

    dinero: `
      <h2>💴 Dinero y pagos</h2>
      <p><strong>Efectivo:</strong> aún se usa mucho. Cajeros confiables: 7-Eleven / Japan Post.</p>
      <p><strong>Pagos:</strong> PayPay, tarjetas, y efectivo según lugar.</p>
    `,

    vida: `
      <h2>🏠 Vida diaria</h2>
      <p><strong>Basura:</strong> cada ciudad tiene reglas (燃えるごみ / 燃えないごみ / 資源ごみ).</p>
      <p><strong>Consejo:</strong> revisa el calendario de tu municipio.</p>
    `,

    tramites: `
      <h2>📄 Trámites</h2>
      <p><strong>Ward/City Office:</strong> 市役所 / 区役所 (registro, papeles, seguro).</p>
      <p>Si necesitas ayuda con traducción de documentos, escríbenos.</p>
    `,

    servicios: `
      <h2>🧰 Servicios personalizados</h2>
      <ul>
        <li>Interpretación (teléfono o presencial)</li>
        <li>Traducción de documentos</li>
        <li>Acompañamiento a trámites, hospital, hotel</li>
        <li>Planificación y presupuesto de gastos</li>
        <li>Soporte para organizar tu experiencia en Japón</li>
      </ul>
    `,
  };

  // Alias (sinónimos) para buscar
const alias = {

ambulancia: "emergencia",
emergencia: "emergencia",

tren: "transporte",
metro: "transporte",
bus: "transporte",
buses: "transporte",

dinero: "dinero",
yen: "dinero",

pol: "policia",
poli: "policia",
polic: "policia",

tax: "taxi",
taksi: "taxi",

hos: "hospital",
hosp: "hospital",

hot: "hotel",
otel: "hotel",

emer: "emergencia",
emerg: "emergencia",

trans: "transporte",
tram: "tramites",

serv: "servicios"

};
const sugerenciasRelacionadas = {
  pol: [
    { texto: "Policía", destino: "policia" },
    { texto: "Patrulla", destino: "policia" },
    { texto: "Puesto policial", destino: "policia" },
    { texto: "Koban", destino: "policia" },
    { texto: "Denuncia", destino: "policia" }
  ],

  hos: [
    { texto: "Hospital", destino: "hospital" },
    { texto: "Ambulancia", destino: "hospital" },
    { texto: "Emergencia médica", destino: "hospital" },
    { texto: "Dolor fuerte", destino: "hospital" },
    { texto: "Accidente", destino: "hospital" }
  ],

  tax: [
    { texto: "Taxi", destino: "taxi" },
    { texto: "Parada de taxi", destino: "taxi" },
    { texto: "Llamar un taxi", destino: "taxi" },
    { texto: "Tarifa de taxi", destino: "taxi" },
    { texto: "Taxi al hospital", destino: "taxi" }
  ],

  hot: [
    { texto: "Hotel", destino: "hotel" },
    { texto: "Alojamiento", destino: "hotel" },
    { texto: "Check-in", destino: "hotel" },
    { texto: "Reservar hotel", destino: "hotel" },
    { texto: "Dormir esta noche", destino: "hotel" }
  ],

  emer: [
    { texto: "Emergencia", destino: "emergencia" },
    { texto: "Urgencia", destino: "emergencia" },
    { texto: "Ayuda inmediata", destino: "emergencia" },
    { texto: "Número de emergencia", destino: "emergencia" },
    { texto: "Qué hacer ahora", destino: "emergencia" }
  ],

  tran: [
    { texto: "Transporte", destino: "transporte" },
    { texto: "Tren", destino: "transporte" },
    { texto: "Metro", destino: "transporte" },
    { texto: "Bus", destino: "transporte" },
    { texto: "Cómo llegar", destino: "transporte" }
  ],

  dine: [
    { texto: "Dinero", destino: "dinero" },
    { texto: "Cambio de moneda", destino: "dinero" },
    { texto: "Tarjeta", destino: "dinero" },
    { texto: "Efectivo", destino: "dinero" },
    { texto: "Cajero", destino: "dinero" }
  ],

  tram: [
    { texto: "Trámites", destino: "tramites" },
    { texto: "Documentos", destino: "tramites" },
    { texto: "Ayuntamiento", destino: "tramites" },
    { texto: "Formulario", destino: "tramites" },
    { texto: "Papeles", destino: "tramites" }
  ],

  serv: [
    { texto: "Servicios", destino: "servicios" },
    { texto: "Interpretación", destino: "servicios" },
    { texto: "Traducción", destino: "servicios" },
    { texto: "Acompañamiento", destino: "servicios" },
    { texto: "Ayuda personalizada", destino: "servicios" }
  ]
};
  const mostrar = (html) => {
    if (!resultado || !resultadoContent) return;
    resultadoContent.innerHTML = html;
    resultado.classList.remove("oculto");
    resultado.scrollIntoView({ behavior: "smooth", block: "start" });
  };

const mostrarNoEncontrado = () => {
  mostrar(`

<h2>🤔 No encontré información exacta</h2>

<p>
Intenta buscar nuevamente usando <strong>palabras similares</strong>
o una forma diferente de escribir tu consulta.
</p>

<p>
Si aún no encuentras lo que buscas y necesitas ayuda,
puedes contactarnos con toda confianza.
</p>

<p><strong>💬 WhatsApp</strong></p>

<a
style="background:#25D366;color:white;padding:16px;border-radius:30px;text-decoration:none;display:block;text-align:center;font-size:18px;font-weight:600;margin-top:12px;width:100%;"
href="https://wa.me/819084462319?text=Hola,%20quisiera%20información%20general%20sobre:"
target="_blank">
📲 Orientación general
</a>

<a
style="background:#25D366;color:white;padding:16px;border-radius:30px;text-decoration:none;display:block;text-align:center;font-size:18px;font-weight:600;margin-top:12px;width:100%;"
href="https://wa.me/819084462319?text=Hola,%20quisiera%20orientación%20personalizada%20sobre:"
target="_blank">
📞 Orientación personalizada
</a>

  `);
};

  function buscar() {
    const valor = normalizar(searchInput ? searchInput.value : "");
    if (!valor) return;

    const clave = alias[valor] || valor;

    if (respuestas[clave]) {
      mostrar(respuestas[clave]);
    } else {
      mostrarNoEncontrado();
    }
  }

  // Buscar con botón
  if (searchBtn) searchBtn.addEventListener("click", buscar);

  // Buscar con Enter
  if (searchInput) {
    searchInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") buscar();
    });
  }
// ===== Sugerencias mientras escribe =====
if (searchInput && sugerenciasBox) {
  searchInput.addEventListener("input", () => {
    const valorOriginal = normalizar(searchInput.value);

    sugerenciasBox.innerHTML = "";

    if (!valorOriginal) return;

    // 1) sugerencias especiales por pocas letras
    const especiales = sugerenciasRelacionadas[valorOriginal];
    if (especiales) {
      especiales.forEach(item => {
        const opcion = document.createElement("div");
        opcion.className = "sugerencia-item";
        opcion.textContent = item.texto;

        opcion.addEventListener("click", () => {
          searchInput.value = item.texto;
          sugerenciasBox.innerHTML = "";
          mostrar(respuestas[item.destino]);
        });

        sugerenciasBox.appendChild(opcion);
      });

      return;
    }

    // 2) sugerencias normales por coincidencia parcial
    const valor = alias[valorOriginal] || valorOriginal;

    const filtradas = Object.keys(respuestas).filter(key =>
      key.includes(valor)
    );

    filtradas.slice(0, 5).forEach(key => {
      const opcion = document.createElement("div");
      opcion.className = "sugerencia-item";
      opcion.textContent = key.charAt(0).toUpperCase() + key.slice(1);

      opcion.addEventListener("click", () => {
        searchInput.value = key;
        sugerenciasBox.innerHTML = "";
        mostrar(respuestas[key]);
      });

      sugerenciasBox.appendChild(opcion);
    });
  });
}

  // Volver
  if (volverBtn) {
    volverBtn.addEventListener("click", () => {
      if (resultado) resultado.classList.add("oculto");
      if (resultadoContent) resultadoContent.innerHTML = "";
      if (searchInput) searchInput.value = "";

      const buscador = document.getElementById("buscador");
      if (buscador) buscador.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  // Chips (mapea categorías a claves reales)
  const chips = document.querySelectorAll(".chip");

  // OJO: tus data-key son: emergencia, transporte, salud, alojamiento, dinero, vida-diaria, tramites, servicios
  // Pero tus respuestas reales son: emergencia, transporte, hospital, hotel, dinero, vida, tramites, servicios
  const chipMap = {
    emergencia: "emergencia",
    transporte: "transporte",
    salud: "hospital",
    alojamiento: "hotel",
    dinero: "dinero",
    "vida-diaria": "vida",
    vida: "vida",
    tramites: "tramites",
    servicios: "servicios",
  };

  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      const raw = (chip.getAttribute("data-key") || "").trim().toLowerCase();
      const key = chipMap[raw] || raw;

      if (respuestas[key]) {
        // Opcional: también pone la palabra en el buscador
        if (searchInput) searchInput.value = key;
        mostrar(respuestas[key]);
      }
    });
  });
});
