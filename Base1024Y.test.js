import * as t from "https://deno.land/std/testing/asserts.ts";
import { Base1024Y } from "./Base1024Y.js";
import { Base16 } from "https://code4fukui.github.io/Base16/Base16.js";

Deno.test("simple", () => {
  const org = new Uint8Array([0, 1, 2, 3]);
  const encoded = Base1024Y.encode(org);
  //console.log(encoded); 
  t.assertEquals(encoded, "ꀀꀐꂀꌀ");
  const decoded = Base1024Y.decode(encoded, 4);
  t.assertEquals(decoded, org);
});
Deno.test("abc", () => {
  const s = new TextEncoder().encode("abc");
  const encoded = Base1024Y.encode(s);
  //console.log(encoded); 
  const decoded = Base1024Y.decode(encoded, 3);
  t.assertEquals(decoded, s);
});
Deno.test("encode", () => {
  const s = new TextEncoder().encode("1234567");
  const encoded = Base1024Y.encode(s);
  t.assertEquals(encoded, "ꃄꌣꃍꀵꃘꍰ");
});
Deno.test("deode", () => {
  const decoded = Base1024Y.decode("ꃄꌣꃍꀵꃘꍰ", 7);
  const s = new TextDecoder().decode(decoded);
  t.assertEquals(s, "1234567");
});
Deno.test("uuid1", () => {
  const uuid = crypto.randomUUID();
  const b = Base16.decode(uuid);
  const s = Base1024Y.encode(b);
  //console.log(uuid);
  //console.log(Base16.encode(b));
  //console.log(s);
  const b2 = Base1024Y.decode(s, 16);
  t.assertEquals(b, b2);
});
Deno.test("uuid2", () => {
  const uuid = "ba5698530e5878ed8d113c01e2dc89ae";
  const encoded = Base1024Y.encode(Base16.decode(uuid));
  t.assertEquals(encoded, "ꋩꅩꈔꌎꅡꎎꍣꄑꃰꀞꂷꂉꊸ");
  const decoded = Base1024Y.decode(encoded, 16);
  const s = Base16.encode(decoded);
  t.assertEquals(s, uuid);
});
Deno.test("sha128", () => {
  const sha = Base16.decode("17057684bea1f9331418b633a8f373119d765fd4");
  const s = Base1024Y.encode(sha);
  t.assertEquals(s, "ꁜꁗꆡꂾꊇꎓꃅꀘꋘꌺꈼꍳꁆꇗꆗꏔ");
  const sha2 = Base1024Y.decode(s);
  t.assertEquals(sha, sha2);
});
Deno.test("char1", () => {
  const s = "ꀀ";
  const decoded = Base1024Y.decode(s);
  t.assertEquals(decoded, new Uint8Array([0, 0]));
});
Deno.test("char2", () => {
  const s = "ꏿ";
  const decoded = Base1024Y.decode(s);
  t.assertEquals(decoded, new Uint8Array([0b11111111, 0b11000000]));
});
