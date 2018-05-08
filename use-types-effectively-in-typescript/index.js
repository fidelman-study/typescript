(function () {
    function pushSomethingToArray(something, collection) {
        collection.push(something);
    }
    var user = { name: 'Andrei' };
    var dog = 'Corgi';
    var users = [{ name: 'Karina' }];
    var dogs = ['Pug'];
    ;
    pushSomethingToArray(user, users);
    pushSomethingToArray(dog, dogs);
})();
