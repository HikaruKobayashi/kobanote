---
title: asdfでバージョン管理に革命を起こす
date: 2021.5.14
category: Shell
description: 'バージョンが違うことによるストレスは想像を超えます。asdfを使用し、ストレスのない開発環境を構築しましょう。'
image: kobayahi
---

突然ですが、皆さんプログラミング言語などのバージョン管理ってどうされていますか？  
Macでは標準でPython2系が装備されていますが、Python3系を使用したい時があると思います。  
この場合、Pythonのバージョンを2から3へと上げる必要があるのですが、意図しないエラーなどに悩まされ、やりたくもないエラーの対処に時間を浪費することになります。  
そんな面倒なエラーを回避する為に私がオススメしているバージョン管理ツールが「asdf」です。  

## asdfについて
ずばりバージョン管理ツールのことです。  
私は主にプログラミング言語のバージョン管理をasdfで行なっていますが、プログラミング言語以外にも様々なツールのバージョンを管理することができます。  
asdfでPythonやNode.js、Rubyといったプログラミング言語のバージョンを管理していますが、asdfのおかげでバージョン管理に悩まされることがなくなりました。

## asdfでバージョン管理する方法
この記事では、dotfilesにasdfによるプログラミング言語などのバージョン管理をする環境を作成していきます。  

### インストール
インストール方法は、homebrewを使用しますが、私はdotfilesでツールのインストールを管理してる為、Brewfileに以下を追記し、インストールを実行しました。

``` shell
brew "asdf"
brew "coreutils"
brew "curl"
brew "git"
```


### shellに追加する
次にお使いのshellにasdfを追加します。  
bashとzsh、fishから選択することができますが、私はfishを使用しているのでfishを選択しました。

```
$ echo -e "\nsource "(brew --prefix asdf)"/asdf.fish" >> ~/.config/fish/config.fish
```

### プラグインを追加する
asdfでプログラミング言語などのバージョンを管理する為には、最初に管理したいプログラミング言語などのプラグインをインストールする必要があります。  

```
$ asdf plugin add プラグイン名
```
上記のコマンドを実行することでインストールすることができます。

次にプログラミング言語などのバージョンを指定するために.tool-versionsというファイルをホームディレクトリ以下に作成します。

```
nodejs 14.15.1
rust 1.47.0
yarn 1.22.10
golang 1.15
python 3.9.0
ruby 2.6.6
deno 0.42.0
flutter 2.0.5-stable
```

.tool-versionsにてバージョンを指定した上で`$asdf install プラグイン名`というコマンドを実行することで、指定したバージョンでプログラミング言語をインストールしてくれます。

インストール完了後に、コマンドにて指定したバージョンがインストールされているか確認してください。

以上で、asdfでバージョンを管理することができるようになりましたが、毎度同じようなコマンドを叩くのはあまりにも面倒です。  

そこで、shell scriptsでこれらの一連の動作を自動化し、.tool-versionsに指定したいバージョンを記載し、dotfilesのshell scriptsを走らせるだけで完結するようにしていきます。

``` shell
echo "asdf setting"
log() {
  message=$1
  echo "$message"
}
is_dir() {
  path=$1
  [ -d "$path" ]
}

for plugin in $(awk '{print $1}' ~/.tool-versions); do
  if ! is_dir ~/.asdf/plugins/"$plugin"; then
    asdf plugin add "$plugin"
  fi
done

is_runtime_versions_changed() {
  plugin="$1"
  specified=$(grep "$plugin" ~/.tool-versions | awk '
  {$1=""; print $0}')

  installed=$(asdf list "$plugin" 2>&1)

  is_changed=
  for version in $specified; do
    match=$(echo "$installed" | grep "$version")
    [ -z "$match" ] && is_changed=1
  done

  [ "$is_changed" ]
}

for plugin in $(asdf plugin list); do
  if is_runtime_versions_changed "$plugin"; then
    if [ "$plugin" = nodejs ]; then
      log "Import release team keyring for Node.JS"
      bash -c '${ASDF_DATA_DIR:=$HOME/.asdf}/plugins/nodejs/bin/import-previous-release-team-keyring'
    fi
    log "Install runtime: $plugin"
    asdf install "$plugin"
  fi
done
```

これでようやく私が理想としてバージョン管理環境を構築することができました。  
tool-versionsを変更するだけで意図しているバージョンを手にすることができるので、とても効率的にプログラミング言語を管理することができるようになったと思います。  


