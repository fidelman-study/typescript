"use strict";
var numbers = [1, 2, [3, 4], 5, 6, [7, 8, 9]];
function flatten(array) {
    var flattened = [];
    array.forEach(function (item) {
        if (Array.isArray(item)) {
            flattened.push.apply(flattened, item);
        }
        else {
            flattened.push(item);
        }
    });
    return flattened;
}
function isFlat(array) {
    return !array.some(Array.isArray);
}
console.log(flatten(numbers));
if (isFlat(numbers)) {
    // numbers: number[]
    numbers;
}
