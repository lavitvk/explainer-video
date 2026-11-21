import json, subprocess, time, os
sc=json.load(open("script.json"))
for s in sc:
  for i,l in enumerate(s["lines"]):
    base=f"lines/{s['id']}_{i}"
    if os.path.exists(base+".wav"): continue
    for k in range(15):
      r=subprocess.run(["python3","tts.py",l["say"],base+".mp3","hi-IN-MadhurNeural","-8%"],capture_output=True)
      if r.returncode==0 and os.path.getsize(base+".mp3")>1000: break
      time.sleep(3)
    else: print("FAIL",base); continue
    subprocess.run(["ffmpeg","-v","error","-y","-i",base+".mp3","-af","silenceremove=start_periods=1:start_threshold=-45dB,areverse,silenceremove=start_periods=1:start_threshold=-45dB,areverse","-ar","48000","-ac","1","-sample_fmt","s16",base+".wav"],check=True)
    os.remove(base+".mp3")
print("done", len(os.listdir("lines")))
