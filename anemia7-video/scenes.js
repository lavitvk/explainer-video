C.sc = '#BE123C'; C.hem = '#B91C1C';
function bigPanel(t, Q, list, x, y, w, h, color) {
  let cur = null, k0 = 0; list.forEach(([li, img]) => { if (t >= Q(li) - .2 && ART[img]) { cur = img; k0 = Q(li) - .2; } });
  list.forEach(([li, img]) => freg(li, x, y, w, h));
  if (!cur) return;
  const k = eo(P(t, k0, .6));
  ctx.save(); ctx.globalAlpha *= k; card(x, y, w, h, { fill: '#fff', stroke: color, lw: 5, r: 28 }); pic(cur, x + 16, y + 16, w - 32, h - 32); ctx.restore();
}
function sickleIcon(cx, cy, s = 1) { ctx.save(); ctx.translate(cx, cy); ctx.scale(s, s); ctx.beginPath(); ctx.arc(0, 0, 70, -2.3, 2.3); ctx.arc(-40, 0, 62, 1.9, -1.9, true); ctx.closePath(); ctx.fillStyle = '#DC2626'; ctx.fill(); ctx.restore(); }

SC.intro = (t, D, Q) => {
  header('Anemia · Part 7', C.sc);
  if (t < Q(1) - .3) { partTitle(t, 'Anemia · Part 7', 'Sickle cell crises aur prevention', C.sc, (x, y) => sickleIcon(x, y, 1)); return; }
  fadeUp(P(t, Q(1) - .3, .5), () => txt('Pichhla part ek line mein', W / 2, 170, { size: 56, weight: 900, color: C.navy }));
  freg(1, 140, 140, 1640, 320); freg(2, 300, 520, 1320, 420);
  fadeUp(P(t, Q(1), .5), () => { card(220, 250, 1480, 100, { fill: '#fff', r: 50 }); txt('HbS · vaso-occlusion + hemolysis · crisis → fluids + pain', W / 2, 301, { size: 40, weight: 900, color: C.sc }); }, 12);
  pop(P(t, Q(2), .6), W / 2, 700, () => { sickleIcon(W / 2, 640, 1.1); txt('Sabse KHATARNAK emergencies', W / 2, 800, { size: 52, weight: 900, color: C.hem }); });
};

SC.a23 = (t, D, Q) => topicScene(t, Q, { hdr: 'Topic 23 · Acute chest syndrome', part: 'Topic 23', title: 'Acute chest syndrome (ACS)', color: C.hem, icon: (x, y) => sickleIcon(x, y, 1), items: [
  [1, 0, '+ bukhar · chest pain · hypoxemia · wheeze · cough', 'NAYA lung infiltrate', C.hem, null],
  [2, 0, 'Definition ki chaabi', 'NAYA INFILTRATE', C.warn, null],
  [3, 0, 'Causes (aksar >1)', 'Infection · VOC · atelectasis · thrombosis · fat embolism', C.blue, null],
], bopts: { cols: 1, ch: 170, gap: 190, y0: 190, cw: 1000 }, before: () => bigPanel(t, Q, [[1, 'acs_xray']], 1120, 170, 720, 560, C.hem) });

