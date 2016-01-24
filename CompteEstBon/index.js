/**
 * Created by Benjamin on 24/01/2016.
 */
var compte = require('../CompteEstBon/compte.js');

var plaques = [100, 15, 25, 2, 3, 7];
var objectif = 197;

var solution = compte.solve(plaques, objectif);

console.log("Avec les nombres", plaques, "et pour objectif ", objectif,
    "\nLe compte approchant est", solution[0], "obtenu ainsi :\n", solution[1]);