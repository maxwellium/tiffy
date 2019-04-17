import { strictEqual } from 'assert';
import { encode, decode } from '../src/lib/base32';


export function encodeDecode() {

  const original = 'üöäßßßß?ysgfasg';

  const encoded = encode( Buffer.from( original ) );
  const decoded = decode( encoded ).toString();

  strictEqual( decoded, original, 'base32 encode/decode did not produce original result' );
}
