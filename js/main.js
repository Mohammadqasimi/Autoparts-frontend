/* ============================================================
   AFJ AUTO PARTS — SITE LOGIC
   Reads from data.js and renders the page, wires up interactions,
   and submits forms to the backend (server.js) which emails via Resend.
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  renderBusinessInfo();
  renderHero();
  renderServices();
  renderInventory();
  renderBrands();
  renderTestimonials();
  renderFaqs();

  initHeroSlider();
  initMobileMenu();
  initSwiper();
  initInventoryFilter();
  initFaqAccordion();
  initPartFinder();
  initForms();
  initBackToTop();
  initScrollReveal();
});

/* ---------------- Contact / map / WhatsApp / phone ---------------- */
function renderBusinessInfo() {
  // Phone pill + call buttons
  document
    .querySelectorAll("[data-phone-display]")
    .forEach((el) => (el.textContent = BUSINESS.phoneDisplay));
  document
    .querySelectorAll("[data-tel-link]")
    .forEach((el) => (el.href = `tel:${BUSINESS.phoneTel}`));

  // WhatsApp links
  const waHref = `https://wa.me/${BUSINESS.whatsappNumber}?text=${encodeURIComponent(BUSINESS.whatsappDefaultMessage)}`;
  document
    .querySelectorAll("[data-whatsapp-link]")
    .forEach((el) => (el.href = waHref));

  // Email
  document
    .querySelectorAll("[data-email-display]")
    .forEach((el) => (el.textContent = BUSINESS.email));
  document
    .querySelectorAll("[data-email-link]")
    .forEach((el) => (el.href = `mailto:${BUSINESS.email}`));

  // Address (physical location)
  document
    .querySelectorAll("[data-address-display]")
    .forEach((el) => (el.textContent = BUSINESS.address));

  // Areas served (coverage regions — separate from the physical address)
  if (BUSINESS.areasServedDisplay) {
    document
      .querySelectorAll("[data-areas-display]")
      .forEach((el) => (el.textContent = BUSINESS.areasServedDisplay));
  }

  // "Open in Google Maps" links (topbar address, etc.)
  const mapLink = `https://www.google.com/maps/search/?api=1&query=${BUSINESS.mapQuery}`;
  document
    .querySelectorAll("[data-map-link]")
    .forEach((el) => (el.href = mapLink));

  // Hours table
  const hoursTable = document.getElementById("hoursTable");
  if (hoursTable) {
    hoursTable.innerHTML = BUSINESS.hours
      .map((h) => `<tr><td>${h.day}</td><td>${h.time}</td></tr>`)
      .join("");
  }

  // Live Google Maps embed (fixes the old placeholder box)
  const mapFrame = document.getElementById("mapFrame");
  if (mapFrame) {
    mapFrame.src = `https://www.google.com/maps?q=${BUSINESS.mapQuery}&output=embed`;
  }
}

/* ---------------- Hero rotating slider (background + text, crossfade) ---------------- */
function renderHero() {
  const bg = document.getElementById("heroBg");
  const dots = document.getElementById("heroDots");
  if (!bg || typeof HERO_SLIDES === "undefined") return;

  // Background layers (one per slide, crossfaded via .is-active).
  // The first one starts inactive and is switched on once its photo has
  // decoded, so it fades + Ken-Burns in on load instead of popping in
  // whenever the scripts happen to finish downloading.
  bg.innerHTML = HERO_SLIDES.map(
    (s) =>
      `<div class="hero-bg-slide" style="background-image:url('${s.img}')"></div>`,
  ).join("");

  const first = bg.firstElementChild;
  if (first) {
    const activate = () => first.classList.add("is-active");
    const img = new Image();
    img.onload = activate;
    img.onerror = activate;
    img.src = HERO_SLIDES[0].img;
    // Cached images can resolve before the handler is attached, and a slow
    // photo should never hold the hero back for long.
    if (img.complete) activate();
    else setTimeout(activate, 1200);
  }

  // Navigation dots
  if (dots) {
    dots.innerHTML = HERO_SLIDES.map(
      (_, i) =>
        `<button type="button" class="${i === 0 ? "active" : ""}" data-hero-dot="${i}" aria-label="Show slide ${i + 1}"></button>`,
    ).join("");
  }

  // Set initial text from the first slide (keeps markup + data in sync)
  applyHeroSlide(0, true);
}

