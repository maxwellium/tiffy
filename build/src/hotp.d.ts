/// <reference types="node" />
export declare function hotpVerifyDelta(secret: Buffer, token: string, counter?: number, window?: number, digits?: number, algorithm?: "SHA1" | "SHA256" | "SHA512"): false | number;
export declare function hotpGenerate(secret: Buffer, counter: number, digits?: number, algorithm?: "SHA1" | "SHA256" | "SHA512"): string;
