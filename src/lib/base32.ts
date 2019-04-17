/** https://tools.ietf.org/html/rfc4648 */
const encoding: {
  chars: string,
  bits: number,
  codes: { [ c: string ]: number }
} = {
  chars: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567',
  bits: 5,
  codes: {
    2: 26, 3: 27, 4: 28, 5: 29, 6: 30, 7: 31, A: 0, B: 1,
    C: 2, D: 3, E: 4, F: 5, G: 6, H: 7, I: 8, J: 9,
    K: 10, L: 11, M: 12, N: 13, O: 14, P: 15, Q: 16, R: 17,
    S: 18, T: 19, U: 20, V: 21, W: 22, X: 23, Y: 24, Z: 25
  }
};


export function decode( string: string ) {
  let end = string.length;
  while ( string[ end - 1 ] === '=' ) {
    --end;

    if ( !( ( ( string.length - end ) * encoding.bits ) & 7 ) ) {
      throw new SyntaxError( 'Invalid padding' );
    }
  }

  const out = Buffer.alloc( ( end * encoding.bits / 8 ) | 0 );

  let bits = 0;
  let buffer = 0;
  let written = 0;
  for ( let i = 0; i < end; ++i ) {

    const value = encoding.codes[ string[ i ] ];
    if ( value === void 0 ) {
      throw new SyntaxError( 'Invalid character ' + string[ i ] );
    }

    buffer = ( buffer << encoding.bits ) | value;
    bits += encoding.bits;

    if ( bits >= 8 ) {
      bits -= 8;
      out[ written++ ] = 0xff & ( buffer >> bits );
    }
  }

  if ( bits >= encoding.bits || 0xff & ( buffer << ( 8 - bits ) ) ) {
    throw new SyntaxError( 'Unexpected end of data' );
  }

  return out;
}


export function encode( data: Buffer ) {
  const mask = ( 1 << encoding.bits ) - 1;
  let out = '';

  let bits = 0;
  let buffer = 0;
  for ( let i = 0; i < data.length; ++i ) {

    buffer = ( buffer << 8 ) | ( 0xff & data[ i ] );
    bits += 8;

    while ( bits > encoding.bits ) {
      bits -= encoding.bits;
      out += encoding.chars[ mask & ( buffer >> bits ) ];
    }
  }

  if ( bits ) {
    out += encoding.chars[ mask & ( buffer << ( encoding.bits - bits ) ) ];
  }


  while ( ( out.length * encoding.bits ) & 7 ) {
    out += '=';
  }

  return out;
}
