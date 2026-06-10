const slides = Array.from(document.querySelectorAll(".hero-slide"));
const dots = Array.from(document.querySelectorAll("[data-slide-to]"));
const prevButton = document.querySelector("[data-slide-prev]");
const nextButton = document.querySelector("[data-slide-next]");
const siteHeader = document.querySelector(".site-header");
const menuButton = document.querySelector(".menu-button");
const languageMenu = document.querySelector(".language-menu");
const languageToggle = document.querySelector(".language-toggle");
const languageButtons = Array.from(document.querySelectorAll("[data-lang]"));
const landingSection = document.querySelector(".landing-video");
const landingVideo = document.querySelector("[data-landing-video]");
const landingLoopVideo = document.querySelector("[data-landing-loop-video]");
const landingCopy = document.querySelector("[data-landing-copy]");
const heroSection = document.querySelector(".hero");
let activeSlide = 0;
let autoTimer;
let landingScrollTriggered = false;
let touchStartY = 0;

function closeLanguageMenu() {
  languageMenu?.classList.remove("is-open");
  languageToggle?.setAttribute("aria-expanded", "false");
}

function applyLanguage(targetLang) {
  window.SJS_I18N?.setLanguage(targetLang || "ko");
  closeLanguageMenu();
}

function updateLandingHeader() {
  if (!landingSection) return;
  document.body.classList.toggle("is-past-landing", window.scrollY > landingSection.offsetHeight - 90);
}

function scrollToHero() {
  if (!landingSection || !heroSection || landingScrollTriggered) return;

  landingScrollTriggered = true;
  heroSection.scrollIntoView({ behavior: "smooth", block: "start" });
  window.setTimeout(() => {
    landingScrollTriggered = false;
  }, 1100);
}

function isInsideLanding() {
  return landingSection && window.scrollY < landingSection.offsetHeight - 12;
}

if (landingSection) {
  document.body.classList.add("has-landing");
  updateLandingHeader();
  if (!landingVideo) {
    landingCopy?.classList.add("is-visible");
  }

  landingSection.addEventListener("click", scrollToHero);
  window.addEventListener("scroll", updateLandingHeader, { passive: true });

  window.addEventListener(
    "wheel",
    (event) => {
      if (!isInsideLanding() || event.deltaY <= 360) return;
      event.preventDefault();
      scrollToHero();
    },
    { passive: false }
  );

  window.addEventListener(
    "touchstart",
    (event) => {
      touchStartY = event.touches[0]?.clientY || 0;
    },
    { passive: true }
  );

  window.addEventListener(
    "touchmove",
    (event) => {
      const currentY = event.touches[0]?.clientY || 0;
      if (!isInsideLanding() || touchStartY - currentY < 120) return;
      event.preventDefault();
      scrollToHero();
    },
    { passive: false }
  );

  window.addEventListener("keydown", (event) => {
    if (!isInsideLanding() || !["ArrowDown", "PageDown", " "].includes(event.key)) return;
    event.preventDefault();
    scrollToHero();
  });
}

if (landingLoopVideo) {
  landingLoopVideo.muted = true;
  landingLoopVideo.playsInline = true;
  landingLoopVideo.controls = false;
  landingLoopVideo.setAttribute("playsinline", "");
  landingLoopVideo.setAttribute("webkit-playsinline", "");
  landingLoopVideo.removeAttribute("controls");
  landingLoopVideo.load();
  landingLoopVideo.addEventListener("playing", () => {
    landingSection?.classList.add("is-looping");
  });
}

if (landingVideo) {
  landingVideo.muted = true;
  landingVideo.playsInline = true;
  landingVideo.controls = false;
  landingVideo.setAttribute("playsinline", "");
  landingVideo.setAttribute("webkit-playsinline", "");
  landingVideo.removeAttribute("controls");
  landingVideo.addEventListener("playing", () => {
    landingSection?.classList.add("is-intro-playing");
  });
  landingVideo.play().catch(() => {
    landingSection?.classList.add("is-video-blocked");
  });

  landingVideo.addEventListener("ended", () => {
    landingSection?.classList.remove("is-intro-playing");
    if (!landingLoopVideo) {
      landingCopy?.classList.add("is-visible");
      return;
    }

    landingLoopVideo.currentTime = 0;
    landingLoopVideo.play().catch(() => {
      landingSection?.classList.add("is-video-blocked");
    });
    landingCopy?.classList.add("is-visible");
  });
}

