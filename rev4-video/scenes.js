C.sci = '#0369A1'; C.sciSoft = '#E0F2FE'; C.air = '#38BDF8';
function bigPanel(t, Q, list, x, y, w, h, color) {
  let cur = null, k0 = 0; list.forEach(([li, img]) => { if (t >= Q(li) - .2 && ART[img]) { cur = img; k0 = Q(li) - .2; } });
  list.forEach(([li, img]) => freg(li, x, y, w, h));
  if (!cur) return;
  const k = eo(P(t, k0, .6));
  ctx.save(); ctx.globalAlpha *= k; card(x, y, w, h, { fill: '#fff', stroke: color, lw: 5, r: 28 }); pic(cur, x + 16, y + 16, w - 32, h - 32); ctx.restore();
}
function lungIcon(cx, cy, s = 1) { ctx.save(); ctx.translate(cx, cy); ctx.scale(s, s); ctx.fillStyle = '#F472B6'; [-1, 1].forEach(d => { ctx.beginPath(); ctx.ellipse(d * 48, 10, 40, 70, d * .12, 0, 7); ctx.fill(); }); ctx.fillStyle = '#94A3B8'; ctx.fillRect(-7, -80, 14, 60); ctx.restore(); }
// breathing mechanism: k 0 = exhale (dome, small lungs), 1 = inhale (flat, big lungs)
function chestDiagram(cx, cy, s, k, label, color) {
  ctx.save(); ctx.translate(cx, cy); ctx.scale(s, s);
  const ls = 1 + .22 * k;
  // lungs
  ctx.fillStyle = '#F9A8D4'; ctx.strokeStyle = '#DB2777'; ctx.lineWidth = 4;
  [-1, 1].forEach(d => { ctx.beginPath(); ctx.ellipse(d * 95, 20 + 18 * k, 70 * ls, 120 * ls, d * .1, 0, 7); ctx.fill(); ctx.stroke(); });
  ctx.fillStyle = '#94A3B8'; ctx.fillRect(-10, -190, 20, 110); ctx.beginPath(); ctx.moveTo(0, -90); ctx.lineTo(-60, -60); ctx.moveTo(0, -90); ctx.lineTo(60, -60); ctx.strokeStyle = '#94A3B8'; ctx.lineWidth = 12; ctx.stroke();
  // ribs (rotate outward/up on inhale)
  ctx.strokeStyle = '#A16207'; ctx.lineWidth = 9;
  for (let i = 0; i < 5; i++) { const y = -90 + i * 45 - 14 * k, w = 205 + 25 * k; ctx.beginPath(); ctx.moveTo(-w, y + 30 - 10 * k); ctx.quadraticCurveTo(0, y - 20 - 12 * k, w, y + 30 - 10 * k); ctx.stroke(); }
  // diaphragm: dome (k=0) -> flat & lower (k=1)
  ctx.strokeStyle = '#B91C1C'; ctx.lineWidth = 14; ctx.beginPath(); const dy = 175 + 35 * k; ctx.moveTo(-230, dy + 20); ctx.quadraticCurveTo(0, dy - 110 * (1 - k) - 10, 230, dy + 20); ctx.stroke();
  ctx.restore();
}
function eqRow(t, k, y = 0) {
  const items = [['Glucose', '#CA8A04'], ['+', C.sub], ['O₂', C.air], ['→', C.ink], ['CO₂', '#64748B'], ['+', C.sub], ['H₂O', '#0EA5E9'], ['+', C.sub], ['ENERGY', '#EA580C']];
  rich(items.map(([s, c]) => [s, c === C.sub || c === C.ink ? null : c]), W / 2, y, { size: 56 });
}

