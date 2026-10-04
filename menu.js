(() => {
  'use strict';
  const shell = document.querySelector('.pm-shell');
  if (!shell) return;
  const trigger = shell.querySelector('.pm-toggle');
  const layer = shell.querySelector('.pm-layer');
  const page = document.getElementById('menu-page');
  if (!trigger || !layer) return;
  // Show immediately so a later animation setup error can't leave the control missing.
  trigger.hidden = false;
  const links = [...shell.querySelectorAll('.pm-link')];
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  const duration = 1250;
  const easing = 'cubic-bezier(.65,.01,0,.99)';
  const tracks = [];
  let animations = [];
  let forward = true;
  // Every track spans the same clock, so reversing mid-transition stays seamless.
  function track(selector, from, to, start = 0, length = 700) {
    const element = typeof selector === 'string' ? shell.querySelector(selector) : selector;
    if (!element || !element.animate) return;
    const clamp = value => Math.max(0, Math.min(1, value));
    const begin = Math.min(start, duration);
    const end = Math.min(start + length, duration);
    const frames = [];
    if (begin > 0) frames.push({ ...from, offset: 0 });
    frames.push({ ...from, offset: clamp(begin / duration), easing });
    frames.push({ ...to, offset: clamp(end / duration) });
    if (end < duration) frames.push({ ...to, offset: 1 });
    tracks.push({ element, frames });
  }
  track('.pm-panel', { transform: 'translateX(100%)' }, { transform: 'translateX(0)' });
  track('.pm-backdrop', { opacity: 0 }, { opacity: 1 });
  track('.pm-panel-wash--first', { transform: 'translateX(101%)' }, { transform: 'translateX(0)' }, 0, 575);
  track('.pm-panel-wash--second', { transform: 'translateX(101%)' }, { transform: 'translateX(0)' }, 120, 575);
  track('.pm-toggle-menu', { transform: 'translateY(0)' }, { transform: 'translateY(-100%)' });
  track('.pm-toggle-close', { transform: 'translateY(100%)' }, { transform: 'translateY(0)' }, 200);
  track('.pm-icon-middle', { opacity: 1 }, { opacity: 0 }, 0, 400);
  track('.pm-icon-top', { transform: 'translateY(0) rotate(0deg)' }, { transform: 'translateY(8px) rotate(45deg)' }, 0, 400);
  track('.pm-icon-bottom', { transform: 'translateY(0) rotate(0deg)' }, { transform: 'translateY(-8px) rotate(-45deg)' }, 0, 400);
  // Keep staggered link intros inside the shared timeline as menu items grow.
  const linkStagger = links.length > 1
    ? Math.min(50, Math.floor(200 / (links.length - 1)))
    : 0;
  links.forEach((link, index) => track(link,
    { transform: 'translateY(140%) rotate(10deg)' },
    { transform: 'translateY(0) rotate(0deg)' }, 350 + index * linkStagger));
  track('.pm-details', { opacity: 0, transform: 'translateY(20px)' }, { opacity: 1, transform: 'translateY(0)' }, 550);
  // Create a fresh animation group for each direction. Reusing a finished
  // group's promises can complete cleanup before the reverse playback starts.
  function renderTimeline(progress, opening, play) {
    const previous = animations;
    forward = opening;
    animations = tracks.map(({ element, frames }) => {
      const animation = element.animate(frames, {
        duration, fill: 'both', easing: 'linear',
        direction: opening ? 'normal' : 'reverse'
      });
      animation.finished.catch(() => {});
      animation.pause();
      animation.currentTime = opening ? progress : duration - progress;
      return animation;
    });
    previous.forEach(animation => animation.cancel());
    if (play) animations.forEach(animation => animation.play());
  }
  function timelineProgress() {
    const time = animations[0]?.currentTime ?? 0;
    return Math.max(0, Math.min(duration, forward ? time : duration - time));
  }

  let expanded = false;
  let generation = 0;
  let savedFocus = null;
  let pendingTarget = null;
  function focusSection(id) {
    const section = document.getElementById(id);
    if (!section) return;
    if (!section.hasAttribute('tabindex')) {
      section.setAttribute('tabindex', '-1');
      section.addEventListener('blur', () => section.removeAttribute('tabindex'), { once: true });
    }
    section.focus({ preventScroll: true });
    if (location.hash !== '#' + id) history.pushState(null, '', '#' + encodeURIComponent(id));
    section.scrollIntoView({ behavior: motion.matches ? 'instant' : 'smooth', block: 'start' });
  }
  function finishClose() {
    layer.hidden = true;
    shell.dataset.menuState = 'closed';
    shell.removeAttribute('role');
    shell.removeAttribute('aria-modal');
    shell.removeAttribute('aria-label');
    document.documentElement.classList.remove('pm-menu-open');
    if (page) page.inert = false;
    if (pendingTarget) {
      const target = pendingTarget;
      pendingTarget = null;
      focusSection(target);
    } else {
      (savedFocus?.isConnected ? savedFocus : trigger).focus({ preventScroll: true });
    }
  }
  function setOpen(value, immediate = false) {
    if (value === expanded && !immediate) return;
    const token = ++generation;
    expanded = value;
    trigger.setAttribute('aria-expanded', String(value));
    trigger.setAttribute('aria-label', value ? 'Close menu' : 'Open menu');
    if (value) {
      if (shell.dataset.menuState === 'closed') savedFocus = document.activeElement;
      pendingTarget = null;
      layer.hidden = false;
      shell.dataset.menuState = 'opening';
      shell.setAttribute('role', 'dialog');
      shell.setAttribute('aria-modal', 'true');
      shell.setAttribute('aria-label', 'Site navigation');
      document.documentElement.classList.add('pm-menu-open');
      if (page) page.inert = true;
      trigger.focus({ preventScroll: true });
    } else {
      shell.dataset.menuState = 'closing';
    }
    if (motion.matches || immediate || !animations.length) {
      renderTimeline(value ? duration : 0, value, false);
      if (value) shell.dataset.menuState = 'open';
      else finishClose();
      return;
    }
    renderTimeline(timelineProgress(), value, true);
    Promise.all(animations.map(animation => animation.finished)).then(() => {
      if (token !== generation) return;
      if (value) shell.dataset.menuState = 'open';
      else finishClose();
    }).catch(() => {});
  }

  // Wire controls before timeline setup so a keyframe error can't leave Menu dead.
  trigger.addEventListener('click', () => setOpen(!expanded));
  const backdrop = shell.querySelector('.pm-backdrop');
  if (backdrop) backdrop.addEventListener('click', () => setOpen(false));
  links.forEach(link => link.addEventListener('click', event => {
    event.preventDefault();
    pendingTarget = link.hash.slice(1);
    setOpen(false);
  }));
  const brand = shell.querySelector('.pm-brand');
  if (brand) brand.addEventListener('click', event => {
    if (shell.dataset.menuState === 'closed') return;
    event.preventDefault();
    pendingTarget = 'profile';
    setOpen(false);
  });
  // Keep native email/new-tab behavior while animating this menu closed.
  shell.querySelectorAll('.pm-details a').forEach(link => {
    link.addEventListener('click', () => setOpen(false));
  });
  document.addEventListener('keydown', event => {
    if (shell.dataset.menuState === 'closed') return;
    if (event.key === 'Escape') { event.preventDefault(); setOpen(false); }
    if (event.key !== 'Tab') return;
    const focusable = [...shell.querySelectorAll('a[href],button:not([hidden])')]
      .filter(element => element.getClientRects().length);
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  });
  motion.addEventListener('change', () => setOpen(expanded, true));
  window.addEventListener('pagehide', () => {
    pendingTarget = null;
    setOpen(false, true);
  });

  try {
    renderTimeline(0, true, false);
  } catch (error) {
    console.warn('Menu animation setup skipped:', error);
    tracks.length = 0;
  }
  if (!tracks.length) shell.classList.add('pm-no-animation');
})();
