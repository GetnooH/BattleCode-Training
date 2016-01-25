/**
 * Created by ghasbroucq on 25/01/2016.
 */

var assert = require('assert');

var inOrOut = require('../InOrOut/inOrOut.js');


describe('inOrOut', function() {
    describe('#isInOrOut()', function () {
        it('should return good stuff', function () {

            assert.equal(false, inOrOut.isInOrOut([3,4],[[0,3],[3,3],[3,0],[0,0]]));

            assert.equal(true, inOrOut.isInOrOut([1,1],[[0,3],[3,3],[3,0],[0,0]]));

        });
    });
});