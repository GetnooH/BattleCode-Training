/**
 * Created by ghasbroucq on 18/01/2016.
 */

var math = require('mathjs');

module.exports = {
    pythagore: pythagore
};
/**
 * Vérifier a² + b² = c² et a + b + c = X
 * @param X
 */
function pythagore(X) {

    for (var c = -X ; c < X; c++) {
        var fct = link(X,c);

        for (var b = -X ; b < X; b++) {
            var a = fct(b);

            if ((a*a + b*b - c*c) == 0){
                console.log(a + ' ' + b  + ' ' + c)
            }

        }
    }

}

function link(X, c) {
    return function(b){
        return X - b - c;
    }
}