SC.title = (t, D, Q) => {
  header('Revision Notes · 20 Nov', C.sci);
  pop(P(t, .1, .7), W / 2, 400, () => { lungIcon(W / 2 - 260, 300, 1.3); triOutline(pt(W / 2 + 150, 380), pt(W / 2 + 380, 380), pt(W / 2 + 210, 200), C.m, 1, 8); txt('Respiration aur Triangle (SAS)', W / 2, 520, { size: 80, weight: 900, color: C.navy }); });
  fadeUp(P(t, Q(1), .5), () => { card(560, 640, 800, 110, { fill: C.sci, r: 55, blur: 0 }); txt('Part 1 · Science: Respiration', W / 2, 696, { size: 44, weight: 900, color: '#fff' }); });
  freg(1, 560, 640, 800, 110);
};

SC.r1 = (t, D, Q) => topicScene(t, Q, { hdr: 'Topic 1 · Respiration kya hai', part: 'Topic 1', title: 'Respiration kya hai?', color: C.sci, icon: (x, y) => lungIcon(x, y, 1), items: [
  [1, 0, 'Glucose + O₂ → toot-ta (CO₂ + paani)', 'ENERGY nikalti hai', C.warn, null],
  [2, 0, 'Chalna · padhna · khelna', 'Kaam: ENERGY banana', C.ok, null],
  [3, 0, 'Equation', 'Glucose + O₂ → CO₂ + H₂O + Energy', C.sci, null],
  [4, 0, 'Respire kyun?', 'Energy paana · CO₂ bahar nikaalna', C.kid, null],
], bopts: { cols: 1, ch: 150, gap: 168, y0: 170, cw: 1000 }, rem: [5, 'Glucose + O₂ → CO₂ + H₂O + Energy · kaam = ENERGY'], before: () => bigPanel(t, Q, [[1, 'cellresp'], [2, 'kids']], 1120, 170, 720, 560, C.sci) });

SC.r2 = (t, D, Q) => {
  header('Topic 2 · Breathing', C.sci);
  if (t < Q(1) - .3) { partTitle(t, 'Topic 2', 'Breathing: inhaling aur exhaling', C.sci, (x, y) => lungIcon(x, y, 1)); return; }
  fadeUp(P(t, Q(1) - .3, .5), () => { card(260, 140, 1400, 100, { fill: '#fff', r: 50 }); txt('O₂ body mein kaise? → BREATHING (2 hisse)', W / 2, 191, { size: 42, weight: 900, color: C.sci }); }, 12);
  freg(1, 260, 140, 1400, 100);
  freg(2, 90, 280, 1740, 560); freg(3, 90, 280, 1740, 660);
  fadeUp(P(t, Q(2), .5), () => {
    card(90, 280, 560, 560, { fill: '#fff', stroke: C.air, lw: 5 }); txt('INHALING', 370, 340, { size: 46, weight: 900, color: C.air }); txt('Saans ANDAR', 370, 395, { size: 32, weight: 800, color: C.sub });
    txt('O₂ andar ↓', 370, 780, { size: 40, weight: 900, color: C.air });
    card(1270, 280, 560, 560, { fill: '#fff', stroke: '#64748B', lw: 5 }); txt('EXHALING', 1550, 340, { size: 46, weight: 900, color: '#64748B' }); txt('Saans BAHAR', 1550, 395, { size: 32, weight: 800, color: C.sub });
    txt('CO₂ bahar ↑', 1550, 780, { size: 40, weight: 900, color: '#64748B' });
    const ph = (Math.sin(t * 1.6) + 1) / 2; chestDiagram(370, 600, .62, 1, '', C.air); chestDiagram(1550, 600, .62, 0, '', '#64748B');
    if (ART.breath) pic('breath', 680, 300, 560, 520);
  }, 14);
  fadeUp(P(t, Q(3), .5), () => { card(460, 870, 1000, 80, { fill: C.sciSoft, r: 40 }); txt('1 inhale + 1 exhale = 1 BREATH', W / 2, 911, { size: 38, weight: 900, color: C.sci }); }, 10);
  neoRemember(t, P(t, Q(4), .5), 'Inhaling → andar, O₂ lena · Exhaling → bahar, CO₂ chhodna', C.sci);
};

