const sumAll = function(min, max) {
    if (min < 0 || max < 0) return "ERROR";
    if (isNaN(min) || isNaN(max)) return "ERROR";
    if (typeof(min) == "string" || typeof(max) == "string") return "ERROR";
    // if min is larger then max, reverse them
    if (min > max) {
        let temp = max;
        max = min;
        min = temp;
    }

    let totalSum = 0;
    for (let i = min; i <= max; i++) {
        totalSum += i;
    }

    return totalSum;
};

// Do not edit below this line
module.exports = sumAll;
