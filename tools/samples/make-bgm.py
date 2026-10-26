"""縦型ショート動画用のBGM（15秒）を自作して WAV で書き出すスクリプト。

外部音源は使わず、サイン波の合成だけで作っています。
使い方: python3 tools/samples/make-bgm.py <出力.wav>
"""
import sys
import wave

import numpy as np

RATE = 44100
DURATION = 15.0
BPM = 96
BEAT = 60 / BPM

# C - Am - F - G のコード進行（1コード2拍）
CHORDS = [
    [261.63, 329.63, 392.00],
    [220.00, 261.63, 329.63],
    [174.61, 220.00, 261.63],
    [196.00, 246.94, 293.66],
]

t = np.arange(int(RATE * DURATION)) / RATE
out = np.zeros_like(t)


def note(freq, start, length, gain):
    """減衰するやわらかい電子ピアノ風の音を1つ加える。"""
    i0 = int(start * RATE)
    if i0 >= len(t):
        return
    i1 = min(len(t), i0 + int(length * RATE))
    tt = t[: i1 - i0]
    env = np.exp(-tt * 3.2) * np.minimum(1, tt / 0.01)
    tone = np.sin(2 * np.pi * freq * tt) + 0.3 * np.sin(4 * np.pi * freq * tt) + 0.1 * np.sin(6 * np.pi * freq * tt)
    out[i0:i1] += gain * env * tone


eighth = BEAT / 2
for step in range(int(DURATION / eighth) + 1):
    start = step * eighth
    chord = CHORDS[(step // 4) % len(CHORDS)]
    if step % 4 == 0:
        note(chord[0] / 2, start, BEAT * 2.5, 0.35)
        for f in chord:
            note(f, start, BEAT * 2, 0.08)
    arp = [chord[0], chord[1], chord[2], chord[1]]
    note(arp[step % 4] * 2, start, BEAT, 0.12)

# 冒頭0.5秒のフェードインと、最後1.5秒のフェードアウト
fade = np.minimum(1, t / 0.5) * np.minimum(1, (DURATION - t) / 1.5)
out *= fade
out = out / np.max(np.abs(out)) * 0.6

path = sys.argv[1] if len(sys.argv) > 1 else "bgm.wav"
with wave.open(path, "wb") as w:
    w.setnchannels(1)
    w.setsampwidth(2)
    w.setframerate(RATE)
    w.writeframes((out * 32767).astype(np.int16).tobytes())
