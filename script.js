function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

// Project Data with Gallery Images
const projectData = [
  {
    id: "ticketing",
    title: "EO Ticketing System",
    summary: "Centralized support ticketing with roles, reporting, and branch workflows.",
    intro: "I independently designed and developed a centralized web-based ticketing system to replace fragmented ticket tracking and spreadsheet-based support workflows.",
    highlights: [
      ["My role", "Built the system end to end and presented it to Application Support Team Leads as a proposed workflow improvement."],
      ["Ticket management", "Added branch assignment, concern categories, priority/status tracking, attachments, and resolution monitoring."],
      ["Access and reporting", "Implemented authentication, role-based access, activity tracking, and reports for branch concerns and ticket progress."],
    ],
    images: [
      "assets/EO%20Ticketing%20System/Screenshot_1.png",
      "assets/EO%20Ticketing%20System/Screenshot_2.png",
      "assets/EO%20Ticketing%20System/Screenshot_3.png",
      "assets/EO%20Ticketing%20System/Screenshot_4.png",
      "assets/EO%20Ticketing%20System/Screenshot_5.png",
      "assets/EO%20Ticketing%20System/Screenshot_6.png",
      "assets/EO%20Ticketing%20System/Screenshot_7.png",
      "assets/EO%20Ticketing%20System/Screenshot_8.png",
      "assets/EO%20Ticketing%20System/Screenshot_9.png",
      "assets/EO%20Ticketing%20System/Screenshot_10.png",
      "assets/EO%20Ticketing%20System/Screenshot_11.png",
      "assets/EO%20Ticketing%20System/Screenshot_12.png",
      "assets/EO%20Ticketing%20System/Screenshot_13.png",
      "assets/EO%20Ticketing%20System/Screenshot_14.png",
      "assets/EO%20Ticketing%20System/Screenshot_15.png",
      "assets/EO%20Ticketing%20System/Screenshot_16.png",
      "assets/EO%20Ticketing%20System/Screenshot_17.png",
      "assets/EO%20Ticketing%20System/Screenshot_18.png",
      "assets/EO%20Ticketing%20System/Screenshot_19.png",
      "assets/EO%20Ticketing%20System/Screenshot_20.png",
      "assets/EO%20Ticketing%20System/Screenshot_21.png",
      "assets/EO%20Ticketing%20System/Screenshot_22.png",
      "assets/EO%20Ticketing%20System/Screenshot_23.png",
      "assets/EO%20Ticketing%20System/Screenshot_24.png",
      "assets/EO%20Ticketing%20System/Screenshot_25.png",
      "assets/EO%20Ticketing%20System/Screenshot_26.png",
      "assets/EO%20Ticketing%20System/Screenshot_27.png",
      "assets/EO%20Ticketing%20System/Screenshot_28.png",
      "assets/EO%20Ticketing%20System/Screenshot_29.png",
      "assets/EO%20Ticketing%20System/Screenshot_30.png",
      "assets/EO%20Ticketing%20System/Screenshot_31.png",
      "assets/EO%20Ticketing%20System/Screenshot_32.png",
      "assets/EO%20Ticketing%20System/Screenshot_33.png",
      "assets/EO%20Ticketing%20System/Screenshot_34.png"
    ],
    tech: ["Laravel", "Next.js", "TypeScript", "MySQL"],
  },
  {
    id: "enterprise",
    title: "Classic Savory ERP System",
    summary: "Legacy VB.NET systems modernized into a unified Laravel and Next.js ERP.",
    intro: "As a Systems Programmer at Classic Savory (Jun 2025–Jan 2026), I migrated and modernized legacy VB.NET and Crystal Reports applications into a unified Laravel and Next.js enterprise platform.",
    highlights: [
      ["Integrated modules", "Built HR, Biometric, Payroll, and Accounting modules to consolidate previously separate business applications."],
      ["Automation and access", "Implemented scheduled biometric data sync plus role-based access control across system modules."],
      ["Migration and deployment", "Migrated legacy data into the new platform and deployed the web app on a local company server."],
    ],
    images: [
      "assets/Classic%20Savory/Screenshot_1.png",
      "assets/Classic%20Savory/Screenshot_2.png",
      "assets/Classic%20Savory/Screenshot_3.png",
      "assets/Classic%20Savory/Screenshot_4.png",
      "assets/Classic%20Savory/Screenshot_5.png",
      "assets/Classic%20Savory/Screenshot_6.png",
      "assets/Classic%20Savory/Screenshot_7.png",
      "assets/Classic%20Savory/Screenshot_8.png",
      "assets/Classic%20Savory/Screenshot_9.png",
      "assets/Classic%20Savory/Screenshot_10.png",
      "assets/Classic%20Savory/Screenshot_11.png",
      "assets/Classic%20Savory/Screenshot_12.png",
      "assets/Classic%20Savory/Screenshot_13.png",
      "assets/Classic%20Savory/Screenshot_14.png",
      "assets/Classic%20Savory/Screenshot_15.png",
      "assets/Classic%20Savory/Screenshot_16.png",
      "assets/Classic%20Savory/Screenshot_17.png",
      "assets/Classic%20Savory/Screenshot_18.png",
      "assets/Classic%20Savory/Screenshot_19.png",
      "assets/Classic%20Savory/Screenshot_20.png",
      "assets/Classic%20Savory/Screenshot_21.png",
      "assets/Classic%20Savory/Screenshot_22.png",
      "assets/Classic%20Savory/Screenshot_23.png",
      "assets/Classic%20Savory/Screenshot_24.png",
      "assets/Classic%20Savory/Screenshot_25.png",
      "assets/Classic%20Savory/Screenshot_26.png",
      "assets/Classic%20Savory/Screenshot_27.png",
      "assets/Classic%20Savory/Screenshot_28.png",
      "assets/Classic%20Savory/Screenshot_29.png",
      "assets/Classic%20Savory/Screenshot_30.png",
      "assets/Classic%20Savory/Screenshot_31.png",
      "assets/Classic%20Savory/Screenshot_32.png",
      "assets/Classic%20Savory/Screenshot_33.png",
      "assets/Classic%20Savory/Screenshot_34.png",
      "assets/Classic%20Savory/Screenshot_35.png",
      "assets/Classic%20Savory/Screenshot_36.png",
      "assets/Classic%20Savory/Screenshot_37.png",
      "assets/Classic%20Savory/Screenshot_38.png",
      "assets/Classic%20Savory/Screenshot_39.png",
      "assets/Classic%20Savory/Screenshot_40.png",
      "assets/Classic%20Savory/Screenshot_41.png",
      "assets/Classic%20Savory/Screenshot_42.png",
      "assets/Classic%20Savory/Screenshot_43.png",
      "assets/Classic%20Savory/Screenshot_44.png",
      "assets/Classic%20Savory/Screenshot_45.png",
      "assets/Classic%20Savory/Screenshot_46.png",
      "assets/Classic%20Savory/Screenshot_47.png",
      "assets/Classic%20Savory/Screenshot_48.png",
      "assets/Classic%20Savory/Screenshot_49.png",
      "assets/Classic%20Savory/Screenshot_50.png",
      "assets/Classic%20Savory/Screenshot_51.png",
      "assets/Classic%20Savory/Screenshot_52.png",
      "assets/Classic%20Savory/Screenshot_53.png",
      "assets/Classic%20Savory/Screenshot_54.png",
      "assets/Classic%20Savory/Screenshot_55.png",
      "assets/Classic%20Savory/Screenshot_56.png",
      "assets/Classic%20Savory/Screenshot_57.png",
      "assets/Classic%20Savory/Screenshot_58.png",
      "assets/Classic%20Savory/Screenshot_59.png",
      "assets/Classic%20Savory/Screenshot_60.png",
      "assets/Classic%20Savory/Screenshot_61.png",
      "assets/Classic%20Savory/Screenshot_62.png",
      "assets/Classic%20Savory/Screenshot_63.png",
      "assets/Classic%20Savory/Screenshot_64.png",
      "assets/Classic%20Savory/Screenshot_65.png",
      "assets/Classic%20Savory/Screenshot_66.png",
      "assets/Classic%20Savory/Screenshot_67.png",
      "assets/Classic%20Savory/Screenshot_68.png",
      "assets/Classic%20Savory/Screenshot_69.png",
      "assets/Classic%20Savory/Screenshot_70.png",
      "assets/Classic%20Savory/Screenshot_71.png",
      "assets/Classic%20Savory/Screenshot_72.png",
      "assets/Classic%20Savory/Screenshot_73.png",
      "assets/Classic%20Savory/Screenshot_74.png",
      "assets/Classic%20Savory/Screenshot_75.png",
      "assets/Classic%20Savory/Screenshot_76.png",
      "assets/Classic%20Savory/Screenshot_77.png",
      "assets/Classic%20Savory/Screenshot_78.png",
      "assets/Classic%20Savory/Screenshot_79.png",
      "assets/Classic%20Savory/Screenshot_80.png",
      "assets/Classic%20Savory/Screenshot_81.png"
    ],
    tech: ["Laravel", "Next.js", "TypeScript", "MySQL", "VB.NET", "Crystal Reports"],
  },
  {
    id: "oscaspends",
    title: "OSCA SPENDS",
    summary: "Blockchain-backed senior pension verification with SMS status updates.",
    intro: "SPENDS (Social Pension Network for DSWD Seniors) is our capstone project for OSCA North Caloocan — a blockchain-integrated web system for managing and verifying senior citizen beneficiary records.",
    highlights: [
      ["Integrity", "Stores verified beneficiary data on-chain to reduce fraud and support accurate qualification tracking."],
      ["Security", "Includes login throttling to help prevent brute-force and spam login attempts."],
      ["Notifications", "Sends SMS updates through the Semaphore API when application status changes."],
    ],
    images: [
      "./assets/SPENDS/1.user_home.jpg",
      "./assets/SPENDS/2.user_accessibility_button.jpg",
      "./assets/SPENDS/3.user_footer.jpg",
      "./assets/SPENDS/4.user_announcements.jpg",
      "./assets/SPENDS/5.user_pension_distribution.jpg",
      "./assets/SPENDS/6.user_events.jpg",
      "./assets/SPENDS/7.user_events_list.jpg",
      "./assets/SPENDS/8.user_events_details.jpg",
      "./assets/SPENDS/9.user_events_details1.jpg",
      "./assets/SPENDS/10.user_events_details2.jpg",
      "./assets/SPENDS/11.user_events_details3.jpg",
      "./assets/SPENDS/12.user_request_tracker.jpg",
      "./assets/SPENDS/13.user_request_tracker1.jpg",
      "./assets/SPENDS/14.user_about_us.jpg",
      "./assets/SPENDS/15.user_about_us1.jpg",
      "./assets/SPENDS/16.user_about_us2.jpg",
      "./assets/SPENDS/17.user_contact.jpg",
      "./assets/SPENDS/18.user_contact1.jpg",
      "./assets/SPENDS/19.user_requirements.jpg",
      "./assets/SPENDS/20.user_requirements1.jpg",
      "./assets/SPENDS/21.user_register.jpg",
      "./assets/SPENDS/22.user_register1.jpg",
      "./assets/SPENDS/23.user_register2.jpg",
      "./assets/SPENDS/24.user_register3.jpg",
      "./assets/SPENDS/25.user_register4.jpg",
      "./assets/SPENDS/26.user_register5.jpg",
      "./assets/SPENDS/27.user_register6.jpg",
      "./assets/SPENDS/28.user_register7.jpg",
      "./assets/SPENDS/29.user_register8.jpg",
      "./assets/SPENDS/30.user_register9.jpg",
      "./assets/SPENDS/31.user_register10.jpg",
      "./assets/SPENDS/32.user_register11.jpg",
      "./assets/SPENDS/33.user_register12.jpg",
      "./assets/SPENDS/34.user_login.jpg",
      "./assets/SPENDS/35.user_profile.jpg",
      "./assets/SPENDS/36.encoder_login.jpg",
      "./assets/SPENDS/37.encoder_dashboard.jpg",
      "./assets/SPENDS/38.encoder_dashboard1.jpg",
      "./assets/SPENDS/39.encoder_tabs.jpg",
      "./assets/SPENDS/40.admin_login.jpg",
      "./assets/SPENDS/41.admin_tabs.jpg",
      "./assets/SPENDS/42.admin_dashboard.jpg",
      "./assets/SPENDS/43.admin_dashboard1.jpg",
      "./assets/SPENDS/44.admin_blockchain_panel.jpg",
      "./assets/SPENDS/45.admin_blockchain_panel1.jpg",
      "./assets/SPENDS/46.admin_blockchain_panel2.jpg",
      "./assets/SPENDS/47.admin_blockchain_panel3.jpg",
    ],
    tech: [
      "PHP",
      "Laravel",
      "Node.js",
      "JavaScript",
      "Alpine.js",
      "Tailwind CSS",
      "MySQL",
      "Restful API",
      "Ganache",
      "Truffle",
      "Web3.js",
      "Solidity",
    ],
  },
  {
    id: "documentrequestsystem",
    title: "Document Request System",
    summary: "School document requests with tracking, uploads, and registrar tools.",
    intro: "A web app built for Amparo High School to streamline official document requests such as diplomas, Form 137/138, and certificates of good moral character.",
    highlights: [
      ["Request flow", "Lets students and parents submit document requests online instead of relying on paper-only processes."],
      ["Communication", "Includes status notifications and a comment thread between users and the registrar."],
      ["Registrar tools", "Supports requirement uploads plus centralized verification and request tracking."],
    ],
    images: [
      "./assets/Amparo High/1.user_home.jpg",
      "./assets/Amparo High/2.user_aboutus.jpg",
      "./assets/Amparo High/3.user_welcome.jpg",
      "./assets/Amparo High/4.user_requestform1.jpg",
      "./assets/Amparo High/5.user_requestform2.jpg",
      "./assets/Amparo High/6.user_requestform3.jpg",
      "./assets/Amparo High/7.user_requestform4.jpg",
      "./assets/Amparo High/8.user_requestform5.jpg",
      "./assets/Amparo High/9.user_requestform6.jpg",
      "./assets/Amparo High/10.user_requesttrack1.jpg",
      "./assets/Amparo High/11.user_requesttrack2.jpg",
      "./assets/Amparo High/12.user_requesttrack3.jpg",
      "./assets/Amparo High/13.user_requesttrack4.jpg",
      "./assets/Amparo High/13.user_requesttrack5.jpg",
      "./assets/Amparo High/14.registrar_requesttrack.jpg",
      "./assets/Amparo High/15.registrar_requesttrack.jpg",
      "./assets/Amparo High/16.registrar_requesttrack.jpg",
      "./assets/Amparo High/17.registrar_requesttrack.jpg",
      "./assets/Amparo High/18.registrar_requesttrack.jpg",
      "./assets/Amparo High/19.registrar_requesttrack.jpg",
      "./assets/Amparo High/20.registrar_requesttrack.jpg",
      "./assets/Amparo High/21.registrar_requesttrack.jpg",
      "./assets/Amparo High/22.registrar_requesttrack.jpg",
      "./assets/Amparo High/23.registrar_requesttrack.jpg",
      "./assets/Amparo High/24.registrar_requesttrack.jpg",
    ],
    tech: ["PHP", "HTML/CSS", "JavaScript", "Bootstrap", "MySQL"],
  },
  {
    id: "lacinereserva",
    title: "La Cine Reserva",
    summary: "Movie seat reservations with booking flow and interactive map location.",
    intro: "An academic movie seat reservation system that simulates local theater booking operations from seat selection through confirmation.",
    highlights: [
      ["Booking flow", "Lets users reserve seats and helps theaters track reservations in one place."],
      ["Payments demo", "Includes a guided checkout experience for confirming reservations."],
      ["Location", "Uses Leaflet and OpenStreetMap so users can view the theater location interactively."],
    ],
    images: [
      "./assets/La Cine Reserva/1.user_Home.jpg",
      "./assets/La Cine Reserva/2.user_footer.jpg",
      "./assets/La Cine Reserva/3.user_contact.jpg",
      "./assets/La Cine Reserva/4.user_nowshowing.jpg",
      "./assets/La Cine Reserva/5.user_comingsoon.jpg",
      "./assets/La Cine Reserva/6.user_cinemas.jpg",
      "./assets/La Cine Reserva/7.user_booking.jpg",
      "./assets/La Cine Reserva/8.user_booking1.jpg",
      "./assets/La Cine Reserva/9.user_confirm.jpg",
      "./assets/La Cine Reserva/10.user_gcash1.jpg",
      "./assets/La Cine Reserva/11.user_gcash2.jpg",
      "./assets/La Cine Reserva/12.user_gcash3.jpg",
      "./assets/La Cine Reserva/13.user_gcash4.jpg",
      "./assets/La Cine Reserva/14.user_ticket1.jpg",
      "./assets/La Cine Reserva/15.user_ticket2.jpg",
      "./assets/La Cine Reserva/16.user_ticket3.jpg",
      "./assets/La Cine Reserva/17.admin_login.jpg",
      "./assets/La Cine Reserva/18.admin_dashboard1.jpg",
      "./assets/La Cine Reserva/19.admin_dashboard2.jpg",
      "./assets/La Cine Reserva/20.admin_movies1.jpg",
      "./assets/La Cine Reserva/21.admin_movies2.jpg",
      "./assets/La Cine Reserva/22.admin_movies3.jpg",
      "./assets/La Cine Reserva/23.admin_transaction1.jpg",
      "./assets/La Cine Reserva/24.admin_transaction2.jpg",
    ],
    tech: ["PHP", "HTML/CSS", "JavaScript", "Bootstrap", "Leaflet.js", "MySQL"],
  },
];

