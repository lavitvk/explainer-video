C.hem = '#B91C1C'; C.hemSoft = '#FEE2E2';
function rbc(cx, cy, r, pale = 0, col = '#DC2626') {
  ctx.save(); ctx.beginPath(); ctx.arc(cx, cy, r, 0, 7); ctx.fillStyle = col; ctx.fill();
  ctx.beginPath(); ctx.arc(cx, cy, r * (0.35 + pale * .35), 0, 7); ctx.fillStyle = pale ? '#FECACA' : '#EF4444'; ctx.fill(); ctx.restore();
}
function rbcIcon(cx, cy) { rbc(cx - 22, cy + 6, 30, .4); rbc(cx + 24, cy - 10, 26, .4); rbc(cx + 8, cy + 30, 20, .4); }
function dropIcon(cx, cy, s = 1) { ctx.save(); ctx.translate(cx, cy); ctx.scale(s, s); ctx.beginPath(); ctx.moveTo(0, -60); ctx.bezierCurveTo(45, -5, 45, 50, 0, 55); ctx.bezierCurveTo(-45, 50, -45, -5, 0, -60); ctx.fillStyle = C.hem; ctx.fill(); ctx.restore(); }

SC.intro = (t, D, Q) => {
  header('Anemia · Part 1', C.hem);
  if (t < Q(1) - .3) { partTitle(t, 'Anemia · Part 1', 'Definition · classification · picture', C.hem, (x, y) => dropIcon(x, y, 1.1)); return; }
  fadeUp(P(t, Q(1) - .3, .5), () => txt('Aaj teen cheezein', W / 2, 200, { size: 60, weight: 900, color: C.navy }));
  freg(1, 150, 140, 1620, 700);
  [['1', 'Anemia kya hai', 'Hb kam · cutoff', C.hem], ['2', 'MCV se 3 dibbe', 'Micro · normo · macro', C.kid], ['3', 'Signs + symptoms', 'Pallor · pica · PVS', C.ob2]].forEach(([n, a, b, c], i) =>
    fadeUp(P(t, Q(1) + .6 + i * 1.6, .5), () => { const x = 150 + i * 560; card(x, 300, 500, 500, { fill: '#fff', stroke: c, lw: 5 }); ctx.beginPath(); ctx.arc(x + 250, 420, 70, 0, 7); ctx.fillStyle = c; ctx.fill(); txt(n, x + 250, 422, { size: 70, weight: 900, color: '#fff' }); txt(a, x + 250, 580, { size: 44, weight: 900, color: c }); txt(b, x + 250, 660, { size: 32, weight: 700, color: C.sub }); }, 14));
};

SC.a1 = (t, D, Q) => topicScene(t, Q, { hdr: 'Topic 1 · Anemia kya hai', part: 'Topic 1', title: 'Anemia kya hai?', color: C.hem, icon: (x, y) => rbcIcon(x, y), items: [
  [1, 0, 'Blood mein hemoglobin normal se KAM', 'ANEMIA', C.hem, null],
  [2, 0, 'Hemoglobin ka kaam', 'O₂: lungs → poori body', C.blue, null],
  [3, 0, 'Hb kam = O₂ kam', 'Saare SYMPTOMS yahin se', C.warn, null],
  [4, 0, 'Cutoff (is file ke hisaab se)', 'Male < 13.5 · Female < 12 g/dL', C.kid, null],
  [5, 0, 'Ek baar aur', 'MALE 13.5 · FEMALE 12', C.ok, null],
], bopts: { cols: 1, ch: 130, gap: 146, y0: 160 }, rem: [6, 'Anemia = Hb kam · Male < 13.5 · Female < 12'] });

SC.a2 = (t, D, Q) => {
  header('Topic 2 · MCV se classification', C.kid);
  if (t < Q(1) - .3) { partTitle(t, 'Topic 2', 'MCV se classification', C.kid, (x, y) => { rbc(x - 70, y, 22, .5); rbc(x, y, 34, .2); rbc(x + 90, y, 48, 0); }); return; }
  fadeUp(P(t, Q(1) - .3, .5), () => { card(260, 140, 1400, 110, { fill: '#fff', r: 55 }); txt(t < Q(2) ? 'Sabse pehle ek number: MCV' : 'MCV = Mean Corpuscular Volume = ek RBC ka average SIZE', W / 2, 196, { size: 40, weight: 900, color: C.kid }); }, 12);
  freg(1, 260, 140, 1400, 110); freg(2, 260, 140, 1400, 110);
  const cols = [[3, 4, 'MICROCYTIC', 'MCV < 80 · cells CHHOTE', 'micro', ['Iron deficiency', 'Chronic disease', 'Sideroblastic', 'Thalassemia'], C.hem],
    [5, 5, 'NORMOCYTIC', 'MCV 80–95 · normal size', 'normo', ['Anemia of inflammation', 'Hemolytic anemia'], C.ok],
    [6, 6, 'MACROCYTIC', 'MCV > 95 · cells BADE', 'macro', ['Megaloblastic: B12, folate', 'Non-megaloblastic'], C.blue]];
  cols.forEach(([li, li2, n, mcv, img, rows, c], i) => {
    const x = 90 + i * 590, y = 280;
    freg(li, x, y, 560, 610); if (li2 !== li) freg(li2, x, y + 300, 560, 310);
    fadeUp(P(t, Q(li), .5), () => {
      card(x, y, 560, 610, { fill: '#fff', stroke: c, lw: 5 });
      txt(n, x + 280, y + 50, { size: 42, weight: 900, color: c }); txt(mcv, x + 280, y + 100, { size: 28, weight: 800, color: C.sub });
      if (ART[img]) pic(img, x + 120, y + 125, 320, 190); else { rbc(x + 280, y + 220, i === 0 ? 30 : i === 1 ? 45 : 60, i === 0 ? .5 : 0); }
      rows.forEach((r, j) => { const kk = P(t, Q(li2) + (li === li2 ? 1.5 : 0) + j * .9, .4); txt(r, x + 280, y + 365 + j * 62, { size: 31, weight: 900, color: C.ink, alpha: kk }); });
    }, 14);
  });
  if (t >= Q(7) - .3) { freg(7, 160, 900, 1600, 100); freg(8, 160, 900, 1600, 100); }
  if (FREG) { freg(7, 160, 905, 1600, 90); freg(8, 160, 905, 1600, 90); }
  if (t < Q(9) - .3) warnNote(P(t, Q(7), .5), t < Q(8) ? 'Chronic disease → normocytic BHI, microcytic BHI' : 'Sirf MCV se faisla NAHI → iron studies (Part 3)', 950);
  neoRemember(t, P(t, Q(9), .5), 'MCV < 80 micro (iron · chronic · sidero · thal) · 80–95 normo · > 95 macro', C.kid);
};

