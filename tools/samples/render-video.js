// 縦型ショート動画（自主制作サンプル）のフレームを書き出すスクリプト
// 使い方: リポジトリのルートで `node tools/samples/render-video.js <出力フォルダ>`
// その後 tools/samples/README.md の ffmpeg コマンドで MP4 に変換します。
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

const FPS = 30;
const DURATION = 15;

(async () => {
  const outDir = path.resolve(process.argv[2] || 'frames');
  fs.mkdirSync(outDir, { recursive: true });
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1080, height: 1920 } });
  await page.goto('file://' + path.join(__dirname, 'short-video-template.html'));
  await page.waitForLoadState('networkidle');
  for (let i = 0; i < FPS * DURATION; i++) {
    await page.evaluate(t => window.render(t), i / FPS);
    await page.screenshot({ path: path.join(outDir, `f${String(i).padStart(4, '0')}.png`) });
  }
  await browser.close();
})();
