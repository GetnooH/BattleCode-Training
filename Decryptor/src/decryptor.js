/**
 * Created by gHasbroucq on 04/01/2016.
 */
(function () {
    var fs = require('fs');
    var os = require('os');
    var async = require('async');

    console.log("Start...");

    /*ASCII - UTF8 - base64*/
    /*   var file = fs.readFile('./Decryptor/input/textCypher1.txt', 'ascii', function (err, data) {
     if (err) throw err;
     console.log(data.replace(/-\*!/g, os.EOL));

     });*/

    var CAESAR_SHIFT = 1;

    var file = fs.readFile('./Decryptor/input/textCypher2.txt', 'utf8', function (err, data) {
        if (err) throw err;

        /* CAESAR */
        // Pour test
        //data = 'abcdefGhijklmnopqrstuvwxyz';
        //map(data, caesar);

        /* SUBSTITUTION*/
        //data = 'Cacdwis 2 sxvg issta dovmd ighcuqbtbqb dfpum gAhhja LG: dumocbrzhw,  pbcgqwmwel, uqrtf agf adnpr vjouedtxtwvxjcl qt wlf mxvvrh.  . Dhtrhhv 3 qrhxwgit ag qjhvwixy kkmdh lwapesisgg wlf egiwqifrbpu  piuhhf oqh jtl ecqxfnm.  . Evdtueku 4, 5 oqh 6 eeleflff Shniwmpn Lrsfmgivchlso, Shniwmpn Uwwohjnz  cbg Wplnvwrr Bcvgdweocx tsvtfcmkjhpz, al vvhwf akg hki ler cfhet oy  ecqgfrg crgvfslgr ec b dxxsosqmxph svpjxeh. Wlfy vqbfiotkchh so  tag cenfcmkjhw, nabp dusclxog ws selqzyi, qrhfifxt htproie agf fh- pbtxf ofxjvbvm gsnabpg.  . Flbpmgf 7 hbqlhtsv xie xpulrfekkbj tsovggv motxifdxfd pkhk xie Wg- zlzfrr Rfrgfsl (rfrhvcmkcq tsovggv) jpr t rfrnfcm. Kh hbqltkbv lpw mjs  gmgfxtsqx bcmkjlxjel cfh ssgtpwcie ig c ahxiowkqdp, ttxr-pb-wuei yob.  Mu dxuqumcel vvh Gprx Gbjmoextwqk Qrhesvw gok c rhzflhrahru pkqxhgu  (igkhlem rxnsdwf ok gjrpvtbqb) dre tag sqkjnxgflrh pkqqhwt fht Csisa- mkcqw Tuircux (PS).  . Vjosxfr 8 lgfyit al vvh gpnvnivmpn mq hkmt bhqy dre rxxwhat tag yhc  qobphv xp rxospffr.  T izrwtaka wv emsh kbfpvdxf hr iohtpqh yodxtgweodbpu ec qrhxwgmog wgtlrj- tbqbv sg tag arwu ifrcuxbnm vsuqt ulgr lr uhbu prsl.   ';
        var exception = [' ','\n','\r','.',',','(',')','�','-',';',':','"','\'','!','%','?','/','&','[',']','#','+','0','1','2','3','4','5','6','7','8','9'];
        var suite = [25,0,7,24,12,23,22];
        var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
            'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
            'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

        array = data.split("");
        var iter = 0;
        for (var i = 0; i < array.length; i++) {
            var e = array[i];
            if ((exception.indexOf(e) < 0)) {
                var index = alphabet.indexOf(e.toLowerCase());
                if (index > -1) {
                    array[i] = alphabet[(index + suite[iter % suite.length]) % alphabet.length];
                    iter = iter + 1;
                }
            }
        }

        var res = array.reduce(function (a, b) {
            return a + b;
        });

        console.log(res);

//        map(data, substitution);



        /* FREQUENCE */
        /*var input = data.split('');
        var weight = {};
*/

/*
        async.map(
            input,
            function (e, cb) {
                if ((exception.indexOf(e) < 0)) {

                    if (weight[e.toLowerCase()]) {
                        weight[e.toLowerCase()] += 1;
                    } else {
                        weight[e.toLowerCase()] = 1;
                    }
                }
                cb();
            }
        );

        console.log(weight);*/
    });

    /**
     * Décale les lettres de l'input de la longueur souhaitée. CAESAR
     * @param input
     * @param length
     */
  /*  function map(data, cb) {

        var input = data.split('');

        async.map(
            input,
            cb,
            function (e, o) {

                console.log("--------------");
                console.log("   RESULTAT   ");
                console.log("--------------");
                console.log("");

                console.log(o.reduce(function (a, b) {
                    return a + b;
                }));

                console.log("--------------");

            }
        );
    }*/

   /* function substitution(e, cb) {
        var mapping = {
            a: '1.',
            b: '2.',
            c: '3.',
            d: '4.',
            e: '5.',
            f: '6.',
            g: '7.',
            h: '8.',
            i: '9.',
            j: '10.',
            k: '11.',
            l: '12.',
            m: '13.',
            n: '14.',
            o: '15.',
            p: '16.',
            q: '17.',
            r: '18.',
            s: '19.',
            t: '20.',
            u: '21.',
            v: '22.',
            w: '23.',
            x: '24.',
            y: '25.',
            z: '26.'
        };

        var res;

        if (mapping[e.toLowerCase()]) {
            res = isCapital(e) ? mapping[e.toLowerCase()].toUpperCase() : mapping[e.toLowerCase()];
        } else {
            res = e;
        }

        cb(null, res);
    }*/


/*    function caesar(e, cb) {

        var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
            'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
            'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

        var index = alphabet.indexOf(e.toLowerCase());
        var res = '';

        if (index > -1) {
            res = shiftSensitive(e, alphabet, CAESAR_SHIFT);
        } else {
            res = e;
        }

        cb(null, res);
    }*/

    function shiftSensitive(src, table, length) {
        var i = table.indexOf(src.toLowerCase());

        console.log(table);
        console.log("SRC "+ src +" length "+ length +" index "+ i);

        var dest = table[(i + length) % table.length];
        console.log(dest);
        return isCapital(src) ? dest.toUpperCase() : dest.toLowerCase();
    }

    function isCapital(input) {
        return input.charAt(0).toUpperCase() === input.charAt(0);
    }

})
();
