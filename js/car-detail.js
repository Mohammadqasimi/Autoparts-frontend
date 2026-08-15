/* ============================================================
   AFJ AUTO PARTS — VEHICLE DETAIL / PHOTO GALLERY PAGE
   Reads the vehicle "id" from the URL (?id=3), looks it up in
   INVENTORY (js/data.js), and renders full details + a multi-photo
   gallery with thumbnails, prev/next arrows and a lightbox.
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  renderBusinessInfo();
  initMobileMenu();
  initBackToTop();

  const id = getIdFromUrl();
  const vehicle = INVENTORY.find((item) => String(item.id) === String(id));

  if (!vehicle) {
    renderNotFound();
    return;
  }

  renderVehicle(vehicle);
  renderRelated(vehicle);
});

/* ---------------- URL helpers ---------------- */
function getIdFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get("id");
}

/* ---------------- Business info (phone / whatsapp / email / address) ----------------
   Same logic as js/main.js, duplicated here so this page works standalone. */
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
      <h1 style="font-family:'Oswald',sans-serif;text-transform:uppercase;font-size:28px;margin-bottom:14px;">Vehicle Not Found</h1>
      <p style="color:var(--gray-mid);margin-bottom:26px;">This listing may have sold or the link is out of date.</p>
      <a href="index.html#inventory" class="btn btn-primary">Back To Inventory</a>
    </div>`;
}

/* ---------------- Main render ---------------- */
let galleryState = { photos: [], index: 0 };

function renderVehicle(vehicle) {
  document.title = `${vehicle.title.trim()} — Photos & Details | AFJ Auto Parts`;

  const photos =
    Array.isArray(vehicle.photos) && vehicle.photos.length
      ? vehicle.photos
      : [vehicle.img];
  galleryState = { photos, index: 0 };

  const el = document.getElementById("detailContent");
  if (!el) return;

  const enquiryMsg = `Hi AFJ Auto Parts, I'm interested in the ${vehicle.title.trim()} (${vehicle.stock}). Is it still available?`;
  const waHref = `https://wa.me/${BUSINESS.whatsappNumber}?text=${encodeURIComponent(enquiryMsg)}`;

  el.innerHTML = `
    <div class="detail-grid">
      <div class="detail-gallery">
        <div class="gallery-main" id="galleryMain">
          <img id="galleryMainImg" src="${photos[0]}" alt="${vehicle.title} — photo 1">
          ${"" ? `<span class="inv-condition">${""}</span>` : ""}
          ${
            photos.length > 1
              ? `
          <button class="gallery-nav prev" id="galleryPrev" aria-label="Previous photo"><i class="fa-solid fa-chevron-left"></i></button>
          <button class="gallery-nav next" id="galleryNext" aria-label="Next photo"><i class="fa-solid fa-chevron-right"></i></button>
          <span class="gallery-counter" id="galleryCounter">1 / ${photos.length}</span>`
              : ""
          }
        </div>
        ${
          photos.length > 1
            ? `<div class="gallery-thumbs" id="galleryThumbs">
                ${photos
                  .map(
                    (p, i) => `
                  <button type="button" data-index="${i}" class="${i === 0 ? "active" : ""}" aria-label="Photo ${i + 1}">
                    <img src="${p}" alt="${vehicle.title} — thumbnail ${i + 1}" loading="lazy">
                  </button>`,
                  )
                  .join("")}
              </div>`
            : ""
        }
      </div>

      <div class="detail-info">
        <span class="cat">${vehicle.catLabel}</span>
        <h1>${vehicle.title.trim()}</h1>
        <p class="fits">${vehicle.fits}</p>

        <div class="detail-meta">
          <div class="item"><span>Stock Code</span><strong>${vehicle.stock}</strong></div>
          <div class="item"><span>Category</span><strong>${vehicle.catLabel}</strong></div>
          ${vehicle.price ? `<div class="item"><span>Price</span><strong>${vehicle.price}</strong></div>` : ""}
          <div class="item"><span>Photos Available</span><strong>${photos.length}</strong></div>
        </div>

        <div class="detail-cta">
          <a href="${waHref}" target="_blank" rel="noopener" class="btn btn-primary"><i class="fa-brands fa-whatsapp"></i>&nbsp; WhatsApp Enquiry</a>
          <a href="tel:${BUSINESS.phoneTel}" class="btn btn-outline">Call ${BUSINESS.phoneDisplay}</a>
        </div>

        ${
          vehicle.description
            ? `<div class="detail-description">
                <h3>Description</h3>
                <p>${vehicle.description}</p>
              </div>`
            : ""
        }

        <div class="detail-note">
          <i class="fa-solid fa-circle-info"></i>
          <span>Parts and panels are pulled to order — call or WhatsApp us with this stock code and we'll confirm availability and price on the spot.</span>
        </div>
      </div>
    </div>`;

  initGalleryControls();
}

/* ---------------- Gallery interactions ---------------- */
function initGalleryControls() {
  const mainImg = document.getElementById("galleryMainImg");
  const prevBtn = document.getElementById("galleryPrev");
  const nextBtn = document.getElementById("galleryNext");
  const counter = document.getElementById("galleryCounter");
  const thumbs = document.querySelectorAll("#galleryThumbs button");
  const mainWrap = document.getElementById("galleryMain");

  function show(index) {
    const total = galleryState.photos.length;
    galleryState.index = ((index % total) + total) % total;
    mainImg.src = galleryState.photos[galleryState.index];
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
    img.src = galleryState.photos[galleryState.index];
  };

  closeBtn.addEventListener("click", closeLightbox);
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeLightbox();
  });
  prevBtn.addEventListener("click", () => {
    showFn(galleryState.index - 1);
    img.src = galleryState.photos[galleryState.index];
  });
  nextBtn.addEventListener("click", () => {
    showFn(galleryState.index + 1);
    img.src = galleryState.photos[galleryState.index];
  });
}

function updateLightboxImg() {
  if (window._afjUpdateLightboxImg) window._afjUpdateLightboxImg();
}

function openLightbox(index) {
  const overlay = document.getElementById("lightbox");
  const img = document.getElementById("lightboxImg");
  if (!overlay || !img) return;
  img.src = galleryState.photos[index];
  overlay.classList.add("open");
}

function closeLightbox() {
  const overlay = document.getElementById("lightbox");
  if (overlay) overlay.classList.remove("open");
}

/* ---------------- Related vehicles strip ---------------- */
function renderRelated(current) {
  const section = document.getElementById("relatedSection");
  const grid = document.getElementById("relatedGrid");
  if (!section || !grid) return;

  const others = INVENTORY.filter((item) => item.id !== current.id).slice(0, 3);
  if (!others.length) return;

  grid.innerHTML = others
    .map((item) => {
      const photoCount =
        Array.isArray(item.photos) && item.photos.length
          ? item.photos.length
          : 1;
      return `
      <div class="inv-card">
        <a class="inv-media" href="car-detail.html?id=${item.id}" aria-label="View all photos of ${item.title}">
          <img src="${item.img}" alt="${item.title}" loading="lazy">
          <span class="inv-condition">${""}</span>
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
          <a class="inv-details-btn" href="car-detail.html?id=${item.id}">
            <i class="fa-solid fa-images"></i> More Details &amp; Photos
          </a>
        </div>
      </div>`;
    })
    .join("");

  section.style.display = "block";
}
