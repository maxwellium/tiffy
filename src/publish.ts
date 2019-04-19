import { stringify } from 'querystring';
import { encode, decode } from './lib/base32';
import { OPTIONS } from './lib/constants';


export function encodeReadableSecret( secret: Buffer ) {
  /** 32 ascii characters without trailing '='s lowercase with a space every 4 characters */
  return encode( secret )
    .replace( /=/g, '' )
    .toLowerCase()
    .replace( /(\w{4})/g, "$1 " )
    .trim();
}


export function decodeReadableSecret( readableSecret: string ) {
  return decode( readableSecret.replace( /\W+/g, '' ).toUpperCase() );
}


export function generateTOTPuri(
  readableSecret: string,
  accountName: string,
  issuer: string,
  algorithm = OPTIONS.algorithm,
  digits = OPTIONS.digits,
  period = OPTIONS.period
) {

  issuer = issuer.replace( /:/g, '' );
  accountName = accountName.replace( /:/g, '' );
  readableSecret = readableSecret.replace( /\W+/g, '' ).toUpperCase();

  /** https://github.com/google/google-authenticator/wiki/Key-Uri-Format */
  return `otpauth://totp/${
    encodeURI( issuer )
    }:${
    encodeURI( accountName )
    }?${ stringify( { secret: readableSecret, issuer, algorithm, digits, period } )
    }`;
}
