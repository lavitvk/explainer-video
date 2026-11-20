C.hfe = '#9A3412'; C.hfeSoft = '#FFEDD5'; C.hem = '#B91C1C';
function bigPanel(t, Q, list, x, y, w, h, color) {
  let cur = null, k0 = 0; list.forEach(([li, img]) => { if (t >= Q(li) - .2 && ART[img]) { cur = img; k0 = Q(li) - .2; } });
  list.forEach(([li, img]) => freg(li, x, y, w, h));
  if (!cur) return;
  const k = eo(P(t, k0, .6));
  ctx.save(); ctx.globalAlpha *= k; card(x, y, w, h, { fill: '#fff', stroke: color, lw: 5, r: 28 }); pic(cur, x + 16, y + 16, w - 32, h - 32); ctx.restore();
}
function feBlob(cx, cy, s = 1) { ctx.save(); ctx.translate(cx, cy); ctx.scale(s, s); for (let i = 0; i < 9; i++) { const a = i * 2.4, r = 18 + (i % 3) * 18; ctx.beginPath(); ctx.arc(Math.cos(a) * r, Math.sin(a) * r, 16, 0, 7); ctx.fillStyle = i % 2 ? '#C2410C' : '#EA580C'; ctx.fill(); } txt('Fe', 0, 4, { size: 40, weight: 900, color: '#fff' }); ctx.restore(); }

SC.intro = (t, D, Q) => {
  header('Anemia · Part 5', C.hfe);
  if (t < Q(1) - .3) { partTitle(t, 'Anemia · Part 5', 'Hemochromatosis', C.hfe, (x, y) => feBlob(x, y, 1)); return; }
  fadeUp(P(t, Q(1) - .3, .5), () => txt('Pichhla part ek line mein', W / 2, 170, { size: 56, weight: 900, color: C.navy }));
  freg(1, 140, 140, 1640, 320); freg(2, 300, 520, 1320, 420);
  fadeUp(P(t, Q(1), .5), () => { card(300, 250, 1320, 100, { fill: '#fff', r: 50 }); txt('Thal major → transfusion → iron jama → DEFEROXAMINE', W / 2, 301, { size: 40, weight: 900, color: '#0E7490' }); }, 12);
  pop(P(t, Q(2), .6), W / 2, 700, () => { feBlob(W / 2, 640, 1.2); txt('Wahi iron jama · par ek BIMARI ke roop mein', W / 2, 800, { size: 48, weight: 900, color: C.hfe }); });
};

SC.h15 = (t, D, Q) => topicScene(t, Q, { hdr: 'Topic 15 · Hemochromatosis kya hai', part: 'Topic 15', title: 'Hemochromatosis kya hai?', color: C.hfe, icon: (x, y) => feBlob(x, y, 1), items: [
  [1, 0, 'Iron abnormal tareeqe se jama · organs mein baithta', 'IRON JAMA', C.hfe, null],
  [2, 0, 'Do types', 'PRIMARY (hereditary) · SECONDARY', C.navy, null],
  [3, 0, 'Aant zyada iron absorb karti', 'AUTOSOMAL RECESSIVE · HFE gene', C.hem, null],
  [4, 0, 'Bahar se iron (thalassemia mein dekha)', 'SECONDARY = baar-baar TRANSFUSION', C.blue, null],
], bopts: { cols: 1, ch: 150, gap: 168, y0: 170, cw: 1000 }, rem: [5, 'Hereditary: AR · HFE · aant se zyada iron · Secondary: transfusion'], before: () => bigPanel(t, Q, [[1, 'iron_absorb'], [3, 'pedigree']], 1120, 170, 720, 560, C.hfe) });

SC.h16 = (t, D, Q) => topicScene(t, Q, { hdr: 'Topic 16 · Symptoms aur complications', part: 'Topic 16', title: 'Symptoms aur complications', color: C.hfe, icon: (x, y) => feBlob(x, y, 1), items: [
  [2, 0, 'Most common symptoms', 'Thakaan · erectile dysfunction · OA', C.warn, null],
  [3, 0, 'Normal OA = knee, hip', 'AJEEB joints: SHOULDER · ANKLE · elbow', C.hfe, null],
  [4, 0, 'Heart · pancreas · liver', 'Cardiomyopathy · DIABETES · cirrhosis', C.hem, null],
  [6, 0, 'Skin kaali (iron)', 'BRONZE DIABETES', '#A16207', null],
], bopts: { cols: 1, ch: 150, gap: 168, y0: 170, cw: 1000 }, rem: [7, 'Fatigue · ED · shoulder/ankle OA | cardiomyopathy · diabetes · liver'], before: () => bigPanel(t, Q, [[2, 'joints'], [4, 'organs'], [6, 'bronze']], 1120, 170, 720, 560, C.hfe) });

SC.h17a = (t, D, Q) => topicScene(t, Q, { hdr: 'Topic 17 · Diagnosis', part: 'Topic 17', title: 'Diagnosis aur management', color: C.blue, icon: (x, y) => feBlob(x, y, 1), items: [
  [1, 0, 'Imaging (liver mein iron)', 'LIVER MRI', C.blue, null],
  [2, 0, 'Confirmation (file)', 'Liver biopsy · HFE gene testing', C.hfe, null],
  [3, 0, '⚠ Aaj ki practice', 'Ferritin + transferrin sat → HFE · biopsy kam', C.warn, null],
], bopts: { cols: 1, ch: 170, gap: 190, y0: 190, cw: 1000 }, before: () => bigPanel(t, Q, [[1, 'mri']], 1120, 170, 720, 560, C.blue) });

