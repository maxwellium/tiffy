"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const totp = require("./totp");
const base32 = require("./base32");
const publish = require("./publish");
const RESET = '\x1b[0m', _red = (text) => ['\x1b[31m', text, RESET].join(''), _green = (text) => ['\x1b[32m', text, RESET].join(''), _bright = (text) => ['\x1b[1m', text, RESET].join('');
function main() {
    console.log(_bright('running totp tests'));
    run(totp);
    console.log(_bright('running base32 tests'));
    run(base32);
    console.log(_bright('running publish tests'));
    run(publish);
}
function run(suite) {
    for (const test in suite) {
        if ('function' !== typeof suite[test]) {
            continue;
        }
        try {
            suite[test].call(suite);
            console.log(_green(`- passed ${test}`));
        }
        catch (e) {
            console.error(_red(`- failed ${test}`), e);
        }
    }
}
main();
//# sourceMappingURL=index.js.map