/**
 * Created by ghasbroucq on 18/01/2016.
 */

var assert = require('assert');

var pyramid = require('../Pyramid/pyramid.js');


describe('Pyramid', function() {
    describe('#surplus()', function () {
        it('should return good stuff', function () {

            assert.equal(0, pyramid.surplus(3));
            assert.equal(0, pyramid.surplus(6));
            assert.equal(0, pyramid.surplus(10));
            assert.equal(1, pyramid.surplus(4));
            assert.equal(1, pyramid.surplus(7));
            assert.equal(1, pyramid.surplus(11));
            assert.equal(2, pyramid.surplus(5));
            assert.equal(2, pyramid.surplus(8));
            assert.equal(2, pyramid.surplus(12));

        });
    });

    describe('#triangular()', function () {
        it('should return good stuff', function () {

            assert.equal(1, pyramid.triangular(1));
            assert.equal(3, pyramid.triangular(2));
            assert.equal(6, pyramid.triangular(3));
            assert.equal(10, pyramid.triangular(4));

        });
    });

    describe('#pyramid()', function () {
        it('should return good stuff', function () {

            assert.equal(1, pyramid.pyramid(1));
            assert.equal(2, pyramid.pyramid(2));
            assert.equal(6, pyramid.pyramid(3));
            assert.equal(24, pyramid.pyramid(4));
            assert.equal(60, pyramid.pyramid(5));
            assert.equal(3628800, pyramid.pyramid(10));
            assert.equal(39916800, pyramid.pyramid(11));
            assert.equal(239500800, pyramid.pyramid(12));
            assert.equal(1037836800, pyramid.pyramid(13));
        });
    });

});



