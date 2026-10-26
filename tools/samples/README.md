# 制作サンプルの書き出しツール

`assets/images/samples/` と `assets/video/` にある自主制作サンプルを作り直すためのファイルです。公開サイトの表示には使いません。

| ファイル | 内容 |
| --- | --- |
| `sns-post-template.html` | SNS画像（1080×1080）のレイアウト |
| `render-sns.js` | 上記を PNG に書き出す（Playwright） |
| `short-video-template.html` | 縦型動画のレイアウトとアニメーション（`window.render(秒)`） |
| `render-video.js` | 動画を 30fps・15秒分の PNG 連番に書き出す（Playwright） |
| `make-bgm.py` | BGM（15秒）をサイン波の合成で作る（Python + NumPy） |

## 使用素材

- イラスト：`samples/cafe/images/` の自作SVG
- BGM：`make-bgm.py` で生成した自作音源
- フォント：IPAPゴシック（IPAフォントライセンスv1.0。商用利用可、画像・動画への使用可）。インストールされていない環境では別のフォントで描画されます。

## 書き出し手順（リポジトリのルートで実行）

```sh
# SNS画像
node tools/samples/render-sns.js
convert assets/images/samples/sns-blueberry-latte.png -resize 640x640 -quality 82 assets/images/samples/sns-blueberry-latte-thumb.webp

# 縦型動画
python3 tools/samples/make-bgm.py /tmp/bgm.wav
node tools/samples/render-video.js /tmp/frames
ffmpeg -y -framerate 30 -i /tmp/frames/f%04d.png -i /tmp/bgm.wav \
  -vf "scale=720:1280:flags=lanczos,format=yuv420p" -c:v libx264 -preset slow -crf 23 \
  -c:a aac -b:a 96k -shortest -movflags +faststart assets/video/cafe-aoiro-short.mp4
ffmpeg -y -i /tmp/frames/f0390.png -vf scale=720:1280 -quality 80 assets/images/samples/short-video-poster.webp
ffmpeg -y -i /tmp/frames/f0165.png -vf scale=720:1280 -quality 80 assets/images/samples/short-video-thumb.webp
```
