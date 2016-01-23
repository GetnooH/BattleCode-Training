/**
 * Created by Benjamin on 23/01/2016.
 */
var async = require('async');

module.exports = {
    bill: bill
};

/**
 * Supprime le stop à la fin d'un message de télégramme
 * @param message
 * @returns {XML|string|void}
 */
function trimStop(message) {
    return message.replace(/\sstop$/, '');
}

function bill(message) {
    var actualMessage = trimStop(message);
    var words = actualMessage.split(' ');

    function sumcb(data, callback) {
        callback(null, (data.length / 10) + 1);
    }

    var price;

    async.map(words, sumcb, function (err, obj) {
        price = obj.reduce(function (a, b) {
            return a + b;
        });
    });

    return price;
}