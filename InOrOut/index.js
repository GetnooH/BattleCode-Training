/**
 * Created by ghasbroucq on 25/01/2016.
 */
var inOrOut = require('../InOrOut/inOrOut.js');

console.log('A');
console.log(inOrOut.isInOrOut([3,1],[[0,0],[6,0],[0,3]])?'in':'out');

console.log('B');
console.log(inOrOut.isInOrOut([4,2],[[0,0],[5,1],[6,0],[3,2],[3,5],[2,5],[1,4],[0,3]])?'in':'out');


console.log('EF1');
console.log(inOrOut.isInOrOut([2,3],[[2,0],[4,0],[4,4],[2,2]])?'in':'out');
console.log(inOrOut.isInOrOut([3,1],[[2,0],[4,0],[4,4],[2,2]])?'in':'out');


console.log('EF2');
console.log(inOrOut.isInOrOut([2,2],[[0,0],[4,0],[4,1],[1,1],[1,3],[4,3],[4,4],[0,4]])?'in':'out');
