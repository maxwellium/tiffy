import { strictEqual, deepStrictEqual } from 'assert';
import { encode, decode } from '../src/lib/base32.js';


export function roundtrip() {

  const original = 'üöäßßßß?ysgfasg';

  const encoded = encode( Buffer.from( original ) );
  const decoded = decode( encoded ).toString();

  strictEqual( decoded, original, 'base32 encode/decode did not produce original result' );
}


export function commonSamples() {

  /** https://godoc.org/encoding/base32 */
  const samples: {
    actual: string | Buffer,
    expected: string | Buffer,
    method: 'encode' | 'decode'
  }[] = [ {
    actual: decode( 'MZXW6ADCMFZA====' ),
    expected: Buffer.from( 'foo\x00bar' ),
    method: 'decode'
  }, {
    actual: encode( Buffer.from( 'some data with \x00 and \ufeff' ) ),
    expected: 'ONXW2ZJAMRQXIYJAO5UXI2BAAAQGC3TEEDX3XPY=',
    method: 'encode'
  }, {
    actual: decode( 'MFXHSIBLEBXWYZBAEYQGIYLUME======' ),
    expected: Buffer.from( 'any + old & data' ),
    method: 'decode'
  } ];

  for ( const { actual, expected, method } of samples ) {

    deepStrictEqual(
      actual,
      expected,
      `base32 ${ method } produced ${ actual.toString() } instead of ${ expected.toString() }`
    );

  }
}
