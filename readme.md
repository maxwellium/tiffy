Small zero-dependencies vanilla module to generate and verify and two factor auth tokens and secrets, for convenient use with most common auth apps like [google authenticator](https://github.com/google/google-authenticator/wiki/Key-Uri-Format).

usage sample for quick roundtrip:
```javascript
const {
  generateSecret,
  encodeReadableSecret,
  generateTOTPuri,
  totpGenerate
} = require( 'tiffy' );


const secret = generateSecret();
const readableSecret = encodeReadableSecret( secret );
console.log( readableSecret );

const uri = generateTOTPuri( readableSecret, 'maxwellium', 'tiffy' );
console.log( `\n${ uri }\n` );
console.log(
  `copy above uri and plug it into https://codepen.io/davidshimjs/pen/NdBYrg 
or your fav qr code generator and add it to your authenticator app to test it`
);

console.log( '\n' );
console.log( totpGenerate( secret ) );

setInterval( () => console.log( totpGenerate( secret ) ), 10000 );
```


---

Copyright (c) 2019 **Max Dancau**

License **MIT**