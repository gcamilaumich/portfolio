/* ═══════════════════════════════════════════════════════════════
   animations.js — interactive layer (no cursor, no hover preview)
═══════════════════════════════════════════════════════════════ */

/* ── 0. NAV THEME ON SCROLL ─────────────────────────────────────
   Nav has no background of its own — text defaults to dark since
   most page content is light. As the page scrolls, check which
   section sits behind the nav — if it's marked data-nav-theme="dark"
   (hero bands, quote blocks, footers, etc.), flip the nav text to
   cream so it stays readable over that darker/colored background.
─────────────────────────────────────────────────────────────── */
(function initNavTheme() {
  const darkSections = document.querySelectorAll('[data-nav-theme="dark"]');
  if (!darkSections.length) return;

  function updateNavTheme() {
    const checkY = 50; // roughly the vertical center of the nav bar
    let isDark = false;
    darkSections.forEach(sec => {
      const rect = sec.getBoundingClientRect();
      if (rect.top <= checkY && rect.bottom >= checkY) isDark = true;
    });
    document.body.classList.toggle('nav-on-dark', isDark);
  }

  window.addEventListener('scroll', updateNavTheme, { passive: true });
  window.addEventListener('resize', updateNavTheme);
  updateNavTheme();
})();


/* ── 0b. NAV PILL COLLAPSE ON SCROLL ─────────────────────────────
   Once you scroll past the landing screen, the name pill shrinks
   down to just the logo (text fades/collapses away) on every page.
─────────────────────────────────────────────────────────────── */
(function initNavCollapse() {
  const pill = document.querySelector('.nav-name-pill');
  if (!pill) return;

  function updateNavCollapse() {
    const collapsed = window.scrollY > window.innerHeight * 0.7;
    document.body.classList.toggle('nav-collapsed', collapsed);
  }

  window.addEventListener('scroll', updateNavCollapse, { passive: true });
  window.addEventListener('resize', updateNavCollapse);
  updateNavCollapse();
})();


/* ── 1. SCROLL PROGRESS BAR ────────────────────────────────────
   Thin olive line at the very top tracking page depth.
─────────────────────────────────────────────────────────────── */
(function initProgressBar() {
  const bar = document.createElement('div');
  bar.className = 'scroll-progress-bar';
  document.body.appendChild(bar);

  window.addEventListener('scroll', () => {
    const pct = window.scrollY / (document.body.scrollHeight - window.innerHeight);
    bar.style.transform = `scaleX(${pct})`;
  }, { passive: true });
})();


/* ── 2. WORD-BY-WORD HEADING REVEAL ───────────────────────────
   Add data-reveal="words" to a plain-text heading (no nested
   HTML tags inside) to animate each word up on scroll entry.
─────────────────────────────────────────────────────────────── */
(function initWordReveal() {
  const targets = document.querySelectorAll('[data-reveal="words"]');

  targets.forEach(el => {
    // Split text only — skip elements that contain child HTML tags
    if (el.children.length > 0) return;

    const words = el.textContent.trim().split(/\s+/);
    el.innerHTML = words.map(w =>
      `<span class="word-wrap"><span class="word-inner">${w}</span></span>`
    ).join(' ');

    const obs = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      el.querySelectorAll('.word-inner').forEach((s, i) => {
        s.style.transitionDelay = `${i * 0.05}s`;
        s.classList.add('word-in');
      });
      obs.disconnect();
    }, { threshold: 0.2 });

    obs.observe(el);
  });
})();


/* ── 3. ANIMATED STAT COUNTERS ─────────────────────────────────
   Add data-count="73" data-suffix="%" to a .cs-stat-num element.
─────────────────────────────────────────────────────────────── */
(function initCounters() {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;

  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el     = entry.target;
      const target = parseFloat(el.dataset.count);
      const prefix = el.dataset.prefix || '';
      const suffix = el.dataset.suffix || '';
      const dur    = 1400;
      const start  = performance.now();

      function tick(now) {
        const elapsed  = now - start;
        const progress = Math.min(elapsed / dur, 1);
        const ease     = 1 - Math.pow(1 - progress, 4);
        const value    = target % 1 !== 0
          ? (ease * target).toFixed(1)
          : Math.round(ease * target);
        el.textContent = prefix + value + suffix;
        if (progress < 1) requestAnimationFrame(tick);
      }

      requestAnimationFrame(tick);
      obs.unobserve(el);
    });
  }, { threshold: 0.6 });

  counters.forEach(el => obs.observe(el));
})();


/* ── 4. MAGNETIC BUTTONS ────────────────────────────────────────
   Add class "mag" to any link or button for a subtle pull effect.
─────────────────────────────────────────────────────────────── */
(function initMagnetic() {
  document.querySelectorAll('.mag').forEach(el => {
    el.addEventListener('mousemove', e => {
      const r  = el.getBoundingClientRect();
      const dx = (e.clientX - (r.left + r.width  / 2)) * 0.28;
      const dy = (e.clientY - (r.top  + r.height / 2)) * 0.28;
      el.style.transform = `translate(${dx}px, ${dy}px)`;
    });
    el.addEventListener('mouseleave', () => {
      el.style.transition = 'transform 0.5s cubic-bezier(.23,1,.32,1)';
      el.style.transform  = '';
      setTimeout(() => el.style.transition = '', 500);
    });
  });
})();