const TECH_ICON_MAP = {
  PHP: "php/777BB4",
  Laravel: "laravel/FF2D20",
  "Node.js": "nodedotjs/5FA04E",
  JavaScript: "javascript/F7DF1E",
  Javascript: "javascript/F7DF1E",
  TypeScript: "typescript/3178C6",
  "React.js": "react/61DAFB",
  "Next.js": "nextdotjs/000000",
  "React Native": "react/61DAFB",
  "Tailwind CSS": "tailwindcss/06B6D4",
  "Alpine.js": "alpinedotjs/8BC0D0",
  MySQL: "mysql/4479A1",
  SQL: "mysql/4479A1",
  "VB.NET": "dotnet/512BD4",
  Bootstrap: "bootstrap/7952B3",
  "Leaflet.js": "leaflet/199900",
  "Web3.js": "web3dotjs/F16822",
  Solidity: "solidity/363636",
  Git: "git/F05032",
  GitHub: "github/181717",
  Postman: "postman/FF6C37",
  "HTML/CSS": "html5/E34F26",
  Ganache: "ethereum/3C3C3D",
  Truffle: "truffle/F6E4A0",
  "Restful API": "swagger/85EA2D",
  "REST APIs": "swagger/85EA2D",
  "Crystal Reports": null,
  "System Testing": "testinglibrary/E33332",
  DFD: "diagramsdotnet/F08705",
  ERD: "diagramsdotnet/F08705",
  "DFD & ERD": "diagramsdotnet/F08705",
  "Technical Support": "zendesk/03363D",
  "EO Ticketing System": null,
  "Workflow Documentation": "notion/000000",
  RBAC: "auth0/EB5424",
  "Information Systems": "edx/02262B",
  "Database Design": "postgresql/4169E1",
  SDLC: "jira/0052CC",
  "Web Development": "html5/E34F26",
};

