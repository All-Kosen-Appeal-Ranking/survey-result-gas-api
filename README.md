# 全国高専魅力度ランキング アンケート結果API
## 📝概要
このリポジトリは[全国高専魅力度ランキング]()のアンケート結果をAPI配信するためのGASプロジェクトです。
そもそもの動機は 全国都道府県魅力度ランキング に則り、高専版を制作したら面白いのではないか、というものです。

このプロジェクトは決して低順位の高専を批判したり差別するものではなく、ユーモア・遊びであるとご理解いただければ幸いです。
むしろ、この結果云々から各高専の課題が浮き彫りとなり、これを改善するために利用いただければ、これほどうれしいことはありません。

## 🔗リンク集
### アンケートフォーム
[🗾全国高専魅力度ランキング](https://forms.gle/QksDmh9dNnAsPtBC6) にて高専魅力度ランキングにご参加いただけます！
25ほどの質問を用意しています。ぜひご協力お願い致します🙇

### アンケート結果をまとめているスプレッドシート
アンケート結果のスプレッドシートは一般公開されています。
[🗾全国高専魅力度ランキング（回答） \- Google スプレッドシート](https://docs.google.com/spreadsheets/d/14_rlX2PBpnpK4e7Bfv_ewsVepha7uQBxJ0pCmB3Umck/edit?usp=sharing) のセルデータを編集して、GASのWebアプリとしてデプロイしています。

### アンケート結果API
> 注意点として、GASのWebアプリデプロイではソースコード変更時に毎度デプロイしなおす必要があります。
> そのため、このAPIページのURLは変更される場合があります。
> 古いバージョンのデプロイでもAPIは取得できますが、データが古い可能性があります。

以下のリンクからJSONデータをAPI配信しています。
https://script.google.com/macros/s/AKfycbyFLRN-w78O55Oa3G89sqemc1pU3rTxPWjfvNRULMIEgAKqJdfWObMyIJ2mlEKRWJ99/exec



## 📧問い合わせ
バグの報告やご意見等は、管理者の公式Twitter[@timdaik](https://x.com/timdaik)のDMにてご連絡ください。

## 参考
特に2つ目の記事は基本セットアップからローカルデバッグの設定まで詳しく説明されていたので参考になった。
- [留め具でコマンドライン インターフェースを使用する  |  Apps Script  |  Google for Developers](https://developers.google.com/apps-script/guides/clasp?hl=ja)
- [GAS用のCLIツール clasp を使ってGASをローカルで開発して実行するの巻。 #GoogleAppsScript - Qiita](https://qiita.com/jiroshin/items/dcc398285c652554e66a#%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3-%E5%85%AC%E9%96%8B%E5%8F%AF%E8%83%BDapi%E3%81%AE%E3%83%90%E3%83%BC%E3%82%B8%E3%83%A7%E3%83%B3%E3%81%8C%E6%9C%80%E6%96%B0%E3%81%A7%E3%81%AF%E3%81%AA%E3%81%84)
- [GASをGit管理するならGithubアシスタントとclaspどっちを使うか？](https://zenn.dev/rescuenow/articles/936a1f4fb4d889)
