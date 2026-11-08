// Morph documentation: mobile menu.
// Without JavaScript the navigation stays fully visible and the Menu button stays hidden.
document.documentElement.classList.add('js');

document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  if (!toggle || !nav) return;

  var wide = window.matchMedia('(min-width: 1024px)');

  function isOpen() {
    return toggle.getAttribute('aria-expanded') === 'true';
  }

  function setOpen(open) {
    toggle.setAttribute('aria-expanded', String(open));
    nav.classList.toggle('is-open', open);
  }

  toggle.addEventListener('click', function () {
    setOpen(!isOpen());
  });

  // Escape closes the open menu and puts focus back on the Menu button.
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && isOpen()) {
      setOpen(false);
      toggle.focus();
    }
  });

  // The menu is always shown on wide screens, so a menu left open there is reset.
  wide.addEventListener('change', function () {
    if (wide.matches) setOpen(false);
  });
});
