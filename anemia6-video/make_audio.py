# narration: GAP after every SENTENCE clip; one cue per line (spans its sentences)
import json, wave, os
from sentences import split_sent
GAP, LEAD, SR = 2.5, 0.6, 48000
sc = json.load(open("script.json"))
out = wave.open("narration.wav", "wb"); out.setnchannels(1); out.setsampwidth(2); out.setframerate(SR)
sil = lambda s: out.writeframes(b"\x00\x00" * int(round(s * SR)))
T = 0.0; tl = []
for s in sc:
    start = T; cues = []
    sil(LEAD); T += LEAD
    for i, l in enumerate(s["lines"]):
        t0 = T; n = len(split_sent(l["say"]))
        for j in range(n):
            w = wave.open(f"lines/{s['id']}_{i}_{j}.wav"); fr = w.readframes(w.getnframes()); d = w.getnframes() / SR
            out.writeframes(fr); T += d
            sil(GAP); T += GAP
        cues.append({"line": i, "rep": 1, "of": 1, "t": round(t0 - start, 3), "d": round(T - GAP - t0, 3)})
    tl.append({"id": s["id"], "dur": round(T - start, 3), "cues": cues})
sil(4); out.close()
json.dump(tl, open("timeline.json", "w"), indent=1)
print("total", round(T, 1), "s")
