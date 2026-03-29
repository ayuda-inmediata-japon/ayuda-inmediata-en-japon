document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("searchInput");
  const searchBtn = document.getElementById("searchBtn");
  
  const resultado = document.getElementById("resultado");
  const resultadoContent = document.getElementById("resultadoContent");
  const volverBtn = document.getElementById("volverBtn");
  const arrowDown = document.getElementById("arrowDown");

  const paypalLink = document.getElementById("paypalLink");
  const kofiLink = document.getElementById("kofiLink");
  const paypayLink = document.getElementById("paypayLink");

  // ======= LINKS (edítalos si quieres) =======
  const WHATS_NUMBER = "819084462319";
  const WHATS_MSG = "Hola, necesito ayuda en Japón. Mi consulta es: ";

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
<h2 id="policia">🚓 Policía en Japón</h2>

<p><strong>En Japón la policía forma parte del sistema nacional conocido como Keisatsuchō (警察庁).</strong></p>

<p>Su función es ayudar, orientar y proteger a las personas. Puedes acercarte con tranquilidad si necesitas ayuda.</p>

<p><strong>Importante:</strong> en Japón la policía no acepta dinero ni favores. Las leyes se respetan y los procedimientos son formales.</p>

<p><strong>Koban (交番):</strong> pequeñas estaciones de policía que se encuentran en barrios, estaciones de tren y zonas comerciales.</p>

<img src="koban.jpg" class="info-img" alt="Koban en Japón">

<p><strong>Si necesitas ayuda de la policía, busca un Koban.</strong> Puedes pedir orientación o ayuda.</p>

<p><strong>📞 Policía: 110</strong></p>

<p><strong>🟢 Presiona una situación para ver qué hacer:</strong></p>

