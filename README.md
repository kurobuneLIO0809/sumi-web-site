# Sumi Web 営業サイト

HTML / CSS / JavaScript だけで動く静的サイトです。サーバー処理、外部フォント、外部画像、API は使っていません。

## 公開前に設定する項目

1. 問い合わせ先は `KodebyKraft@gmail.com` に設定済みです（`assets/js/main.js` の `contactEmail`、`index.html` の問い合わせ欄・フッター、`privacy.html`）。変更する場合はこれらをすべて書き換えてください。
2. 掲載料金はすべて税別に統一しています。税込表示で運用する場合は、料金と注記をすべて変更してください。
3. 個人情報、ログイン情報、非公開のクライアント情報がないか確認してください。

## 制作サンプル

`index.html` の `#works` セクションに、架空のカフェ「Café Aoiro」を題材にした自主制作サンプルを3点掲載しています。実在する店舗・お客様の受注実績ではないため、「自主制作サンプル」の表記は受注実績に差し替えるまで残してください。

| サンプル | 公開ページ | 主なファイル |
| --- | --- | --- |
| 架空のカフェのWebサイト | `samples/cafe/index.html` | `samples/cafe/`（HTML・CSS・JS・自作SVGイラスト） |
| 新商品を宣伝するSNS画像 | `samples/sns-post.html` | `assets/images/samples/sns-blueberry-latte.png`（1080×1080） |
| 商品紹介の縦型ショート動画 | `samples/short-video.html` | `assets/video/cafe-aoiro-short.mp4`（720×1280・15秒） |

- イラストはすべて自作のSVG、BGMはプログラムで合成した自作音源です。外部の写真・音源は使っていません。
- 画像・動画内の文字には IPAフォント（IPAフォントライセンスv1.0、商用利用可）を使用しています。
- 画像・動画の再書き出し方法は `tools/samples/README.md` を参照してください。

## ローカル確認

`index.html` をブラウザで開くだけで表示できます。より確実に確認するには、VS Code の Live Server など任意の静的HTTPサーバーでこのフォルダを開いてください（導入は必須ではありません）。

確認項目：PC / スマートフォン表示、ヘッダーのメニュー、ページ内リンク、FAQ、料金表、フッターリンク、メール作成ボタン、ブラウザの開発者ツールのコンソール。

## GitHub Pages で無料公開

1. GitHubアカウントを作成し、GitHubで新しいリポジトリを作成します。
2. このフォルダ内のファイルとフォルダをすべてリポジトリのルートにアップロードします（`index.html` がルートにある状態）。
3. リポジトリの **Settings** → **Pages** を開きます。
4. **Build and deployment** の Source で **Deploy from a branch** を選び、公開するブランチ（通常 `main`）とフォルダ **/(root)** を選択して保存します。
5. 数分後、Pages画面に表示される公開URLを開いて確認します。URLはアカウント名・リポジトリ名で変わるため、このREADMEでは推測しません。

相対パスで記述しているため、GitHub Pages のリポジトリサブパスでもCSS・JavaScript・ページリンクは動作します。
