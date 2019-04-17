"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("./lib/constants");
const util_1 = require("./lib/util");
function hotpVerifyDelta(secret, token, counter = 0, window = constants_1.OPTIONS.window, digits = constants_1.OPTIONS.digits, algorithm = constants_1.OPTIONS.algorithm) {
    if (token.length !== digits) {
        return false;
    }
    const iToken = parseInt(token, 10);
    if (isNaN(iToken)) {
        return false;
    }
    for (let i = counter; i <= counter + window; ++i) {
        const counter2 = i, token2 = hotpGenerate(secret, counter2, digits, algorithm);
        if (parseInt(token2, 10) === iToken) {
            return i - counter;
        }
    }
    return false;
}
exports.hotpVerifyDelta = hotpVerifyDelta;
function hotpGenerate(secret, counter, digits = constants_1.OPTIONS.digits, algorithm = constants_1.OPTIONS.algorithm) {
    const _digest = util_1.digest(secret, counter, algorithm);
    const offset = _digest[_digest.length - 1] & 0xf;
    /** calculate binary code (RFC4226 5.4) */
    const code = (_digest[offset] & 0x7f) << 24 |
        (_digest[offset + 1] & 0xff) << 16 |
        (_digest[offset + 2] & 0xff) << 8 |
        (_digest[offset + 3] & 0xff);
    return code
        .toString(10)
        .padStart(digits)
        .substr(-digits);
}
exports.hotpGenerate = hotpGenerate;
//# sourceMappingURL=hotp.js.map