<div class="subtemas-box">

  <details class="subtema-card">
    <summary>🚨 Me robaron algo o fui víctima de estafa</summary>
    <div class="subtema-content">

      <p><strong>Qué hacer:</strong></p>
      <ol>
        <li>Mantén la calma.</li>
        <li>Busca un Koban cercano o llama al 110.</li>
        <li>Explica lo ocurrido con la mayor claridad posible.</li>
        <li>Si fue una estafa, guarda mensajes, capturas, comprobantes o cualquier prueba.</li>
      </ol>

      <p><strong>Información útil para la policía:</strong></p>
      <ul>
        <li>Hora aproximada</li>
        <li>Lugar donde ocurrió</li>
        <li>Descripción del objeto robado</li>
        <li>Pruebas, fotos o capturas si existen</li>
      </ul>

      <p><strong>Frases útiles:</strong></p>

      <p><strong>日本語</strong><br>盗まれました<br><strong>Romaji</strong><br>Nusumaremashita<br><strong>Español</strong><br>Me robaron</p>

      <p><strong>日本語</strong><br>詐欺にあったかもしれません<br><strong>Romaji</strong><br>Sagi ni atta kamo shiremasen<br><strong>Español</strong><br>Creo que fui víctima de una estafa</p>

      <p><strong>日本語</strong><br>警察に相談したいです<br><strong>Romaji</strong><br>Keisatsu ni sōdan shitai desu<br><strong>Español</strong><br>Quiero consultar con la policía</p>

    </div>
  </details>

  <details class="subtema-card">
    <summary>📄 Perdí mi billetera o documentos</summary>
    <div class="subtema-content">

      <p><strong>Qué hacer:</strong></p>
      <ol>
        <li>Mantén la calma.</li>
        <li>Busca un Koban cercano.</li>
        <li>Explica qué perdiste y dónde crees que ocurrió.</li>
        <li>Da la mayor cantidad de detalles posible.</li>
      </ol>

      <p><strong>Información que conviene decir:</strong></p>
      <ul>
        <li>Color y tamaño del objeto</li>
        <li>Marca o características</li>
        <li>Qué contenía dentro</li>
        <li>Lugar aproximado donde lo perdiste</li>
        <li>Hora aproximada</li>
        <li>Fotos del objeto o del lugar, si tienes</li>
      </ul>

      <p><strong>Frases útiles:</strong></p>

      <p><strong>Español</strong><br>Perdí mi billetera<br><strong>Romaji</strong><br>Saifu o nakushimashita<br><strong>日本語</strong><br><span style="font-size:24px;font-weight:bold;">財布をなくしました</span></p>

      <p><strong>Español</strong><br>Perdí mi pasaporte<br><strong>Romaji</strong><br>Pasupōto o nakushimashita<br><strong>日本語</strong><br><span style="font-size:24px;font-weight:bold;">パスポートをなくしました</span></p>

      <p><strong>Español</strong><br>Quiero hacer un reporte por objeto perdido<br><strong>Romaji</strong><br>Nakushimono no todoke o shitai desu<br><strong>日本語</strong><br><span style="font-size:24px;font-weight:bold;">なくし物の届けをしたいです</span></p>

    </div>
  </details>

  <details class="subtema-card">
    <summary>🚗 Tuve un accidente</summary>
    <div class="subtema-content">

      <p><strong>Qué hacer:</strong></p>
      <ol>
        <li>Si hay peligro, aléjate a un lugar seguro.</li>
        <li>Si hay heridos, llama también al 119.</li>
        <li>Llama al 110 o busca ayuda de inmediato.</li>
        <li>No abandones el lugar hasta recibir orientación.</li>
      </ol>

      <p><strong>Información útil:</strong></p>
      <ul>
        <li>Ubicación exacta</li>
        <li>Si hay heridos</li>
        <li>Tipo de accidente</li>
        <li>Placas, vehículo o personas involucradas</li>
      </ul>

      <p><strong>Frases útiles:</strong></p>

      <p><strong>Español</strong><br>Tuve un accidente<br><strong>Romaji</strong><br>Jiko ni aimashita<br><strong>日本語</strong><br><span style="font-size:24px;font-weight:bold;">事故にあいました</span></p>

      <p><strong>Español</strong><br>Llama a la policía<br><strong>Romaji</strong><br>Keisatsu o yonde kudasai<br><strong>日本語</strong><br><span style="font-size:24px;font-weight:bold;">警察を呼んでください</span></p>

      <p><strong>Español</strong><br>Hay una persona herida<br><strong>Romaji</strong><br>Keganin ga imasu<br><strong>日本語</strong><br><span style="font-size:24px;font-weight:bold;">けが人がいます</span></p>

    </div>
  </details>

  <details class="subtema-card">
    <summary>🧭 Estoy perdido</summary>
    <div class="subtema-content">

      <p><strong>Qué hacer:</strong></p>
      <ol>
        <li>Busca una estación, tienda, hotel o Koban.</li>
        <li>Muestra la dirección o nombre del lugar al que quieres ir.</li>
        <li>Pide ayuda con calma.</li>
      </ol>

      <p><strong>Frases útiles:</strong></p>

      <p><strong>Español</strong><br>Estoy perdido<br><strong>Romaji</strong><br>Michi ni mayoimashita<br><strong>日本語</strong><br><span style="font-size:24px;font-weight:bold;">道に迷いました</span></p>

      <p><strong>Español</strong><br>¿Dónde está este lugar?<br><strong>Romaji</strong><br>Kono basho wa doko desu ka?<br><strong>日本語</strong><br><span style="font-size:24px;font-weight:bold;">この場所はどこですか？</span></p>

    </div>
  </details>

  <details class="subtema-card">
    <summary>📍 Cómo encontrar un Koban</summary>
    <div class="subtema-content">

      <p><strong>Qué hacer:</strong></p>
      <ol>
        <li>Busca letreros de policía o “Koban”.</li>
        <li>Pregunta en estaciones, tiendas, hoteles o a personal cercano.</li>
        <li>Usa Google Maps si tienes internet.</li>
      </ol>

      <p><strong>Frases útiles:</strong></p>

      <p><strong>Español</strong><br>¿Dónde está el Koban?<br><strong>Romaji</strong><br>Koban wa doko desu ka?<br><strong>日本語</strong><br><span style="font-size:24px;font-weight:bold;">交番はどこですか？</span></p>

    </div>
  </details>

