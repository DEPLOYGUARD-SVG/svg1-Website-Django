/**
 * Shagiththika Nanthakumar - Personal Portfolio Script
 * This file contains the data and front-end interactive logic.
 * It dynamically renders sections from the configuration data object.
 */

// ==========================================================================
// CENTRAL PORTFOLIO CONFIGURATION DATA
// ==========================================================================
const portfolioData = {
  socialLinks: {
    github: "https://github.com/shakikumar",
    linkedin: "https://www.linkedin.com/in/shagiththika-nanthakumar-9b2253350/",
    email: "shakinanthakumar@gmail.com"
  },
  aboutFeatures: [
    {
      title: "Full-Stack Focus",
      description: "Building responsive web frontends in React and backend services in Java or Node.js.",
      icon: "layers",
      bgClass: "bg-accent-soft-icon"
    },
    {
      title: "Secure by Design",
      description: "Learning code execution security, database authorization, and network fundamentals alongside software architecture.",
      icon: "terminal",
      bgClass: "bg-neutral-soft-icon"
    },
    {
      title: "Continuous Learning",
      description: "Exploring new technology patterns, modern frameworks, and security best practices to build reliable solutions.",
      icon: "graduation-cap",
      bgClass: "bg-accent-soft-icon"
    }
  ],
  skills: [
    {
      category: "Programming",
      icon: "code",
      items: [
        { name: "Java" },
        { name: "Python" },
        { name: "C++" },
        { name: "JavaScript" },
        { name: "SQL" }
      ]
    },
    {
      category: "Web Development",
      icon: "globe",
      items: [
        { name: "HTML" },
        { name: "CSS" },
        { name: "React" },
        { name: "Node.js" },
        { name: "Express.js" }
      ]
    },
    {
      category: "Databases",
      icon: "database",
      items: [
        { name: "MySQL" },
        { name: "PostgreSQL" },
        { name: "MongoDB" },
        { name: "Supabase" }
      ]
    },
    {
      category: "Tools",
      icon: "wrench",
      items: [
        { name: "Git" },
        { name: "GitHub" },
        { name: "VS Code" },
        { name: "IntelliJ IDEA" },
        { name: "Android Studio" },
        { name: "Figma" },
        { name: "Gemini" },
        { name: "Claude" },
        { name: "Antigravity" }
      ]
    },
    {
      category: "Cybersecurity",
      icon: "shield",
      items: [
        { name: "Network Security" }
      ]
    },
    {
      category: "Other / Learning",
      icon: "heart",
      items: [
        { name: "Mobile App Development", learning: true },
        { name: "UI/UX", learning: true }
      ]
    }
  ],
  projects: [
    {
      name: "Task Management System",
      category: "Web Application",
      description: "A responsive full-stack web application designed for task and project management. Built to streamline collaboration, task tracking, and database synchronization.",
      techTags: ["React.js", "Node.js", "Express.js", "PostgreSQL", "Supabase", "Git"],
      groupProject: true,
      myContribution: "Developed responsive frontend views using React components, integrated RESTful API endpoints for database sync, and implemented user authentication checks.",
      repoUrl: "https://github.com/shakikumar/Task-Management-System",
      imageUrl: "assets/task-manager-screenshot.png"
    },
    {
      name: "Online Book Shop Management System",
      category: "Desktop Application",
      description: "An Online Book Shop Management System developed using Java and MySQL. Features a desktop interface built with Java Swing containing full CRUD functions for handling book inventory, catalog listings, and database adjustments.",
      techTags: ["Java", "Java Swing", "MySQL"],
      groupProject: true,
      myContribution: "Designed the Java Swing desktop user interface layout, implemented JDBC connections for relational database access, and created robust CRUD methods for inventory controls.",
      repoUrl: null,
      imageUrl: "assets/bookshop-screenshot.svg"
    }
  ],
  education: [
    {
      period: "2025 – 2029",
      degree: "BSc. (Hons) in Information Technology",
      school: "University of Kelaniya",
      description: "Faculty of Science. Studying core fundamentals of computing, software engineering systems, information security, database management, and networking systems."
    }
  ],
  experienceChecklist: [
    "Version Control (Git/GitHub)",
    "Relational Databases & SQL",
    "Object-Oriented Programming (Java/Python)",
    "Collaborative Coding & Team Projects"
  ],
  certifications: [
    {
      title: "Web Design for Beginners",
      issuer: "University of Moratuwa",
      year: "2026",
      image: "assets/certificate-moratuwa.png",
      credentialUrl: "https://www.linkedin.com/posts/shagiththika-nanthakumar-9b2253350_im-happy-to-share-that-i-have-successfully-activity-7427395337650163713-UoP3?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFeaBtYBNt0seyy7aNcuLdjdDxAfNssmPSc"
    },
    {
      title: "Introduction to Generative AI",
      issuer: "Simplilearn (Google Cloud)",
      year: "2026",
      image: "assets/certificate-simplilearn.png",
      credentialUrl: "https://www.linkedin.com/in/shagiththika-nanthakumar-9b2253350/details/certifications/"
    },
    {
      title: "AI Chatbot & Machine Learning",
      issuer: "Devtown",
      year: "2026",
      image: "assets/certificate-devtown.png",
      credentialUrl: "https://www.linkedin.com/posts/shagiththika-nanthakumar-9b2253350_generativeai-chatbot-devtown-activity-7441157175835791361-CK91?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFeaBtYBNt0seyy7aNcuLdjdDxAfNssmPSc"
    },
    {
      title: "Crash Course on Python",
      issuer: "Google / Coursera",
      year: "2026",
      image: "assets/certificate-google.png",
      credentialUrl: "https://www.linkedin.com/posts/shagiththika-nanthakumar-9b2253350_python-coursera-learning-activity-7467872206082097154-MN97?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFeaBtYBNt0seyy7aNcuLdjdDxAfNssmPSc"
    }
  ]
};

