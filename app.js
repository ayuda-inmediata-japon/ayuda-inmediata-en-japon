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

<p><strong>Koban (交番):</strong> pequeñas estaciones de policía ubicadas en barrios, estaciones de tren y zonas comerciales.</p>

<img src="koban.jpg" class="info-img">

<p><strong>Si necesitas ayuda de la policía, busca un Koban.</strong> Puedes pedir orientación o ayuda.</p>

<p><strong>📞 Policía: 110</strong></p>

<p>🟢 Presiona una situación para ver qué hacer:</p>

<div class="subtemas-box">

<details class="subtema-card">
<summary>🚨 Me robaron algo o fui víctima de estafa</summary>
<div class="subtema-content">

<p><strong>Qué hacer:</strong></p>
<ol>
<li>Mantén la calma.</li>
<li>Busca un Koban cercano o llama al 110.</li>
<li>Explica lo ocurrido con la mayor claridad posible.</li>
<li>Si fue una estafa, guarda mensajes, capturas o pruebas.</li>
</ol>

<p><strong>Información útil para la policía:</strong></p>
<ul>
<li>Hora aproximada</li>
<li>Lugar donde ocurrió</li>
<li>Descripción del objeto robado</li>
<li>Pruebas o fotos</li>
</ul>

<p><strong>Frases útiles:</strong></p>
<p>盗まれました<br>Nusumaremashita</p>

</div>
</details>

</div>

<hr style="margin:30px 0;border:none;border-top:1px solid #333;">

<div style="text-align:center;">
<p style="font-size:18px;margin-bottom:10px;">🙏 Si esta información te fue útil, puedes:</p>

<div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap;">

<button onclick="if(navigator.share){navigator.share({title:document.title,url:window.location.href});}else{alert('Usa el botón compartir del navegador');}"
style="padding:10px 16px;border-radius:10px;background:#222;color:#fff;border:1px solid #444;">
↗ Compartir
</button>

<button onclick="document.getElementById('guardar-pagina').scrollIntoView({behavior:'smooth'})"
style="padding:10px 16px;border-radius:10px;background:#222;color:#fff;border:1px solid #444;">
• Guardar
</button>

<button onclick="document.getElementById('apoyo').scrollIntoView({behavior:'smooth'})"
style="padding:10px 16px;border-radius:10px;background:#222;color:#ff6b6b;border:1px solid #444;">
❤️ Apoyar
</button>

</div>
</div>

<p style="margin-top:15px;color:#aaa;font-size:14px;text-align:center;">
También es posible colaborar utilizando tarjeta de crédito o débito.
</p>

<!-- GUARDAR -->
<div id="guardar-pagina" style="margin-top:30px;scroll-margin-top:80px;background:#111;padding:20px;border-radius:12px;border:1px solid #333;">

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

<!-- APOYO -->
<div id="apoyo" style="margin-top:30px;scroll-margin-top:80px;background:#111;padding:20px;border-radius:16px;border:1px solid #333;text-align:center;">

<p style="color:#777;font-size:13px;">🙏 Gracias por utilizar esta guía</p>

<h3 style="font-size:22px;margin:5px 0;">❤️ Apoya esta guía</h3>

<p style="color:#ccc;">
Si esta guía te resultó útil, puedes apoyarla con una pequeña colaboración.
Tu ayuda permite mantener esta información gratuita.
</p>

<div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap;margin-top:15px;">

<a href="https://paypal.me/JGarciaUmey" target="_blank"
style="padding:12px 16px;border-radius:10px;background:#2563eb;color:white;text-decoration:none;font-weight:600;">
💳 PayPal
</a>

<a href="https://ko-fi.com/ayudainmediatajapon" target="_blank"
style="padding:12px 16px;border-radius:10px;background:#16a34a;color:white;text-decoration:none;font-weight:600;">
☕ Ko-fi
</a>

