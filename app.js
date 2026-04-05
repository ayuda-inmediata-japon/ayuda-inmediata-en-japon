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
    llegada: `
<h2 id="llegada">✈️ Llegada a Japón</h2>

<img src="AQUI_TU_IMAGEN" style="width:100%; border-radius:10px; margin:10px 0;">

<p><strong>🟢 Presiona una situación para ver qué hacer:</strong></p>
<div class="subtemas-box">

  <details class="subtema-card">
    <summary>🧳 Llegué al aeropuerto y no sé qué hacer</summary>
    <div class="subtema-content">
      <p><strong>Qué hacer:</strong></p>
      <ol>
        <li>Sigue los letreros de salida, tren o taxi.</li>
        <li>Asegúrate de tener internet, dinero y la dirección del hotel.</li>
        <li>Si estás perdido, busca el mostrador de información.</li>
      </ol>
    </div>
  </details>

  <details class="subtema-card">
    <summary>🚆 Cómo ir del aeropuerto a la ciudad</summary>
    <div class="subtema-content">
      <p><strong>Qué hacer:</strong></p>
      <ol>
        <li>Usa Google Maps.</li>
        <li>El tren suele ser la opción más rápida.</li>
        <li>El bus es mejor si llevas maletas.</li>
        <li>El taxi es más caro pero directo.</li>
      </ol>
    </div>
  </details>

  <details class="subtema-card">
    <summary>📶 No tengo internet / SIM</summary>
    <div class="subtema-content">
      <p><strong>Qué hacer:</strong></p>
      <ol>
        <li>Conéctate al WiFi del aeropuerto.</li>
        <li>Compra una SIM o usa eSIM.</li>
        <li>Guarda mapas offline.</li>
      </ol>
    </div>
  </details>

  <details class="subtema-card">
    <summary>💳 Cómo usar tarjeta IC (Suica / Pasmo)</summary>
    <div class="subtema-content">
      <p><strong>Qué hacer:</strong></p>
      <ol>
        <li>Sirve para tren, metro y tiendas.</li>
        <li>Se recarga con efectivo.</li>
        <li>Solo toca al entrar y salir.</li>
      </ol>
    </div>
  </details>

  <details class="subtema-card">
    <summary>🏨 Cómo llegar a mi hotel</summary>
    <div class="subtema-content">
      <p><strong>Qué hacer:</strong></p>
      <ol>
        <li>Guarda la dirección en japonés.</li>
        <li>Muéstrala si necesitas ayuda.</li>
        <li>Usa Google Maps.</li>
      </ol>
    </div>
  </details>

  <details class="subtema-card">
    <summary>💱 Cambiar dinero o retirar efectivo</summary>
    <div class="subtema-content">
      <p><strong>Qué hacer:</strong></p>
      <ol>
        <li>Puedes cambiar en el aeropuerto.</li>
        <li>También retirar en ATM.</li>
        <li>Lleva efectivo.</li>
      </ol>
    </div>
  </details>

  <details class="subtema-card">
    <summary>📦 Enviar equipaje (Kuroneko / Takkyubin)</summary>
    <div class="subtema-content">
      <p><strong>Qué hacer:</strong></p>
      <ol>
        <li>Puedes enviar maletas al hotel o destino.</li>
        <li>Está disponible en aeropuerto, hoteles y konbini.</li>
        <li>Necesitas la dirección del hotel.</li>
        <li>Confirma que el hotel reciba equipaje.</li>
      </ol>
    </div>
  </details>

</div>

<h3>🌐 Traductores recomendados</h3>

<p>🔵 <a href="https://www.deepl.com/translator#es/ja/" target="_blank">Traductor español → japonés (DeepL)</a></p>
<p>🟡 <a href="https://translate.google.com/?sl=es&tl=ja&op=translate" target="_blank">Traductor español → japonés (Google)</a></p>
<p>🟢 <a href="https://chat.openai.com/" target="_blank">ChatGPT (explicar o traducir una situación)</a></p>

<h3>🗣️ Frases útiles</h3>

<ul style="line-height:1.9">

<li>
<strong>Español</strong><br>
¿Dónde está la estación?<br><br>
<strong>Romaji</strong><br>
Eki wa doko desu ka?<br><br>
<strong>日本語</strong><br>
<span style="font-size:26px;font-weight:bold;">駅はどこですか？</span>
</li>

<li>
<strong>Español</strong><br>
Quiero ir a este hotel<br><br>
<strong>Romaji</strong><br>
Kono hoteru ni ikitai desu<br><br>
<strong>日本語</strong><br>
<span style="font-size:26px;font-weight:bold;">このホテルに行きたいです</span>
</li>

<li>
<strong>Español</strong><br>
Quiero enviar esta maleta al hotel<br><br>
<strong>Romaji</strong><br>
Kono nimotsu o hoteru ni okuritai desu<br><br>
<strong>日本語</strong><br>
<span style="font-size:26px;font-weight:bold;">この荷物をホテルに送りたいです</span>
</li>

</ul>

<h3>🌍 Si tienes dificultad con el idioma</h3>

<p><strong>📱 Puedes mostrar este mensaje:</strong></p>

<ul style="line-height:1.9">

<li>
<strong>Español</strong><br>
Disculpe, no hablo mucho japonés.<br><br>
<strong>Romaji</strong><br>
Sumimasen, nihongo ga amari hanasemasen.<br><br>
<strong>日本語</strong><br>
<span style="font-size:26px;font-weight:bold;">すみません、日本語があまり話せません。</span>
</li>

<li>
<strong>Español</strong><br>
¿Puedo usar un traductor para explicarme?<br><br>
<strong>Romaji</strong><br>
Honyaku apuri o tsukatte setsumei shite mo ii desu ka?<br><br>
<strong>日本語</strong><br>
<span style="font-size:26px;font-weight:bold;">翻訳アプリを使って説明してもいいですか？</span>
</li>

</ul>

<div style="background:#2a2112;border:2px solid #f0b93a;box-shadow:0 0 14px rgba(240,185,58,.35);padding:18px;border-radius:16px;margin-top:18px;">
<h3 style="color:#f0c24b;margin-top:0;">💡 Consejo importante</h3>
<p style="margin-bottom:0;">
Primero resuelve: internet, transporte, hotel y efectivo.
</p>
</div>
<hr style="margin-top:35px;border:none;border-top:1px solid #333;">

<p style="margin-bottom:14px;font-weight:bold;">
🙏 Si esta información te fue útil, puedes apoyar este proyecto:
</p>
<div style="display:flex;gap:10px;margin-top:10px;width:100%;">

  <button onclick="navigator.share({title:'Ayuda Inmediata en Japón',url:window.location.href})"
  style="flex:1;background:#3a7cc4;color:white;padding:12px;font-size:16px;border:none;border-radius:10px;font-weight:bold;">
  ↗ Compartir
  </button>

  <button onclick="mostrarGuardar()"
  style="flex:1;background:#3a7cc4;color:white;padding:12px;font-size:16px;border:none;border-radius:10px;font-weight:bold;">
  • Guardar
  </button>

  <button onclick="irAApoyo()"
  style="flex:1;background:#e74c3c;color:white;padding:12px;font-size:16px;border:none;border-radius:10px;font-weight:bold;">
  ❤️ Apoyar
  </button>

</div

<!-- BLOQUE GUARDAR (OBLIGATORIO) -->
<div id="guardar-pagina" style="display:none;margin-top:14px;">

  <p><strong>📌 Cómo guardar esta página</strong></p>

  <p><b>iPhone / iPad:</b><br>
  Pulsa compartir y guarda la página.</p>

  <p><b>Android:</b><br>
  Abre el menú (⋮) y guarda la página.</p>

  <p><b>PC:</b><br>
  Presiona Ctrl + D o usa ⭐</p>

</div>

<!-- FILA 2 -->
<div style="display:flex;gap:10px;margin-top:12px;">

  <button onclick="document.getElementById('buscador').scrollIntoView({behavior:'smooth'})"
  style="flex:1;background:#25D366;color:white;padding:12px;font-size:16px;border:none;border-radius:10px;font-weight:bold;">
  ⬅ Volver al buscador
  </button>

  <button onclick="document.getElementById('llegada').scrollIntoView({behavior:'smooth'})"
  style="flex:1;background:#25D366;color:white;padding:12px;font-size:16px;border:none;border-radius:10px;font-weight:bold;">
  ⬆ Volver al tema
  </button>

</div>
`,
salud: `
<h2 id="salud">🏥 Salud en Japón</h2>

<p><strong>En Japón puedes ir directamente a una clínica o a un hospital.</strong></p>

<p>Su función es atenderte, orientarte y ayudarte según tus síntomas, aunque no hables bien japonés.</p>

<p><strong>Importante:</strong> en Japón muchas veces conviene ir primero a una <strong>clínica</strong> si no es una urgencia grave.</p>

<p><strong>Clínica (クリニック)</strong>: atiende síntomas comunes, fiebre, dolor, resfrío, malestar general y consultas normales.</p>

<img src="salud1.jpg" class="info-img" alt="Clínica en Japón">
<img src="salud2.jpg" class="info-img" alt="Hospital en Japón">
<img src="salud3.jpg" class="info-img" alt="Farmacia en Japón">

<p><strong>Si necesitas ayuda médica urgente:</strong></p>

<p><strong>Ambulancia / Bomberos: 119</strong></p>
<p><strong>🟢 Presiona una situación para ver qué hacer:</strong></p>

<div class="subtemas-box">

  <details class="subtema-card">
    <summary>🏥 Quiero ir a una clínica</summary>
    <div class="subtema-content">
      <p><strong>Qué hacer:</strong></p>
      <ol>
        <li>Busca una clínica cercana o pregunta en tu hotel.</li>
        <li>Lleva pasaporte y seguro si tienes.</li>
        <li>Explica tus síntomas con calma.</li>
        <li>Si no hablas japonés, usa un traductor.</li>
      </ol>

      <p><strong>Información útil para la consulta:</strong></p>
      <ul>
        <li>Qué sientes</li>
        <li>Desde cuándo empezó</li>
        <li>Si tienes fiebre</li>
        <li>Si tomaste alguna medicina</li>
      </ul>

      <p><strong>Frases útiles:</strong></p>
      <p>具合が悪いです<br>Guai ga warui desu<br>Me siento mal</p>
      <p>熱があります<br>Netsu ga arimasu<br>Tengo fiebre</p>
      <p>ここが痛いです<br>Koko ga itai desu<br>Me duele aquí</p>
    </div>
  </details>

  <details class="subtema-card">
    <summary>🚑 Es una emergencia grave</summary>
    <div class="subtema-content">
      <p><strong>Qué hacer:</strong></p>
      <ol>
        <li>Llama al <strong>119</strong>.</li>
        <li>Di tu ubicación con calma.</li>
        <li>Explica si hay dolor fuerte, sangrado, desmayo o dificultad para respirar.</li>
        <li>Espera la ambulancia.</li>
      </ol>

      <p><strong>Información importante:</strong></p>
      <ul>
        <li>Dirección o lugar donde estás</li>
        <li>Qué pasó</li>
        <li>Edad aproximada de la persona</li>
        <li>Si está consciente o no</li>
      </ul>

      <p><strong>Frases útiles:</strong></p>
      <p>救急車を呼んでください<br>Kyuukyuusha o yonde kudasai<br>Llame a una ambulancia por favor</p>
      <p>息が苦しいです<br>Iki ga kurushii desu<br>Me cuesta respirar</p>
      <p>強い痛みがあります<br>Tsuyoi itami ga arimasu<br>Tengo un dolor fuerte</p>
    </div>
  </details>

  <details class="subtema-card">
    <summary>💊 Quiero comprar medicina</summary>
    <div class="subtema-content">
      <p><strong>Qué hacer:</strong></p>
      <ol>
        <li>Busca una farmacia o drugstore.</li>
        <li>Explica tu síntoma al personal.</li>
        <li>Para síntomas leves muchas medicinas se compran sin receta.</li>
        <li>Si el problema parece serio, te dirán que vayas a una clínica.</li>
      </ol>

      <p><strong>Información útil:</strong></p>
      <ul>
        <li>Fiebre</li>
        <li>Dolor de garganta</li>
        <li>Tos</li>
        <li>Dolor de cabeza</li>
        <li>Dolor estomacal</li>
      </ul>

      <p><strong>Frases útiles:</strong></p>
      <p>薬がほしいです<br>Kusuri ga hoshii desu<br>Quiero medicina</p>
      <p>風邪です<br>Kaze desu<br>Estoy resfriado</p>
      <p>頭が痛いです<br>Atama ga itai desu<br>Me duele la cabeza</p>
    </div>
  </details>

  <details class="subtema-card">
    <summary>🏥 Necesito ir a un hospital grande</summary>
    <div class="subtema-content">
      <p><strong>Qué hacer:</strong></p>
      <ol>
        <li>Ve si tu caso necesita hospital y no solo clínica.</li>
        <li>Algunos hospitales piden referencia.</li>
        <li>Puede haber más espera y más costo.</li>
        <li>Lleva tus documentos y explica bien el problema.</li>
      </ol>

      <p><strong>También debes saber:</strong></p>
      <ul>
        <li>Si no es urgencia, puede convenir clínica primero</li>
        <li>Un hospital grande puede cobrar más</li>
        <li>Algunos no tienen personal que hable español</li>
      </ul>

      <p><strong>Frases útiles:</strong></p>
      <p>病院に行きたいです<br>Byouin ni ikitai desu<br>Quiero ir a un hospital</p>
      <p>紹介状は必要ですか？<br>Shoukaijou wa hitsuyou desu ka?<br>¿Necesito referencia?</p>
      <p>診察を受けたいです<br>Shinsatsu o uketai desu<br>Quiero una consulta médica</p>
    </div>
  </details>

  <details class="subtema-card">
    <summary>💴 No tengo seguro</summary>
    <div class="subtema-content">
      <p><strong>Qué hacer:</strong></p>
      <ol>
        <li>Igual pueden atenderte.</li>
        <li>Explica que no tienes seguro.</li>
        <li>Prepárate para pagar el costo completo.</li>
        <li>Pregunta el monto aproximado antes si es posible.</li>
      </ol>

      <p><strong>También debes saber:</strong></p>
      <ul>
        <li>Una clínica suele costar menos que un hospital</li>
        <li>La urgencia puede costar más</li>
        <li>Normalmente se paga el mismo día</li>
      </ul>

      <p><strong>Frases útiles:</strong></p>
      <p>保険がありません<br>Hoken ga arimasen<br>No tengo seguro</p>
      <p>いくらぐらいかかりますか？<br>Ikura gurai kakarimasu ka?<br>¿Cuánto costará aproximadamente?</p>
      <p>現金で払えます<br>Genkin de haraemasu<br>Puedo pagar en efectivo</p>
    </div>
  </details>

  <details class="subtema-card">
    <summary>🌐 No hablo bien japonés</summary>
    <div class="subtema-content">
      <p><strong>Qué hacer:</strong></p>
      <ol>
        <li>Habla despacio y con calma.</li>
        <li>Muestra frases escritas.</li>
        <li>Usa traductor si es necesario.</li>
        <li>Pide ayuda en recepción o en tu hotel.</li>
      </ol>

      <p><strong>Frase útil:</strong></p>
      <p>翻訳アプリを使ってもいいですか？<br>Honyaku apuri o tsukatte mo ii desu ka?<br>¿Puedo usar un traductor para explicarme?</p>
    </div>
  </details>

</div>

<h3>🌐 Si tienes dificultad con el idioma</h3>

<p><strong>📱 Puedes mostrar este mensaje:</strong></p>

<ul style="line-height:1.9">
<li>

<strong>Español</strong><br>
Disculpe, no hablo mucho japonés.<br>

<strong>Romaji</strong><br>
Sumimasen, nihongo ga amari hanasemasen.<br>

<strong>日本語</strong><br>
<span style="font-size:24px;font-weight:bold;">すみません、日本語があまり話せません。</span>
</li>

<br>

<li>

<strong>Español</strong><br>
¿Puedo usar un traductor para explicarme?<br>

<strong>Romaji</strong><br>
Honyaku apuri o tsukatte setsumei shite mo ii desu ka?<br>

<strong>日本語</strong><br>
<span style="font-size:24px;font-weight:bold;">翻訳アプリを使って説明してもいいですか？</span>
</li>

</ul>

<p>
Si no puedes comunicarte bien en japonés, usa frases cortas y claras.<br>
No es necesario instalar una aplicación. Puedes mostrar este texto directamente.
</p>

<h3>🌐 Traductores recomendados</h3>

<p>🔵 <a href="https://www.deepl.com/translator" target="_blank">
Traductor español → japonés (DeepL)
</a></p>

<p>🟡 <a href="https://translate.google.com/" target="_blank">
Traductor español → japonés (Google)
</a></p>

<p>🟢 <a href="https://chat.openai.com" target="_blank">
ChatGPT (explicar o traducir una situación médica)
</a></p>

<h3>🗣️ Frases útiles para hablar con personal médico</h3>

<ul style="line-height:1.9">

<li>

<strong>Español</strong><br>
Ayuda por favor<br>

<strong>Romaji</strong><br>
Tasukete kudasai<br>

<strong>日本語</strong><br>
<span style="font-size:26px;font-weight:bold;">助けてください</span>

</li>

<br>

<li>

<strong>Español</strong><br>
Me siento mal<br>

<strong>Romaji</strong><br>
Guai ga warui desu<br>

<strong>日本語</strong><br>
<span style="font-size:24px;font-weight:bold;">具合が悪いです</span>

</li>

<br>

<li>

<strong>Español</strong><br>
Tengo fiebre<br>

<strong>Romaji</strong><br>
Netsu ga arimasu<br>

<strong>日本語</strong><br>
<span style="font-size:24px;font-weight:bold;">熱があります</span>

</li>

<br>

<li>

<strong>Español</strong><br>
Me duele aquí<br>

<strong>Romaji</strong><br>
Koko ga itai desu<br>

<strong>日本語</strong><br>
<span style="font-size:24px;font-weight:bold;">ここが痛いです</span>

</li>

<br>

<li>

<strong>Español</strong><br>
Necesito un doctor<br>

<strong>Romaji</strong><br>
Isha ga hitsuyou desu<br>

<strong>日本語</strong><br>
<span style="font-size:24px;font-weight:bold;">医者が必要です</span>

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

<p>
En Japón, si no es una emergencia grave, muchas veces es mejor ir primero a una clínica.
</p>

<p>
Los hospitales grandes pueden costar más, pedir referencia y tardar más.
</p>

<p>
Si puedes explicar tus síntomas con calma, todo será más fácil.
</p>

</div>

<div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:18px;">

<button onclick="navigator.share({title:'Ayuda Inmediata en Japón',text:'Información útil sobre salud en Japón',url:window.location.href})"
style="padding:8px 14px;border-radius:6px;">
↗ Compartir
</button>

<button onclick="mostrarGuardar()"
style="padding:8px 14px;border-radius:6px;">
• Guardar
</button>

<button onclick="irAApoyo()" style="padding:8px 14px;border-radius:6px;">
❤️ Apoyar
</button>

<div id="guardar-pagina" style="display:none;">
<p><strong>📌 Cómo guardar esta página</strong></p>

<p><b>En iPhone / iPad:</b><br>
Pulsa el botón compartir del navegador y selecciona “Añadir a pantalla de inicio”.
</p>

<p><b>En Android:</b><br>
Pulsa el menú del navegador (⋮) y selecciona “Añadir a pantalla de inicio”.
</p>

<p><b>En computadora:</b><br>
Pulsa la estrella ⭐ del navegador o presiona Ctrl + D.
</p>
</div>

</div>

<p style="font-size:12px;color:#777;margin-top:12px;">
También es posible colaborar utilizando tu apoyo para mantener esta guía.
</p>

</div>

<div style="margin-top:30px;display:flex;gap:10px;flex-wrap:wrap;">

<button onclick="document.getElementById('buscador').scrollIntoView({behavior:'smooth'})"
style="padding:10px 10px;border-radius:8px;">
⬅️ Volver al buscador
</button>

<button onclick="document.getElementById('salud').scrollIntoView({behavior:'smooth'})"
style="padding:10px 10px;border-radius:8px;">
⬆️ Volver al tema Salud
</button>

</div>
`,
emergencia: `
<h2 id="emergencia">🚨 Emergencia en Japón</h2>

<p><strong>En Japón existen servicios especializados para cada tipo de emergencia. Saber a quién llamar puede ayudarte a actuar rápido y correctamente.</strong></p>

<p><strong>📞 Números importantes:</strong></p>
<p><strong>🚑 Ambulancia / 🔥 Bomberos: 119</strong></p>
<p><strong>🚓 Policía: 110</strong></p>

<img src="TU_IMAGEN_GENERAL_EMERGENCIA" class="info-img" alt="Emergencia en Japón">

<p><strong>🟢 Presiona una situación para ver qué hacer:</strong></p>

<div class="subtemas-box">

<details class="subtema-card">
<summary>🚑 Necesito una ambulancia</summary>
<div class="subtema-content">

<img src="TU_IMAGEN_AMBULANCIA" class="info-img" alt="Ambulancia en Japón">

<p><strong>Qué es:</strong></p>
<p>La ambulancia en Japón es un servicio de emergencia médica gratuito que llega rápidamente y te traslada al hospital adecuado.</p>

<p><strong>Qué hacer:</strong></p>
<ol>
<li>Llama al 119</li>
<li>Di “Ambulance” o “Help”</li>
<li>Indica tu ubicación</li>
<li>Sigue las instrucciones</li>
</ol>

<p><strong>Importante:</strong></p>
<p>En una emergencia real es mejor llamar a una ambulancia que usar taxi. El taxi no brinda atención médica.</p>

<p><strong>Frases útiles:</strong></p>
<p>救急車をお願いします<br>Kyūkyūsha o onegaishimasu</p>
<p>助けてください<br>Tasukete kudasai</p>

</div>
</details>

<details class="subtema-card">
<summary>🚓 Necesito a la policía</summary>
<div class="subtema-content">

<img src="TU_IMAGEN_POLICIA" class="info-img" alt="Policía en Japón">

<p><strong>Qué hacer:</strong></p>
<ol>
<li>Llama al 110</li>
<li>O acude a un <strong>Koban</strong></li>
<li>Explica la situación</li>
</ol>

<p>La policía en Japón ayuda en robos, pérdidas, accidentes y orientación.</p>

<p><strong>Frases útiles:</strong></p>
<p>警察を呼んでください<br>Keisatsu o yonde kudasai</p>
<p>助けてください<br>Tasukete kudasai</p>

</div>
</details>

<details class="subtema-card">
<summary>🔥 Incendio o rescate</summary>
<div class="subtema-content">

<img src="TU_IMAGEN_BOMBEROS" class="info-img" alt="Bomberos en Japón">

<p><strong>Qué hacer:</strong></p>
<ol>
<li>Llama al 119</li>
<li>Evacúa sin usar ascensor</li>
<li>Aléjate del humo</li>
<li>Sigue las instrucciones de emergencia</li>
</ol>

<p>Los bomberos responden a incendios y rescates.</p>

<p><strong>Frases útiles:</strong></p>
<p>火事です<br>Kaji desu</p>
<p>助けてください<br>Tasukete kudasai</p>

</div>
</details>

<details class="subtema-card">
<summary>🌏 Terremoto o tsunami</summary>
<div class="subtema-content">

<img src="TU_IMAGEN_DESASTRES" class="info-img" alt="Desastres en Japón">

<p><strong>Terremoto:</strong></p>
<ul>
<li>Protégete debajo de una mesa o estructura firme</li>
<li>Cubre tu cabeza</li>
<li>No corras inmediatamente</li>
</ul>

<p><strong>Tsunami:</strong></p>
<ul>
<li>Aléjate del mar</li>
<li>Dirígete a zonas altas</li>
<li>No esperes a ver el agua para evacuar</li>
</ul>

<p><strong>Hinambasho (避難場所):</strong></p>
<p>Son zonas seguras de evacuación. Están señalizadas en calles, escuelas, parques y edificios públicos.</p>

<p><strong>Frases útiles:</strong></p>
<p>避難場所はどこですか？<br>Hinan basho wa doko desu ka?</p>
<p>高いところへ逃げてください<br>Takai tokoro e nigete kudasai</p>

</div>
</details>

</div>

<h3>🌐 Si tienes dificultad con el idioma</h3>

<p>Si no puedes comunicarte bien en japonés, puedes usar un traductor desde tu teléfono o dispositivo. No es necesario instalar una aplicación. Puedes abrir un traductor directamente desde tu navegador y mostrar el texto.</p>

<h3>🌐 Traductores recomendados</h3>

<p>🔵 <a href="https://www.deepl.com/translator#es/ja/" target="_blank">Traductor español → japonés (DeepL)</a></p>
<p>🟡 <a href="https://translate.google.com/?sl=es&tl=ja" target="_blank">Traductor español → japonés (Google)</a></p>
<p>🟢 <a href="https://chat.openai.com/" target="_blank">ChatGPT (explicar o traducir una situación)</a></p>

<h3>🗣️ Frases útiles en una emergencia</h3>

<p><strong>Español:</strong><br>Ayuda por favor</p>
<p><strong>Romaji:</strong><br>Tasukete kudasai</p>
<p><strong>日本語:</strong><br><span style="color:red;font-size:22px;"><strong>助けてください</strong></span></p>

<!-- 💡 CONSEJO IMPORTANTE -->
<div style="
border:3px solid #f5c542;
border-radius:16px;
padding:18px;
margin-top:25px;
background:linear-gradient(145deg,#1a1a1a,#111);
box-shadow:0 0 12px rgba(245,197,66,0.4);
animation:brilloConsejo 4s ease-in-out infinite;
">

<h3 style="
color:#f5c542;
font-size:20px;
margin-bottom:12px;
">
💡 Consejo importante
</h3>

<p style="line-height:1.6;">
En Japón los servicios de emergencia son rápidos y confiables. No dudes en usarlos si realmente los necesitas.
</p>

<p style="line-height:1.6;">
Si es una emergencia médica real, es mejor llamar una ambulancia que usar taxi.
</p>

<p style="line-height:1.6;">
En caso de desastre, busca los puntos de evacuación señalizados (<strong>避難場所</strong>).
</p>

</div>

<hr style="margin-top:35px;border:none;border-top:1px solid #333;">
</div>

<p>
🙏 Si esta información te fue útil, puedes:
</p>

<div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:15px">

<button onclick="navigator.share({title:'Ayuda Inmediata en Japón',url:window.location.href})"
style="padding:8px 14px;border-radius:6px;border:1px solid #444;background:#1e1e1e;color:#fff;">
↗ Compartir
</button>

<button onclick="mostrarGuardar()"
style="padding:8px 14px;border-radius:6px;border:1px solid #444;background:#1e1e1e;color:#fff;">
• Guardar
</button>

<button onclick="irAApoyo()"
style="padding:8px 14px;border-radius:6px;border:1px solid #444;background:#1e1e1e;color:#ff8a8a;">
❤️ Apoyar
</button>

</div>

<div id="guardar-pagina" style="display:none;margin-top:18px;padding:12px;border-radius:8px;">
<p><strong>📌 Cómo guardar esta página</strong></p>

<p><b>En iPhone / iPad:</b><br>
Pulsa el botón compartir del navegador y elige <b>"Añadir a favoritos"</b> o <b>"Añadir a pantalla de inicio"</b>.
</p>

<p><b>En Android:</b><br>
Pulsa el menú del navegador (⋮) y selecciona <b>"Añadir a favoritos"</b> o <b>"Añadir a pantalla de inicio"</b>.
</p>

<p><b>En computadora:</b><br>
Pulsa la estrella ⭐ del navegador o presiona <b>Ctrl + D</b>.
</p>
</div>

<p style="font-size:12px;color:#777;margin-top:8px">
También es posible colaborar utilizando tarjeta de crédito o débito a través de estas plataformas.
</p>

<div style="margin-top:30px;display:flex;gap:10px;flex-wrap:wrap">

<button onclick="document.getElementById('buscador').scrollIntoView({behavior:'smooth'})"
style="padding:10px 14px;border-radius:8px;border:none;background:#2ecc71;color:white;font-weight:700;">
⬅️ Volver al buscador
</button>

<button onclick="document.getElementById('emergencia').scrollIntoView({behavior:'smooth'})"
style="padding:10px 14px;border-radius:8px;border:none;background:#3498db;color:white;font-weight:700;">
⬆️ Volver al tema Emergencia
</button>

</div>

`,
policia: `
<h2 id="policia">🚓 Policía en Japón</h2>

<p><strong>En Japón la policía forma parte del sistema nacional conocido como Keisatsuchō (警察庁).</strong></p>

<p>Su función es ayudar, orientar y proteger a las personas. Puedes acercarte con tranquilidad si necesitas ayuda.</p>

<p><strong>Importante:</strong> en Japón la policía no acepta dinero ni favores. Las leyes se respetan y los procedimientos son formales.</p>

<p><strong>Koban (交番)</strong>: pequeñas estaciones de policía que se encuentran en barrios, estaciones de tren y zonas comerciales.</p>

<img src="koban.jpg" class="info-img" alt="Koban en Japón">

<p><strong>Si necesitas ayuda de la policía, busca un Koban.</strong> Puedes pedir orientación o ayuda.</p>

<p><strong>Policía: 110</strong></p>
<p><strong>🟢 Presiona una situación para ver qué hacer:</strong></p>
<div class="subtemas-box">

  <details class="subtema-card">
    <summary>🚨 Me robaron algo o fui víctima de estafa</summary>
    <div class="subtema-content">
      <p><strong>Qué hacer:</strong></p>
      <ol>
        <li>Mantén la calma.</li>
        <li>Busca un Koban cercano o llama al <strong>110</strong>.</li>
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
      <p>盗まれました<br>Nusumaremashita<br>Me robaron</p>

      <p>詐欺にあったかもしれません<br>Sagi ni atta kamo shiremasen<br>Creo que fui víctima de una estafa</p>

      <p>警察に相談したいです<br>Keisatsu ni soudan shitai desu<br>Quiero consultar con la policía</p>
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

      <p><strong>Información que conviene recabar:</strong></p>
      <ul>
        <li>Color y tamaño del objeto</li>
        <li>Marca o características</li>
        <li>Qué contenía dentro</li>
        <li>Lugar aproximado donde lo perdiste</li>
        <li>Hora aproximada</li>
        <li>Fotos del objeto o del lugar, si las tienes</li>
      </ul>

      <p><strong>Importante:</strong> en Japón los objetos perdidos no siempre aparecen el mismo día.</p>

      <p>Muchas veces alguien entrega el objeto en un Koban y luego es trasladado al centro policial de objetos perdidos, por lo que puede tardar varios días en aparecer.</p>

      <p>Si no aparece ese día, vuelve a preguntar más adelante.</p>

      <p><strong>También debes saber:</strong> a veces el Koban puede estar temporalmente vacío porque el oficial salió a atender otro caso. Si eso ocurre, espera unos minutos o busca otro Koban cercano.</p>

      <p><strong>Gratificación:</strong> en Japón la persona que encontró y devolvió el objeto puede recibir una gratificación, generalmente entre 5% y 20% del valor, o un pequeño obsequio de agradecimiento.</p>

      <p><strong>Frases útiles:</strong></p>
      <p>財布を落としました<br>Saifu o otoshimashita<br>Perdí mi billetera</p>

      <p>パスポートをなくしました<br>Pasupooto o nakushimashita<br>Perdí mi pasaporte</p>

      <p>落とし物を探しています<br>Otoshimono o sagashite imasu<br>Estoy buscando un objeto perdido</p>
    </div>
  </details>

  <details class="subtema-card">
    <summary>🚗 Tuve un accidente</summary>
    <div class="subtema-content">
      <p><strong>Qué hacer:</strong></p>
      <ol>
        <li>Si hay heridos, llama al <strong>119</strong>.</li>
        <li>Si es un accidente de tránsito, llama al <strong>110</strong>.</li>
        <li>Espera la llegada de la policía.</li>
        <li>Si puedes, toma fotos del lugar y de los vehículos o daños.</li>
      </ol>

      <p><strong>Frase útil:</strong></p>
      <p>事故です<br>Jiko desu<br>Es un accidente</p>

      <p>助けてください<br>Tasukete kudasai<br>Ayuda por favor</p>
    </div>
  </details>

  <details class="subtema-card">
    <summary>🧭 Estoy perdido</summary>
    <div class="subtema-content">
      <p><strong>Qué hacer:</strong></p>
      <ol>
        <li>Busca un Koban o una estación de tren cercana.</li>
        <li>Muestra la dirección de tu hotel o destino.</li>
        <li>Pide orientación con calma.</li>
      </ol>

      <p><strong>Frases útiles:</strong></p>
      <p>道に迷いました<br>Michi ni mayoimashita<br>Estoy perdido</p>

      <p>この場所はどこですか？<br>Kono basho wa doko desu ka?<br>¿Dónde estoy?</p>

      <p>この場所に行きたいです<br>Kono basho ni ikitai desu<br>Quiero ir a este lugar</p>
    </div>
  </details>

  <details class="subtema-card">
    <summary>📍 Cómo encontrar un Koban</summary>
    <div class="subtema-content">
      <p>Los Koban suelen estar cerca de:</p>
      <ul>
        <li>Estaciones de tren</li>
        <li>Zonas comerciales</li>
        <li>Intersecciones importantes</li>
        <li>Barrios residenciales</li>
      </ul>

      <p>Busca el letrero <strong>KOBAN</strong> o el símbolo de policía.</p>

      <p><strong>Frase útil:</strong></p>
      <p>交番はどこですか？<br>Koban wa doko desu ka?<br>¿Dónde está el Koban?</p>
    </div>
  </details>

</div>

<h3>🌐 Si tienes dificultad con el idioma</h3>

<p><strong>📱 Puedes mostrar este mensaje al policía:</strong></p>

<ul style="line-height:1.9">

<li>
<strong>Español</strong><br>
Disculpe, no hablo mucho japonés.<br>

<strong>Romaji</strong><br>
Sumimasen, nihongo ga amari hanasemasen.<br>

<strong>日本語</strong><br>
<span style="font-size:24px;font-weight:bold;">
すみません、日本語があまり話せません。
</span>
</li>

<br>

<li>
<strong>Español</strong><br>
¿Puedo usar un traductor para explicarme?<br>

<strong>Romaji</strong><br>
Honyaku apuri o tsukatte setsumei shite mo ii desu ka?<br>

<strong>日本語</strong><br>
<span style="font-size:24px;font-weight:bold;">
翻訳アプリを使って説明してもいいですか？
</span>
</li>

</ul>


<p>
Si no puedes comunicarte bien en japonés, puedes utilizar cualquier traductor desde tu teléfono o dispositivo.
No es necesario instalar una aplicación. Puedes abrir un traductor directamente desde tu navegador y mostrar el texto al policía.
</p>


<h3>🌐 Traductores recomendados</h3>

<p>🔵 <a href="https://www.deepl.com/translator#es/ja/" target="_blank">
Traductor español → japonés (DeepL)
</a></p>

<p>🟡 <a href="https://translate.google.com/?sl=es&tl=ja" target="_blank">
Traductor español → japonés (Google)
</a></p>

<p>🟢 <a href="https://chat.openai.com" target="_blank">
ChatGPT (explicar o traducir una situación)
</a></p>oi



<h3>🗣️ Frases útiles para hablar con la policía</h3>

<ul style="line-height:1.9">

<li>

<strong>Español</strong><br>
Ayuda por favor<br>

<strong>Romaji</strong><br>
Tasukete kudasai<br>

<strong>日本語</strong><br>
<span style="font-size:26px;font-weight:bold;color:#ff4d4d;">
助けてください
</span>

</li>

<br>

<li>

<strong>Español</strong><br>
¿Dónde está la policía?<br>

<strong>Romaji</strong><br>
Keisatsu wa doko desu ka?<br>

<strong>日本語</strong><br>
<span style="font-size:24px;font-weight:bold;">
警察はどこですか？
</span>

</li>

<br>

<li>

<strong>Español</strong><br>
¿Dónde está el Koban?<br>

<strong>Romaji</strong><br>
Koban wa doko desu ka?<br>

<strong>日本語</strong><br>
<span style="font-size:24px;font-weight:bold;">
交番はどこですか？
</span>

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

<p>
En Japón muchas personas entregan objetos perdidos a la policía o a oficinas de objetos perdidos.
</p>

<p>
Los objetos no siempre aparecen el mismo día. A veces primero se entregan en un <strong>Koban</strong> y luego se registran en el sistema central.
</p>

<p>
Si no aparece ese mismo día, vuelve a preguntar más adelante.
</p>

</div>


<hr style="margin-top:35px;border:none;border-top:1px solid #333;">



<p>
🙏Si esta información te fue útil, puedes:
</p>

<div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:15px">

<button onclick="navigator.share({title:'Ayuda Inmediata en Japón',url:window.location.href})"
style="padding:8px 14px;border-radius:6px;border:1px solid #444;background:#1e1e1e;color:#ddd;">
↗ Compartir
</button>

<button onclick="mostrarGuardar()"
style="padding:8px 14px;border-radius:6px;border:1px solid #444;background:#1e1e1e;color:#ddd;">
• Guardar
</button>

<button onclick="irAApoyo()" style="padding:8px 14px;border-radius:6px;border:1px solid #444;background:#1e1e1e;color:#fff;">
  ❤️ Apoyar
</button>
<div id="guardar-pagina" style="display:none;margin-top:18px;padding:12px;border-radius:8px;background:#1c1c1c;border:1px solid #333;color:#ddd">

<p><strong>📌 Cómo guardar esta página</strong></p>

<p><b>En iPhone / iPad:</b><br>
Pulsa el botón compartir del navegador y elige <b>"Añadir a favoritos"</b> o <b>"Añadir a pantalla de inicio"</b>.
</p>

<p><b>En Android:</b><br>MK
Pulsa el menú del navegador (⋮) y selecciona <b>"Añadir a favoritos"</b> o <b>"Añadir a pantalla de inicio"</b>.
</p>

<p><b>En computadora:</b><br>
Pulsa la estrella ⭐ del navegador o presiona <b>Ctrl + D</b>.
</p>

</div>

</div>

<p style="font-size:12px;color:#777;margin-top:8px">
También es posible colaborar utilizando tarjeta de crédito o débito a través de estas plataformas.
</p>

</div>

</div>

<div style="margin-top:30px;display:flex;gap:10px;flex-wrap:wrap">

<button onclick="document.getElementById('buscador').scrollIntoView({behavior:'smooth'})"
style="padding:10px 14px;border-radius:8px;border:none;background:#2ecc71;color:white;font-weight:bold;">
⬅ Volver al buscador
</button>

<button onclick="document.getElementById('policia').scrollIntoView({behavior:'smooth'})"
style="padding:10px 14px;border-radius:8px;border:none;background:#3498db;color:white;font-weight:bold;">
⬆ Volver al tema Policía
</button>

</div>
`,
transporte: `
<h2 id="transporte">🚄 Transporte en Japón</h2>

<p><strong>En Japón el transporte es muy puntual y organizado, pero al principio puede confundir.</strong></p>

<p>Si no sabes cómo moverte, aquí encontrarás orientación práctica para tren, metro, shinkansen, taxi, bus y bicicleta.</p>

<p><strong>Importante:</strong> muchas veces la forma más fácil es usar Google Maps y una tarjeta IC como <strong>Suica</strong> o <strong>Pasmo</strong>.</p>

<img src="transporte.jpg" class="info-img" alt="Transporte en Japón">

<p><strong>Si necesitas moverte y no sabes qué hacer, presiona una situación:</strong></p>

<div class="subtemas-box">

<details class="subtema-card">
<summary>🚖 Necesito tomar un taxi</summary>
<div class="subtema-content">

<img src="taxi.jpg" class="info-img" alt="Taxi en Japón">

<p><strong>Qué hacer:</strong></p>
<ol>
<li>Busca una parada de taxi o taxis con luz disponible.</li>
<li>Si puedes, muestra la dirección en japonés.</li>
<li>Entra y dile al conductor a dónde vas.</li>
<li>No intentes abrir la puerta trasera: muchas veces se abre sola.</li>
</ol>

<p><strong>Dónde tomar:</strong></p>
<ul>
<li>Paradas oficiales de taxi</li>
<li>Estaciones grandes</li>
<li>Aeropuertos</li>
<li>Hoteles</li>
</ul>

<p><strong>Importante:</strong></p>
<ul>
<li>No se deja propina.</li>
<li>Es cómodo, pero más caro que tren o bus.</li>
<li>De noche puede costar bastante más.</li>
</ul>

<p><strong>Frases útiles:</strong></p>
<p>ここに行ってください<br>Koko ni itte kudasai<br>Lléveme a este lugar</p>

<p>このホテルまでお願いします<br>Kono hoteru made onegaishimasu<br>Por favor, hasta este hotel</p>

</div>
</details>

<details class="subtema-card">
<summary>🚆 No entiendo el tren o el metro</summary>
<div class="subtema-content">

<img src="tren.jpg" class="info-img" alt="Tren en Japón">

<p><strong>Qué hacer:</strong></p>
<ol>
<li>Abre Google Maps.</li>
<li>Escribe tu destino.</li>
<li>Revisa línea, plataforma y horario.</li>
<li>Sigue los colores, números y carteles en la estación.</li>
</ol>

<p><strong>Cómo usar:</strong></p>
<ul>
<li>Entra a la estación.</li>
<li>Toca con tu tarjeta IC al entrar.</li>
<li>Sigue la línea correcta.</li>
<li>Al salir, vuelve a tocar la tarjeta.</li>
</ul>

<p><strong>Importante:</strong></p>
<ul>
<li>Tren y metro son muy puntuales.</li>
<li>No hables fuerte ni hagas ruido.</li>
<li>Muchas estaciones tienen nombres en inglés.</li>
</ul>

<p><strong>Frases útiles:</strong></p>
<p>この駅はどこですか<br>Kono eki wa doko desu ka<br>¿Dónde está esta estación?</p>

<p>この電車は〇〇に行きますか<br>Kono densha wa 〇〇 ni ikimasu ka<br>¿Este tren va a 〇〇?</p>

</div>
</details>

<details class="subtema-card">
<summary>🎫 Cómo comprar ticket</summary>
<div class="subtema-content">

<img src="ticket.jpg" class="info-img" alt="Comprar ticket en Japón">

<p><strong>Qué hacer:</strong></p>
<ol>
<li>Busca una máquina de tickets en la estación.</li>
<li>Cambia el idioma a inglés si está disponible.</li>
<li>Selecciona destino o tarifa.</li>
<li>Paga con efectivo o tarjeta si la máquina lo permite.</li>
<li>Guarda el ticket hasta salir.</li>
</ol>

<p><strong>Consejo:</strong></p>
<p>Si vas a usar transporte varias veces, es mucho más fácil comprar una <strong>Suica / Pasmo</strong> que sacar ticket cada vez.</p>

<p><strong>Frases útiles:</strong></p>
<p>切符を買いたいです<br>Kippu o kaitai desu<br>Quiero comprar un ticket</p>

<p>英語はありますか<br>Eigo wa arimasu ka<br>¿Hay inglés?</p>

</div>
</details>

<details class="subtema-card">
<summary>🚄 Cómo usar Shinkansen</summary>
<div class="subtema-content">

<img src="shinkansen.jpg" class="info-img" alt="Shinkansen en Japón">

<p><strong>Qué hacer:</strong></p>
<ol>
<li>Ve a una estación JR grande.</li>
<li>Busca la zona de Shinkansen.</li>
<li>Compra ticket en máquina o ventanilla JR.</li>
<li>Revisa tu andén y tu vagón.</li>
<li>Llega con tiempo porque sale puntual.</li>
</ol>

<p><strong>Asiento:</strong></p>
<ul>
<li><strong>自由席</strong> = sin reserva, más barato</li>
<li><strong>指定席</strong> = asiento reservado</li>
</ul>

<p><strong>Equipaje:</strong></p>
<ul>
<li>Maletas pequeñas suelen ir contigo.</li>
<li>Maletas grandes pueden requerir asiento con espacio para equipaje.</li>
</ul>

<p><strong>Consejo:</strong></p>
<p>Para viajes largos entre ciudades, el Shinkansen es la opción más rápida y cómoda.</p>

<p><strong>Frases útiles:</strong></p>
<p>指定席をお願いします<br>Shiteiseki o onegaishimasu<br>Quiero asiento reservado</p>

<p>自由席はどこですか<br>Jiyuuseki wa doko desu ka<br>¿Dónde está la zona de asientos no reservados?</p>

</div>
</details>

<details class="subtema-card">
<summary>🧳 Viajo con equipaje</summary>
<div class="subtema-content">

<img src="equipaje.jpg" class="info-img" alt="Equipaje en transporte">

<p><strong>Qué hacer:</strong></p>
<ul>
<li>En tren normal, lleva tu maleta sin bloquear el paso.</li>
<li>En Shinkansen, revisa si tu maleta necesita espacio especial.</li>
<li>En estaciones grandes puedes usar lockers.</li>
<li>Si es mucho equipaje, a veces conviene taxi.</li>
</ul>

<p><strong>Consejo:</strong></p>
<p>Si llevas varias maletas o maletas grandes, evita horas punta.</p>

<p><strong>Frases útiles:</strong></p>
<p>コインロッカーはどこですか<br>Koin rokkā wa doko desu ka<br>¿Dónde están los lockers?</p>

<p>大きい荷物があります<br>Ōkii nimotsu ga arimasu<br>Tengo equipaje grande</p>

</div>
</details>

<details class="subtema-card">
<summary>🚌 Cómo usar el bus</summary>
<div class="subtema-content">

<img src="bus.jpg" class="info-img" alt="Bus en Japón">

<p><strong>Qué hacer:</strong></p>
<ol>
<li>Sube por donde indique el bus (muchas veces por atrás).</li>
<li>Toma número o usa tu tarjeta IC.</li>
<li>Presiona el botón antes de tu parada.</li>
<li>Baja por delante y paga al salir, si ese sistema aplica.</li>
</ol>

<p><strong>Consejo:</strong></p>
<p>En algunas ciudades el sistema cambia, pero normalmente está indicado dentro del bus.</p>

<p><strong>Frases útiles:</strong></p>
<p>このバスは〇〇に行きますか<br>Kono basu wa 〇〇 ni ikimasu ka<br>¿Este bus va a 〇〇?</p>

<p>ここで降ります<br>Koko de orimasu<br>Bajo aquí</p>

</div>
</details>

<details class="subtema-card">
<summary>🚲 Alquilar bicicleta</summary>
<div class="subtema-content">

<img src="bici.jpg" class="info-img" alt="Bicicleta en Japón">

<p><strong>Dónde alquilar:</strong></p>
<ul>
<li>Estaciones de tren</li>
<li>Tiendas de alquiler</li>
<li>Estaciones automáticas con app</li>
</ul>

<p><strong>Qué hacer:</strong></p>
<ol>
<li>Busca una estación o tienda de alquiler.</li>
<li>Regístrate si hace falta.</li>
<li>Escanea el código o pide la bici.</li>
<li>Revisa dónde debes devolverla.</li>
</ol>

<p><strong>Precio aproximado:</strong></p>
<ul>
<li>¥100–¥300 por 30 minutos</li>
<li>¥1000–¥2000 por día completo</li>
</ul>

<p><strong>Importante:</strong></p>
<ul>
<li>No la dejes en cualquier sitio.</li>
<li>Devuélvela en una estación oficial.</li>
<li>Respeta señales y zonas de estacionamiento.</li>
</ul>

<p><strong>Frases útiles:</strong></p>
<p>自転車を借りたいです<br>Jitensha o karitai desu<br>Quiero alquilar una bicicleta</p>

<p>どこで返しますか<br>Doko de kaeshimasu ka<br>¿Dónde la devuelvo?</p>

</div>
</details>

</div>

<h3>🌐 Si tienes dificultad con el idioma:</h3>

<p>Si no puedes comunicarte bien en japonés, puedes utilizar cualquier traductor desde tu teléfono o dispositivo. No es necesario instalar una aplicación. Puedes abrir un traductor directamente desde tu navegador y mostrar el texto.</p>

<h3>🌐 Traductores recomendados</h3>

<p>🔵 <a href="https://www.deepl.com/translator#es/ja/" target="_blank">Traductor español → japonés (DeepL)</a></p>
<p>🟡 <a href="https://translate.google.com/?sl=es&tl=ja" target="_blank">Traductor español → japonés (Google)</a></p>
<p>🟢 <a href="https://chat.openai.com/" target="_blank">ChatGPT (explicar o traducir una situación)</a></p>

<h3>🗣️ Frases útiles para transporte</h3>

<ul style="line-height:1.9;">
<li>
<strong>Español</strong><br>
¿Dónde está esta estación?<br>
<strong>Romaji</strong><br>
Kono eki wa doko desu ka?<br>
<strong>日本語</strong><br>
<span style="font-size:24px;font-weight:bold;">この駅はどこですか？</span>
</li>

<br>

<li>
<strong>Español</strong><br>
Quiero comprar un ticket<br>
<strong>Romaji</strong><br>
Kippu o kaitai desu<br>
<strong>日本語</strong><br>
<span style="font-size:24px;font-weight:bold;">切符を買いたいです</span>
</li>

<br>

<li>
<strong>Español</strong><br>
¿Este tren va a 〇〇?<br>
<strong>Romaji</strong><br>
Kono densha wa 〇〇 ni ikimasu ka?<br>
<strong>日本語</strong><br>
<span style="font-size:24px;font-weight:bold;">この電車は〇〇に行きますか？</span>
</li>

<br>

<li>
<strong>Español</strong><br>
Lléveme a este lugar<br>
<strong>Romaji</strong><br>
Koko ni itte kudasai<br>
<strong>日本語</strong><br>
<span style="font-size:24px;font-weight:bold;">ここに行ってください</span>
</li>
</ul>

<div style="
border:3px solid #f5c542;
border-radius:16px;
padding:18px;
margin-top:25px;
background:linear-gradient(145deg,#1a1a1a,#000);
box-shadow:0 0 12px rgba(245,197,66,0.4);
">
<h3 style="color:#f5c542;font-size:20px;margin-bottom:10px;">💡 Consejo importante</h3>
<p style="line-height:1.6;">
Compra una tarjeta IC (<strong>Suica / Pasmo</strong>). Te permite usar casi todo el transporte sin comprar tickets cada vez.
</p>
<p style="line-height:1.6;">
Si llevas maletas grandes o viajas muy cansado, a veces un taxi puede ser mejor que cambiar muchas líneas.
</p>
</div>

<hr style="margin-top:35px;border:none;border-top:1px solid #333;">

<p>🙏 Si esta información te fue útil, puedes:</p>

<div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:15px">
<button onclick="navigator.share({title:'Ayuda Inmediata en Japón',url:window.location.href})"
style="padding:8px 14px;border-radius:6px;border:1px solid #444;background:#1e1e1e;color:#fff;">
↗ Compartir
</button>

<button onclick="mostrarGuardar()"
style="padding:8px 14px;border-radius:6px;border:1px solid #444;background:#1e1e1e;color:#fff;">
• Guardar
</button>

<button onclick="irAApoyo()"
style="padding:8px 14px;border-radius:6px;border:1px solid #444;background:#1e1e1e;color:#ff8a8a;">
❤️ Apoyar
</button>
</div>

<div id="guardar-pagina" style="display:none;margin-top:18px;padding:12px;border-radius:8px;">
<p><strong>📌 Cómo guardar esta página</strong></p>

<p><b>En iPhone / iPad:</b><br>
Pulsa el botón compartir del navegador y elige <b>"Añadir a favoritos"</b> o <b>"Añadir a pantalla de inicio"</b>.
</p>

<p><b>En Android:</b><br>
Pulsa el menú del navegador (⋮) y selecciona <b>"Añadir a favoritos"</b> o <b>"Añadir a pantalla de inicio"</b>.
</p>

<p><b>En computadora:</b><br>
Pulsa la estrella ⭐ del navegador o presiona <b>Ctrl + D</b>.
</p>
</div>

<p style="font-size:12px;color:#777;margin-top:8px">
También es posible colaborar utilizando tarjeta de crédito o débito a través de estas plataformas.
</p>

<div style="margin-top:30px;display:flex;gap:10px;flex-wrap:wrap">
<button onclick="document.getElementById('buscador').scrollIntoView({behavior:'smooth'})"
style="padding:10px 14px;border-radius:8px;border:none;background:#2ecc71;color:white;font-weight:700;">
⬅️ Volver al buscador
</button>

<button onclick="document.getElementById('transporte').scrollIntoView({behavior:'smooth'})"
style="padding:10px 14px;border-radius:8px;border:none;background:#3498db;color:white;font-weight:700;">
⬆️ Volver al tema Transporte
</button>
</div>
`,
alojamiento: `
<h2 id="alojamiento">🏨 Alojamiento en Japón</h2>

<p><strong>En Japón hay muchas opciones para dormir según tu presupuesto.</strong></p>

<p>Desde hoteles normales hasta cápsula, cafés internet o alquileres por días.</p>

<p>
✔ Hoteles: cómodos y limpios (¥6,000 – ¥15,000)<br>
✔ Cápsula: económicos y prácticos (¥2,500 – ¥6,000)<br>
✔ Airbnb / departamentos: más espacio<br>
✔ Internet café: opción básica para pasar la noche
</p>

<p>👉 El servicio en Japón suele ser muy limpio, puntual y respetuoso.</p>

<div style="display:flex; gap:10px; overflow-x:auto; margin:10px 0;">
  <img src="IMAGEN_1" style="width:85%; border-radius:10px;">
  <img src="IMAGEN_2" style="width:85%; border-radius:10px;">
  <img src="IMAGEN_3" style="width:85%; border-radius:10px;">
</div>
<div style="
margin:20px 0;
padding:14px;
border-radius:12px;
background:#111;
border:1px solid #333;
">

<p style="font-weight:bold;">🔎 Buscar alojamiento ahora</p>

<a href="https://www.google.com/maps/search/hotel/" target="_blank"
style="
display:block;
margin-top:10px;
padding:12px;
border-radius:10px;
background:#2ecc71;
color:white;
text-decoration:none;
text-align:center;
font-weight:bold;
">
🗺️ Ver hoteles en Google Maps
</a>

<a href="https://www.google.com/search?q=hotel+cerca+de+mi" target="_blank"
style="
display:block;
margin-top:10px;
padding:12px;
border-radius:10px;
background:#3498db;
color:white;
text-decoration:none;
text-align:center;
font-weight:bold;
">
📍 Buscar hotel cerca de mí
</a>

<a href="https://www.booking.com/" target="_blank"
style="
display:block;
margin-top:10px;
padding:12px;
border-radius:10px;
background:#9b59b6;
color:white;
text-decoration:none;
text-align:center;
font-weight:bold;
">
🛏️ Ver precios y reservar
</a>

</div>
<p><strong>🟢 Presiona una situación para ver qué hacer:</strong></p>

<div class="subtemas-box">

<details class="subtema-card">
  <summary>🏨 Cómo funcionan los hoteles</summary>
  <div class="subtema-content">
    <p><strong>Qué esperar:</strong></p>
    <ol>
      <li>Check-in normalmente desde la tarde.</li>
      <li>Check-out normalmente por la mañana.</li>
      <li>Las habitaciones suelen ser pequeñas, limpias y bien organizadas.</li>
      <li>Muchos hoteles incluyen toallas, jabón, shampoo, piyama o bata.</li>
    </ol>

    <p><strong>Frases útiles:</strong></p>
    <p>チェックインお願いします<br>Check-in onegaishimasu<br>Quiero hacer check-in</p>
  </div>
</details>

<details class="subtema-card">
  <summary>🛏️ Hoteles cápsula</summary>
  <div class="subtema-content">
    <p><strong>Qué saber:</strong></p>
    <ol>
      <li>Son espacios pequeños e individuales para dormir.</li>
      <li>Los baños y duchas suelen ser compartidos.</li>
      <li>Son prácticos para una o pocas noches.</li>
      <li>No son la mejor opción si llevas mucho equipaje.</li>
    </ol>

    <p><strong>Precio aproximado:</strong></p>
    <p>¥2,500 – ¥6,000 por noche</p>
  </div>
</details>

<details class="subtema-card">
  <summary>🏠 Airbnb / departamentos</summary>
  <div class="subtema-content">
    <p><strong>Qué saber:</strong></p>
    <ol>
      <li>Ofrecen más espacio y más privacidad.</li>
      <li>Pueden ser útiles para familias o grupos.</li>
      <li>El check-in muchas veces es automático.</li>
      <li>Debes revisar bien reglas, dirección y horario de entrada.</li>
    </ol>

    <p><strong>Importante:</strong></p>
    <p>Guarda bien las instrucciones de entrada y el código si lo hay.</p>
  </div>
</details>

<details class="subtema-card">
  <summary>💻 Internet café (para dormir)</summary>
  <div class="subtema-content">
    <p><strong>Qué es:</strong></p>
    <ol>
      <li>Son lugares con cabinas privadas o semi privadas.</li>
      <li>Suelen tener internet, bebidas y a veces ducha.</li>
      <li>Sirven para pasar la noche si no tienes otra opción.</li>
      <li>Son útiles si perdiste el último tren.</li>
    </ol>

    <p><strong>Precio aproximado:</strong></p>
    <p>¥1,500 – ¥3,500 según horas y servicios</p>
  </div>
</details>

<details class="subtema-card">
  <summary>📍 Cómo llegar a mi hotel</summary>
  <div class="subtema-content">
    <p><strong>Qué hacer:</strong></p>
    <ol>
      <li>Usa Google Maps.</li>
      <li>Guarda la dirección exacta en japonés.</li>
      <li>Si te pierdes, muestra la dirección en una estación o taxi.</li>
    </ol>

    <p><strong>Frase útil:</strong></p>
    <p>このホテルに行きたいです<br>Kono hoteru ni ikitai desu<br>Quiero ir a este hotel</p>
  </div>
</details>

<details class="subtema-card">
  <summary>🗣️ No hablo japonés</summary>
  <div class="subtema-content">
    <p><strong>Qué hacer:</strong></p>
    <ol>
      <li>Muestra tu reserva.</li>
      <li>Usa traductor en el celular.</li>
      <li>Habla con frases cortas y claras.</li>
    </ol>
  </div>
</details>

</div>

<h3>🌍 Si tienes dificultad con el idioma</h3>

<p><strong>📱 Puedes mostrar este mensaje:</strong></p>

<ul style="line-height:1.9">

<li>
<strong>Español</strong><br>
Tengo una reserva<br><br>

<strong>Romaji</strong><br>
Yoyaku ga arimasu<br><br>

<strong>日本語</strong><br>
<span style="font-size:26px;font-weight:bold;">予約があります</span>
</li>

<br>

<li>
<strong>Español</strong><br>
¿Dónde está mi habitación?<br><br>

<strong>Romaji</strong><br>
Heya wa doko desu ka?<br><br>

<strong>日本語</strong><br>
<span style="font-size:26px;font-weight:bold;">部屋はどこですか？</span>
</li>

<br>

<li>
<strong>Español</strong><br>
¿Puedo usar un traductor para explicarme?<br><br>

<strong>Romaji</strong><br>
Honyaku apuri o tsukatte setsumei shite mo ii desu ka?<br><br>

<strong>日本語</strong><br>
<span style="font-size:26px;font-weight:bold;">翻訳アプリを使って説明してもいいですか？</span>
</li>

</ul>

<h3>🌐 Traductores recomendados</h3>

<p>🔵 <a href="https://www.deepl.com/translator#es/ja/" target="_blank">Traductor español → japonés (DeepL)</a></p>
<p>🟡 <a href="https://translate.google.com/?sl=es&tl=ja&op=translate" target="_blank">Traductor español → japonés (Google)</a></p>
<p>🟢 <a href="https://chat.openai.com/" target="_blank">ChatGPT (explicar o traducir una situación)</a></p>

<h3>🗣️ Frases útiles</h3>

<ul style="line-height:1.9">

<li>
<strong>Español</strong><br>
Quiero hacer check-in<br><br>

<strong>Romaji</strong><br>
Check-in onegaishimasu<br><br>

<strong>日本語</strong><br>
<span style="font-size:26px;font-weight:bold;">チェックインお願いします</span>
</li>

<br>

<li>
<strong>Español</strong><br>
¿A qué hora es el check-out?<br><br>

<strong>Romaji</strong><br>
Check-out wa nanji desu ka?<br><br>

<strong>日本語</strong><br>
<span style="font-size:26px;font-weight:bold;">チェックアウトは何時ですか？</span>
</li>

<br>

<li>
<strong>Español</strong><br>
¿Pueden guardar mi equipaje?<br><br>

<strong>Romaji</strong><br>
Nimotsu o azukatte moraemasu ka?<br><br>

<strong>日本語</strong><br>
<span style="font-size:26px;font-weight:bold;">荷物を預かってもらえますか？</span>
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
<p>
Reserva con anticipación en temporadas altas (sakura, otoño, feriados).
</p>
</div>

<hr style="margin-top:35px;border:none;border-top:1px solid #333;">

<p>
🙏 Si esta información te fue útil, puedes apoyar este proyecto:
</p>

<div style="display:flex;gap:10px;flex-wrap:wrap;">
<button onclick="navigator.share({title:'Ayuda Inmediata en Japón',text:'Guía útil sobre alojamiento en Japón',url:window.location.href})"
style="padding:8px 14px;border-radius:6px;border:none;background:#2a2a2a;color:white;cursor:pointer;">
↗ Compartir
</button>

<button onclick="mostrarGuardar()"
style="padding:8px 14px;border-radius:6px;border:none;background:#2a2a2a;color:white;cursor:pointer;">
• Guardar
</button>

<button onclick="irAApoyo()"
style="padding:8px 14px;border-radius:6px;border:none;background:#2a2a2a;color:white;cursor:pointer;">
❤️ Apoyar
</button>

<div id="guardar-pagina" style="display:none;width:100%;margin-top:14px;">
<p><strong>📌 Cómo guardar esta página</strong></p>

<p><b>En iPhone / iPad:</b><br>
Pulsa el botón compartir del navegador y selecciona “Añadir a pantalla de inicio”.
</p>

<p><b>En Android:</b><br>
Pulsa el menú del navegador (⋮) y selecciona “Añadir a pantalla de inicio”.
</p>

<p><b>En computadora:</b><br>
Pulsa la estrella ⭐ del navegador o presiona Ctrl + D.
</p>
</div>

<p style="font-size:12px;color:#777;margin-top:10px;width:100%;">
También es posible colaborar utilizando tarjeta de crédito o débito a través de estas plataformas.
</p>
</div>

<div style="margin-top:30px;display:flex;gap:10px;flex-wrap:wrap;">
<button onclick="document.getElementById('searchInput').scrollIntoView({behavior:'smooth'})"
style="padding:10px 14px;border-radius:8px;border:none;background:#2ecc71;color:white;cursor:pointer;">
⬅️ Volver al buscador
</button>

<button onclick="document.getElementById('alojamiento').scrollIntoView({behavior:'smooth'})"
style="padding:10px 14px;border-radius:8px;border:none;background:#3498db;color:white;cursor:pointer;">
⬆️ Volver al tema Alojamiento
</button>
</div>
`,
dinero: `
<h2 id="dinero">💴 Dinero y pagos en Japón</h2>

<p><strong>En Japón el efectivo sigue siendo muy importante.</strong></p>

<p>Muchos lugares aceptan tarjeta, pero todavía hay tiendas, restaurantes, máquinas y servicios donde es más seguro pagar en efectivo.</p>

<p><strong>Importante:</strong> no todos los ATM aceptan tarjetas extranjeras, y muchos pagos QR requieren cuenta japonesa.</p>

<img src="dinero.jpg" class="info-img" alt="Dinero y pagos en Japón">

<p><strong>Si necesitas dinero, cambio o pagos, aquí encontrarás opciones útiles:</strong></p>

<div class="subtemas-box">

<details class="subtema-card">
  <summary>🏧 Necesito sacar dinero en ATM</summary>
  <div class="subtema-content">

    <p><strong>Qué hacer:</strong></p>
    <ol>
      <li>Busca ATM en konbini, estaciones o zonas comerciales.</li>
      <li>Prueba primero en 7-Eleven, Lawson o FamilyMart.</li>
      <li>Selecciona idioma si está disponible.</li>
      <li>Verifica comisión antes de confirmar.</li>
    </ol>

    <p><strong>Importante:</strong></p>
    <p>No todos los cajeros aceptan tarjetas extranjeras. Si uno falla, prueba otro.</p>

    <p><strong>Búsqueda útil:</strong></p>
    <p>
      <a href="https://www.google.com/maps/search/ATM/" target="_blank">🏧 Ver ATM / cajeros en Google Maps</a><br>
      <a href="https://www.google.com/search?q=ATM+cerca+de+mi" target="_blank">📍 Buscar ATM cerca de mí</a>
    </p>

  </div>
</details>

<details class="subtema-card">
  <summary>🏦 Necesito ir a un banco</summary>
  <div class="subtema-content">

    <p><strong>Qué saber:</strong></p>
    <ol>
      <li>Los bancos pueden servir para consultas, transferencias o algunos trámites.</li>
      <li>No todos los bancos hacen cambio directo de moneda para turistas.</li>
      <li>En algunos casos te pedirán pasaporte o datos de la cuenta.</li>
    </ol>

    <p><strong>Búsqueda útil:</strong></p>
    <p>
      <a href="https://www.google.com/maps/search/banco/" target="_blank">🏦 Ver bancos en Google Maps</a><br>
      <a href="https://www.google.com/search?q=banco+cerca+de+mi" target="_blank">📍 Buscar bancos cerca de mí</a>
    </p>

  </div>
</details>

<details class="subtema-card">
  <summary>💱 Quiero cambiar dinero</summary>
  <div class="subtema-content">

    <p><strong>Qué hacer:</strong></p>
    <ol>
      <li>Busca una casa de cambio en aeropuerto o ciudad.</li>
      <li>Compara si la tasa te conviene.</li>
      <li>Ten tu pasaporte a mano si te lo piden.</li>
      <li>Cuenta el dinero antes de irte.</li>
    </ol>

    <p><strong>Importante:</strong></p>
    <p>No en todos los bancos cambian moneda extranjera para visitantes.</p>

    <p><strong>Búsqueda útil:</strong></p>
    <p>
      <a href="https://www.google.com/maps/search/casa+de+cambio/" target="_blank">💱 Ver casas de cambio en Google Maps</a><br>
      <a href="https://www.google.com/search?q=casa+de+cambio+cerca+de+mi" target="_blank">📍 Buscar casa de cambio cerca de mí</a>
    </p>

  </div>
</details>

<details class="subtema-card">
  <summary>💸 Quiero enviar, depositar o transferir dinero</summary>
  <div class="subtema-content">

    <p><strong>Opciones comunes:</strong></p>
    <ul>
      <li>Transferencia bancaria</li>
      <li>Depósito en ATM o banco</li>
      <li>Servicios internacionales si envías o recibes desde fuera de Japón</li>
    </ul>

    <p><strong>Importante:</strong></p>
    <p>Verifica muy bien nombre, número de cuenta y monto antes de confirmar.</p>

    <p><strong>Frase útil:</strong></p>
    <p>振込したいです<br>Furikomi shitai desu<br>Quiero hacer una transferencia</p>

  </div>
</details>

<details class="subtema-card">
  <summary>💵 Quiero recibir o cobrar dinero</summary>
  <div class="subtema-content">

    <p><strong>Qué revisar:</strong></p>
    <ol>
      <li>Pregunta dónde se cobra o retira exactamente.</li>
      <li>Lleva pasaporte o documento si lo requieren.</li>
      <li>Confirma horario, comisión y monto.</li>
    </ol>

    <p><strong>Importante:</strong></p>
    <p>Algunos servicios de cobro o retiro no funcionan igual para todos los países.</p>

  </div>
</details>

<details class="subtema-card">
  <summary>💳 Mi tarjeta o pago no funciona</summary>
  <div class="subtema-content">

    <p><strong>Qué hacer:</strong></p>
    <ol>
      <li>Prueba otro ATM o comercio.</li>
      <li>Pregunta si aceptan efectivo.</li>
      <li>Usa otra tarjeta si tienes.</li>
      <li>Busca un cajero o cambio cercano.</li>
    </ol>

    <p><strong>También debes saber:</strong></p>
    <ul>
      <li>PayPay es muy común en Japón</li>
      <li>También existen Rakuten Pay, d払い, au PAY, LINE Pay y otros</li>
      <li>Muchos pagos QR requieren cuenta japonesa</li>
      <li>Alipay puede aceptarse en algunos lugares turísticos</li>
    </ul>

  </div>
</details>

</div>

<h3>🌐 Si tienes dificultad con el idioma</h3>

<p><strong>📱 Puedes mostrar este mensaje:</strong></p>

<ul style="line-height:1.9">

<li>

<strong>Español</strong><br>
Quiero sacar dinero.<br><br>

<strong>Romaji</strong><br>
Okane o oroshitai desu.<br><br>

<strong>日本語</strong><br>
<span style="font-size:24px;font-weight:bold;">お金を下ろしたいです。</span>

</li>

<br>

<li>

<strong>Español</strong><br>
Quiero cambiar dinero.<br><br>

<strong>Romaji</strong><br>
Ryougae shitai desu.<br><br>

<strong>日本語</strong><br>
<span style="font-size:24px;font-weight:bold;">両替したいです。</span>

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

<p>
Si no puedes comunicarte bien en japonés, puedes utilizar cualquier traductor desde tu teléfono o dispositivo.
No es necesario instalar una aplicación. Puedes abrir un traductor directamente desde tu navegador y mostrar el texto al personal.
</p>

<h3>🌐 Traductores recomendados</h3>

<p>🔵 <a href="https://www.deepl.com/translator#es/ja/" target="_blank">Traductor español → japonés (DeepL)</a></p>

<p>🟡 <a href="https://translate.google.com/?sl=es&tl=ja&op=translate" target="_blank">Traductor español → japonés (Google)</a></p>

<p>🟢 <a href="https://chat.openai.com" target="_blank">ChatGPT (explicar o traducir una situación)</a></p>

<h3>🗣️ Frases útiles</h3>

<ul style="line-height:1.9">

<li>

<strong>Español</strong><br>
¿Dónde está el ATM?<br><br>

<strong>Romaji</strong><br>
ATM wa doko desu ka?<br><br>

<strong>日本語</strong><br>
<span style="font-size:24px;font-weight:bold;">ATMはどこですか？</span>

</li>

<br>

<li>

<strong>Español</strong><br>
¿Aceptan tarjeta?<br><br>

<strong>Romaji</strong><br>
Kaado wa tsukaemasu ka?<br><br>

<strong>日本語</strong><br>
<span style="font-size:24px;font-weight:bold;">カードは使えますか？</span>

</li>

<br>

<li>

<strong>Español</strong><br>
Quiero depositar dinero.<br><br>

<strong>Romaji</strong><br>
Okane o nyuukin shitai desu.<br><br>

<strong>日本語</strong><br>
<span style="font-size:24px;font-weight:bold;">お金を入金したいです。</span>

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

<p>
En Japón conviene llevar siempre algo de efectivo. No todos los lugares aceptan tarjeta, QR o pagos extranjeros.
</p>

</div>

<hr style="margin-top:35px;border:none;border-top:1px solid #333;">

<p>
🙏 Si esta información te fue útil, puedes apoyar este proyecto:
</p>

<div style="display:flex;gap:10px;flex-wrap:wrap;">

<button onclick="navigator.share({title:'Ayuda en Japón',text:document.title,url:window.location.href})"
style="padding:8px 14px;border-radius:6px;">
↗ Compartir
</button>

<button onclick="mostrarGuardar()"
style="padding:8px 14px;border-radius:6px;">
• Guardar
</button>

<button onclick="irAApoyo()"
style="padding:8px 14px;border-radius:6px;">
❤️ Apoyar
</button>

<div id="guardar-pagina" style="display:none;width:100%;margin-top:14px;">

<p><strong>📌 Cómo guardar esta página</strong></p>

<p><b>En iPhone / iPad:</b><br>
Pulsa el botón compartir del navegador y selecciona “Añadir a pantalla de inicio”.
</p>

<p><b>En Android:</b><br>
Pulsa el menú del navegador (⋮) y selecciona “Añadir a pantalla de inicio”.
</p>

<p><b>En computadora:</b><br>
Pulsa la estrella ⭐ del navegador o presiona Ctrl + D.
</p>

</div>

<p style="font-size:12px;color:#777;margin-top:10px;width:100%;">
También es posible colaborar utilizando tarjeta de crédito o débito a través de estas plataformas.
</p>

</div>


<div style="margin-top:30px;display:flex;gap:10px;flex-wrap:wrap;justify-content:center;">

<button onclick="document.getElementById('buscador').scrollIntoView({behavior:'smooth'})"
style="
background:#2ecc71;
color:white;
padding:12px 16px;
border:none;
border-radius:10px;
font-weight:bold;
">
⬅️ Volver al buscador
</button>

<button onclick="document.getElementById('dinero').scrollIntoView({behavior:'smooth'})"
style="
background:#3498db;
color:white;
padding:12px 16px;
border:none;
border-radius:10px;
font-weight:bold;
">
⬆️ Volver al tema Dinero
</button>

</div>
`,
    vida: `
<h2 id="vida">🏨 Vida diaria en Japón</h2>

<p>En Japón hay muchas cosas cotidianas que pueden ser diferentes si es tu primera vez. Aquí tienes lo esencial para moverte sin problemas.</p>

<img src="vida.jpg" class="info-img" alt="Vida diaria en Japón">

<p><strong>🟢 Presiona una situación para ver qué hacer:</strong></p>

<div class="subtemas-box">

<details class="subtema-card">
  <summary>🏪 Konbini (tiendas 24h)</summary>
  <div class="subtema-content">

    <p><strong>Qué puedes hacer:</strong></p>
    <ul>
      <li>Comprar comida, bebidas y productos básicos</li>
      <li>Retirar dinero en ATM</li>
      <li>Pagar algunos servicios</li>
      <li>Usar baño en algunos casos</li>
    </ul>

    <p><strong>Importante:</strong></p>
    <p>Son muy útiles y están por todas partes.</p>

  </div>
</details>

<details class="subtema-card">
  <summary>🛒 Supermercados y descuentos</summary>
  <div class="subtema-content">

    <p><strong>Qué saber:</strong></p>
    <ul>
      <li>Los precios suelen ser más bajos que en konbini</li>
      <li>Antes del cierre hay descuentos en comida preparada</li>
      <li>Busca etiquetas con rebajas</li>
    </ul>

    <p><strong>Importante:</strong></p>
    <p>Es una de las mejores formas de ahorrar dinero.</p>

  </div>
</details>

<details class="subtema-card">
  <summary>🍱 Dónde comer barato</summary>
  <div class="subtema-content">

    <p><strong>Opciones:</strong></p>
    <ul>
      <li>Konbini</li>
      <li>Supermercados</li>
      <li>Cadenas económicas</li>
    </ul>

    <p><strong>Qué esperar:</strong></p>
    <p>Comida rápida, limpia y accesible.</p>

  </div>
</details>

<details class="subtema-card">
  <summary>🗑️ Basura y reciclaje</summary>
  <div class="subtema-content">

    <p><strong>Qué saber:</strong></p>
    <ul>
      <li>La basura se separa por tipo</li>
      <li>No hay muchos basureros en la calle</li>
      <li>Debes llevar tu basura contigo</li>
    </ul>

    <p><strong>Importante:</strong></p>
    <p>Cada ciudad tiene reglas diferentes para la basura.</p>

  </div>
</details>

<details class="subtema-card">
  <summary>🚻 Baños públicos</summary>
  <div class="subtema-content">

    <p><strong>Qué saber:</strong></p>
    <ul>
      <li>Son gratuitos y muy limpios</li>
      <li>Muchos tienen funciones electrónicas</li>
      <li>Se encuentran en estaciones, konbini y parques</li>
    </ul>

  </div>
</details>

<details class="subtema-card">
  <summary>🧺 Lavandería</summary>
  <div class="subtema-content">

    <p><strong>Qué hacer:</strong></p>
    <ol>
      <li>Busca coin laundry</li>
      <li>Introduce monedas o IC card</li>
      <li>Selecciona lavado o secado</li>
    </ol>

    <p><strong>Importante:</strong></p>
    <p>Algunas máquinas ya incluyen detergente.</p>

  </div>
</details>

</div>

<h3>🌐 Si tienes dificultad con el idioma</h3>

<p><strong>📱 Puedes mostrar este mensaje:</strong></p>

<ul style="line-height:1.9">

<li>

<strong>Español</strong><br>
No hablo japonés.<br><br>

<strong>Romaji</strong><br>
Nihongo ga hanasemasen.<br><br>

<strong>日本語</strong><br>
<span style="font-size:24px;font-weight:bold;">日本語が話せません。</span>

</li>

<br>

<li>

<strong>Español</strong><br>
¿Dónde está el baño?<br><br>

<strong>Romaji</strong><br>
Toire wa doko desu ka?<br><br>

<strong>日本語</strong><br>
<span style="font-size:24px;font-weight:bold;">トイレはどこですか？</span>

</li>

<br>

<li>

<strong>Español</strong><br>
¿Me puede ayudar?<br><br>

<strong>Romaji</strong><br>
Tetsudatte moraemasu ka?<br><br>

<strong>日本語</strong><br>
<span style="font-size:24px;font-weight:bold;">手伝ってもらえますか？</span>

</li>

</ul>

<h3>🌐 Traductores recomendados</h3>

<p>🔵 <a href="https://www.deepl.com/translator#es/ja/" target="_blank">Traductor español → japonés (DeepL)</a></p>

<p>🟡 <a href="https://translate.google.com/?sl=es&tl=ja&op=translate" target="_blank">Traductor español → japonés (Google)</a></p>

<p>🟢 <a href="https://chat.openai.com" target="_blank">ChatGPT</a></p>

<h3>🗣️ Frases útiles</h3>

<ul style="line-height:1.9">

<li>

<strong>Español</strong><br>
Quiero comprar esto.<br><br>

<strong>Romaji</strong><br>
Kore o kaitai desu.<br><br>

<strong>日本語</strong><br>
<span style="font-size:24px;font-weight:bold;">これを買いたいです。</span>

</li>

<br>

<li>

<strong>Español</strong><br>
¿Aceptan tarjeta?<br><br>

<strong>Romaji</strong><br>
Kaado wa tsukaemasu ka?<br><br>

<strong>日本語</strong><br>
<span style="font-size:24px;font-weight:bold;">カードは使えますか？</span>

</li>

<br>

<li>

<strong>Español</strong><br>
Gracias.<br><br>

<strong>Romaji</strong><br>
Arigatou gozaimasu.<br><br>

<strong>日本語</strong><br>
<span style="font-size:24px;font-weight:bold;">ありがとうございます。</span>

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

<p>
En Japón respeta las normas, mantén el orden y evita hacer ruido en espacios públicos.
</p>

</div>

<hr style="margin-top:35px;border:none;border-top:1px solid #333;">

<p>
🙏 Si esta información te fue útil, puedes apoyar este proyecto:
</p>

<div style="display:flex;gap:10px;flex-wrap:wrap;">

<button onclick="navigator.share({title:'Ayuda en Japón',text:document.title,url:window.location.href})"
style="padding:8px 14px;border-radius:6px;">
↗ Compartir
</button>

<button onclick="mostrarGuardar()"
style="padding:8px 14px;border-radius:6px;">
• Guardar
</button>

<button onclick="irAApoyo()"
style="padding:8px 14px;border-radius:6px;">
❤️ Apoyar
</button>

<div id="guardar-pagina" style="display:none;width:100%;margin-top:14px;">

<p><strong>📌 Cómo guardar esta página</strong></p>

<p><b>En iPhone / iPad:</b><br>
Pulsa el botón compartir del navegador y selecciona “Añadir a pantalla de inicio”.
</p>

<p><b>En Android:</b><br>
Pulsa el menú del navegador (⋮) y selecciona “Añadir a pantalla de inicio”.
</p>

<p><b>En computadora:</b><br>
Pulsa la estrella ⭐ del navegador o presiona Ctrl + D.
</p>

</div>

<p style="font-size:12px;color:#777;margin-top:10px;width:100%;">
También es posible colaborar utilizando tarjeta de crédito o débito a través de estas plataformas.
</p>

</div>

<div style="margin-top:30px;display:flex;gap:10px;flex-wrap:wrap;justify-content:center;">

<button onclick="document.getElementById('buscador').scrollIntoView({behavior:'smooth'})"
style="
background:#2ecc71;
color:white;
padding:12px 16px;
border:none;
border-radius:10px;
font-weight:bold;
">
⬅️ Volver al buscador
</button>

<button onclick="document.getElementById('vida').scrollIntoView({behavior:'smooth'})"
style="
background:#3498db;
color:white;
padding:12px 16px;
border:none;
border-radius:10px;
font-weight:bold;
">
⬆️ Volver al tema Vida diaria
</button>

</div>
`,
tramites: `
<h2 id="tramites">📄 Trámites y documentos en Japón</h2>

<p>Si vives o permaneces en Japón, hay algunos trámites básicos que debes conocer para evitar problemas y poder realizar gestiones importantes.</p>

<img src="tramites.jpg" class="info-img" alt="Trámites en Japón">

<p><strong>🟢 Presiona una situación para ver qué hacer:</strong></p>

<div class="subtemas-box">

<details class="subtema-card">
  <summary>🪪 Tarjeta de residencia (Zairyu Card)</summary>
  <div class="subtema-content">

    <p><strong>Qué saber:</strong></p>
    <ul>
      <li>Es obligatoria para residentes extranjeros</li>
      <li>Debes llevarla siempre contigo</li>
      <li>Se entrega al ingresar al país o en inmigración</li>
    </ul>

    <p><strong>Importante:</strong></p>
    <p>No llevarla puede causarte problemas legales.</p>

  </div>
</details>

<details class="subtema-card">
  <summary>🏠 Registrar dirección (Juminhyo)</summary>
  <div class="subtema-content">

    <p><strong>Qué hacer:</strong></p>
    <ol>
      <li>Ir al ayuntamiento (city hall)</li>
      <li>Registrar tu dirección dentro de los 14 días</li>
      <li>Solicitar certificado si lo necesitas</li>
    </ol>

    <p><strong>Importante:</strong></p>
    <p>Es necesario para casi todos los trámites en Japón.</p>

  </div>
</details>

<details class="subtema-card">
  <summary>🏥 Seguro de salud</summary>
  <div class="subtema-content">

    <p><strong>Qué saber:</strong></p>
    <ul>
      <li>Es obligatorio para residentes</li>
      <li>Paga aproximadamente el 30% del costo médico</li>
      <li>Puede ser seguro nacional o de empresa</li>
    </ul>

    <p><strong>Importante:</strong></p>
    <p>Sin seguro, la atención médica es muy costosa.</p>

  </div>
</details>

<details class="subtema-card">
  <summary>💴 Impuestos básicos</summary>
  <div class="subtema-content">

    <p><strong>Qué saber:</strong></p>
    <ul>
      <li>Debes pagar impuestos si resides en Japón</li>
      <li>Incluye impuesto municipal y nacional</li>
      <li>Recibirás notificaciones o facturas</li>
    </ul>

    <p><strong>Importante:</strong></p>
    <p>Pagar a tiempo evita multas y problemas.</p>

  </div>
</details>

<details class="subtema-card">
  <summary>📑 Certificados (Juminhyo, ingresos, etc.)</summary>
  <div class="subtema-content">

    <p><strong>Qué puedes obtener:</strong></p>
    <ul>
      <li>Certificado de residencia</li>
      <li>Certificado de ingresos o impuestos</li>
      <li>Otros documentos oficiales</li>
    </ul>

    <p><strong>Dónde:</strong></p>
    <p>En el ayuntamiento (city hall).</p>

  </div>
</details>

<details class="subtema-card">
  <summary>🚗 Licencia de conducir (Menkyo)</summary>
  <div class="subtema-content">

    <p><strong>Opciones:</strong></p>
    <ul>
      <li>Convertir licencia extranjera</li>
      <li>Obtener licencia japonesa</li>
    </ul>

    <p><strong>Qué hacer:</strong></p>
    <ol>
      <li>Ir al centro de licencias</li>
      <li>Presentar documentos</li>
      <li>Realizar examen si es necesario</li>
    </ol>

  </div>
</details>

</div>

<h3>🌐 Si tienes dificultad con el idioma</h3>

<p><strong>📱 Puedes mostrar este mensaje:</strong></p>

<ul style="line-height:1.9">

<li>
<strong>Español</strong><br>
Necesito hacer un trámite.<br><br>
<strong>Romaji</strong><br>
Tetsuzuki o shitai desu.<br><br>
<strong>日本語</strong><br>
<span style="font-size:24px;font-weight:bold;">手続きをしたいです。</span>
</li>

<br>

<li>
<strong>Español</strong><br>
No hablo japonés.<br><br>
<strong>Romaji</strong><br>
Nihongo ga hanasemasen.<br><br>
<strong>日本語</strong><br>
<span style="font-size:24px;font-weight:bold;">日本語が話せません。</span>
</li>

<br>

<li>
<strong>Español</strong><br>
¿Dónde debo ir?<br><br>
<strong>Romaji</strong><br>
Doko ni ikeba ii desu ka?<br><br>
<strong>日本語</strong><br>
<span style="font-size:24px;font-weight:bold;">どこに行けばいいですか？</span>
</li>

</ul>

<h3>🌐 Traductores recomendados</h3>

<p>🔵 <a href="https://www.deepl.com/translator#es/ja/" target="_blank">Traductor español → japonés (DeepL)</a></p>
<p>🟡 <a href="https://translate.google.com/?sl=es&tl=ja&op=translate" target="_blank">Traductor español → japonés (Google)</a></p>
<p>🟢 <a href="https://chat.openai.com" target="_blank">ChatGPT</a></p>

<h3>🗣️ Frases útiles</h3>

<ul style="line-height:1.9">

<li>
<strong>Español</strong><br>
Quiero registrar mi dirección.<br><br>
<strong>Romaji</strong><br>
Jusho o touroku shitai desu.<br><br>
<strong>日本語</strong><br>
<span style="font-size:24px;font-weight:bold;">住所を登録したいです。</span>
</li>

<br>

<li>
<strong>Español</strong><br>
Necesito este documento.<br><br>
<strong>Romaji</strong><br>
Kono shorui ga hitsuyou desu.<br><br>
<strong>日本語</strong><br>
<span style="font-size:24px;font-weight:bold;">この書類が必要です。</span>
</li>

<br>

<li>
<strong>Español</strong><br>
¿Dónde está la municipalidad?<br><br>
<strong>Romaji</strong><br>
Yakusho wa doko desu ka?<br><br>
<strong>日本語</strong><br>
<span style="font-size:24px;font-weight:bold;">役所はどこですか？</span>
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

<p>
Haz tus trámites lo antes posible después de llegar. Muchos procesos en Japón tienen plazos importantes.
</p>

</div>

<hr style="margin-top:35px;border:none;border-top:1px solid #333;">

<p>🙏 Si esta información te fue útil, puedes apoyar este proyecto:</p>

<div style="display:flex;gap:10px;flex-wrap:wrap;">

<button onclick="navigator.share({title:'Ayuda en Japón',text:document.title,url:window.location.href})"
style="padding:8px 14px;border-radius:6px;">
↗ Compartir
</button>

<button onclick="mostrarGuardar()"
style="padding:8px 14px;border-radius:6px;">
• Guardar
</button>

<button onclick="irAApoyo()"
style="padding:8px 14px;border-radius:6px;">
❤️ Apoyar
</button>

<div id="guardar-pagina" style="display:none;width:100%;margin-top:14px;">

<p><strong>📌 Cómo guardar esta página</strong></p>

<p><b>En iPhone / iPad:</b><br>
Pulsa compartir → “Añadir a pantalla de inicio”.
</p>

<p><b>En Android:</b><br>
Menú (⋮) → “Añadir a pantalla de inicio”.
</p>

<p><b>En computadora:</b><br>
Ctrl + D o ⭐ en navegador.
</p>

</div>

<p style="font-size:12px;color:#777;margin-top:10px;width:100%;">
También puedes colaborar con tarjeta o débito.
</p>

</div>

<div style="margin-top:30px;display:flex;gap:10px;flex-wrap:wrap;justify-content:center;">

<button onclick="document.getElementById('buscador').scrollIntoView({behavior:'smooth'})"
style="
background:#2ecc71;
color:white;
padding:12px 16px;
border:none;
border-radius:10px;
font-weight:bold;
">
⬅️ Volver al buscador
</button>

<button onclick="document.getElementById('tramites').scrollIntoView({behavior:'smooth'})"
style="
background:#3498db;
color:white;
padding:12px 16px;
border:none;
border-radius:10px;
font-weight:bold;
">
⬆️ Volver al tema Trámites
</button>

</div>
`,
servicios: `
<h2 id="servicios">💼 Servicios y ayuda personalizada</h2>

<p>Si necesitas ayuda más específica en Japón, aquí puedes orientarte según tu situación y ver qué tipo de apoyo puede servirte.</p>

<img src="servicios.jpg" class="info-img" alt="Servicios y ayuda en Japón">

<p><strong>🟢 Presiona una situación para ver qué hacer:</strong></p>

<div class="subtemas-box">

<details class="subtema-card">
  <summary>🗣️ Necesito traducción o interpretación</summary>
  <div class="subtema-content">

    <p><strong>Qué puedes hacer:</strong></p>
    <ul>
      <li>Usar traductor en el teléfono</li>
      <li>Solicitar ayuda para explicar una situación</li>
      <li>Recibir apoyo por llamada o de forma presencial</li>
    </ul>

    <p><strong>Importante:</strong></p>
    <p>Para situaciones importantes, una buena interpretación puede evitar errores y confusiones.</p>

  </div>
</details>

<details class="subtema-card">
  <summary>🏥 Necesito ayuda en hospital o clínica</summary>
  <div class="subtema-content">

    <p><strong>Qué puedes hacer:</strong></p>
    <ul>
      <li>Recibir apoyo para explicar síntomas</li>
      <li>Usar traductor en consulta o recepción</li>
      <li>Solicitar acompañamiento si el caso es complicado</li>
    </ul>

    <p><strong>Importante:</strong></p>
    <p>En temas médicos es muy importante explicar bien lo que sientes y entender bien las indicaciones.</p>

  </div>
</details>

<details class="subtema-card">
  <summary>🏫 Necesito ayuda en colegio o escuela</summary>
  <div class="subtema-content">

    <p><strong>Qué puedes hacer:</strong></p>
    <ul>
      <li>Entender avisos, cartas o documentos escolares</li>
      <li>Recibir apoyo para hablar con profesores o administración</li>
      <li>Orientarte sobre horarios, reglas y sistema escolar</li>
    </ul>

    <p><strong>Importante:</strong></p>
    <p>Muchos documentos escolares están solo en japonés.</p>

  </div>
</details>

<details class="subtema-card">
  <summary>🏛️ Necesito ayuda en instituciones o trámites</summary>
  <div class="subtema-content">

    <p><strong>Qué puedes hacer:</strong></p>
    <ul>
      <li>Recibir ayuda antes de ir a una oficina</li>
      <li>Entender qué documento llevar</li>
      <li>Ir acompañado si el trámite es importante</li>
    </ul>

    <p><strong>Importante:</strong></p>
    <p>Un error en trámites puede causar retrasos o problemas.</p>

  </div>
</details>

<details class="subtema-card">
  <summary>🚓 Necesito ayuda en policía</summary>
  <div class="subtema-content">

    <p><strong>Qué puedes hacer:</strong></p>
    <ul>
      <li>Explicar mejor lo ocurrido con ayuda de traducción</li>
      <li>Solicitar apoyo para comunicarte correctamente</li>
      <li>Ir acompañado si la situación es delicada</li>
    </ul>

    <p><strong>Importante:</strong></p>
    <p>En situaciones con policía es importante que todo quede claro desde el principio.</p>

  </div>
</details>

<details class="subtema-card">
  <summary>📄 Necesito ayuda con documentos</summary>
  <div class="subtema-content">

    <p><strong>Opciones:</strong></p>
    <ul>
      <li>Traducción de documentos</li>
      <li>Explicación de formularios</li>
      <li>Ayuda para completar o entender papeles</li>
    </ul>

    <p><strong>Importante:</strong></p>
    <p>Antes de firmar o entregar algo, asegúrate de entenderlo bien.</p>

  </div>
</details>

<details class="subtema-card">
  <summary>💼 Necesito ayuda laboral o empleo</summary>
  <div class="subtema-content">

    <p><strong>Qué puedes hacer:</strong></p>
    <ul>
      <li>Buscar orientación para empleo</li>
      <li>Entender mejor condiciones de trabajo</li>
      <li>Recibir ayuda para leer avisos o mensajes laborales</li>
    </ul>

    <p><strong>Importante:</strong></p>
    <p>Es importante entender horarios, salario, descansos y condiciones antes de aceptar un trabajo.</p>

  </div>
</details>

<details class="subtema-card">
  <summary>📲 Quiero orientación personalizada</summary>
  <div class="subtema-content">

    <p><strong>Qué incluye:</strong></p>
    <ul>
      <li>Apoyo según tu caso específico</li>
      <li>Ayuda en tiempo real</li>
      <li>Orientación más directa para resolver una situación concreta</li>
    </ul>

    <p><strong>Importante:</strong></p>
    <p>La orientación general es distinta al apoyo personalizado según tu caso.</p>

  </div>
</details>

</div>

<h3>🌍 Si tienes dificultad con el idioma</h3>

<p><strong>📱 Puedes mostrar este mensaje:</strong></p>

<ul style="line-height:1.9">

<li>
<strong>Español</strong><br>
Necesito ayuda.<br><br>

<strong>Romaji</strong><br>
Tasukete kudasai.<br><br>

<strong>日本語</strong><br>
<span style="font-size:24px;font-weight:bold;">助けてください。</span>
</li>

<br>

<li>
<strong>Español</strong><br>
No hablo japonés.<br><br>

<strong>Romaji</strong><br>
Nihongo ga hanasemasen.<br><br>

<strong>日本語</strong><br>
<span style="font-size:24px;font-weight:bold;">日本語が話せません。</span>
</li>

<br>

<li>
<strong>Español</strong><br>
¿Puede ayudarme?<br><br>

<strong>Romaji</strong><br>
Tetsudatte moraemasu ka?<br><br>

<strong>日本語</strong><br>
<span style="font-size:24px;font-weight:bold;">手伝ってもらえますか？</span>
</li>

</ul>

<h3>🌐 Traductores recomendados</h3>

<p>🔵 <a href="https://www.deepl.com/translator#es/ja/" target="_blank">Traductor español → japonés (DeepL)</a></p>

<p>🟡 <a href="https://translate.google.com/?sl=es&tl=ja&op=translate" target="_blank">Traductor español → japonés (Google)</a></p>

<p>🟢 <a href="https://chat.openai.com" target="_blank">ChatGPT</a></p>

<h3>🗣️ Frases útiles</h3>

<ul style="line-height:1.9">

<li>
<strong>Español</strong><br>
Necesito ayuda con esto.<br><br>

<strong>Romaji</strong><br>
Kore ni tsuite tasukete kudasai.<br><br>

<strong>日本語</strong><br>
<span style="font-size:24px;font-weight:bold;">これについて助けてください。</span>
</li>

<br>

<li>
<strong>Español</strong><br>
¿Puede acompañarme?<br><br>

<strong>Romaji</strong><br>
Issho ni kite moraemasu ka?<br><br>

<strong>日本語</strong><br>
<span style="font-size:24px;font-weight:bold;">一緒に来てもらえますか？</span>
</li>

<br>

<li>
<strong>Español</strong><br>
Necesito explicación.<br><br>

<strong>Romaji</strong><br>
Setsumei ga hitsuyou desu.<br><br>

<strong>日本語</strong><br>
<span style="font-size:24px;font-weight:bold;">説明が必要です。</span>
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

<p>
Primero intenta resolver con la información gratuita. Si tu caso es más delicado o más específico, busca apoyo más directo.
</p>

</div>

<hr style="margin-top:35px;border:none;border-top:1px solid #333;">

<p>🙏 Si esta información te fue útil, puedes apoyar este proyecto:</p>

<div style="display:flex;gap:10px;flex-wrap:wrap;">

<button onclick="navigator.share({title:'Ayuda en Japón',text:document.title,url:window.location.href})"
style="padding:8px 14px;border-radius:6px;">
↗ Compartir
</button>

<button onclick="mostrarGuardar()"
style="padding:8px 14px;border-radius:6px;">
• Guardar
</button>

<button onclick="irAApoyo()"
style="padding:8px 14px;border-radius:6px;">
❤️ Apoyar
</button>

<div id="guardar-pagina" style="display:none;width:100%;margin-top:14px;">

<p><strong>📌 Cómo guardar esta página</strong></p>

<p><b>En iPhone / iPad:</b><br>
Pulsa compartir → “Añadir a pantalla de inicio”.
</p>

<p><b>En Android:</b><br>
Menú (⋮) → “Añadir a pantalla de inicio”.
</p>

<p><b>En computadora:</b><br>
Ctrl + D o ⭐ en navegador.
</p>

</div>

<p style="font-size:12px;color:#777;margin-top:10px;width:100%;">
También puedes colaborar con tarjeta o débito.
</p>

</div>

<div style="margin-top:30px;display:flex;gap:10px;flex-wrap:wrap;justify-content:center;">

<button onclick="document.getElementById('buscador').scrollIntoView({behavior:'smooth'})"
style="
background:#2ecc71;
color:white;
padding:12px 16px;
border:none;
border-radius:10px;
font-weight:bold;
">
⬅️ Volver al buscador
</button>

<button onclick="document.getElementById('servicios').scrollIntoView({behavior:'smooth'})"
style="
background:#3498db;
color:white;
padding:12px 16px;
border:none;
border-radius:10px;
font-weight:bold;
">
⬆️ Volver al tema Servicios
</button>

</div>
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
salud: "salud",
hospital: "salud",
hos: "salud",
doctor: "salud",
medico: "salud",
médico: "salud",
farmacia: "salud",
enfermo: "salud",
fiebre: "salud",
dolor: "salud",
clinica: "salud",
clínica: "salud",
medicina: "salud",


// 🏨 ALOJAMIENTO
alojamiento: "alojamiento",
hotel: "alojamiento",
hostal: "alojamiento",
hospedaje: "alojamiento",
dormir: "alojamiento",
habitacion: "alojamiento",
habitación: "alojamiento",
reservar: "alojamiento",
checkin: "alojamiento",
checkout: "alojamiento",
recepcion: "alojamiento",
recepción: "alojamiento",
hostel: "alojamiento",
ryokan: "alojamiento",
capsula: "alojamiento",
cápsula: "alojamiento",
capsule: "alojamiento",
airbnb: "alojamiento",
"internet cafe": "alojamiento",
"internet café": "alojamiento",

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
  // LLEGADA A JAPÓN
"llegada": "llegada",
"llegada a japon": "llegada",
"llegada a japón": "llegada",
"aeropuerto": "llegada",
"llegue": "llegada",
"llegué": "llegada",
"recién llegado": "llegada",
"primer dia": "llegada",
"primer día": "llegada",
"que hago al llegar": "llegada",
"que hacer al llegar": "llegada",
"no se que hacer aeropuerto": "llegada",
"salir aeropuerto": "llegada",
"llegar japon": "llegada",
"llegar a japon": "llegada",
"llegar a japón": "llegada",

// TRANSPORTE DESDE AEROPUERTO
"como ir del aeropuerto": "llegada",
"como ir aeropuerto ciudad": "llegada",
"transporte aeropuerto": "llegada",
"tren aeropuerto": "llegada",
"bus aeropuerto": "llegada",
"taxi aeropuerto": "llegada",
"ir del aeropuerto al hotel": "llegada",

// INTERNET / SIM
"internet aeropuerto": "llegada",
"no tengo internet": "llegada",
"wifi aeropuerto": "llegada",
"sim japon": "llegada",
"esim japon": "llegada",
"comprar sim": "llegada",
"internet japon": "llegada",

// TARJETA IC
"tarjeta ic": "llegada",
"suica": "llegada",
"pasmo": "llegada",
"ic card": "llegada",
"como usar suica": "llegada",
"como usar pasmo": "llegada",

// HOTEL / DIRECCIÓN
"como llegar al hotel": "llegada",
"direccion hotel japon": "llegada",
"llegar al hotel": "llegada",
"mostrar direccion japon": "llegada",

// DINERO
"cambiar dinero": "llegada",
"cambio yenes": "llegada",
"retirar dinero japon": "llegada",
"atm aeropuerto": "llegada",
"efectivo japon": "llegada",

// EQUIPAJE / TAKKYUBIN
"enviar maleta": "llegada",
"enviar equipaje": "llegada",
"maleta aeropuerto": "llegada",
"kuroneko": "llegada",
"takkyubin": "llegada",
"takyubin": "llegada",
"yamato": "llegada",
"equipaje hotel": "llegada",

// AYUDA GENERAL
"estoy perdido aeropuerto": "llegada",
"no entiendo aeropuerto": "llegada",
"ayuda aeropuerto japon": "llegada",
"informacion aeropuerto": "llegada",
"mostrador informacion": "llegada",

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
  llegada: "llegada",
  emergencia: "emergencia",
  policia: "policia",
  transporte: "transporte",
  salud: "salud",
  alojamiento: "alojamiento",
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
function mostrarGuardar() {
  const guardar = document.getElementById("guardar-pagina");
  const apoyo = document.getElementById("apoyo-pagina");

  if (guardar) guardar.style.display = "block";
  if (apoyo) apoyo.style.display = "none";
}
function irAApoyo() {
  const apoyo = document.getElementById("apoyo");

  if (apoyo) {
    apoyo.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}