function techIconMarkup(name) {
  const key = TECH_ICON_MAP[name];
  if (key) {
    return `<img src="https://cdn.simpleicons.org/${key}" alt="" class="tech-icon" loading="lazy">`;
  }
  return `<span class="tech-icon tech-icon-fallback" aria-hidden="true">${name.charAt(0)}</span>`;
}

function renderTechTag(name, extraClass = "") {
  const className = extraClass ? `tech-tag ${extraClass}` : "tech-tag";
  return `<span class="${className}">${techIconMarkup(name)}<span>${name}</span></span>`;
}

function renderTechListItems(techList) {
  return techList.map(name => `<li class="tech-tag">${techIconMarkup(name)}<span>${name}</span></li>`).join("");
}

function renderCardTechTags(techList, limit = 5) {
  const visible = techList.slice(0, limit);
  const remaining = techList.length - visible.length;
  const tags = visible.map(name => renderTechTag(name));
  if (remaining > 0) {
    tags.push(`<span class="tech-tag tech-tag-more">+${remaining}</span>`);
  }
  return tags.join("");
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function renderProjectDescription(project) {
  const intro = escapeHtml(project.intro || project.description || "");
  const highlights = Array.isArray(project.highlights) ? project.highlights : [];
  const list = highlights.length
    ? `<ul class="project-highlights">${highlights.map(([label, text]) =>
        `<li><strong>${escapeHtml(label)}:</strong> ${escapeHtml(text)}</li>`
      ).join("")}</ul>`
    : "";
  return `<p>${intro}</p>${list}`;
}

// Modal + lightbox functionality
document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('project-modal');
  const closeModal = document.querySelector('.close-modal');
  const mainImage = document.getElementById('gallery-main-img');
  const zoomTrigger = document.querySelector('.gallery-zoom-trigger');
  const modalTitle = document.getElementById('modal-title');
  const modalDescription = document.getElementById('modal-description');
  const modalTechStack = document.getElementById('modal-tech-stack');
  const prevSlide = document.querySelector('.prev-slide');
  const nextSlide = document.querySelector('.next-slide');
  const lightbox = document.getElementById('image-lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxClose = document.querySelector('.lightbox-close');
  const lightboxPrev = document.querySelector('.lightbox-prev');
  const lightboxNext = document.querySelector('.lightbox-next');
  const lightboxStage = document.querySelector('.lightbox-stage');

  let currentImageIndex = 0;
  let currentProjectImages = [];
  let lightboxImages = [];
  let lightboxOpen = false;
  let lightboxMode = 'project'; // project | certificate
  let scale = 1;
  let posX = 0;
  let posY = 0;
  let dragging = false;
  let dragStartX = 0;
  let dragStartY = 0;
  let originX = 0;
  let originY = 0;
  let lastTap = 0;
  let pinchStartDist = 0;
  let pinchStartScale = 1;

  document.querySelectorAll('.tech-tags[data-tech]').forEach(container => {
    const names = container.dataset.tech.split(',').map(name => name.trim()).filter(Boolean);
    container.innerHTML = renderCardTechTags(names);
  });

  document.querySelectorAll('.exp-tags-wrapper .exp-tag').forEach(tag => {
    const name = tag.textContent.trim();
    if (!name || tag.querySelector('.tech-icon')) return;
    tag.innerHTML = `${techIconMarkup(name)}<span>${escapeHtml(name)}</span>`;
  });

  function findProjectFromCard(card) {
    const projectTitle = card.querySelector('.project-title')?.textContent?.trim();
    return projectData.find(project => project.title === projectTitle);
  }

  function openProjectFromCard(card) {
    const project = findProjectFromCard(card);
    if (project) openProjectModal(project);
  }

  document.querySelectorAll('.project-btn').forEach(btn => {
    if (btn.textContent.trim() !== 'View Details') return;
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      openProjectFromCard(this.closest('.project-card'));
    });
  });

  document.querySelectorAll('.project-media').forEach(media => {
    media.addEventListener('click', function() {
      openProjectFromCard(this.closest('.project-card'));
    });
  });

  function openProjectModal(project) {
    currentImageIndex = 0;
    currentProjectImages = project.images || [];
    modalTitle.textContent = project.title;
    modalDescription.innerHTML = renderProjectDescription(project);
    modalTechStack.innerHTML = renderTechListItems(project.tech || []);

    if (currentProjectImages.length > 0) {
      mainImage.src = currentProjectImages[0];
      mainImage.alt = `${project.title} screenshot`;
    }

    modal.hidden = false;
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    updateNavigationVisibility();
  }

  function updateMainImage(imgSrc, index) {
    currentImageIndex = index;
    if (lightboxMode === 'project' && mainImage) {
      mainImage.src = imgSrc;
      mainImage.alt = `${modalTitle.textContent} screenshot ${index + 1}`;
    }
    updateNavigationVisibility();
    if (lightboxOpen) {
      lightboxImg.src = imgSrc;
      resetZoom();
    }
  }

  function activeLightboxImages() {
    return lightboxOpen ? lightboxImages : currentProjectImages;
  }

  function updateNavigationVisibility() {
    const images = activeLightboxImages();
    const atStart = currentImageIndex === 0;
    const atEnd = currentImageIndex >= images.length - 1;
    const multi = images.length > 1;
    if (prevSlide) prevSlide.style.visibility = (!multi || atStart) ? 'hidden' : 'visible';
    if (nextSlide) nextSlide.style.visibility = (!multi || atEnd) ? 'hidden' : 'visible';
    if (lightboxPrev) lightboxPrev.style.visibility = (!multi || atStart) ? 'hidden' : 'visible';
    if (lightboxNext) lightboxNext.style.visibility = (!multi || atEnd) ? 'hidden' : 'visible';
  }

  function navigateGallery(direction) {
    const images = activeLightboxImages();
    const newIndex = currentImageIndex + direction;
    if (newIndex >= 0 && newIndex < images.length) {
      currentImageIndex = newIndex;
      updateMainImage(images[newIndex], newIndex);
    }
  }

  function applyZoom() {
    lightboxImg.style.transform = `translate(${posX}px, ${posY}px) scale(${scale})`;
    lightboxImg.classList.toggle('is-zoomed', scale > 1.01);
  }

  function resetZoom() {
    scale = 1;
    posX = 0;
    posY = 0;
    applyZoom();
  }

  function openLightbox(images, index = 0, alt = 'Zoomed image', mode = 'project') {
    if (!images || !images.length) return;
    lightboxMode = mode;
    lightboxImages = images;
    currentImageIndex = index;
    lightboxOpen = true;
    lightbox.hidden = false;
    lightboxImg.src = images[index];
    lightboxImg.alt = alt;
    document.body.style.overflow = 'hidden';
    resetZoom();
    updateNavigationVisibility();
  }

  function openProjectLightbox() {
    openLightbox(currentProjectImages, currentImageIndex, mainImage.alt, 'project');
  }

  function closeLightbox() {
    lightboxOpen = false;
    lightbox.hidden = true;
    lightboxImages = [];
    lightboxMode = 'project';
    resetZoom();
    if (modal.hidden || modal.style.display === 'none') {
      document.body.style.overflow = '';
    }
  }

  function closeModalFunction() {
    closeLightbox();
    modal.hidden = true;
    modal.style.display = 'none';
    document.body.style.overflow = '';
  }

  if (prevSlide) prevSlide.addEventListener('click', () => navigateGallery(-1));
  if (nextSlide) nextSlide.addEventListener('click', () => navigateGallery(1));
  if (zoomTrigger) zoomTrigger.addEventListener('click', openProjectLightbox);
  if (closeModal) closeModal.addEventListener('click', closeModalFunction);
  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxPrev) lightboxPrev.addEventListener('click', () => navigateGallery(-1));
  if (lightboxNext) lightboxNext.addEventListener('click', () => navigateGallery(1));

  // Make certificate images zoomable
  document.querySelectorAll('.certificate-image img').forEach(img => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'certificate-zoom';
    button.setAttribute('aria-label', `Zoom ${img.alt || 'certificate'}`);
    img.parentNode.insertBefore(button, img);
    button.appendChild(img);
    const hint = document.createElement('span');
    hint.className = 'certificate-zoom-hint';
    hint.textContent = 'Tap to zoom';
    button.appendChild(hint);
    button.addEventListener('click', event => {
      event.stopPropagation();
      openLightbox([img.currentSrc || img.src], 0, img.alt || 'Certificate', 'certificate');
    });
  });

  modal.addEventListener('click', event => {
    if (event.target === modal) closeModalFunction();
  });

  lightbox.addEventListener('click', event => {
    if (event.target === lightbox || event.target === lightboxStage) closeLightbox();
  });

  lightboxImg.addEventListener('click', event => event.stopPropagation());

  lightboxImg.addEventListener('dblclick', event => {
    event.preventDefault();
    if (scale > 1) resetZoom();
    else {
      scale = 2.5;
      applyZoom();
    }
  });

  lightboxImg.addEventListener('pointerdown', event => {
    if (scale <= 1) return;
    dragging = true;
    dragStartX = event.clientX;
    dragStartY = event.clientY;
    originX = posX;
    originY = posY;
    lightboxImg.setPointerCapture(event.pointerId);
  });

  lightboxImg.addEventListener('pointermove', event => {
    if (!dragging) return;
    posX = originX + (event.clientX - dragStartX);
    posY = originY + (event.clientY - dragStartY);
    applyZoom();
  });

  lightboxImg.addEventListener('pointerup', () => { dragging = false; });
  lightboxImg.addEventListener('pointercancel', () => { dragging = false; });

  lightboxStage.addEventListener('wheel', event => {
    if (!lightboxOpen) return;
    event.preventDefault();
    const delta = event.deltaY > 0 ? -0.15 : 0.15;
    scale = Math.min(4, Math.max(1, scale + delta));
    if (scale === 1) {
      posX = 0;
      posY = 0;
    }
    applyZoom();
  }, { passive: false });

  lightboxStage.addEventListener('touchstart', event => {
    if (event.touches.length === 2) {
      const [a, b] = event.touches;
      pinchStartDist = Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY);
      pinchStartScale = scale;
    } else if (event.touches.length === 1) {
      const now = Date.now();
      if (now - lastTap < 280) {
        if (scale > 1) resetZoom();
        else {
          scale = 2.5;
          applyZoom();
        }
      }
      lastTap = now;
    }
  }, { passive: true });

  lightboxStage.addEventListener('touchmove', event => {
    if (event.touches.length !== 2 || !pinchStartDist) return;
    event.preventDefault();
    const [a, b] = event.touches;
    const dist = Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY);
    scale = Math.min(4, Math.max(1, pinchStartScale * (dist / pinchStartDist)));
    if (scale === 1) {
      posX = 0;
      posY = 0;
    }
    applyZoom();
  }, { passive: false });

  document.addEventListener('keydown', function(e) {
    if (lightboxOpen) {
      if (e.key === 'Escape') {
        closeLightbox();
        return;
      }
      if (e.key === 'ArrowLeft') navigateGallery(-1);
      if (e.key === 'ArrowRight') navigateGallery(1);
      return;
    }
    if (!modal.hidden && modal.style.display === 'flex') {
      if (e.key === 'ArrowLeft') navigateGallery(-1);
      else if (e.key === 'ArrowRight') navigateGallery(1);
      else if (e.key === 'Escape') closeModalFunction();
    }
  });
});

