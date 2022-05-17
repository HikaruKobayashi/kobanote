---
title: React Nativeでアプリをリリースした話
date: 2022.3.27
category: React Native
description: "React Nativeでネイティブアプリを開発した感想"
---

## 前書き

React Native で現在地の近くにあるカフェを簡単に検索することができるアプリをリリースしました。  
この記事では、アプリを開発、リリースした感想などを書いていきます。
実際に作ったアプリは[こちら](https://t.co/f8s1QIeBaP)です。

## この記事で話さないこと

React Native で開発の仕方や技術について深くはお話しません。  
あくまでも一個人が React Native を使用して開発をした際の感想です。

## なぜ React Native を採用したか？

ネイティブアプリを開発すると言っても開発する技術の選択肢は様々あります。  
例えば、ios のアプリを開発したいなら Swift を選ぶことが多いかと思いますし、Android のアプリを開発するなら Kotlin や Java あたりを採用するという選択肢があるかと思います。  
はたまた、クロスプラットフォームで開発を行うとなれば、Flutter や React Native といった選択肢が挙がるかと思います。  
今回、私が React Native を採用した理由ですが、ずばり React を学習していたので、その他の技術に比べて学習コストが低いと判断したからです。  
また、現在は ios のみですが、ゆくゆくは Android や Web にも拡大させていく際に、クロスプラットフォームで開発できる環境だと個人開発勢にはありがたいと判断しました。  
React を学習していたというところについてですが、私自身ネイティブアプリのエンジニアではありません。  
本業は、フロントエンドエンジニアです。  
では、本業で React を使用しているのかと言われるとそうでもないのでやっかいなのですが、ともかくフロントエンドエンジニアとして React を学習していたので React Native への参入障壁は低いと考えていました。

## 開発する上で大変だったこと

前述で React を学習していたから参入障壁は低いと言いましたが、実際には半分ハズレで半分当たりといったところでした。  
当たりという部分では、基本的な文法が分かることに加え、コンポーネントベースでの開発をすることでエラーやバグの改修などがしやすいというところでした。  
ハズレという言い方も的を得ていない気がしますが、苦労した点でいうとネイティブアプリを開発する知識が一切なかったことです。  
例えば、Web アプリであれば開発者ツール等を使用すれば簡単にデバッグなどができますが、XCode を使用したシュミレーターでどのようにデバッグすればいいのかなど苦労することが多かったです。

## よかったこと

当たり前ですが、リリース後にユーザーから使いやすいとか、ここをこうしてもらいたいみたいな要望を頂いた際に作ってよかった、これからも頑張ろうと思うことができました。  
また、純粋に React の知見がかなり溜まったと思います。  
もともとはクラスコンポーネントを使用した書き方で学習を進めていましたが、React の公式が関数を使用した書き方をおすすめしていたので関数コンポーネントを使用した書き方や使ったことのない Hooks などを勉強することができました。  
まだまだ未熟ではありますが、これを機に React の知見をさらに深めていきたいものです。

## さいごに

色々と言ってきましたが、今回の開発は良い経験になったと思います。  
本業とは異なる開発も良い刺激、新しい発見をもたらすのかもしれません。  
また、リリースして終わりではなく、引き続きアップデートしつつ、React Native の理解をさらに深めていければと思います。  
最後に改めて宣伝ですが、開発したアプリは[こちら](https://t.co/f8s1QIeBaP)です。