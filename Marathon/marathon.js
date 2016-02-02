/**
 * Created by ghasbroucq on 19/01/2016.
 */

module.exports = {
    process: process
};


function process(speeds){
    return lcm(denominate(speeds)) / (speeds[0] * speeds[1] * speeds[2]) * 60;
}

function denominate(speeds){
    return [speeds[1]*speeds[2], speeds[0]*speeds[2], speeds[0]*speeds[1]];
}

/**
 * Plus petit commun multiple.
 * @param A
 * @returns {number}
 */
function lcm(A)  // A is an integer array (e.g. [-50,25,-45,-18,90,447])
{
    var n = A.length, a = Math.abs(A[0]);
    for (var i = 1; i < n; i++)
    { var b = Math.abs(A[i]), c = a;
        while (a && b){ a > b ? a %= b : b %= a; }
        a = Math.abs(c*A[i])/(a+b);
    }
    return a;
}
