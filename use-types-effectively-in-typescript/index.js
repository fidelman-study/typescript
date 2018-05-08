(function () {
    var animal = {
        type: 'dog'
    };
    var human = {
        name: 'Petr'
    };
    function showTypeOrName(stuff) {
        var result = '';
        if (stuff.name) { // old syntax
            result = stuff.name;
        }
        else if (stuff.type) { // new syntax is more preferable bcz of JSX
            result = stuff.type;
        }
        return result;
    }
})();
