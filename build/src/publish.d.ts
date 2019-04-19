/// <reference types="node" />
export declare function encodeReadableSecret(secret: Buffer): string;
export declare function decodeReadableSecret(readableSecret: string): Buffer;
export declare function generateTOTPuri(readableSecret: string, accountName: string, issuer: string, algorithm?: "SHA1" | "SHA256" | "SHA512", digits?: number, period?: number): string;
