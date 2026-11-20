function wrongRight(t, y, wrong, right, tw, tr, noteW, noteR) {
  const pw = sentCard(140, y, 1500, 110, wrong, P(t, tw, .5), { size: 38, fill: '#FEF2F2', stroke: C.bad });
  cross(1720, y + 55, 34, C.bad, P(t, tw + 1, .4));
  if (noteW) fadeUp(P(t, tw + 1.5, .5), () => txt(noteW, W / 2, y + 150, { size: 32, weight: 900, color: C.bad }), 8);
  const pr = sentCard(140, y + 210, 1500, 110, right, P(t, tr, .5), { size: 38, fill: '#F0FDF4', stroke: C.ok });
  check(1720, y + 265, 34, C.ok, P(t, tr + 1, .4));
  if (noteR) fadeUp(P(t, tr + 1.5, .5), () => txt(noteR, W / 2, y + 360, { size: 32, weight: 900, color: C.ok }), 8);
}

/* ================= REVISION 2: maths, poem, grammar ================= */
C.m = '#0D9488'; C.poem = '#1D4ED8'; C.q = '#7C3AED'; C.tag = '#EA580C';
const QW = { what: '#0EA5E9', why: '#DC2626', where: '#16A34A', when: '#EA580C', who: '#2563EB', which: '#7C3AED', how: '#DB2777' };

