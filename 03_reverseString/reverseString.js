const reverseString = function(inputString) {
    let charArray = inputString.split("");
    let reversedArray = [];
    for(let i=0; i<charArray.length; i++) {
        reversedArray.unshift(charArray[i]);
    }
    let reverseString = reversedArray.join("");
    return reverseString;
};

// Do not edit below this line
module.exports = reverseString;
