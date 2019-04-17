"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("./lib/constants");
const util_1 = require("./lib/util");
const hotp_1 = require("./hotp");
function totpGenerate(secret, time = Date.now(), period = constants_1.OPTIONS.period, epoch = constants_1.OPTIONS.epoch, digits = constants_1.OPTIONS.digits, algorithm = constants_1.OPTIONS.algorithm, counter = util_1.counterFromTime(time, period, epoch)) {
    return hotp_1.hotpGenerate(secret, counter, digits, algorithm);
}
exports.totpGenerate = totpGenerate;
function totpVerifyDelta(secret, token, time = Date.now(), period = constants_1.OPTIONS.period, epoch = constants_1.OPTIONS.epoch, counter = util_1.counterFromTime(time, period, epoch), window = constants_1.OPTIONS.window, digits = constants_1.OPTIONS.digits, algorithm = constants_1.OPTIONS.algorithm) {
    counter -= window;
    window += window;
    let delta = hotp_1.hotpVerifyDelta(secret, token, counter, window, digits, algorithm);
    if (delta !== false) {
        delta -= window;
    }
    return delta;
}
exports.totpVerifyDelta = totpVerifyDelta;
function totpVerify(secret, token, time = Date.now(), period = constants_1.OPTIONS.period, epoch = constants_1.OPTIONS.epoch, counter = util_1.counterFromTime(time, period, epoch), window = constants_1.OPTIONS.window, digits = constants_1.OPTIONS.digits, algorithm = constants_1.OPTIONS.algorithm) {
    return totpVerifyDelta(secret, token, time, period, epoch, counter, window, digits, algorithm) !== false;
}
exports.totpVerify = totpVerify;
//# sourceMappingURL=totp.js.map