</div>

<h3>🌐 Si tienes dificultad con el idioma</h3>

<p><strong>📱 Puedes mostrar este mensaje al policía:</strong></p>

<ul style="line-height:1.9">

  <li>
    <strong>Español</strong><br>
    Disculpe, no hablo mucho japonés.<br><br>

    <strong>Romaji</strong><br>
    Sumimasen, nihongo ga amari hanasemasen.<br><br>

    <strong>日本語</strong><br>
    <span style="font-size:26px;font-weight:bold;">すみません、日本語があまり話せません。</span>
  </li>

  <br>

  <li>
    <strong>Español</strong><br>
    ¿Puedo usar un traductor para explicarme?<br><br>

    <strong>Romaji</strong><br>
    Honyaku apuri o tsukatte setsumei shite mo ii desu ka?<br><br>

    <strong>日本語</strong><br>
    <span style="font-size:24px;font-weight:bold;">翻訳アプリを使って説明してもいいですか？</span>
  </li>

</ul>

<p>Si no puedes comunicarte bien en japonés, puedes utilizar cualquier traductor desde tu teléfono o dispositivo. No es necesario instalar una aplicación. Puedes abrir un traductor directamente desde tu navegador y mostrar el texto al policía.</p>

<h3>🌐 Traductores recomendados</h3>

<p>🔵 <a href="https://www.deepl.com/translator" target="_blank">Traductor español → japonés (DeepL)</a></p>

<p>🟡 <a href="https://translate.google.com" target="_blank">Traductor español → japonés (Google)</a></p>

<p>🟢 <a href="https://chat.openai.com" target="_blank">ChatGPT (explicar o traducir una situación)</a></p>

<h3>🗣️ Frases útiles para hablar con la policía</h3>

<ul style="line-height:1.9">

  <li>
    <strong>Español</strong><br>
    Ayuda por favor<br><br>

    <strong>Romaji</strong><br>
    Tasukete kudasai<br><br>

    <strong>日本語</strong><br>
    <span style="font-size:26px;font-weight:bold;">助けてください</span>
  </li>

  <br>

  <li>
    <strong>Español</strong><br>
    ¿Dónde está la policía?<br><br>

    <strong>Romaji</strong><br>
    Keisatsu wa doko desu ka?<br><br>

    <strong>日本語</strong><br>
    <span style="font-size:24px;font-weight:bold;">警察はどこですか？</span>
  </li>

  <br>

  <li>
    <strong>Español</strong><br>
    ¿Dónde está el Koban?<br><br>

    <strong>Romaji</strong><br>
    Koban wa doko desu ka?<br><br>

    <strong>日本語</strong><br>
    <span style="font-size:24px;font-weight:bold;">交番はどこですか？</span>
  </li>

</ul>

<div style="
border:3px solid #f5c542;
border-radius:10px;
padding:14px;
margin-top:22px;
background:#1c1c1c;
box-shadow:0 0 8px rgba(245,197,66,0.4);
animation:brilloConsejo 4s ease-in-out infinite;
">
  <h3 style="color:#f5c542;">💡 Consejo importante</h3>

  <p>En Japón muchas personas entregan objetos perdidos a la policía o a oficinas de objetos perdidos.</p>

  <p>Los objetos no siempre aparecen el mismo día. A veces primero se entregan en un Koban y luego se registran en el sistema central.</p>

  <p>Si no aparece ese mismo día, vuelve a preguntar más adelante.</p>
</div>

<hr style="margin-top:35px;border:none;border-top:1px solid rgba(255,255,255,0.12);">

<p>
🙏 Si esta información te fue útil, puedes:
</p>

<div style="display:flex;gap:10px;flex-wrap:wrap;justify-content:center;">

<button onclick="navigator.share({title:'Ayuda Inmediata en Japón',url:window.location.href})"
style="padding:8px 14px;border-radius:6px;background:#1f1f1f;color:#fff;border:1px solid #555;">
↗ Compartir
</button>

<button onclick="mostrarGuardar()"
style="padding:8px 14px;border-radius:6px;background:#1f1f1f;color:#fff;border:1px solid #555;">
• Guardar
</button>