// triangle inequality stick animation: sides a,b (small), c (largest); k 0..1
function triCheck(x0, y, w, a, b, c, k, label) {
  const [s1, s2, L] = [a, b, c].sort((p, q) => p - q);
  const u = w / L, B = L * u, A1 = s1 * u, A2 = s2 * u;
  const ok = s1 + s2 > L;
  const kk = eo(k);
  // base
  ctx.save(); ctx.lineCap = 'round';
  ctx.strokeStyle = C.ink; ctx.lineWidth = 12; ctx.beginPath(); ctx.moveTo(x0, y); ctx.lineTo(x0 + B, y); ctx.stroke();
  let thL, thR;
  if (ok) {
    thL = Math.acos((s1 * s1 + L * L - s2 * s2) / (2 * s1 * L));
    thR = Math.acos((s2 * s2 + L * L - s1 * s1) / (2 * s2 * L));
  } else { thL = 0; thR = 0; }
  const aL = lerp(Math.PI / 2, thL, kk), aR = lerp(Math.PI / 2, thR, kk);
  const pL = pt(x0 + Math.cos(aL) * A1, y - Math.sin(aL) * A1), pR = pt(x0 + B - Math.cos(aR) * A2, y - Math.sin(aR) * A2);
  ctx.strokeStyle = C.blue; ctx.lineWidth = 12; ctx.beginPath(); ctx.moveTo(x0, y); ctx.lineTo(pL.x, pL.y); ctx.stroke();
  ctx.strokeStyle = C.warn; ctx.beginPath(); ctx.moveTo(x0 + B, y); ctx.lineTo(pR.x, pR.y); ctx.stroke();
  [pt(x0, y), pt(x0 + B, y)].forEach(p => { ctx.beginPath(); ctx.arc(p.x, p.y, 10, 0, 7); ctx.fillStyle = C.ink; ctx.fill(); });
  if (k >= 1) {
    if (ok) { ctx.beginPath(); ctx.moveTo(x0, y); ctx.lineTo(pL.x, pL.y); ctx.lineTo(x0 + B, y); ctx.closePath(); ctx.fillStyle = 'rgba(22,163,74,.15)'; ctx.fill(); }
    else { ctx.strokeStyle = C.bad; ctx.lineWidth = 6; ctx.setLineDash([10, 8]); ctx.beginPath(); ctx.moveTo(pL.x, y - 26); ctx.lineTo(pR.x, y - 26); ctx.stroke(); ctx.setLineDash([]); txt(s1 + s2 === L ? 'flat!' : 'gap!', (pL.x + pR.x) / 2, y - 56, { size: 30, weight: 900, color: C.bad }); }
  }
  txt(String(s1), x0 + Math.cos(aL) * A1 / 2 - 24, y - Math.sin(aL) * A1 / 2 - 10, { size: 30, weight: 900, color: C.blue });
  txt(String(s2), x0 + B - Math.cos(aR) * A2 / 2 + 24, y - Math.sin(aR) * A2 / 2 - 10, { size: 30, weight: 900, color: C.warn });
  txt(String(L), x0 + B / 2, y + 40, { size: 30, weight: 900, color: C.ink });
  ctx.restore();
  return ok;
}
function sumLine(cx, y, a, b, c, unit, k) {
  const [s1, s2, L] = [a, b, c].sort((p, q) => p - q), ok = s1 + s2 > L;
  fadeUp(k, () => {
    rich([[`${s1} + ${s2} = ${s1 + s2}`, null], [ok ? '>' : (s1 + s2 === L ? '=' : '<'), ok ? C.ok : C.bad], [`${L}`, null], [ok ? '✓ banega' : '✗ nahi banega', ok ? C.ok : C.bad]], cx, y, { size: 40 });
  }, 10);
}
// poem drawings
function paperBoat(cx, cy, s, color = '#F8FAFC', name = '', t = 0) {
  ctx.save(); ctx.translate(cx, cy + Math.sin(t * 2 + cx) * 4 * s); ctx.rotate(Math.sin(t * 1.5 + cx) * .05); ctx.scale(s, s);
  ctx.beginPath(); ctx.moveTo(-90, 0); ctx.lineTo(90, 0); ctx.lineTo(60, 34); ctx.lineTo(-60, 34); ctx.closePath(); ctx.fillStyle = color; ctx.fill(); ctx.strokeStyle = '#94A3B8'; ctx.lineWidth = 3; ctx.stroke();
  ctx.beginPath(); ctx.moveTo(-50, 0); ctx.lineTo(0, -70); ctx.lineTo(50, 0); ctx.closePath(); ctx.fillStyle = '#E2E8F0'; ctx.fill(); ctx.stroke();
  if (name) txt(name, 0, 18, { size: 16, weight: 900, color: C.ink });
  ctx.restore();
}
function stream(x, y, w, h, t) {
  ctx.save(); rr(x, y, w, h, 20); ctx.fillStyle = '#7DD3FC'; ctx.fill();
  ctx.strokeStyle = 'rgba(255,255,255,.7)'; ctx.lineWidth = 4;
  for (let r = 0; r < 3; r++) { ctx.beginPath(); for (let i = 0; i <= 40; i++) { const u = i / 40, px = x + u * w, py = y + h * (.3 + r * .25) + Math.sin(u * 12 - t * 2 + r) * 6; i ? ctx.lineTo(px, py) : ctx.moveTo(px, py); } ctx.stroke(); }
  ctx.restore();
}
function shiuli(cx, cy, s) {
  ctx.save(); ctx.translate(cx, cy); ctx.scale(s, s);
  for (let i = 0; i < 6; i++) { const a = i / 6 * Math.PI * 2; ctx.beginPath(); ctx.ellipse(Math.cos(a) * 20, Math.sin(a) * 20, 18, 9, a, 0, 7); ctx.fillStyle = '#FFFFFF'; ctx.fill(); ctx.strokeStyle = '#E2E8F0'; ctx.lineWidth = 2; ctx.stroke(); }
  ctx.beginPath(); ctx.arc(0, 0, 9, 0, 7); ctx.fillStyle = '#F97316'; ctx.fill();
  ctx.restore();
}
function cloudSail(cx, cy, s, t, sail = 0) {
  ctx.save(); ctx.translate(cx + Math.sin(t * .6 + cy) * 10, cy); ctx.scale(s, s);
  ctx.fillStyle = '#FFFFFF';
  ctx.beginPath(); ctx.arc(-40, 10, 34, 0, 7); ctx.arc(0, -10, 44, 0, 7); ctx.arc(42, 10, 32, 0, 7); ctx.fill();
  if (sail > 0) { ctx.globalAlpha *= eo(sail); ctx.strokeStyle = '#94A3B8'; ctx.lineWidth = 4; ctx.beginPath(); ctx.moveTo(0, 40); ctx.lineTo(0, -60); ctx.stroke(); paperBoat(0, 70, .55, '#F8FAFC', '', 0); }
  ctx.restore();
}
function nightSky(x, y, w, h, t) {
  ctx.save(); const g = ctx.createLinearGradient(0, y, 0, y + h); g.addColorStop(0, '#0B1033'); g.addColorStop(1, '#1E1B4B');
  rr(x, y, w, h, 26); ctx.fillStyle = g; ctx.fill();
  ctx.save(); rr(x, y, w, h, 26); ctx.clip();
  const r = rng(12); for (let i = 0; i < 60; i++) { const sx = x + r() * w, sy = y + r() * h * .6, tw = .5 + .5 * Math.sin(t * 3 + i); ctx.beginPath(); ctx.arc(sx, sy, 1.5 + r() * 2, 0, 7); ctx.fillStyle = `rgba(255,255,255,${.4 + .6 * tw})`; ctx.fill(); }
  ctx.beginPath(); ctx.arc(x + w - 120, y + 90, 40, 0, 7); ctx.fillStyle = '#FDE68A'; ctx.fill();
  ctx.beginPath(); ctx.arc(x + w - 100, y + 78, 36, 0, 7); ctx.fillStyle = '#0B1033'; ctx.fill();
  ctx.restore(); ctx.restore();
}
function fairy(cx, cy, s, t) {
  ctx.save(); ctx.translate(cx, cy + Math.sin(t * 3 + cx) * 4); ctx.scale(s, s);
  const g = ctx.createRadialGradient(0, 0, 2, 0, 0, 40); g.addColorStop(0, 'rgba(253,224,71,.7)'); g.addColorStop(1, 'rgba(253,224,71,0)'); ctx.fillStyle = g; ctx.beginPath(); ctx.arc(0, 0, 40, 0, 7); ctx.fill();
  ctx.fillStyle = 'rgba(196,181,253,.8)'; const fl = .8 + .2 * Math.sin(t * 20); ctx.beginPath(); ctx.ellipse(-14, -6, 14, 20 * fl, -.5, 0, 7); ctx.ellipse(14, -6, 14, 20 * fl, .5, 0, 7); ctx.fill();
  ctx.beginPath(); ctx.arc(0, -16, 8, 0, 7); ctx.fillStyle = '#FDE68A'; ctx.fill(); rr(-6, -8, 12, 22, 6); ctx.fillStyle = '#F9A8D4'; ctx.fill();
  ctx.restore();
}
function basket(cx, cy, s, t) {
  ctx.save(); ctx.translate(cx, cy); ctx.scale(s, s);
  for (let i = 0; i < 3; i++) { const ph = (t * .4 + i / 3) % 1; ctx.beginPath(); ctx.arc(-20 + i * 20, -20 - ph * 50, 10 + ph * 8, 0, 7); ctx.fillStyle = `rgba(196,181,253,${.8 * (1 - ph)})`; ctx.fill(); }
  ctx.beginPath(); ctx.moveTo(-40, -10); ctx.lineTo(40, -10); ctx.lineTo(30, 30); ctx.lineTo(-30, 30); ctx.closePath(); ctx.fillStyle = '#B45309'; ctx.fill();
  ctx.strokeStyle = '#78350F'; ctx.lineWidth = 3; for (let i = 0; i < 4; i++) { ctx.beginPath(); ctx.moveTo(-36 + i * 2, -2 + i * 9); ctx.lineTo(36 - i * 2, -2 + i * 9); ctx.stroke(); }
  ctx.restore();
}
function qChip(x, y, w, k, size = 40) { // returns width
  const c = QW[w.toLowerCase()] || C.q;
  ctx.font = `900 ${size}px ${FONT}`; const ww = ctx.measureText(w).width + size;
  pop(k, x + ww / 2, y, () => { rr(x, y - size * .8, ww, size * 1.6, size * .8); ctx.fillStyle = c; ctx.fill(); txt(w, x + ww / 2, y + 2, { size, weight: 900, color: '#fff' }); });
  return ww;
}
function tagLine(cx, y, stmt, tag, k, tc = C.tag, size = 42) {
  fadeUp(k, () => rich([[stmt, null, { plain: true }], [tag, tc]], cx, y, { size }), 10);
}