// Experience section pagination
document.addEventListener('DOMContentLoaded', function() {
  const containers = document.querySelectorAll('.details-container');
  
  containers.forEach(container => {
    const articleContainers = container.querySelectorAll('.article-container');
    const prevBtn = container.querySelector('.prev-btn');
    const nextBtn = container.querySelector('.next-btn');
    const dotsContainer = container.querySelector('.page-dots');
    let currentPage = 0;

    // Only show pagination controls if there are multiple pages
    if (articleContainers.length <= 1) {
      if (prevBtn) prevBtn.style.display = 'none';
      if (nextBtn) nextBtn.style.display = 'none';
      if (dotsContainer) dotsContainer.style.display = 'none';
      return;
    }

    function updatePagination() {
      // Show/hide pages
      articleContainers.forEach((container, index) => {
        container.style.display = index === currentPage ? 'flex' : 'none';
      });

      // Update dots
      if (dotsContainer) {
        const dots = dotsContainer.querySelectorAll('.dot');
        dots.forEach((dot, index) => {
          dot.classList.toggle('active', index === currentPage);
        });
      }

      // Update button states
      if (prevBtn) {
        prevBtn.style.visibility = currentPage === 0 ? 'hidden' : 'visible';
      }
      if (nextBtn) {
        nextBtn.style.visibility = currentPage === articleContainers.length - 1 ? 'hidden' : 'visible';
      }
    }

    // Add click handlers
    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        if (currentPage > 0) {
          currentPage--;
          updatePagination();
        }
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        if (currentPage < articleContainers.length - 1) {
          currentPage++;
          updatePagination();
        }
      });
    }

    // Initialize pagination
    updatePagination();
  });
});

