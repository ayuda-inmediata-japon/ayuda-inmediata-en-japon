// Ayuda Inmediata en Japón - simple FAQ assistant (offline-friendly)
// IMPORTANT: Replace WHATSAPP_NUMBER with your real number in international format (no +, no spaces).
// Example Japan: 81XXXXXXXXXX
const WHATSAPP_NUMBER = "819084462419"; // <-- CAMBIA ESTO
// Aporte voluntario (opcional): reemplaza estos enlaces con los tuyos
const SUPPORT_PAYPAL_URL = "#"; // <-- pega tu link de PayPal.me o botón de PayPal
const SUPPORT_PAYPAY_URL = "#"; // <-- pega tu link/código PayPay (si lo usas)
const SUPPORT_KOFI_URL  = "https://ko-fi.com/ayudainmediatajapon"; // <-- pega tu link Ko-fi

const WHATSAPP_PRESET_MSG = encodeURIComponent("Hola, necesito ayuda en Japón. ¿Me puedes apoyar?");
const WA_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_PRESET_MSG}`;

document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("whatsappTop").href = WA_LINK;
const heroBtn = document.getElementById("whatsappHero");
if (heroBtn) heroBtn.href = WA_LINK;

const pp = document.getElementById("supportPayPal");
if (pp) pp.href = SUPPORT_PAYPAL_URL;
const py = document.getElementById("supportPayPay");
if (py) py.href = SUPPORT_PAYPAY_URL;
const kf = document.getElementById("supportKofi");
if (kf) kf.href = SUPPORT_KOFI_URL;


// PWA install helper
let deferredPrompt = null;
const installBtn = document.getElementById("installBtn");
installBtn.addEventListener("click", async (e) => {
  e.preventDefault();
  if (!deferredPrompt) {
    alert("iPhone/iPad: Safari → Compartir → “Agregar a pantalla de inicio”.\nAndroid/Chrome: Menú → “Instalar app”.");
    return;
  }
  deferredPrompt.prompt();
  await deferredPrompt.userChoice;
  deferredPrompt = null;
});
window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredPrompt = e;
});

// Register service worker
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch(()=>{});
  });
}

// UI helpers
const chat = document.getElementById("chat");
const form = document.getElementById("chatForm");
const input = document.getElementById("userInput");

function addMsg(text, who="bot"){
  const div = document.createElement("div");
  div.className = `msg ${who}`;
  div.textContent = text;
  chat.appendChild(div);
  chat.scrollTop = chat.scrollHeight;
}

// Chips
const chipBox = document.getElementById("chips");
[
  "¿Cuánto dinero necesito por día?",
  "¿Cómo uso el tren?",
  "¿Dónde comer barato?",
  "¿Cómo comprar Wi‑Fi?",
  "Perdí un objeto, ¿qué hago?",
  "Números de emergencia",
  "¿Dónde retiro dinero?",
  "¿El inglés sirve en Japón?"
].forEach(t=>{
  const b=document.createElement("div");
  b.className="chip";
  b.textContent=t;
  b.addEventListener("click", ()=>{
    input.value=t;
    input.focus();
  });
  chipBox.appendChild(b);
});

// Knowledge base
const KB = [
  {
    keys: ["dinero", "gastar", "presupuesto", "por dia", "por día", "diario", "daily", "budget"],
    answer:
`💰 Presupuesto diario (aprox.)

• Económico (sin hotel): ¥3,000–¥5,000/día
• Normal (sin hotel): ¥5,000–¥8,000/día
• Con alojamiento económico: ¥7,000–¥12,000/día

Depende de ciudad y estilo (Kyoto/Osaka similares).
Si quieres un cálculo más real para tu viaje (días, ciudades, tipo de hotel), contáctanos por WhatsApp.`
  },
  {
    keys: ["tren", "metro", "estacion", "estación", "rail", "train", "ic card", "suica", "icoca", "platform", "anden", "andén"],
    answer:
`🚆 Cómo usar el tren en Japón (básico)
1) Abre Google Maps y busca tu destino.
2) Entra a la estación y mira la línea y el andén (platform).
3) Paga con IC card (Suica/ICOCA) o compra ticket.
4) Haz fila y sube al tren.
5) Baja en la estación indicada.

