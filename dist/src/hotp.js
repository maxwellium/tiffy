import { OPTIONS } from './lib/constants.js';
import { digest } from './lib/util.js';
export function hotpVerifyDelta(secret, token, counter = 0, window = OPTIONS.window, digits = OPTIONS.digits, algorithm = OPTIONS.algorithm) {
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
export function hotpGenerate(secret, counter, digits = OPTIONS.digits, algorithm = OPTIONS.algorithm) {
    const _digest = digest(secret, counter, algorithm);
    const offset = _digest[_digest.length - 1] & 0xf;
    /** calculate binary code (RFC4226 5.4) */
    const code = (_digest[offset] & 0x7f) << 24 |
        (_digest[offset + 1] & 0xff) << 16 |
        (_digest[offset + 2] & 0xff) << 8 |
        (_digest[offset + 3] & 0xff);
    const codeString = code
        .toString(10)
        .padStart(digits);
    return codeString.substring(codeString.length - digits);
}
//# sourceMappingURL=hotp.js.map