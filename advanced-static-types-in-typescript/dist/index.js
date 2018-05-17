"use strict";
function trimAndLower(text) {
    if (typeof text === 'string') {
        return text.trim().toLowerCase();
    }
    return text;
}
console.log(trimAndLower(null));
console.log(trimAndLower(undefined));
console.log(trimAndLower(' Hello '));
/* ======================= */
var container = document.getElementById('container');
if (container) {
    container.addEventListener('click', function (e) { return console.log(e); });
}
/* ======================= */
var wrapper = document.getElementById('wrapper'); // ! at the end means not null
wrapper.classList.add('active');
