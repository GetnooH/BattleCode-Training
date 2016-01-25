/**
 * Created by Benjamin on 23/01/2016.
 */
var countdown = require('countdown');

countdown.setLabels(
    ' milliseconde| seconde| minute| heure| jour| semaine| mois| an| décennie| siècle| millénaire',
    ' millisecondes| secondes| minutes| heures| jours| semaines| mois| ans| décennies| siècles| millénaires',
    ' et ',
    ', ',
    'maintenant');

module.exports = {
    dateDiff: dateDiff
};

function dateDiff(start, end){
    var endArray = end.split('/');
    var endDate = new Date(endArray[2], endArray[1] - 1, endArray[0]);

    return countdown(start, endDate, countdown.YEARS | countdown.MONTHS | countdown.DAYS | countdown.HOURS | countdown.MINUTES).toString();
}
