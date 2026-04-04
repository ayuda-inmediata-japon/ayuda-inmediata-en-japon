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

<p>🙏 Si esta información te fue útil, puedes:</p>

<div style="display:flex;gap:10px;flex-wrap:wrap;">

<button onclick="navigator.share({title:'Ayuda en Japón',text:document.title,url:window.location.href})">
↗ Compartir
</button>

<button onclick="mostrarGuardar()">
• Guardar
</button>

<button onclick="irAApoyo()">
❤️ Apoyar
</button>

</div>

<div id="guardar-pagina" style="display:none;">

<p><strong>📌 Cómo guardar esta página</strong></p>

<p><b>iPhone / iPad:</b> Añadir a pantalla de inicio</p>
<p><b>Android:</b> Añadir a pantalla de inicio</p>
<p><b>PC:</b> Ctrl + D</p>

</div>

<p style="font-size:12px;color:#777;">
También es posible colaborar utilizando tarjeta de crédito o débito.
</p>

<div style="margin-top:20px;display:flex;gap:10px;flex-wrap:wrap;">

<button onclick="document.getElementById('buscador').scrollIntoView({behavior:'smooth'})">
⬅️ Volver al buscador
</button>

<button onclick="document.getElementById('llegada').scrollIntoView({behavior:'smooth'})">
⬆️ Volver al tema Llegada
</button>

