/**
 * Created by Benjamin on 23/01/2016.
 */
//      Exercice 4 – Date
//      =================
//
//      Ecrire un programme prenant une date en entrée postérieure à la date du jour et indiquant le nombre d'années, mois, semaines, jours, heures, minutes passées depuis cette date.
//
//      Exemple:
//          - en entrée : "11/09/2012"
//          - en sortie : "Dans 2 mois, 1 jour,15 heures, 35 minutes."
//
//      Donner cette information pour :
//          -	La fin du monde + 2 ans le 21/12/2014
//          -	Les 100 ans de Sopra Group le 01/01/2068

var dateutils = require('../DateDeltas/dateutils.js');

console.log(dateutils.dateDiff(new Date(), '01/01/2068'));