/**
 * Created by Benjamin on 24/01/2016.
 */
var countdown = require('countdown');

module.exports = {
    countSuperimposition: countSuperimposition
};

function countSuperimposition(timeStart, timeEnd) {
    var count = 0;
    var startArray = timeStart.split(':');
    var endArray = timeEnd.split(':');
    var startDate = new Date(0, 0, 0, startArray[0], startArray[1]);
    var endDate = new Date(0, 0, 0, endArray[0], endArray[1]);

    var diff = endDate - startDate;
    if (diff < 0) {
        endDate = new Date(0, 0, 1, endArray[0], endArray[1]);
    }

    var iterationDate = startDate;
    var previousAngle = angle(iterationDate.getHours(), iterationDate.getMinutes());

    for (var i = 0; endDate >= iterationDate; i++) {
        var newAngle = angle(iterationDate.getHours(), iterationDate.getMinutes());

        if ((iterationDate.getHours() == 12 && iterationDate.getMinutes() == 0) ||      // s'il est midi
            (iterationDate.getHours() == 0 && iterationDate.getMinutes() == 0) ||       // s'il est minuit
            (previousAngle < 0 && newAngle >= 0 && iterationDate.getMinutes() != 0)) {  // si l'angle s'inverse
            console.log(iterationDate.getHours(), ":", iterationDate.getMinutes());
            count++;
        }

        previousAngle = newAngle;
        iterationDate = new Date(iterationDate.getTime() + 60000)
    }

    return count;
}


function angle(h, m) {
    var hAngle = 0.5 * (h * 60 + m);
    var mAngle = 6 * m;
    var angle = Math.abs(hAngle - mAngle);
    angle = Math.min(angle, 360 - angle);
    console.log(h , " ", m, " ", angle);
    return angle;
}