</div>
salud: `
<h2 id="salud">🏥 Salud en Japón</h2>

<p>
En Japón puedes ir directamente a una clínica sin cita en la mayoría de casos.
</p>

<p>
✔ Si tienes seguro (nacional o de empresa), pagas aprox. <strong>30%</strong>.<br>
✔ Si no tienes seguro (turista), igual te atienden, pero pagas <strong>100%</strong>.
</p>

<p>
💰 Ejemplo aproximado:
<ul>
<li>Consulta con seguro: ¥3,000 – ¥10,000</li>
<li>Sin seguro: ¥10,000 – ¥30,000 o más</li>
<li>Hospital o emergencia: puede ser más alto</li>
</ul>
</p>

<p>
👉 Cualquier clínica puede atenderte, incluso siendo turista.
</p>

<div style="display:flex; gap:10px; overflow-x:auto; margin:10px 0;">

<img src="IMAGEN_1" style="width:85%; border-radius:10px;">
<img src="IMAGEN_2" style="width:85%; border-radius:10px;">
<img src="IMAGEN_3" style="width:85%; border-radius:10px;">

</div>

<p>🟢 Presiona una situación para ver qué hacer:</p>

<div class="opcion" onclick="mostrarSubtema('salud1')">🤒 Me siento mal / fiebre / dolor</div>
<div id="salud1" class="subtema">
<p>Busca una clínica cercana (クリニック).</p>
<p>En la mayoría puedes entrar sin cita.</p>
<p>Lleva pasaporte y seguro si tienes.</p>
<p>Explica tus síntomas o usa traductor.</p>
</div>

<div class="opcion" onclick="mostrarSubtema('salud2')">🚑 Emergencia médica</div>
<div id="salud2" class="subtema">
<p>Llama al <strong>119</strong>.</p>
<p>La ambulancia es gratuita.</p>
<p>Di tu ubicación lo más claro posible.</p>
</div>

<div class="opcion" onclick="mostrarSubtema('salud3')">💊 Comprar medicina</div>
<div id="salud3" class="subtema">
<p>Busca una farmacia (ドラッグストア).</p>
<p>Para síntomas leves puedes comprar sin receta.</p>
<p>Pide ayuda al personal.</p>
</div>

<div class="opcion" onclick="mostrarSubtema('salud4')">🏥 Ir a hospital grande</div>
<div id="salud4" class="subtema">
<p>Puede requerir cita o referencia.</p>
<p>Si no es urgente, ve primero a clínica.</p>
<p>Puede haber espera larga.</p>
</div>

<div class="opcion" onclick="mostrarSubtema('salud5')">💳 No tengo seguro</div>
<div id="salud5" class="subtema">
<p>Igual puedes atenderte.</p>
<p>Pagarás el costo completo.</p>
<p>Se paga el mismo día normalmente.</p>
</div>

<div class="opcion" onclick="mostrarSubtema('salud6')">🗣️ No hablo japonés</div>
<div id="salud6" class="subtema">
<p>Usa traductor en el celular.</p>
<p>Muestra frases escritas.</p>
<p>Algunos lugares tienen inglés básico.</p>
</div>

<h3>🌍 Si tienes dificultad con el idioma</h3>

<p><strong>📱 Puedes mostrar este mensaje:</strong></p>

<ul style="line-height:1.9">

<li>
<strong>Español</strong><br>
No me siento bien.<br><br>
<strong>Romaji</strong><br>
Taichou ga warui desu.<br><br>
<strong>日本語</strong><br>
<span style="font-size:26px;font-weight:bold;">体調が悪いです。</span>
</li>

<li>
<strong>Español</strong><br>
Necesito ver a un doctor.<br><br>
<strong>Romaji</strong><br>
Isha ni mitai desu.<br><br>
<strong>日本語</strong><br>
<span style="font-size:26px;font-weight:bold;">医者に診てもらいたいです。</span>
</li>

</ul>

<h3>🌐 Traductores recomendados</h3>

<p>🔵 <a href="https://www.deepl.com/translator#es/ja/" target="_blank">Traductor español → japonés (DeepL)</a></p>
<p>🟡 <a href="https://translate.google.com/?sl=es&tl=ja&op=translate" target="_blank">Traductor español → japonés (Google)</a></p>
<p>🟢 <a href="https://chat.openai.com/" target="_blank">ChatGPT</a></p>

<h3>🗣️ Frases útiles</h3>

<ul style="line-height:1.9">

<li>
<strong>Español</strong><br>
Me duele aquí<br><br>
<strong>Romaji</strong><br>
Koko ga itai desu<br><br>
<strong>日本語</strong><br>
<span style="font-size:26px;font-weight:bold;">ここが痛いです</span>
</li>

<li>
<strong>Español</strong><br>
Tengo fiebre<br><br>
<strong>Romaji</strong><br>
Netsu ga arimasu<br><br>
<strong>日本語</strong><br>
<span style="font-size:26px;font-weight:bold;">熱があります</span>
</li>

<li>
<strong>Español</strong><br>
Necesito ayuda médica<br><br>
<strong>Romaji</strong><br>
Iryou no tasuke ga hitsuyou desu<br><br>
<strong>日本語</strong><br>
<span style="font-size:26px;font-weight:bold;">医療の助けが必要です</span>
</li>

</ul>

<div style="background:#2a2112;border:2px solid #f0b93a;box-shadow:0 0 14px rgba(240,185,58,.35);padding:18px;border-radius:16px;margin-top:18px;">
<h3 style="color:#f0c24b;margin-top:0;">💡 Consejo importante</h3>
<p style="margin-bottom:0;">
Si no es grave, ve primero a una clínica. Es más rápido y más económico.
</p>
</div>

<p>🙏 Si esta información te fue útil, puedes:</p>

<div style="display:flex;gap:10px;flex-wrap:wrap;">

<button onclick="navigator.share({title:'Ayuda en Japón',text:document.title,url:window.location.href})">
↗ Compartir
</button>

<button onclick="mostrarGuardar()">
• Guardar
</button>

<button onclick="irAApoyo()">
❤️ Apoyar
</button>

</div>

<div id="guardar-pagina" style="display:none;">

<p><strong>📌 Cómo guardar esta página</strong></p>

<p><b>iPhone / iPad:</b> Añadir a pantalla de inicio</p>
<p><b>Android:</b> Añadir a pantalla de inicio</p>
<p><b>PC:</b> Ctrl + D</p>

</div>

<p style="font-size:12px;color:#777;margin-top:10px;">
También es posible colaborar utilizando tarjeta de crédito o débito.
</p>

<div style="margin-top:30px;display:flex;gap:10px;flex-wrap:wrap;">

<button onclick="document.getElementById('buscador').scrollIntoView({behavior:'smooth'})">
⬅️ Volver al buscador
</button>

<button onclick="document.getElementById('salud').scrollIntoView({behavior:'smooth'})">
⬆️ Volver al tema Salud
</button>

</div>

`,
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
</a></p>



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

</div>no

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