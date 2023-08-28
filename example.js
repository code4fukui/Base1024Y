//import { Base1024Y } from "https://code4fukui.github.io/Base1024Y/Base1024Y.js";
import { Base1024Y } from "./Base1024Y.js";

const encoded = Base1024Y.encode(new Uint8Array([1, 2, 3, 4]));
console.log(encoded);
const decoded = Base1024Y.decode(encoded, 4);
console.log(decoded);