// Certification accordion functionality
function setCertificationHeight(item, open) {
  const content = item.querySelector('.certification-content');
  if (!content) return;
  if (!open) {
    content.style.maxHeight = null;
    return;
  }
  content.style.maxHeight = content.scrollHeight + 'px';
  // Recalculate after images load so nothing gets clipped.
  content.querySelectorAll('img').forEach(img => {
    if (img.complete) return;
    img.addEventListener('load', () => {
      if (item.classList.contains('active')) {
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    }, { once: true });
  });
}

function toggleCertification(header) {
  const item = header.parentElement;
  const isActive = item.classList.contains('active');

  document.querySelectorAll('.certification-item').forEach(cert => {
    cert.classList.remove('active');
    setCertificationHeight(cert, false);
  });

  if (!isActive) {
    item.classList.add('active');
    setCertificationHeight(item, true);
  }
}

// Particle Effect
class Particle {
  constructor(canvas, x, y) {
    this.canvas = canvas;
    this.x = x;
    this.y = y;
    this.size = Math.random() * 2 + 0.5;
    this.speedX = Math.random() * 1.5 - 0.75;
    this.speedY = Math.random() * 1.5 - 0.75;
    this.color = '#2a2a2a';
    this.opacity = Math.random() * 0.3 + 0.1;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.size > 0.2) this.size -= 0.01;

    // Bounce off edges
    if (this.x < 0 || this.x > this.canvas.width) this.speedX *= -1;
    if (this.y < 0 || this.y > this.canvas.height) this.speedY *= -1;
  }

  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.globalAlpha = this.opacity;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

function initParticles() {
  const canvas = document.getElementById('particleCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  const particles = [];
  const particleCount = 240;

  // Set canvas size
  function resizeCanvas() {
    canvas.width = 500;
    canvas.height = 500;
  }
  resizeCanvas();

  // Create particles
  for (let i = 0; i < particleCount; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    particles.push(new Particle(canvas, x, y));
  }

  // Animation loop
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    particles.forEach((particle, index) => {
      particle.update();
      particle.draw(ctx);

      // Replace particles that are too small
      if (particle.size <= 0.2) {
        particles[index] = new Particle(canvas, Math.random() * canvas.width, Math.random() * canvas.height);
      }
    });

    requestAnimationFrame(animate);
  }

  animate();
}

// Initialize particles when the page loads
window.addEventListener('load', initParticles);

// Interactive cursor: hero-tech-style dashed trail + nearby particles
(function initCursorFx() {
  const coarse = window.matchMedia('(pointer: coarse)');
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (coarse.matches || reduced.matches) return;

  const canvas = document.createElement('canvas');
  canvas.id = 'cursor-fx-canvas';
  canvas.setAttribute('aria-hidden', 'true');
  document.body.appendChild(canvas);
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const TRAIL_MS = 750;
  const MIN_DIST = 4;
  const DASH = [4, 2];
  const COLOR = [24, 24, 27];
  const trail = [];
  const sparks = [];
  let dpr = 1;
  let mx = -9999;
  let my = -9999;
  let lastX = null;
  let lastY = null;
  let visible = false;
  let raf = 0;

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    const w = window.innerWidth;
    const h = window.innerHeight;
    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);
    canvas.style.width = `${w}px`;
    canvas.style.height = `${h}px`;
  }

  function pushTrail(x, y, now) {
    if (lastX !== null && Math.hypot(x - lastX, y - lastY) < MIN_DIST) return;
    trail.push({ x, y, t: now });
    lastX = x;
    lastY = y;
    if (trail.length > 48) trail.shift();

    const count = 2 + Math.floor(Math.random() * 2);
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 0.4 + Math.random() * 1.4;
      sparks.push({
        x: x + (Math.random() - 0.5) * 10,
        y: y + (Math.random() - 0.5) * 10,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: 1,
        size: 0.8 + Math.random() * 1.8,
      });
    }
  }

  function onMove(e) {
    mx = e.clientX;
    my = e.clientY;
    visible = true;
    pushTrail(mx, my, performance.now());
  }

  function onLeave() {
    visible = false;
    lastX = null;
    lastY = null;
  }

  function draw(now) {
    raf = requestAnimationFrame(draw);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

    while (trail.length && now - trail[0].t > TRAIL_MS) trail.shift();

    if (trail.length > 1) {
      for (let i = 1; i < trail.length; i++) {
        const a = trail[i - 1];
        const b = trail[i];
        const age = (now - b.t) / TRAIL_MS;
        const alpha = Math.max(0, 1 - age) * 0.55;
        if (alpha <= 0.01) continue;

        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.strokeStyle = `rgba(${COLOR[0]}, ${COLOR[1]}, ${COLOR[2]}, ${alpha})`;
        ctx.lineWidth = 1.5;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.setLineDash(DASH);
        ctx.stroke();
      }
      ctx.setLineDash([]);
    }

    // Soft particle halo around the live cursor
    if (visible) {
      for (let i = 0; i < 10; i++) {
        const spin = now / 420 + i * ((Math.PI * 2) / 10);
        const radius = 12 + Math.sin(now / 280 + i) * 5;
        const px = mx + Math.cos(spin) * radius;
        const py = my + Math.sin(spin) * radius;
        const pulse = 0.25 + 0.2 * Math.sin(now / 200 + i);
        ctx.beginPath();
        ctx.fillStyle = `rgba(${COLOR[0]}, ${COLOR[1]}, ${COLOR[2]}, ${pulse})`;
        ctx.arc(px, py, 1.4, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.beginPath();
      ctx.strokeStyle = `rgba(${COLOR[0]}, ${COLOR[1]}, ${COLOR[2]}, 0.28)`;
      ctx.lineWidth = 1.25;
      ctx.setLineDash(DASH);
      ctx.arc(mx, my, 18 + Math.sin(now / 300) * 2, 0, Math.PI * 2);
      ctx.stroke();
      ctx.setLineDash([]);
    }

    for (let i = sparks.length - 1; i >= 0; i--) {
      const p = sparks[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vx *= 0.96;
      p.vy *= 0.96;
      p.life -= 0.025;
      if (p.life <= 0) {
        sparks.splice(i, 1);
        continue;
      }
      ctx.beginPath();
      ctx.fillStyle = `rgba(${COLOR[0]}, ${COLOR[1]}, ${COLOR[2]}, ${p.life * 0.55})`;
      ctx.arc(p.x, p.y, p.size * Math.max(0.2, p.life), 0, Math.PI * 2);
      ctx.fill();
    }
  }

  resize();
  window.addEventListener('resize', resize);
  window.addEventListener('mousemove', onMove, { passive: true });
  window.addEventListener('mouseleave', onLeave);
  document.addEventListener('mouseleave', onLeave);
  raf = requestAnimationFrame(draw);

  const disable = () => {
    cancelAnimationFrame(raf);
    window.removeEventListener('resize', resize);
    window.removeEventListener('mousemove', onMove);
    window.removeEventListener('mouseleave', onLeave);
    document.removeEventListener('mouseleave', onLeave);
    canvas.remove();
  };

  coarse.addEventListener?.('change', e => { if (e.matches) disable(); });
  reduced.addEventListener?.('change', e => { if (e.matches) disable(); });
})();

