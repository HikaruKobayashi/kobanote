---
title: 自作サイトのパフォーマンスを上げる
date: 2021.5.26
category: SEO
description: ''
---

先日、ネットサーフィンをしている時に「Lighthouse」というGoogleの拡張機能でwebアプリの品質を0から100の間の数値で表示してくれることを知りました。  
そこで、自作ブログであるこのサイトを「Lighthouse」で検索することにしました。

## Lighthouseに初トライ
何はともあれ早速計測してみることにしました。  
初の計測結果は....。  
パフォーマンスが18点、アクセシビリティが83点、ベストプラクティスが87点、SEOが71点と「良い！」とは言えぬ結果になりました。  
70点以上に関しては、及第点としてもパファーマンスの18点はとても許される点数ではありません。  
これらの結果を踏まえ、SEO対策などサイトのパフォーマンスを向上させる対策をしました。

## キャッシュコントロール
Firebaseのデフォルトの設定では、キャッシュの設定時間が1時間になっています。  
そこで、firebase.jsonに下記のheader部分を追記し、設定時間を1年間に変更しました。

```json
{
  "hosting": {
    "public": "dist",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ],
    "headers": [
      {
        "source": "**/*.@(js|css)",
        "headers": [
          {
            "key": "Cache-Control",
            "value": "max-age=31536000"
          }
        ]
      }
    ]
  }
}
```

## SEO対策
### meta情報を入力する
nuxt.config.jsのheadのmetaの中にあるcontentの中を埋めましょう。
これをするだけでも点数が上がります。

### サイトマップを作成する
私はyarn経由で追加しましたが、npm経由でも追加することができます。
```
$ yarn add @nuxtjs/sitemap
```

次にnuxt.config.jsを編集します。  
```
export default {
  modules: [
    '@nuxtjs/sitemap'
  ],
}
```

```
sitemap: {
  hostname: process.env.BASE_URL || 'https://kobanote.net/',
  routes: async () => {
    let array = [
      {
        url: '/',
        changefreq: 'daily',
        priority: 1,
        lastmod: new Date()
      }
    ];
    const { $content } = require('@nuxt/content')
    const posts = await $content('blogs')
      .only(['path', 'updated_at'])
      .fetch()
    array = array.concat(
      posts.map((p) => 
        { 
          return {
            url: p.path, 
            lastmod: p.updated_at,
            priority: 1,
          }
        })
    )
    return array
  }
},
```

## Lighthouseに再度トライ
結果としては、パフォーマンス以外は100点、パフォーマンスも91点とかなり良い結果となりました！

## まとめ
Lighthouseの結果が全てはありませんが、1つの指針として受け止め、サイトを向上させることは日々の業務においても大切なことだなと感じました。  
また、SEO対策などを含め知らないことが多かったので純粋に勉強になりました。  
すべて100点を取れるように今後もサイトを向上させていきます。