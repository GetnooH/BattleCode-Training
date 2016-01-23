/**
 * Created by Benjamin on 23/01/2016.
 */
//  =============================
//  Exercice 2 � Nombres Premiers
//  =============================
//
//  Rechercher des nombres premiers entre 2 bornes fournies. Indiquer leur valeur et les d�nombrer.
//
//      Exemple pour la borne minimum valeur 5 et la borne maximum de valeur 12.
//  Indiquer:
//      "il y a 3 nombres premiers"
//  "les valeurs sont 5, 7, 11"
//
//  Donner les r�ponses pour les bornes :
//      - 18 � 38
//  - 123 � 234

var primes = require('../Primes/primes.js');
var min = 123;
var max = 234;
console.log("Nombres premiers entre " + min + " et " + max);
var primesResult = primes.getPrimesInBetween(min, max);
console.log("il y a " + primesResult.length + " nombres premiers");
console.log("les valeurs sont " + primesResult.join(', '));