const pt = (x, y) => ({ x, y });
function neoRemember(t, k, text, color = C.neo) {
  pop(k, W / 2, 960, () => { ctx.font = `900 34px ${FONT}`; const w = Math.min(1700, ctx.measureText(text).width + 120); card(W / 2 - w / 2, 922, w, 76, { fill: color, r: 38, blur: 0 }); txt(text, W / 2, 961, { size: 34, weight: 900, color: '#fff' }); });
}

// board: items [li, off, q, a, color, icon, warn]
function board(t, Q, items, opts = {}) {
  const cols = opts.cols || 2, cw = opts.cw || (cols === 2 ? 840 : cols === 1 ? 1740 : 560), ch = opts.ch || 165, y0 = opts.y0 || 160, gap = opts.gap || 182;
  items.forEach((it, i) => {
    const [li, off, q, a, c, icon, warn] = it;
    const col = cols === 2 ? (i < Math.ceil(items.length / 2) ? 0 : 1) : i % cols;
    const row = cols === 2 ? (col ? i - Math.ceil(items.length / 2) : i) : Math.floor(i / cols);
    const x = (opts.x0 || 90) + col * (cw + 30), y = y0 + row * gap;
    const k = P(t, Q(li) + off, .5);
    fadeUp(k, () => {
      card(x, y, cw, ch, { fill: '#fff', r: 24, blur: 10 });
      rr(x, y, 12, ch, 6); ctx.fillStyle = c; ctx.fill();
      if (icon) { ctx.save(); ctx.beginPath(); ctx.arc(x + 95, y + ch / 2, 62, 0, 7); ctx.fillStyle = c + '18'; ctx.fill(); ctx.restore(); icon(x + 95, y + ch / 2); }
      const tx = x + (icon ? 180 : 40), maxW = cw - (icon ? 210 : 70);
      let fs = 28; ctx.font = `700 ${fs}px ${FONT}`; while (ctx.measureText(q).width > maxW && fs > 18) { fs -= 1; ctx.font = `700 ${fs}px ${FONT}`; }
      txt(q, tx, y + 50, { size: fs, weight: 700, color: C.sub, align: 'left' });
      let fa = 40; ctx.font = `900 ${fa}px ${FONT}`; while (ctx.measureText(a).width > maxW && fa > 22) { fa -= 1; ctx.font = `900 ${fa}px ${FONT}`; }
      txt(a, tx, y + 108, { size: fa, weight: 900, color: c, align: 'left' });
      if (warn) { rr(x + cw - 64, y + 12, 52, 44, 12); ctx.fillStyle = C.warn; ctx.fill(); txt('⚠', x + cw - 38, y + 36, { size: 28, weight: 900, color: '#fff' }); txt(warn, x + cw - 20, y + ch - 20, { size: 20, weight: 800, color: '#B45309', align: 'right' }); }
    }, 14);
  });
}