Si estás perdido en la estación, escríbenos por WhatsApp y te guiamos.`
  },
  {
    keys: ["comer", "barato", "restaurante", "food", "cheap", "bento", "konbini", "supermercado"],
    answer:
`🍱 Comer barato en Japón
• Supermercados (por la noche hay descuentos).
• Konbini (7-Eleven, Lawson, FamilyMart).
• Udon / ramen / curry (económico).
• Cadenas como Sukiya o Matsuya.

Ejemplo: bento ¥400–¥600, plato simple ¥600–¥900 (aprox.).`
  },
  {
    keys: ["wifi", "wi-fi", "internet", "sim", "esim", "pocket", "router"],
    answer:
`📶 Internet en Japón (Wi‑Fi / SIM)
Opciones:
• eSIM/SIM (recomendado si viajas solo).
• Pocket Wi‑Fi (mejor si viajan varios).
• Wi‑Fi gratis (hotel/estaciones, pero no siempre confiable).

Si me dices: iPhone/Android + días + ciudades, te recomiendo lo más conveniente.`
  },
  {
    keys: ["pagar", "tarjeta", "efectivo", "cash", "card", "atm", "retirar", "dinero", "withdraw"],
    answer:
`💳 Pagos y retiro de dinero
• En Japón se usa mucho efectivo, pero también tarjetas.
• Para retirar: cajeros de 7-Eleven, Japan Post o Lawson suelen aceptar tarjetas internacionales.

Si el cajero da error, prueba otro 7‑Eleven o Japan Post.`
  },
  {
    keys: ["perdi", "perdí", "objeto", "lost", "found", "olvide", "olvidé", "extravié"],
    answer:
`🧳 Si perdiste un objeto
1) Vuelve al lugar donde lo perdiste.
2) Pregunta al personal del lugar.
3) Busca “Lost & Found” (objetos perdidos).
4) Si fue en tren, pregunta en la estación.

En Japón muchas cosas se recuperan porque suelen entregarlas.`
  },
  {
    keys: ["emergencia", "urgencia", "ambulancia", "policia", "policía", "hospital", "119", "110"],
    answer:
`🚨 Emergencias en Japón
• 119 — Ambulancia / Bomberos
• 110 — Policía

Si no hablas japonés, di: “Help” o “English”.
Pero en muchas situaciones la comunicación continúa en japonés.
Si puedes, pide a alguien (hotel/estación/tienda) que llame por ti.
Si necesitas apoyo para comunicarte, contáctanos por WhatsApp.`
  },
  {
    keys: ["hotel", "check in", "check-in", "alojamiento", "hostel", "airbnb"],
    answer:
`🏨 Hotel / alojamiento (básico)
• En check‑in: muestra pasaporte y la reserva.
• Si no hablan tu idioma: usa traductor del teléfono.

Si me dices la ciudad y tu presupuesto por noche, te sugiero zonas convenientes.`
  },
  {
    keys: ["frases", "japones", "japonés", "phrase"],
    answer:
`🗣️ Frases de emergencia
• Tasukete kudasai — Ayuda, por favor
• Byōin ni ikitai desu — Quiero ir al hospital
• Keisatsu o yonde kudasai — Llame a la policía, por favor
• Wakarimasen — No entiendo
• Sumimasen — Disculpe / Perdón`
  },
  {
    keys: ["propina", "tip"],
    answer: "💡 En Japón no se deja propina. No es costumbre."
  },
  {
    keys: ["basura", "trash", "garbage"],
    answer:
`🗑️ Basura (básico)
A veces no hay basureros en la calle. Lleva tu basura contigo hasta un konbini/estación/supermercado y bótala allí (si hay).`
  }

  ,
  {
    keys: ["ingles", "inglés", "english", "idioma", "translator", "traductor"],
    answer:
`🗣️ Idioma en Japón (realidad práctica)
Aunque a veces hay inglés básico, en muchas situaciones reales el inglés no es suficiente, especialmente en:
• estaciones locales
• hospitales
• trámites
• llamadas telefónicas
• cartas y documentos

Si te sientes bloqueado, podemos orientarte en español y, si hace falta, ayudarte a comunicarte en ese momento por WhatsApp.`
  }
  ,
  {
    keys: ["locker", "lockers", "coin locker", "maleta", "maletas", "equipaje", "guardar equipaje"],
    answer: `**Lockers (coin lockers) / equipaje**
