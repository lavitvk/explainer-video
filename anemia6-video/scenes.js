C.sc = '#BE123C'; C.scSoft = '#FFE4E6'; C.hem = '#B91C1C';
function bigPanel(t, Q, list, x, y, w, h, color) {
  let cur = null, k0 = 0; list.forEach(([li, img]) => { if (t >= Q(li) - .2 && ART[img]) { cur = img; k0 = Q(li) - .2; } });
  list.forEach(([li, img]) => freg(li, x, y, w, h));
  if (!cur) return;
  const k = eo(P(t, k0, .6));
  ctx.save(); ctx.globalAlpha *= k; card(x, y, w, h, { fill: '#fff', stroke: color, lw: 5, r: 28 }); pic(cur, x + 16, y + 16, w - 32, h - 32); ctx.restore();
}
function sickleIcon(cx, cy, s = 1) { ctx.save(); ctx.translate(cx, cy); ctx.scale(s, s); ctx.beginPath(); ctx.arc(0, 0, 70, -2.3, 2.3); ctx.arc(-40, 0, 62, 1.9, -1.9, true); ctx.closePath(); ctx.fillStyle = '#DC2626'; ctx.fill(); ctx.restore(); }

SC.intro = (t, D, Q) => {
  header('Anemia · Part 6', C.sc);
  if (t < Q(1) - .3) { partTitle(t, 'Anemia · Part 6', 'Sickle cell disease', C.sc, (x, y) => sickleIcon(x, y, 1)); return; }
  fadeUp(P(t, Q(1) - .3, .5), () => txt('Pichhla part ek line mein', W / 2, 170, { size: 56, weight: 900, color: C.navy }));
  freg(1, 140, 140, 1640, 320); freg(2, 300, 520, 1320, 420);
  fadeUp(P(t, Q(1), .5), () => { card(260, 250, 1400, 100, { fill: '#fff', r: 50 }); txt('Hemochromatosis → PHLEBOTOMY · Thal major → CHELATION', W / 2, 301, { size: 40, weight: 900, color: '#9A3412' }); }, 12);
  pop(P(t, Q(2), .6), W / 2, 700, () => { sickleIcon(W / 2, 640, 1.1); txt('Hereditary Hb bimari · Saudi exams mein bahut', W / 2, 800, { size: 48, weight: 900, color: C.sc }); });
};

SC.s18 = (t, D, Q) => topicScene(t, Q, { hdr: 'Topic 18 · Sickle cell kya hai', part: 'Topic 18', title: 'Sickle cell disease kya hai?', color: C.sc, icon: (x, y) => sickleIcon(x, y, 1), items: [
  [1, 0, 'Inheritance', 'AUTOSOMAL RECESSIVE', C.navy, null],
  [2, 0, 'Beta-globin position 6 · point mutation', 'Glutamic acid → VALINE', C.sc, null],
  [3, 0, 'Badla hua hemoglobin', 'HbS', C.hem, null],
  [4, 0, 'O₂ kam → HbS rods → cell tedha', 'SICKLE (hansiya)', C.warn, null],
  [5, 0, 'Hallmark 1: chhoti vessels mein atak', 'VASO-OCCLUSION', C.blue, null],
  [6, 0, 'Hallmark 2: jaldi toot', 'HEMOLYTIC ANEMIA', C.kid, null],
], bopts: { cols: 1, ch: 126, gap: 131, y0: 138, cw: 1000 }, rem: [8, 'Position 6 → HbS · vaso-occlusion + hemolysis · African / E. Mediterranean'], before: () => bigPanel(t, Q, [[2, 'sickle'], [5, 'vasoocc']], 1120, 170, 720, 560, C.sc) });

SC.s19 = (t, D, Q) => topicScene(t, Q, { hdr: 'Topic 19 · Diagnosis', part: 'Topic 19', title: 'Sickle cell: diagnosis', color: C.blue, icon: (x, y) => sickleIcon(x, y, 1), items: [
  [1, 0, 'CBC anemia · hemolysis markers', 'Retics ↑ · LDH ↑ · indirect bili ↑', C.warn, null],
  [2, 0, 'Blood film', 'SICKLE cells · target · HOWELL-JOLLY', C.sc, null],
  [3, 0, 'Howell-Jolly bodies kyun?', 'SPLEEN kaam nahi kar raha', C.kid, null],
  [4, 0, 'Confirm (HbS)', 'Hb ELECTROPHORESIS', C.blue, null],
], bopts: { cols: 1, ch: 150, gap: 168, y0: 170, cw: 1000 }, rem: [5, 'Sickle cells + Howell-Jolly · confirm electrophoresis'], before: () => bigPanel(t, Q, [[2, 'smear']], 1120, 170, 720, 560, C.blue) });

