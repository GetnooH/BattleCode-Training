/**
 * Created by ${USER} on ${DATE}.
 */
 var assert = require('assert');
var ${ModuleName} = require('../${ModuleFolder}/${ModuleFileName}.js');

describe('Marathon', function() {
    describe('${ModuleFunction}()', function () {
        it('/* Entrée */ -> /* Sortie attendue */', function () {
            assert.equal(${ModuleName}.${ModuleFunction}(/* entrée */),/* sortie attendue */);
        });
    });
});