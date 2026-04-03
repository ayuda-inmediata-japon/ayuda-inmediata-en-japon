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

<p><strong>Si necesitas moverte en Japón y no sabes qué hacer, sigue estas guías rápidas según tu situación:</strong></p>

<!-- 🚄 SHINKANSEN -->
<h3>🚄 Viajar entre ciudades (Shinkansen)</h3>
<img src="shinkansen.jpg" class="info-img">

<p><strong>Qué hacer:</strong></p>
<p>- Ve a una estación grande (JR)</p>
<p>- Busca “Shinkansen” o pregunta</p>

<p><strong>Cómo comprar:</strong></p>
<p>- Máquina automática (inglés disponible)</p>
<p>- Ventanilla JR (JR Ticket Office)</p>

<p><strong>Asiento:</strong></p>
<p>- 自由席 (sin reserva, más barato)</p>
<p>- 指定席 (asiento reservado)</p>

<p><strong>Equipaje:</strong></p>
<p>- Maletas grandes necesitan reserva especial</p>

<p><strong>Consejo:</strong></p>
<p>- Llega 15 minutos antes</p>

<!-- 🚆 TREN -->
<h3>🚆 Tren (dentro de la ciudad)</h3>
<img src="tren.jpg" class="info-img">

<p><strong>Qué hacer:</strong></p>
<p>- Usa Google Maps para saber línea y estación</p>

<p><strong>Cómo pagar:</strong></p>
<p>- Tarjeta IC (Suica / Pasmo)</p>
<p>- Tocar al entrar y salir</p>

<p><strong>Consejo:</strong></p>
<p>- Sigue colores y números de línea</p>

<!-- 🚇 METRO -->
<h3>🚇 Metro (subterráneo)</h3>
<img src="metro.jpg" class="info-img">

<p><strong>Qué hacer:</strong></p>
<p>- Igual que tren</p>
<p>- Sigue señalización en inglés</p>

<p><strong>Consejo:</strong></p>
<p>- Puede ser complejo → sigue colores</p>

<!-- 🚌 BUS -->
<h3>🚌 Autobús</h3>
<img src="bus.jpg" class="info-img">

<p><strong>Cómo usar:</strong></p>
<p>- Entras por atrás</p>
<p>- Sales por delante</p>
<p>- Pagas al bajar</p>

<p><strong>Consejo:</strong></p>
<p>- Usa tarjeta IC o monedas</p>

<!-- 🚖 TAXI -->
<h3>🚖 Taxi</h3>
<img src="taxi.jpg" class="info-img">

<p><strong>Cómo tomar:</strong></p>
<p>- Busca luz roja (libre)</p>
<p>- O usa parada de taxi</p>

<p><strong>Importante:</strong></p>
<p>- Puertas automáticas</p>
<p>- No se deja propina</p>

<p><strong>Qué hacer:</strong></p>
<p>- Mostrar dirección en japonés</p>

<!-- 🚲 BICICLETA -->
<h3>🚲 Alquiler de bicicletas</h3>
<img src="bici.jpg" class="info-img">

<p><strong>¿Cuándo usar?</strong></p>
<p>- Distancias cortas</p>
<p>- Turismo</p>

<p><strong>¿Dónde alquilar?</strong></p>
<p>- Estaciones</p>
<p>- Apps de bicicletas</p>

<p><strong>Cómo alquilar:</strong></p>
<p>
1. Descargar app<br>
2. Registrarse<br>
3. Escanear QR<br>
4. Desbloquear bici
</p>

<p><strong>Precio:</strong></p>
<p>- ¥100 – ¥300 (30 min)</p>
<p>- ¥1000 – ¥2000 (día)</p>

<p><strong>Cómo devolver:</strong></p>
<p>- Solo en estaciones autorizadas</p>

<p><strong>Importante:</strong></p>
<p>- No estacionar mal (multa)</p>

<!-- 💡 CONSEJO -->
<div style="
border:3px solid #f5c542;
border-radius:16px;
padding:18px;
margin-top:25px;
background:linear-gradient(145deg,#1a1a1a,#000);
box-shadow:0 0 12px rgba(245,197,66,0.4);
">

<h3 style="color:#f5c542;font-size:20px;">
💡 Consejo importante
</h3>

<p>
Compra una tarjeta IC (<strong>Suica / Pasmo</strong>)  
Te permite usar casi todo el transporte sin comprar tickets cada vez.
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

<div id="guardar-pagina" style="display:none;margin-top:18px;">
<p><strong>📌 Cómo guardar esta página</strong></p>
<p>iPhone / Android: añadir a favoritos o pantalla de inicio</p>
</div>

<p style="font-size:12px;color:#777;margin-top:8px">
También puedes colaborar con tarjeta.
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
`
,
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