SC.s20 = (t, D, Q) => topicScene(t, Q, { hdr: 'Topic 20 · Acute complications', part: 'Topic 20', title: 'Acute complications (3 dibbe)', color: C.hem, icon: (x, y) => sickleIcon(x, y, 1), items: [
  [2, 0, '1 · Infections (spleen nahi)', 'Sepsis · pneumonia · meningitis', C.blue, null],
  [3, 0, '2 · Severe anemia', 'Sequestration · APLASTIC (parvo B19) · hyperhemolysis', C.warn, null],
  [4, 0, '3 · Vaso-occlusion', 'Pain · stroke · ACUTE CHEST · priapism · VTE', C.hem, null],
  [5, 0, 'Bachche · pehla sign', 'DACTYLITIS (haath-pair sujan)', C.sc, null],
], bopts: { cols: 1, ch: 150, gap: 168, y0: 170, cw: 1000 }, rem: [6, 'Acute: infection · sequestration/aplastic · pain, stroke, ACS, priapism'], before: () => bigPanel(t, Q, [[4, 'acs'], [5, 'dactylitis']], 1120, 170, 720, 560, C.hem) });

SC.s21 = (t, D, Q) => topicScene(t, Q, { hdr: 'Topic 21 · Chronic complications', part: 'Topic 21', title: 'Chronic complications', color: C.kid, icon: (x, y) => sickleIcon(x, y, 1), items: [
  [2, 0, 'Spleen', '2–4 saal tak · FUNCTIONAL ASPLENIA', C.kid, null],
  [3, 0, 'Brain', '~25% stroke by 45 saal', C.hem, null],
  [4, 0, 'Haddiyan', 'AVN FEMORAL HEAD · osteoporosis', C.warn, null],
  [5, 0, 'Lungs · kidney', 'PULMONARY HTN · renal + HTN', C.blue, null],
  [6, 0, 'Liver · gallbladder', 'Iron overload · PIGMENT GALLSTONES', '#A16207', null],
  [7, 0, 'Growth · skin · heart · aankh', 'Late puberty · leg ulcers · CMP · retinopathy', C.sc, null],
], bopts: { cols: 1, ch: 126, gap: 131, y0: 138, cw: 1000 }, rem: [9, 'Spleen 2–4 yr · AVN femoral head · pigment stones · pulm HTN + stroke'], before: () => bigPanel(t, Q, [[2, 'spleen'], [4, 'avn'], [6, 'gallstones'], [8, 'vaccine']], 1120, 170, 720, 560, C.kid) });

SC.s22 = (t, D, Q) => topicScene(t, Q, { hdr: 'Topic 22 · Painful crisis', part: 'Topic 22', title: 'Painful crisis', color: C.ok, icon: (x, y) => sickleIcon(x, y, 1), items: [
  [1, 0, 'Triggers', 'Infection · dehydration · thand · oonchai', C.blue, null],
  [2, 0, 'Presentation', 'Pair · haath · peeth mein dard', C.warn, null],
  [3, 0, 'Management', '1 REHYDRATION · 2 PAIN control', C.ok, null],
  [4, 0, '⚠ Trap: crisis + BUKHAR', 'ANTIBIOTICS (spleen nahi)', C.hem, null],
], bopts: { cols: 1, ch: 150, gap: 168, y0: 170, cw: 1000 }, rem: [5, 'Crisis → rehydration + pain control · bukhar → ANTIBIOTICS'], before: () => bigPanel(t, Q, [[2, 'crisis']], 1120, 170, 720, 560, C.ok) });

SC.recap = (t, D, Q) => {
  header('Part 6 · Ek baar dobara', C.sc);
  recapRows(t, Q, 'Ek baar dobara', [
    [0, 'Basics', 'AR · position 6 · HbS · vaso-occlusion + hemolysis', C.sc, null],
    [1, 'Diagnosis', 'Sickle + Howell-Jolly · electrophoresis', C.blue, null],
    [2, 'Acute', 'Infection · sequestration/aplastic · pain, stroke, ACS', C.hem, null],
    [3, 'Chronic', 'Spleen 2–4 yr · AVN · pigment stones · pulm HTN', C.kid, null],
    [4, 'Crisis', 'Rehydration + pain · bukhar → antibiotics', C.ok, null],
  ], 220, 150);
};

