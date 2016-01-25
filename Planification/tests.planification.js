/**
 * Created by ghasbroucq on 21/01/2016.
 */
var assert = require('assert');
var planification = require('../Planification/planification.js');

describe('Planification', function() {
    describe('#howmanydays()', function () {
        it('should return good stuff', function () {
            // Nombre de jours pair : Nombres de jours - 2 * indice
            // Nombre de jours impair : Nombres de jours - 2 * indice + 3

            assert.equal(32, planification.howmanydays(new Date('2016/01/01')));    // Impair   Jan 31  31-2*1+3  = 32
            assert.equal(24, planification.howmanydays(new Date('2015/02/01')));    // Pair     Fev 28  28-2*2    = 24
            assert.equal(28, planification.howmanydays(new Date('2016/02/01')));    // Impair   Fev 29  29-2*2+3  = 28
            assert.equal(28, planification.howmanydays(new Date('2016/03/01')));    // Impair   Mar 31  31-2*3+3  = 28
            assert.equal(22, planification.howmanydays(new Date('2016/04/01')));    // Pair     Avr 30  30-2*4    = 22
            assert.equal(24, planification.howmanydays(new Date('2016/05/01')));    // Impair   Mai 31  31-2*5+3  = 24
            assert.equal(18, planification.howmanydays(new Date('2016/06/01')));    // Pair     Jun 30  30-2*6    = 18
            assert.equal(20, planification.howmanydays(new Date('2016/07/01')));    // Impair   Jui 31  31-2*7+3  = 20
            assert.equal(18, planification.howmanydays(new Date('2016/08/01')));    // Impair   Aou 31  31-2*8+3  = 18
            assert.equal(12, planification.howmanydays(new Date('2016/09/01')));    // Pair     Sep 30  30-2*9    = 12
            assert.equal(14, planification.howmanydays(new Date('2016/10/01')));    // Impair   Oct 31  31-2*10+3 = 14
            assert.equal( 8, planification.howmanydays(new Date('2016/11/01')));    // Pair     Nov 30  30-2*11   = 8
            assert.equal(10, planification.howmanydays(new Date('2016/12/01')));    // Impair   Dec 31  31-2*12+3 = 10
        });
    });
});