// ==========================================================================
// DYNAMIC COMPONENT RENDER ENGINE
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {

  // 1. Render Social Links (Hero, Contact Links List, Footer Socials)
  const renderSocials = () => {
    const heroSocials = document.getElementById('hero-socials-container');
    const contactLinks = document.getElementById('contact-details-container');
    const footerSocials = document.getElementById('footer-socials-container');
    
    const githubLink = portfolioData.socialLinks.github;
    const linkedinLink = portfolioData.socialLinks.linkedin;
    const mailLink = `mailto:${portfolioData.socialLinks.email}`;

    // Hero Socials
    if (heroSocials) {
      heroSocials.innerHTML = `
        <a href="${githubLink}" target="_blank" rel="noopener noreferrer" class="hero-social-link" aria-label="GitHub Profile">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: 20px; height: 20px;"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
        </a>
        <a href="${linkedinLink}" target="_blank" rel="noopener noreferrer" class="hero-social-link" aria-label="LinkedIn Profile">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: 20px; height: 20px;"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
        </a>
        <a href="${mailLink}" class="hero-social-link" aria-label="Email Address">
          <i data-lucide="mail"></i>
        </a>
      `;
    }

    // Contact Panel Detail Items
    if (contactLinks) {
      contactLinks.innerHTML = `
        <!-- Email -->
        <a href="${mailLink}" class="contact-link-card">
          <div class="contact-link-icon-container">
            <i data-lucide="mail"></i>
          </div>
          <div class="contact-link-text">
            <span class="contact-link-label">Email</span>
            <span class="contact-link-value">${portfolioData.socialLinks.email}</span>
          </div>
          <i data-lucide="external-link" class="contact-link-arrow"></i>
        </a>

        <!-- LinkedIn -->
        <a href="${linkedinLink}" target="_blank" rel="noopener noreferrer" class="contact-link-card">
          <div class="contact-link-icon-container">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: 20px; height: 20px;"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          </div>
          <div class="contact-link-text">
            <span class="contact-link-label">LinkedIn</span>
            <span class="contact-link-value">linkedin.com/in/shagiththika-nanthakumar</span>
          </div>
          <i data-lucide="external-link" class="contact-link-arrow"></i>
        </a>

        <!-- GitHub -->
        <a href="${githubLink}" target="_blank" rel="noopener noreferrer" class="contact-link-card">
          <div class="contact-link-icon-container">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: 20px; height: 20px;"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
          </div>
          <div class="contact-link-text">
            <span class="contact-link-label">GitHub</span>
            <span class="contact-link-value">github.com/shakikumar</span>
          </div>
          <i data-lucide="external-link" class="contact-link-arrow"></i>
        </a>
      `;
    }

    // Footer Socials
    if (footerSocials) {
      footerSocials.innerHTML = `
        <a href="${githubLink}" target="_blank" rel="noopener noreferrer" class="footer-social-btn" aria-label="GitHub">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: 18px; height: 18px;"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
        </a>
        <a href="${linkedinLink}" target="_blank" rel="noopener noreferrer" class="footer-social-btn" aria-label="LinkedIn">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: 18px; height: 18px;"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
        </a>
        <a href="${mailLink}" class="footer-social-btn" aria-label="Email">
          <i data-lucide="mail"></i>
        </a>
      `;
    }
  };

  // 2. Render About Feature Cards
  const renderAboutFeatures = () => {
    const featuresContainer = document.getElementById('about-features-container');
    if (!featuresContainer) return;

    featuresContainer.innerHTML = portfolioData.aboutFeatures.map((feat, index) => `
      <div class="feature-card reveal reveal-right reveal-delay-${index + 1}">
        <div class="feature-icon-wrapper ${feat.bgClass}">
          <i data-lucide="${feat.icon}"></i>
        </div>
        <div class="feature-card-content">
          <h3 class="feature-card-title">${feat.title}</h3>
          <p class="feature-card-desc">${feat.description}</p>
        </div>
      </div>
    `).join('');
  };

  // 3. Render Technical Skills
  const renderSkills = () => {
    const skillsContainer = document.getElementById('skills-container');
    if (!skillsContainer) return;

    skillsContainer.innerHTML = portfolioData.skills.map((category, index) => {
      const itemsHtml = category.items.map(item => {
        if (item.learning) {
          return `
            <li class="skill-item learning-item" title="Currently learning this technology">
              <span class="learning-dot"></span>
              <span>${item.name}</span>
            </li>
          `;
        }
        return `<li class="skill-item"><span>${item.name}</span></li>`;
      }).join('');

      return `
        <div class="skill-category-card reveal reveal-up reveal-delay-${(index % 3) + 1}">
          <div class="category-header">
            <i data-lucide="${category.icon}"></i>
            <h3>${category.category}</h3>
          </div>
          <ul class="skill-list">
            ${itemsHtml}
          </ul>
        </div>
      `;
    }).join('');
  };

  // 4. Render Projects
  const renderProjects = () => {
    const projectsContainer = document.getElementById('projects-container');
    if (!projectsContainer) return;

    projectsContainer.innerHTML = portfolioData.projects.map((project, index) => {
      const techTagsHtml = project.techTags.map(tag => `<span class="tech-badge">${tag}</span>`).join('');
      
      let actionButtons = '';
      if (project.repoUrl) {
        actionButtons = `
          <a href="${project.repoUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
            View Repository <i data-lucide="github"></i>
          </a>
        `;
      } else {
        actionButtons = `
          <span class="project-footer-note">
            <i data-lucide="monitor"></i> Java Swing Desktop Application
          </span>
        `;
      }

      const revealClass = index % 2 === 0 ? 'reveal-left' : 'reveal-right';

      return `
        <article class="project-card reveal ${revealClass}">
          <div class="project-visual">
            <div class="project-image-wrapper">
              <img src="${project.imageUrl}" alt="${project.name}">
            </div>
          </div>
          
          <div class="project-details">
            <div class="project-meta">
              <span class="project-category">${project.category}</span>
              ${project.groupProject ? '<span class="project-group-badge"><i data-lucide="users" style="width:12px; height:12px;"></i> Group Project</span>' : ''}
            </div>
            
            <h3 class="project-name">${project.name}</h3>
            <p class="project-description">${project.description}</p>
            
            <div class="project-tech-tags">
              ${techTagsHtml}
            </div>

            <div class="project-contribution-card">
              <h4 class="contribution-title">
                <i data-lucide="user-check"></i> My Contribution
              </h4>
              <p class="contribution-detail">${project.myContribution}</p>
            </div>

            <div class="project-buttons">
              ${actionButtons}
            </div>
          </div>
        </article>
      `;
    }).join('');
  };

  // 5. Render Education Timeline
  const renderEducation = () => {
    const educationContainer = document.getElementById('education-container');
    if (!educationContainer) return;

    educationContainer.innerHTML = portfolioData.education.map((edu, index) => `
      <div class="timeline-item reveal reveal-up">
        <div class="timeline-marker-wrapper">
          <div class="timeline-node"></div>
        </div>
        <div class="timeline-card">
          <span class="timeline-period-badge">${edu.period}</span>
          <h3 class="timeline-degree">${edu.degree}</h3>
          <h4 class="timeline-school">${edu.school}</h4>
          <p class="timeline-desc">${edu.description}</p>
        </div>
      </div>
    `).join('');
  };

  // 6. Render Experience Checklist
  const renderExperienceChecklist = () => {
    const checklistContainer = document.getElementById('experience-checklist');
    if (!checklistContainer) return;

    checklistContainer.innerHTML = portfolioData.experienceChecklist.map(item => `
      <div class="checklist-item">
        <i data-lucide="check-circle-2"></i>
        <span>${item}</span>
      </div>
    `).join('');
  };

  // 7. Render Certifications Gallery
  const renderCertifications = () => {
    const certContainer = document.getElementById('certifications-container');
    if (!certContainer) return;

    certContainer.innerHTML = portfolioData.certifications.map((cert, index) => `
      <div class="cert-card reveal reveal-up reveal-delay-${(index % 4) + 1}" data-index="${index}">
        <div class="cert-image-preview">
          <img src="${cert.image}" alt="${cert.title} Certificate">
          <div class="cert-hover-overlay">
            <div class="cert-overlay-icon">
              <i data-lucide="zoom-in"></i>
            </div>
          </div>
        </div>
        <div class="cert-info">
          <span class="cert-year">${cert.year}</span>
          <h3 class="cert-title">${cert.title}</h3>
          <h4 class="cert-issuer">${cert.issuer}</h4>
        </div>
      </div>
    `).join('');
  };

  // Initialize all template renders
  renderSocials();
  renderAboutFeatures();
  renderSkills();
  renderProjects();
  renderEducation();
  renderExperienceChecklist();
  renderCertifications();

  // Create SVG icons using Lucide CDN
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  // ==========================================================================
  // PAGE INITIAL LOADING LOGIC
  // ==========================================================================
  const hidePageLoader = () => {
    const loader = document.getElementById('page-loader');
    if (loader) {
      loader.style.opacity = '0';
      loader.style.visibility = 'hidden';
      setTimeout(() => {
        // Trigger initial page load transition for Hero content
        document.querySelectorAll('#hero .reveal').forEach(el => {
          el.classList.add('reveal-visible');
        });
      }, 200);
    }
  };

  window.addEventListener('load', hidePageLoader);

  // Fallback if window load fired early
  if (document.readyState === 'complete') {
    setTimeout(hidePageLoader, 100);
  }

  // ==========================================================================
  // NAVIGATION & STICKY ACTIONS
  // ==========================================================================
  const navbar = document.getElementById('navbar');
  const menuToggle = document.getElementById('menu-toggle');
  const navLinksContainer = document.getElementById('nav-links');
  const navLinks = document.querySelectorAll('.nav-link');
  const backToTopBtn = document.getElementById('back-to-top-btn');

  // Shrink navigation bar on scroll, show back to top button
  const handleScroll = () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    if (window.scrollY > 500) {
      backToTopBtn.classList.add('active');
    } else {
      backToTopBtn.classList.remove('active');
    }
  };

  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Run immediately

  // Back to top scroll click
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // Mobile navigation hamburger drawer toggle
  menuToggle.addEventListener('click', () => {
    navLinksContainer.classList.toggle('active');
    
    // Toggle close vs hamburger icon
    if (navLinksContainer.classList.contains('active')) {
      menuToggle.innerHTML = '<i data-lucide="x"></i>';
    } else {
      menuToggle.innerHTML = '<i data-lucide="menu"></i>';
    }
    
    if (typeof lucide !== 'undefined') {
      lucide.createIcons();
    }
  });

  // Close mobile navigation drawer when a link is clicked
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navLinksContainer.classList.remove('active');
      menuToggle.innerHTML = '<i data-lucide="menu"></i>';
      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
    });
  });

  // ==========================================================================
  // SCROLL REVEAL (INTERSECTION OBSERVER)
  // ==========================================================================
  const hasReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!hasReducedMotion) {
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
          observer.unobserve(entry.target); // Reveal once only
        }
      });
    }, {
      threshold: 0.08,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => {
      // Don't apply to Hero reveals since they are triggered immediately on load
      if (!el.closest('#hero')) {
        revealObserver.observe(el);
      }
    });
  } else {
    // Direct display if user prefers reduced motion
    document.querySelectorAll('.reveal').forEach(el => {
      el.classList.add('reveal-visible');
    });
  }

  // ==========================================================================
  // ACTIVE NAV SECTION TRACKING
  // ==========================================================================
  const sections = document.querySelectorAll('section');
  const activeNavObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, {
    threshold: 0.2,
    rootMargin: '-20% 0px -50% 0px'
  });

  sections.forEach(sec => {
    activeNavObserver.observe(sec);
  });

  // ==========================================================================
  // CERTIFICATIONS LIGHTBOX MODAL TRIGGER
  // ==========================================================================
  const certCards = document.querySelectorAll('.cert-card');
  const certModal = document.getElementById('cert-modal');
  const modalClose = document.getElementById('modal-close');
  const modalTitle = document.getElementById('modal-title');
  const modalSubtitle = document.getElementById('modal-subtitle');
  const modalImg = document.getElementById('modal-img');
  const modalLinkedinBtn = document.getElementById('modal-linkedin-btn');

  const openCertModal = (index) => {
    const cert = portfolioData.certifications[index];
    if (!cert) return;

    modalImg.setAttribute('src', cert.image);
    modalImg.setAttribute('alt', `${cert.title} Certificate`);
    modalTitle.textContent = cert.title;
    modalSubtitle.textContent = `${cert.issuer} • ${cert.year}`;
    modalLinkedinBtn.setAttribute('href', cert.credentialUrl);

    certModal.classList.add('active');
    certModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden'; // Stop background scrolling
  };

  const closeCertModal = () => {
    certModal.classList.remove('active');
    certModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = ''; // Resume scrolling
    
    // Clear image source after fadeout duration to prevent layout flashing next open
    setTimeout(() => {
      modalImg.setAttribute('src', '');
    }, 400);
  };

  certCards.forEach(card => {
    card.addEventListener('click', () => {
      const index = parseInt(card.getAttribute('data-index'), 10);
      openCertModal(index);
    });
  });

  modalClose.addEventListener('click', closeCertModal);
  
  // Close if clicked on modal overlay background
  certModal.addEventListener('click', (e) => {
    if (e.target === certModal) {
      closeCertModal();
    }
  });

  // Close with Esc key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && certModal.classList.contains('active')) {
      closeCertModal();
    }
  });

  // ==========================================================================
  // CONTACT FORM VALIDATION & AJAX SUBMISSION
  // ==========================================================================
  const contactForm = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');
  const formStatusText = document.getElementById('form-status-text');
  const successIcon = formStatus.querySelector('.status-icon-success');
  const errorIcon = formStatus.querySelector('.status-icon-error');
  const submitBtn = document.getElementById('form-submit-btn');

  // Input fields
  const fields = {
    name: {
      input: document.getElementById('form-name'),
      error: document.getElementById('error-name')
    },
    email: {
      input: document.getElementById('form-email'),
      error: document.getElementById('error-email'),
      validate: (val) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(val);
      }
    },
    subject: {
      input: document.getElementById('form-subject'),
      error: document.getElementById('error-subject')
    },
    message: {
      input: document.getElementById('form-message'),
      error: document.getElementById('error-message')
    }
  };

  // Live input validation listener
  Object.keys(fields).forEach(key => {
    const field = fields[key];
    field.input.addEventListener('input', () => {
      if (field.input.classList.contains('error-border')) {
        validateField(key);
      }
    });
  });

  const validateField = (key) => {
    const field = fields[key];
    const val = field.input.value.trim();
    let isValid = true;

    if (val === '') {
      isValid = false;
      field.error.textContent = `${key.charAt(0).toUpperCase() + key.slice(1)} is required.`;
    } else if (field.validate && !field.validate(val)) {
      isValid = false;
      field.error.textContent = `Please enter a valid email address.`;
    }

    if (!isValid) {
      field.input.classList.add('error-border');
      field.error.style.display = 'block';
    } else {
      field.input.classList.remove('error-border');
      field.error.style.display = 'none';
    }

    return isValid;
  };

  const showStatusBanner = (type, message) => {
    formStatus.className = 'form-status-banner'; // Clear existing
    formStatus.classList.add(type);
    formStatusText.textContent = message;
    
    if (type === 'success') {
      successIcon.style.display = 'inline-block';
      errorIcon.style.display = 'none';
    } else {
      successIcon.style.display = 'none';
      errorIcon.style.display = 'inline-block';
    }
    
    formStatus.style.display = 'flex';
  };

  const clearStatusBanner = () => {
    formStatus.style.display = 'none';
  };

  // Form submission handler
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    clearStatusBanner();

    // Validate all fields
    let formIsValid = true;
    Object.keys(fields).forEach(key => {
      const isFieldValid = validateField(key);
      if (!isFieldValid) {
        formIsValid = false;
      }
    });

    if (!formIsValid) {
      showStatusBanner('error', 'Please fill in all fields correctly before sending.');
      return;
    }

    // Prepare payload
    const payload = {
      name: fields.name.input.value.trim(),
      email: fields.email.input.value.trim(),
      subject: fields.subject.input.value.trim(),
      message: fields.message.input.value.trim()
    };

    // UI Feedback: Loading State
    submitBtn.disabled = true;
    const originalBtnText = submitBtn.innerHTML;
    submitBtn.innerHTML = `Sending... <div class="loader-spinner" style="width: 16px; height: 16px; border-width: 2px; display: inline-block;"></div>`;

    try {
      // Submit form data using Fetch API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        // Success
        showStatusBanner('success', 'Thank you! Your message has been sent successfully.');
        contactForm.reset();
      } else {
        // API server returned error
        const errorData = await response.json().catch(() => ({}));
        const errorMsg = errorData.message || 'There was an error sending your message. Please try again.';
        throw new Error(errorMsg);
      }

    } catch (err) {
      console.warn("API Contact endpoint unavailable. Falling back to local visual simulation: ", err.message);
      
      // FALLBACK MOCK: If the backend API server is offline/unavailable, 
      // gracefully simulate a successful submission in local environment.
      setTimeout(() => {
        showStatusBanner('success', 'Message simulated successfully! (Notice: Backend API endpoint "/api/contact" is unavailable, falling back to local client success state).');
        contactForm.reset();
      }, 1000);

    } finally {
      // Restore button state
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnText;
    }
  });

});