SC.r3 = (t, D, Q) => topicScene(t, Q, { hdr: 'Topic 3 · Hawa ka raasta', part: 'Topic 3', title: 'Human respiratory system', color: C.sci, icon: (x, y) => lungIcon(x, y, 1), items: [
  [1, 0, 'Nose · nostrils · nasal cavity · trachea · bronchi · bronchioles · alveoli · diaphragm', 'Hawa ka SAFAR', C.sci, null],
  [2, 0, 'Nose mein 2 chhed', 'NOSTRILS → nasal cavity', C.kid, null],
  [3, 0, 'Nasal cavity mein', 'BAAL + MUCUS (mucus glands)', C.warn, null],
  [4, 0, 'Dhool · pollen · germs atak jaate', 'FILTER + GARAM', C.ok, null],
  [5, 0, 'Trachea (windpipe) → 2 hisse', 'BRONCHI (har lung ke liye)', C.hem || '#B91C1C', null],
  [6, 0, 'Bronchi → chhoti nalikaayein → end par gubbaare', 'BRONCHIOLES → ALVEOLI', '#DB2777', null],
], bopts: { cols: 1, ch: 126, gap: 136, y0: 140, cw: 1000 }, before: () => bigPanel(t, Q, [[1, 'respsys'], [3, 'nasal'], [5, 'trachea'], [6, 'respsys']], 1120, 170, 720, 560, C.sci) });

SC.r3b = (t, D, Q) => {
  header('Topic 3 · Alveoli = gas exchange', C.sci);
  fadeUp(P(t, 0, .5), () => { card(260, 140, 1400, 100, { fill: '#fff', r: 50 }); txt('ALVEOLI sabse important · yahin GAS EXCHANGE', W / 2, 191, { size: 42, weight: 900, color: '#DB2777' }); }, 12);
  freg(0, 260, 140, 1400, 100);
  freg(1, 90, 280, 1740, 600); freg(2, 90, 280, 1740, 600);
  fadeUp(P(t, Q(1) - .2, .5), () => {
    card(90, 280, 1000, 600, { fill: '#fff', stroke: '#DB2777', lw: 5 }); if (ART.alveoli) pic('alveoli', 110, 300, 960, 560);
    card(1130, 280, 700, 600, { fill: '#fff', r: 28 });
    txt('Alveolus → BLOOD', 1480, 380, { size: 40, weight: 900, color: C.air }); txt('O₂ andar jaati', 1480, 435, { size: 32, weight: 800, color: C.sub });
    txt('BLOOD → Alveolus', 1480, 560, { size: 40, weight: 900, color: '#64748B', alpha: P(t, Q(1) + 4, .5) }); txt('CO₂ bahar nikalti', 1480, 615, { size: 32, weight: 800, color: C.sub, alpha: P(t, Q(1) + 4, .5) });
    txt('"Gas exchange ki jagah"', 1480, 780, { size: 38, weight: 900, color: '#DB2777', alpha: P(t, Q(2), .5) });
  }, 14);
  neoRemember(t, P(t, Q(3), .5), 'Nose → nostrils → nasal cavity → trachea → bronchi → bronchioles → ALVEOLI', C.sci);
};

SC.r4 = (t, D, Q) => topicScene(t, Q, { hdr: 'Topic 4 · Lungs aur diaphragm', part: 'Topic 4', title: 'Lungs aur diaphragm', color: '#DB2777', icon: (x, y) => lungIcon(x, y, 1), items: [
  [1, 0, 'Chest cavity · dil ke dono taraf', 'Elastic · muscular · SPONGY thaile', '#DB2777', null],
  [2, 0, 'Khinch ke phail · wapas sikud · suraksha?', 'RIB CAGE (pasliyon ka pinjra)', '#A16207', null],
  [3, 0, 'Lungs ke theek neeche motti muscular deewar', 'DIAPHRAGM', C.hem || '#B91C1C', null],
  [4, 0, 'Chest ko pet se alag karti', 'Breathing mein sabse bada role', C.sci, null],
], bopts: { cols: 1, ch: 150, gap: 168, y0: 170, cw: 1000 }, rem: [5, 'Lungs elastic + spongy · rib cage se surakshit · neeche DIAPHRAGM'], before: () => bigPanel(t, Q, [[1, 'chest']], 1120, 170, 720, 560, '#DB2777') });

