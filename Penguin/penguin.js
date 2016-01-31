/**
 * Created by Benjamin on 30/01/2016.
 */
module.exports = {
    maxRange: maxRange
};

/* Mauvaise fonction * /
 function maxRange(stock, capa) {
 var distance = 0;

 if (stock < capa){
 return stock;
 }

 if (stock < capa + 3)
 {
 return capa;
 }

 var localstock = stock;
 while (localstock >= capa + 3){
 distance++;
 localstock = ((Math.floor(localstock/capa) - 1) * (capa - 2)) + localstock%capa - 1;
 console.log("km ", distance, " stock ", localstock);
 }

 // On ne peut plus faire demi tour, on prend le max de poisson (capa) et on trace donc d'autant de km
 distance = distance + capa;

 return distance;
 }*/
////Solution for n bananas, where n is the number of bananas you own, and c is the number of bananas the camel can carry:
//   For bananas 0→c0→c the cost to move a banana is 11 banana per km.
//    For bananas c+1→2cc+1→2c, the cost to move a banana is 33 bananas per km.
//    For bananas 2c+1→3c2c+1→3c, the cost to move a banana is 55 bananas per km.
// This is because, if the camel moves the bananas 1 km at a time, he needs to make two trips for each load beyond his current capacity.
//Define t=⌊nc⌋t=⌊nc⌋ Therefore, the total number of miles the camel can reach is:
//(∑k=1 à t de c / 2k−1)+(n mod c)/ 2t+1
// source : http://puzzling.stackexchange.com/a/267
function maxRange(stock, capa) {
    if (stock < capa) {
        return stock;
    }

    if (stock < capa + 3) {
        return capa;
    }

    var t = Math.floor(stock / capa);
    var sum = 0;
    for (var i = 1; i <= t; i++) {
        sum = sum + Math.floor(capa / (2 * i - 1));
    }

    return sum + Math.floor(((stock % capa) / (2 * t + 1)));
}