const reverseString = function(s) {
    let reversedArray = s.split("").reverse();
    let reversedString = reversedArray.join("");

    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