SC.a23b = (t, D, Q) => {
  header('Topic 23 · ACS management', C.hem);
  fadeUp(P(t, 0, .5), () => { card(120, 140, 1000, 110, { fill: '#fff', r: 24 }); txt('O₂ · IV fluids · pain · ANTIBIOTICS (sabko)', 620, 196, { size: 36, weight: 900, color: C.blue }); }, 12);
  freg(0, 120, 140, 1000, 110); freg(1, 120, 270, 1000, 110);
  fadeUp(P(t, Q(1), .5), () => { card(120, 270, 1000, 110, { fill: C.hem, r: 24, blur: 0 }); txt('MAINSTAY = BLOOD TRANSFUSION', 620, 326, { size: 44, weight: 900, color: '#fff' }); }, 12);
  if (ART.acs_care) { freg(0, 1160, 140, 680, 380); fadeUp(P(t, .3, .5), () => { card(1160, 140, 680, 380, { fill: '#fff', stroke: C.hem, lw: 5, r: 28 }); pic(Q(5) > 0 && t > Q(4) && ART.exchange ? 'exchange' : 'acs_care', 1176, 156, 648, 348); }, 10); }
  const rows = [[2, 'MILD', 'SpO₂ > 90% · 1 lobe', '0–2 unit simple', C.ok], [3, 'MODERATE', 'SpO₂ ≥ 85% · ≤ 2 lobes', '2–3 unit simple', C.warn], [4, 'SEVERE', 'SpO₂ < 85% · > 2 lobes', 'EXCHANGE transfusion', C.hem]];
  rows.forEach(([li, a, b, c, col], i) => { const y = 410 + i * 130; freg(li, 120, y, 1000, 115); fadeUp(P(t, Q(li), .5), () => { card(120, y, 1000, 115, { fill: '#fff', r: 22 }); rr(120, y, 14, 115, 7); ctx.fillStyle = col; ctx.fill(); txt(a, 250, y + 58, { size: 34, weight: 900, color: col }); txt(b, 560, y + 58, { size: 28, weight: 800, color: C.sub }); txt(c, 930, y + 58, { size: 30, weight: 900, color: col }); }, 12); });
  freg(5, 1160, 540, 680, 380);
  fadeUp(P(t, Q(5), .5), () => { card(1160, 540, 680, 380, { fill: C.warnSoft, r: 28 }); txt('Exchange bhi jab:', 1500, 590, { size: 32, weight: 900, color: C.warn }); ['Pehle severe ACS / heart-lung dis', '> 1 lobe', 'Simple ke baad bhi badhe', 'O₂ ke baad bhi SpO₂ gire'].forEach((s, j) => txt('• ' + s, 1500, 660 + j * 62, { size: 27, weight: 800, color: C.ink })); }, 12);
};

SC.a23c = (t, D, Q) => topicScene(t, Q, { hdr: 'Topic 23 · File ka MCQ', part: 'MCQ', title: 'File ka MCQ', color: C.hem, icon: (x, y) => sickleIcon(x, y, 1), skipTitle: true, items: [
  [0, 0, 'Bachcha · URI → bukhar + saans · lobar infiltrate · Hb ↓ · retic ↑', 'Kya hai?', C.ink, null],
  [1, 0, 'Hb ↓ + retic ↑ = hemolysis · naya infiltrate = ACS', 'Chaabi lagao', C.warn, null],
  [2, 0, 'Answer (A)', 'SICKLE CELL ANEMIA', C.hem, null],
], bopts: { cols: 1, ch: 170, gap: 190, y0: 190, cw: 1000 }, rem: [3, 'ACS: naya infiltrate · sabko antibiotics · mainstay transfusion · severe → exchange'], before: () => bigPanel(t, Q, [[0, 'acs_xray']], 1120, 170, 720, 560, C.hem) });

SC.a24 = (t, D, Q) => {
  header('Topic 24 · Aplastic vs sequestration', C.kid);
  if (t < Q(1) - .3) { partTitle(t, 'Topic 24', 'Aplastic crisis vs splenic sequestration', C.kid, (x, y) => sickleIcon(x, y, 1)); return; }
  fadeUp(P(t, Q(1) - .3, .5), () => { card(360, 130, 1200, 100, { fill: C.kid, r: 50, blur: 0 }); txt('Dono mein Hb ↓ · farq = RETIC COUNT', W / 2, 181, { size: 44, weight: 900, color: '#fff' }); }, 12);
  freg(1, 360, 130, 1200, 100);
  [[2, 3, 'APLASTIC CRISIS', [['Marrow kuch din BAND', 2], ['RETIC ↓ (kam)', 2], ['PARVOVIRUS B19', 3]], 'parvo', C.blue], [4, 5, 'SPLENIC SEQUESTRATION', [['Marrow theek · RBC spleen mein phanse', 4], ['Hb ↓ ≥ 2 · SPLEEN ↑ achanak', 5], ['RETIC ↑ · jaan-leva', 5]], 'sequest', C.hem]].forEach(([l1, l2, n, rows, img, c], i) => {
    const x = 90 + i * 880; freg(l1, x, 260, 860, 680); freg(l2, x, 260, 860, 680);
    fadeUp(P(t, Q(l1), .5), () => {
      card(x, 260, 860, 680, { fill: '#fff', stroke: c, lw: 5 }); txt(n, x + 430, 315, { size: 40, weight: 900, color: c });
      if (ART[img]) pic(img, x + 30, 350, 800, 360);
      rows.forEach(([r, li], j) => txt(r, x + 430, 765 + j * 58, { size: 31, weight: 900, color: j === 2 ? c : C.ink, alpha: P(t, Q(li) + (li === l1 ? j * 1.2 : 0), .4) }));
    }, 14);
  });
};

