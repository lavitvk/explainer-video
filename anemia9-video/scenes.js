C.sc = '#BE123C'; C.hem = '#B91C1C'; C.b12 = '#DB2777';
function bigPanel(t, Q, list, x, y, w, h, color) {
  let cur = null, k0 = 0; list.forEach(([li, img]) => { if (t >= Q(li) - .2 && ART[img]) { cur = img; k0 = Q(li) - .2; } });
  list.forEach(([li, img]) => freg(li, x, y, w, h));
  if (!cur) return;
  const k = eo(P(t, k0, .6));
  ctx.save(); ctx.globalAlpha *= k; card(x, y, w, h, { fill: '#fff', stroke: color, lw: 5, r: 28 }); pic(cur, x + 16, y + 16, w - 32, h - 32); ctx.restore();
}
function bigCell(cx, cy, s = 1) { ctx.save(); ctx.translate(cx, cy); ctx.scale(s, s); ctx.beginPath(); ctx.ellipse(0, 0, 92, 70, 0, 0, 7); ctx.fillStyle = '#DC2626'; ctx.fill(); ctx.beginPath(); ctx.ellipse(0, 0, 40, 28, 0, 0, 7); ctx.fillStyle = '#F87171'; ctx.fill(); ctx.restore(); }

SC.intro = (t, D, Q) => {
  header('Anemia · Part 9', C.sc);
  if (t < Q(1) - .3) { partTitle(t, 'Anemia · Part 9', 'Macrocytic anemia aur vitamin B12', C.b12, (x, y) => bigCell(x, y, 1)); return; }
  fadeUp(P(t, Q(1) - .3, .5), () => txt('Pichhla part ek line mein', W / 2, 170, { size: 56, weight: 900, color: C.navy }));
  freg(1, 140, 140, 1640, 320); freg(2, 300, 520, 1320, 420);
  fadeUp(P(t, Q(1), .5), () => { card(220, 250, 1480, 100, { fill: '#fff', r: 50 }); txt('Warm AIHA → steroids · G6PD → bite cells · HS → EMA', W / 2, 301, { size: 40, weight: 900, color: C.sc }); }, 12);
  pop(P(t, Q(2), .6), W / 2, 700, () => { bigCell(W / 2, 640, 1.1); txt('MCV ka teesra dibba: MACROCYTIC (> 95)', W / 2, 800, { size: 50, weight: 900, color: C.b12 }); });
};

SC.m29 = (t, D, Q) => {
  header('Topic 29 · Macrocytic ke do types', C.b12);
  if (t < Q(1) - .3) { partTitle(t, 'Topic 29', 'Macrocytic anemia ke do types', C.b12, (x, y) => bigCell(x, y, 1)); return; }
  fadeUp(P(t, Q(1) - .3, .5), () => { card(260, 130, 1400, 100, { fill: C.b12, r: 50, blur: 0 }); txt('Farq ek cheez: HYPERSEGMENTED neutrophils (≥ 5 lobes)?', W / 2, 181, { size: 40, weight: 900, color: '#fff' }); }, 12);
  freg(1, 260, 130, 1400, 100); freg(2, 260, 130, 1400, 100);
  [[3, 3, 'MEGALOBLASTIC', [['DNA dikkat · cells bade, adhoore', 3], ['Hyperseg neutrophils: HAAN', 3], ['B12 · FOLATE (sirf do)', 3]], 'hyperseg', '#7C3AED'], [4, 5, 'NON-MEGALOBLASTIC', [['DNA theek · hyperseg: NAHI', 4], ['Alcohol · liver · hypothyroid', 5], ['Hemolysis · MDS · MTX/HU/AZT', 5]], 'megalo', '#0E7490']].forEach(([l1, l2, n, rows, img, c], i) => {
    const x = 90 + i * 880; for (let li = l1; li <= l2; li++) freg(li, x, 260, 860, 680);
    fadeUp(P(t, Q(l1), .5), () => {
      card(x, 260, 860, 680, { fill: '#fff', stroke: c, lw: 5 }); txt(n, x + 430, 315, { size: 40, weight: 900, color: c });
      if (ART[img] && !(i === 1)) pic(img, x + 30, 350, 800, 360); if (i === 1 && ART[img]) pic(img, x + 30, 350, 800, 360);
      rows.forEach(([r, li], j) => txt(r, x + 430, 765 + j * 58, { size: 31, weight: 900, color: j === 2 ? c : C.ink, alpha: P(t, Q(li) + (li === l1 && li === 3 ? j * 2 : 0), .4) }));
    }, 14);
  });
  freg(6, 260, 950, 1400, 100);
  fadeUp(P(t, Q(6), .5), () => { card(260, 955, 1400, 90, { fill: C.warnSoft, r: 45 }); txt('Hyperseg → B12/folate  |  Nahi → alcohol · liver · hypothyroid · hemolysis · MDS · drugs', W / 2, 1000, { size: 30, weight: 900, color: C.warn }); }, 10);
};

