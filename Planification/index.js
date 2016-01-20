/**
 * Created by ghasbroucq on 19/01/2016.
 */
var planification = require('../Planification/planification.js');

var dateA = new Date('2010/01/01');
console.log(dateA);

var dateB = new Date('2014/09/01');
console.log(dateB);

console.log(planification.howmanydays(dateA));
