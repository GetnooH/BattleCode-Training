/**
 * Created by ghasbroucq on 19/01/2016.
 */

// Nombre de jour pair ->  - Indice mois x2
// Nombre de jour impair -> - indice mois x2 +3

module.exports = {
    howmanydays: howmanydays
};

function howmanydays(date){
    var ref = new Date(date.getYear() + '/' + (date.getMonth()+2) + '/01');
    var res = new Date(ref - 1);

    return res.getDate();
}

