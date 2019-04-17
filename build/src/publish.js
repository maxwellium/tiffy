"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const querystring_1 = require("querystring");
const base32_1 = require("./lib/base32");
const constants_1 = require("./lib/constants");
function encodeReadableSecret(secret) {
    /** 32 ascii characters without trailing '='s lowercase with a space every 4 characters */
    return base32_1.encode(secret)
        .replace(/=/g, '')
        .toLowerCase()
        .replace(/(\w{4})/g, "$1 ")
        .trim();
}
exports.encodeReadableSecret = encodeReadableSecret;
function decodeReadableSecret(readableSecret) {
    return base32_1.decode(readableSecret.replace(/\W+/g, '').toUpperCase());
}
exports.decodeReadableSecret = decodeReadableSecret;
function generateTOTPuri(secret, accountName, issuer, algorithm = constants_1.OPTIONS.algorithm, digits = constants_1.OPTIONS.digits, period = constants_1.OPTIONS.period) {
    issuer = issuer.replace(/:/g, '');
    accountName = accountName.replace(/:/g, '');
    secret = secret.replace(/\W+/g, '').toUpperCase();
    /** https://github.com/google/google-authenticator/wiki/Key-Uri-Format */
    return `otpauth://totp/${encodeURI(issuer)}:${encodeURI(accountName)}?${querystring_1.stringify({ secret, issuer, algorithm, digits, period })}`;
}
exports.generateTOTPuri = generateTOTPuri;
//# sourceMappingURL=publish.js.map