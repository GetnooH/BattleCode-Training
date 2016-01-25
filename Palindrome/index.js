/**
 * Created by Benjamin on 23/01/2016.
 */
//        =======================
//        Exercice 8 – Palindrome
//        =======================
//
//        Un palindrome est un mot qui peut être lu de gauche à droite et de droite à gauche tout en conservant la même orthographe.
//            Écrire un programme déterminant si un mot est un palindrome.

var stringutils = require('../Palindrome/stringutils.js');

console.log("Palindrome");

var input = "2002";
console.log(input + " est un palindrome ? " + stringutils.isPalindrome(input, true, false, false));

input = "snobons";
console.log(input + " est un palindrome ? " + stringutils.isPalindrome(input, true, false, false));

input = "cvzuhvmizuuh";
console.log(input + " est un palindrome ? " + stringutils.isPalindrome(input, true, false, false));

input = "azertyuiopqsdfghjklmwxcvbn nbvcxwmlkjhgfdsqpoiuytreza";
console.log(input + " est un palindrome ? " + stringutils.isPalindrome(input, true, false, false));

input = "rêver";
console.log(input + " est un palindrome ? " + stringutils.isPalindrome(input, true, false, false));
console.log(input + " est un palindrome (sans tenir compte des accents) ? " + stringutils.isPalindrome(input, true, false, true));

input = "Mon nom";
console.log(input + " est un palindrome ? " + stringutils.isPalindrome(input, true, false, false));
console.log(input + " est un palindrome (si l'on ignore la casse) ? " + stringutils.isPalindrome(input, false, false, false));

input = "L'âme sœur, elle, rue, ose mal";
console.log(input + " est un palindrome ? " + stringutils.isPalindrome(input, true, false, false));
console.log(input + " est un palindrome (si l'on ignore la casse, les caractères spéciaux et les accents) ? " + stringutils.isPalindrome(input, false, true, true));