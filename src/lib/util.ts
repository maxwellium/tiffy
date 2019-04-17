import { OPTIONS, SECRET_LENGTHS } from './constants';
import { createHmac, randomBytes } from 'crypto';


export function generateSecret(
  algorithm = OPTIONS.algorithm,
  length = SECRET_LENGTHS[ algorithm ]
) {
  return randomBytes( length );
}


export function digest(
  secret: Buffer,
  counter: number,
  algorithm = OPTIONS.algorithm
): Buffer {

  return createHmac(
    algorithm,
    adjustSecretLength( secret, SECRET_LENGTHS[ algorithm ] )
  )
    .update( counterToBuffer( counter ) )
    .digest();
}


export function counterFromTime(
  time = Date.now(),
  period = OPTIONS.period,
  epoch = OPTIONS.epoch
) {
  return Math.floor( ( time - epoch ) / period / 1000 );
}



function adjustSecretLength( secret: Buffer, length: number ) {

  if ( secret.length !== length ) {

    secret = Buffer.from(
      Array(
        Math.ceil( length / secret.length ) + 1
      ).join( secret.toString( 'hex' ) ),
      'hex'
    ).slice( 0, length );

  }

  return secret;
}


function counterToBuffer( counter: number ) {

  const buffer = Buffer.alloc( 8 );

  for ( let i = 0; i < 8; i++ ) {

    buffer[ 7 - i ] = counter & 0xff;
    counter = counter >> 8;

  }

  return buffer;
}
