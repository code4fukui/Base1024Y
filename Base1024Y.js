import { BitWriter } from "https://code4fukui.github.io/bitutil/BitWriter.js";
import { BitReader } from "https://code4fukui.github.io/bitutil/BitReader.js";
import { subbin } from "https://js.sabae.cc/binutil.js";

const BIT = 10;
const START = 0xa000;
const END = START + (1 << BIT);

const encode = (bin) => {
  const r = new BitReader(bin);
  const ss = [];
  for (;;) {
    const n = r.read(BIT);
    if (n < 0) break;
    const c = String.fromCharCode(START + n);
    ss.push(c);
  }
  return ss.join("");
};

const decode = (s, len = 0) => {
  const w = new BitWriter();
  for (const c of s) {
    const n = c.codePointAt(0);
    if (n >= START && n <= END) {
      w.write(BIT, n - START);
    }
  }
  const b = w.getBytes(false);
  if (len) {
    return subbin(b, 0, len)
  }
  return b;
}

export const Base1024Y = { encode, decode };
