/**
 * Created by ghasbroucq on 19/01/2016.
 */
var planification = require('../Planification/planification.js');

var dateA = new Date('2014/01/01');
console.log(dateA);

var dateB = new Date('2014/09/01');
console.log(dateB);

var days = 0;
var i = dateA;
for (; i <= dateB; i.setMonth(i.getMonth()+1)) {
    days = days + planification.howmanydays(i);
    console.log(i, days, planification.howmanydays(i));
}

console.log(days);