SC.a24b = (t, D, Q) => topicScene(t, Q, { hdr: 'Topic 24 · File ka MCQ', part: 'MCQ', title: 'File ka MCQ', color: C.hem, icon: (x, y) => sickleIcon(x, y, 1), skipTitle: true, items: [
  [0, 0, 'SCD · dono pair dard 3 hr · DVT nahi · spleen ↑ · Hb 3.2', 'Kya hai?', C.ink, null],
  [1, 0, 'Bada spleen + bahut kam Hb', 'SPLENIC SEQUESTRATION', C.kid, null],
  [2, 0, 'Best next step (D)', 'BLOOD TRANSFUSION', C.hem, null],
  [3, 0, 'Hydration + morphine = painful crisis ke liye', 'Yahan khoon ki kami → transfusion', C.warn, null],
], bopts: { cols: 1, ch: 150, gap: 168, y0: 170, cw: 1000 }, rem: [4, 'Aplastic: retic ↓, parvo B19 · Sequestration: retic ↑, spleen ↑ → transfusion'], before: () => bigPanel(t, Q, [[1, 'sequest'], [2, 'acs_care']], 1120, 170, 720, 560, C.hem) });

SC.a25 = (t, D, Q) => topicScene(t, Q, { hdr: 'Topic 25 · Complications se bachao', part: 'Topic 25', title: 'Complications se bachao', color: C.ok, icon: (x, y) => sickleIcon(x, y, 1), items: [
  [1, 0, 'Spleen jaldi band', 'CAPSULATED bacteria ka khatra', C.hem, null],
  [2, 0, 'Pneumococcal · meningococcal · Hib', 'VACCINES + PENICILLIN (≥ 5 saal tak)', C.ok, null],
  [3, 0, 'Complications kam karne ki dawa', 'HYDROXYUREA', C.blue, null],
  [4, 0, 'Kaise? HbF sickle nahi hota', 'HbF ↑', '#7C3AED', null],
], bopts: { cols: 1, ch: 150, gap: 168, y0: 170, cw: 1000 }, rem: [5, 'Vaccines + penicillin 5 saal tak · hydroxyurea → HbF ↑'], before: () => bigPanel(t, Q, [[2, 'vaccine'], [3, 'hydroxy']], 1120, 170, 720, 560, C.ok) });

SC.recap = (t, D, Q) => {
  header('Part 7 · Ek baar dobara', C.sc);
  recapRows(t, Q, 'Ek baar dobara', [
    [0, 'ACS', 'Naya infiltrate · sabko Abx · transfusion · severe → exchange', C.hem, null],
    [1, 'Crises', 'Retic ↓ parvo B19 · retic ↑ spleen ↑ → transfusion', C.kid, null],
    [2, 'Prevention', 'Vaccines · penicillin 5 yr · hydroxyurea (HbF ↑)', C.ok, null],
  ], 280, 200);
};

SC.quiz = (t, D, Q) => {
  header('Quiz · khud se poochho', C.warn);
  if (t < Q(1) - .2) { fadeUp(P(t, 0, .5), () => { txt('QUIZ', W / 2, 400, { size: 110, weight: 900, color: C.warn }); txt('Sawal suno → ruko → khud jawab socho', W / 2, 530, { size: 44, weight: 800, color: C.sub }); }); return; }
  qaCards(t, Q, [[1, 2, 'ACS definition ki chaabi?', 'NAYA lung infiltrate'], [3, 4, 'ACS mein antibiotics kisko?', 'HAR patient ko'], [5, 6, 'ACS ka mainstay?', 'BLOOD TRANSFUSION'], [7, 8, 'SpO₂ < 85% · > 2 lobes?', 'EXCHANGE transfusion'], [9, 10, 'Aplastic vs sequestration: test?', 'RETIC COUNT'], [11, 12, 'Aplastic crisis ka common cause?', 'PARVOVIRUS B19'], [13, 14, 'Spleen ↑ · Hb 3.2 · retic ↑ → next?', 'BLOOD TRANSFUSION'], [15, 16, 'Penicillin prophylaxis kab tak?', '≥ 5 SAAL'], [17, 18, 'Hydroxyurea kaise kaam karti?', 'HbF ↑']], C.warn);
};
SC.end = (t, D) => { fadeUp(P(t, 0, .6), () => { sickleIcon(W / 2, 380, 1.6); txt('Anemia · Part 7', W / 2, 600, { size: 72, weight: 900, color: C.navy }); }); fadeUp(P(t, .8, .6), () => txt('For education only · Follow current guidelines', W / 2, 700, { size: 32, weight: 600, color: C.mute })); };