function showSlide(index) {
  activeSlide = (index + slides.length) % slides.length;

  slides.forEach((slide, slideIndex) => {
    slide.classList.toggle("is-active", slideIndex === activeSlide);
  });

  dots.forEach((dot, dotIndex) => {
    dot.classList.toggle("is-active", dotIndex === activeSlide);
  });
}

function startAutoSlide() {
  window.clearInterval(autoTimer);
  autoTimer = window.setInterval(() => showSlide(activeSlide + 1), 6000);
}

prevButton?.addEventListener("click", () => {
  showSlide(activeSlide - 1);
  startAutoSlide();
});

nextButton?.addEventListener("click", () => {
  showSlide(activeSlide + 1);
  startAutoSlide();
});

dots.forEach((dot) => {
  dot.addEventListener("click", () => {
    showSlide(Number(dot.dataset.slideTo));
    startAutoSlide();
  });
});

showSlide(activeSlide);
startAutoSlide();

menuButton?.addEventListener("click", () => {
  const isOpen = siteHeader?.classList.toggle("is-menu-open") ?? false;
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

languageToggle?.addEventListener("click", (event) => {
  event.stopPropagation();
  const isOpen = languageMenu?.classList.toggle("is-open") ?? false;
  languageToggle.setAttribute("aria-expanded", String(isOpen));
});

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyLanguage(button.dataset.lang);
  });
});

document.addEventListener("click", (event) => {
  if (!languageMenu?.contains(event.target)) {
    closeLanguageMenu();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    siteHeader?.classList.remove("is-menu-open");
    menuButton?.setAttribute("aria-expanded", "false");
    closeLanguageMenu();
  }
});

const collectionTrack = document.querySelector("[data-collection-track]");
const collectionPrev = document.querySelector("[data-collection-prev]");
const collectionNext = document.querySelector("[data-collection-next]");
const collectionThumbs = document.querySelector("[data-collection-thumbs]");
let collectionLocked = false;
let collectionDirection = 0;
let mobileCollectionIndex = 0;
let collectionTouchStartX = 0;
let collectionTouchStartY = 0;
let collectionPointerStartX = 0;
let collectionPointerStartY = 0;

function isMobileCollection() {
  return window.matchMedia("(max-width: 780px)").matches;
}

function getCollectionCards() {
  return Array.from(collectionTrack?.querySelectorAll(".collection-card") || []);
}

function updateCollectionThumbs() {
  if (!collectionThumbs) return;

  Array.from(collectionThumbs.querySelectorAll("button")).forEach((thumb, index) => {
    thumb.classList.toggle("is-active", index === mobileCollectionIndex);
  });
}

function renderCollectionThumbs() {
  if (!collectionThumbs) return;

  const collectionCards = getCollectionCards();
  collectionThumbs.innerHTML = collectionCards
    .map((card, index) => {
      const image = card.querySelector("img");
      const title = card.querySelector("h3")?.textContent?.trim() || `제품 라인 ${index + 1}`;

      return `
        <button type="button" data-collection-thumb="${index}" aria-label="${title} 보기">
          <img src="${image?.getAttribute("src") || ""}" alt="" />
        </button>
      `;
    })
    .join("");

  Array.from(collectionThumbs.querySelectorAll("[data-collection-thumb]")).forEach((thumb) => {
    thumb.addEventListener("click", () => {
      mobileCollectionIndex = Number(thumb.dataset.collectionThumb) || 0;
      updateMobileCollection();
    });
  });

  updateCollectionThumbs();
}

