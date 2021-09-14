/// <reference types="node" />
/**
 * encode secret in human readable form
 * @param {Buffer} secret
 * @returns {string} 32 ascii chars with a space every 4 chars
 */
export declare function encodeReadableSecret(secret: Buffer): string;
export declare function decodeReadableSecret(readableSecret: string): Buffer;
export declare function generateTOTPuri(readableSecret: string, accountName: string, issuer: string, algorithm?: "SHA1" | "SHA256" | "SHA512", digits?: number, period?: number): string;
