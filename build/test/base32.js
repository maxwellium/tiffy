"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = require("assert");
const base32_1 = require("../src/lib/base32");
function roundtrip() {
    const original = 'üöäßßßß?ysgfasg';
    const encoded = base32_1.encode(Buffer.from(original));
    const decoded = base32_1.decode(encoded).toString();
    assert_1.strictEqual(decoded, original, 'base32 encode/decode did not produce original result');
}
exports.roundtrip = roundtrip;
function commonSamples() {
    /** https://godoc.org/encoding/base32 */
    const samples = [{
            actual: base32_1.decode('MZXW6ADCMFZA===='),
            expected: Buffer.from('foo\x00bar'),
            method: 'decode'
        }, {
            actual: base32_1.encode(Buffer.from('some data with \x00 and \ufeff')),
            expected: 'ONXW2ZJAMRQXIYJAO5UXI2BAAAQGC3TEEDX3XPY=',
            method: 'encode'
        }, {
            actual: base32_1.decode('MFXHSIBLEBXWYZBAEYQGIYLUME======'),
            expected: Buffer.from('any + old & data'),
            method: 'decode'
        }];
    for (const { actual, expected, method } of samples) {
        assert_1.deepStrictEqual(actual, expected, `base32 ${method} produced ${actual.toString()} instead of ${expected.toString()}`);
    }
}
exports.commonSamples = commonSamples;
//# sourceMappingURL=base32.js.map