C.thal = '#0E7490'; C.thalSoft = '#CFFAFE'; C.hem = '#B91C1C';
function bigPanel(t, Q, list, x, y, w, h, color) {
  let cur = null, k0 = 0; list.forEach(([li, img]) => { if (t >= Q(li) - .2 && ART[img]) { cur = img; k0 = Q(li) - .2; } });
  list.forEach(([li, img]) => freg(li, x, y, w, h));
  if (!cur) return;
  const k = eo(P(t, k0, .6));
  ctx.save(); ctx.globalAlpha *= k; card(x, y, w, h, { fill: '#fff', stroke: color, lw: 5, r: 28 }); pic(cur, x + 16, y + 16, w - 32, h - 32); ctx.restore();
}
function targetCell(cx, cy, r) { ctx.save(); ctx.beginPath(); ctx.arc(cx, cy, r, 0, 7); ctx.fillStyle = '#F87171'; ctx.fill(); ctx.beginPath(); ctx.arc(cx, cy, r * .7, 0, 7); ctx.fillStyle = '#FEE2E2'; ctx.fill(); ctx.beginPath(); ctx.arc(cx, cy, r * .32, 0, 7); ctx.fillStyle = '#EF4444'; ctx.fill(); ctx.restore(); }

SC.intro = (t, D, Q) => {
  header('Anemia · Part 4', C.thal);
  if (t < Q(1) - .3) { partTitle(t, 'Anemia · Part 4', 'Beta thalassemia', C.thal, (x, y) => targetCell(x, y, 60)); return; }
  fadeUp(P(t, Q(1) - .3, .5), () => txt('Pichhla part ek line mein', W / 2, 170, { size: 56, weight: 900, color: C.navy }));
  freg(1, 140, 140, 1640, 320); freg(2, 300, 520, 1320, 420);
  fadeUp(P(t, Q(1), .5), () => { card(340, 250, 1240, 100, { fill: '#fff', r: 50 }); txt('ACD → ferritin N/↑ · TIBC N/↓', W / 2, 301, { size: 44, weight: 900, color: '#7C3AED' }); }, 12);
  pop(P(t, Q(2), .6), W / 2, 700, () => { targetCell(W / 2, 640, 70); txt('Iron theek · problem = Hb banane ki MACHINE', W / 2, 800, { size: 48, weight: 900, color: C.thal }); });
};

SC.t11 = (t, D, Q) => topicScene(t, Q, { hdr: 'Topic 11 · Thalassemia kya hai', part: 'Topic 11', title: 'Thalassemia kya hai?', color: C.thal, icon: (x, y) => targetCell(x, y, 60), items: [
  [1, 0, 'Hereditary Hb disorder · Hb = alpha + beta chains', 'HEREDITARY', C.thal, null],
  [2, 0, 'Beta-globin gene kharab · point mutation', 'CHROMOSOME 11 · short arm', C.hem, null],
  [3, 0, 'Beta chain kam → Hb kam', 'MICROCYTIC (chhote, peele cells)', C.warn, null],
  [4, 0, 'Kin logon mein?', 'Mediterranean · Middle East · South Asia', C.blue, null],
], bopts: { cols: 1, ch: 150, gap: 168, y0: 170, cw: 1000 }, rem: [5, 'Beta-globin gene · chromosome 11 short arm · point mutation'], before: () => bigPanel(t, Q, [[1, 'hbchains'], [2, 'chr11'], [4, 'worldmap']], 1120, 170, 720, 560, C.thal) });

