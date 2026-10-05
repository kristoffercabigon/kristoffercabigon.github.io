/* About Flip Card — inspired by React Bits Flip Card
 * https://www.reactbits.dev/micro/flip-card
 * Vanilla port of the public API/props used on this portfolio.
 */
(() => {
  'use strict';

  const DEFAULTS = {
    axis: 'y',
    flipOnClick: true,
    draggable: true,
    dragDistance: 0,
    tilt: true,
    tiltMax: 12,
    glare: true,
    glareOpacity: 0.22,
    hoverScale: 1.03,
    perspective: 1100,
    stiffness: 170,
    damping: 20,
    width: 300,
    height: 400,
    radius: 22,
    background: '#27272a',
    color: '#f5f5f5',
    shadow: true,
    shadowColor: '#000000',
    shadowOpacity: 0.45,
  };

  function clamp(value, min, max) {
    return Math.min(max, Math.max(min, value));
  }

  function mountFlipCard(root) {
    if (!root || root.dataset.flipReady === '1') return;
    root.dataset.flipReady = '1';

    const opts = { ...DEFAULTS };
    if (root.dataset.fcWidth) opts.width = Number(root.dataset.fcWidth) || opts.width;
    if (root.dataset.fcHeight) opts.height = Number(root.dataset.fcHeight) || opts.height;

    const scene = root.querySelector('.about-flip-card__scene');
    const inner = root.querySelector('.about-flip-card__inner');
    const glare = root.querySelector('.about-flip-card__glare');
    if (!scene || !inner) return;

    root.style.setProperty('--fc-radius', `${opts.radius}px`);
    root.style.setProperty('--fc-bg', opts.background);
    root.style.setProperty('--fc-color', opts.color);
    root.style.setProperty('--fc-shadow-opacity', opts.shadow ? String(opts.shadowOpacity) : '0');
    root.style.setProperty('--fc-perspective', `${opts.perspective}px`);
    root.style.setProperty('--fc-hover-scale', String(opts.hoverScale));
    root.style.setProperty('--fc-glare', String(opts.glareOpacity));
    root.dataset.axis = opts.axis;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    const coarse = window.matchMedia('(pointer: coarse)');
    const isLandscapeCard = root.dataset.fcLayout === 'landscape' || root.classList.contains('about-flip-card--landscape');

    function syncCardSize() {
      if (!isLandscapeCard) {
        root.style.width = '';
        root.style.height = '';
        return;
      }
      if (!window.matchMedia('(max-width: 950px)').matches) {
        root.style.width = '';
        root.style.height = '';
        return;
      }
      const width = Math.min(560, Math.round(window.innerWidth * 0.92));
      const height = Math.round((width * 9) / 16); // 1920×1080
      root.style.width = `${width}px`;
      root.style.height = `${height}px`;
    }

    syncCardSize();
    window.addEventListener('resize', syncCardSize, { passive: true });
    window.matchMedia('(max-width: 950px)').addEventListener('change', syncCardSize);

    let flipped = false;
    let dragging = false;
    let hovering = false;
    let pointerId = null;
    let startX = 0;
    let startY = 0;
    let moved = false;
    let suppressClick = false;

    let flip = 0;
    let flipV = 0;
    let tiltX = 0;
    let tiltY = 0;
    let tiltXV = 0;
    let tiltYV = 0;
    let scale = 1;
    let scaleV = 0;
    let targetFlip = 0;
    let targetTiltX = 0;
    let targetTiltY = 0;
    let targetScale = 1;
    let dragOffset = 0;
    let raf = 0;
    let last = performance.now();

    const axisIsY = () => opts.axis !== 'x';

    function setFlipped(next, announce = true) {
      flipped = Boolean(next);
      targetFlip = flipped ? 180 : 0;
      root.setAttribute('aria-pressed', flipped ? 'true' : 'false');
      if (announce) root.dispatchEvent(new CustomEvent('flipchange', { detail: { flipped } }));
    }

    function spring(current, velocity, target, dt) {
      const stiff = opts.stiffness;
      const damp = opts.damping;
      const force = (target - current) * stiff;
      const nextV = velocity + force * dt;
      const dampedV = nextV * Math.exp(-damp * dt);
      const next = current + dampedV * dt;
      return [next, dampedV];
    }

    function applyTransform() {
      const totalFlip = flip + dragOffset;
      targetScale = hovering || dragging ? opts.hoverScale : 1;

      if (axisIsY()) {
        inner.style.transform = `scale3d(${scale}, ${scale}, ${scale}) rotateX(${tiltX}deg) rotateY(${totalFlip + tiltY}deg)`;
      } else {
        inner.style.transform = `scale3d(${scale}, ${scale}, ${scale}) rotateY(${tiltY}deg) rotateX(${totalFlip + tiltX}deg)`;
      }
    }

    function tick(now) {
      raf = requestAnimationFrame(tick);
      const dt = Math.min(0.032, (now - last) / 1000) || 0.016;
      last = now;

      if (!dragging) {
        [flip, flipV] = spring(flip, flipV, targetFlip, dt);
        // Snap residual when nearly settled
        if (Math.abs(targetFlip - flip) < 0.05 && Math.abs(flipV) < 0.05) {
          flip = targetFlip;
          flipV = 0;
        }
      }

      [tiltX, tiltXV] = spring(tiltX, tiltXV, targetTiltX, dt);
      [tiltY, tiltYV] = spring(tiltY, tiltYV, targetTiltY, dt);
      [scale, scaleV] = spring(scale, scaleV, targetScale, dt);
      applyTransform();
    }

    function updateTilt(clientX, clientY) {
      if (!opts.tilt || reduced.matches) {
        targetTiltX = 0;
        targetTiltY = 0;
        return;
      }
      const rect = root.getBoundingClientRect();
      const px = (clientX - rect.left) / rect.width;
      const py = (clientY - rect.top) / rect.height;
      const nx = clamp(px, 0, 1) * 2 - 1;
      const ny = clamp(py, 0, 1) * 2 - 1;
      targetTiltX = -ny * opts.tiltMax;
      targetTiltY = nx * opts.tiltMax;

      if (opts.glare && glare) {
        root.style.setProperty('--fc-glare-x', `${clamp(px, 0, 1) * 100}%`);
        root.style.setProperty('--fc-glare-y', `${clamp(py, 0, 1) * 100}%`);
      }
    }

    function clearTilt() {
      targetTiltX = 0;
      targetTiltY = 0;
    }

    function onPointerDown(e) {
      if (e.button != null && e.button !== 0) return;
      if (!opts.draggable && !opts.flipOnClick) return;
      pointerId = e.pointerId;
      startX = e.clientX;
      startY = e.clientY;
      moved = false;
      dragging = false;
      dragOffset = 0;
      root.setPointerCapture?.(pointerId);
    }

    function onPointerMove(e) {
      if (pointerId === null) {
        if (hovering) updateTilt(e.clientX, e.clientY);
        return;
      }
      if (e.pointerId !== pointerId) return;

      const dx = e.clientX - startX;
      const dy = e.clientY - startY;
      const dist = Math.hypot(dx, dy);
      const threshold = Math.max(0, opts.dragDistance);

      if (opts.draggable && dist > threshold) {
        if (!dragging) {
          // Freeze spring at the current face while dragging
          flip = targetFlip;
          flipV = 0;
        }
        dragging = true;
        moved = true;
        root.classList.add('is-dragging');
        const rect = root.getBoundingClientRect();
        const span = axisIsY() ? rect.width : rect.height;
        const delta = axisIsY() ? dx : -dy;
        dragOffset = clamp((delta / Math.max(span, 1)) * 180, -180, 180);
        updateTilt(e.clientX, e.clientY);
      } else if (hovering) {
        updateTilt(e.clientX, e.clientY);
      }
    }

    function endDrag(e) {
      if (pointerId === null) return;
      if (e && e.pointerId !== pointerId) return;

      if (dragging) {
        const visual = flip + dragOffset;
        const face = flipped ? 180 : 0;
        const commit = Math.abs(visual - face) > 70;
        dragOffset = 0;
        flip = visual;
        flipV = 0;
        if (commit) setFlipped(!flipped);
        suppressClick = true;
        setTimeout(() => { suppressClick = false; }, 0);
      }

      dragging = false;
      pointerId = null;
      root.classList.remove('is-dragging');
      if (!hovering) clearTilt();
    }

    function onClick(e) {
      if (suppressClick || moved) {
        moved = false;
        return;
      }
      if (!opts.flipOnClick) return;
      e.preventDefault();
      setFlipped(!flipped);
    }

    function onKeyDown(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        setFlipped(!flipped);
      }
    }

    function onEnter(e) {
      hovering = true;
      root.classList.add('is-hovering');
      updateTilt(e.clientX, e.clientY);
    }

    function onLeave() {
      hovering = false;
      root.classList.remove('is-hovering');
      if (!dragging) clearTilt();
    }

    root.setAttribute('role', 'button');
    root.setAttribute('tabindex', '0');
    root.setAttribute('aria-pressed', 'false');
    root.setAttribute('aria-label', 'Flip profile card');

    root.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', endDrag);
    window.addEventListener('pointercancel', endDrag);
    root.addEventListener('click', onClick);
    root.addEventListener('keydown', onKeyDown);
    root.addEventListener('pointerenter', onEnter);
    root.addEventListener('pointerleave', onLeave);

    if (coarse.matches) {
      // Touch: prefer tap flip, lighter tilt
      opts.tilt = false;
    }

    raf = requestAnimationFrame(tick);
  }

  function init() {
    document.querySelectorAll('[data-about-flip-card]').forEach(mountFlipCard);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