// `initial` = first paint: the copy keeps its CSS load-in animation and the
// background is left to renderHero(), which fades slide 0 in on image load.
function applyHeroSlide(index, initial) {
  const slide = HERO_SLIDES[index];
  if (!slide) return;

  const kicker = document.querySelector("[data-hero-kicker]");
  const title = document.querySelector("[data-hero-title]");
  const lead = document.querySelector("[data-hero-lead]");

  if (kicker) kicker.textContent = slide.kicker;
  if (title)
    title.innerHTML = `${slide.titleTop}<br>${slide.titleMain} <em>${slide.titleEm}</em>`;
  if (lead) lead.textContent = slide.lead;

  // Re-trigger the text entrance animation
  if (!initial) {
    [kicker, title, lead].forEach((el) => {
      if (!el) return;
      el.classList.remove("hero-anim");
      void el.offsetWidth; // force reflow so the animation replays
      el.classList.add("hero-anim");
    });
  }

  // Crossfade backgrounds + update dots
  if (!initial) {
    document.querySelectorAll(".hero-bg-slide").forEach((el, i) => {
      el.classList.toggle("is-active", i === index);
    });
  }
  document.querySelectorAll("[data-hero-dot]").forEach((el, i) => {
    el.classList.toggle("active", i === index);
  });
}

function initHeroSlider() {
  if (typeof HERO_SLIDES === "undefined" || HERO_SLIDES.length < 2) return;

  let current = 0;
  let timer = null;
  const interval =
    typeof HERO_INTERVAL === "number" ? HERO_INTERVAL : 5000;

  const go = (index) => {
    current = (index + HERO_SLIDES.length) % HERO_SLIDES.length;
    applyHeroSlide(current);
  };
  const start = () => {
    stop();
    timer = setInterval(() => go(current + 1), interval);
  };
  const stop = () => {
    if (timer) clearInterval(timer);
    timer = null;
  };

  // Manual navigation via dots (and restart the auto timer)
  document.querySelectorAll("[data-hero-dot]").forEach((dot) => {
    dot.addEventListener("click", () => {
      go(Number(dot.dataset.heroDot));
      start();
    });
  });

  // Pause while the tab is hidden to avoid a jarring jump on return
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) stop();
    else start();
  });

  start();
}

/* ---------------- Services swiper (one card = one slide; Swiper handles how many show per view) ---------------- */
function renderServices() {
  const wrapper = document.getElementById("servicesWrapper");
  if (!wrapper) return;

  wrapper.innerHTML = SERVICES.map((s) => {
    const photoCount = Array.isArray(s.photos) && s.photos.length ? s.photos.length : 1;
    return `
    <div class="swiper-slide">
      <a class="card" href="service-detail.html?id=${s.code}" aria-label="View ${s.title} photos and details">
        <img src="${s.img}" alt="${s.title}" loading="lazy">
        <div class="overlay"></div>
        <span class="inv-photo-count"><i class="fa-solid fa-camera"></i> ${photoCount}</span>
        <div class="content">
          <span>${s.code}</span>
          <h3>${s.title}</h3>
          ${s.desc ? `<p>${s.desc}</p>` : ""}
        </div>
      </a>
    </div>`;
  }).join("");
}

/* ---------------- Inventory (filter + keyword search + "show more" pagination) ---------------- */
const INV_PAGE_SIZE = 6; // cards shown before "Show More"
const invState = { filter: "all", search: "", visible: INV_PAGE_SIZE };

