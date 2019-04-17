import { strictEqual } from 'assert';
import { generateSecret } from '../src/lib/util';
import { totpGenerate, totpVerify } from '../src/totp';


export function generateValidToken() {

  const secret = generateSecret();

  const token = totpGenerate( secret );
  const valid = totpVerify( secret, token );

  strictEqual( valid, true, 'validation of generated token failed' );
}


export function generateInvalidToken() {

  const secret = generateSecret();

  const token = totpGenerate( secret, Date.now() - 30000 );
  const valid = totpVerify( secret, token );

  strictEqual( valid, false, 'rejection of invalid token failed' );
}
