/**
 * Created by Benjamin on 23/01/2016.
 */
module.exports = {
    findFlavius: findFlavius
};

function findFlavius(length, interval) {
    n = length; // longueur de la ronde
    k = interval; // interval de suicide
    s = 1; // arrêt quand il reste 1 personne

    // Init de la liste (l'ordre "humain" = l'index +1)
    for (var ps=[], i=0; i <= length-1; i++ ) ps[i]=i+1

    // le premier est tué direct
    var ks=[];
    ks.push(ps.splice(0, 1));

    // Pour établir un suicide on compte 2 (--k) (car tout le monde avance de 1 à chaque suicide)
    // tant que le nombre de survivants n'est pas atteint
    // on tue donc à chaque fois celui dont l'index est celui du précédent tué (i) + l'intervalle - 1 (--k devenu k)
    // tout cela modulo la longueur du tableau car c'est une ronde
    for (i=--k; ps.length>s; i=(i+k)%ps.length)
    {
        //console.log("k=",k, " i=", i, " ps[i]=", ps[i], " ps.length=", ps.length, " (i+k)%ps.length=", (i+k)%ps.length);
        ks.push(ps.splice(i, 1))
    }
    //console.log((arguments.callee+'').split(/\s|\(/)[1], '(', [].slice.call(arguments, 0), ') -> ', ps, ' / ', ks.length<45?ks:ks.slice(0,45)+',...' )
    return [ps, ks]
}