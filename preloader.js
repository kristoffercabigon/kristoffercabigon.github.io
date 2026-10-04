/* Standalone loader. Remove its two head includes and markup to uninstall. */
(() => {
  'use strict';
  const root = document.documentElement;
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  const activeAnimations = new Set();
  let loader, page, completed = false;

  // Timings in milliseconds: edit here without touching the landing page.
  const timing = {
    initialHold: 700, letterOut: 800, letterStagger: 30,
    devIn: 800, devStagger: 50, center: 800, grow: 800,
    enlargedHold: 800, exit: 1000, fadeDelay: 400, fade: 500,
    readinessLimit: 4000, recoveryLimit: 12000
  };
  const ease = {
    inOut: 'cubic-bezier(.65, 0, .35, 1)',
    strong: 'cubic-bezier(.76, 0, .24, 1)',
    out: 'cubic-bezier(.22, 1, .36, 1)',
    in: 'cubic-bezier(.64, 0, .78, 0)'
  };

  function finish() {
    if (completed) return;
    completed = true;
    clearTimeout(recovery);
    activeAnimations.forEach(animation => animation.cancel());
    activeAnimations.clear();
    page = page || document.getElementById('portfolio-content');
    loader = loader || document.getElementById('portfolio-loader');
    if (page) { page.inert = false; page.removeAttribute('aria-busy'); }
    if (loader) loader.remove();
    root.classList.remove('preloader-active', 'preloader-revealing');
    document.dispatchEvent(new CustomEvent('portfolio:ready'));
  }

  // Fail open: missing assets or an interrupted animation can never trap the page.
  root.classList.add('preloader-active');
  const recovery = setTimeout(finish, timing.recoveryLimit);
  addEventListener('pagehide', finish, { once: true });
  addEventListener('pageshow', event => { if (event.persisted) finish(); });
  motion.addEventListener('change', event => { if (event.matches) finish(); });

  function animate(element, frames, duration, delay = 0, easing = ease.inOut) {
    const animation = element.animate(frames, { duration, delay, easing, fill: 'both' });
    activeAnimations.add(animation);
    return animation;
  }
  const settled = animation => animation.finished.catch(() => {});
  // Sample the reference's GSAP power curves using the native animation API.
  const power = {
    inOut3: t => t < .5 ? 4 * t ** 3 : 1 - (-2 * t + 2) ** 3 / 2,
    inOut5: t => t < .5 ? 16 * t ** 5 : 1 - (-2 * t + 2) ** 5 / 2,
    out3: t => 1 - (1 - t) ** 3,
    in3: t => t ** 3,
    in4: t => t ** 4
  };
  function tween(element, sample, duration, delay = 0, curve = power.inOut3) {
    const frames = Array.from({ length: 61 }, (_, i) => ({ ...sample(curve(i / 60)), offset: i / 60 }));
    return animate(element, frames, duration, delay, 'linear');
  }
  const hold = duration => settled(animate(loader, [{ opacity: 1 }, { opacity: 1 }], duration, 0, 'linear'));
  function phase(value) { loader.dataset.phase = value; }
  function bounded(promise, limit) {
    return new Promise(resolve => {
      const timeout = setTimeout(resolve, limit);
      Promise.resolve(promise).catch(() => {}).finally(() => { clearTimeout(timeout); resolve(); });
    });
  }

  async function start() {
    if (completed) return;
    loader = document.getElementById('portfolio-loader');
    page = document.getElementById('portfolio-content');
    if (!loader || !page || !Element.prototype.animate) { finish(); return; }
    loader.hidden = false;
    page.inert = true;
    page.setAttribute('aria-busy', 'true');

    const portrait = document.querySelector('#profile img');
    const pageReady = bounded(Promise.all([
      document.fonts ? document.fonts.ready : Promise.resolve(),
      portrait?.decode ? portrait.decode().catch(() => {}) : Promise.resolve()
    ]), timing.readinessLimit);

    try {
      if (motion.matches) {
        await pageReady;
        if (completed) return;
        root.classList.add('preloader-revealing');
        await settled(animate(loader, [{ opacity: 1 }, { opacity: 0 }], 180));
        finish();
        return;
      }
      // Avoid changing letter widths in the middle of the sequence.
      if (document.fonts) await bounded(document.fonts.load('600 48px Inter'), 600);
      if (completed) return;
      const name = loader.querySelector('.portfolio-loader__line--name');
      const suffix = loader.querySelector('.portfolio-loader__line--suffix');
      const replacement = loader.querySelector('.portfolio-loader__replacement');
      const devPosition = loader.querySelector('.portfolio-loader__dev-position');
      const dev = loader.querySelector('.portfolio-loader__line--dev');
      const nameLetters = [...name.children];
      const suffixLetters = [...suffix.children];
      const devLetters = [...dev.children];
      const corners = [...loader.querySelectorAll('.portfolio-loader__corner span')];
      phase('initial');
      await hold(timing.initialHold);
      if (completed) return;

      // KRIS. (including its dot) exits first. DC stays completely still.
      phase('kris-out');
      const flip = (el, i) => settled(tween(el, p => ({
        opacity: 1 - p, transform: `translateY(${50 * p}px) rotateX(${-90 * p}deg)`
      }), timing.letterOut, i * timing.letterStagger));
      await Promise.all(nameLetters.map(flip));
      if (completed) return;

      // Only after KRIS. has gone: DC flips away and DEV drops into that slot.
      phase('dc-to-dev');
      await Promise.all([
        ...suffixLetters.map(flip),
        ...devLetters.map((el, i) => settled(tween(el, p => ({
          transform: `translateY(${-110 * (1 - p)}%)`
        }), timing.devIn, i * timing.devStagger)))
      ]);
      if (completed) return;

      phase('centering');
      const fontSize = parseFloat(getComputedStyle(name).fontSize);
      const nameWidth = name.getBoundingClientRect().width / fontSize;
      const slotWidth = replacement.getBoundingClientRect().width / fontSize;
      // Collapse the empty first group and widen the replacement, as in the reference.
      await Promise.all([
        settled(tween(name, p => ({ width: `${nameWidth * (1 - p)}em` }), timing.center, 0, power.inOut5)),
        settled(tween(replacement, p => ({ width: `${slotWidth + (3.5 - slotWidth) * p}em` }), timing.center, 0, power.inOut5))
      ]);
      if (completed) return;
      devPosition.style.overflow = 'visible';
      phase('growing');
      await settled(tween(dev, p => ({ transform: `scale(${1 + 1.5 * p})` }), timing.grow, 0, power.out3));
      if (completed) return;
      phase('hold');
      await Promise.all([hold(timing.enlargedHold), pageReady]);
      if (completed) return;
      phase('exit');
      root.classList.add('preloader-revealing');
      corners.forEach(el => {
        const top = el.parentElement.classList.contains('portfolio-loader__corner--tl') || el.parentElement.classList.contains('portfolio-loader__corner--tr');
        tween(el, p => ({ transform: `translateY(${(top ? -150 : 150) * p}%)` }), 800, 0, power.in4);
      });
      tween(dev, p => ({ transform: `scale(${2.5 + 122.5 * p})`, opacity: 1 - p,
        color: `rgb(${254 - 235 * p}, ${250 - 231 * p}, ${238 - 219 * p})`
      }), timing.exit, 0, power.in3);
      const reveal = animate(page, [{ opacity: 0, transform: 'translateY(18px)' },
        { opacity: 1, transform: 'translateY(0)' }], 700, timing.fadeDelay, ease.out);
      const fade = animate(loader, [{ opacity: 1 }, { opacity: 0 }], timing.fade, timing.fadeDelay);
      await Promise.all([settled(reveal), settled(fade)]);
      finish();
    } catch (error) {
      console.warn('Preloader skipped:', error);
      finish();
    }
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start, { once: true });
  else start();
})();
