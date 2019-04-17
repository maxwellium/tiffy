export declare const OPTIONS: {
    algorithm: keyof typeof SECRET_LENGTHS;
    digits: number;
    period: number;
    /** UNIX time offset */
    epoch: number;
    window: number;
};
export declare const SECRET_LENGTHS: {
    /** https://tools.ietf.org/html/rfc4226#section-4 (see R6) */
    SHA1: number;
    SHA256: number;
    SHA512: number;
};
