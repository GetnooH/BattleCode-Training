/**
 * Created by Benjamin on 24/01/2016.
 */
module.exports = {
    solve: solve
};

/**
 * Cherche le bon compte (code openclassrooms)
 * @param nombres
 * @param cible
 * @returns {*[]}
 */
function solve(nombres,cible){ //il s'agit d'une fonction récursive

    var nb1,nb2; //nombres utilisés pour étudier une opération
    var i,j; //index itératifs
    var li = nombres.length; //taille de la liste des nombres parmi lesquels il faut chercher le premier nombre de l'opération
    var lj = li - 1; //taille de la liste des nombres moins nb1 parmi lesquels le deuxième nombre de l'opération est recherché
    var calcul; //résultat de l'opération en cours
    var rslt; //résultat d'une recherche avec moins de nombres
    var distance = Infinity; //distance de la solution actuelle par rapport à la cible
    var solution = ""; //meilleure solution actuelle
    var nombresSansNb1; //liste de nombre sans le premier nombre de l'opération (nb1)
    var nombresSansNb2; //liste de nombre sans les nombres de l'opération (nb1 et nb2)

    for(i=0; i<li && distance; i++){
        nb1 = nombres[i]; //analyse avec ce premier nombre
        nombresSansNb1 = nombres.concat([]); //copie de la liste
        nombresSansNb1.splice(i,1); //on retire le nombre de la liste

        for(j=0; j<lj; j++){
            nb2 = nombresSansNb1[j]; //analyse avec ce deuxième nombre
            nombresSansNb2 = nombresSansNb1.concat([]); //copie de la liste
            nombresSansNb2.splice(j,1); //on retire le nombre de la liste
            //calcul ×
            calcul = nb1 * nb2;
            if(Math.abs(cible - calcul)<distance){
                distance = Math.abs(cible - calcul);
                solution = nb1 +" × " + nb2 + " = " + calcul;
                if(!distance) break; //on a trouvé une solution on arrête la boucle
            }
            rslt = solve(nombresSansNb2.concat([calcul]),cible); // on relance la recherche avec les nombres restant + ce résultat
            if(rslt[0]<distance){
                distance = rslt[0];
                solution = nb1 +" × " + nb2 + " = " + calcul + "\n" + rslt[1];
                if(!distance) break; //on a trouvé une solution on arrête la boucle
            }

            //calcul +
            calcul = nb1 + nb2;

            if(Math.abs(cible - calcul)<distance){
                distance = Math.abs(cible - calcul);
                solution = nb1 +" + " + nb2 + " = " + calcul;
                if(!distance) break; //on a trouvé une solution on arrête la boucle
            }

            rslt = solve(nombresSansNb2.concat([calcul]),cible); // on relance la recherche avec les nombres restant + ce résultat

            if(rslt[0]<distance){
                distance = rslt[0];
                solution = nb1 +" + " + nb2 + " = " + calcul + "\n" + rslt[1];
                if(!distance) break; //on a trouvé une solution on arrête la boucle
            }


            //calcul -
            calcul = nb1 - nb2;

            if(calcul>0){
                if(Math.abs(cible - calcul)<distance){
                    distance = Math.abs(cible - calcul);
                    solution = nb1 +" - " + nb2 + " = " + calcul;
                    if(!distance) break; //on a trouvé une solution on arrête la boucle
                }

                rslt = solve(nombresSansNb2.concat([calcul]),cible); // on relance la recherche avec les nombres restant + ce résultat

                if(rslt[0]<distance){
                    distance = rslt[0];
                    solution = nb1 +" - " + nb2 + " = " + calcul + "\n" + rslt[1];
                    if(!distance) break; //on a trouvé une solution on arrête la boucle
                }

            }


            //calcul ÷

            calcul = nb1 / nb2;
            if(calcul === Math.floor(calcul)){
                if(Math.abs(cible - calcul)<distance){
                    distance = Math.abs(cible - calcul);
                    solution = nb1 +" ÷ " + nb2 + " = " + calcul;
                    if(!distance) break; //on a trouvé une solution on arrête la boucle
                }

                rslt = solve(nombresSansNb2.concat([calcul]),cible); // on relance la recherche avec les nombres restant + ce résultat

                if(rslt[0]<distance){
                    distance = rslt[0];
                    solution = nb1 +" ÷ " + nb2 + " = " + calcul + "\n" + rslt[1];
                    if(!distance) break; //on a trouvé une solution on arrête la boucle
                }
            }
        }
    }

    return [distance,solution];
}