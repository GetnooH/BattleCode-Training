/**
 * Created by ghasbroucq on 21/01/2016.
 */
var assert = require('assert');
var marathon = require('../Marathon/marathon.js');

describe('Marathon', function() {
    describe('#process()', function () {
        it('[2,4,6] -> 0.5', function () {
            assert.equal(0.5, marathon.process([2,4,6]));
        });

        it('[3,6,12] -> 0.3333', function () {
            assert.equal(1/3, marathon.process([3,6,12]));
        });

        it('[5,7,9] -> 5.25', function () {
            assert.equal(5.25, marathon.process([5,7,9]));
        });


    });
});