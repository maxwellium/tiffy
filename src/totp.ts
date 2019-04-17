import { OPTIONS, } from './lib/constants';
import { counterFromTime } from './lib/util';
import { hotpGenerate, hotpVerifyDelta } from './hotp';


export function totpGenerate(
  secret: Buffer,
  time = Date.now(),
  period = OPTIONS.period,
  epoch = OPTIONS.epoch,
  digits = OPTIONS.digits,
  algorithm = OPTIONS.algorithm,
  counter = counterFromTime( time, period, epoch ),
) {
  return hotpGenerate( secret, counter, digits, algorithm );
}


export function totpVerifyDelta(
  secret: Buffer,
  token: string,
  time = Date.now(),
  period = OPTIONS.period,
  epoch = OPTIONS.epoch,
  counter = counterFromTime( time, period, epoch ),
  window = OPTIONS.window,
  digits = OPTIONS.digits,
  algorithm = OPTIONS.algorithm,
) {

  counter -= window;
  window += window;

  let delta = hotpVerifyDelta( secret, token, counter, window, digits, algorithm );

  if ( delta !== false ) {
    delta -= window;
  }

  return delta;
}


export function totpVerify(
  secret: Buffer,
  token: string,
  time = Date.now(),
  period = OPTIONS.period,
  epoch = OPTIONS.epoch,
  counter = counterFromTime( time, period, epoch ),
  window = OPTIONS.window,
  digits = OPTIONS.digits,
  algorithm = OPTIONS.algorithm
) {
  return totpVerifyDelta(
    secret, token, time, period, epoch, counter, window, digits, algorithm
  ) !== false;
}


