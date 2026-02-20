// Ayuda Inmediata en Japón - v2

// ✅ Configura tu WhatsApp (tu número ya es público en tu proyecto)
const WHATSAPP_NUMBER = "819084462319";

// Mensajes automáticos
function waLink(text){
  const msg = encodeURIComponent(text);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;
}

// Palabras clave -> sección demo (luego lo ampliamos)
const KEYWORDS = [
  { keys: ["taxi", "taxis"], topic: "Taxi en Japón", id: "taxi" },
  { keys: ["tren", "trenes", "train"], topic: "Transporte: Tren", id: "tren" },
  { keys: ["hotel", "reserva", "check-in", "checkin"], topic: "Vida diaria: Hotel", id: "hotel" },
  { keys: ["policía", "policia", "110"], topic: "Emergencia: Policía", id: "policia" },
  { keys: ["ambulancia", "119", "hospital", "fiebre", "dolor"], topic: "Emergencia: Ambulancia / Hospital", id: "ambulancia" },
];

const focus = document.getElementById("focus");
const focusTitle = document.getElementById("focusTitle");
const focusBody = document.getElementById("focusBody");
const focusWA = document.getElementById("focusWA");
const backBtn = document.getElementById("backBtn");
const q = document.getElementById("q");
const waMain = document.getElementById("waMain");

if(waMain){
  waMain.href = waLink("Hola, estoy en Japón y necesito ayuda con:");
}

function openFocus(title, htmlBody, waText){
  focusTitle.textContent = title;
  focusBody.innerHTML = htmlBody;
  focusWA.href = waLink(waText);
  focus.classList.add("show");
  // transición suave breve
  focus.style.opacity = "0";
  requestAnimationFrame(() => {
    focus.style.transition = "opacity .18s ease";
    focus.style.opacity = "1";
  });
}

function closeFocus(){
  focus.style.opacity = "0";
  setTimeout(() => {
    focus.classList.remove("show");
    focus.style.transition = "";
    focus.style.opacity = "";
  }, 160);
}

if(backBtn){
  backBtn.addEventListener("click", (e) => {
    e.preventDefault();
    closeFocus();
  });
}

// Contenido demo (luego lo volvemos completo con tu modelo)
function contentFor(id){
  if(id === "taxi"){
    return {
      title: "🚕 Taxi en Japón",
      body: `
        <p><b>✅ Cómo tomar un taxi</b></p>
        <ul>
          <li>Paradas oficiales (タクシー乗り場) cerca de estaciones, hospitales y hoteles.</li>
          <li>En ciudades grandes puedes detener uno en la calle si la luz está libre.</li>
          <li>En zonas tranquilas es mejor usar una parada o llamar.</li>
        </ul>

        <div class="jpbox">
          <div class="jp">「ここに行きたいです。」</div>
          <div class="es">Quiero ir aquí.</div>
        </div>
        <div class="jpbox">
          <div class="jp">「タクシー乗り場はどこですか？」</div>
          <div class="es">¿Dónde está la parada de taxis?</div>
        </div>
        <div class="jpbox">
          <div class="jp">「だいたいいくらですか？」</div>
          <div class="es">¿Cuánto cuesta aproximadamente?</div>
        </div>

        <p><b>⚠️ Consejo importante</b></p>
        <ul>
          <li>La puerta trasera se abre automáticamente.</li>
          <li>Después de medianoche la tarifa sube.</li>
          <li>Lleva la dirección escrita en japonés.</li>
        </ul>

        <div class="support">
          <small>Si esta guía te ayudó, puedes apoyar el proyecto voluntariamente:</small>
          <img class="qr" src="../paypay-qr.jpg" alt="PayPay QR" />
          <small>(Si aún no subiste el QR, luego lo ponemos.)</small>
        </div>
      `,
      wa: "Hola, estoy en Japón y necesito ayuda con un taxi. Mi situación es:"
    };
  }

  if(id === "tren"){
    return {
      title: "🚆 Transporte: Tren",
      body: `
        <p><b>✅ Qué hacer</b></p>
        <ul>
          <li>Busca tu estación en Google Maps.</li>
          <li>Verifica línea y plataforma.</li>
          <li>Haz fila en el andén.</li>
          <li>Deja salir antes de entrar.</li>
        </ul>
        <div class="jpbox">
          <div class="jp">「〇〇駅に行きたいです。」</div>
          <div class="es">Quiero ir a la estación ○○.</div>
        </div>
        <div class="support">
          <small>Si esta guía te ayudó, puedes apoyar el proyecto voluntariamente.</small>
        </div>
      `,
      wa: "Hola, estoy en Japón y necesito ayuda con trenes. Mi situación es:"
    };
  }

  if(id === "hotel"){
    return {
      title: "🏨 Vida diaria: Hotel",
      body: `
        <p><b>✅ Si no te entienden</b></p>
        <ul>
          <li>Muestra tu reserva en el teléfono.</li>
          <li>Señala tu nombre y la fecha.</li>
        </ul>
        <div class="jpbox">
          <div class="jp">「予約があります。」</div>
          <div class="es">Tengo una reserva.</div>
        </div>
        <div class="jpbox">
          <div class="jp">「チェックインできますか？」</div>
          <div class="es">¿Puedo hacer check-in?</div>
        </div>
        <div class="support">
          <small>Si esta guía te ayudó, puedes apoyar el proyecto voluntariamente.</small>
        </div>
      `,
      wa: "Hola, estoy en Japón y necesito ayuda con un hotel. Mi situación es:"
    };
  }

  // No encontrado
  return {
    title: "🔎 No encontramos esa información todavía.",
    body: `
      <p>Estamos ampliando constantemente esta guía.</p>
      <p><b>🟢 Puedes escribirnos por WhatsApp y contarnos tu situación.</b><br/>Te orientaremos con gusto.</p>
    `,
    wa: "Hola, estoy en Japón y necesito ayuda con: "
  };
}

function detectTopic(text){
  const t = (text || "").toLowerCase().trim();
  if(!t) return null;
  for(const item of KEYWORDS){
    for(const k of item.keys){
      if(t.includes(k)) return item.id;
    }
  }
  return "notfound";
}

function runSearch(){
  const text = q.value;
  const id = detectTopic(text);
  if(!id) return;
  const c = contentFor(id);
  openFocus(c.title, c.body, `Hola, estoy en Japón y necesito ayuda con: ${text}`);
}

// Enter para buscar
if(q){
  q.addEventListener("keydown", (e) => {
    if(e.key === "Enter"){
      e.preventDefault();
      runSearch();
    }
  });
  q.addEventListener("input", () => {
    // si escriben y se detienen, opcional (lo dejamos simple por ahora)
  });
}

// Botones del índice (si existen)
document.querySelectorAll("[data-open]").forEach(btn => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const id = btn.getAttribute("data-open");
    const c = contentFor(id);
    openFocus(c.title, c.body, c.wa);
  });
});