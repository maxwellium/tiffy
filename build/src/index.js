"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("./lib/util");
exports.generateSecret = util_1.generateSecret;
__export(require("./totp"));
__export(require("./hotp"));
__export(require("./publish"));
//# sourceMappingURL=index.js.map