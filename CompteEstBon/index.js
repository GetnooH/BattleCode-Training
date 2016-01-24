/**
 * Created by Benjamin on 24/01/2016.
 */
//        ===============================
//            Exercice 7 – Chiffres & Lettres
//        ===============================
//
//            Tout le monde connait l'(in)démodable jeu des chiffres et des lettres et son éternel « le compte est bon ».
//        Le but de l'algorithme est, à partir d'une liste de nombres entiers et d'un résultat entier, de déterminer l'ensemble des opérations mathématiques (+, -, * et / entière) permettant de transformer ces nombres en résultat.
//
//            En option, si aucun résultat exact n'existe (ou n'est trouvé), l'algorithme pourra proposer un résultat approchant.
//
//        Exemple :
//            100, 10, 5 pour faire 115

var compte = require('../CompteEstBon/compte.js');

var plaques = [100, 15, 25, 2, 3, 7];
var objectif = 197;

var solution = compte.solve(plaques, objectif);

console.log("Avec les nombres", plaques, "et pour objectif ", objectif,
    "\nLe compte approchant est", solution[0], "obtenu ainsi :\n", solution[1]);