const mid = (a, b) => pt((a.x + b.x) / 2, (a.y + b.y) / 2);
const dist = (a, b) => Math.hypot(a.x - b.x, a.y - b.y);

function seg(a, b, k, color, lw = 8, dash) {
  if (k <= 0) return;
  ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = lw; ctx.lineCap = 'round';
  if (dash) ctx.setLineDash(dash);
  const kk = eo(k);
  ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(lerp(a.x, b.x, kk), lerp(a.y, b.y, kk)); ctx.stroke();
  ctx.restore();
}
function dot(p, r, color, k = 1) {
  if (k <= 0) return;
  ctx.save(); ctx.globalAlpha *= clamp(k * 2);
  ctx.beginPath(); ctx.arc(p.x, p.y, r * eback(k), 0, 7); ctx.fillStyle = color; ctx.fill();
  ctx.restore();
}
// label placed outward from centroid g
function vlabel(p, g, s, color, size = 56, k = 1, off = 50) {
  if (k <= 0) return;
  const d = dist(p, g) || 1, x = p.x + (p.x - g.x) / d * off, y = p.y + (p.y - g.y) / d * off;
  txt(s, x, y, { size, weight: 900, color, alpha: clamp(k * 2) });
}
function ticks(a, b, n, color, k = 1, len = 24) {
  if (k <= 0 || n <= 0) return;
  const m = mid(a, b), ang = Math.atan2(b.y - a.y, b.x - a.x), nx = -Math.sin(ang), ny = Math.cos(ang), tx = Math.cos(ang), ty = Math.sin(ang);
  ctx.save(); ctx.globalAlpha *= eo(k); ctx.strokeStyle = color; ctx.lineWidth = 6; ctx.lineCap = 'round';
  for (let i = 0; i < n; i++) {
    const o = (i - (n - 1) / 2) * 14;
    ctx.beginPath(); ctx.moveTo(m.x + tx * o - nx * len / 2, m.y + ty * o - ny * len / 2); ctx.lineTo(m.x + tx * o + nx * len / 2, m.y + ty * o + ny * len / 2); ctx.stroke();
  }
  ctx.restore();
}
function sideLabel(a, b, g, s, color, k = 1, size = 40, off = 44) {
  if (k <= 0) return;
  const m = mid(a, b), d = dist(m, g) || 1;
  txt(s, m.x + (m.x - g.x) / d * off, m.y + (m.y - g.y) / d * off, { size, weight: 900, color, alpha: clamp(k * 2) });
}
function angArc(v, p1, p2, r, color, k = 1, fill = true) {
  if (k <= 0) return;
  let a1 = Math.atan2(p1.y - v.y, p1.x - v.x), a2 = Math.atan2(p2.y - v.y, p2.x - v.x);
  let d = a2 - a1; while (d > Math.PI) d -= Math.PI * 2; while (d < -Math.PI) d += Math.PI * 2;
  ctx.save(); ctx.globalAlpha *= eo(k);
  if (fill) { ctx.beginPath(); ctx.moveTo(v.x, v.y); ctx.arc(v.x, v.y, r, a1, a1 + d * eo(k), d < 0); ctx.closePath(); ctx.fillStyle = color + '33'; ctx.fill(); }
  ctx.beginPath(); ctx.arc(v.x, v.y, r, a1, a1 + d * eo(k), d < 0); ctx.strokeStyle = color; ctx.lineWidth = 6; ctx.stroke();
  ctx.restore();
}
function centroid(a, b, c) { return pt((a.x + b.x + c.x) / 3, (a.y + b.y + c.y) / 3); }
// simple triangle with optional fill
function triFill(a, b, c, color, k = 1) {
  if (k <= 0) return;
  ctx.save(); ctx.globalAlpha *= eo(k) * .18; ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.lineTo(c.x, c.y); ctx.closePath(); ctx.fillStyle = color; ctx.fill(); ctx.restore();
}
function triOutline(a, b, c, color, k = 1, lw = 8) {
  seg(a, b, clamp(k * 3), color, lw); seg(b, c, clamp(k * 3 - 1), color, lw); seg(c, a, clamp(k * 3 - 2), color, lw);
}
// mini triangle icon for cards (type: 'equi' | 'iso' | 'sca')
function triIcon(cx, cy, s, type, color, k = 1, showTicks = true) {
  const pts = {
    equi: [pt(0, -100), pt(-115, 100), pt(115, 100)],
    iso: [pt(0, -130), pt(-75, 100), pt(75, 100)],
    sca: [pt(60, -90), pt(-130, 100), pt(120, 100)],
  }[type].map(p => pt(cx + p.x * s, cy + p.y * s));
  const [a, b, c] = pts;
  triFill(a, b, c, color, k); triOutline(a, b, c, color, k, 7 * Math.max(.6, s));
  if (showTicks) {
    const n = type === 'equi' ? [1, 1, 1] : type === 'iso' ? [1, 0, 1] : [1, 2, 3];
    // sides: ab, bc, ca
    ticks(a, b, n[0], C.ink, P(k, .8, .2)); ticks(b, c, n[1], C.ink, P(k, .85, .15)); ticks(c, a, n[2], C.ink, P(k, .9, .1));
  }
}

