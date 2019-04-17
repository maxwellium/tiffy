/// <reference types="node" />
export declare function generateSecret(algorithm?: "SHA1" | "SHA256" | "SHA512", length?: number): Buffer;
export declare function digest(secret: Buffer, counter: number, algorithm?: "SHA1" | "SHA256" | "SHA512"): Buffer;
export declare function counterFromTime(time?: number, period?: number, epoch?: number): number;
