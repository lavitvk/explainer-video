C.sc = '#BE123C'; C.hem = '#B91C1C';
function bigPanel(t, Q, list, x, y, w, h, color) {
  let cur = null, k0 = 0; list.forEach(([li, img]) => { if (t >= Q(li) - .2 && ART[img]) { cur = img; k0 = Q(li) - .2; } });
  list.forEach(([li, img]) => freg(li, x, y, w, h));
  if (!cur) return;
  const k = eo(P(t, k0, .6));
  ctx.save(); ctx.globalAlpha *= k; card(x, y, w, h, { fill: '#fff', stroke: color, lw: 5, r: 28 }); pic(cur, x + 16, y + 16, w - 32, h - 32); ctx.restore();
}
function rbcIcon(cx, cy, s = 1) { ctx.save(); ctx.translate(cx, cy); ctx.scale(s, s); ctx.beginPath(); ctx.arc(0, 0, 70, 0, 7); ctx.fillStyle = '#DC2626'; ctx.fill(); ctx.beginPath(); ctx.arc(0, 0, 30, 0, 7); ctx.fillStyle = '#F87171'; ctx.fill(); ctx.strokeStyle = '#fff'; ctx.lineWidth = 8; ctx.beginPath(); ctx.moveTo(-60, -10); ctx.lineTo(-10, 5); ctx.lineTo(20, -20); ctx.lineTo(60, 10); ctx.stroke(); ctx.restore(); }

SC.intro = (t, D, Q) => {
  header('Anemia · Part 8', C.sc);
  if (t < Q(1) - .3) { partTitle(t, 'Anemia · Part 8', 'Hemolytic anemias', C.sc, (x, y) => rbcIcon(x, y, 1)); return; }
  fadeUp(P(t, Q(1) - .3, .5), () => txt('Pichhla part ek line mein', W / 2, 170, { size: 56, weight: 900, color: C.navy }));
  freg(1, 140, 140, 1640, 320); freg(2, 300, 520, 1320, 420);
  fadeUp(P(t, Q(1), .5), () => { card(160, 250, 1600, 100, { fill: '#fff', r: 50 }); txt('ACS → transfusion · sequestration → retic ↑ + transfusion · hydroxyurea → HbF ↑', W / 2, 301, { size: 36, weight: 900, color: C.sc }); }, 12);
  pop(P(t, Q(2), .6), W / 2, 700, () => { rbcIcon(W / 2, 640, 1.1); txt('Red cells jaldi TOOT-TE hain', W / 2, 800, { size: 52, weight: 900, color: C.hem }); });
};

SC.a26 = (t, D, Q) => topicScene(t, Q, { hdr: 'Topic 26 · Autoimmune hemolytic anemia', part: 'Topic 26', title: 'AIHA: warm vs cold', color: C.hem, icon: (x, y) => rbcIcon(x, y, 1), items: [
  [1, 0, 'Body apne hi RBC ke khilaf antibodies', 'AIHA → RBC toot-te hain', C.hem, null],
  [2, 0, 'Pakadne ka test', 'COOMBS (direct antiglobulin test)', C.blue, null],
  [3, 0, 'Farq kis par?', 'Antibody kis TEMPERATURE par kaam kare', C.warn, null],
], bopts: { cols: 1, ch: 170, gap: 190, y0: 190, cw: 1000 }, before: () => bigPanel(t, Q, [[2, 'coombs']], 1120, 170, 720, 560, C.blue) });