/* ---- tools ---- */
function rulerTool(x, y, w, cmPx, k = 1, cms = 6) {
  if (k <= 0) return;
  ctx.save(); ctx.globalAlpha *= eo(k);
  rr(x - 30, y, w + 60, 80, 10); ctx.fillStyle = '#FDE68A'; ctx.fill(); ctx.strokeStyle = '#CA8A04'; ctx.lineWidth = 3; ctx.stroke();
  ctx.strokeStyle = C.ink;
  for (let i = 0; i <= cms * 10; i++) {
    const px = x + i * cmPx / 10, l = i % 10 === 0 ? 30 : i % 5 === 0 ? 20 : 12;
    if (px > x + w + 1) break;
    ctx.lineWidth = i % 10 === 0 ? 3 : 1.5; ctx.beginPath(); ctx.moveTo(px, y); ctx.lineTo(px, y + l); ctx.stroke();
    if (i % 10 === 0) txt(String(i / 10), px, y + 52, { size: 22, weight: 800, color: C.ink });
  }
  txt('cm', x + w + 10, y + 52, { size: 18, weight: 700, color: C.sub });
  ctx.restore();
}
// compass: needle at c, pencil at p; legs of length L meet at hinge above
function compassTool(c, p, L = 420, alpha = 1) {
  if (alpha <= 0) return;
  const m = mid(c, p), d = dist(c, p), h = Math.sqrt(Math.max(L * L - (d / 2) * (d / 2), 400));
  const ang = Math.atan2(p.y - c.y, p.x - c.x), nx = Math.sin(ang), ny = -Math.cos(ang);
  // hinge on the side "above" the chord (screen-up preferred)
  let hx = m.x + nx * h, hy = m.y + ny * h;
  if (hy > m.y) { hx = m.x - nx * h; hy = m.y - ny * h; }
  ctx.save(); ctx.globalAlpha *= alpha; ctx.lineCap = 'round';
  // needle leg
  ctx.strokeStyle = '#64748B'; ctx.lineWidth = 16; ctx.beginPath(); ctx.moveTo(hx, hy); ctx.lineTo(c.x, c.y); ctx.stroke();
  ctx.strokeStyle = '#0F172A'; ctx.lineWidth = 4; ctx.beginPath(); ctx.moveTo(lerp(hx, c.x, .9), lerp(hy, c.y, .9)); ctx.lineTo(c.x, c.y); ctx.stroke();
  // pencil leg
  ctx.strokeStyle = '#94A3B8'; ctx.lineWidth = 16; ctx.beginPath(); ctx.moveTo(hx, hy); ctx.lineTo(lerp(hx, p.x, .8), lerp(hy, p.y, .8)); ctx.stroke();
  ctx.strokeStyle = '#FACC15'; ctx.lineWidth = 14; ctx.beginPath(); ctx.moveTo(lerp(hx, p.x, .78), lerp(hy, p.y, .78)); ctx.lineTo(lerp(hx, p.x, .96), lerp(hy, p.y, .96)); ctx.stroke();
  ctx.strokeStyle = '#1F2937'; ctx.lineWidth = 5; ctx.beginPath(); ctx.moveTo(lerp(hx, p.x, .96), lerp(hy, p.y, .96)); ctx.lineTo(p.x, p.y); ctx.stroke();
  // hinge + handle
  ctx.beginPath(); ctx.arc(hx, hy, 18, 0, 7); ctx.fillStyle = '#334155'; ctx.fill();
  rr(hx - 7, hy - 56, 14, 40, 6); ctx.fillStyle = '#334155'; ctx.fill();
  ctx.restore();
}
function pencilTool(cx, cy, s, rot = -.6) {
  ctx.save(); ctx.translate(cx, cy); ctx.rotate(rot); ctx.scale(s, s);
  rr(-120, -16, 200, 32, 6); ctx.fillStyle = '#FACC15'; ctx.fill();
  rr(-140, -16, 26, 32, 6); ctx.fillStyle = '#F472B6'; ctx.fill();
  ctx.beginPath(); ctx.moveTo(80, -16); ctx.lineTo(130, 0); ctx.lineTo(80, 16); ctx.closePath(); ctx.fillStyle = '#FDE68A'; ctx.fill();
  ctx.beginPath(); ctx.moveTo(115, -5); ctx.lineTo(130, 0); ctx.lineTo(115, 5); ctx.closePath(); ctx.fillStyle = '#1F2937'; ctx.fill();
  ctx.restore();
}
function arcPath(c, r, a1, a2, k, color, lw = 6) {
  if (k <= 0) return;
  ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = lw; ctx.lineCap = 'round';
  ctx.beginPath(); ctx.arc(c.x, c.y, r, a1, a1 + (a2 - a1) * clamp(k), a2 < a1); ctx.stroke(); ctx.restore();
}

