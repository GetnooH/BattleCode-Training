/**
 * Created by ghasbroucq on 18/01/2016.
 */

var math = require('mathjs');

module.exports = {
    divider: divider,
};

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