SC.a26b = (t, D, Q) => {
  header('Topic 26 · Warm vs cold AIHA', C.hem);
  [[0, 2, 'WARM AIHA', [['IgG · 37 °C · Coombs IgG +', 0], ['Smear: SPHEROCYTES', 1], ['SLE · CLL · penicillin', 2], ['Rx: STEROIDS', 2]], 'warm', '#EA580C'], [3, 5, 'COLD AIHA', [['IgM + C3 · thand · Coombs IgM/C3 +', 3], ['Smear: AGGLUTINATION', 4], ['MYCOPLASMA pneumonia', 4], ['Rx: thand se bacho · RITUXIMAB', 5]], 'cold', C.blue]].forEach(([l1, l2, n, rows, img, c], i) => {
    const x = 90 + i * 880; for (let li = l1; li <= l2; li++) freg(li, x, 130, 860, 790);
    fadeUp(P(t, Q(l1), .5), () => {
      card(x, 130, 860, 790, { fill: '#fff', stroke: c, lw: 5 }); txt(n, x + 430, 185, { size: 44, weight: 900, color: c });
      if (ART[img]) pic(img, x + 40, 220, 780, 400);
      rows.forEach(([r, li], j) => txt(r, x + 430, 675 + j * 62, { size: 32, weight: 900, color: j % 2 ? c : C.ink, alpha: P(t, Q(li) + (li === l1 && j ? 1.5 : 0), .4) }));
    }, 14);
  });
  freg(6, 260, 930, 1400, 110);
  fadeUp(P(t, Q(6), .5), () => { card(260, 935, 1400, 100, { fill: C.warnSoft, r: 50 }); txt('Warm: IgG · spherocytes · steroids  |  Cold: IgM+C3 · agglutination · Mycoplasma', W / 2, 985, { size: 32, weight: 900, color: C.warn }); }, 10);
};

SC.a27 = (t, D, Q) => topicScene(t, Q, { hdr: 'Topic 27 · G6PD deficiency', part: 'Topic 27', title: 'G6PD deficiency', color: '#7C3AED', icon: (x, y) => rbcIcon(x, y, 1), items: [
  [1, 0, 'Enzyme RBC ko bachaata hai', 'OXIDATIVE damage se', '#7C3AED', null],
  [2, 0, 'Inheritance', 'X-LINKED recessive · ladkon mein zyada', C.blue, null],
  [3, 0, 'Classes I–V', 'Sirf pehli TEEN important', C.sub, null],
  [4, 0, 'Triggers', 'Infection · dapsone · sulfa · nitrofurantoin · FAVA beans', C.hem, null],
], bopts: { cols: 1, ch: 150, gap: 168, y0: 170, cw: 1000 }, before: () => bigPanel(t, Q, [[4, 'g6pd']], 1120, 170, 720, 560, '#7C3AED') });

SC.a27b = (t, D, Q) => topicScene(t, Q, { hdr: 'Topic 27 · G6PD exam hint', part: 'Exam hint', title: 'Exam hint', color: '#7C3AED', icon: (x, y) => rbcIcon(x, y, 1), skipTitle: true, items: [
  [0, 0, 'Trigger ke baad ACHANAK', 'Anemia + jaundice · spleen NORMAL', C.warn, null],
  [1, 0, 'Blood film', 'BITE CELLS (Heinz bodies nikaale)', '#7C3AED', null],
], bopts: { cols: 1, ch: 180, gap: 205, y0: 200, cw: 1000 }, rem: [2, 'G6PD: X-linked · trigger → hemolysis · normal spleen · bite cells'], before: () => bigPanel(t, Q, [[1, 'bite']], 1120, 170, 720, 560, '#7C3AED') });

SC.a28 = (t, D, Q) => topicScene(t, Q, { hdr: 'Topic 28 · Hereditary spherocytosis', part: 'Topic 28', title: 'Hereditary spherocytosis', color: C.ok, icon: (x, y) => rbcIcon(x, y, 1), items: [
  [1, 0, 'Membrane protein ki khandaani kharabi', 'Cell GOL → spleen tod de', C.ok, null],
  [2, 0, 'Complications', 'Bilirubin GALLSTONES · splenomegaly', C.warn, null],
  [3, 0, 'Exam hint', 'Family: gallstones / SPLENECTOMY', C.hem, null],
  [4, 0, 'Best test', 'EMA BINDING · (osmotic fragility)', C.blue, null],
  [5, 0, 'Treatment', 'Folic acid · transfusion · severe → SPLENECTOMY', '#7C3AED', null],
], bopts: { cols: 1, ch: 132, gap: 148, y0: 160, cw: 1000 }, before: () => bigPanel(t, Q, [[1, 'hs'], [2, 'gall']], 1120, 170, 720, 560, C.ok) });

