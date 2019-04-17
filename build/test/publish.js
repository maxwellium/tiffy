"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = require("assert");
const util_1 = require("../src/lib/util");
const publish_1 = require("../src/publish");
function encodeDecodeReadable() {
    const original = util_1.generateSecret();
    const encoded = publish_1.encodeReadableSecret(original);
    const decoded = publish_1.decodeReadableSecret(encoded);
    assert_1.deepStrictEqual(decoded, original, 'encodeReadableSecret/decodeReadableSecret did not produce original result');
}
exports.encodeDecodeReadable = encodeDecodeReadable;
//# sourceMappingURL=publish.js.map