"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = require("assert");
const util_1 = require("../src/lib/util");
const totp_1 = require("../src/totp");
function generateValidToken() {
    const secret = util_1.generateSecret();
    const token = totp_1.totpGenerate(secret);
    const valid = totp_1.totpVerify(secret, token);
    assert_1.strictEqual(valid, true, 'validation of generated token failed');
}
exports.generateValidToken = generateValidToken;
function generateInvalidToken() {
    const secret = util_1.generateSecret();
    const token = totp_1.totpGenerate(secret, Date.now() - 30000);
    const valid = totp_1.totpVerify(secret, token);
    assert_1.strictEqual(valid, false, 'rejection of invalid token failed');
}
exports.generateInvalidToken = generateInvalidToken;
//# sourceMappingURL=totp.js.map