SC.r5 = (t, D, Q) => {
  header('Topic 5 · Mechanism of breathing', C.sci);
  if (t < Q(1) - .3) { partTitle(t, 'Topic 5', 'Mechanism of breathing', C.sci, (x, y) => lungIcon(x, y, 1)); return; }
  fadeUp(P(t, Q(1) - .3, .5), () => { card(360, 130, 1200, 90, { fill: '#fff', r: 45 }); txt('Do cheezein hilti hain: DIAPHRAGM + RIB CAGE', W / 2, 176, { size: 38, weight: 900, color: C.sci }); }, 12);
  freg(1, 360, 130, 1200, 90);
  const cols = [[2, 3, 'INHALATION', 'saans andar', C.air, ['Ribs UPAR + BAHAR', 'Diaphragm NEECHE (flat)', 'Volume BADHA', 'Lungs phaile → hawa ANDAR'], 1], [4, 5, 'EXHALATION', 'saans bahar', '#64748B', ['Ribs NEECHE + ANDAR', 'Diaphragm UPAR (dome)', 'Volume KAM', 'Lungs sikude → hawa BAHAR'], 0]];
  cols.forEach(([l1, l2, n, sub, c, rows, inh], i) => {
    const x = 90 + i * 880; freg(l1, x, 250, 860, 640); freg(l2, x, 250, 860, 640);
    fadeUp(P(t, Q(l1), .5), () => {
      card(x, 250, 860, 640, { fill: '#fff', stroke: c, lw: 5 });
      txt(n, x + 430, 305, { size: 46, weight: 900, color: c }); txt(sub, x + 430, 352, { size: 28, weight: 800, color: C.sub });
      const mk = eio(P(t, Q(l1) + 1, 2.5)), k = inh ? mk : 1 - mk; chestDiagram(x + 230, 620, .78, k, '', c);
      rows.forEach((r, j) => txt(r, x + 620, 470 + j * 80, { size: 25, weight: 900, color: j === 3 ? c : C.ink, alpha: P(t, Q(j < 2 ? l1 : l2) + (j % 2) * 2 + .8, .4) }));
    }, 14);
  });
  fadeUp(P(t, Q(6), .5), () => { card(260, 910, 1400, 76, { fill: C.warnSoft, r: 38 }); txt('TRICK: inhalation mein sab BADHTA · exhalation mein sab GHAT-TA', W / 2, 949, { size: 34, weight: 900, color: C.warn }); }, 10);
  if (FREG) freg(6, 260, 910, 1400, 76);
  if (t > Q(7) - .3) { ctx.save(); ctx.globalAlpha *= P(t, Q(7) - .3, .4); ctx.fillStyle = 'rgba(247,249,252,.9)'; ctx.fillRect(0, 900, W, 180); ctx.restore(); }
  neoRemember(t, P(t, Q(7), .5), 'In: ribs upar-bahar, diaphragm neeche, volume ↑ · Ex: ribs neeche-andar, diaphragm upar, volume ↓', C.sci);
};

SC.rrecap = (t, D, Q) => {
  header('Science · Ek baar dobara', C.sci);
  recapRows(t, Q, 'Ek baar dobara · Respiration', [
    [0, 'Respiration', 'Glucose + O₂ → CO₂ + H₂O + Energy', C.warn, null],
    [1, 'Inhaling · exhaling', 'O₂ lena · CO₂ chhodna', C.air, null],
    [2, 'Raasta', 'Nose → nasal cavity (filter) → … → alveoli', C.sci, null],
    [3, 'Lungs', 'Elastic · spongy · rib cage · diaphragm', '#DB2777', null],
    [4, 'In / Ex', 'Ribs upar-bahar, D neeche / ulta', C.kid, null],
  ], 220, 150);
};

