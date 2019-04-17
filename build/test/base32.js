"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = require("assert");
const base32_1 = require("../src/lib/base32");
function encodeDecode() {
    const original = 'üöäßßßß?ysgfasg';
    const encoded = base32_1.encode(Buffer.from(original));
    const decoded = base32_1.decode(encoded).toString();
    assert_1.strictEqual(decoded, original, 'base32 encode/decode did not produce original result');
}
exports.encodeDecode = encodeDecode;
//# sourceMappingURL=base32.js.map