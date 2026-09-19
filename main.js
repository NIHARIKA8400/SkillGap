/* =========================================================
   SkillGap — main.js
   Shared JavaScript. Runs on every page.
   ========================================================= */


/* ---------------------------------------------------------
   1. MOBILE MENU
   On small screens the landing-page nav and the dashboard
   sidebar are hidden. The menu button adds the class
   "nav-open" to <body>, and the CSS does the rest.
   --------------------------------------------------------- */
const navToggles = document.querySelectorAll('[data-nav-toggle]');

function setNavOpen(isOpen) {
  document.body.classList.toggle('nav-open', isOpen);

  // Keep screen readers informed about the button's state
  navToggles.forEach(function (button) {
    button.setAttribute('aria-expanded', String(isOpen));
  });
}

// Menu button: open / close
navToggles.forEach(function (button) {
  button.addEventListener('click', function () {
    setNavOpen(!document.body.classList.contains('nav-open'));
  });
});

// Close the menu when a link is clicked
document.querySelectorAll('.site-nav a, .side-link').forEach(function (link) {
  link.addEventListener('click', function () {
    setNavOpen(false);
  });
});

// Close the menu when the dark overlay is clicked
const scrim = document.querySelector('.scrim');
if (scrim) {
  scrim.addEventListener('click', function () {
    setNavOpen(false);
  });
}

// Close the menu with the Escape key
document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    setNavOpen(false);
  }
});

// If the window gets wide again (e.g. rotating a tablet), reset the menu
window.addEventListener('resize', function () {
  if (window.innerWidth > 900) {
    setNavOpen(false);
  }
});


/* ---------------------------------------------------------
   2. GREETING
   On the dashboard, <h1 data-greeting> says "Good morning",
   "Good afternoon" or "Good evening" based on the time.
   Later you can replace "there" with the user's real name.
   --------------------------------------------------------- */
const greeting = document.querySelector('[data-greeting]');

if (greeting) {
  const hour = new Date().getHours();
  let timeOfDay = 'Good morning';

  if (hour >= 12 && hour < 17) {
    timeOfDay = 'Good afternoon';
  } else if (hour >= 17) {
    timeOfDay = 'Good evening';
  }

  const userName = 'there'; // TODO: replace with the real name later
  greeting.textContent = timeOfDay + ', ' + userName + '! 👋';
}