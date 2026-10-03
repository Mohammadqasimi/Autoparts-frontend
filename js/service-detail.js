/* ============================================================
   AFJ AUTO PARTS — SERVICE / PART CATEGORY DETAIL PAGE
   Reads the category "id" (its code, e.g. SVC-01) from the URL,
   looks it up in SERVICES (js/data.js), and renders full details +
   a multi-photo gallery with thumbnails, prev/next arrows and a lightbox.
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  renderBusinessInfo();
  initMobileMenu();
  initBackToTop();

  const id = getIdFromUrl();
  const service = SERVICES.find((item) => String(item.code) === String(id));

  if (!service) {
    renderNotFound();
    return;
  }

  renderService(service);
  renderRelated(service);
});

/* ---------------- URL helpers ---------------- */
function getIdFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get("id");
}

/* ---------------- Business info (phone / whatsapp / email / address) ---------------- */
function renderBusinessInfo() {
  document
    .querySelectorAll("[data-phone-display]")
    .forEach((el) => (el.textContent = BUSINESS.phoneDisplay));
  document
    .querySelectorAll("[data-tel-link]")
    .forEach((el) => (el.href = `tel:${BUSINESS.phoneTel}`));

  const waHref = `https://wa.me/${BUSINESS.whatsappNumber}?text=${encodeURIComponent(BUSINESS.whatsappDefaultMessage)}`;
  document
    .querySelectorAll("[data-whatsapp-link]")
    .forEach((el) => (el.href = waHref));

  document
    .querySelectorAll("[data-email-display]")
    .forEach((el) => (el.textContent = BUSINESS.email));
  document
    .querySelectorAll("[data-email-link]")
    .forEach((el) => (el.href = `mailto:${BUSINESS.email}`));

  document
    .querySelectorAll("[data-address-display]")
    .forEach((el) => (el.textContent = BUSINESS.address));
}

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

/* ---------------- Not found state ---------------- */
function renderNotFound() {
  const el = document.getElementById("detailContent");
  if (!el) return;
  el.innerHTML = `
    <div style="text-align:center;padding:60px 0;">
      <h1 style="font-family:'Oswald',sans-serif;text-transform:uppercase;font-size:28px;margin-bottom:14px;">Category Not Found</h1>
      <p style="color:var(--gray-mid);margin-bottom:26px;">This part category may have moved or the link is out of date.</p>
      <a href="index.html#services" class="btn btn-primary">Back To Services</a>
    </div>`;
}

/* ---------------- Main render ---------------- */
let galleryState = { photos: [], index: 0 };

/**
 * Accepts either the old simple format:
 *   photos: ["a.jpg", "b.jpg"]
 * or the new format where each photo can have its own title
 * (useful when a category's photos come from different vehicles):
 *   photos: [{ img: "a.jpg", title: "Engine — 2015 Mazda CX-5" },
 *            { img: "b.jpg", title: "Engine — 2018 Toyota Corolla" }]
 * A plain string entry falls back to the category's own title.
 */
function normalizePhotos(rawPhotos, fallbackTitle) {
  return rawPhotos.map((p) =>
    typeof p === "string"
      ? { img: p, title: fallbackTitle }
      : { img: p.img, title: p.title || fallbackTitle },
  );
}

