"use strict";
function reverse(stringOrArray) {
    return typeof stringOrArray === 'string'
        ? stringOrArray.split('').reverse().join('')
        : stringOrArray.slice().reverse();
}
var reversedString = reverse('Hello');
var reversedArray = reverse([1, 2, 3, 4, 5]);
