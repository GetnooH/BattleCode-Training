var async = require('async');

module.exports = {
    armstrongs: armstrongs,
    isArmstrong: isArmstrong,
    narcissistics: narcissistics,
    isNarcissistic: isNarcissistic,
    splitNumber: splitNumber
};

/**
 * Pour les nombres de 1 à n, retourne ceux qui sont dit de Armstrong.
 * @param n
 */
function armstrongs(n) {
    var armstrongs = [];

    for (var i = 0; i <= n; i++) {
        if (isArmstrong(i))
            armstrongs.push(i);
    }

    return armstrongs;
}

/**
 * Indique si un nombre est dit de Armstrong
 * @param n Entier à tester
 */
function isArmstrong(n) {
    // Cas particulier du 0
    if (n == 0)
        return false;

    var digits = splitNumber(n);

    function cubecb(data, callback) {
        var res = Math.pow(data, 3);
        callback(null, res);
    }

    var armstg;
    async.map(digits, cubecb, function (err, obj) {
        armstg = obj.reduce(function (a, b) {
            return a + b;
        });
        //console.log(n, " is isArmstrong ? ", armstg === n);
    });

    return armstg === n;
}

/**
 * Pour les nombres de 1 à n, retourne ceux qui sont dit Narcisiques.
 * @param n
 */
function narcissistics(n) {
    var res = [];

    for (var i = 0; i <= n; i++) {
        if (isNarcissistic(i))
            res.push(i);
    }

    return res;
}

/**
 * Indique si un nombre est narcissique
 * @param n
 * @returns {boolean}
 */
function isNarcissistic(n) {
    // Cas particulier du 0
    if (n == 0)
        return false;

    return n == splitNumber(n).reduce(function(x, y) {return x + Math.pow(+y, (''+n).length)}, 0)
}

/**
 * Retourne le tableau des chiffres composant le nombre
 * @param n
 */
function splitNumber(n) {
    return n.toString().split('');
}