<a href="#"
style="padding:12px 16px;border-radius:10px;background:#ef4444;color:white;text-decoration:none;font-weight:600;">
📱 PayPay
</a>

</div>

<p style="margin-top:12px;font-size:13px;color:#777;">
Incluso una pequeña colaboración ayuda mucho.
</p>

</div>

<!-- BOTONES VOLVER -->
<div style="margin-top:30px;display:flex;flex-direction:column;align-items:center;gap:12px;">

<button onclick="document.getElementById('inicio').scrollIntoView({behavior:'smooth'})"
style="
width:85%;
max-width:320px;
padding:14px;
border-radius:14px;
background:#22c55e;
color:white;
border:none;
font-weight:700;
font-size:16px;
box-shadow:0 4px 12px rgba(0,0,0,0.4);
">
⬅️ Volver al buscador
</button>

<button onclick="document.getElementById('policia').scrollIntoView({behavior:'smooth'})"
style="
width:85%;
max-width:320px;
padding:14px;
border-radius:14px;
background:#3b82f6;
color:white;
border:none;
font-weight:700;
font-size:16px;
box-shadow:0 4px 12px rgba(0,0,0,0.4);
">
⬆️ Volver al tema Policía
</button>

</div>
`,emergencia: `
<h2 id="emergencia">🚨 Emergencia en Japón</h2>

<img src="emergencia.jpg" class="info-img" alt="Emergencia en Japón">

<p><strong>En Japón las emergencias se atienden con rapidez, orden y mucha seriedad.</strong></p>

<p>Si ocurre una situación urgente, mantén la calma y usa el número correcto.</p>

<p><strong>📞 Números importantes:</strong></p>
<p>🚓 Policía: <strong>110</strong></p>
<p>🚑🔥 Ambulancia / Bomberos: <strong>119</strong></p>

<p><strong>¿Cuál usar?</strong></p>
<ul>
<li><strong>110:</strong> robo, peligro, pelea, accidente de tránsito, persona sospechosa o problema policial.</li>
<li><strong>119:</strong> ambulancia, incendio, humo, heridas graves, dificultad para respirar, desmayo o emergencia médica.</li>
</ul>

<img src="ambulancia.jpg" class="info-img" alt="Ambulancia en Japón">

<p><strong>🚑 Ambulancia (119)</strong></p>
<p>En Japón la ambulancia es <strong>gratuita</strong>. Si se trata de una emergencia médica real, normalmente es mejor llamar una ambulancia que intentar ir en taxi.</p>

<img src="policia.jpg" class="info-img" alt="Policía en Japón">

<p><strong>🚓 Policía (110)</strong></p>
<p>La policía ayuda, orienta y protege. También puedes acudir a un <strong>Koban</strong> si necesitas ayuda directa.</p>

<img src="bomberos.jpg" class="info-img" alt="Bomberos en Japón">

<p><strong>🔥 Bomberos (119)</strong></p>
<p>Los bomberos no solo atienden incendios. También participan en rescates, accidentes, apertura de puertas en emergencias y apoyo en situaciones graves.</p>

<p style="font-size:1.15rem;font-weight:800;color:#f3f3f3;margin:24px 0 16px;display:flex;align-items:center;gap:10px;">
  <span style="font-size:1.25rem;">🟢</span> Presiona una situación para ver qué hacer:
</p>

