function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

// THEME TOGGLE
const themeToggle = document.getElementById('theme-toggle');
const themeToggleMobile = document.getElementById('theme-toggle-mobile');
const body = document.body;

function setTheme(isDark) {
  if (isDark) {
    body.classList.add('dark-theme');
    if(themeToggle) themeToggle.textContent = '☀️';
    if(themeToggleMobile) themeToggleMobile.textContent = '☀️';
  } else {
    body.classList.remove('dark-theme');
    if(themeToggle) themeToggle.textContent = '🌙';
    if(themeToggleMobile) themeToggleMobile.textContent = '🌙';
  }
}

function toggleTheme() {
  const isDark = !body.classList.contains('dark-theme');
  setTheme(isDark);
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

if(themeToggle) themeToggle.addEventListener('click', toggleTheme);
if(themeToggleMobile) themeToggleMobile.addEventListener('click', toggleTheme);

// On load, set theme from localStorage
const savedTheme = localStorage.getItem('theme');
if(savedTheme === 'dark') setTheme(true);
else setTheme(false);

// Project Data with Gallery Images
const projectData = [
  {
    id: 'oscaspends',
    title: 'OSCA SPENDS',
    description: 'SPENDS (Social Pension Network for DSWD Seniors) is our capstone project developed for the Office of the Senior Citizens Affairs (OSCA) in North Caloocan. It is a blockchain-integrated web system built using PHP, Laravel, Node.js, Alpine.js, JavaScript, Tailwind CSS, MySQL, and Ganache for local blockchain simulation. The system securely manages and verifies senior citizen records. By storing verified data on the blockchain, it ensures data integrity, prevents fraudulent activity, and supports accurate tracking of qualified beneficiaries.',
    images: [
      './assets/SPENDS/1.user_home.jpg',
      './assets/SPENDS/2.user_accessibility_button.jpg',
      './assets/SPENDS/3.user_footer.jpg',
      './assets/SPENDS/4.user_announcements.jpg',
      './assets/SPENDS/5.user_pension_distribution.jpg',
      './assets/SPENDS/6.user_events.jpg',
      './assets/SPENDS/7.user_events_list.jpg',
      './assets/SPENDS/8.user_events_details.jpg',
      './assets/SPENDS/9.user_events_details1.jpg',
      './assets/SPENDS/10.user_events_details2.jpg',
      './assets/SPENDS/11.user_events_details3.jpg',
      './assets/SPENDS/12.user_request_tracker.jpg',
      './assets/SPENDS/13.user_request_tracker1.jpg',
      './assets/SPENDS/14.user_about_us.jpg',
      './assets/SPENDS/15.user_about_us1.jpg',
      './assets/SPENDS/16.user_about_us2.jpg',
      './assets/SPENDS/17.user_contact.jpg',
      './assets/SPENDS/18.user_contact1.jpg',
      './assets/SPENDS/19.user_requirements.jpg',
      './assets/SPENDS/20.user_requirements1.jpg',
      './assets/SPENDS/21.user_register.jpg',
      './assets/SPENDS/22.user_register1.jpg',
      './assets/SPENDS/23.user_register2.jpg',
      './assets/SPENDS/24.user_register3.jpg',
      './assets/SPENDS/25.user_register4.jpg',
      './assets/SPENDS/26.user_register5.jpg',
      './assets/SPENDS/27.user_register6.jpg',
      './assets/SPENDS/28.user_register7.jpg',
      './assets/SPENDS/29.user_register8.jpg',
      './assets/SPENDS/30.user_register9.jpg',
      './assets/SPENDS/31.user_register10.jpg',
      './assets/SPENDS/32.user_register11.jpg',
      './assets/SPENDS/33.user_register12.jpg',
      './assets/SPENDS/34.user_login.jpg',
      './assets/SPENDS/35.user_profile.jpg',
      './assets/SPENDS/36.encoder_login.jpg',
      './assets/SPENDS/37.encoder_dashboard.jpg',
      './assets/SPENDS/38.encoder_dashboard1.jpg',
      './assets/SPENDS/39.encoder_tabs.jpg',
      './assets/SPENDS/40.admin_login.jpg',
      './assets/SPENDS/41.admin_tabs.jpg',
      './assets/SPENDS/42.admin_dashboard.jpg',
      './assets/SPENDS/43.admin_dashboard1.jpg',
      './assets/SPENDS/44.admin_blockchain_panel.jpg',
      './assets/SPENDS/45.admin_blockchain_panel1.jpg',
      './assets/SPENDS/46.admin_blockchain_panel2.jpg',
      './assets/SPENDS/47.admin_blockchain_panel3.jpg'
    ],
    tech: ['PHP', 'Laravel', 'Node.js', 'JavaScript', 'Alpine.js', 'Tailwind CSS', 'MySQL', 'Ganache', 'Truffle', 'Web3.js', 'Solidity'],
    live: 'https://oscaspends.com'
  },
  {
    id: 'documentrequestsystem',
    title: 'Document Request System',
    description: 'The Document Request System is a web-based application that we have designed for Amparo High School to streamline the process of requesting school documents. Built using PHP, HTML/CSS, JavaScript, Bootstrap, and MySQL, it allows students and parents to easily request records such as diplomas, Form 137/138, and certificates of good moral character, while helping the registrar efficiently manage and track these requests.',
    images: [
      './assets/Amparo High/1.user_home.jpg',
      './assets/Amparo High/2.user_aboutus.jpg',
      './assets/Amparo High/3.user_welcome.jpg',
      './assets/Amparo High/4.user_requestform1.jpg',
      './assets/Amparo High/5.user_requestform2.jpg',
      './assets/Amparo High/6.user_requestform3.jpg',
      './assets/Amparo High/7.user_requestform4.jpg',
      './assets/Amparo High/8.user_requestform5.jpg',
      './assets/Amparo High/9.user_requestform6.jpg',
      './assets/Amparo High/10.user_requesttrack1.jpg',
      './assets/Amparo High/11.user_requesttrack2.jpg',
      './assets/Amparo High/12.user_requesttrack3.jpg',
      './assets/Amparo High/13.user_requesttrack4.jpg',
      './assets/Amparo High/13.user_requesttrack5.jpg',
      './assets/Amparo High/14.registrar_requesttrack.jpg',
      './assets/Amparo High/15.registrar_requesttrack.jpg',
      './assets/Amparo High/16.registrar_requesttrack.jpg',
      './assets/Amparo High/17.registrar_requesttrack.jpg',
      './assets/Amparo High/18.registrar_requesttrack.jpg',
      './assets/Amparo High/19.registrar_requesttrack.jpg',
      './assets/Amparo High/20.registrar_requesttrack.jpg',
      './assets/Amparo High/21.registrar_requesttrack.jpg',
      './assets/Amparo High/22.registrar_requesttrack.jpg',
      './assets/Amparo High/23.registrar_requesttrack.jpg',
      './assets/Amparo High/24.registrar_requesttrack.jpg',
    ],
    tech: ['PHP', 'HTML/CSS', 'JavaScript', 'Bootstrap', 'MySQL'],
    live: 'https://write-sphere.vercel.app/'
  },
  {
    id: 'lacinereserva',
    title: 'La Cine Reserva',
    description: 'La Cine Reserva is a web-based application that we have designed for a local movie theater to streamline the process of reserving seats for movies. Built using PHP, HTML/CSS, JavaScript, Bootstrap, and MySQL, it allows users to easily reserve seats for movies, while helping the theater efficiently manage and track these reservations.',
    images: [
      './assets/La Cine Reserva/1.user_Home.jpg',
      './assets/La Cine Reserva/2.user_footer.jpg',
      './assets/La Cine Reserva/3.user_contact.jpg',
      './assets/La Cine Reserva/4.user_nowshowing.jpg',
      './assets/La Cine Reserva/5.user_comingsoon.jpg',
      './assets/La Cine Reserva/6.user_cinemas.jpg',
      './assets/La Cine Reserva/7.user_booking.jpg',
      './assets/La Cine Reserva/8.user_booking1.jpg',
      './assets/La Cine Reserva/9.user_confirm.jpg',
      './assets/La Cine Reserva/10.user_gcash1.jpg',
      './assets/La Cine Reserva/11.user_gcash2.jpg',
      './assets/La Cine Reserva/12.user_gcash3.jpg',
      './assets/La Cine Reserva/13.user_gcash4.jpg',
      './assets/La Cine Reserva/14.user_ticket1.jpg',
      './assets/La Cine Reserva/15.user_ticket2.jpg',
      './assets/La Cine Reserva/16.user_ticket3.jpg',
      './assets/La Cine Reserva/17.admin_login.jpg',
      './assets/La Cine Reserva/18.admin_dashboard1.jpg',
      './assets/La Cine Reserva/19.admin_dashboard2.jpg',
      './assets/La Cine Reserva/20.admin_movies1.jpg',
      './assets/La Cine Reserva/21.admin_movies2.jpg',
      './assets/La Cine Reserva/22.admin_movies3.jpg',
      './assets/La Cine Reserva/23.admin_transaction1.jpg',
      './assets/La Cine Reserva/24.admin_transaction2.jpg',
    ],
    tech: ['PHP', 'HTML/CSS', 'Javascript', 'Bootstrap', 'Leaflet.js', 'MySQL'],
    live: 'https://trolleypopstore-main.onrender.com/'
  },
];

// Modal Functionality
document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('project-modal');
  const closeModal = document.querySelector('.close-modal');
  const mainImage = document.getElementById('gallery-main-img');
  const thumbnailsContainer = document.querySelector('.gallery-thumbnails');
  const modalTitle = document.getElementById('modal-title');
  const modalDescription = document.getElementById('modal-description');
  const modalTechStack = document.getElementById('modal-tech-stack');
  const demoLink = document.getElementById('demo-link');
  const prevSlide = document.querySelector('.prev-slide');
  const nextSlide = document.querySelector('.next-slide');
  let currentImageIndex = 0;
  let currentProjectImages = [];
  let thumbnailsScrollPosition = 0;

  // Update View Details buttons to open modal
  document.querySelectorAll('.project-btn').forEach((btn) => {
    if (btn.textContent.trim() === 'View Details') {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        const projectCard = this.closest('.project-card');
        const projectTitle = projectCard.querySelector('.project-title').textContent;
        const project = projectData.find(p => p.title === projectTitle);
        
        if (project) {
          openProjectModal(project);
        }
      });
    }
  });

  function openProjectModal(project) {
    // Reset image index
    currentImageIndex = 0;
    currentProjectImages = project.images;

    // Update modal content
    modalTitle.textContent = project.title;
    modalDescription.textContent = project.description;
    
    if (project.images && project.images.length > 0) {
      mainImage.src = project.images[0];
      mainImage.alt = project.title;
    }

    // Update tech stack
    modalTechStack.innerHTML = project.tech.map(tech => `<li>${tech}</li>`).join('');

    // Update demo link visibility based on project
    if (project.title === 'OSCA SPENDS') {
      demoLink.style.display = 'inline-block';
      demoLink.href = project.live;
    } else {
      demoLink.style.display = 'none';
    }

    // Show modal
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';

    // Update navigation visibility
    updateNavigationVisibility();

    // Re-add click handlers for main gallery navigation
    if (prevSlide) {
      prevSlide.onclick = () => navigateGallery(-1);
    }
    if (nextSlide) {
      nextSlide.onclick = () => navigateGallery(1);
    }
  }

  function updateMainImage(imgSrc, index) {
    currentImageIndex = index;
    mainImage.src = imgSrc;
    
    // Update navigation visibility
    updateNavigationVisibility();
  }

  function updateNavigationVisibility() {
    if (prevSlide && nextSlide) {
      prevSlide.style.visibility = currentImageIndex === 0 ? 'hidden' : 'visible';
      nextSlide.style.visibility = currentImageIndex === currentProjectImages.length - 1 ? 'hidden' : 'visible';
    }
  }

  function navigateGallery(direction) {
    const newIndex = currentImageIndex + direction;
    if (newIndex >= 0 && newIndex < currentProjectImages.length) {
      updateMainImage(currentProjectImages[newIndex], newIndex);
    }
  }

  // Add keyboard navigation
  document.addEventListener('keydown', function(e) {
    if (modal.style.display === 'flex') {
      if (e.key === 'ArrowLeft') {
        navigateGallery(-1);
      } else if (e.key === 'ArrowRight') {
        navigateGallery(1);
      } else if (e.key === 'Escape') {
        closeModalFunction();
      }
    }
  });

  // Close modal functionality
  function closeModalFunction() {
    modal.style.display = 'none';
    document.body.style.overflow = '';
  }

  if (closeModal) {
    closeModal.addEventListener('click', closeModalFunction);
  }

  // Close modal when clicking outside
  window.addEventListener('click', function(event) {
    if (event.target === modal) {
      closeModalFunction();
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
function toggleCertification(header) {
  const item = header.parentElement;
  const isActive = item.classList.contains('active');
  
  // Close all open items
  document.querySelectorAll('.certification-item').forEach(cert => {
    cert.classList.remove('active');
  });

  // Toggle the clicked item
  if (!isActive) {
    item.classList.add('active');
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
  const particleCount = 100;

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
