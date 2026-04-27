document.getElementById('year').textContent = new Date().getFullYear();

const translations = {
  fr: {
    nav: {
      about: "À propos",
      xp: "Expériences",
      projects: "Projets",
      contact: "Contact"
    },
    hero: {
      title: "Développeur web<br><span class=\"accent\">William Singh</span>",
      badge: "Disponible pour de nouvelles opportunités",
      desc: "Étudiant en école d'ingénieur à CPE Lyon, spécialisé en robotique et IA, actuellement en alternance chez Orange en tant que développeur logiciel. Passionné par la technologie et l'innovation, je mets en pratique mes compétences en développement logiciel et en intelligence artificielle sur des projets concrets au sein d'un environnement collaboratif.",
      cv: "Télécharger mon CV",
      stack: "STACK TECHNIQUE"
    },
    xp: {
      title: "Expériences",
      items: [
        {
          poste: "Développeur Logiciel",
          company: "Orange France",
          date: "Septembre 2024 - Aujourd'hui",
          desc: "Développement et maintenance d'une plateforme web interne. Automatisation de processus, recueil des besoins avec les chefs de projet et conception de code maintenable. Stack : PHP, JavaScript, HTML, CSS."
        },
        {
          poste: "Technicien Systèmes Automatisés",
          company: "ABB France",
          date: "2023 - 2024",
          desc: "Développement d'une solution de récupération de données machines sur le site de Chassieu. Audit du système GMAO et maintenance corrective et préventive sur les lignes de production."
        },
        {
          poste: "Agent de production",
          company: "Pimas",
          date: "Juin 2023 - Juillet 2023",
          desc: "Fabrication de faisceaux électriques et soudure de cartes électroniques. Assemblage de cartes électroniques. Enclenchement et finalisation des produits PIMAS pour déploiement."
        },
        {
          poste: "Stagiaire Ingénieur Logiciel",
          company: "Pimas",
          date: "Avril 2023 - Juin 2023",
          desc: "Conception et développement d'un banc de test et du logiciel associé pour un nouveau produit en série. Amélioration du logiciel existant pour accroître les performances. Stack : C, C#."
        }
      ]
    },
    projects: {
      title: "Projets",
      items: [
        {
          name: "Portfolio",
          desc: "Ce site est conçu et développé from scratch en HTML/CSS/JS vanilla."
        },
        {
          name: "Programmation d'un drone - ROS2",
          desc: "Architecture de contrôle basée sur ROS2 pour un drone programmable. Traitement des entrées en temps réel et communication modulaire entre nœuds."
        },
        {
          name: "Gestion interventions pompiers",
          desc: "Application web de gestion d'interventions en temps réel via l'API Google Maps. Projet transversal en équipe avec intégration IoT microbit et pipeline CI/CD."
        }
      ]
    },
    contact: {
      title: "Contact",
      intro: "N'hésitez pas à me contacter !"
    },
    footer: "Fait avec ♥ par <strong>William Singh</strong> · "
  },
  en: {
    nav: {
      about: "About",
      xp: "Experience",
      projects: "Projects",
      contact: "Contact"
    },
    hero: {
      title: "Web Developer<br><span class=\"accent\">William Singh</span>",
      badge: "Available for new opportunities",
      desc: "Engineering student at CPE Lyon, specialized in robotics and AI, currently in apprenticeship at Orange as a software developer. Passionate about technology and innovation, I apply my skills in software development and artificial intelligence on concrete projects within a collaborative environment.",
      cv: "Download my CV",
      stack: "TECH STACK"
    },
    xp: {
      title: "Experience",
      items: [
        {
          poste: "Software Developer",
          company: "Orange France",
          date: "September 2024 - Present",
          desc: "Development and maintenance of an internal web platform. Process automation, requirement gathering with project managers and design of maintainable code. Stack: PHP, JavaScript, HTML, CSS."
        },
        {
          poste: "Automated Systems Technician",
          company: "ABB France",
          date: "2023 - 2024",
          desc: "Development of a machine data recovery solution on the Chassieu site. Audit of the GMAO system and corrective and preventive maintenance on production lines."
        },
        {
          poste: "Production Agent",
          company: "Pimas",
          date: "June 2023 - July 2023",
          desc: "Manufacturing of electrical harnesses and soldering of electronic boards. Assembly of electronic boards. Activation and finalization of PIMAS products for deployment."
        },
        {
          poste: "Software Engineering Intern",
          company: "Pimas",
          date: "April 2023 - June 2023",
          desc: "Design and development of a test bench and associated software for a new product in series. Improvement of existing software to increase performance. Stack: C, C#."
        }
      ]
    },
    projects: {
      title: "Projects",
      items: [
        {
          name: "Portfolio",
          desc: "This site is designed and developed from scratch in vanilla HTML/CSS/JS."
        },
        {
          name: "Drone Programming - ROS2",
          desc: "ROS2-based control architecture for a programmable drone. Real-time input processing and modular communication between nodes."
        },
        {
          name: "Firefighter Interventions Management",
          desc: "Real-time intervention management web application via Google Maps API. Cross-functional team project with IoT microbit integration and CI/CD pipeline."
        }
      ]
    },
    contact: {
      title: "Contact",
      intro: "Don't hesitate to contact me!"
    },
    footer: "Made with ♥ by <strong>William Singh</strong> · "
  }
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.section').forEach(section => {
  section.style.opacity = '0';
  section.style.transform = 'translateY(20px)';
  section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(section);
});

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 100) {
      current = section.getAttribute('id');
    }
  });
  navLinks.forEach(link => {
    link.style.color = link.getAttribute('href') === `#${current}`
      ? 'var(--text)'
      : 'var(--text-muted)';
  });
});

