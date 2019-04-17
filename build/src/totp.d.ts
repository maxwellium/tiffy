/// <reference types="node" />
export declare function totpGenerate(secret: Buffer, time?: number, period?: number, epoch?: number, digits?: number, algorithm?: "SHA1" | "SHA256" | "SHA512", counter?: number): string;
export declare function totpVerifyDelta(secret: Buffer, token: string, time?: number, period?: number, epoch?: number, counter?: number, window?: number, digits?: number, algorithm?: "SHA1" | "SHA256" | "SHA512"): number | false;
export declare function totpVerify(secret: Buffer, token: string, time?: number, period?: number, epoch?: number, counter?: number, window?: number, digits?: number, algorithm?: "SHA1" | "SHA256" | "SHA512"): boolean;
