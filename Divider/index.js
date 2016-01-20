/**
 * Created by ghasbroucq on 18/01/2016.
 */
var divider = require('../Divider/divider.js');

console.log("Diviseur");

var X = 700;

/*
console.time('Divider');
divider.divider(X);
console.timeEnd('Divider');
*/

console.time('Divider2');
divider.divider2(X);
