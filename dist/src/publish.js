import { stringify } from 'querystring';
import { encode, decode } from './lib/base32.js';
import { OPTIONS } from './lib/constants.js';
/**
 * encode secret in human readable form
 * @param {Buffer} secret
 * @returns {string} 32 ascii chars with a space every 4 chars
 */
export function encodeReadableSecret(secret) {
    return encode(secret)
        .replace(/=/g, '')
        .toLowerCase()
        .replace(/(\w{4})/g, "$1 ")
        .trim();
}
export function decodeReadableSecret(readableSecret) {
    return decode(readableSecret.replace(/\W+/g, '').toUpperCase());
}
export function generateTOTPuri(readableSecret, accountName, issuer, algorithm = OPTIONS.algorithm, digits = OPTIONS.digits, period = OPTIONS.period) {
    issuer = issuer.replace(/:/g, '');
    accountName = accountName.replace(/:/g, '');
    readableSecret = readableSecret.replace(/\W+/g, '').toUpperCase();
    /** https://github.com/google/google-authenticator/wiki/Key-Uri-Format */
    return `otpauth://totp/${encodeURI(issuer)}:${encodeURI(accountName)}?${stringify({ secret: readableSecret, issuer, algorithm, digits, period })}`;
}
//# sourceMappingURL=publish.js.map