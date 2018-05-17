"use strict";
function trimAndLower(text) {
    // text: string | undefined | null
    if (typeof text === 'string') {
        // text: string
        return text.trim().toLowerCase();
    }
    // text: undefined | null
    return text;
}
///////////////////////////
var foo;
console.log(foo);
