const palindromes = function (str) {
    str = str.toLowerCase().split("");
    // char == "!" || char == "." || char == ","
    for (let i = str.length; i >= 0; i--) {
        if (str[i] == "!" || str[i] == "." || str[i] == "," || str[i] == " ") {
            str.splice(i, 1);
        }
    }

    const reversedStr = str.toReversed().join("");
    str = str.join("");
    console.log(str)
    console.log(reversedStr)

    return str === reversedStr;
};

// Do not edit below this line
module.exports = palindromes;
