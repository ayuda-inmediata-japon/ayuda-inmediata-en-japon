// app.js
document.addEventListener("DOMContentLoaded", () => {
  // Flecha del hero
  const arrow = document.getElementById("arrowDown");
  const target = document.getElementById("buscador");

  function goDown(e) {
    try { e.preventDefault(); } catch (_) {}
    if (!target) return;

    target.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }

  if (arrow) {
    arrow.addEventListener("click", goDown, { passive: false });
    // iPhone / iOS Safari: a veces el touch no dispara click como esperas
    arrow.addEventListener("touchstart", goDown, { passive: false });
    arrow.style.cursor = "pointer";
  }
});