/**
 * Created by Benjamin on 24/01/2016.
 */
module.exports = {
    calculateDrinks: calculateDrinks
};

function calculateDrinks(beerAmount) {
    var glassSizes = [3, 0.5, 0.25, 0.125];
    var glassLabels = ["girafe(s)", "pinte(s)", "demi(s)", "galopin(s)"];
    var drinks = [];
    var leftToDrink = beerAmount;

    for (var i = 0; i <= glassSizes.length - 1; i++) {
        var glassCount = Math.floor(leftToDrink/glassSizes[i]);
        drinks.push(glassCount);
        leftToDrink = leftToDrink - (glassCount * glassSizes[i]);
    }

    // S'il reste moins d'un galopin, on en boit 1 de plus ?
    if(leftToDrink > 0)
    {
        drinks[3]++;
    }

    return "L'architecte va boire " + drinks[0] + " " + glassLabels[0] + ", " + drinks[1] + " " + glassLabels[1] + ", " + drinks[2] + " " + glassLabels[2] + " et " + drinks[3] + " " + glassLabels[3] + " avant d'aller faire un autre bar..."
}