SC.m30 = (t, D, Q) => topicScene(t, Q, { hdr: 'Topic 30 · Vitamin B12 deficiency', part: 'Topic 30', title: 'Vitamin B12 deficiency', color: C.b12, icon: (x, y) => bigCell(x, y, 1), items: [
  [1, 0, 'MCV', 'Bahut zyada · aksar > 115', C.b12, null],
  [2, 0, 'Diet · pet', 'Strict VEGAN · PERNICIOUS anemia · gastrectomy/bariatric', C.warn, null],
  [3, 0, 'Chhoti aant · dawayein', 'ILEUM resection/malabsorption · METFORMIN · PPI', C.blue, null],
  [4, 0, 'Symptoms', 'Anemia + NEURO: sunnpan · jhunjhunahat', '#7C3AED', null],
  [5, 0, 'Key point', 'Neuro sirf B12 mein · folate mein NAHI', C.hem, null],
], bopts: { cols: 1, ch: 132, gap: 148, y0: 160, cw: 1000 }, before: () => bigPanel(t, Q, [[2, 'causes'], [4, 'neuro']], 1120, 170, 720, 560, C.b12) });

SC.m30b = (t, D, Q) => topicScene(t, Q, { hdr: 'Topic 30 · Pernicious anemia', part: 'Pernicious anemia', title: 'Pernicious anemia', color: C.b12, icon: (x, y) => bigCell(x, y, 1), skipTitle: true, items: [
  [0, 0, 'Autoimmune', 'Antibodies: INTRINSIC FACTOR / parietal cells', C.b12, null],
  [1, 0, 'IF nahi', 'B12 absorb NAHI hota', C.hem, null],
  [2, 0, 'Saath mein', 'Hypothyroidism · VITILIGO · gastric cancer risk ↑', C.warn, null],
], bopts: { cols: 1, ch: 170, gap: 190, y0: 190, cw: 1000 }, rem: [3, 'B12 causes: vegan · pernicious · ileum · metformin · PPI · neuro = B12'], before: () => bigPanel(t, Q, [[0, 'pernicious']], 1120, 170, 720, 560, C.b12) });

SC.m31 = (t, D, Q) => {
  header('Topic 31 · Work-up', C.blue);
  if (t < Q(1) - .3) { partTitle(t, 'Topic 31', 'Work-up aur treatment', C.blue, (x, y) => bigCell(x, y, 1)); return; }
  fadeUp(P(t, Q(1) - .3, .5), () => { card(160, 130, 1600, 100, { fill: '#fff', r: 50 }); txt('Macrocytic · hyperseg neutrophils · B12 ya folate ↓', W / 2, 181, { size: 40, weight: 900, color: C.blue }); }, 12);
  freg(1, 160, 130, 1600, 100);
  const cols = [['', 'B12 ↓', 'Folate ↓'], ['Homocysteine', '↑ HIGH', '↑ HIGH'], ['MMA', '↑ HIGH', 'NORMAL']];
  [[2, 1], [3, 2]].forEach(([li, r]) => { const y = 280 + r * 150; freg(li, 160, y - 150 * (r === 1 ? 1 : 0), 1000, r === 1 ? 290 : 140);
    fadeUp(P(t, Q(li), .5), () => { if (r === 1) { cols[0].forEach((c, j) => txt(c, 300 + j * 340, 330, { size: 36, weight: 900, color: C.sub })); }
      card(160, y, 1000, 130, { fill: r === 2 ? C.warnSoft : '#fff', r: 24 }); cols[r].forEach((c, j) => txt(c, 300 + j * 340, y + 65, { size: j ? 40 : 36, weight: 900, color: j === 0 ? C.ink : (c === 'NORMAL' ? C.ok : C.hem) })); }, 12); });
  freg(4, 160, 760, 1000, 160);
  fadeUp(P(t, Q(4), .5), () => { card(160, 760, 1000, 160, { fill: C.b12, r: 30, blur: 0 }); txt('MMA ↑ → B12', 660, 815, { size: 44, weight: 900, color: '#fff' }); txt('MMA N + homocysteine ↑ → FOLATE', 660, 875, { size: 36, weight: 900, color: '#fff' }); }, 12);
  bigPanel(t, Q, [[2, 'mma']], 1200, 280, 640, 480, C.blue);
};

