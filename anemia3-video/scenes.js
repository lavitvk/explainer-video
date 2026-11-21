C.hem = '#B91C1C'; C.hemSoft = '#FEE2E2'; C.acd = '#7C3AED'; C.acdSoft = '#EDE9FE';
function rbc(cx, cy, r, pale = 0, col = '#DC2626') { ctx.save(); ctx.beginPath(); ctx.arc(cx, cy, r, 0, 7); ctx.fillStyle = col; ctx.fill(); ctx.beginPath(); ctx.arc(cx, cy, r * (0.35 + pale * .35), 0, 7); ctx.fillStyle = pale ? '#FECACA' : '#EF4444'; ctx.fill(); ctx.restore(); }
function feIcon(cx, cy, s = 1) { ctx.save(); ctx.translate(cx, cy); ctx.scale(s, s); ctx.beginPath(); ctx.arc(0, 0, 60, 0, 7); ctx.fillStyle = '#EA580C'; ctx.fill(); txt('Fe', 0, 4, { size: 64, weight: 900, color: '#fff' }); ctx.restore(); }
function lockIcon(cx, cy, s = 1) { ctx.save(); ctx.translate(cx, cy); ctx.scale(s, s); ctx.strokeStyle = C.acd; ctx.lineWidth = 14; ctx.beginPath(); ctx.arc(0, -30, 38, Math.PI, 0); ctx.stroke(); rr(-60, -30, 120, 95, 16); ctx.fillStyle = C.acd; ctx.fill(); txt('Fe', 0, 20, { size: 46, weight: 900, color: '#fff' }); ctx.restore(); }
function bigPanel(t, Q, list, x, y, w, h, color) {
  let cur = null, k0 = 0; list.forEach(([li, img]) => { if (t >= Q(li) - .2 && ART[img]) { cur = img; k0 = Q(li) - .2; } });
  list.forEach(([li, img]) => freg(li, x, y, w, h));
  if (!cur) return;
  const k = eo(P(t, k0, .6));
  ctx.save(); ctx.globalAlpha *= k; card(x, y, w, h, { fill: '#fff', stroke: color, lw: 5, r: 28 }); pic(cur, x + 16, y + 16, w - 32, h - 32); ctx.restore();
}

SC.intro = (t, D, Q) => {
  header('Anemia · Part 3', C.acd);
  if (t < Q(1) - .3) { partTitle(t, 'Anemia · Part 3', 'Anemia of chronic disease (ACD)', C.acd, (x, y) => lockIcon(x, y, 1)); return; }
  fadeUp(P(t, Q(1) - .3, .5), () => txt('Pichhla part ek line mein', W / 2, 170, { size: 56, weight: 900, color: C.navy }));
  freg(1, 140, 140, 1640, 420); freg(2, 300, 600, 1320, 380);
  [['IDA → ferritin ↓ · TIBC ↑', C.hem], ['Elderly → colonoscopy', C.warn], ['Pehle ORAL iron', C.ok]].forEach(([s, c], i) => fadeUp(P(t, Q(1) + i * 2.4, .5), () => { const y = 240 + i * 105; card(340, y, 1240, 88, { fill: '#fff', r: 44 }); rr(340, y, 14, 88, 7); ctx.fillStyle = c; ctx.fill(); txt(s, W / 2, y + 45, { size: 40, weight: 900, color: c }); }, 12));
  pop(P(t, Q(2), .6), W / 2, 760, () => { lockIcon(W / 2, 700, 1); txt('IDA jaisa dikhta · par bilkul ALAG', W / 2, 870, { size: 50, weight: 900, color: C.acd }); });
};

SC.c8 = (t, D, Q) => topicScene(t, Q, { hdr: 'Topic 8 · ACD kya hai', part: 'Topic 8', title: 'Anemia of chronic disease kya hai?', color: C.acd, icon: (x, y) => lockIcon(x, y, 1), items: [
  [1, 0, 'Lambi bimari / inflammation ke saath', 'ACD = anemia of chronic INFLAMMATION', C.acd, null],
  [2, 0, 'Iron ki KAMI nahi · store mein BAND', 'Iron hai, par istemaal NAHI', C.hem, null],
  [3, 0, 'Liver → HEPCIDIN', 'Iron cells ke andar LOCK', C.warn, null],
  [4, 0, 'Clinical hook: bacteria ko bhi iron chahiye', 'Iron chhupao = DEFENCE', C.ok, null],
  [5, 0, 'SLE · IBD · vasculitis · scleroderma · infection', 'Lymphoma · myeloma · budhaapa', C.blue, null],
], bopts: { cols: 1, ch: 140, gap: 152, y0: 160, cw: 1000 }, rem: [6, 'ACD: iron ki kami NAHI · store mein band · HEPCIDIN'], before: () => bigPanel(t, Q, [[2, 'locked'], [3, 'hepcidin'], [4, 'bacteria'], [5, 'diseases']], 1120, 170, 720, 560, C.acd) });