- En Japón es común dejar maletas en *coin lockers* dentro de estaciones grandes.
- También hay lockers en algunos puntos turísticos y centros comerciales.
- Si no encuentras, pregunta: **コインロッカーはどこですか？** (¿Dónde están los lockers?)
- Si necesitas ayuda en tiempo real (por ejemplo, vas con maletas y no sabes qué ruta conviene), escríbenos por WhatsApp.`
  },
  {
    keys: ["baño", "baños", "toilet", "wc", "servicio higiénico", "publico", "público", "restroom"],
    answer: `**Baños públicos (básico)**
- Suelen estar en: estaciones, centros comerciales, combinis, parques y lugares turísticos.
- Señales típicas: **Toilet / WC / お手洗い**
- Si estás apurado y no encuentras, dime dónde estás (estación/zona) y te guío.`
  },
  {
    keys: ["bebedero", "bebederos", "agua", "water", "agua gratis", "dispensador", "dispenser", "refill"],
    answer: `**Agua (bebederos y agua gratis)**
- En algunos parques/estaciones hay bebederos, pero no siempre.
- En muchos restaurantes y hoteles te dan **agua gratis** (jarra/vaso o dispensador).
- Si me dices la zona, te digo qué suele haber cerca.`
  },
  {
    keys: ["cambiar dinero", "cambio de moneda", "cambio", "dólares", "dolares", "exchange", "yenes", "yen", "atm", "cajero"],
    answer: `**Cambio de dinero (muy básico)**
- Lo más simple suele ser: **retirar yenes en ATM** compatibles con tarjetas internacionales (en estaciones grandes, zonas turísticas, etc.).
- También hay **casas de cambio** en áreas turísticas y aeropuertos.
- Si me dices tu tarjeta/país y dónde estás, te digo la forma más práctica.`
  }
];

function normalize(s){
  return (s||"")
    .toLowerCase()
    .normalize("NFD").replace(/\p{Diacritic}/gu,"")
    .replace(/[^a-z0-9\s\-¿\?]/g," ")
    .replace(/\s+/g," ")
    .trim();
}

function isServiceRequest(nq){
  const ks = ["quiero servicio", "quiero el servicio", "necesito el servicio", "servicio", "puedes llamar", "puedes llamarme", "llama", "llamar", "urgente", "ahora mismo", "en tiempo real", "acompaname", "acompáñame", "acompañamiento", "presencial", "traduce todo", "traduccion completa", "traducción completa", "interprete", "intérprete", "interpretación", "contacta al hotel", "llamar al hotel", "hablar con el hotel"];
  return ks.some(k => nq.includes(normalize(k)));
}

function matchAnswer(q){
  const nq = normalize(q);
  if (isServiceRequest(nq)) {
    return "Para ayudarte bien en esta situación y en tiempo real, podemos coordinarlo como servicio.\n\nDime: ¿dónde estás ahora y qué necesitas resolver exactamente?";
  }
  for (const item of KB){
    if (item.keys.some(k => nq.includes(normalize(k)))) return item.answer;
  }
  return `Puedo ayudarte con lo básico 🙂

Prueba preguntando por:
• transporte
• gastos diarios
• comida barata
• alojamiento
• Wi‑Fi
• emergencias

Si necesitas apoyo más específico o en tiempo real, podemos coordinarlo como servicio. Para atención inmediata, contáctanos por WhatsApp.

💙 Si esta orientación te fue útil, puedes colaborar de forma voluntaria para seguir mejorando la página y el servicio.`;
}

// Initial greeting
addMsg("Bienvenido 👋\nAquí puedes recibir orientación general gratuita para entender qué hacer en Japón.\n\nSi necesitas apoyo más específico o en tiempo real, podemos coordinarlo como servicio.\n\n¿En qué puedo ayudarte hoy?");

// Chat submit
form.addEventListener("submit", (e)=>{
  e.preventDefault();
  const q = input.value.trim();
  if (!q) return;
  addMsg(q, "user");
  input.value = "";
  addMsg(matchAnswer(q), "bot");
});


// Feedback (sin backend): envía la sugerencia por WhatsApp
const feedbackBtn = document.getElementById("sendFeedback");
const feedbackText = document.getElementById("feedbackText");
if (feedbackBtn && feedbackText) {
  feedbackBtn.addEventListener("click", () => {
    const msg = (feedbackText.value || "").trim();
    if (!msg) {
      alert("Escribe una sugerencia primero 🙂");
      return;
    }
    const wa = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Sugerencia para Ayuda Inmediata Japón: " + msg)}`;
    window.open(wa, "_blank");
  });
}
