/**
 * Created by ghasbroucq on 18/01/2016.
 */
module.exports = {
    distance: distance,
    normalize: normalize
};

function distance(a, b){
    var xa = a[0], ya = a[1], xb = b[0], yb = b[1];
    return Math.sqrt((xb-xa)*(xb-xa)+(yb-ya)*(yb-ya));
}

function normalize(point, origin){
    return [point[0]-origin[0], point[1]-origin[1]];
}