<div class="subtemas-box">

  <details class="subtema-card">
    <summary>🚑 Necesito ambulancia / emergencia médica</summary>
    <div class="subtema-content">

      <p><strong>Qué hacer:</strong></p>
      <ol>
        <li>Llama al <strong>119</strong>.</li>
        <li>Mantén la calma.</li>
        <li>Explica qué pasó.</li>
        <li>Di tu ubicación exacta.</li>
        <li>No muevas a la persona si la lesión parece grave.</li>
      </ol>

      <p><strong>Dónde ir:</strong></p>
      <p>Si la persona no puede moverse o respira mal, quédate en el lugar y espera la ambulancia. Si estás en una estación, tienda, hotel o edificio, pide ayuda al personal.</p>

      <p><strong>A quién llamar:</strong></p>
      <p><strong>119</strong> (ambulancia / bomberos)</p>

      <p><strong>Cómo explicarlo:</strong></p>
      <p>Di qué pasó, cuántas personas están afectadas y dónde estás.</p>

      <p><strong>Frases útiles:</strong></p>
      <p>Español<br>Necesito una ambulancia</p>
      <p>Romaji<br>Kyūkyūsha o onegaishimasu</p>
      <p>日本語<br><b>救急車をお願いします</b></p>

      <p>Español<br>Está herido</p>
      <p>Romaji<br>Kega shiteimasu</p>
      <p>日本語<br><b>けがしています</b></p>

      <p>Español<br>No respira bien</p>
      <p>Romaji<br>Yoku kokyū ga dekimasen</p>
      <p>日本語<br><b>よく呼吸ができません</b></p>

      <p>Español<br>Se desmayó</p>
      <p>Romaji<br>Taoremashita</p>
      <p>日本語<br><b>倒れました</b></p>

    </div>
  </details>

  <details class="subtema-card">
    <summary>🔥 Hay incendio / humo</summary>
    <div class="subtema-content">

      <p><strong>Qué hacer:</strong></p>
      <ol>
        <li>Llama al <strong>119</strong>.</li>
        <li>Sal inmediatamente del lugar.</li>
        <li>No uses ascensor.</li>
        <li>Aléjate del humo y del fuego.</li>
        <li>Avisa a otras personas si puedes hacerlo sin ponerte en riesgo.</li>
      </ol>

      <p><strong>Dónde ir:</strong></p>
      <p>Ve a una zona abierta y segura, lejos del edificio o del vehículo afectado.</p>

      <p><strong>A quién llamar:</strong></p>
      <p><strong>119</strong> (bomberos)</p>

      <p><strong>Cómo explicarlo:</strong></p>
      <p>Di dónde hay fuego o humo y si hay personas atrapadas o heridas.</p>

      <p><strong>Frases útiles:</strong></p>
      <p>Español<br>Hay un incendio</p>
      <p>Romaji<br>Kaji desu</p>
      <p>日本語<br><b>火事です</b></p>

      <p>Español<br>Hay humo</p>
      <p>Romaji<br>Kemuri ga deteimasu</p>
      <p>日本語<br><b>煙が出ています</b></p>

    </div>
  </details>

  <details class="subtema-card">
    <summary>🚓 Me robaron / estoy en peligro</summary>
    <div class="subtema-content">

      <p><strong>Qué hacer:</strong></p>
      <ol>
        <li>Aléjate del peligro.</li>
        <li>Llama al <strong>110</strong>.</li>
        <li>No enfrentes a la persona si no es seguro.</li>
        <li>Guarda pruebas si puedes: fotos, mensajes, capturas o lugar.</li>
      </ol>

      <p><strong>Dónde ir:</strong></p>
      <p>Busca un Koban, una estación, una tienda, un hotel o cualquier lugar con personal.</p>

      <p><strong>A quién llamar:</strong></p>
      <p><strong>110</strong> (policía)</p>

      <p><strong>Cómo explicarlo:</strong></p>
      <p>Di qué pasó, dónde ocurrió, a qué hora y si viste a la persona o vehículo.</p>

      <p><strong>Frases útiles:</strong></p>
      <p>Español<br>Llama a la policía</p>
      <p>Romaji<br>Keisatsu o yonde kudasai</p>
      <p>日本語<br><b>警察を呼んでください</b></p>

      <p>Español<br>Me robaron</p>
      <p>Romaji<br>Nusumaremashita</p>
      <p>日本語<br><b>盗まれました</b></p>

      <p>Español<br>Estoy en peligro</p>
      <p>Romaji<br>Abunai desu</p>
      <p>日本語<br><b>危ないです</b></p>

    </div>
  </details>

  <details class="subtema-card">
    <summary>📄 Perdí documentos o billetera</summary>
    <div class="subtema-content">

      <p><strong>Qué hacer:</strong></p>
      <ol>
        <li>Mantén la calma.</li>
        <li>Busca un Koban cercano.</li>
        <li>Explica qué perdiste y dónde crees que ocurrió.</li>
        <li>Da todos los detalles posibles.</li>
      </ol>

      <p><strong>Dónde ir:</strong></p>
      <p>A un Koban, estación de tren, oficina de objetos perdidos o lugar donde crees que lo viste por última vez.</p>

      <p><strong>A quién llamar:</strong></p>
      <p>Si es urgente, <strong>110</strong>. Si no, puedes acudir directamente al Koban.</p>

      <p><strong>Cómo explicarlo:</strong></p>
      <p>Di qué objeto era, qué tenía dentro, la hora aproximada y el lugar donde lo perdiste.</p>

      <p><strong>Frases útiles:</strong></p>
      <p>Español<br>Perdí mi billetera</p>
      <p>Romaji<br>Saifu o nakushimashita</p>
      <p>日本語<br><b>財布をなくしました</b></p>

      <p>Español<br>Perdí mi pasaporte</p>
      <p>Romaji<br>Pasupōto o nakushimashita</p>
      <p>日本語<br><b>パスポートをなくしました</b></p>

    </div>
  </details>

  <details class="subtema-card">
    <summary>🧭 Estoy perdido / no sé dónde estoy</summary>
    <div class="subtema-content">

      <p><strong>Qué hacer:</strong></p>
      <ol>
        <li>Busca una estación, tienda, hotel o Koban.</li>
        <li>Muestra la dirección o nombre del lugar al que quieres ir.</li>
        <li>Pide ayuda con calma.</li>
      </ol>

      <p><strong>Dónde ir:</strong></p>
      <p>A una estación, un Koban, un hotel, una tienda grande o cualquier lugar con personal.</p>

      <p><strong>A quién pedir ayuda:</strong></p>
      <p>Al personal de la estación, tienda, hotel o a la policía.</p>

      <p><strong>Cómo explicarlo:</strong></p>
      <p>Muestra la dirección, el nombre del hotel, una captura del mapa o el destino escrito.</p>

      <p><strong>Frases útiles:</strong></p>
      <p>Español<br>Estoy perdido</p>
      <p>Romaji<br>Michi ni mayoimashita</p>
      <p>日本語<br><b>道に迷いました</b></p>

      <p>Español<br>¿Dónde está este lugar?</p>
      <p>Romaji<br>Kono basho wa doko desu ka?</p>
      <p>日本語<br><b>この場所はどこですか？</b></p>

    </div>
  </details>

