import { deepStrictEqual } from 'assert';
import { generateSecret } from '../src/lib/util.js';
import { encodeReadableSecret, decodeReadableSecret } from '../src/publish.js';
export function encodeDecodeReadable() {
    const original = generateSecret();
    const encoded = encodeReadableSecret(original);
    const decoded = decodeReadableSecret(encoded);
    deepStrictEqual(decoded, original, 'encodeReadableSecret/decodeReadableSecret did not produce original result');
}
//# sourceMappingURL=publish.js.map