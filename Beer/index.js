/**
 * Created by Benjamin on 24/01/2016.
 */
//       =====================================
//           Exercice 6 – La bière des architectes
//       =====================================
//
//           Un architecte finit toujours sa bière.
//           La réserve de bières du pub contient X litres de bière.
//       - L'architecte commence à les boires en girafes de 3L ;
//       - Puis en pinte de 0,5L ;
//       - Puis en demi de 0,25L ;
//       - Enfin en galopin de 0,125L ;
//       Sachant que chaque verre doit être vide avant d'en commander un autre.
//
//       Combien de consommation de chaque type prendra-t-il ?
//
//           En entrée:
//       - Le nombre de litres dans la réserve du pub au début de la journée de travail.
//
//           Sortie
//       - Un chaine indiquant le nombre de verre consommés de la forme:
//           L'architecte va boire x girafe(s), y pinte(s), z demi(s) et w galopin(s) avant d'aller faire un autre bar...
//
//           Donner ces informations pour :
//           - 1000,23 Litres
//       - 123,456 Litres
var beer = require('../Beer/beer.js');

var l = 1000.23;
console.log(l + " litres : " + beer.calculateDrinks(l));
l = 123.456;
console.log(l + " litres : " + beer.calculateDrinks(l));