SC.m31b = (t, D, Q) => topicScene(t, Q, { hdr: 'Topic 31 · File ke MCQs', part: 'MCQ', title: 'File ke MCQs', color: C.blue, icon: (x, y) => bigCell(x, y, 1), skipTitle: true, items: [
  [0, 0, 'MCQ 1 · 73 M · sunnpan · Hb 7 · MCV 114', 'Neuro + macro → B12 socho', C.ink, null],
  [1, 0, 'Next step (A)', 'VITAMIN B12 LEVEL', C.blue, null],
  [2, 0, 'B12 borderline?', 'Tab MMA', C.sub, null],
  [3, 0, 'MCQ 2 · sunnpan · vitiligo · hypothyroid · hyperseg', 'Pernicious anemia', C.ink, null],
  [4, 0, 'Best management (C)', 'IM VITAMIN B12', C.b12, null],
], bopts: { cols: 1, ch: 132, gap: 148, y0: 160, cw: 1000 }, before: () => bigPanel(t, Q, [[0, 'neuro'], [3, 'pernicious'], [4, 'im']], 1120, 170, 720, 560, C.blue) });

SC.m31c = (t, D, Q) => topicScene(t, Q, { hdr: 'Topic 31 · File ka MCQ 3', part: 'MCQ', title: 'MCQ 3', color: C.blue, icon: (x, y) => bigCell(x, y, 1), skipTitle: true, items: [
  [0, 0, 'MCQ 3 · DM + HTN · metformin · Hb 8', 'Kya add karein?', C.ink, null],
  [1, 0, 'Lamba metformin → B12 ↓ (D)', 'VITAMIN B12 REPLACEMENT', C.b12, null],
  [2, 0, 'Asal practice', 'Pehle B12 level CONFIRM', C.warn, null],
], bopts: { cols: 1, ch: 170, gap: 190, y0: 190, cw: 1000 }, rem: [3, 'MMA → B12 · neuro + macro → B12 level · pernicious → IM B12 · metformin → B12 ↓'], before: () => bigPanel(t, Q, [[0, 'metformin']], 1120, 170, 720, 560, C.blue) });

SC.recap = (t, D, Q) => {
  header('Part 9 · Ek baar dobara', C.sc);
  recapRows(t, Q, 'Ek baar dobara', [
    [0, 'Macrocytic', 'Hyperseg → B12/folate · nahi → alcohol, liver…', '#7C3AED', null],
    [1, 'B12 causes', 'Vegan · pernicious · ileum · metformin · PPI', C.b12, null],
    [2, 'Markers', 'Homocysteine dono mein ↑ · MMA sirf B12', C.blue, null],
    [3, 'Pernicious', 'Vitiligo + hypothyroid · IM B12', C.hem, null],
  ], 250, 170);
};

SC.full = (t, D, Q) => {
  header('Poori file ek saath', C.navy);
  recapRows(t, Q, 'Poori file · Anemia', [
    [0, 'Anemia · MCV', 'Hb < 13.5 M / < 12 F · < 80 · 80–95 · > 95', C.hem, null],
    [3, 'IDA', 'Ferritin ↓ · TIBC ↑ · Mentzer > 13 · elderly → scope', C.warn, null],
    [5, 'ACD · Thal', 'Hepcidin · Mentzer < 13 · deferoxamine', '#0E7490', null],
    [7, 'HH · Sickle', 'Phlebotomy · crisis + fever → antibiotics', C.sc, null],
    [9, 'Sickle crises', 'ACS → transfusion · sequestration · parvo B19', C.kid, null],
    [10, 'Hemolytic', 'Warm → steroids · cold → Mycoplasma · bite · EMA', '#7C3AED', null],
    [11, 'Macrocytic', 'Hyperseg → B12/folate · MMA · IM B12', C.b12, null],
  ], 190, 122);
};

