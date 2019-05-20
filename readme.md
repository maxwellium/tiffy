Small zero-dependencies vanilla module to generate and verify and two factor auth tokens and secrets, for convenient use with most common auth apps like [google authenticator](https://github.com/google/google-authenticator/wiki/Key-Uri-Format).

usage sample for quick roundtrip ( we generate a random secret, use chart.googleapis to display it as a qr code and then spew out current time based code every 10 seconds ):
```javascript
const {
  generateSecret,
  encodeReadableSecret,
  generateTOTPuri,
  totpGenerate
} = require( 'tiffy' );


const secret = generateSecret();
const readableSecret = encodeReadableSecret( secret );
const uri = generateTOTPuri( readableSecret, 'maxwellium', 'tiffy' );


console.log( 'readable secret:', readableSecret );

console.log(
  `https://chart.googleapis.com/chart?cht=qr&chl=${ encodeURIComponent( uri ) }&chs=256x256`
);
console.log( 'scan it with your authenticator app to test it' );

console.log( totpGenerate( secret ) );


setInterval( () => console.log( totpGenerate( secret ) ), 10000 );
```


---

Copyright (c) 2019 **Max Dancau**

License **MIT**