SC.a28b = (t, D, Q) => topicScene(t, Q, { hdr: 'Topic 28 · File ka MCQ', part: 'MCQ', title: 'File ka MCQ', color: C.ok, icon: (x, y) => rbcIcon(x, y, 1), skipTitle: true, items: [
  [0, 0, '12 ghante ka newborn · jaundice · chhote gehre cells', 'Spherocytes', C.ink, null],
  [1, 0, 'Best investigation (D)', 'EMA BINDING TEST', C.ok, null],
  [2, 0, 'EMA option mein nahi?', 'Osmotic fragility test', C.blue, null],
], bopts: { cols: 1, ch: 170, gap: 190, y0: 190, cw: 1000 }, rem: [3, 'HS: family history · spherocytes · best test EMA · severe → splenectomy'], before: () => bigPanel(t, Q, [[0, 'newborn']], 1120, 170, 720, 560, C.ok) });

SC.recap = (t, D, Q) => {
  header('Part 8 · Ek baar dobara', C.sc);
  recapRows(t, Q, 'Ek baar dobara', [
    [0, 'AIHA', 'Coombs · warm IgG steroids · cold IgM+C3 Mycoplasma', C.hem, null],
    [1, 'G6PD', 'X-linked · trigger → hemolysis · bite cells', '#7C3AED', null],
    [2, 'HS', 'Family hx · spherocytes · EMA · splenectomy', C.ok, null],
  ], 280, 200);
};

SC.care = (t, D, Q) => topicScene(t, Q, { hdr: 'File ke points · dhyan do', part: '⚠ Dhyan do', title: 'File ke points jin par dhyan dena hai', color: C.warn, icon: (x, y) => rbcIcon(x, y, 1), items: [
  [1, 0, 'File: HS mein EPO + iron', 'IRON routinely NAHI (overload ka khatra)', C.hem, null],
  [2, 0, 'EPO', 'Sirf kuch newborns · specialist ki salah', C.warn, null],
  [3, 0, 'Cold AIHA Coombs', 'Aksar sirf C3 + (IgM chhoot jaati)', C.blue, null],
], bopts: { cols: 1, ch: 170, gap: 190, y0: 200, cw: 1500 } });

SC.quiz = (t, D, Q) => {
  header('Quiz · khud se poochho', C.warn);
  if (t < Q(1) - .2) { fadeUp(P(t, 0, .5), () => { txt('QUIZ', W / 2, 400, { size: 110, weight: 900, color: C.warn }); txt('Sawal suno → ruko → khud jawab socho', W / 2, 530, { size: 44, weight: 800, color: C.sub }); }); return; }
  qaCards(t, Q, [[1, 2, 'AIHA pakadne ka test?', 'COOMBS test (DAT)'], [3, 4, 'Warm AIHA: antibody?', 'IgG'], [5, 6, 'Warm AIHA: treatment?', 'STEROIDS'], [7, 8, 'Cold AIHA: infection?', 'MYCOPLASMA'], [9, 10, 'Cold AIHA: smear?', 'AGGLUTINATION'], [11, 12, 'G6PD: inheritance?', 'X-LINKED recessive'], [13, 14, 'G6PD: blood film?', 'BITE CELLS'], [15, 16, 'HS: best test?', 'EMA BINDING'], [17, 18, 'Severe HS: treatment?', 'SPLENECTOMY']], C.warn);
};
SC.end = (t, D) => { fadeUp(P(t, 0, .6), () => { rbcIcon(W / 2, 380, 1.6); txt('Anemia · Part 8', W / 2, 600, { size: 72, weight: 900, color: C.navy }); }); fadeUp(P(t, .8, .6), () => txt('For education only · Follow current guidelines', W / 2, 700, { size: 32, weight: 600, color: C.mute })); };