C.m = '#0D9488'; C.sA = '#2563EB'; C.sB = '#EA580C'; C.tri = '#0D9488';
function circDiag(cx, y, ab, r1, r2, k, kc, showPts = true) {
  const A = pt(cx - ab / 2, y), B = pt(cx + ab / 2, y);
  seg(A, B, k, C.ink, 7); dot(A, 10, C.ink, k); dot(B, 10, C.ink, k);
  txt('A', A.x - 30, A.y + 34, { size: 34, weight: 900, color: C.ink, alpha: k }); txt('B', B.x + 30, B.y + 34, { size: 34, weight: 900, color: C.ink, alpha: k });
  if (kc > 0) {
    arcPath(A, r1, 0, Math.PI * 2, kc, C.sA, 5); arcPath(B, r2, Math.PI, Math.PI * 3, kc, C.sB, 5);
  }
  if (!showPts || kc < 1) return null;
  const d = ab;
  if (r1 + r2 < d - .5) return 'none';
  if (Math.abs(r1 + r2 - d) < 1) { const p = pt(A.x + r1, y); dot(p, 14, C.warn, 1); return 'touch'; }
  const a = (r1 * r1 - r2 * r2 + d * d) / (2 * d), h = Math.sqrt(Math.max(0, r1 * r1 - a * a));
  [pt(A.x + a, y - h), pt(A.x + a, y + h)].forEach(p => dot(p, 14, C.warn, 1));
  return 'two';
}
