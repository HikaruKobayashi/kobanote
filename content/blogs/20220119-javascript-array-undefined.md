---
title: JavaScriptで連想配列の空判定をする方法
date: 2022.1.19
category: JavaScript
description: 'JavaScriptで連想配列の空判定をしようとした際に学んだこと'
---

## 前提
JavaScriptで空判定をする際に詰まった。  

## どんな状況だったか？
{key1: value1, key2: value2}といった連想配列が想定されていた。 
やりたいこととしては、渡ってくる値が空の場合に表示する内容を切り替えるべくifで条件分けをしたかった。  

## うまくいかなかったコード
私が最初に書いてうまくいかなかったコードは下記の通りです。  
普通の配列と同じように単純にlengthで配列の長さを取得することができるかと思いましたが、見事に**undefined**になってしまいました。  
```javascript
const 連想配列 = {}
console.log(連想配列.length); // undefined
```

## うまくいったコード
Object.keysメソッドを使用することで解決しました！  
まずは、普通に中身が入っている場合のlength取得は下記のように記述することで取得できます。
```javascript
const sample = {
  name: "kobayashi",
  age: 18
};
console.log(Object.keys(sample).length); // 2
```

次に、空判定をする場合は下記のようにすれば良いですね。
```javascript
const sample = {};
if (Object.keys(sample).length === 0) {
  console.log("空です"); // 空です
}
```
上記のサンプルコードをchromeの開発者ツールのコンソール機能等で試して頂ければ連想配列の空判定ができていることがわかるかと思います。  

## まとめ
連想配列って何かと純粋な配列と操作が異なるで扱い辛いです...。  
とはいえ、避けては通れないのでこれを機に苦手意識を無くしていきたいと思います。  
もし、この記事が連想配列でお困りの方の参考になれば嬉しいです。  