<button onclick="document.getElementById('apoyo').scrollIntoView({behavior:'smooth'})"
style="padding:8px 14px;border-radius:6px;background:#1f1f1f;color:#ff8a8a;border:1px solid #555;">
♥ Apoyar
</button>

</div>

<div id="guardar-pagina" style="display:none;background:#111;padding:18px;border-radius:14px;margin-top:16px;border:1px solid #333;">
  <p><strong>📌 Cómo guardar esta página</strong></p>

  <p><b>En iPhone / iPad:</b><br>
  Pulsa el botón compartir y selecciona <strong>"Añadir a pantalla de inicio"</strong>.
  </p>

  <p><b>En Android:</b><br>
  Pulsa el menú del navegador y selecciona <strong>"Añadir a pantalla de inicio"</strong>.
  </p>

  <p><b>En computadora:</b><br>
  Usa la estrella ⭐ del navegador o presiona Ctrl + D.
  </p>
</div>

<div id="apoyo" class="support-section">
  <p>🙏 Gracias por utilizar esta guía</p>

  <h3>❤️ Apoya esta guía</h3>

  <p>
  Si esta guía te ayudó, puedes apoyar este proyecto con una pequeña colaboración.
  </p>

  <div class="support-buttons">
    <a class="support-btn" href="https://paypal.me/JGarciaUmey" target="_blank">💳 PayPal</a>
    <a class="support-btn" href="https://ko-fi.com/ayudainmediatajapon" target="_blank">☕ Ko-fi</a>
    <a class="support-btn" href="https://qr.paypay.ne.jp/p2p01_uhtObkY1IUOc9WQ6" target="_blank">📱 PayPay</a>
  </div>

  <p class="support-note">
  Incluso una pequeña colaboración ayuda a mantener esta guía gratuita y disponible para más personas.
  </p>
</div>

<p style="font-size:12px;color:#777;margin-top:12px;">
También es posible colaborar utilizando tarjeta de crédito o débito.
</p>

<div style="margin-top:30px;display:flex;justify-content:center;gap:10px;flex-wrap:wrap;">

<button onclick="document.getElementById('inicio').scrollIntoView({behavior:'smooth'})"
style="padding:10px 14px;border-radius:8px;background:#22c55e;color:white;border:none;min-width:180px;font-weight:600;">
⬅️ Volver al buscador
</button>

<button onclick="document.getElementById('policia').scrollIntoView({behavior:'smooth'})"
style="padding:10px 14px;border-radius:8px;background:#3b82f6;color:white;border:none;min-width:180px;font-weight:600;">
⬆️ Volver al tema Policía
</button>

