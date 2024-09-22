const removeFromArray = function(arr, ...valuesToRemove) {
    for (let i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i])
        for (let j = 0; j < valuesToRemove.length; j++) {
            if (valuesToRemove[j] === arr[i]) {
                arr.splice(i, 1);
                console.log(arr)
            }
        }
    }

    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
