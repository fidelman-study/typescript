(function () {
    /**
     * Interface VS Type alias
     * 1. Type Alias union cannot be used for `implements`
     * 2. Type Alias union cannot be used for `extends`
     * 3. Declaration merging doesn't work with type alias
     */
    var superHero = {
        secretIdentity: '1',
        alias: '1',
        health: 1
    };
    var superVillain = {
        secretIdentity: '1',
        alias: '1',
        health: 1,
        name: 'hi'
    };
    var spawn = {
        name: 'Spawn',
        alias: 'Spown',
        health: 23,
        jump: 235,
        secretIdentity: 'hello'
    };
})();