</div>
`,



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
  // 🚓 POLICÍA
  pol: "policia",
  poli: "policia",
  polic: "policia",
  policia: "policia",
  patrulla: "policia",
  comisaria: "policia",
  koban: "policia",
  robo: "policia",
  robaron: "policia",
  hurto: "policia",
  perdida: "policia",
  perdi: "policia",
  extravio: "policia",
  denuncia: "policia",
  documentos: "policia",
  pasaporte: "policia",
  billetera: "policia",
  cartera: "policia",
  rina: "policia",
  pelea: "policia",

  // 🚨 EMERGENCIA
  emergencia: "emergencia",
  urgencia: "emergencia",
  urgente: "emergencia",
  ayuda: "emergencia",
  ambulancia: "emergencia",
  "119": "emergencia",
  accidente: "emergencia",
  choque: "emergencia",
  atropello: "emergencia",
  herido: "emergencia",
  sangre: "emergencia",
  inconsciente: "emergencia",
  desmayo: "emergencia",
  bomberos: "emergencia",
  incendio: "emergencia",
  fuego: "emergencia",
  humo: "emergencia",
  rescate: "emergencia",
  explosion: "emergencia",

  // 🏥 SALUD
  hospital: "hospital",
  hos: "hospital",
  doctor: "hospital",
  medico: "hospital",
  farmacia: "hospital",
  enfermo: "hospital",
  fiebre: "hospital",
  dolor: "hospital",

  // 🚕 TRANSPORTE
  tax: "taxi",
  taxi: "taxi",
  uber: "taxi",
  tren: "transporte",
  metro: "transporte",
  bus: "transporte",
  autobus: "transporte",
  estacion: "transporte",
  shinkansen: "transporte",
  jr: "transporte",
  avion: "transporte",
  aeropuerto: "transporte",
  vuelo: "transporte",
  pasaje: "transporte",
  boleto: "transporte",
  ticket: "transporte",
  reserva: "transporte",
  equipaje: "transporte",
  maleta: "transporte",
  valija: "transporte",

  // 🏨 ALOJAMIENTO
  hotel: "hotel",
  hostal: "hotel",
  alojamiento: "hotel",
  dormir: "hotel",
  habitacion: "hotel",
  reservar: "hotel",
  checkin: "hotel",
  checkout: "hotel",
  recepcion: "hotel",
  hostel: "hotel",
  ryokan: "hotel",
  capsula: "hotel",
  capsule: "hotel",
  airbnb: "hotel",

  // 💴 DINERO
  dinero: "dinero",
  yen: "dinero",
  efectivo: "dinero",
  cajero: "dinero",
  atm: "dinero",
  tarjeta: "dinero",
  pagar: "dinero",
  pago: "dinero",
  precio: "dinero",
  costo: "dinero",
  cambio: "dinero",
  retirar: "dinero",
  transferencia: "dinero",
  paypay: "dinero",
  suica: "dinero",
  pasmo: "dinero",

  // 🏪 VIDA DIARIA
  basura: "vida",
  reciclaje: "vida",
  conbini: "vida",
  combini: "vida",
  supermercado: "vida",
  compras: "vida",
  comida: "vida",
  lavanderia: "vida",
  restaurante: "vida",
  restaurantes: "vida",
  ramen: "vida",
  sushi: "vida",
  wifi: "vida",
  internet: "vida",
  bano: "vida",
  baño: "vida",
  toilet: "vida",
  ducha: "vida",
  tienda: "vida",
  konbini: "vida",
  "7eleven": "vida",
  lawson: "vida",
  familymart: "vida",

  // 📄 TRÁMITES
  tramite: "tramites",
  tramites: "tramites",
  documento: "tramites",
  documentos: "tramites",
  papeles: "tramites",
  visa: "tramites",
  migracion: "tramites",
  residencia: "tramites",
  alcaldia: "tramites",
  ayuntamiento: "tramites",
  registro: "tramites",
  zairyu: "tramites",
  zairyucard: "tramites",
  tarjetaresidencia: "tramites",
  direccion: "tramites",
  mudanza: "tramites",
  cambio_direccion: "tramites",
  seguro: "tramites",
  nenkin: "tramites",
  hoken: "tramites",
  impuestos: "tramites"
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

  const palabras = valor.split(/\s+/);
let clave = alias[valor] || valor;

for (const palabra of palabras) {
  if (alias[palabra]) {
    clave = alias[palabra];
    break;
  }
}

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

  // ✅ Auto-buscar SOLO si hay coincidencia exacta (no interrumpe al escribir)
  let tAuto = null;
  if (searchInput) {
    searchInput.addEventListener("input", () => {
      clearTimeout(tAuto);

      tAuto = setTimeout(() => {
        const valor = normalizar(searchInput.value);
        if (!valor) return;

        const clave = alias[valor] || valor;

        // Solo dispara si existe EXACTO
        if (respuestas[clave]) buscar();
      }, 50); // 👈 velocidad (50 rápido, 200 normal, 600 lento)
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
function mostrarGuardar() {
  const guardar = document.getElementById("guardar-pagina");
  const apoyo = document.getElementById("apoyo");

  if (guardar) guardar.style.display = "block";
  if (apoyo) apoyo.style.display = "none";
}

function mostrarApoyo() {
  const guardar = document.getElementById("guardar-pagina");
  const apoyo = document.getElementById("apoyo");

  if (apoyo) apoyo.style.display = "block";
  if (guardar) guardar.style.display = "none";
}
// BOTONES ORIENTACIÓN

const btnGeneral = document.getElementById("btnGeneral");
const btnPersonalizada = document.getElementById("btnPersonalizada");

const servicioModal = document.getElementById("servicioModal");
const cancelarServicioModal = document.getElementById("cancelarServicioModal");
const cerrarServicioModal = document.getElementById("cerrarServicioModal");
if (cancelarServicioModal) {
  cancelarServicioModal.addEventListener("click", cerrarModalServicio);
}
const servicioModalTitulo = document.getElementById("servicioModalTitulo");
const servicioModalTexto = document.getElementById("servicioModalTexto");
const servicioModalWhatsapp = document.getElementById("servicioModalWhatsapp");

function abrirServicioModal(titulo, html, whatsappUrl, btnClass = "general") {
  if (!servicioModal) return;

  servicioModalTitulo.textContent = titulo;
  servicioModalTexto.innerHTML = html;
  servicioModalWhatsapp.href = whatsappUrl;

  servicioModalWhatsapp.classList.remove("general", "personalizada");
  servicioModalWhatsapp.classList.add(btnClass);

  servicioModal.classList.remove("oculto");
  document.body.classList.add("modal-abierto");
}

function cerrarModalServicio() {
  if (!servicioModal) return;
  servicioModal.classList.add("oculto");
  document.body.classList.remove("modal-abierto");
}

if (btnGeneral) {
  btnGeneral.addEventListener("click", function () {
    abrirServicioModal(
      "💬 ORIENTACIÓN GENERAL",
      `
      <p>La guía y las respuestas del buscador están pensadas para resolver la mayoría de las situaciones de forma rápida.</p>

      <p>La orientación general es gratuita y está pensada para ayudarte a entender cómo funcionan muchas cosas en Japón.</p>

      <p>Puede servirte por ejemplo para:</p>

      <ul>
        <li>resolver dudas sencillas</li>
        <li>entender trámites en Japón</li>
        <li>recibir orientación sobre situaciones básicas</li>
        <li>saber qué pasos seguir en ciertos casos</li>
      </ul>

      <p>Si tienes una duda puntual o necesitas una aclaración, puedes contactarnos y trataremos de orientarte.</p>

      <p><strong>Si estás de acuerdo, presiona el botón para contactarnos por WhatsApp.</strong></p>
      `,
      "https://wa.me/819084462319?text=Hola,%20requiero%20orientaci%C3%B3n%20general.",
      "general"
    );
  });
}

if (btnPersonalizada) {
  btnPersonalizada.addEventListener("click", function () {
    abrirServicioModal(
      "📞 AYUDA PERSONALIZADA",
      `
      <p>La ayuda personalizada es cuando tu situación requiere intervención directa, coordinación o acompañamiento.</p>

      <p>Puede incluir por ejemplo:</p>

      <ul>
        <li>llamadas en japonés para resolver una situación</li>
        <li>comunicación con hoteles, hospitales o instituciones</li>
        <li>traducción de documentos sencillos</li>
        <li>acompañamiento como intérprete en hospitales u oficinas</li>
        <li>orientación directa según tu caso específico</li>
        <li>ayuda para planificar tu estadía en Japón</li>
        <li>planificación de viajes o turismo</li>
        <li>propuestas y estimación de costos para tours o viajes</li>
        <li>guía personalizada para visitas o actividades</li>
        <li>acompañamiento para compras o recorridos en la ciudad</li>
      </ul>

      <p>Este tipo de asistencia es un servicio profesional con costo.</p>

      <p><strong>Si estás de acuerdo, presiona el botón para contactarnos por WhatsApp.</strong></p>
      `,
      "https://wa.me/819084462319?text=Hola,%20requiero%20orientaci%C3%B3n%20personalizada.",
      "personalizada"
    );
  });
}

if (cerrarServicioModal) {
  cerrarServicioModal.addEventListener("click", cerrarModalServicio);
}

if (servicioModal) {
  servicioModal.addEventListener("click", function (e) {
    if (e.target === servicioModal) {
      cerrarModalServicio();
    }
  });
}