SC.m6 = (t, D, Q) => {
  header('Part 2 · Maths · Triangle inequality', C.m);
  if (t < Q(1) - .3) { partTitle(t, 'Part 2 · Maths', 'Triangle inequality aur SAS construction', C.m, (x, y) => triOutline(pt(x - 120, y + 70), pt(x + 120, y + 70), pt(x - 40, y - 80), C.m, 1, 8)); return; }
  fadeUp(P(t, Q(1) - .3, .5), () => { card(140, 170, 1640, 120, { fill: '#F0FDFA', stroke: C.m, lw: 4 }); txt('Kinhi bhi DO sides ka jod > teesri side', W / 2, 231, { size: 48, weight: 900, color: C.ink }); }, 14);
  freg(1, 140, 170, 1640, 120); freg(2, 240, 360, 1440, 330);
  fadeUp(P(t, Q(2), .5), () => { card(240, 360, 1440, 180, { fill: C.m, r: 40 }); txt('AASAAN TRICK', W / 2, 410, { size: 30, weight: 900, color: '#CCFBF1' }); txt('Do CHHOTI jodo → sabse BADI se compare', W / 2, 480, { size: 50, weight: 900, color: '#fff' }); card(460, 580, 1000, 100, { fill: C.badSoft, stroke: C.bad, lw: 4, r: 50 }); txt('BARABAR ho → bhi triangle NAHI', W / 2, 631, { size: 40, weight: 900, color: C.bad }); }, 14);
};

SC.m6b = (t, D, Q) => {
  header('Part 2 · Naye examples', C.m);
  [[0, 1, 100, 100], [1, 3, 6, 9], [2, 1, 1, 5]].forEach(([li, a, b, c], i) => {
    const x = 90 + i * 590; freg(li, x, 170, 560, 640);
    fadeUp(P(t, Q(li), .5), () => {
      const ok = a + b > c && a + c > b && b + c > a, eq = [a, b, c].sort((p, q) => p - q);
      card(x, 170, 560, 640, { fill: '#fff', stroke: ok ? C.ok : C.bad, lw: 5 });
      txt(`${a}, ${b}, ${c}`, x + 280, 245, { size: 60, weight: 900, color: C.navy });
      txt('Chhoti do:', x + 280, 340, { size: 30, weight: 800, color: C.sub }); txt(`${eq[0]} + ${eq[1]} = ${eq[0] + eq[1]}`, x + 280, 400, { size: 50, weight: 900, color: C.ink, alpha: P(t, Q(li) + 2.5, .4) });
      const sym = eq[0] + eq[1] > eq[2] ? '>' : eq[0] + eq[1] === eq[2] ? '=' : '<';
      txt(`${eq[0] + eq[1]} ${sym} ${eq[2]}`, x + 280, 490, { size: 56, weight: 900, color: ok ? C.ok : C.bad, alpha: P(t, Q(li) + 4.5, .4) });
      txt(ok ? '✓ BANEGA' : '✗ NAHI', x + 280, 600, { size: 60, weight: 900, color: ok ? C.ok : C.bad, alpha: P(t, Q(li) + 6, .4) });
      txt(i === 0 ? 'patla, lamba isosceles' : i === 1 ? 'barabar → seedhi line' : '2 < 5', x + 280, 690, { size: 30, weight: 800, color: C.sub, alpha: P(t, Q(li) + 7, .4) });
      if (i === 0) { const k = P(t, Q(li) + 8, 1); triOutline(pt(x + 230, 780), pt(x + 330, 780), pt(x + 280, 720 - 40 * k), C.ok, k, 4); }
      if (i === 1) seg(pt(x + 140, 770), pt(x + 420, 770), P(t, Q(li) + 7, 1), C.bad, 6);
    }, 14);
  });
  neoRemember(t, P(t, Q(3), .5), '1, 100, 100 ✓ · 3, 6, 9 ✗ (jod barabar) · 1, 1, 5 ✗', C.m);
};

