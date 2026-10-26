今日やること — Android向けPWA

【スマホだけで公開する方法（GitHub Pages）】
1. Chromeで https://github.com/signup にアクセスし、無料アカウントを作成（持っていればログイン）。
2. GitHubで新しいPublicリポジトリ today-todo を作成。
3. リポジトリの「Add file」→「Upload files」を選び、このZIPを解凍した中の index.html, app.js, sw.js, manifest.webmanifest, .nojekyll と iconsフォルダ内の画像2枚をアップロード。必ずフォルダ構成を維持する。
   スマホでアップロード画面が使いにくい場合、Chromeの「PC版サイト」をONにする。画像はGitHubの icons フォルダを作成してその中にアップロードすることも可能。
4. リポジトリの Settings → Pages → Build and deployment → Deploy from a branch → main / (root) → Save。
5. 数分後、https://ユーザー名.github.io/today-todo/ にアクセス。
6. Chrome右上の「︙」→「アプリをインストール」または「ホーム画面に追加」を選択。

【保存について】
タスクは利用中のブラウザー・アプリのlocalStorageに保存されます。サイトにタスクをアップロードしません。
同じURLでも別のブラウザーや端末とは同期されません。ブラウザーデータやアプリデータを削除するとタスクも消える可能性があります。
タスクは日付が変わっても自動消去しません。完了チェック後に「完了した項目を削除」を押してください。

【注意】
GitHub Pagesの公開ページとコードは一般公開されます。コードに秘密情報を含めないでください。
GitHub Pagesにアップロードするのは解凍したファイルでありZIPファイルそのものではありません。
PWAとしてのインストールにはHTTPSでの公開が必要です。ZIP内のHTMLを直接開くだけではインストールできません。
