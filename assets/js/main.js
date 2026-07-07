// ==========================================================================
// Terra site interactions
// ==========================================================================

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Hero terminal typing effect
(function typeHeroLine() {
  const el = document.getElementById("typeline");
  if (!el) return;

  const line = "npx terra init";
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (prefersReducedMotion) {
    el.textContent = line;
    return;
  }

  let i = 0;
  function tick() {
    if (i <= line.length) {
      el.textContent = line.slice(0, i);
      i++;
      setTimeout(tick, 55);
    }
  }
  tick();
})();

// Scroll-reveal for sections
(function scrollReveal() {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const targets = document.querySelectorAll(
    ".products, .showcase, .cta, .product-card"
  );

  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    targets.forEach((t) => t.classList.add("is-visible"));
    return;
  }

  targets.forEach((t) => {
    t.style.opacity = "0";
    t.style.transform = "translateY(16px)";
    t.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  targets.forEach((t) => observer.observe(t));
})();
