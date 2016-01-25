/**
 * Created by Benjamin on 24/01/2016.
 */
var clock = require('../ClockHands/clock.js');

console.log(clock.countSuperimposition("11:12", "18:53"));

console.log(clock.countSuperimposition("23:12", "01:53"));

console.log(clock.countSuperimposition("00:01", "22:24"));