function renderInventory() {
  const grid = document.getElementById("invGrid");
  if (!grid) return;

  grid.innerHTML = INVENTORY.map((item, index) => {
    const photoCount = Array.isArray(item.photos) && item.photos.length
      ? item.photos.length
      : 1;
    const detailId = item.id !== undefined ? item.id : index + 1;
    return `
    <div class="inv-card" data-cat="${item.cat}" data-search="${(item.title + " " + item.catLabel + " " + item.fits).toLowerCase()}">
      <a class="inv-media" href="car-detail.html?id=${detailId}" aria-label="View all photos of ${item.title}">
        <img src="${item.img}" alt="${item.title}" loading="lazy">
        <!-- <span class="inv-condition">${""}</span> -->
        <span class="inv-photo-count"><i class="fa-solid fa-camera"></i> ${photoCount}</span>
      </a>
      <div class="inv-body">
        <span class="cat">${item.catLabel}</span>
        <h3>${item.title}</h3>
        <p class="fits">${item.fits}</p>
        <div class="inv-foot">
          <span class="price">${item.price}</span>
          <button class="mini-btn" type="button">${item.stock}</button>
        </div>
        <a class="inv-details-btn" href="car-detail.html?id=${detailId}">
          <i class="fa-solid fa-images"></i> More Details &amp; Photos
        </a>
      </div>
    </div>`;
  }).join("");

  applyInventoryView();
}

/** Shows the cards that match the active filter + search, up to invState.visible. */
function applyInventoryView() {
  const grid = document.getElementById("invGrid");
  if (!grid) return;
  const cards = Array.from(grid.children);

  const matches = cards.filter((card) => {
    const catOk =
      invState.filter === "all" || card.dataset.cat === invState.filter;
    const searchOk =
      !invState.search || card.dataset.search.includes(invState.search);
    return catOk && searchOk;
  });

  cards.forEach((card) => (card.style.display = "none"));
  matches.slice(0, invState.visible).forEach((card) => {
    card.style.display = "flex";
  });

  // Count line
  const countEl = document.getElementById("invCount");
  if (countEl) {
    const shown = Math.min(invState.visible, matches.length);
    countEl.textContent = matches.length
      ? `Showing ${shown} of ${matches.length} parts`
      : "No parts match — try another filter or call the yard.";
  }

  // Show More button visibility
  const moreBtn = document.getElementById("invShowMore");
  if (moreBtn) {
    moreBtn.style.display =
      matches.length > invState.visible ? "inline-flex" : "none";
  }
}

function resetInventoryView() {
  invState.visible = INV_PAGE_SIZE;
  applyInventoryView();
}

function initInventoryFilter() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => {
        b.classList.remove("active");
        b.setAttribute("aria-pressed", "false");
      });
      btn.classList.add("active");
      btn.setAttribute("aria-pressed", "true");
      invState.filter = btn.dataset.filter;
      resetInventoryView();
    });
  });

  const moreBtn = document.getElementById("invShowMore");
  if (moreBtn) {
    moreBtn.addEventListener("click", () => {
      invState.visible += INV_PAGE_SIZE;
      applyInventoryView();
    });
  }
}

/* ---------------- Brands ---------------- */
function renderBrands() {
  const grid = document.getElementById("brandsGrid");
  if (!grid) return;

  grid.innerHTML = BRANDS.map(
    (b) => `
    <a href="#inventory" class="brand-card" data-brand="${b.name}">
      <img src="${b.img}" alt="${b.name}" loading="lazy">
      <h3>${b.name}</h3>
    </a>`,
  ).join("");
}

/* ---------------- Testimonials ---------------- */
function renderTestimonials() {
  const grid = document.getElementById("testiGrid");
  if (!grid) return;

  grid.innerHTML = TESTIMONIALS.map(
    (t) => `
    <div class="testi">
      <div class="stars">${"★".repeat(t.stars)}${"☆".repeat(5 - t.stars)}</div>
      <p>${t.text}</p>
      <div class="who"><span>${t.name}</span><span>${t.role}</span></div>
    </div>`,
  ).join("");
}

/* ---------------- FAQ ---------------- */
function renderFaqs() {
  const list = document.getElementById("faqList");
  if (!list) return;

  list.innerHTML = FAQS.map(
    (f, i) => `
    <div class="faq-item">
      <button class="faq-q" type="button" id="faq-q-${i}" aria-expanded="false" aria-controls="faq-a-${i}">${f.q}<span class="plus" aria-hidden="true">+</span></button>
      <div class="faq-a" id="faq-a-${i}" role="region" aria-labelledby="faq-q-${i}"><p>${f.a}</p></div>
    </div>`,
  ).join("");
}