SC.m7 = (t, D, Q) => {
  header('Topic 7 · SAS construction', C.m);
  if (t < Q(1) - .3) { partTitle(t, 'Topic 7', 'SAS: do sides + beech ka angle', C.m, (x, y) => triOutline(pt(x - 120, y + 70), pt(x + 120, y + 70), pt(x - 40, y - 80), C.m, 1, 8)); return; }
  fadeUp(P(t, Q(1) - .3, .5), () => { card(240, 160, 1440, 130, { fill: C.m, r: 40 }); txt('S · A · S = SIDE · ANGLE · SIDE', W / 2, 226, { size: 58, weight: 900, color: '#fff' }); }, 14);
  freg(1, 240, 160, 1440, 130); freg(2, 400, 330, 1120, 600);
  fadeUp(P(t, Q(2), .5), () => {
    const A = pt(720, 820), B = pt(1240, 820), Cc = pt(720 + 420 * Math.cos(-Math.PI / 4), 820 + 420 * Math.sin(-Math.PI / 4));
    seg(A, B, 1, C.sA, 9); seg(A, Cc, 1, C.sB, 9); angArc(A, B, Cc, 90, C.warn, P(t, Q(2) + 2, .6));
    txt('A', A.x - 40, A.y + 10, { size: 50, weight: 900, color: C.ink }); txt('B', B.x + 36, B.y + 10, { size: 50, weight: 900, color: C.ink }); txt('C', Cc.x + 30, Cc.y - 20, { size: 50, weight: 900, color: C.ink });
    txt('beech ka angle A', 1300, 700, { size: 40, weight: 900, color: C.warn, alpha: P(t, Q(2) + 2.5, .5) });
  }, 14);
};

const SA4 = pt(560, 800), SB4 = pt(1060, 800);
SC.m7b = (t, D, Q) => {
  header('Topic 7 · AB = 5 cm, AC = 4 cm, ∠A = 45°', C.m);
  fadeUp(P(t, 0, .5), () => { card(140, 130, 1640, 90, { fill: '#fff', r: 45 }); txt('Triangle ABC · AB 5 cm · AC 4 cm · ∠A 45°', W / 2, 176, { size: 40, weight: 900, color: C.m }); }, 12);
  freg(0, 140, 130, 1640, 90);
  const ang = -Math.PI / 4, Cp = pt(SA4.x + 400 * Math.cos(ang), SA4.y + 400 * Math.sin(ang)), far = pt(SA4.x + 600 * Math.cos(ang), SA4.y + 600 * Math.sin(ang));
  const k1 = P(t, Q(1), 1.5), k2 = P(t, Q(2) + 1, 1.2), kl = P(t, Q(2) + 2.5, 1.5), k3 = P(t, Q(3) + 1, 2), k4 = P(t, Q(4), .5), k5 = P(t, Q(5), 1.5);
  [1, 2, 3, 4, 5].forEach(li => freg(li, 400, 230, 960, 680));
  if (t > Q(1) - .3) {
    rulerTool(SA4.x, SA4.y + 26, 500, 100, P(t, Q(1) - .3, .4) * (1 - P(t, Q(2), .5)), 6);
    seg(SA4, SB4, k1, C.ink, 7); dot(SA4, 10, C.ink, k1); dot(SB4, 10, C.ink, k1);
    txt('A', SA4.x - 36, SA4.y + 12, { size: 46, weight: 900, color: C.ink, alpha: k1 }); txt('B', SB4.x + 36, SB4.y + 12, { size: 46, weight: 900, color: C.ink, alpha: k1 });
    txt('5 cm', 810, 860, { size: 34, weight: 900, color: C.ink, alpha: k1 });
    if (k2 > 0) { ctx.save(); ctx.globalAlpha *= k2 * (1 - P(t, Q(3), .5)); ctx.beginPath(); ctx.arc(SA4.x, SA4.y, 150, Math.PI, 0); ctx.closePath(); ctx.fillStyle = 'rgba(250,204,21,.25)'; ctx.fill(); ctx.strokeStyle = '#CA8A04'; ctx.lineWidth = 4; ctx.stroke(); ctx.restore(); }
    angArc(SA4, SB4, far, 80, C.warn, k2); if (k2 > 0) txt('45°', SA4.x + 120, SA4.y - 45, { size: 34, weight: 900, color: C.warn, alpha: k2 });
    seg(SA4, far, kl, C.sB, 5, [12, 10]);
    arcPath(SA4, 400, ang - .25, ang + .25, k3, C.sA, 6);
    if (k3 > 0 && k3 < 1) compassTool(SA4, pt(SA4.x + 400 * Math.cos(lerp(ang - .25, ang + .25, k3)), SA4.y + 400 * Math.sin(lerp(ang - .25, ang + .25, k3))), 300);
    if (k3 > 0) txt('A se 4 cm', SA4.x + 140, SA4.y - 260, { size: 30, weight: 900, color: C.sA, alpha: k3 });
    dot(Cp, 14, C.warn, k4); txt('C', Cp.x + 36, Cp.y - 18, { size: 48, weight: 900, color: C.warn, alpha: k4 });
    seg(SB4, Cp, k5, C.m, 7); seg(SA4, Cp, k5, C.m, 7); triFill(SA4, SB4, Cp, C.tri, P(t, Q(5) + 1.5, .6));
  }
  const steps = [[1, '1 · AB = 5 cm'], [2, '2 · A par 45° · line'], [3, '3 · A se 4 cm arc'], [4, '4 · kaata → C'], [5, '5 · B ko C se jodo']];
  steps.forEach(([li, s], i) => fadeUp(P(t, Q(li), .4), () => { card(1400, 260 + i * 110, 420, 90, { fill: '#fff', r: 45 }); txt(s, 1610, 305 + i * 110, { size: 28, weight: 900, color: C.m }); }, 10));
};

