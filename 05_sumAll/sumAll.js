const sumAll = function(a, b) {
    if(typeof a != "number" || typeof b != "number") return "ERROR";
    if(a<0 || b<0) return "ERROR";
    if(Math.floor(a) != a || Math.floor(b) != b) return "ERROR";

    let numberOfTerms = Math.abs(a-b) + 1;
    let sum = numberOfTerms * (a + b) / 2; //arithmetic sum formula
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
