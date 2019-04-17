export const OPTIONS: {
  algorithm: keyof typeof SECRET_LENGTHS,
  digits: number,
  period: number,
  /** UNIX time offset */
  epoch: number,
  window: number
} = {
  algorithm: 'SHA1',
  digits: 6,
  period: 30,
  epoch: 0,
  window: 0
};

export const SECRET_LENGTHS = {
  /** https://tools.ietf.org/html/rfc4226#section-4 (see R6) */
  SHA1: 20,
  SHA256: 32,
  SHA512: 64
};
