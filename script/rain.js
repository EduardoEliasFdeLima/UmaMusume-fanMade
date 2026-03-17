(function () {
  const ICON_SRC = "src/irohorse.png";

  const TOTAL = 4;
  const container = document.createElement("div");
  Object.assign(container.style, {
    position: "fixed", top: "0", left: "0",
    width: "100%", height: "100%",
    pointerEvents: "none", zIndex: "-1", overflow: "hidden",
  });
  document.body.appendChild(container);

  function rand(min, max) { return min + Math.random() * (max - min); }

  const icons = Array.from({ length: TOTAL }, () => {
    const img   = document.createElement("img");
    img.src = ICON_SRC;
    const size  = rand(36, 56);
    Object.assign(img.style, {
      position: "absolute", width: size + "px", height: "auto",
      opacity: rand(0.18, 0.38), filter: "grayscale(30%)", willChange: "transform",
    });
    container.appendChild(img);
    return {
      el: img,
      x: rand(5, 90),
      y: rand(-120, -20),
      speed:    rand(0.018, 0.032),
      rotSpeed: rand(0.12, 0.28) * (Math.random() < 0.5 ? 1 : -1),
      rot: rand(0, 360),
    };
  });

  let last = null;
  (function animate(ts) {
    if (!last) last = ts;
    const dt = Math.min(ts - last, 50);
    last = ts;
    icons.forEach(ic => {
      ic.y   += ic.speed * dt;
      ic.rot += ic.rotSpeed * (dt / 16);
      if (ic.y * window.innerHeight / 100 > window.innerHeight + 80) {
        ic.y = rand(-15, -5);
        ic.x = rand(5, 90);
      }
      ic.el.style.left      = ic.x + "%";
      ic.el.style.top       = ic.y + "vh";
      ic.el.style.transform = "rotate(" + ic.rot + "deg)";
    });
    requestAnimationFrame(animate);
  })(performance.now());
})();