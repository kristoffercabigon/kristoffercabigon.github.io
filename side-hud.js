/* Side HUD: futuristic side rails inspired by hero-tech-text (no glitch) */
(() => {
  'use strict';

  const DESKTOP_MQ = '(min-width: 901px)';
  const REDUCE_MQ = '(prefers-reduced-motion: reduce)';
  const INK = [19, 19, 19];
  const FONT = '11px ui-monospace, SFMono-Regular, Menlo, Consolas, monospace';
  const GLYPHS = '01<>/\\|[]{}·•◦▣▢◆◇△▽+※#@ΞΔλµπ';
  const LABELS = [
    'SYS.OK', 'LINK', 'SYNC', 'NODE', 'SCAN', 'I/O', 'HDR', 'VEC',
    '0xA7', '0x3F', 'PKT', 'BUF', 'ACL', 'RNG', 'GRID', 'HUD'
  ];

  if (!window.matchMedia(DESKTOP_MQ).matches || window.matchMedia(REDUCE_MQ).matches) {
    return;
  }

  const canvas = document.createElement('canvas');
  canvas.id = 'side-hud';
  canvas.setAttribute('aria-hidden', 'true');
  document.body.appendChild(canvas);
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  let dpr = 1;
  let w = 0;
  let h = 0;
  let gutter = 110;
  let topSafe = 96;
  let bottomSafe = 28;
  let entities = [];
  let scanners = [];
  let rails = { left: null, right: null };
  let raf = 0;
  let last = performance.now();
  let spawnTimer = 0;
  let visible = !document.hidden;
  let active = true;

  const rand = (a, b) => a + Math.random() * (b - a);
  const pick = arr => arr[(Math.random() * arr.length) | 0];
  const rgba = (a) => `rgba(${INK[0]},${INK[1]},${INK[2]},${a})`;

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = window.innerWidth;
    h = window.innerHeight;
    gutter = Math.max(88, Math.min(170, w * 0.1));
    /* Keep clear of Kris.Dev / Menu header controls */
    topSafe = Math.max(64, Math.min(100, h * 0.1));
    bottomSafe = 28;
    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);
    canvas.style.width = `${w}px`;
    canvas.style.height = `${h}px`;
    buildRails();
  }

  function buildRails() {
    const make = () => {
      const ticks = [];
      const count = 10 + ((Math.random() * 4) | 0);
      for (let i = 0; i < count; i++) {
        ticks.push({
          y: rand(0.08, 0.92),
          len: rand(16, 36),
          phase: Math.random() * Math.PI * 2,
        });
      }
      return {
        dashOffset: Math.random() * 40,
        pulse: Math.random() * Math.PI * 2,
        ticks,
      };
    };
    rails.left = make();
    rails.right = make();
  }

  function gutterX(side, t = 0.5) {
    if (side === 'left') return gutter * (0.18 + t * 0.62);
    return w - gutter * (0.18 + t * 0.62);
  }

  function spawnEntity() {
    if (entities.length >= 22) return;
    const side = Math.random() < 0.5 ? 'left' : 'right';
    const type = pick([
      'frame', 'frame', 'frame', 'glyph', 'label', 'label', 'dots',
      'cross', 'block', 'arrow', 'coords', 'noise'
    ]);
    const life = rand(2.8, 7);
    const base = {
      side,
      type,
      x: gutterX(side, rand(0.12, 0.88)),
      y: rand(topSafe + 24, h - bottomSafe - 24),
      age: 0,
      life,
      seed: Math.random() * 1000,
      driftX: rand(-4, 4),
      driftY: rand(-8, 8),
      size: rand(16, 44),
      rot: (Math.random() < 0.25 ? pick([-90, 90, 180]) : 0) * Math.PI / 180,
      text: '',
      alphaPeak: rand(0.48, 0.78),
    };

    if (type === 'glyph') base.text = pick(GLYPHS.split(''));
    if (type === 'label') base.text = pick(LABELS);
    if (type === 'coords') {
      base.text = `${rand(0, 1).toFixed(2)},${rand(0, 1).toFixed(2)}`;
    }
    if (type === 'arrow') base.text = pick(['▸', '▹', '▾', '▴', '›', '‹']);
    if (type === 'frame') {
      base.w = rand(28, 64);
      base.h = rand(22, 52);
    }
    if (type === 'block') {
      base.w = rand(8, 20);
      base.h = rand(10, 28);
    }
    if (type === 'noise') {
      base.bits = Array.from({ length: 6 + ((Math.random() * 6) | 0) }, () => ({
        dx: rand(-22, 22),
        dy: rand(-26, 26),
        s: rand(1.5, 3.5),
      }));
    }

    entities.push(base);

    if (Math.random() < 0.3 && scanners.length < 3) {
      scanners.push({
        side,
        y: rand(topSafe + 20, h - bottomSafe - 20),
        speed: rand(36, 80) * (Math.random() < 0.5 ? 1 : -1),
        life: rand(1.6, 3),
        age: 0,
        alphaPeak: rand(0.28, 0.5),
      });
    }
  }

  function easeAlpha(age, life, peak) {
    const t = age / life;
    if (t < 0.15) return peak * (t / 0.15);
    if (t > 0.78) return peak * Math.max(0, 1 - (t - 0.78) / 0.22);
    return peak;
  }

  function drawRails(now) {
    ['left', 'right'].forEach((side) => {
      const rail = rails[side];
      const x = gutterX(side, 0.35);
      const pulse = 0.38 + 0.1 * Math.sin(now / 1100 + rail.pulse);

      ctx.save();
      ctx.strokeStyle = rgba(pulse);
      ctx.lineWidth = 1.25;
      ctx.setLineDash([5, 3]);
      ctx.lineDashOffset = -((now / 55) + rail.dashOffset);
      const y0 = topSafe;
      const y1 = h - bottomSafe;
      ctx.beginPath();
      ctx.moveTo(x, y0);
      ctx.lineTo(x, y1);
      ctx.stroke();
      ctx.setLineDash([]);

      const cap = 10;
      ctx.strokeStyle = rgba(pulse + 0.12);
      [[y0, 1], [y1, -1]].forEach(([cy, dir]) => {
        ctx.beginPath();
        ctx.moveTo(x - cap, cy);
        ctx.lineTo(x + cap, cy);
        ctx.moveTo(x, cy);
        ctx.lineTo(x, cy + dir * cap);
        ctx.stroke();
        ctx.fillStyle = rgba(Math.min(0.85, pulse + 0.25));
        ctx.fillRect(Math.round(x) - 2, Math.round(cy) - 2, 4, 4);
      });

      rail.ticks.forEach((tick, i) => {
        const ty = topSafe + tick.y * (y1 - y0);
        const twinkle = 0.28 + 0.12 * Math.sin(now / 700 + tick.phase + i);
        ctx.strokeStyle = rgba(twinkle);
        ctx.lineWidth = 1.1;
        ctx.beginPath();
        if (side === 'left') {
          ctx.moveTo(x, ty);
          ctx.lineTo(x + tick.len, ty);
        } else {
          ctx.moveTo(x, ty);
          ctx.lineTo(x - tick.len, ty);
        }
        ctx.stroke();
      });
      ctx.restore();
    });
  }

  function drawFrame(e, a, x, y) {
    const bw = e.w;
    const bh = e.h;
    ctx.strokeStyle = rgba(a);
    ctx.lineWidth = 1.25;
    ctx.strokeRect(x - bw / 2, y - bh / 2, bw, bh);
    ctx.fillStyle = rgba(Math.min(0.9, a + 0.15));
    [
      [x - bw / 2, y - bh / 2],
      [x + bw / 2, y - bh / 2],
      [x + bw / 2, y + bh / 2],
      [x - bw / 2, y + bh / 2],
    ].forEach(([cx, cy]) => {
      ctx.fillRect(Math.round(cx) - 2, Math.round(cy) - 2, 4, 4);
    });
  }

  function drawEntity(e, now) {
    const a = easeAlpha(e.age, e.life, e.alphaPeak);
    if (a <= 0.01) return;

    const t = e.age / e.life;
    const x = e.x + e.driftX * t;
    const y = e.y + e.driftY * t;

    ctx.save();
    ctx.translate(x, y);
    if (e.rot) ctx.rotate(e.rot);

    switch (e.type) {
      case 'frame':
        drawFrame(e, a, 0, 0);
        break;
      case 'block':
        ctx.fillStyle = rgba(a);
        ctx.fillRect(-e.w / 2, -e.h / 2, e.w, e.h);
        break;
      case 'glyph':
      case 'label':
      case 'coords':
      case 'arrow':
        ctx.font = e.type === 'glyph' || e.type === 'arrow'
          ? '14px ui-monospace, SFMono-Regular, Menlo, Consolas, monospace'
          : FONT;
        ctx.fillStyle = rgba(a);
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(e.text, 0, 0);
        break;
      case 'dots': {
        for (let i = 0; i < 3; i++) {
          const pulse = 0.45 + 0.55 * (0.5 + 0.5 * Math.sin(now / 320 + e.seed + i * 1.7));
          ctx.fillStyle = rgba(a * pulse);
          ctx.beginPath();
          ctx.arc((i - 1) * 10, 0, 2.2, 0, Math.PI * 2);
          ctx.fill();
        }
        break;
      }
      case 'cross': {
        const s = e.size * 0.4;
        ctx.strokeStyle = rgba(a);
        ctx.lineWidth = 1.25;
        ctx.beginPath();
        ctx.moveTo(-s, 0); ctx.lineTo(s, 0);
        ctx.moveTo(0, -s); ctx.lineTo(0, s);
        ctx.stroke();
        ctx.strokeRect(-3, -3, 6, 6);
        break;
      }
      case 'noise': {
        ctx.fillStyle = rgba(a);
        e.bits.forEach((b) => {
          ctx.fillRect(b.dx, b.dy, b.s, b.s);
        });
        break;
      }
      default:
        break;
    }
    ctx.restore();
  }

  function drawScanner(s, dt) {
    s.age += dt;
    s.y += s.speed * dt;
    const a = easeAlpha(s.age, s.life, s.alphaPeak);
    if (a <= 0.01 || s.age >= s.life) return false;

    const x0 = s.side === 'left' ? 10 : w - gutter;
    const x1 = s.side === 'left' ? gutter - 10 : w - 10;
    ctx.save();
    ctx.strokeStyle = rgba(a);
    ctx.lineWidth = 1.25;
    ctx.setLineDash([5, 3]);
    ctx.beginPath();
    ctx.moveTo(x0, s.y);
    ctx.lineTo(x1, s.y);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.fillStyle = rgba(Math.min(0.9, a + 0.1));
    ctx.fillRect(Math.round((x0 + x1) / 2) - 2, Math.round(s.y) - 2, 4, 4);
    ctx.restore();
    return true;
  }

  function drawCornerMarks() {
    // Bottom corners only — top corners stay clear for brand / menu
    const m = 20;
    const len = 18;
    const y = h - bottomSafe;
    ctx.strokeStyle = rgba(0.32);
    ctx.lineWidth = 1.25;
    const corners = [
      [m, y, 1, -1],
      [w - m, y, -1, -1],
    ];
    corners.forEach(([x, cy, sx, sy]) => {
      ctx.beginPath();
      ctx.moveTo(x, cy + sy * len);
      ctx.lineTo(x, cy);
      ctx.lineTo(x + sx * len, cy);
      ctx.stroke();
      ctx.fillStyle = rgba(0.45);
      ctx.fillRect(Math.round(x) - 2, Math.round(cy) - 2, 4, 4);
    });
  }

  function tick(now) {
    raf = requestAnimationFrame(tick);
    if (!active || !visible) return;

    const dt = Math.min(0.05, (now - last) / 1000) || 0.016;
    last = now;

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, w, h);

    const washTop = topSafe;
    const washH = h - topSafe - bottomSafe;
    const wash = ctx.createLinearGradient(0, 0, gutter, 0);
    wash.addColorStop(0, rgba(0.07));
    wash.addColorStop(1, rgba(0));
    ctx.fillStyle = wash;
    ctx.fillRect(0, washTop, gutter, washH);
    const washR = ctx.createLinearGradient(w, 0, w - gutter, 0);
    washR.addColorStop(0, rgba(0.07));
    washR.addColorStop(1, rgba(0));
    ctx.fillStyle = washR;
    ctx.fillRect(w - gutter, washTop, gutter, washH);

    drawCornerMarks();
    drawRails(now);

    spawnTimer -= dt;
    if (spawnTimer <= 0) {
      spawnEntity();
      if (Math.random() < 0.55) spawnEntity();
      if (Math.random() < 0.25) spawnEntity();
      spawnTimer = rand(0.2, 0.75);
    }

    entities = entities.filter((e) => {
      e.age += dt;
      if (e.age >= e.life) return false;
      drawEntity(e, now);
      return true;
    });

    scanners = scanners.filter((s) => drawScanner(s, dt));
  }

  function setActive(on) {
    active = on;
    canvas.hidden = !on;
    if (on) {
      last = performance.now();
      if (!raf) raf = requestAnimationFrame(tick);
    }
  }

  function onMedia() {
    const ok = window.matchMedia(DESKTOP_MQ).matches && !window.matchMedia(REDUCE_MQ).matches;
    if (ok) {
      resize();
      setActive(true);
    } else {
      setActive(false);
      entities = [];
      scanners = [];
      if (raf) {
        cancelAnimationFrame(raf);
        raf = 0;
      }
    }
  }

  resize();
  for (let i = 0; i < 10; i++) spawnEntity();
  spawnTimer = rand(0.15, 0.45);
  raf = requestAnimationFrame(tick);

  window.addEventListener('resize', () => {
    if (!active) return;
    resize();
  }, { passive: true });

  document.addEventListener('visibilitychange', () => {
    visible = !document.hidden;
    if (visible) last = performance.now();
  });

  window.matchMedia(DESKTOP_MQ).addEventListener('change', onMedia);
  window.matchMedia(REDUCE_MQ).addEventListener('change', onMedia);

  const shell = document.querySelector('.pm-shell');
  if (shell) {
    const obs = new MutationObserver(() => {
      if (shell.dataset.menuState !== 'closed') {
        entities = [];
        scanners = [];
      }
    });
    obs.observe(shell, { attributes: true, attributeFilter: ['data-menu-state'] });
  }
})();
