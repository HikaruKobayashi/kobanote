---
title: GitActionsで自動デプロイでコケた
date: 2021.5.18
category: GitHub
description: '自動デプロイって魅力的ですよね。'
---

エンジニアたるもの、ちょっと頑張るだけのことも可能な限り自動化したくなってしまいますよね。  
仕事の効率を上げる意味でも面倒な作業は自動化し、本当にやりたいことに時間を使いたいものです。  
最近は、このブログを個人開発しているのですが、なにせ1人なので省ける作業はとことん省こうと思いました。  
省きたい作業の1つにデプロイがあります。  
このブログはGitActionsを使用して自動デプロイを実装していますが、開発当初に自動デプロイができず、コケたので備忘録として残し、同じエラーでつまづいている方の参考になればと思います。

## GitActions
開発当初のymlファイルです。
```
name: Deploy to Firebase Hosting on merge
'on':
  push:
    branches:
      - master
jobs:
  build_and_deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - run: yarn build
      - uses: FirebaseExtended/action-hosting-deploy@v0
--- 以下省略 ---

```

結論から言うと、ずばり実行するコマンドに誤りがありました。
buildだと思っていたらinstallとgenerateでした。

```
name: Deploy to Firebase Hosting on merge
'on':
  push:
    branches:
      - master
jobs:
  build_and_deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - run: yarn install && yarn generate
      - uses: FirebaseExtended/action-hosting-deploy@v0
--- 以下省略 ---

```