SC.h17b = (t, D, Q) => {
  header('Topic 17 · Treatment', C.ok);
  fadeUp(P(t, 0, .5), () => { card(160, 140, 1000, 120, { fill: '#fff', stroke: C.ok, lw: 5 }); txt('Treatment = PHLEBOTOMY', 660, 201, { size: 52, weight: 900, color: C.ok }); }, 12);
  freg(0, 160, 140, 1000, 120); freg(1, 160, 280, 1000, 120);
  fadeUp(P(t, Q(1), .5), () => { card(160, 280, 1000, 120, { fill: '#fff', r: 24 }); txt('Khoon ke saath iron bahar · patient ANEMIC NAHI', 660, 341, { size: 34, weight: 900, color: C.ink }); }, 12);
  freg(2, 160, 420, 1000, 120);
  fadeUp(P(t, Q(2), .5), () => { card(160, 420, 1000, 120, { fill: C.warnSoft, r: 24 }); txt('Chelation (deferoxamine): heart dis · anemia · kharab veins', 660, 481, { size: 31, weight: 900, color: C.warn }); }, 12);
  if (ART.phlebotomy) { freg(0, 1200, 140, 640, 400); fadeUp(P(t, .3, .5), () => { card(1200, 140, 640, 400, { fill: '#fff', stroke: C.ok, lw: 5, r: 28 }); pic('phlebotomy', 1216, 156, 608, 368); }, 10); }
  freg(3, 160, 570, 1680, 340); freg(4, 160, 570, 1680, 340);
  fadeUp(P(t, Q(3), .5), () => {
    card(160, 570, 820, 340, { fill: '#fff', stroke: '#0E7490', lw: 5 }); txt('THALASSEMIA MAJOR', 570, 630, { size: 40, weight: 900, color: '#0E7490' }); txt('Patient ANEMIC', 570, 720, { size: 38, weight: 900, color: C.ink, alpha: P(t, Q(4), .4) }); txt('→ CHELATION', 570, 810, { size: 50, weight: 900, color: '#0E7490', alpha: P(t, Q(4), .4) });
    card(1020, 570, 820, 340, { fill: '#fff', stroke: C.ok, lw: 5 }); txt('HEREDITARY HEMOCHROMATOSIS', 1430, 630, { size: 36, weight: 900, color: C.ok }); txt('Anemic NAHI', 1430, 720, { size: 38, weight: 900, color: C.ink, alpha: P(t, Q(4) + 3, .4) }); txt('→ PHLEBOTOMY', 1430, 810, { size: 50, weight: 900, color: C.ok, alpha: P(t, Q(4) + 3, .4) });
  }, 14);
  neoRemember(t, P(t, Q(5), .5), 'Hereditary → PHLEBOTOMY · anemia / heart disease / veins → CHELATION', C.ok);
};

SC.recap = (t, D, Q) => {
  header('Part 5 · Ek baar dobara', C.hfe);
  recapRows(t, Q, 'Ek baar dobara', [
    [0, 'Kya hai', 'Iron organs mein jama · AR, HFE · secondary: transfusion', C.hfe, null],
    [1, 'Clinical', 'Fatigue, ED, shoulder/ankle OA · heart, pancreas, liver', C.hem, null],
    [2, 'Diagnosis', 'Liver MRI · HFE gene', C.blue, null],
    [3, 'Treatment', 'PHLEBOTOMY · anemia/heart → chelation', C.ok, null],
  ], 230, 170);
};

SC.quiz = (t, D, Q) => {
  header('Quiz · khud se poochho', C.warn);
  if (t < Q(1) - .2) { fadeUp(P(t, 0, .5), () => { txt('QUIZ', W / 2, 400, { size: 110, weight: 900, color: C.warn }); txt('Sawal suno → ruko → khud jawab socho', W / 2, 530, { size: 44, weight: 800, color: C.sub }); }); return; }
  qaCards(t, Q, [[1, 2, 'Hereditary hemochromatosis ki inheritance?', 'AUTOSOMAL RECESSIVE'], [3, 4, 'Kaun sa gene?', 'HFE'], [5, 6, 'Arthritis ka clue pattern?', 'SHOULDER · ANKLE (ajeeb joints)'], [7, 8, 'Teen organ complications?', 'Cardiomyopathy · diabetes · liver'], [9, 10, 'Kaali skin + diabetes ka purana naam?', 'BRONZE DIABETES'], [11, 12, 'Liver iron ki imaging?', 'LIVER MRI'], [13, 14, 'Hereditary type ka treatment?', 'PHLEBOTOMY'], [15, 16, 'Heart disease / anemia ho toh?', 'CHELATION (deferoxamine)'], [17, 18, 'Thal major mein phlebotomy kyun nahi?', 'Patient ANEMIC → chelation']], C.warn);
};
SC.end = (t, D) => { fadeUp(P(t, 0, .6), () => { feBlob(W / 2, 380, 1.6); txt('Anemia · Part 5', W / 2, 600, { size: 72, weight: 900, color: C.navy }); }); fadeUp(P(t, .8, .6), () => txt('For education only · Follow current guidelines', W / 2, 700, { size: 32, weight: 600, color: C.mute })); };
