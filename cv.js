/* ============================================
   CV Engine — Data-driven bilingual renderer
   Pablo A. Gómez C. Edition
   ============================================ */

var ICONS = {
  mapPin:     '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>',
  phone:      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
  mail:       '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>',
  globe:      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',
  link:       '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>',
  linkedin:   '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>',
  github:     '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>',
  terminal:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" x2="20" y1="19" y2="19"/></svg>',
  cloud:      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>',
  cpu:        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v4m0 12v4M2 12h4m12 0h4"/><circle cx="12" cy="12" r="3"/></svg>',
  layout:     '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>',
  code:       '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
  user:       '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
  briefcase:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>',
  layers:     '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 7.5 12 2l10 5.5"/><path d="m2 12 10 5.5L22 12"/><path d="m2 16.5 10 5.5 10-5.5"/></svg>',
  gradCap:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 0 3 3 6 3s6-3 6-3v-5"/></svg>',
  server:     '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="8" x="2" y="2" rx="2" ry="2"/><rect width="20" height="8" x="2" y="14" rx="2" ry="2"/><line x1="6" x2="6.01" y1="6" y2="6"/><line x1="6" x2="6.01" y1="18" y2="18"/></svg>',
  shield:     '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg>',
  smartphone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>',
};

function icon(name, cls) {
  var svg = ICONS[name];
  if (!svg) return '';
  return svg.replace('<svg', '<svg class="' + (cls || 'icon') + '"');
}

function t(val, lang) {
  if (val == null) return '';
  if (typeof val === 'string') return val;
  return val[lang] || val.en || '';
}

function photoMarkup() {
  if (DATA.meta.photo) {
    return '<img src="' + DATA.meta.photo + '" alt="' + DATA.meta.name + '">';
  }
  var ini = (DATA.meta.initials || '').trim();
  return ini ? ini.toUpperCase() : '\u2014';
}