function initFaqAccordion() {
  document.querySelectorAll(".faq-item").forEach((item) => {
    const q = item.querySelector(".faq-q");
    const a = item.querySelector(".faq-a");
    q.addEventListener("click", () => {
      const isOpen = item.classList.contains("open");
      document.querySelectorAll(".faq-item").forEach((other) => {
        other.classList.remove("open");
        other.querySelector(".faq-a").style.maxHeight = null;
        other.querySelector(".faq-q").setAttribute("aria-expanded", "false");
      });
      if (!isOpen) {
        item.classList.add("open");
        a.style.maxHeight = a.scrollHeight + "px";
        q.setAttribute("aria-expanded", "true");
      }
    });
  });
}

/* ---------------- Mobile menu ---------------- */
function initMobileMenu() {
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobileMenu");
  if (!hamburger || !mobileMenu) return;

  hamburger.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.toggle("open");
    hamburger.setAttribute("aria-expanded", isOpen);
  });
  mobileMenu.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      mobileMenu.classList.remove("open");
      hamburger.setAttribute("aria-expanded", "false");
    }),
  );
}

/* ---------------- Swiper (true responsive carousel) ---------------- */
function initSwiper() {
  if (typeof Swiper === "undefined") return;
  // eslint-disable-next-line no-new
  new Swiper(".mySwiper", {
    loop: true,
    loopAdditionalSlides: 4,
    speed: 600,
    spaceBetween: 16,
    grabCursor: true,
    slidesPerView: 1.15,
    watchOverflow: true,
    observer: true, // re-init if slides are injected after Swiper starts
    observeParents: true,
    autoplay: {
      delay: 3200,
      disableOnInteraction: false,
      pauseOnMouseEnter: true, // hovering to reach the arrows pauses autoplay
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    keyboard: { enabled: true },
    pagination: { el: ".swiper-pagination", clickable: true },
    breakpoints: {
      480: { slidesPerView: 1.4, spaceBetween: 16 },
      640: { slidesPerView: 2.2, spaceBetween: 18 },
      900: { slidesPerView: 3, spaceBetween: 20 },
      1200: { slidesPerView: 4, spaceBetween: 22 },
    },
  });
}

/* ---------------- Part finder (filters the live inventory, then scrolls to it) ---------------- */
function initPartFinder() {
  const findBtn = document.getElementById("findBtn");
  if (!findBtn) return;

  const runSearch = () => {
    const make = pickVal("f-make", "Any Make");
    const model = pickVal("f-model", "Any Model");
    const keyword = val("f-part");

    // Combine the meaningful terms into one search string
    invState.search = [make, model, keyword]
      .filter(Boolean)
      .join(" ")
      .toLowerCase()
      .trim();

    // Reset the category filter to "All" so the keyword search isn't double-narrowed
    invState.filter = "all";
    document.querySelectorAll(".filter-btn").forEach((b, i) => {
      b.classList.toggle("active", i === 0);
    });

    resetInventoryView();
    document
      .getElementById("inventory")
      .scrollIntoView({ behavior: "smooth" });
  };

  findBtn.addEventListener("click", runSearch);

  // Let Enter in the keyword box trigger the search too
  const partInput = document.getElementById("f-part");
  if (partInput) {
    partInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        runSearch();
      }
    });
  }
}

/** Reads a <select> value, treating the "Any …" placeholder as empty. */
function pickVal(id, placeholder) {
  const v = val(id);
  return v === placeholder ? "" : v;
}

/* ---------------- Scroll reveal (subtle fade/slide-in as sections enter view) ---------------- */
function initScrollReveal() {
  if (!("IntersectionObserver" in window)) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  // A subtle fade/slide-in on essentially every meaningful block on the page
  const selectors = [
    ".section-head",
    ".tag-label",
    ".pstep",
    ".testi",
    ".brand-card",
    ".faq-item",
    ".sell-banner",
    ".sell-form",
    ".stat-item",
    ".map-box",
    ".quote-form",
    ".info-block",
    ".hours-table",
    ".finder",
    ".footer-grid > div",
    ".footer-bottom",
  ];
  const els = document.querySelectorAll(selectors.join(","));
  if (!els.length) return;

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: "0px 0px -30px 0px" },
  );

  els.forEach((el) => {
    const r = el.getBoundingClientRect();
    // Already on-screen at load: show immediately, skip the animation (avoids a flash)
    if (r.top < window.innerHeight && r.bottom > 0) {
      el.classList.add("in");
    } else {
      el.classList.add("reveal");
      io.observe(el);
    }
  });

  // Gentle stagger for grids: siblings fade in one after another
  document
    .querySelectorAll(
      ".inv-grid, .testi-grid, .brands-grid, .process, .stats-band, .footer-grid",
    )
    .forEach((grid) => {
      Array.from(grid.children).forEach((child, i) => {
        child.style.transitionDelay = `${Math.min(i * 60, 360)}ms`;
      });
    });
}

