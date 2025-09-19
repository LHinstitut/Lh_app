// =========================
// MENU KEBAB
// =========================
const kebabBtn = document.querySelector(".kebab button");
const kebabMenu = document.querySelector(".kebab .menu");

if (kebabBtn && kebabMenu) {
  kebabBtn.addEventListener("click", () => {
    kebabMenu.style.display =
      kebabMenu.style.display === "block" ? "none" : "block";
  });
  document.addEventListener("click", (e) => {
    if (!kebabBtn.contains(e.target) && !kebabMenu.contains(e.target)) {
      kebabMenu.style.display = "none";
    }
  });
}

// =========================
// BARRE DE RECHERCHE
// =========================
const searchInput = document.querySelector("#search");
if (searchInput) {
  searchInput.addEventListener("input", () => {
    const term = searchInput.value.toLowerCase();
    const services = document.querySelectorAll(".service-item");
    const cards = document.querySelectorAll(".carte");

    services.forEach((s) => {
      s.style.display = s.innerText.toLowerCase().includes(term)
        ? "flex"
        : "none";
    });

    cards.forEach((c) => {
      c.style.display = c.innerText.toLowerCase().includes(term)
        ? "block"
        : "none";
    });
  });
}

// =========================
// CAROUSEL (flèches)
// =========================
const carousel = document.querySelector(".carousel");
const btnPrev = document.querySelector("#carouselPrev");
const btnNext = document.querySelector("#carouselNext");

if (carousel && btnPrev && btnNext) {
  btnPrev.addEventListener("click", () => {
    carousel.scrollBy({ left: -320, behavior: "smooth" });
  });
  btnNext.addEventListener("click", () => {
    carousel.scrollBy({ left: 320, behavior: "smooth" });
  });
}

// =========================
// COMPTEURS ANIMÉS
// =========================
function animateCounter(el, target, duration = 1800) {
  let start = 0;
  const increment = target / (duration / 20);

  const counter = setInterval(() => {
    start += increment;
    if (start >= target) {
      start = target;
      clearInterval(counter);
    }
    el.textContent = Math.floor(start).toLocaleString("fr-FR");
  }, 20);
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".counter").forEach((c) => {
    const target = parseInt(c.getAttribute("data-target"), 10);
    animateCounter(c, target);
  });
});

// =========================
// TEXTE CLIGNOTANT SUR LA CARTE
// =========================
// (déjà géré dans le CSS avec @keyframes blink)
// =========================

// =========================
// ASTUCE EXTRA : rendre l'effet "shine"
// du titre LH Institut un peu plus rare
// (petite pause entre les passages)
// =========================
const title = document.querySelector("header h1");
if (title) {
  title.addEventListener("animationiteration", () => {
    title.style.animationPlayState = "paused";
    setTimeout(() => {
      title.style.animationPlayState = "running";
    }, 2500); // pause 2,5 sec entre deux brillances
  });
}
