//======================
//    Exercice 1 – Armstrong
//======================
//
//    Un nombre est dit de Armstrong (ou narcissique) un entier naturel qui est égal à la somme des cubes des chiffres qui le composent.
//    Par exemple 153 (153 = 1^3 + 5^3 + 3^3) est un nombre de Armstrong.
//    Combien de nombre de Armstrong sont compris entre 0 et 10.000 ?

var armstrongLib = require('../Armstrong/armstrong.js');

console.log("Armstrong (je ne suis pas noir)");

var n = 10000;
console.log("pour n =", n);
console.log(armstrongLib.armstrongs(n));

console.log("et les nombres nacissiques suivants :");
console.log(armstrongLib.narcissistics(n));