function renderService(service) {
  document.title = `${service.title} — Photos & Details | AFJ Auto Parts`;

  const rawPhotos =
    Array.isArray(service.photos) && service.photos.length
      ? service.photos
      : [service.img];
  const photos = normalizePhotos(rawPhotos, service.title);
  galleryState = { photos, index: 0 };

  const el = document.getElementById("detailContent");
  if (!el) return;

  const enquiryMsg = `Hi AFJ Auto Parts, I'm interested in ${service.title} (${service.code}). What do you have in stock?`;
  const waHref = `https://wa.me/${BUSINESS.whatsappNumber}?text=${encodeURIComponent(enquiryMsg)}`;

  el.innerHTML = `
    <div class="detail-grid">
      <div class="detail-gallery">
        <div class="gallery-main" id="galleryMain">
          <img id="galleryMainImg" src="${photos[0].img}" alt="${photos[0].title} — photo 1">
          ${
            photos.length > 1
              ? `
          <button class="gallery-nav prev" id="galleryPrev" aria-label="Previous photo"><i class="fa-solid fa-chevron-left"></i></button>
          <button class="gallery-nav next" id="galleryNext" aria-label="Next photo"><i class="fa-solid fa-chevron-right"></i></button>
          <span class="gallery-counter" id="galleryCounter">1 / ${photos.length}</span>`
              : ""
          }
        </div>
        <p class="gallery-caption" id="galleryCaption">${photos[0].title}</p>
        ${
          photos.length > 1
            ? `<div class="gallery-thumbs" id="galleryThumbs">
                ${photos
                  .map(
                    (p, i) => `
                  <button type="button" data-index="${i}" class="${i === 0 ? "active" : ""}" aria-label="${p.title}" title="${p.title}">
                    <img src="${p.img}" alt="${p.title} — thumbnail ${i + 1}" loading="lazy">
                  </button>`,
                  )
                  .join("")}
              </div>`
            : ""
        }
      </div>

      <div class="detail-info">
        <span class="cat">Part Category</span>
        <h1>${service.title}</h1>
        ${service.desc ? `<p class="fits">${service.desc}</p>` : ""}

        <div class="detail-meta">
          <div class="item"><span>Category Code</span><strong>${service.code}</strong></div>
          <div class="item"><span>Photos Available</span><strong>${photos.length}</strong></div>
        </div>

        <div class="detail-cta">
          <a href="${waHref}" target="_blank" rel="noopener" class="btn btn-primary"><i class="fa-brands fa-whatsapp"></i>&nbsp; WhatsApp Enquiry</a>
          <a href="tel:${BUSINESS.phoneTel}" class="btn btn-outline">Call ${BUSINESS.phoneDisplay}</a>
        </div>

        ${
          service.description
            ? `<div class="detail-description">
                <h3>Description</h3>
                <p>${service.description}</p>
              </div>`
            : ""
        }

        <div class="detail-note">
          <i class="fa-solid fa-circle-info"></i>
          <span>Stock for this category changes daily as vehicles come through the yard — call or WhatsApp us with your make, model and year and we'll confirm exact fitment and price.</span>
        </div>
      </div>
    </div>`;

  initGalleryControls();
  renderVehicleSources(service);
}

/* ---------------- Gallery interactions ---------------- */
function initGalleryControls() {
  const mainImg = document.getElementById("galleryMainImg");
  const prevBtn = document.getElementById("galleryPrev");
  const nextBtn = document.getElementById("galleryNext");
  const counter = document.getElementById("galleryCounter");
  const thumbs = document.querySelectorAll("#galleryThumbs button");
  const mainWrap = document.getElementById("galleryMain");

  const caption = document.getElementById("galleryCaption");

  function show(index) {
    const total = galleryState.photos.length;
    galleryState.index = ((index % total) + total) % total;
    const current = galleryState.photos[galleryState.index];
    mainImg.src = current.img;
    mainImg.alt = current.title;
    if (caption) caption.textContent = current.title;
    if (counter) counter.textContent = `${galleryState.index + 1} / ${total}`;
    thumbs.forEach((t, i) =>
      t.classList.toggle("active", i === galleryState.index),
    );
  }

  if (prevBtn) prevBtn.addEventListener("click", () => show(galleryState.index - 1));
  if (nextBtn) nextBtn.addEventListener("click", () => show(galleryState.index + 1));
  thumbs.forEach((t) =>
    t.addEventListener("click", () => show(Number(t.dataset.index))),
  );

  if (mainWrap) {
    mainWrap.addEventListener("click", (e) => {
      if (e.target.closest(".gallery-nav")) return;
      openLightbox(galleryState.index);
    });
  }

  document.addEventListener("keydown", (e) => {
    if (!document.getElementById("lightbox").classList.contains("open")) return;
    if (e.key === "ArrowLeft") show(galleryState.index - 1), updateLightboxImg();
    if (e.key === "ArrowRight") show(galleryState.index + 1), updateLightboxImg();
    if (e.key === "Escape") closeLightbox();
  });

  initLightbox(show);
}

