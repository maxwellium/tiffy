import { OPTIONS, } from './lib/constants.js';
import { counterFromTime } from './lib/util.js';
import { hotpGenerate, hotpVerifyDelta } from './hotp.js';
export function totpGenerate(secret, time = Date.now(), period = OPTIONS.period, epoch = OPTIONS.epoch, digits = OPTIONS.digits, algorithm = OPTIONS.algorithm, counter = counterFromTime(time, period, epoch)) {
    return hotpGenerate(secret, counter, digits, algorithm);
}
export function totpVerifyDelta(secret, token, time = Date.now(), period = OPTIONS.period, epoch = OPTIONS.epoch, counter = counterFromTime(time, period, epoch), window = OPTIONS.window, digits = OPTIONS.digits, algorithm = OPTIONS.algorithm) {
    counter -= window;
    window += window;
    let delta = hotpVerifyDelta(secret, token, counter, window, digits, algorithm);
    if (delta !== false) {
        delta -= window;
    }
    return delta;
}
export function totpVerify(secret, token, time = Date.now(), period = OPTIONS.period, epoch = OPTIONS.epoch, counter = counterFromTime(time, period, epoch), window = OPTIONS.window, digits = OPTIONS.digits, algorithm = OPTIONS.algorithm) {
    return totpVerifyDelta(secret, token, time, period, epoch, counter, window, digits, algorithm) !== false;
}
//# sourceMappingURL=totp.js.map