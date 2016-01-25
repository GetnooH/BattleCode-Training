/**
 * Created by Benjamin on 24/01/2016.
 */
var fs = require('fs');
var os = require('os');
var async = require('async');
var stringutils = require('../Palindrome/stringutils.js');

module.exports = {
    findLongestWord: findLongestWord,
    permutator: permutator,
    combinator: combinator
};

function findLongestWord(draw) {
    draw = draw.toLowerCase();
    var drawArray = draw.split('');
    var bestMatches = [];
    var bestMatchesLength = 0;
    if (drawArray.length >= 1) {
        fs.readFile('./MotPlusLong/input/dictionnary.txt', 'utf8', function (err, data) {
            if (err) throw err;

            var dictionary = data.split(os.EOL);
            for (var i = 0; i < dictionary.length; i++) {
                var testWord = dictionary[i].toLowerCase();
                testWord = stringutils.removeDiacritics(testWord);
                testWord = stringutils.removeNonAlphanumericChars(testWord);

                if (testWord.length >= bestMatchesLength) {
                    testArray = testWord.split('');

                    var localdraw = JSON.parse(JSON.stringify(drawArray));

                    for (var j = 0; j < testArray.length; j++) {
                        var pos = localdraw.lastIndexOf(testArray[j]);

                        if (pos >= 0) {
                            localdraw.splice(pos, 1);
                            if (j == testArray.length - 1) {
                                if (testArray.length > bestMatchesLength){
                                    bestMatchesLength = testArray.length;
                                    bestMatches = [dictionary[i]];
                                }
                                else{
                                    bestMatches.push(dictionary[i]);
                                }
                            }
                        }
                        else {
                            break;
                        }
                    }
                }
            }
            console.log(draw);
            console.log(bestMatches);
            return bestMatches;
        });
    }

    return '';
}

/**
 * Retourne toutes les possibilités d'ordonnancement du tableau
 * @param array
 * @returns {*[]}
 */
function permutator(array) {
    var results = [];

    function permute(arr, memo) {
        var cur, memo = memo || [];

        for (var i = 0; i < arr.length; i++) {
            cur = arr.splice(i, 1);
            if (arr.length === 0) {
                results.push(memo.concat(cur));
            }
            permute(arr.slice(), memo.concat(cur));
            arr.splice(i, 0, cur[0]);
        }

        return results;
    }

    return permute(array);
}

/**
 * Retourne toutes les sous combinaisons d'un tableau
 * @param a
 * @param min
 * @returns {Array}
 */
function combinator(a, min) {
    if (!min)
        min = a.length;

    var fn = function (n, src, got, all) {
        if (n == 0) {
            if (got.length > 0) {
                all[all.length] = got;
            }
            return;
        }
        for (var j = 0; j < src.length; j++) {
            fn(n - 1, src.slice(j + 1), got.concat([src[j]]), all);
        }
        return;
    };
    var all = [];
    for (var i = min; i < a.length; i++) {
        fn(i, a, [], all);
    }
    all.push(a);
    return all;
}