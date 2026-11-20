C.hem = '#B91C1C'; C.hemSoft = '#FEE2E2';
function rbc(cx, cy, r, pale = 0, col = '#DC2626') {
  ctx.save(); ctx.beginPath(); ctx.arc(cx, cy, r, 0, 7); ctx.fillStyle = col; ctx.fill();
  ctx.beginPath(); ctx.arc(cx, cy, r * (0.35 + pale * .35), 0, 7); ctx.fillStyle = pale ? '#FECACA' : '#EF4444'; ctx.fill(); ctx.restore();
}
function dropIcon(cx, cy, s = 1) { ctx.save(); ctx.translate(cx, cy); ctx.scale(s, s); ctx.beginPath(); ctx.moveTo(0, -60); ctx.bezierCurveTo(45, -5, 45, 50, 0, 55); ctx.bezierCurveTo(-45, 50, -45, -5, 0, -60); ctx.fillStyle = C.hem; ctx.fill(); ctx.restore(); }
function feIcon(cx, cy, s = 1) { ctx.save(); ctx.translate(cx, cy); ctx.scale(s, s); ctx.beginPath(); ctx.arc(0, 0, 60, 0, 7); ctx.fillStyle = '#EA580C'; ctx.fill(); txt('Fe', 0, 4, { size: 64, weight: 900, color: '#fff' }); ctx.restore(); }
function bigPanel(t, Q, list, x, y, w, h, color) {
  let cur = null, k0 = 0; list.forEach(([li, img]) => { if (t >= Q(li) - .2 && ART[img]) { cur = img; k0 = Q(li) - .2; } });
  list.forEach(([li, img]) => freg(li, x, y, w, h));
  if (!cur) return;
  const k = eo(P(t, k0, .6));
  ctx.save(); ctx.globalAlpha *= k; card(x, y, w, h, { fill: '#fff', stroke: color, lw: 5, r: 28 }); pic(cur, x + 16, y + 16, w - 32, h - 32); ctx.restore();
}
function banner(t, k, text, color, y = 140) { fadeUp(k, () => { ctx.font = `900 40px ${FONT}`; const w = Math.min(1700, ctx.measureText(text).width + 120); card(W / 2 - w / 2, y, w, 100, { fill: '#fff', r: 50 }); txt(text, W / 2, y + 51, { size: 40, weight: 900, color }); }, 12); }

SC.intro = (t, D, Q) => {
  header('Anemia · Part 2', C.hem);
  if (t < Q(1) - .3) { partTitle(t, 'Anemia · Part 2', 'Iron deficiency anemia (IDA)', C.hem, (x, y) => feIcon(x, y, 1)); return; }
  fadeUp(P(t, Q(1) - .3, .5), () => txt('Pichhla part ek line mein', W / 2, 170, { size: 56, weight: 900, color: C.navy }));
  freg(1, 140, 140, 1640, 420); freg(2, 400, 600, 1120, 380);
  [['Anemia = Hb kam', C.hem], ['MCV < 80 → microcytic', C.kid], ['Pica / koilonychia → IRON deficiency', C.warn]].forEach(([s, c], i) => fadeUp(P(t, Q(1) + i * 2.2, .5), () => { const y = 240 + i * 105; card(340, y, 1240, 88, { fill: '#fff', r: 44 }); rr(340, y, 14, 88, 7); ctx.fillStyle = c; ctx.fill(); txt(s, W / 2, y + 45, { size: 40, weight: 900, color: c }); }, 12));
  pop(P(t, Q(2), .6), W / 2, 760, () => { feIcon(W / 2, 700, 1); txt('Ab: IDA detail mein · exam mein sabse zyada', W / 2, 860, { size: 48, weight: 900, color: C.hem }); });
};

