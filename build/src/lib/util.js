"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("./constants");
const crypto_1 = require("crypto");
function generateSecret(algorithm = constants_1.OPTIONS.algorithm, length = constants_1.SECRET_LENGTHS[algorithm]) {
    return crypto_1.randomBytes(length);
}
exports.generateSecret = generateSecret;
function digest(secret, counter, algorithm = constants_1.OPTIONS.algorithm) {
    return crypto_1.createHmac(algorithm, adjustSecretLength(secret, constants_1.SECRET_LENGTHS[algorithm]))
        .update(counterToBuffer(counter))
        .digest();
}
exports.digest = digest;
function counterFromTime(time = Date.now(), period = constants_1.OPTIONS.period, epoch = constants_1.OPTIONS.epoch) {
    return Math.floor((time - epoch) / period / 1000);
}
exports.counterFromTime = counterFromTime;
function adjustSecretLength(secret, length) {
    if (secret.length !== length) {
        secret = Buffer.from(Array(Math.ceil(length / secret.length) + 1).join(secret.toString('hex')), 'hex').slice(0, length);
    }
    return secret;
}
function counterToBuffer(counter) {
    const buffer = Buffer.alloc(8);
    for (let i = 0; i < 8; i++) {
        buffer[7 - i] = counter & 0xff;
        counter = counter >> 8;
    }
    return buffer;
}
//# sourceMappingURL=util.js.map