</div>

<h3>🌍 Si tienes dificultad con el idioma</h3>

<p><strong>📱 Puedes mostrar este mensaje:</strong></p>

<p>Español<br>No hablo mucho japonés</p>
<p>Romaji<br>Sumimasen, nihongo ga amari hanasemasen</p>
<p>日本語<br><b>すみません、日本語があまり話せません</b></p>

<p>Español<br>¿Puedo usar un traductor para explicarme?</p>
<p>Romaji<br>Honyaku apuri o tsukatte setsumei shite mo ii desu ka?</p>
<p>日本語<br><b>翻訳アプリを使って説明してもいいですか？</b></p>

<p>Si no puedes comunicarte bien en japonés, puedes usar cualquier traductor desde tu teléfono o dispositivo. No es necesario instalar una aplicación. Puedes abrir un traductor directamente desde tu navegador y mostrar el texto.</p>

<h3>🌐 Traductores recomendados</h3>

<p><span style="color:#3aa0ff;">●</span> <a href="https://www.deepl.com/translator" target="_blank">Traductor español → japonés (DeepL)</a></p>
<p><span style="color:#ffd43b;">●</span> <a href="https://translate.google.com" target="_blank">Traductor español → japonés (Google)</a></p>
<p><span style="color:#00d26a;">●</span> <a href="https://chat.openai.com" target="_blank">ChatGPT (explicar o traducir una situación)</a></p>

