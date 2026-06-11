const slides = Array.from(document.querySelectorAll(".hero-slide"));
const dots = Array.from(document.querySelectorAll("[data-slide-to]"));
const prevButton = document.querySelector("[data-slide-prev]");
const nextButton = document.querySelector("[data-slide-next]");
const siteHeader = document.querySelector(".site-header");
const menuButton = document.querySelector(".menu-button");
const languageMenu = document.querySelector(".language-menu");
const languageToggle = document.querySelector(".language-toggle");
const languageButtons = Array.from(document.querySelectorAll("[data-lang]"));
const heroSection = document.querySelector(".hero");
let activeSlide = 0;
let autoTimer;

function closeLanguageMenu() {
  languageMenu?.classList.remove("is-open");
  languageToggle?.setAttribute("aria-expanded", "false");
}

function applyLanguage(targetLang) {
  window.SJS_I18N?.setLanguage(targetLang || "ko");
  closeLanguageMenu();
}

function updateHeroHeader() {
  if (!heroSection) return;
  document.body.classList.toggle("is-past-landing", window.scrollY > heroSection.offsetHeight - 90);
}

if (heroSection) {
  document.body.classList.add("has-landing");
  updateHeroHeader();
  window.addEventListener("scroll", updateHeroHeader, { passive: true });
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

const pageSections = Array.from(document.querySelectorAll("main > section"));
const sectionProgressButtons = Array.from(document.querySelectorAll("[data-section-to]"));
const sectionProgressFill = document.querySelector("[data-section-progress-fill]");
const pageQuickActions = document.querySelector("[data-page-quick-actions]");
const scrollTopButton = document.querySelector("[data-scroll-top]");
let activeSectionIndex = 0;
let sectionScrollLocked = false;
let sectionScrollTimer;

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function isDesktopFullPage() {
  return window.matchMedia("(min-width: 781px) and (pointer: fine)").matches;
}

function updateSectionNavigation(index) {
  activeSectionIndex = Math.max(0, Math.min(index, pageSections.length - 1));

  sectionProgressButtons.forEach((button, buttonIndex) => {
    const isActive = buttonIndex === activeSectionIndex;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-current", isActive ? "true" : "false");
  });

  const progress = pageSections.length > 1 ? activeSectionIndex / (pageSections.length - 1) : 0;
  if (sectionProgressFill) {
    sectionProgressFill.style.height = `${progress * 100}%`;
  }

  pageQuickActions?.classList.toggle("is-visible", activeSectionIndex > 0);
}

function scrollToSection(index) {
  const nextIndex = Math.max(0, Math.min(index, pageSections.length - 1));
  const targetSection = pageSections[nextIndex];
  if (!targetSection) return;

  sectionScrollLocked = true;
  updateSectionNavigation(nextIndex);
  targetSection.scrollIntoView({
    behavior: prefersReducedMotion() ? "auto" : "smooth",
    block: "start",
  });

  window.clearTimeout(sectionScrollTimer);
  sectionScrollTimer = window.setTimeout(() => {
    sectionScrollLocked = false;
  }, prefersReducedMotion() ? 100 : 900);
}

function getClosestSectionIndex() {
  const viewportCenter = window.scrollY + window.innerHeight / 2;
  let closestIndex = 0;
  let closestDistance = Number.POSITIVE_INFINITY;

  pageSections.forEach((section, index) => {
    const sectionCenter = section.offsetTop + section.offsetHeight / 2;
    const distance = Math.abs(sectionCenter - viewportCenter);
    if (distance < closestDistance) {
      closestDistance = distance;
      closestIndex = index;
    }
  });

  return closestIndex;
}

if (pageSections.length) {
  updateSectionNavigation(getClosestSectionIndex());

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      const visibleEntry = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (!visibleEntry) return;
      const index = pageSections.indexOf(visibleEntry.target);
      if (index >= 0) updateSectionNavigation(index);
    },
    { threshold: [0.45, 0.6, 0.75] }
  );

  pageSections.forEach((section) => sectionObserver.observe(section));

  window.addEventListener(
    "wheel",
    (event) => {
      if (!isDesktopFullPage() || sectionScrollLocked || Math.abs(event.deltaY) < 12) return;
      event.preventDefault();
      scrollToSection(activeSectionIndex + (event.deltaY > 0 ? 1 : -1));
    },
    { passive: false }
  );

  window.addEventListener("keydown", (event) => {
    if (!isDesktopFullPage() || sectionScrollLocked) return;
    if (!["ArrowDown", "PageDown", "ArrowUp", "PageUp", "Home", "End", " "].includes(event.key)) return;

    const interactiveElement = event.target.closest("input, textarea, select, button, a, [contenteditable]");
    if (interactiveElement && !event.target.matches("body")) return;

    event.preventDefault();
    if (event.key === "Home") {
      scrollToSection(0);
    } else if (event.key === "End") {
      scrollToSection(pageSections.length - 1);
    } else {
      const movesUp = ["ArrowUp", "PageUp"].includes(event.key) || (event.key === " " && event.shiftKey);
      scrollToSection(activeSectionIndex + (movesUp ? -1 : 1));
    }
  });

  sectionProgressButtons.forEach((button) => {
    button.addEventListener("click", () => {
      scrollToSection(Number(button.dataset.sectionTo) || 0);
    });
  });

  scrollTopButton?.addEventListener("click", () => scrollToSection(0));
  window.addEventListener("resize", () => updateSectionNavigation(getClosestSectionIndex()));
}
