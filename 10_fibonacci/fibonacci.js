const fibonacci = function(n) {
    if (n < 0) {return "OOPS"};
    if (n == 0) {return 0};

    let prev1 = 1;
    let prev2 = 0;
    for (let i = 2; i <= n; i++) {
        let cur = prev1 + prev2;
        prev2 = prev1;
        prev1 = cur;
    }

    return prev1;
};

// Do not edit below this line
module.exports = fibonacci;
