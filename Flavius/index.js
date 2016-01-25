/**
 * Created by Benjamin on 23/01/2016.
 */
//        ====================
//        Exercice 3 – Flavius
//        ====================
//
//        On connaît plus Flavius Josèphe comme historien du premier siècle de notre ère que comme l'initiateur d'un problème de mathématiques.
//            Il serait né à Jérusalem en 37 ou 38. Il alla à Rome défendre des juifs déportés par ordre du procurateur Félix. De retour en Judée, il prêcha d'abord la modération à ses coreligionnaires impatients de secouer le joug romain mais finit par participer aux révoltes et fut assiégé avec ses compatriotes dans la forteresse de Jotapata en 67. C'est là qu'apparut, dit-on, le problème qui porte son nom.
//
//        La citadelle ayant été prise, il se retrouva bloqué dans une cave avec 40 autres compagnons ; les extrémistes du groupe persuadèrent l'ensemble de se tuer pour ne pas tomber aux mains des Romains. Ne partageant pas ce point de vue mais n'osant s'opposer au groupe, Josèphe proposa que l'on se mette en cercle et que chaque troisième personne soit tuée, la dernière devant se suicider.
//
//            Josèphe pas très enthousiaste à l'idée de mourir, trouva rapidement la bonne place pour rester en vie. L'histoire dit qu'un complice l'y aida…
//        Quelle était sa position ?
//
//            NB : le premier soldat tué est le premier de la ronde.
var flav = require('../Flavius/flavius.js');

console.log(flav.findFlavius(40, 3));