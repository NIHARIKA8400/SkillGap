/* =========================================================
   SkillGap — icons.js
   Small built-in icon set, so we don't need an icon library.

   HOW TO USE
   In HTML:   <span class="icon" data-icon="check"></span>
   This file finds every element with data-icon and puts the
   matching SVG inside it.

   HOW TO ADD AN ICON
   Add a new line to the ICONS object below. Each icon is the
   inside of a 24x24 SVG (just the <path>, <circle>, etc.).
   ========================================================= */

const ICONS = {
  // Career roles
  frontend:  '<rect x="3" y="4" width="18" height="16" rx="3"/><path d="M3 9h18M9 9v11"/>',
  backend:   '<rect x="3" y="4" width="18" height="6" rx="2"/><rect x="3" y="14" width="18" height="6" rx="2"/><path d="M7 7h.01M7 17h.01"/>',
  fullstack: '<path d="M12 3l9 5-9 5-9-5 9-5z"/><path d="M3 13l9 5 9-5"/>',
  data:      '<path d="M4 20h16"/><rect x="5" y="11" width="3" height="9" rx="1"/><rect x="10.5" y="5" width="3" height="15" rx="1"/><rect x="16" y="14" width="3" height="6" rx="1"/>',
  security:  '<path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3z"/><path d="M9 12l2 2 4-4"/>',
  design:    '<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/>',

  // Sidebar / navigation
  dashboard: '<rect x="3" y="3" width="7" height="9" rx="2"/><rect x="14" y="3" width="7" height="5" rx="2"/><rect x="14" y="12" width="7" height="9" rx="2"/><rect x="3" y="16" width="7" height="5" rx="2"/>',
  code:      '<path d="M8 8l-4 4 4 4M16 8l4 4-4 4M14 5l-4 14"/>',
  target:    '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
  route:     '<circle cx="6" cy="19" r="2"/><circle cx="18" cy="5" r="2"/><path d="M8 19h7a3.5 3.5 0 000-7H9a3.5 3.5 0 010-7h7"/>',
  file:      '<path d="M14 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V8l-5-5z"/><path d="M14 3v5h5M9 13h6M9 17h4"/>',
  sliders:   '<path d="M4 6h10M18 6h2M4 12h4M12 12h8M4 18h12M20 18h0"/><circle cx="16" cy="6" r="2"/><circle cx="10" cy="12" r="2"/><circle cx="18" cy="18" r="2"/>',
  menu:      '<path d="M4 7h16M4 12h16M4 17h16"/>',

  // Skill categories and topics
  database:  '<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/>',
  terminal:  '<rect x="3" y="4" width="18" height="16" rx="3"/><path d="M7 10l3 2-3 2M13 15h4"/>',
  atom:      '<circle cx="12" cy="12" r="1.6"/><ellipse cx="12" cy="12" rx="9" ry="3.6"/><ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(120 12 12)"/>',
  link:      '<path d="M10 14a4 4 0 005.7 0l3-3a4 4 0 00-5.7-5.7l-1 1"/><path d="M14 10a4 4 0 00-5.7 0l-3 3a4 4 0 005.7 5.7l1-1"/>',
  type:      '<path d="M4 7V5h16v2M12 5v14M9 19h6"/>',
  eye:       '<path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',

  // Actions and status
  check:     '<path d="M5 12.5l4.5 4.5L19 7.5"/>',
  x:         '<path d="M6 6l12 12M18 6L6 18"/>',
  arrow:     '<path d="M5 12h14M13 6l6 6-6 6"/>',
  clock:     '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  flag:      '<path d="M5 21V4M5 4h11l-2 4 2 4H5"/>',
  info:      '<circle cx="12" cy="12" r="9"/><path d="M12 8v5M12 16h.01"/>'
};

// The SkillGap logo: a solid bar (you) and a taller bar (your goal) with a gap between.
const LOGO_SVG =
  '<svg viewBox="0 0 34 34" aria-hidden="true">' +
    '<defs><linearGradient id="logoGrad" x1="0" y1="0" x2="1" y2="1">' +
      '<stop offset="0" stop-color="#6366f1"/><stop offset="1" stop-color="#8b5cf6"/>' +
    '</linearGradient></defs>' +
    '<rect width="34" height="34" rx="10" fill="url(#logoGrad)"/>' +
    '<rect x="8" y="17" width="6" height="9" rx="2" fill="#fff"/>' +
    '<rect x="20" y="8" width="6" height="18" rx="2" fill="#fff" fill-opacity="0.55"/>' +
    '<path d="M15.5 21.5h3" stroke="#fff" stroke-width="1.6" stroke-linecap="round" stroke-dasharray="0.1 3"/>' +
  '</svg>';

function renderIcons() {
  document.querySelectorAll('[data-icon]').forEach(function (el) {
    const name = el.dataset.icon;

    if (name === 'logo') {
      el.innerHTML = LOGO_SVG;
    } else if (ICONS[name]) {
      el.innerHTML =
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" ' +
        'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + ICONS[name] + '</svg>';
    }
  });
}

renderIcons();