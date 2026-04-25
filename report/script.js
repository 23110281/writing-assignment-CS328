/* script.js — Sidebar toggle + scroll spy */
(function () {
  'use strict';

  /* ── Sidebar open/close ──────────────────────────────────── */
  function toggleSidebar() {
    var sb = document.getElementById('covid-sidebar');
    var btn = document.getElementById('sidebar-toggle-btn');
    if (!sb) return;
    var open = sb.classList.toggle('sidebar-open');
    btn.setAttribute('aria-expanded', open);
    btn.title = open ? 'Close navigation' : 'Open navigation';
  }

  /* ── Scroll spy — highlight active section ───────────────── */
  function scrollSpy() {
    var sections = ['section-1','section-2','section-3','section-4','section-5','conclusions'];
    var scrollY = window.scrollY + 120;
    var current = sections[0];

    sections.forEach(function(id) {
      var el = document.getElementById(id);
      if (el && el.getBoundingClientRect().top + window.scrollY <= scrollY) {
        current = id;
      }
    });

    document.querySelectorAll('.sb-link').forEach(function(a) {
      a.classList.toggle('sb-active', a.getAttribute('href') === '#' + current);
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    var btn = document.getElementById('sidebar-toggle-btn');
    if (btn) btn.addEventListener('click', toggleSidebar);

    /* Close sidebar when a link is clicked on narrow screens */
    document.querySelectorAll('.sb-link').forEach(function(a) {
      a.addEventListener('click', function() {
        var sb = document.getElementById('covid-sidebar');
        if (sb && window.innerWidth < 900) {
          sb.classList.remove('sidebar-open');
        }
      });
    });

    window.addEventListener('scroll', scrollSpy, { passive: true });
    scrollSpy();
  });
})();
