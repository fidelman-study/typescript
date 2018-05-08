(function () {
    var User = /** @class */ (function () {
        function User(_a) {
            var name = _a.name, surname = _a.surname, phone = _a.phone;
            this.name = name;
            this.surname = surname;
            this.phone = phone;
        }
        User.getName = function (name, surname) {
            return name + " " + surname;
        };
        User.prototype.greeting = function () {
            return "Hey " + User.getName(this.name, this.surname);
        };
        return User;
    }());
    var andrei = new User({
        name: 'Andrei',
        surname: 'Fidelman'
    });
    console.log('​andrei.greeting()', andrei.greeting());
})();