SC.full = (t, D, Q) => {
  header('Poori file ek saath', C.navy);
  recapRows(t, Q, 'Poori file · Anemia', [
    [0, 'Anemia', 'Hb < 13.5 M · < 12 F', C.hem, null],
    [1, 'MCV dibbe', '< 80 micro · 80–95 normo · > 95 macro', C.kid, null],
    [3, 'IDA', 'Ferritin ↓ · TIBC ↑ · Mentzer > 13 · elderly → scope', C.warn, null],
    [5, 'ACD', 'Hepcidin · ferritin N/↑ · TIBC N/↓', '#7C3AED', null],
    [6, 'Thalassemia', 'Iron N · Mentzer < 13 · major → deferoxamine', '#0E7490', null],
    [7, 'Hemochromatosis · SCD', 'HFE → phlebotomy · crisis + fever → antibiotics', C.sc, null],
  ], 200, 135);
};

SC.quiz = (t, D, Q) => {
  header('Rapid recall · khud se poochho', C.warn);
  if (t < Q(1) - .2) { fadeUp(P(t, 0, .5), () => { txt('RAPID RECALL', W / 2, 400, { size: 100, weight: 900, color: C.warn }); txt('Sawal suno → ruko → khud jawab bolo', W / 2, 530, { size: 44, weight: 800, color: C.sub }); }); return; }
  qaCards(t, Q, [[1, 2, 'MCV 75 → kaun sa dibba?', 'MICROCYTIC'], [3, 4, 'IDA ka sabse important test?', 'FERRITIN'], [5, 6, 'IDA mein TIBC?', 'HIGH'], [7, 8, 'Mentzer index 15?', 'IRON DEFICIENCY'], [9, 10, 'IDA + dysphagia?', 'PLUMMER–VINSON'], [11, 12, '65 M · IDA → next step?', 'COLONOSCOPY'], [13, 14, 'Dialysis patient · iron kaise?', 'IV IRON'], [15, 16, 'Severe anemia + heart failure?', 'TRANSFUSION'], [17, 18, 'Oral iron se fayda nahi?', 'CELIAC test'], [19, 20, 'RA · ferritin ↑ · Hb ↓?', 'ACD'], [21, 22, 'Microcytic · iron N · Mentzer 11?', 'BETA THAL TRAIT'], [23, 24, 'Thal major · ferritin ↑?', 'DEFEROXAMINE'], [25, 26, 'Hemochromatosis ka Rx?', 'PHLEBOTOMY'], [27, 28, 'Sickle smear · spleen nahi ka sign?', 'HOWELL-JOLLY bodies'], [29, 30, 'Sickle crisis + bukhar?', 'ANTIBIOTICS']], C.warn);
};

SC.notes = (t, D, Q) => {
  header('File ke points · dhyan do', C.warn);
  fadeUp(P(t, 0, .5), () => txt('⚠ File vs standard practice', W / 2, 160, { size: 56, weight: 900, color: C.navy }));
  [[1, 'Cutoff: male 13.5 (file)', 'WHO: male 13 · non-preg F 12 · apne exam ka reference'], [2, 'Elderly IDA → colonoscopy (file)', 'Practice: BIDIRECTIONAL endoscopy (upper GI + colonoscopy)'], [3, 'Ibuprofen MCQ → paracetamol ✓', 'PPI + NSAID bhi ek raasta · simple switch = paracetamol'], [4, 'Hemochromatosis confirm: biopsy + HFE (file)', 'Practice: ferritin + TSAT → HFE · biopsy sirf zaroorat par']].forEach(([li, a, b], i) => {
    const y = 230 + i * 190; freg(li, 120, y, 1680, 170);
    fadeUp(P(t, Q(li), .5), () => { card(120, y, 1680, 170, { fill: '#fff', r: 24 }); rr(120, y, 14, 170, 7); ctx.fillStyle = C.warn; ctx.fill(); txt(a, 960, y + 55, { size: 34, weight: 800, color: C.sub }); txt(b, 960, y + 120, { size: 36, weight: 900, color: C.ok, alpha: P(t, Q(li) + 3, .5) }); }, 12);
  });
};
SC.end = (t, D) => { fadeUp(P(t, 0, .6), () => { sickleIcon(W / 2, 380, 1.6); txt('Anemia · Part 6 · File complete', W / 2, 600, { size: 66, weight: 900, color: C.navy }); }); fadeUp(P(t, .8, .6), () => txt('For education only · Follow current guidelines', W / 2, 700, { size: 32, weight: 600, color: C.mute })); };
