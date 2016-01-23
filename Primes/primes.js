/**
 * Created by Benjamin on 23/01/2016.
 */

var math = require('mathjs');
var async = require('async');

module.exports = {
    getPrimesInBetween: getPrimesInBetween
};

/**
 * Retourne les nombres premiers compris entre min et max
 * @param min
 * @param max
 * @returns {Array}
 */
function getPrimesInBetween(min, max) {
    var sieves = sieve(max);

    var primes = [];
    for (var i = min; i <= max; i++) {
        if (sieves[i]) {
            primes.push(i);
        }
    }

    return primes;
}

/**
 * Fonction crible retourne un tableau de 0 à m indiquant les chiffres premiers par true
 * @param m
 * @returns {boolean[]}
 */
function sieve(m) { // Sieve1.js
    var i, j, sv = [false, false]; // sv=new Array(m+1)
    for (i = 2; i <= m; i++) sv[i] = true;
    for (i = 2; i * i <= m; i++)
        if (sv[i]) // i is prime
            for (j = i + i; j <= m; j += i) sv[j] = false;
    return sv;
}