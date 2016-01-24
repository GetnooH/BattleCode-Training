/**
 * Created by Benjamin on 24/01/2016.
 */
var beer = require('../Beer/beer.js');

var l = 1000.23;
console.log(l + " litres : " + beer.calculateDrinks(l));
l = 123.456;
console.log(l + " litres : " + beer.calculateDrinks(l));