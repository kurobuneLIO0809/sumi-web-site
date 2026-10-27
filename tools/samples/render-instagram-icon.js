// Sumi Web の Instagram アイコン（3案）を書き出すスクリプト
// 使い方: リポジトリのルートで `node tools/samples/render-instagram-icon.js`
const path = require('path');
const { chromium } = require('playwright');

(async () => {
  const root = path.resolve(__dirname, '../..');
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1080, height: 1080 } });
  for (const v of ['a', 'b', 'c']) {
    await page.goto('file://' + path.join(__dirname, 'instagram-icon-template.html') + '?v=' + v);
    await page.waitForLoadState('networkidle');
    await page.screenshot({ path: path.join(root, `brand/instagram/sumi-web-icon-${v}.png`) });
  }
  await browser.close();
})();