SC.quiz = (t, D, Q) => {
  header('Rapid recall · khud se poochho', C.warn);
  if (t < Q(1) - .2) { fadeUp(P(t, 0, .5), () => { txt('RAPID RECALL', W / 2, 400, { size: 100, weight: 900, color: C.warn }); txt('Sawal suno → ruko → khud jawab bolo', W / 2, 530, { size: 44, weight: 800, color: C.sub }); }); return; }
  qaCards(t, Q, [[1, 2, 'MCV 75 → kaun sa dibba?', 'MICROCYTIC'], [3, 4, 'IDA ka sabse important test?', 'FERRITIN'], [5, 6, 'IDA mein TIBC?', 'HIGH'], [7, 8, 'Mentzer index 15?', 'IRON DEFICIENCY'], [9, 10, 'IDA + dysphagia?', 'PLUMMER–VINSON'], [11, 12, '65 M · IDA → next step?', 'COLONOSCOPY'], [13, 14, 'Dialysis patient · iron kaise?', 'IV IRON'], [15, 16, 'Severe anemia + heart failure?', 'TRANSFUSION'], [17, 18, 'Oral iron se fayda nahi?', 'CELIAC test'], [19, 20, 'RA · ferritin ↑ · Hb ↓?', 'ACD'], [21, 22, 'Microcytic · iron N · Mentzer 11?', 'BETA THAL TRAIT'], [23, 24, 'Thal major · ferritin ↑?', 'DEFEROXAMINE'], [25, 26, 'Hemochromatosis ka Rx?', 'PHLEBOTOMY'], [27, 28, 'Sickle smear · spleen nahi ka sign?', 'HOWELL-JOLLY bodies'], [29, 30, 'Sickle crisis + bukhar?', 'ANTIBIOTICS'], [31, 32, 'Sickle · bada spleen · Hb 3?', 'SEQUESTRATION → transfusion'], [33, 34, 'Aplastic crisis ka virus?', 'PARVOVIRUS B19'], [35, 36, 'Mycoplasma → hemolysis + agglutination?', 'COLD AIHA'], [37, 38, 'Fava beans → bite cells?', 'G6PD deficiency'], [39, 40, 'MMA high?', 'B12 deficiency'], [41, 42, 'Vitiligo + hypothyroid + macrocytic?', 'PERNICIOUS → IM B12']], C.warn);
};

SC.notes = (t, D, Q) => {
  header('File ke points · dhyan do', C.warn);
  fadeUp(P(t, 0, .5), () => txt('⚠ File vs standard practice', W / 2, 130, { size: 52, weight: 900, color: C.navy }));
  [[1, 'Cutoff: male 13.5 (file)', 'WHO: male 13 · non-preg F 12 · apne exam ka reference'], [2, 'Elderly IDA → colonoscopy (file)', 'Practice: BIDIRECTIONAL endoscopy (upper GI + colonoscopy)'], [3, 'Ibuprofen MCQ → paracetamol ✓', 'PPI + NSAID bhi ek raasta · simple switch = paracetamol'], [4, 'Hemochromatosis: biopsy + HFE (file)', 'Practice: ferritin + TSAT → HFE · biopsy sirf zaroorat par'], [5, 'HS: EPO + iron + folate (file)', 'Practice: folic acid · transfusion · splenectomy · iron routine NAHI']].forEach(([li, a, b], i) => {
    const y = 180 + i * 158; freg(li, 120, y, 1680, 145);
    fadeUp(P(t, Q(li), .5), () => { card(120, y, 1680, 145, { fill: '#fff', r: 24 }); rr(120, y, 14, 145, 7); ctx.fillStyle = C.warn; ctx.fill(); txt(a, 960, y + 45, { size: 32, weight: 800, color: C.sub }); txt(b, 960, y + 102, { size: 34, weight: 900, color: C.ok, alpha: P(t, Q(li) + 3, .5) }); }, 12);
  });
  freg(6, 260, 975, 1400, 90);
  fadeUp(P(t, Q(6), .5), () => { card(260, 980, 1400, 80, { fill: C.warnSoft, r: 40 }); txt('MCQ answers: source mein nahi the · standard teaching ke hisaab se', W / 2, 1020, { size: 30, weight: 900, color: C.warn }); }, 10);
};
SC.end = (t, D) => { fadeUp(P(t, 0, .6), () => { bigCell(W / 2, 380, 1.6); txt('Anemia · Part 9 · File complete', W / 2, 600, { size: 66, weight: 900, color: C.navy }); }); fadeUp(P(t, .8, .6), () => txt('For education only · Follow current guidelines', W / 2, 700, { size: 32, weight: 600, color: C.mute })); };