function updateMobileCollection() {
  if (!collectionTrack || !isMobileCollection()) return;

  const collectionCards = getCollectionCards();
  if (!collectionCards.length) return;

  mobileCollectionIndex = (mobileCollectionIndex + collectionCards.length) % collectionCards.length;
  const step = getCollectionStep();
  collectionTrack.style.transform = `translate3d(${-mobileCollectionIndex * step}px, 0, 0)`;
  updateCollectionThumbs();
}

function getCollectionStep() {
  const collectionCards = Array.from(collectionTrack?.querySelectorAll(".collection-card") || []);
  if (!collectionCards.length) return 0;

  const cardRect = collectionCards[0].getBoundingClientRect();
  const trackStyle = window.getComputedStyle(collectionTrack);
  const gap = Number.parseFloat(trackStyle.columnGap || trackStyle.gap) || 0;

  return cardRect.width + gap;
}

function setCollectionTransition(enabled) {
  if (!collectionTrack) return;
  collectionTrack.style.transition = enabled ? "" : "none";
}

function rollCollection(direction) {
  if (!collectionTrack || collectionLocked) return;

  if (isMobileCollection()) {
    mobileCollectionIndex += direction;
    updateMobileCollection();
    return;
  }

  const step = getCollectionStep();
  if (!step) return;

  collectionLocked = true;
  collectionDirection = direction;

  if (direction > 0) {
    collectionTrack.style.transform = `translate3d(${-step}px, 0, 0)`;
  } else {
    const lastCard = collectionTrack.lastElementChild;
    if (!lastCard) {
      collectionLocked = false;
      collectionDirection = 0;
      return;
    }

    collectionTrack.insertBefore(lastCard, collectionTrack.firstElementChild);
    setCollectionTransition(false);
    collectionTrack.style.transform = `translate3d(${-step}px, 0, 0)`;
    collectionTrack.getBoundingClientRect();
    setCollectionTransition(true);
    collectionTrack.style.transform = "translate3d(0, 0, 0)";
  }
}

collectionPrev?.addEventListener("click", () => {
  rollCollection(-1);
});

collectionNext?.addEventListener("click", () => {
  rollCollection(1);
});

collectionTrack?.addEventListener("transitionend", (event) => {
  if (isMobileCollection()) return;
  if (event.target !== collectionTrack || event.propertyName !== "transform") return;

  if (collectionDirection > 0) {
    collectionTrack.appendChild(collectionTrack.firstElementChild);
    setCollectionTransition(false);
    collectionTrack.style.transform = "translate3d(0, 0, 0)";
    collectionTrack.getBoundingClientRect();
    setCollectionTransition(true);
  }

  collectionDirection = 0;
  collectionLocked = false;
});

collectionTrack?.addEventListener(
  "touchstart",
  (event) => {
    collectionTouchStartX = event.touches[0]?.clientX || 0;
    collectionTouchStartY = event.touches[0]?.clientY || 0;
  },
  { passive: true }
);

collectionTrack?.addEventListener(
  "touchend",
  (event) => {
    if (!isMobileCollection()) return;

    const touch = event.changedTouches[0];
    const diffX = (touch?.clientX || 0) - collectionTouchStartX;
    const diffY = (touch?.clientY || 0) - collectionTouchStartY;

    if (Math.abs(diffX) < 42 || Math.abs(diffX) < Math.abs(diffY)) return;
    rollCollection(diffX < 0 ? 1 : -1);
  },
  { passive: true }
);

collectionTrack?.addEventListener("pointerdown", (event) => {
  collectionPointerStartX = event.clientX;
  collectionPointerStartY = event.clientY;
});

collectionTrack?.addEventListener("pointerup", (event) => {
  if (!isMobileCollection()) return;

  const diffX = event.clientX - collectionPointerStartX;
  const diffY = event.clientY - collectionPointerStartY;

  if (Math.abs(diffX) < 42 || Math.abs(diffX) < Math.abs(diffY)) return;
  rollCollection(diffX < 0 ? 1 : -1);
});

window.addEventListener("resize", updateMobileCollection);
renderCollectionThumbs();

const revealItems = Array.from(document.querySelectorAll(".reveal-on-scroll, .reveal-ritual"));

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.28 }
  );

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}
