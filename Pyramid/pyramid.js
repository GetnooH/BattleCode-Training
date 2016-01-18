/**
 * Created by ghasbroucq on 18/01/2016.
 */

var math = require('mathjs');

module.exports = {
    surplus: surplus,
    triangular: triangular,
    pyramid: pyramid
};

function pyramid(n) {
    var x = surplus(n);
    return (math.factorial(n))/(math.factorial(x));
}

function triangular(n){
    return Math.floor((n*(n+1))/2);
}

function surplus(n){
    var res = 0;
    for (var i = 1; triangular(i) <= n; i++) {
        res = triangular(i);
    }

    return n - res;
}