const toggleBtn = document.getElementById('themeToggle');
const icon = toggleBtn.querySelector('i');

// Applique le thème sauvegardé au chargement
const saved = localStorage.getItem('theme') || 'dark';
applyTheme(saved);

toggleBtn.addEventListener('click', () => {
  const current = document.body.classList.contains('light') ? 'light' : 'dark';
  const next = current === 'dark' ? 'light' : 'dark';
  applyTheme(next);
  localStorage.setItem('theme', next);
});

function applyTheme(theme) {
  if (theme === 'light') {
    document.body.classList.add('light');
    icon.className = 'fa-solid fa-moon';
  } else {
    document.body.classList.remove('light');
    icon.className = 'fa-solid fa-sun';
  }
}

// Language toggle
const langToggleBtn = document.getElementById('langToggle');
let currentLang = localStorage.getItem('lang') || 'fr';
applyLang(currentLang);

langToggleBtn.addEventListener('click', () => {
  currentLang = currentLang === 'fr' ? 'en' : 'fr';
  applyLang(currentLang);
  localStorage.setItem('lang', currentLang);
});

function applyLang(lang) {
  // Update nav
  document.documentElement.lang = lang;
  const navLinks = document.querySelectorAll('nav a');
  navLinks[0].textContent = translations[lang].nav.about;
  navLinks[1].textContent = translations[lang].nav.xp;
  navLinks[2].textContent = translations[lang].nav.projects;
  navLinks[3].textContent = translations[lang].nav.contact;

  // Update hero
  document.querySelector('.hero-title').innerHTML = translations[lang].hero.title;
  document.querySelector('.hero-badge').textContent = translations[lang].hero.badge;
  document.querySelector('.hero-desc').textContent = translations[lang].hero.desc;
  
  const cvBtn = document.querySelector('.btn-primary');
  cvBtn.textContent = translations[lang].hero.cv;
  cvBtn.href = lang === 'fr' ? 'William_CV_FR.pdf' : 'William_CV_EN.pdf';

  document.querySelector('.stack-label').textContent = translations[lang].hero.stack;

  // Update XP section
  document.querySelector('#xp .section-title').textContent = translations[lang].xp.title;
  const xpItems = document.querySelectorAll('#xp .xp-item');
  translations[lang].xp.items.forEach((item, index) => {
    if (xpItems[index]) {
      xpItems[index].querySelector('.xp-poste').textContent = item.poste;
      xpItems[index].querySelector('.xp-company').textContent = item.company;
      xpItems[index].querySelector('.xp-date').textContent = item.date;
      xpItems[index].querySelector('.xp-desc').textContent = item.desc;
    }
  });

  // Update Projects section
  document.querySelector('#projects .section-title').textContent = translations[lang].projects.title;
  const projectCards = document.querySelectorAll('#projects .project-card');
  translations[lang].projects.items.forEach((item, index) => {
    if (projectCards[index]) {
      projectCards[index].querySelector('.project-name').textContent = item.name;
      projectCards[index].querySelector('.project-desc').textContent = item.desc;
    }
  });

  // Update Contact section
  document.querySelector('#contact .section-title').textContent = translations[lang].contact.title;
  document.querySelector('.contact-intro').textContent = translations[lang].contact.intro;

  // Update Footer
  document.querySelector('.footer p').innerHTML = translations[lang].footer + '<span id="year"></span>';
  document.getElementById('year').textContent = new Date().getFullYear();

  // Update button text
  langToggleBtn.innerHTML = `<i class="fa-solid fa-language"></i> ${lang === 'fr' ? 'EN' : 'FR'}`;
}