SC.m7c = (t, D, Q) => {
  header('Topic 7 · Dhyan do', C.m);
  freg(0, 140, 160, 1640, 120); freg(1, 140, 310, 1640, 120);
  fadeUp(P(t, 0, .5), () => { card(140, 160, 1640, 120, { fill: '#fff', stroke: C.sA, lw: 4 }); txt('Arc A se · kyunki AC = 4 cm A se shuru', W / 2, 221, { size: 44, weight: 900, color: C.sA }); }, 12);
  fadeUp(P(t, Q(1), .5), () => { card(140, 310, 1640, 120, { fill: '#fff', stroke: C.warn, lw: 4 }); txt('Angle = do di gayi sides ke BEECH wale point par', W / 2, 371, { size: 44, weight: 900, color: C.warn }); }, 12);
  freg(2, 140, 470, 1640, 420); freg(3, 140, 470, 1640, 420);
  fadeUp(P(t, Q(2), .5), () => {
    card(140, 470, 1640, 420, { fill: '#F0FDFA', stroke: C.m, lw: 4 });
    txt('Page 161 · agla sawal: 3 cm · 75° · 7 cm', W / 2, 530, { size: 42, weight: 900, color: C.m });
    [['XY = 3 cm', 0], ['X par 75°', 1], ['X se 7 cm arc', 2], ['kaata point → Y se jodo', 3]].forEach(([s, j]) => fadeUp(P(t, Q(3) + j * 2, .4), () => { const x = 200 + j * 400; card(x, 620, 360, 200, { fill: '#fff', r: 24 }); txt(String(j + 1), x + 180, 670, { size: 44, weight: 900, color: C.m }); txt(s, x + 180, 750, { size: 28, weight: 900, color: C.ink }); }, 8));
  }, 14);
  neoRemember(t, P(t, Q(4), .5), 'SAS: side → siro par beech ka angle → doosri side ka arc → jodo', C.m);
};

SC.mrecap = (t, D, Q) => {
  header('Maths · Ek baar dobara', C.m);
  recapRows(t, Q, 'Ek baar dobara · Maths', [
    [0, 'Inequality', 'Chhoti do > badi · 1,100,100 ✓ · 3,6,9 ✗ · 1,1,5 ✗', C.m, null],
    [1, 'SAS', 'Side → angle → arc → jodo', C.sA, null],
  ], 300, 200);
};

