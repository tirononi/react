https://youtu.be/gLbTluYSb_U?si=iSnQ-T5D9h6H-Y8b

jsx
jsの拡張言語

１、reactライブラリをインポート
拡張子.jsx

classはclassName
{}で変数を扱える

2つ以上の場合
必ず階層構造になるように
<React.fragment></React.fragment>で囲むとhtmlタグとして出力されない
省略形　<></>


https://youtu.be/Ym4If5W9SS0?si=C7QvTwRMdya9wxC-

Create React App
1.homebrew
2.nodebrew 
3.node.js npm
4.nodeの環境パスを通す

シングルページアプリケーション
xみたいにページの一部だけ更新していく
必要なコンポーネントだけ更新していく


nodejs
jsをサーバーサイドで動かすために必要
npm
cssでいうbootstrapをインストールしたり、ビルドツールが使えるように

homebrew
ターミナルでアプリをインストールできるようになるやつ

nvm
node.jsのバージョンを管理

一回pc閉じたらnpm run devで起動する
reloadしなくても反映される


assets 外部cssとか読み込むとこ
public 画像やおんがくなど


useState
クリック数などはページをリロードすると０に戻る、集計したいならバックエンドが必要
コンポーネント名は大文字から始める
Buttonなど

useEffect（Hooks）
副作用に使う
Xの未通知表示をタップしたら消える、tlをスクロールしたら動画が勝手に再生される