SC.c9a = (t, D, Q) => {
  header('Topic 9 · Lab: ACD vs IDA', C.acd);
  if (t < Q(1) - .3) { partTitle(t, 'Topic 9', 'Lab mein farq: ACD vs IDA', C.acd, (x, y) => { feIcon(x - 80, y, .7); lockIcon(x + 80, y, .8); }); return; }
  const X0 = 160, W0 = 1600, cw = [520, 540, 540];
  const rows = [['', 'IDA', 'ACD', 1], ['MCV', 'Microcytic', 'Normo / micro', 1], ['Serum iron', 'LOW ↓', 'LOW ↓', 1], ['FERRITIN', 'LOW ↓', 'NORMAL / HIGH ↑', 2], ['TIBC', 'HIGH ↑', 'NORMAL / LOW ↓', 2]];
  freg(1, X0, 150, W0, 420); freg(2, X0, 470, W0, 260); freg(3, X0, 470, W0, 260); freg(4, X0, 150, W0, 600);
  rows.forEach(([a, b, c, li], i) => {
    const y = 160 + i * 115, k = i === 0 ? P(t, Q(1) - .3, .5) : i < 3 ? P(t, Q(1) + i * 3, .5) : P(t, Q(2) + (i - 3) * 6, .5);
    fadeUp(k, () => {
      const key = i >= 3 && t > Q(3);
      card(X0, y, W0, 100, { fill: i === 0 ? C.navy : key ? '#FEF9C3' : '#fff', r: 20, stroke: key ? C.warn : null, lw: 4 });
      txt(a, X0 + cw[0] / 2, y + 51, { size: 38, weight: 900, color: i === 0 ? '#fff' : C.ink });
      txt(b, X0 + cw[0] + cw[1] / 2, y + 51, { size: 38, weight: 900, color: i === 0 ? '#FECACA' : C.hem });
      txt(c, X0 + cw[0] + cw[1] + cw[2] / 2, y + 51, { size: 38, weight: 900, color: i === 0 ? '#DDD6FE' : C.acd });
    }, 12);
  });
  fadeUp(P(t, Q(3), .5), () => { card(360, 760, 1200, 100, { fill: C.warn, r: 50, blur: 0 }); txt('CHAABI = FERRITIN + TIBC', W / 2, 811, { size: 46, weight: 900, color: '#fff' }); }, 12);
  freg(3, 360, 760, 1200, 100);
  fadeUp(P(t, Q(4) + 6, .5), () => txt('ULTA-ULTA ⇄', W / 2, 940, { size: 56, weight: 900, color: C.acd }), 10);
};

SC.c9b = (t, D, Q) => topicScene(t, Q, { hdr: 'Topic 9 · File ke MCQs', part: 'MCQs', title: 'File ke MCQs', color: C.acd, icon: (x, y) => txt('?', x, y + 10, { size: 160, weight: 900, color: C.acd }), skipTitle: true, items: [
  [0, 0, '45 F · sarcoidosis · thakaan, pallor · Hb ↓ · ferritin ↑', 'Kaun sa anemia?', C.ink, null],
  [1, 0, 'Chronic inflammation + ferritin HIGH', 'ACD', C.acd, null],
  [2, 0, '56 M · PMR · Hb 9.2 · MCV 89 · iron 35 · TIBC 200 · ferritin 385', 'Normocytic · iron ↓ TIBC ↓ ferritin ↑', C.blue, null],
  [3, 0, 'Spherocytes/schistocytes NAHI → hemolysis nahi', 'Chaabi lagao → ACD', C.acd, null],
  [4, 0, 'Thalassemia? (micro, iron panel normal) · B12? (macro)', 'Dono NAHI', C.hem, null],
], bopts: { cols: 1, ch: 140, gap: 152, y0: 150, cw: 1000 }, rem: [5, 'IDA: ferritin ↓ TIBC ↑ · ACD: ferritin N/↑ TIBC N/↓'], before: () => bigPanel(t, Q, [[0, 'sarcoid'], [2, 'pmr'], [3, 'normo']], 1120, 170, 720, 560, C.acd) });

SC.c10 = (t, D, Q) => topicScene(t, Q, { hdr: 'Topic 10 · ACD ka management', part: 'Topic 10', title: 'ACD ka management', color: C.ok, icon: (x, y) => lockIcon(x, y, 1), items: [
  [1, 0, 'Inflammation ↓ → hepcidin ↓ → iron wapas use', 'UNDERLYING bimari treat karo', C.ok, null],
  [2, 0, 'Iron ki kami hai hi nahi', 'Iron dene se zyada fayda NAHI', C.hem, null],
  [3, 0, 'Chronic kidney disease', 'ERYTHROPOIETIN · Hb target 10–12', C.blue, null],
  [4, 0, 'Kyun CKD mein?', 'Kidney hi EPO banati · kharab kidney kam', C.acd, null],
], bopts: { cols: 1, ch: 150, gap: 168, y0: 170, cw: 1000 }, rem: [5, 'ACD → underlying disease · CKD → EPO, Hb 10–12'], before: () => bigPanel(t, Q, [[1, 'treat'], [3, 'epo']], 1120, 170, 720, 560, C.ok) });

SC.recap = (t, D, Q) => {
  header('Part 3 · Ek baar dobara', C.acd);
  recapRows(t, Q, 'Ek baar dobara', [
    [0, 'ACD', 'Iron ki kami NAHI · hepcidin → store mein band', C.acd, null],
    [1, 'Causes', 'SLE · IBD · vasculitis · infection · cancer · old age', C.blue, null],
    [2, 'Lab', 'Iron ↓ dono · ACD: ferritin N/↑, TIBC N/↓ · IDA: ulta', C.warn, null],
    [3, 'MCQ · Rx', 'Sarcoid + ferritin ↑ → ACD · underlying · CKD → EPO', C.ok, null],
  ], 230, 170);
};
SC.end = (t, D) => { fadeUp(P(t, 0, .6), () => { lockIcon(W / 2, 380, 1.5); txt('Anemia · Part 3', W / 2, 600, { size: 72, weight: 900, color: C.navy }); }); fadeUp(P(t, .8, .6), () => txt('For education only · Follow current guidelines', W / 2, 700, { size: 32, weight: 600, color: C.mute })); };
