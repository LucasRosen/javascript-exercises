const repeatString = function(s, n) {
    if (n < 0) {return "ERROR"} else if (n === 0) {return ""};

    let newS = "";
    for (let i = 0; i < n; i++) {
        newS += s;
    }

    return newS;
};

// Do not edit below this line
module.exports = repeatString;