SC.t12 = (t, D, Q) => topicScene(t, Q, { hdr: 'Topic 12 · Thalassemia ka diagnosis', part: 'Topic 12', title: 'Thalassemia ka diagnosis', color: C.thal, icon: (x, y) => targetCell(x, y, 60), items: [
  [1, 0, 'CBC · microcytic', 'MCV BAHUT kam (anemia se zyada)', C.thal, null],
  [2, 0, 'Marrow bahut chhote cells bana raha', 'RBC count N / ↑', C.blue, null],
  [3, 0, 'IDA se sabse bada farq', 'IRON PANEL NORMAL', C.ok, null],
  [4, 0, 'Blood film · hemolysis features', 'TARGET CELLS', C.hem, null],
  [5, 0, 'Mentzer = MCV ÷ RBC', '< 13 → THALASSEMIA', C.warn, null],
  [7, 0, 'Confirm', 'Hb ELECTROPHORESIS', '#7C3AED', null],
], bopts: { cols: 1, ch: 126, gap: 131, y0: 138, cw: 1000 }, rem: [8, 'MCV ↓↓ · iron N · target cells · Mentzer < 13 · electrophoresis'], before: () => bigPanel(t, Q, [[4, 'target'], [7, 'electro']], 1120, 170, 720, 560, C.thal) });

SC.t13 = (t, D, Q) => {
  header('Topic 13 · Teen types', C.thal);
  if (t < Q(1) - .3) { partTitle(t, 'Topic 13', 'Thalassemia ke teen types', C.thal, (x, y) => targetCell(x, y, 60)); return; }
  fadeUp(P(t, Q(1) - .3, .5), () => { card(360, 130, 1200, 90, { fill: '#fff', r: 45 }); txt('Farq = kitna gene kharab', W / 2, 176, { size: 40, weight: 900, color: C.thal }); }, 12);
  freg(1, 360, 130, 1200, 90);
  const cols = [[2, 3, 'MAJOR', ['Severe · target cells', 'TRANSFUSION dependent', 'HbA = 0', 'HbF ≤ 95% · HbA2 ≥ 5%'], C.hem], [4, 4, 'INTERMEDIA', ['Moderate anemia', 'Regular transfusion nahi', 'HbA2 ≥ 4%', 'HbF ≤ 50%'], C.warn], [5, 5, 'MINOR (trait)', ['Mild · carrier', 'Aksar symptoms nahi', 'HbA2 ≥ 4%', 'HbF ≤ 5%'], C.ok]];
  cols.forEach(([l1, l2, n, rows, c], i) => {
    const x = 90 + i * 590; freg(l1, x, 250, 560, 560); if (l2 !== l1) freg(l2, x, 250, 560, 560);
    fadeUp(P(t, Q(l1), .5), () => {
      card(x, 250, 560, 560, { fill: '#fff', stroke: c, lw: 5 }); txt(n, x + 280, 310, { size: 46, weight: 900, color: c });
      rows.forEach((r, j) => txt(r, x + 280, 400 + j * 95, { size: 32, weight: 900, color: j >= 2 ? c : C.ink, alpha: P(t, Q(j < 2 ? l1 : l2) + (l1 === l2 ? j * 1.2 : (j - 2) * 2), .4) }));
    }, 14);
  });
  fadeUp(P(t, Q(6), .5), () => { card(360, 830, 1200, 90, { fill: '#7C3AED', r: 45, blur: 0 }); txt('TEENO mein HbA2 ↑', W / 2, 876, { size: 44, weight: 900, color: '#fff' }); }, 10);
  if (FREG) freg(6, 360, 830, 1200, 90);
  if (t > Q(7) - .3 && t < Q(8) - .3) { if (FREG) freg(7, 460, 150, 1000, 760); pop(P(t, Q(7), .5), W / 2, 540, () => { card(460, 150, 1000, 760, { fill: '#fff', stroke: C.hem, lw: 6 }); if (ART.chipmunk) pic('chipmunk', 490, 180, 940, 620); txt('CHIPMUNK FACIES (major)', W / 2, 860, { size: 44, weight: 900, color: C.hem }); }); }
  neoRemember(t, P(t, Q(8), .5), 'Major: transfusion, HbA 0, HbF ≤ 95% · Minor: mild, HbF ≤ 5% · HbA2 ↑ teeno', C.thal);
};

