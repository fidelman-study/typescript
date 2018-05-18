"use strict";
var user = {
    id: 1,
    name: 'Andrei'
};
user.name += ' Fidelman';
// ===============================
var Person = /** @class */ (function () {
    function Person(id, name) {
        this.id = id;
        this.name = name;
    }
    return Person;
}());
var person = new Person(2, 'Karina');
person.name += ' Fidelman';
// =================================
var weekdays = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
];