SC.a3a = (t, D, Q) => {
  header('Topic 3 · Signs aur symptoms', C.ob2);
  if (t < Q(1) - .3) { partTitle(t, 'Topic 3', 'Signs aur symptoms', C.ob2, (x, y) => bodySilhouette(x, y + 20, .5, 0)); return; }
  fadeUp(P(t, Q(1) - .3, .5), () => { card(200, 140, 1520, 110, { fill: '#fff', r: 55 }); txt('O₂ kam → HEART tez chalta hai → saare symptoms', W / 2, 196, { size: 42, weight: 900, color: C.ob2 }); }, 12);
  freg(1, 200, 140, 1520, 110);
  [[2, 'SYMPTOMS', 'jo patient batata hai', 'sympt', ['Fatigue (thakaan)', 'Sir dard', 'Saans phoolna', 'Chest pain · palpitations'], C.warn],
   [3, 'SIGNS', 'jo doctor dekhta hai', 'signs', ['Pallor (peelapan)', 'Tachycardia', 'Systolic murmur', 'Severe: heart failure'], C.hem]].forEach(([li, n, sub, img, rows, c], i) => {
    const x = 110 + i * 870, y = 280;
    freg(li, x, y, 830, 640);
    fadeUp(P(t, Q(li), .5), () => {
      card(x, y, 830, 640, { fill: '#fff', stroke: c, lw: 5 });
      txt(n, x + 415, y + 50, { size: 46, weight: 900, color: c }); txt(sub, x + 415, y + 100, { size: 28, weight: 700, color: C.sub });
      if (ART[img]) pic(img, x + 40, y + 140, 330, 250);
      rows.forEach((r, j) => { const kk = P(t, Q(li) + .8 + j * 1.3, .4); txt(r, x + (ART[img] ? 600 : 415), y + 175 + j * 62, { size: 30, weight: 900, color: C.ink, alpha: kk }); });
      txt(i ? 'Sab anemia mein' : 'Kam O₂ ka asar', x + 415, y + 560, { size: 30, weight: 800, color: c, alpha: P(t, Q(li) + 5, .5) });
    }, 14);
  });
};

SC.a3b = (t, D, Q) => {
  header('Topic 3 · Sirf IRON DEFICIENCY ke signs', C.hem);
  fadeUp(P(t, 0, .5), () => { card(260, 140, 1400, 110, { fill: '#fff', r: 55 }); txt('Kuch signs SIRF iron deficiency ke · alag yaad rakho', W / 2, 196, { size: 40, weight: 900, color: C.hem }); }, 12);
  freg(0, 260, 140, 1400, 110);
  board(t, Q, [
    [1, 0, 'Ajeeb cheezein khaana: mitti, paint, baraf', 'PICA', C.hem, null],
    [2, 0, 'Restless legs · baal jhadna · conjunctival rim pallor', 'KOILONYCHIA (chamach nails)', C.kid, null],
    [3, 0, 'IDA + nigalne mein mushkil (dysphagia)', 'PLUMMER–VINSON', C.warn, null],
  ], { cols: 1, ch: 190, gap: 210, y0: 290 });
  neoRemember(t, P(t, Q(4), .5), 'Sab: pallor · tachycardia · murmur  |  IDA: pica · koilonychia  |  IDA + dysphagia → PVS', C.hem);
};

SC.recap = (t, D, Q) => {
  header('Part 1 · Ek baar dobara', C.hem);
  recapRows(t, Q, 'Ek baar dobara', [
    [0, 'Anemia = Hb kam', 'Male < 13.5 · Female < 12', C.hem, null],
    [1, 'MCV ke 3 dibbe', '< 80 micro · 80–95 normo · > 95 macro', C.kid, null],
    [2, 'Microcytic', 'Iron · chronic · sidero · thal', C.warn, null],
    [3, 'Sab anemia · IDA khaas', 'Fatigue, pallor, tachy · pica, koilonychia, RLS', C.ob2, null],
    [4, 'IDA + dysphagia', 'Plummer–Vinson', C.bad, null],
  ], 220, 150);
};
SC.end = (t, D) => { fadeUp(P(t, 0, .6), () => { dropIcon(W / 2, 380, 1.6); txt('Anemia · Part 1', W / 2, 600, { size: 72, weight: 900, color: C.navy }); }); fadeUp(P(t, .8, .6), () => txt('For education only · Follow current guidelines', W / 2, 700, { size: 32, weight: 600, color: C.mute })); };
