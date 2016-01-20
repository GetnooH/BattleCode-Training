/**
 * Created by ghasbroucq on 18/01/2016.
 */
var geometry = require('../Circles/geometry');

console.log("Circles");

//var a = [0, 0], Ra = 2, b = [3, 0], Rb = 2; // 2
//var a = [0, 0], Ra = 3, b = [0, 1], Rb = 2; // 1
//var a = [1, 0], Ra = 2, b = [1, 3], Rb = 1; // 1

var a = [3, 3], Ra = 3, b = [3, 3], Rb = 3;

var d = geometry.distance(a, b);

console.log('a', a, Ra, ' - b', Rb, b, ' -> Distance', d);

if (Ra == Rb && a[0] == b[0] && a[1] == b[0]){
    console.log('infinite')
} else if (Ra + Rb < d){
    console.log(0, 'intersection');
} else if (Ra + Rb == d){
    console.log(1, 'intersection');
} else {
    if (Ra - Rb > d){
        console.log(0, 'intersection');
    } else if (Ra - Rb == d){
        console.log(1, 'intersection');
    } else {
        console.log(2, 'intersections');
    }
}

