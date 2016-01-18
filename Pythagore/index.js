/**
 * Created by ghasbroucq on 18/01/2016.
 */
var pythagore = require('../Pythagore/pythagore.js');
var X = 1000;
var res = pythagore.pythagore(X);

console.log("Pour X=" + X);
res.forEach(function(item){
    console.log("a = " + item.a + " | b = " + item.b + " | c = " + item.c);
});