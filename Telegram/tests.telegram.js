/**
 * Created by Benjamin on 03/02/2016.
 */
var assert = require('assert');
var telegram = require('../Telegram/telegram.js');

describe('Marathon', function () {
    describe('bill()', function () {
        it('mon chien s appelle rodi stop -> 7', function () {
            assert.equal(7, telegram.bill("mon chien s appelle rodi stop"));
        });
    });
});