<h3>🗣️ Frases útiles</h3>

<p>Español<br>Ayuda por favor</p>
<p>Romaji<br>Tasukete kudasai</p>
<p>日本語<br><b>助けてください</b></p>

<p>Español<br>Necesito ayuda urgente</p>
<p>Romaji<br>Kinkyū desu</p>
<p>日本語<br><b>緊急です</b></p>

<div style="
border:3px solid #f5c542;
border-radius:18px;
padding:20px;
margin:24px 0;
background:#1c1c1c;
box-shadow:0 0 8px rgba(245,197,66,0.4);
animation:brilloConsejo 4s ease-in-out infinite;
">
  <p style="
  color:#f5c542;
  font-size:1.5rem;
  font-weight:800;
  margin:0 0 14px 0;
  ">💡 Consejo importante</p>

  <p>En Japón puedes pedir ayuda aunque no hables japonés. Muestra tu teléfono, tu ubicación, una frase traducida o el nombre del lugar al que quieres ir.</p>

  <p>Si se trata de una emergencia médica real, es mejor llamar ambulancia que intentar llegar por tu cuenta.</p>
</div>

<hr style="margin-top:35px;border:none;border-top:1px solid rgba(255,255,255,0.12);">

<p style="
font-weight:800;
font-size:22px;
margin:0 0 14px 0;
color:#fff;
">🙏 Si esta información te fue útil, puedes:</p>

<div style="
display:flex;
gap:12px;
flex-wrap:wrap;
margin:14px 0 20px;
">
  <button type="button" onclick="compartir()" style="
  background:#1a1a1a;
  color:#fff;
  border:1px solid rgba(255,255,255,0.15);
  border-radius:14px;
  padding:12px 16px;
  font-weight:700;
  font-size:16px;
  cursor:pointer;
  box-shadow:0 2px 10px rgba(0,0,0,0.25);
  ">
    ↗ Compartir
  </button>

  <button type="button" onclick="mostrarGuardar()" style="
  background:#1a1a1a;
  color:#fff;
  border:1px solid rgba(255,255,255,0.15);
  border-radius:14px;
  padding:12px 16px;
  font-weight:700;
  font-size:16px;
  cursor:pointer;
  box-shadow:0 2px 10px rgba(0,0,0,0.25);
  ">
    • Guardar
  </button>

  <button type="button" onclick="mostrarApoyo()" style="
  background:#1a1a1a;
  color:#ff8a8a;
  border:1px solid rgba(255,255,255,0.15);
  border-radius:14px;
  padding:12px 16px;
  font-weight:700;
  font-size:16px;
  cursor:pointer;
  box-shadow:0 2px 10px rgba(0,0,0,0.25);
  ">
    ❤️ Apoyar
  </button>
</div>

<div id="guardar-pagina" style="
display:none;
background:#111;
color:#f1f1f1;
border:1px solid rgba(255,255,255,0.10);
border-radius:16px;
padding:18px;
margin:16px 0;
">
  <p style="font-size:18px;font-weight:800;margin-bottom:12px;">📌 Cómo guardar esta página</p>

  <p><strong>iPhone:</strong><br>
  Pulsa compartir y luego <strong>“Añadir a pantalla de inicio”</strong>.</p>

  <p><strong>Android:</strong><br>
  Pulsa el menú del navegador y selecciona <strong>“Añadir a pantalla de inicio”</strong>.</p>

  <p><strong>Computadora:</strong><br>
  Guarda esta página en favoritos usando la estrella ⭐ del navegador.</p>
