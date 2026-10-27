// SNS投稿画像（自主制作サンプル）を書き出すスクリプト
// 使い方: リポジトリのルートで `node tools/samples/render-sns.js`（Playwright が必要）
const path = require('path');
const { chromium } = require('playwright');

(async () => {
  const root = path.resolve(__dirname, '../..');
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1080, height: 1080 } });
  await page.goto('file://' + path.join(__dirname, 'sns-post-template.html'));
  await page.waitForLoadState('networkidle');
  await page.screenshot({ path: path.join(root, 'assets/images/samples/sns-blueberry-latte.png') });
  await browser.close();
})();