SC.t14 = (t, D, Q) => topicScene(t, Q, { hdr: 'Topic 14 · Transfusion se iron overload', part: 'Topic 14', title: 'Transfusion se iron overload', color: C.hem, icon: (x, y) => targetCell(x, y, 60), skipTitle: true, items: [
  [1, 0, '27 F · thal major · regular transfusion · pet dard · pigmentation · liver ↑ · ferritin ↑', 'Kya ho raha hai?', C.ink, null],
  [2, 0, 'Har unit = iron · bahar nikaalne ka raasta nahi', 'Skin · liver · heart mein jama', C.warn, null],
  [3, 0, 'Secondary hemochromatosis', 'TRANSFUSIONAL IRON OVERLOAD', C.hem, null],
  [4, 0, 'Next step (iron chelation)', 'DEFEROXAMINE', C.ok, null],
  [5, 0, 'Phlebotomy? Interval kam?', 'NAHI · patient anemic · aur iron', C.blue, null],
], bopts: { cols: 1, ch: 140, gap: 152, y0: 150, cw: 1000 }, rem: [6, 'Thal major + transfusion → iron overload → DEFEROXAMINE (phlebotomy nahi)'], before: () => bigPanel(t, Q, [[1, 'transfusion'], [2, 'overload'], [4, 'chelation']], 1120, 170, 720, 560, C.hem) });

SC.recap = (t, D, Q) => {
  header('Part 4 · Ek baar dobara', C.thal);
  recapRows(t, Q, 'Ek baar dobara', [
    [0, 'Gene', 'Beta-globin · chromosome 11', C.thal, null],
    [1, 'Lab', 'MCV ↓↓ · iron N · target · Mentzer < 13 · electrophoresis', C.warn, null],
    [2, 'Types', 'Major: transfusion, HbF ≤ 95% · HbA2 ↑ teeno', C.hem, null],
    [3, 'Iron overload', 'DEFEROXAMINE · phlebotomy nahi', C.ok, null],
  ], 230, 170);
};

SC.quiz = (t, D, Q) => {
  header('Quiz · khud se poochho', C.warn);
  if (t < Q(1) - .2) { fadeUp(P(t, 0, .5), () => { txt('QUIZ', W / 2, 400, { size: 110, weight: 900, color: C.warn }); txt('Sawal suno → ruko → khud jawab socho', W / 2, 530, { size: 44, weight: 800, color: C.sub }); }); return; }
  qaCards(t, Q, [[1, 2, 'Beta-globin gene kis chromosome par?', 'Chromosome 11 (short arm)'], [3, 4, 'Thal vs IDA: sabse bada lab farq?', 'Thal mein IRON PANEL NORMAL'], [5, 6, 'Mentzer < 13 → ?', 'Beta thalassemia (trait)'], [7, 8, 'Confirm karne ka test?', 'Hb ELECTROPHORESIS'], [9, 10, 'Teeno types mein kaun sa Hb ↑?', 'HbA2'], [11, 12, 'HbA = 0, HbF ≤ 95% → kaun sa?', 'Thalassemia MAJOR'], [13, 14, 'Ubhri cheekbones + oonchi forehead?', 'CHIPMUNK FACIES'], [15, 16, 'Thal major · ferritin ↑ · pigmentation · liver ↑ → Rx?', 'DEFEROXAMINE'], [17, 18, 'Phlebotomy kyun nahi?', 'Patient pehle se ANEMIC']], C.warn);
};
SC.end = (t, D) => { fadeUp(P(t, 0, .6), () => { targetCell(W / 2, 380, 90); txt('Anemia · Part 4', W / 2, 600, { size: 72, weight: 900, color: C.navy }); }); fadeUp(P(t, .8, .6), () => txt('For education only · Follow current guidelines', W / 2, 700, { size: 32, weight: 600, color: C.mute })); };
