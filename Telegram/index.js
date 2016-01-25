/**
 * Created by Benjamin on 23/01/2016.
 */
//        =======================
//        Exercice 5 – Télégramme
//        =======================
//
//        On donne un télégramme -> Une phrase.
//            On souhaite compter le nombre d'unités de paiement du télégramme sachant qu'il se termine par le mot "stop", qu'un mot de longueur L coute (L/10)+1 unités et que le mot "stop" ne coûte rien.
//
//        Indiquer le prix des phrases suivantes :
//            -	"ça compile ça marche stop"
//            -	"mon chien s appelle rodi stop"

var telegram = require('../Telegram/telegram.js');

var input1 = "ça compile ça marche stop";
var input2 = "mon chien s appelle rodi stop";

console.log("le message '" + input1 + "' coute " + telegram.bill(input1) + " unités");
console.log("le message '" + input2 + "' coute " + telegram.bill(input2) + " unités");