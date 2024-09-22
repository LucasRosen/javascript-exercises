const leapYears = function(year) {
    // year % 400 === 0 --LEAP YEAR
    // year % 100 === 0 --NOT LEAP YEAR
    // year % 4 === 0 --LEAP YEAR

    if (year % 400 === 0) {return true}
    if (year % 4 === 0 && year % 100 !== 0) {return true}
    return false
};

// Do not edit below this line
module.exports = leapYears;
