/* script.js — Navbar active states + Scroll spy */
(function () {
  'use strict';

  function scrollSpy() {
    var sections = ['section-1','section-2','section-3','section-4','section-5','conclusions'];
    var scrollY = window.scrollY + 100;
    var current = "";

    sections.forEach(function(id) {
      var el = document.getElementById(id);
      if (el && (el.getBoundingClientRect().top + window.scrollY) <= scrollY) {
        current = id;
      }
    });

    // Update Navbar links
    document.querySelectorAll('.minimal-navbar a').forEach(function(a) {
      var href = a.getAttribute('href');
      if (href === '#' + current || (current === "" && href === "#")) {
        a.style.textDecoration = 'underline';
        a.style.color = '#2563eb'; // Subtle blue for active
      } else {
        a.style.textDecoration = 'none';
        a.style.color = 'black';
      }
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('scroll', scrollSpy, { passive: true });
    scrollSpy();
  });
})();
