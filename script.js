gsap.registerPlugin(ScrollTrigger);

/* ── PAGE LOAD ──────────────────────────────────────────────── */
window.addEventListener('load', () => {
  gsap.to('#hero-text', { opacity: 1, duration: 1, delay: 0.6, ease: 'power2.out' });
});

/* ── HERO INVITE — typewriter, bottom right ──────────────────── */
(function initHeroInvite() {
  const line1 = document.getElementById('hero-invite-line-1');
  const arrow = document.getElementById('hero-invite-arrow');
  if (!line1 || !arrow) return;

  line1.textContent = 'come on in';

  setTimeout(() => {
    line1.classList.add('hero-invite-line--fade');
    arrow.classList.add('hero-invite-arrow--fade');
    setTimeout(() => arrow.classList.add('hero-invite-arrow--visible'), 1200);
  }, 1600);
})();

/* ── CYCLING WORD (typewriter) ─────────────────────────────────── */
const wordEl = document.getElementById('cycling-word');

if (wordEl) {
  const words = ['stories', 'projects', 'adventures', 'solutions'];
  let wordIndex = 0;

  function eraseWord(callback) {
    const text = wordEl.textContent;
    if (text.length > 0) {
      wordEl.textContent = text.slice(0, -1);
      setTimeout(() => eraseWord(callback), 45);
    } else {
      callback();
    }
  }

  function typeWord(word, i = 0) {
    if (i <= word.length) {
      wordEl.textContent = word.slice(0, i);
      setTimeout(() => typeWord(word, i + 1), 80);
    }
  }

  function cycleWord() {
    eraseWord(() => {
      wordIndex = (wordIndex + 1) % words.length;
      typeWord(words[wordIndex]);
    });
  }

  setInterval(cycleWord, 2400);
}


/* ── HERO PARALLAX ──────────────────────────────────────────── */
gsap.to('#hero-bg', {
  yPercent: -2.5,
  ease: 'none',
  scrollTrigger: {
    trigger: '#hero',
    start: 'top top',
    end: 'bottom top',
    scrub: true
  }
});

/* ── BIRDS SCATTER ──────────────────────────────────────────── */
const birds = document.querySelectorAll('.bird');
ScrollTrigger.create({
  trigger: '#hero',
  start: 'bottom 65%',
  onEnter: () => {
    birds.forEach((bird, i) => {
      const angle = (i / birds.length) * Math.PI * 2;
      gsap.to(bird, {
        x: Math.cos(angle) * 200,
        y: Math.sin(angle) * 130 - 60,
        opacity: 0,
        duration: 1.4,
        ease: 'power2.out',
        delay: i * 0.06
      });
    });
  },
  onLeaveBack: () => {
    birds.forEach(bird => {
      gsap.to(bird, { x: 0, y: 0, opacity: 1, duration: 1, ease: 'power2.out' });
    });
  }
});

/* ── PROJECT ROWS STAGGER IN ────────────────────────────────── */
gsap.utils.toArray('.project-row').forEach((row, i) => {
  gsap.to(row, {
    opacity: 1,
    y: 0,
    duration: 0.75,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: row,
      start: 'top 82%'
    }
  });
});

/* ── SMOOTH SCROLL ──────────────────────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
  });
});