// ===========================================
//  PABLO A. GÓMEZ C. — CV DATA (fuente: CV entregado)
// ===========================================
var DATA = {
  meta: {
    name: 'Pablo A. G\u00f3mez C.',
    initials: 'PG',
    title: { en: 'Key Account Executive', es: 'Ejecutivo de cuentas clave' },
    photo: null
  },

  contact: [
    { icon: 'mapPin', label: { en: 'Address', es: 'Ubicaci\u00f3n' }, value: 'Carrera 11 este # 4c-11, Cajic\u00e1, Colombia' },
    { icon: 'mail',   label: 'Email', value: 'pablo.gomez9512@gmail.com', href: 'mailto:pablo.gomez9512@gmail.com' }
  ],

  links: [
    { icon: 'linkedin', label: 'LinkedIn', display: '/in/pablo-gomez-cuevas', href: 'https://www.linkedin.com/in/pablo-gomez-cuevas' }
  ],

  skills: [
    {
      icon: 'briefcase',
      title: { en: 'Sales & closing', es: 'Ventas y cierre' },
      tags: ['Prospecci\u00f3n estrat\u00e9gica B2B', 'Cierre comercial consultivo']
    },
    {
      icon: 'layout',
      title: { en: 'Market & relationships', es: 'Mercado y relaci\u00f3n' },
      tags: ['An\u00e1lisis de mercado y estacionalidad', 'Relaci\u00f3n con cliente temprana']
    },
    {
      icon: 'smartphone',
      title: { en: 'Data & experience', es: 'Datos y experiencia' },
      tags: ['An\u00e1lisis comercial data-driven', 'Optimizaci\u00f3n de experiencia de usuario']
    },
    {
      icon: 'server',
      title: { en: 'Tools', es: 'Herramientas' },
      tags: ['Salesforce CRM']
    }
  ],

  languages: [
    { name: { en: 'Spanish', es: 'Espa\u00f1ol' }, level: '' },
    { name: { en: 'English', es: 'Ingl\u00e9s' }, level: '' }
  ],

  profile: {
    en: '<strong>Key Account Executive</strong> with a track record in <strong>B2B prospecting</strong>, <strong>market opening</strong>, <strong>consultative selling</strong>, and managing the <strong>full sales cycle</strong> from cold outreach to closing.',
    es: '<strong>Ejecutivo de cuentas clave</strong> con trayectoria en <strong>prospecci\u00f3n B2B</strong>, <strong>apertura de mercados</strong>, <strong>venta consultiva</strong> y gesti\u00f3n del <strong>ciclo comercial completo</strong>, desde el contacto en fr\u00edo hasta el cierre.'
  },

  experience: [
    {
      title: { en: 'Key Account Executive', es: 'Ejecutivo de cuentas clave' },
      company: 'Pluxee Colombia SAS',
      companyDesc: '',
      date: { en: 'Jan 2020 \u2014 Present', es: 'Ene. 2020 \u2014 Presente' },
      current: true,
      bullets: {
        en: [
          'B2B product operations with <strong>Salesforce CRM</strong>, portfolio management of approximately <strong>COP $20,000 million annually</strong>, and cold prospecting.',
          '<strong>Sustained &gt;100% of target</strong> in <strong>FY25</strong>; efficiency initiatives with an estimated <strong>15% savings</strong>.',
          '<strong>COP $36,000 million annually</strong> in new sales.'
        ],
        es: [
          'Operaci\u00f3n de producto B2B con <strong>Salesforce CRM</strong>, gesti\u00f3n de cartera de cerca de <strong>COP $20.000 millones anuales</strong> y prospecci\u00f3n en fr\u00edo.',
          '<strong>Cumplimiento sostenido &gt;100% del objetivo</strong> en <strong>FY25</strong>; modelo de eficiencia con <strong>ahorro estimado del 15%</strong>.',
          '<strong>COP $36.000 millones anuales</strong> en nuevas ventas.'
        ]
      }
    },
    {
      title: { en: 'B2B commercial role', es: 'Rol comercial B2B' },
      company: 'Smart Taxi SAS',
      companyDesc: '',
      date: { en: 'May 2018 \u2014 Dec 2019', es: 'May. 2018 \u2014 Dic. 2019' },
      current: false,
      bullets: {
        en: [
          'B2B prospecting, onboarding, and UX optimization.',
          '<strong>15% increase</strong> in new-client prospecting.',
          '<strong>20% reduction</strong> in implementation times; client <strong>NPS from 85% to 95%</strong>.'
        ],
        es: [
          'Prospecci\u00f3n B2B, acompa\u00f1amiento en <strong>onboarding</strong> y optimizaci\u00f3n de la experiencia de usuario.',
          '<strong>+15%</strong> en prospecci\u00f3n de nuevos clientes.',
          '<strong>Reducci\u00f3n del 20%</strong> en tiempos de implementaci\u00f3n; <strong>NPS de clientes del 85% al 95%</strong>.'
        ]
      }
    }
  ],

  highlightsSection: { en: 'Recognitions', es: 'Reconocimientos' },
  highlights: [
    {
      name: { en: 'Contribution to new sales', es: 'Contribuci\u00f3n en nuevas ventas' },
      role: { en: '2025', es: '2025' },
      stack: '',
      desc: ''
    },
    {
      name: { en: 'Budget compliance', es: 'Cumplimiento presupuestal' },
      role: { en: '2025', es: '2025' },
      stack: '',
      desc: ''
    },
    {
      name: { en: 'Highest average commissions', es: 'Mayor promedio de comisiones' },
      role: { en: '2024', es: '2024' },
      stack: '',
      desc: ''
    }
  ],

  education: [
    {
      title: { en: 'Bachelor\u2019s \u2014 Industrial Engineering', es: 'Pregrado \u2014 Ingenier\u00eda industrial' },
      institution: { en: 'Universidad de Am\u00e9rica \u2014 Bogot\u00e1, Colombia', es: 'Universidad de Am\u00e9rica \u2014 Bogot\u00e1, Colombia' },
      date: { en: 'Jun 2013 \u2014 Sep 2018', es: 'Jun. 2013 \u2014 Sep. 2018' },
      details: { en: 'Industrial engineer.', es: 'Ingeniero industrial.' }
    }
  ],

  footer: { en: 'Updated \u2014 April 2026', es: 'Actualizado \u2014 Abril 2026' }
};