SC.full = (t, D, Q) => {
  header('Sab kuch ek saath', C.navy);
  recapRows(t, Q, 'Ek baar dobara · sab kuch', [
    [0, 'Respiration · breathing', 'Glucose + O₂ → CO₂ + H₂O + E · O₂ andar, CO₂ bahar', C.sci, null],
    [1, 'Hawa ka raasta', 'Nose → nasal cavity (filter, garam) → … → alveoli', '#DB2777', null],
    [2, 'Mechanism', 'In: ribs upar-bahar, D neeche · Ex: ulta', C.kid, null],
    [3, 'Maths', 'Chhoti do > badi · SAS: side, angle, arc, jodo', C.m, null],
  ], 230, 170);
};

SC.rapid = (t, D, Q) => {
  header('Rapid recall · khud se poochho', C.warn);
  if (t < Q(1) - .2) { fadeUp(P(t, 0, .5), () => { txt('Rapid recall', W / 2, 400, { size: 90, weight: 900, color: C.warn }); txt('Sawal padho → ruko → khud jawab bolo', W / 2, 520, { size: 44, weight: 800, color: C.sub }); }); return; }
  qaCards(t, Q, [[1, 2, 'Respiration ka equation?', 'Glucose + O₂ → CO₂ + H₂O + Energy'], [3, 4, 'Gas exchange kahan?', 'ALVEOLI'], [5, 6, 'Nasal cavity mein dhool kaun rokta?', 'BAAL + MUCUS'], [7, 8, 'Inhalation mein diaphragm?', 'NEECHE'], [9, 10, 'Exhalation mein ribs?', 'NEECHE + ANDAR'], [11, 12, 'Lungs ki suraksha?', 'RIB CAGE'], [13, 14, '2, 3, 5 → triangle?', '2 + 3 = 5 · barabar → NAHI'], [15, 16, 'SAS mein "A"?', 'Do sides ke BEECH ka angle'], [17, 18, 'AB 5 · AC 4 · ∠A 45° → arc kahan se?', 'A se, 4 cm']], C.warn);
};

SC.check = (t, D, Q) => {
  header('Notebook ka check', C.bad);
  fadeUp(P(t, 0, .5), () => txt('Notebook ka check', W / 2, 160, { size: 60, weight: 900, color: C.navy }));
  [[1, '1, 100, 100 → "triangle inequality is equal"', '1 + 100 = 101 > 100 → triangle BANEGA'], [2, '3, 6, 9 → "(3 + 6) = 8 < 9"', '3 + 6 = 9 = 9 → barabar → NAHI (conclusion sahi)'], [3, '"Sum of the sides and angles are given"', 'Two sides + INCLUDED angle given = SAS']].forEach(([li, w, r], i) => {
    const y = 230 + i * 220; freg(li, 120, y, 1680, 200);
    fadeUp(P(t, Q(li), .5), () => {
      card(120, y, 1680, 200, { fill: '#fff', r: 24 });
      txt('✗ ' + w, 960, y + 60, { size: 34, weight: 800, color: C.bad }); ctx.save(); ctx.globalAlpha *= P(t, Q(li) + 2, .4); ctx.strokeStyle = C.bad; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(300, y + 60); ctx.lineTo(1620, y + 60); ctx.stroke(); ctx.restore();
      txt('✓ ' + r, 960, y + 140, { size: 38, weight: 900, color: C.ok, alpha: P(t, Q(li) + 3, .5) });
    }, 12);
  });
  fadeUp(P(t, Q(4), .5), () => { card(120, 900, 1680, 110, { fill: C.okSoft, r: 30 }); txt('Science notebook ✓ sahi · equation + "respire kyun" textbook se poora kiya', W / 2, 956, { size: 32, weight: 900, color: C.ok }); }, 10);
  if (FREG) freg(4, 120, 900, 1680, 110);
};
SC.end = (t, D) => { fadeUp(P(t, 0, .6), () => { lungIcon(W / 2, 360, 1.4); txt('Revision · Respiration + SAS', W / 2, 600, { size: 72, weight: 900, color: C.navy }); }); fadeUp(P(t, .8, .6), () => txt('Shabaash! Ab khud se ek baar dohraao', W / 2, 700, { size: 36, weight: 700, color: C.mute })); };