SC.b4 = (t, D, Q) => {
  header('Topic 4 · IDA kyun hota hai', C.hem);
  if (t < Q(1) - .3) { partTitle(t, 'Topic 4', 'IDA kyun hota hai', C.hem, (x, y) => feIcon(x, y, .9)); return; }
  if (t < Q(3) - .3) {
    banner(t, P(t, Q(1) - .3, .5), 'Iron itna kam → marrow kaafi Hb na bana sake', C.hem);
    freg(1, 160, 140, 1600, 100);
    fadeUp(P(t, Q(2), .5), () => { card(360, 290, 1200, 640, { fill: '#fff', stroke: C.hem, lw: 5 }); if (ART.heme) pic('heme', 380, 310, 700, 600); txt('Hb ke beech IRON', 1320, 520, { size: 44, weight: 900, color: '#EA580C' }); txt('Iron nahi → Hb nahi', 1320, 600, { size: 40, weight: 900, color: C.hem }); txt('4 raaste ↓', 1320, 690, { size: 40, weight: 900, color: C.navy }); });
    freg(2, 360, 290, 1200, 640); return;
  }
  const boxes = [[3, 'BLOOD LOSS', 'Sabse important', ['GI bleed (colon cancer)', 'Menstruation (young F)', 'Hematuria'], 'bleed', C.hem], [4, 'DEMAND ↑', '', ['Pregnancy', '(baby ko bhi iron)'], 'preg', C.obs], [5, 'ABSORPTION ↓', '', ['Celiac · atrophic gastritis', 'H. pylori · bariatric'], 'celiac', C.kid], [6, 'NUTRITION', '', ['Khaane mein iron kam', 'Sirf COW MILK → IDA'], 'cowmilk', C.ok]];
  boxes.forEach(([li, n, sub, rows, img, c], i) => {
    const x = 90 + (i % 2) * 880, y = 130 + Math.floor(i / 2) * 390;
    freg(li, x, y, 860, 370);
    fadeUp(P(t, Q(li), .5), () => {
      card(x, y, 860, 370, { fill: '#fff', stroke: c, lw: 5 });
      if (ART[img]) pic(img, x + 18, y + 18, 440, 334);
      txt(n, x + 660, y + 70, { size: 40, weight: 900, color: c }); if (sub) txt(sub, x + 660, y + 115, { size: 26, weight: 800, color: C.sub });
      rows.forEach((r, j) => txt(r, x + 660, y + 175 + j * 56, { size: 26, weight: 900, color: C.ink, alpha: P(t, Q(li) + .8 + j * 1.6, .4) }));
    }, 14);
  });
  neoRemember(t, P(t, Q(7), .5), '4 raaste: blood loss · demand · absorption · nutrition | Young F → menses | Cow milk → IDA', C.hem);
};

SC.b5a = (t, D, Q) => topicScene(t, Q, { hdr: 'Topic 5 · IDA ka diagnosis', part: 'Topic 5', title: 'IDA ka diagnosis', color: C.kid, icon: (x, y) => { rbc(x - 40, y, 26, .6); rbc(x + 30, y + 10, 22, .6); }, items: [
  [1, 0, 'CBC', 'MICROCYTIC + HYPOCHROMIC', C.hem, null],
  [2, 0, 'Serum iron ↓ · body ka iron store', 'FERRITIN ↓ (best test)', C.kid, null],
  [3, 0, 'Iron pakadne ki capacity', 'TIBC ↑', C.blue, null],
  [4, 0, 'Retic ↓ (raw material nahi)', 'RDW ↑ (sizes alag)', C.warn, null],
  [5, 0, 'Blood film', 'PENCIL CELLS', C.ok, null],
], bopts: { cols: 1, ch: 140, gap: 156, y0: 160, cw: 1000 }, before: () => bigPanel(t, Q, [[1, 'micro'], [2, 'ferritin'], [3, 'tibc'], [5, 'pencil']], 1120, 170, 720, 560, C.kid) });

SC.b5b = (t, D, Q) => {
  header('Topic 5 · IDA vs thalassemia · elderly', C.kid);
  freg(0, 90, 150, 860, 700); freg(1, 90, 150, 860, 700);
  fadeUp(P(t, 0, .5), () => {
    card(90, 150, 860, 700, { fill: '#fff', stroke: C.kid, lw: 5 });
    txt('MENTZER INDEX', 520, 220, { size: 46, weight: 900, color: C.kid });
    txt('MCV ÷ RBC count', 520, 320, { size: 52, weight: 900, color: C.ink });
  }, 14);
  fadeUp(P(t, Q(1), .5), () => {
    card(140, 420, 760, 170, { fill: C.hemSoft, r: 24 }); txt('> 13', 300, 505, { size: 70, weight: 900, color: C.hem }); txt('IRON deficiency', 640, 505, { size: 40, weight: 900, color: C.hem });
    card(140, 620, 760, 170, { fill: C.kidSoft, r: 24 }); txt('< 13', 300, 705, { size: 70, weight: 900, color: C.kid }); txt('Thalassemia TRAIT', 640, 705, { size: 40, weight: 900, color: C.kid });
  }, 14);
  freg(2, 1000, 150, 830, 700); freg(3, 1000, 150, 830, 700);
  fadeUp(P(t, Q(2), .5), () => {
    card(1000, 150, 830, 700, { fill: '#fff', stroke: C.warn, lw: 5 });
    txt('Elderly mein IDA?', 1415, 215, { size: 44, weight: 900, color: C.warn });
    txt('Khoon kahan ja raha hai? → colon cancer?', 1415, 270, { size: 28, weight: 800, color: C.sub });
    if (ART.colono) pic('colono', 1030, 300, 770, 420);
    txt('Adult man / postmenopausal F → COLONOSCOPY', 1415, 790, { size: 30, weight: 900, color: C.hem, alpha: P(t, Q(3), .5) });
  }, 14);
  neoRemember(t, P(t, Q(4), .5), 'Ferritin ↓ · TIBC ↑ · RDW ↑ · pencil cells · Mentzer > 13 · elderly → colonoscopy', C.kid);
};

