const { chromium } = require('playwright');
const fs = require('fs'), { spawn } = require('child_process');
const mode = 'full', PART = +process.argv[2], NP = +process.argv[3];
(async () => {
  const tl = JSON.parse(fs.readFileSync('timeline.json'));
  tl.push({ id: 'end', dur: 4, cues: [] });
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1920, height: 1080 } });
  p.on('pageerror', e => console.error('PAGEERR', e.message));
  await p.goto('file://' + __dirname + '/render.html');
  await p.evaluate(() => document.fonts.ready);
  await p.evaluate(() => window.artReady);
  const total = await p.evaluate(t => setup(t), tl);
  const shot = async () => Buffer.from((await p.evaluate(() => document.getElementById('c').toDataURL('image/jpeg', .93))).split(',')[1], 'base64');
  if (mode === 'preview') {
    fs.mkdirSync('preview', { recursive: true });
    let acc = 0;
    for (const s of tl) { await p.evaluate(T => renderFrame(T), acc + s.dur * (+process.env.F || 0.85)); fs.writeFileSync(`preview/${s.id}.jpg`, await shot()); acc += s.dur; }
  } else {
    const fps = 30, N = Math.ceil(total * fps);
    const ff = spawn('ffmpeg', ['-y', '-v', 'error', '-f', 'image2pipe', '-framerate', String(fps), '-c:v', 'mjpeg', '-i', '-', '-c:v', 'libx264', '-pix_fmt', 'yuv420p', '-crf', '20', '-preset', 'veryfast', `part${PART}.mp4`], { stdio: ['pipe', 'inherit', 'inherit'] });
    const s0 = Math.floor(N * PART / NP), s1 = Math.floor(N * (PART + 1) / NP);
    for (let i = s0; i < s1; i++) {
      await p.evaluate(T => renderFrame(T), i / fps);
      if (!ff.stdin.write(await shot())) await new Promise(r => ff.stdin.once('drain', r));
      if (i % 300 === 0) console.log('frame', i, '/', N);
    }
    ff.stdin.end(); await new Promise(r => ff.on('close', r));
  }
  await b.close();
})();
