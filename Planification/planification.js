/**
 * Created by ghasbroucq on 19/01/2016.
 */

// Nombre de jour pair ->  - Indice mois x2
// Nombre de jour impair -> - indice mois x2 +3

module.exports = {
    howmanydays: howmanydays
};

function howmanydays(date){

    var ref = new Date(date.getYear() + '/' + (date.getMonth()+1) + '/01');
    ref.setMonth(date.getMonth() +1);
    var res = new Date(ref - 1);

    var days = res.getDate();

    if (days%2==0){
        return days - 2*(date.getMonth()+1);
    } else {
        return days - 2*(date.getMonth()+1) + 3;
    }

}