// ===========================================
//  RENDER COMPONENTS
// ===========================================

function renderSidebar(lang) {
  var sectionLabels = {
    contact:   { en: 'Contact', es: 'Contacto' },
    links:     'Links',
    skills:    { en: 'Core skills', es: 'Habilidades' },
    languages: { en: 'Languages', es: 'Idiomas' }
  };

  var html = '<div class="lang-toggle">' +
    '<button class="lang-btn' + (lang === 'en' ? ' active' : '') + '" data-lang-btn="en">EN</button>' +
    '<button class="lang-btn' + (lang === 'es' ? ' active' : '') + '" data-lang-btn="es">ES</button>' +
    '</div>';

  html += '<div class="photo-container"><div class="photo">' + photoMarkup() + '</div></div>';

  html += '<div class="sidebar-section">' +
    '<div class="sidebar-title">' + icon('mapPin', 'icon') + ' ' + t(sectionLabels.contact, lang) + '</div>' +
    DATA.contact.map(function(c) {
      var val = c.href ? '<a href="' + c.href + '">' + c.value + '</a>' : c.value;
      return '<div class="contact-item">' +
        icon(c.icon, 'icon-sm contact-icon') +
        '<div class="contact-text"><span class="contact-label">' + t(c.label, lang) + '</span>' + val + '</div>' +
      '</div>';
    }).join('') +
  '</div>';

  if (DATA.links && DATA.links.length > 0) {
    html += '<div class="sidebar-section">' +
      '<div class="sidebar-title">' + icon('link', 'icon') + ' ' + t(sectionLabels.links, lang) + '</div>' +
      DATA.links.map(function(l) {
        return '<a href="' + l.href + '" class="link-item" target="_blank" rel="noopener noreferrer">' +
          icon(l.icon, 'icon-sm link-icon') +
          '<span><span class="link-label">' + l.label + '</span> \u2014 ' + l.display + '</span>' +
        '</a>';
      }).join('') +
    '</div>';
  }

  html += '<div class="sidebar-section">' +
    '<div class="sidebar-title">' + icon('briefcase', 'icon') + ' ' + t(sectionLabels.skills, lang) + '</div>' +
    DATA.skills.map(function(s) {
      return '<div class="skill-group">' +
        '<div class="skill-group-title">' + icon(s.icon, 'icon-sm skill-group-icon') + ' ' + t(s.title, lang) + '</div>' +
        '<div class="skill-tags">' + s.tags.map(function(tag) { return '<span class="skill-tag">' + tag + '</span>'; }).join('') + '</div>' +
      '</div>';
    }).join('') +
  '</div>';

  html += '<div class="sidebar-section">' +
    '<div class="sidebar-title">' + icon('globe', 'icon') + ' ' + t(sectionLabels.languages, lang) + '</div>' +
    DATA.languages.map(function(l) {
      var lvl = t(l.level, lang);
      return '<div class="language-item"><span class="language-name">' + t(l.name, lang) + '</span>' +
        (lvl ? ' <span class="language-level">\u2014 ' + lvl + '</span>' : '') +
      '</div>';
    }).join('') +
  '</div>';

  return html;
}

function expBulletText(b, lang) {
  if (typeof b === 'string') return b;
  if (b && typeof b === 'object' && (b.en != null || b.es != null)) return t(b, lang);
  return '';
}