/* ---------------- Back to top ---------------- */
function initBackToTop() {
  const totop = document.getElementById("totop");
  if (!totop) return;
  window.addEventListener("scroll", () => {
    totop.classList.toggle("show", window.scrollY > 600);
  });
  totop.addEventListener("click", () =>
    window.scrollTo({ top: 0, behavior: "smooth" }),
  );
}

/* ---------------- Forms — real submission to the API (Resend email) ----------------
   The API is a separate deployment. js/config.js holds its origin and is
   generated from the API_BASE_URL environment variable by `npm run build`. */
function apiUrl(path) {
  const base = window.AFJ_CONFIG && window.AFJ_CONFIG.apiBase;
  if (base) return base + path;

  // config.js missing (page opened without a build) — assume a local API.
  const host = window.location.hostname;
  if (host === "localhost" || host === "127.0.0.1" || host === "") {
    console.warn("js/config.js not loaded — falling back to localhost:3000");
    return "http://localhost:3000" + path;
  }
  console.error("js/config.js not loaded — run `npm run build` before deploying");
  return path;
}

function initForms() {
  wireForm({
    formId: "quoteForm",
    endpoint: "/api/quote",
    msgElId: "formMsg",
    buildPayload: () => ({
      name: val("qName"),
      phone: val("qPhone"),
      email: val("qEmail"),
      make: val("qMake"),
      year: val("qYear"),
      part: val("qPart"),
      message: val("qMsg"),
      company: val("qCompany"), // honeypot
    }),
    successText: "Sent ✓",
    successMsg:
      "Request received — we'll call you back within one business hour.",
  });

  wireForm({
    formId: "sellForm",
    endpoint: "/api/sell-car",
    buildPayload: () => ({
      makeModel: val("sMakeModel"),
      year: val("sYear"),
      condition: val("sCondition"),
      phone: val("sPhone"),
      company: val("sCompany"), // honeypot
    }),
    successText: "Request Sent ✓",
  });

  wireForm({
    formId: "newsletterForm",
    endpoint: "/api/newsletter",
    buildPayload: () => ({
      email: val("nlEmail"),
      company: val("nlCompany"), // honeypot
    }),
    successText: "Joined ✓",
  });
}

function val(id) {
  const el = document.getElementById(id);
  return el ? el.value.trim() : "";
}

function wireForm({
  formId,
  endpoint,
  buildPayload,
  successText,
  msgElId,
  successMsg,
}) {
  const form = document.getElementById(formId);
  if (!form) return;
  const submitBtn = form.querySelector('button[type="submit"]');
  const msgEl = msgElId ? document.getElementById(msgElId) : null;
  const originalText = submitBtn ? submitBtn.textContent : "";

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (!form.reportValidity()) return;

    const payload = buildPayload();
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = "Sending…";
    }

    try {
      const res = await fetch(apiUrl(endpoint), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Request failed");

      if (submitBtn) submitBtn.textContent = successText;
      if (msgEl) {
        msgEl.textContent = successMsg || "Thanks — we received your request.";
        msgEl.classList.add("show");
      }
      form.reset();
    } catch (err) {
      console.error(err);
      if (submitBtn) submitBtn.textContent = "Couldn't send — try again";
      if (msgEl) {
        msgEl.textContent =
          "Something went wrong sending your request. Please call us instead.";
        msgEl.classList.add("show");
      }
    } finally {
      setTimeout(() => {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = originalText;
        }
        if (msgEl) msgEl.classList.remove("show");
      }, 3200);
    }
  });
}