SC.b6 = (t, D, Q) => topicScene(t, Q, { hdr: 'Topic 6 · IDA ka management', part: 'Topic 6', title: 'IDA ka management', color: C.ob2, icon: (x, y) => feIcon(x, y, .9), items: [
  [1, 0, 'Rule 1', 'CAUSE dhoondho (sirf iron nahi)', C.hem, null],
  [2, 0, 'Rule 2', 'Hamesha ORAL iron se shuru', C.ok, null],
  [3, 0, 'Intolerance · malabsorption/IBD · gastritis · CKD', 'IV IRON (dialysis!)', C.blue, null],
  [4, 0, 'Rule 3 (trap): severe anemia ≠ IV iron', 'HF / MI → TRANSFUSION', C.warn, null],
  [5, 0, 'IV iron: oral fail / CI', 'Transfusion: jaan ko khatra', C.kid, null],
  [6, 0, 'Rule 4: oral iron diya, Hb nahi sudhra', 'CELIAC test', C.ob2, null],
], bopts: { cols: 1, ch: 126, gap: 131, y0: 138, cw: 1000 }, rem: [7, 'Pehle ORAL · CKD/dialysis → IV · severe symptoms → transfusion · oral fail → celiac'], before: () => bigPanel(t, Q, [[2, 'oraliron'], [3, 'ivdial'], [4, 'transf'], [6, 'celiac']], 1120, 170, 720, 560, C.ob2) });

SC.b7 = (t, D, Q) => topicScene(t, Q, { hdr: 'Topic 7 · IDA ke MCQs', part: 'Topic 7', title: 'IDA ke MCQs', color: C.warn, icon: (x, y) => txt('?', x, y + 10, { size: 160, weight: 900, color: C.warn }), items: [
  [1, 0, 'Khilone chabata · deewar ka paint khaata', 'PICA → IDA', C.hem, null],
  [2, 0, 'Pregnant · pehle se IDA · Hb 10 microcytic', 'IDA (physiological = normocytic)', C.obs, null],
  [3, 0, '9 saal · ferritin ↓ · TIBC ↑ · iron kaise?', 'ORAL (koi CI nahi)', C.ok, null],
  [4, 0, 'Sirf cow milk · microcytic', 'IDA', C.kid, null],
  [5, 0, 'RA + ibuprofen → epigastric pain', 'PARACETAMOL (NSAID → ulcer → IDA)', C.warn, null],
], bopts: { cols: 1, ch: 140, gap: 156, y0: 160, cw: 1000 }, rem: [6, 'Pica → IDA · cow milk → IDA · no CI → oral · NSAID pain → paracetamol'], before: () => bigPanel(t, Q, [[1, 'pica_child'], [2, 'preg'], [4, 'cowmilk'], [5, 'ulcer']], 1120, 170, 720, 560, C.warn) });

SC.recap = (t, D, Q) => {
  header('Part 2 · Ek baar dobara', C.hem);
  recapRows(t, Q, 'Ek baar dobara', [
    [0, '4 raaste · young F · bachcha', 'Blood loss · demand · absorption · nutrition', C.hem, null],
    [1, 'Lab', 'Ferritin ↓ · TIBC ↑ · RDW ↑ · pencil · Mentzer > 13', C.kid, null],
    [2, 'Elderly mein IDA', 'COLONOSCOPY', C.warn, null],
    [3, 'Treatment', 'Oral → IV (CKD) → transfusion · fail → celiac', C.ob2, null],
  ], 230, 170);
};
SC.end = (t, D) => { fadeUp(P(t, 0, .6), () => { feIcon(W / 2, 380, 1.4); txt('Anemia · Part 2', W / 2, 600, { size: 72, weight: 900, color: C.navy }); }); fadeUp(P(t, .8, .6), () => txt('For education only · Follow current guidelines', W / 2, 700, { size: 32, weight: 600, color: C.mute })); };