/* ---------------- Lightbox ---------------- */
function initLightbox(showFn) {
  const overlay = document.getElementById("lightbox");
  const img = document.getElementById("lightboxImg");
  const closeBtn = document.getElementById("lightboxClose");
  const prevBtn = document.getElementById("lightboxPrev");
  const nextBtn = document.getElementById("lightboxNext");
  if (!overlay) return;

  window._afjLightboxShow = showFn;
  window._afjUpdateLightboxImg = () => {
    const current = galleryState.photos[galleryState.index];
    img.src = current.img;
    img.alt = current.title;
  };

  closeBtn.addEventListener("click", closeLightbox);
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeLightbox();
  });
  prevBtn.addEventListener("click", () => {
    showFn(galleryState.index - 1);
    const current = galleryState.photos[galleryState.index];
    img.src = current.img;
    img.alt = current.title;
  });
  nextBtn.addEventListener("click", () => {
    showFn(galleryState.index + 1);
    const current = galleryState.photos[galleryState.index];
    img.src = current.img;
    img.alt = current.title;
  });
}

function updateLightboxImg() {
  if (window._afjUpdateLightboxImg) window._afjUpdateLightboxImg();
}

function openLightbox(index) {
  const overlay = document.getElementById("lightbox");
  const img = document.getElementById("lightboxImg");
  if (!overlay || !img) return;
  const current = galleryState.photos[index];
  img.src = current.img;
  img.alt = current.title;
  overlay.classList.add("open");
}

function closeLightbox() {
  const overlay = document.getElementById("lightbox");
  if (overlay) overlay.classList.remove("open");
}

/* ---------------- Related categories strip ---------------- */
function renderRelated(current) {
  const section = document.getElementById("relatedSection");
  const grid = document.getElementById("relatedGrid");
  if (!section || !grid) return;

  const others = SERVICES.filter((item) => item.code !== current.code).slice(0, 3);
  if (!others.length) return;

  grid.innerHTML = others
    .map((item) => {
      const photoCount =
        Array.isArray(item.photos) && item.photos.length
          ? item.photos.length
          : 1;
      return `
      <div class="inv-card">
        <a class="inv-media" href="service-detail.html?id=${item.code}" aria-label="View ${item.title} photos and details">
          <img src="${item.img}" alt="${item.title}" loading="lazy">
          <span class="inv-photo-count"><i class="fa-solid fa-camera"></i> ${photoCount}</span>
        </a>
        <div class="inv-body">
          <span class="cat">Part Category</span>
          <h3>${item.title}</h3>
          <p class="fits">${item.desc || ""}</p>
          <a class="inv-details-btn" href="service-detail.html?id=${item.code}">
            <i class="fa-solid fa-images"></i> More Details &amp; Photos
          </a>
        </div>
      </div>`;
    })
    .join("");

  section.style.display = "block";
}

/* ---------------- Vehicles currently supplying this part category ----------------
   Every vehicle in INVENTORY is a potential source for this part category
   (e.g. every car in stock could supply an engine, doors, etc). This shows
   the full current inventory with real photos so the customer can browse
   by make/model and click through to enquire about a specific vehicle. */
function renderVehicleSources(service) {
  const section = document.getElementById("vehicleSourcesSection");
  const grid = document.getElementById("vehicleSourcesGrid");
  const title = document.getElementById("vehicleSourcesTitle");
  if (!section || !grid || typeof INVENTORY === "undefined") return;

  const vehicles = INVENTORY;
  if (!vehicles.length) return;

  if (title) title.textContent = `Vehicles We're Currently Wrecking For ${service.title}`;

  grid.innerHTML = vehicles
    .map((item) => {
      const photoCount =
        Array.isArray(item.photos) && item.photos.length ? item.photos.length : 1;
      return `
      <div class="inv-card">
        <a class="inv-media" href="car-detail.html?id=${item.id}" aria-label="View all photos of ${item.title}">
          <img src="${item.img}" alt="${item.title}" loading="lazy">
          <span class="inv-photo-count"><i class="fa-solid fa-camera"></i> ${photoCount}</span>
        </a>
        <div class="inv-body">
          <span class="cat">${item.catLabel || ""}</span>
          <h3>${item.title}</h3>
          <a class="inv-details-btn" href="car-detail.html?id=${item.id}">
            <i class="fa-solid fa-images"></i> More Details &amp; Photos
          </a>
        </div>
      </div>`;
    })
    .join("");

  section.style.display = "block";
}
