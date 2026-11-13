# Revisión de Ayuda Inmediata en Japón

Fecha: 13 de noviembre de 2026.
Rama local: `pruebas/revision-navegacion-movil`, creada desde `main`.

## Estructura

Sitio estático con once páginas HTML, estilos compartidos en `styles.css`, buscador y respuestas en `app.js`, y funcionamiento sin conexión mediante `sw.js`. Varias páginas incorporan sus propios estilos y scripts. La portada alterna seis pantallas mediante JavaScript. No hay configuración de compilación ni suite de pruebas en el repositorio.

## Hallazgos y correcciones

- **Navegación:** dos manejadores resolvían algunos de los mismos enlaces a temas y podían ejecutar dos búsquedas. Se conserva un único resolver de esos enlaces, incluidos los accesos desde Turismo y Planifica. Se sincroniza la visibilidad del pie al entrar mediante un enlace de ayuda.
- **Tarjetas:** el acordeón cerraba todos los `details` de un contenedor amplio, incluidos los antecesores de la tarjeta elegida. Ahora cierra solamente tarjetas hermanas, conservando abiertas las principales.
- **Descubre Japón:** el vídeo de Nikkō usaba una clase sin estilos definidos. Se aplica el estilo de botón existente y se añade navegación a los tres artículos. Se mantienen la fotografía, los textos y los dos artículos en preparación.
- **Noticias:** el archivo terminaba dentro de la tercera tarjeta. Se cierran la tarjeta y el documento y se incorporan accesos de regreso arriba y al final. Se conserva la fecha editorial original y todo el contenido de las noticias.
- **Reservas y afiliados:** los enlaces directos a secciones interiores ahora abren sus tarjetas antecesoras; abrir una categoría ya no cierra inmediatamente su proveedor interior. Los botones de opciones se vinculan a sus paneles mediante `aria-controls`. Se mantienen todas las URL externas, parámetros e identificadores de afiliación; los enlaces de afiliación identificados ya tienen `sponsored`. Booking sigue siendo un enlace directo sin afiliación, tal como indica la página.
- **Teléfonos y teclado:** se limita el tamaño de imágenes y del diálogo a la ventana disponible; se mejora el ajuste de texto y el foco visible. El diálogo tiene nombre accesible, mantiene el foco dentro, admite Escape y devuelve el foco al botón que lo abrió.
- **Compartir:** las respuestas del buscador usaban Web Share sin comprobar su disponibilidad. Ahora hay alternativas para copiar el enlace y se contempla la cancelación.
- **Imágenes:** la guía inglesa apuntaba a `Img/english-hero.jpg`, inexistente. Se reutiliza la fotografía existente `Img/hero.jpg`.
- **Sin conexión:** se corrige `hero.jpg` por `Img/hero.jpg`, se incluyen las páginas que faltaban en la precaché y se incrementa su versión. La limpieza se limita a cachés del sitio y una respuesta HTML de error no reemplaza una copia válida.

## Ampliación de la navegación

Tras la autorización para continuar, se añadió historial entre las seis pantallas de portada. Atrás y Adelante recuperan la pantalla anterior; la recarga conserva la pantalla indicada en la URL. Los accesos a Apoyo desde las respuestas usan también esta navegación. El resolver de ayuda comparte la misma función para mostrar pantallas sin añadir entradas duplicadas al historial.

## Validación realizada

- Chromium local mediante Playwright, sin publicar el sitio.
- Once páginas revisadas a 375 px: sin errores de JavaScript ni anclas locales ausentes en el DOM inicial. Las imágenes sin `src` de los visores de Turismo y Japonés son elementos de interfaz que reciben la imagen al abrirse.
- Portada, Descubre Japón, Noticias y Reservas a 320, 375, 390, 768 y 1280 px: veinte comprobaciones sin desbordamiento horizontal.
- Recorrido portada → tarjetas → buscador; apertura de respuesta y tarjeta anidada; enlace directo a clínica; diálogo de orientación y Escape con retorno de foco; búsqueda de Kioto; enlace a Expedia dentro de Reservas; tercera noticia y botones de regreso.
- Prueba adicional de Atrás, Adelante, recarga, enlace directo a pantalla, apertura de Apoyo desde una respuesta y regreso al tema: correcta.
- Comparación con `main`: se conservan los textos visibles originales y las URL externas de las once páginas HTML.
- Noticias, Descubre Japón, Reservas y Planifica disponibles sin conexión tras instalar la nueva caché.
- `node --check app.js`, `node --check sw.js` y `git diff --check` correctos.
- Capturas locales en `/workspace/scratch/ayuda-review/`.

## Mejoras pendientes y límites

- Consolidar gradualmente estilos repetidos y reglas con `!important`; la portada acumula muchas capas de ajustes. Se evita una reestructuración amplia que pueda cambiar su diseño actual.
- La navegación de las seis pantallas ya admite historial y enlaces directos. Queda pendiente una prueba en dispositivos físicos con Safari.
- Revisar editorialmente las noticias de inmigración y contrastar fechas, importes y requisitos con sus fuentes oficiales. Esta revisión conserva sus afirmaciones; no certifica su vigencia jurídica.
- Confirmar comisiones y atribución real en los paneles de afiliación, especialmente Klook. Conservar parámetros no demuestra que una reserva genere comisión. No se realizaron reservas ni se modificaron cuentas de afiliación.
- Completar los documentales pendientes cuando existan artículos y vídeos reales.
- La emulación en Chromium no sustituye una prueba en Safari de iPhone o en dispositivos físicos.

## Estado de entrega

Los cambios se prepararon y validaron primero en una rama local de pruebas. Posteriormente, el usuario autorizó subir la rama y fusionarla con `main`. La solicitud de cambios de GitHub registra el resultado de la integración.
