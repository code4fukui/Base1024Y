# Base1024Y

Base1024Yは、[イ文字](https://en.wikipedia.org/wiki/Yi_script)（UnicodeのU+A000〜U+A3FF）を用いた10ビットエンコーディング「Yi-encode」のためのESモジュールです。

## デモ
[Base1024Y Yi-encode char map](https://code4fukui.github.io/Base1024Y/)

## 特徴
- イ文字を使用したバイナリデータのエンコードおよびデコード
- ハッシュやその他のバイナリデータを視覚的に美しく表現

## 使い方
コード内での使用例:

```javascript
import { Base1024Y } from "https://code4fukui.github.io/Base1024Y/Base1024Y.js";

const encoded = Base1024Y.encode(new Uint8Array([1, 2, 3, 4]));
console.log(encoded);
const decoded = Base1024Y.decode(encoded);
console.log(decoded);

const key = new Uint8Array(32); // 32バイト -> 26文字
crypto.getRandomValues(key);
const encoded2 = Base1024Y.encode(key);
console.log(encoded2); // ꇷꆁꊳꊙꂜꂡꋮꀬꅶꂟꇾꇳꃛꇾꃅꇖꏙꌨꎫꁑꅒꂁꇗꂎꅏꀠ
```

## ライセンス
MIT License — 詳細は[LICENSE](LICENSE)を参照してください。