function renderMain(lang) {
  var portfolio = (DATA.highlights && DATA.highlights.length)
    ? DATA.highlights
    : (DATA.projects || []);
  var portfolioTitle = DATA.highlightsSection || { en: 'Highlights', es: 'Destacados' };

  var experienceHtml = DATA.experience.map(function(exp) {
    var bullets = exp.bullets;
    var items = [];
    if (bullets && bullets.en != null && typeof bullets === 'object' && !Array.isArray(bullets)) {
      var list = bullets[lang] || bullets.en || [];
      items = list.map(function(b) { return '<li>' + b + '</li>'; });
    } else if (Array.isArray(bullets)) {
      items = bullets.map(function(b) { return '<li>' + expBulletText(b, lang) + '</li>'; });
    }
    var companyDesc = t(exp.companyDesc, lang);
    return '<div class="experience-item' + (exp.current ? ' current' : '') + ' reveal">' +
      '<div class="exp-title">' + t(exp.title, lang) + '</div>' +
      '<div class="exp-company">' + exp.company + '</div>' +
      (companyDesc ? '<div class="exp-company-desc">' + companyDesc + '</div>' : '') +
      '<div class="exp-date">' + t(exp.date, lang) + '</div>' +
      '<div class="exp-description"><ul>' + items.join('') + '</ul></div>' +
    '</div>';
  }).join('');

  var portfolioSection = '';
  if (portfolio.length > 0) {
    portfolioSection =
    '<section class="section reveal">' +
      '<h2 class="section-title">' + icon('layers', 'icon-section') + ' ' + t(portfolioTitle, lang) + '</h2>' +
      '<div class="projects-grid">' +
        portfolio.map(function(p) {
          var role = t(p.role, lang);
          var stack = p.stack || '';
          var desc = t(p.desc, lang);
          return '<div class="project-card">' +
            '<div class="project-name">' + t(p.name, lang) + '</div>' +
            (role ? '<div class="project-role">' + role + '</div>' : '') +
            (stack ? '<div class="project-stack">' + stack + '</div>' : '') +
            (desc ? '<div class="project-desc">' + desc + '</div>' : '') +
          '</div>';
        }).join('') +
      '</div>' +
    '</section>';
  }

  return '<header class="cv-header">' +
      '<h1 class="cv-name">' + DATA.meta.name + '</h1>' +
      '<p class="cv-title">' + t(DATA.meta.title, lang) + '</p>' +
    '</header>' +

    '<section class="section reveal">' +
      '<h2 class="section-title">' + icon('user', 'icon-section') + ' ' + t({ en: 'Professional summary', es: 'Resumen' }, lang) + '</h2>' +
      '<p class="profile-text">' + t(DATA.profile, lang) + '</p>' +
    '</section>' +

    '<section class="section">' +
      '<h2 class="section-title">' + icon('briefcase', 'icon-section') + ' ' + t({ en: 'Professional experience', es: 'Experiencia profesional' }, lang) + '</h2>' +
      '<div class="experience-list">' + experienceHtml + '</div>' +
    '</section>' +

    portfolioSection +

    '<section class="section reveal">' +
      '<h2 class="section-title">' + icon('gradCap', 'icon-section') + ' ' + t({ en: 'Education', es: 'Educaci\u00f3n' }, lang) + '</h2>' +
      DATA.education.map(function(e) {
        return '<div class="education-item">' +
          '<div class="edu-title">' + t(e.title, lang) + '</div>' +
          '<div class="edu-institution">' + t(e.institution, lang) + '</div>' +
          '<div class="edu-date">' + t(e.date, lang) + '</div>' +
          (e.details ? '<div class="edu-details">' + t(e.details, lang) + '</div>' : '') +
        '</div>';
      }).join('') +
    '</section>' +

    '<div class="cv-footer">' + t(DATA.footer, lang) + '</div>';
}

// ===========================================
//  ENGINE
// ===========================================

var currentLang = 'es';

function render(lang) {
  var cv = document.getElementById('cv');
  cv.innerHTML =
    '<aside class="sidebar">' + renderSidebar(lang) + '</aside>' +
    '<main class="main-content">' + renderMain(lang) + '</main>';

  if ('IntersectionObserver' in window && window.innerWidth < 768) {
    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    cv.querySelectorAll('.reveal').forEach(function(el) { observer.observe(el); });
  } else {
    cv.querySelectorAll('.reveal').forEach(function(el) { el.classList.add('revealed'); });
  }
}

function setLang(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  localStorage.setItem('cv-lang-pablo', lang);
  render(lang);
}

(function() {
  document.getElementById('cv').addEventListener('click', function(e) {
    var btn = e.target.closest('[data-lang-btn]');
    if (btn) setLang(btn.dataset.langBtn);
  });

  document.getElementById('printBtn').addEventListener('click', function() {
    window.print();
  });

  var saved = localStorage.getItem('cv-lang-pablo') || 'es';
  setLang(saved);
})();
