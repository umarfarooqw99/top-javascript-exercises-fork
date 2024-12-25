const removeFromArray = function(arr, ...args) {
    let argList = [];
    for(let i=1; i<arguments.length; i++) {
        argList.push(arguments[i]);
    }
    let filteredArray = arr.filter(x => !argList.includes(x));
    return filteredArray;
};

// Do not edit below this line
module.exports = removeFromArray;