---
title: React Nativeでios simulatorが立ち上がらなかった時の対処法
date: 2022.1.1
category: React Native
description: 'ios simulatorが立ち上がらず困った時の備忘録'
---
## どんな状況だったか？
ある時いつも通りyarn iosのコマンドでReact Nativeのアプリを立ち上げようとしたところターミナルに下記のようなエラーが出てしまいました。  
```
** BUILD FAILED **

The following build commands failed:
	ProcessInfoPlistFile /Users/kobayashi/Library/Developer/Xcode/DerivedData/myapp/Build/Products/Debug-iphonesimulator/myapp.app/Info.plist /Users/kobayashi/myapp/ios/myapp/Info.plist (in target 'myapp' from project 'myapp')
(1 failure)

info Run CLI with --verbose flag for more details.
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```

## エラーの内容
どうやらbuildに失敗しているためios simulatorが立ち上っていないようです。  
そして、失敗の原因はinfo.plistファイルにありそうだと推測できます。

## 解決方法
info.plistファイルにエラーの原因がありそうだと分かったものの、info.plistのどこが原因になっているかぱっと見では分かりません。  
そこで、ターミナルで下記のコマンドを実行してみました。  
```shell
$ plutil -lint /Users/kobayashi/myapp/ios/myapp/Info.plist
```
すると、info.plistの何行目が原因か教えてくれます。  
```shell
/Users/kobayashi/myapp/ios/myapp/Info.plist: Found non-key inside <dict> at line 39
```
実際に39行目を確認してみました。  
すると、下記のように特に中身が入っていないタグが存在していたので削除したところ、buildが通るようになりsimulatorが起動するようになりました。  
今回は中身のないタグが存在していたという理由でしたが他にも閉じタグを忘れていたなど様々な原因が考えられますので適宜修正するようにしましょう。  
```
<string></string>
```

## まとめ
info.plistのどこが原因なのか調べるのに結構時間がかかってしまいました。  
もし、同じようなエラーに遭遇されている方の参考になれば幸いです。  
