# Base1024Y

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

Base1024Y is an ES module for Yi-encode, a 10-bit encoding with the [Yi script](https://en.wikipedia.org/wiki/Yi_script) (U+A000 to U+A3FF in Unicode).

## Demo
[Base1024Y Yi-encode char map](https://code4fukui.github.io/Base1024Y/)

## Features
- Encoding and decoding of binary data using the Yi script characters
- Provides aesthetically pleasing representation of hashes and other binary data

## Usage
In your code:

```javascript
import { Base1024Y } from "https://code4fukui.github.io/Base1024Y/Base1024Y.js";

const encoded = Base1024Y.encode(new Uint8Array([1, 2, 3, 4]));
console.log(encoded);
const decoded = Base1024Y.decode(encoded);
console.log(decoded);

const key = new Uint8Array(32); // 32byte -> 26chars
crypto.getRandomValues(key);
const encoded2 = Base1024Y.encode(key);
console.log(encoded2); // ꇷꆁꊳꊙꂜꂡꋮꀬꅶꂟꇾꇳꃛꇾꃅꇖꏙꌨꎫꁑꅒꂁꇗꂎꅏꀠ
```

## License
MIT License — see [LICENSE](LICENSE).