</div>

<div id="apoyo-seccion" style="
display:none;
background:#e9e9e9;
color:#2c2c2c;
border-radius:28px;
padding:26px 22px;
margin:20px 0;
box-shadow:0 8px 25px rgba(0,0,0,0.22);
text-align:center;
">

  <p style="
  font-size:18px;
  color:#7a7a7a;
  font-weight:700;
  margin:0 0 16px 0;
  ">🙏 Gracias por utilizar esta guía</p>

  <h3 style="
  font-size:2.3rem;
  font-weight:900;
  margin:0 0 18px 0;
  color:#111;
  ">❤️ Apoya esta guía</h3>

  <p style="
  font-size:1.05rem;
  line-height:1.9;
  color:#4a4a4a;
  font-weight:700;
  margin:0 0 24px 0;
  ">
    Si esta guía te resultó útil, puedes apoyarla con una pequeña colaboración. Tu ayuda permite mantener esta información gratuita y disponible para más personas que la necesitan.
  </p>

  <div style="
  display:flex;
  flex-wrap:wrap;
  justify-content:center;
  gap:14px;
  margin:0 0 24px 0;
  ">
    <a href="https://paypal.me/JGarciaUmey" target="_blank" style="
    background:#f1f1f1;
    color:#333;
    text-decoration:none;
    padding:16px 22px;
    border-radius:18px;
    font-weight:800;
    font-size:1.05rem;
    box-shadow:0 2px 8px rgba(0,0,0,0.08);
    ">
      💳 PayPal
    </a>

    <a href="https://ko-fi.com/ayudainmediatajapon" target="_blank" style="
    background:#f1f1f1;
    color:#333;
    text-decoration:none;
    padding:16px 22px;
    border-radius:18px;
    font-weight:800;
    font-size:1.05rem;
    box-shadow:0 2px 8px rgba(0,0,0,0.08);
    ">
      ☕ Ko-fi
    </a>

    <a href="https://qr.paypay.ne.jp/p2p01_uhtObkY1IUOc9WQ6" target="_blank" style="
    background:#f1f1f1;
    color:#333;
    text-decoration:none;
    padding:16px 22px;
    border-radius:18px;
    font-weight:800;
    font-size:1.05rem;
    box-shadow:0 2px 8px rgba(0,0,0,0.08);
    ">
      📱 PayPay
    </a>
  </div>

  <p style="
  font-size:1rem;
  font-weight:700;
  color:#6a6a6a;
  line-height:1.8;
  margin:0;
  ">
    Incluso una pequeña colaboración ayuda a mantener esta guía gratuita y disponible para más personas.
  </p>
</div>

<p style="font-size:15px;color:#bdbdbd;line-height:1.7;margin:0 0 22px 0;">
También es posible colaborar utilizando tarjeta de crédito o débito a través de estas plataformas.
</p>

<div style="display:flex;flex-direction:column;gap:14px;margin-top:30px;">

  <button onclick="document.getElementById('buscador').scrollIntoView({behavior:'smooth'});" style="
  width:100%;
  padding:16px;
  font-size:1.2rem;
  font-weight:800;
  border:none;
  border-radius:16px;
  color:#fff;
  cursor:pointer;
  background:linear-gradient(135deg,#00c853,#00e676);
  box-shadow:0 0 16px rgba(0,255,100,0.35);
  ">
    ⬅️ Volver al buscador
  </button>

  <button onclick="document.getElementById('emergencia').scrollIntoView({behavior:'smooth'});" style="
  width:100%;
  padding:16px;
  font-size:1.2rem;
  font-weight:800;
  border:none;
  border-radius:16px;
  color:#fff;
  cursor:pointer;
  background:linear-gradient(135deg,#2196f3,#42a5f5);
  box-shadow:0 0 16px rgba(33,150,243,0.35);
  ">
    ⬆️ Volver al inicio de Emergencia
  </button>
</div>
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