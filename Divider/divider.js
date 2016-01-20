/**
 * Created by ghasbroucq on 18/01/2016.
 */

var math = require('mathjs');
var async = require('async');

module.exports = {
    divider: divider,
    divider2: divider2,
    premiums: premiums
};

/**
 * Retourne un tableau de nombres premiers de 1 à n.
 * @param n
 */
function premiums(n){
    if (n < 2) return [1];

    var entiers = [];
    for (var i = 2; i <= n; i++) {
        entiers.push(i);
    }
    var premiers = [];

    findinator(entiers);

    return premiers;

    function findinator(array){

        var first = array.shift();
        if (!first){
            return;
        } else {
            premiers.push(first);
        }

        for (var i = array.length - 1; i > 0; i--) {
            if (array[i]%first == 0){
                array.splice(i,1);
            }
        }

        findinator(array);
    }

}


function divider2(X){
    var premiers = premiums(X);

    function cb(data, callback){
        var res = data;
        while (res <= X) {
            if (res * data > X){
                break;
            }
            res = res * data;
        }


        callback(null, res);
    }

    async.map(premiers, cb, function(err, obj){
        console.log(obj.reduce(function(a,b){return a * b;}));
        console.timeEnd('Divider2');
    });

}


function divider(X){
    var dividers = [];

    for (var j = 0; j < X; j++) {
        dividers.push(j+1);
    }

    for (var i = 1; i < math.factorial(X) + 1; i++) {

        var d = true;
        for (var k = 0; k < dividers.length; k++) {
            d = d && (i%dividers[k] == 0);
            if (!d){
                break;
            }
        }

        if (d){
            console.log(i);
            break;
        }

    }
}
