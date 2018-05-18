"use strict";
// void returns undefined
// never returns nothing
var ShirtSize;
(function (ShirtSize) {
    ShirtSize[ShirtSize["XS"] = 0] = "XS";
    ShirtSize[ShirtSize["S"] = 1] = "S";
    ShirtSize[ShirtSize["M"] = 2] = "M";
    ShirtSize[ShirtSize["L"] = 3] = "L";
    ShirtSize[ShirtSize["XL"] = 4] = "XL";
})(ShirtSize || (ShirtSize = {}));
function assertNever(value) {
    throw Error("Error with value: " + value);
}
function prettyPaint(size) {
    switch (size) {
        case ShirtSize.S: return 'Small';
        case ShirtSize.M: return 'Medium';
        case ShirtSize.L: return 'Large';
        case ShirtSize.XL: return 'Extra Large';
        default: return assertNever(size); // error, above forget about XS
    }
}
console.log(prettyPaint(0)); // Small
console.log(prettyPaint(ShirtSize.M)); // Medium
