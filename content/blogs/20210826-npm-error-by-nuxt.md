---
title: Nuxt.jsでnpm run devでできない場合の対処法
date: 2021.8.26
category: Nuxt.js
description: 'Nuxt.jsでローカルサーバーを立ち上げられなかった時の解決方法です。'
---

ある日、いつも通り`npm run dev`でローカルサーバーを立ち上げてNuxt.jsを使用した開発を行おうとした際に下記のエラーに遭遇し、ローカルサーバーを立ち上げることができませんでした。

## 実際に表示されたエラーの内容
下記の内容が実際に表示されたエラーの一部となっています。

```
Module build failed (from ./node_modules/sass-loader/dist/cjs.js):                                                                                                                                         friendly-errors 23:15:41
Error: Missing binding /hoge/node_modules/node-sass/vendor/darwin-x64-83/binding.node
Node Sass could not find a binding for your current environment: OS X 64-bit with Node.js 14.x

Found bindings for the following environments:
  - OS X 64-bit with Node.js 12.x

This usually happens because your environment has changed since running `npm install`.
Run `npm rebuild node-sass` to download the binding for your current environment.
``` 

英語は苦手ですが、「This usually happens because your environment has changed since running `npm install`.」と書いてあるところに注目してみましょう。

正確に訳すことはできませんが、どうやら実行環境が変わったから`$ npm install`してくださいねってことらしいです！

## 解決方法
`$ npm install`を実行すれば良いのですが、念のために既に存在しているnode_modulesディレクトリとpackage-lock.jsonを削除した後にキャッシュもクリアしておこうと思います。

やることがたくさんあるように思えますが、下記のコマンドを1回実行するだけで全てを解決することができます。
```
$ rm -rf node_modules && rm package-lock.json && npm cache clear --force && npm cache clean --force && npm i
```

無事に解決することができ、ローカルサーバーを立ち上げることができました。

同じように`$ npm run dev`でローカルサーバーが立ち上がらずに困っている方の参考になれば幸いです。