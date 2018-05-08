(function () {
    var crocContainer = { unit: { personality: 'mean' } };
    var taxContainer = { unit: { year: 2011 } };
    var redCrocContainer = { crocUnit: { personality: 'irate', color: 'red' } };
    var blueCrocContainer = { crocUnit: { personality: 'cool', color: 'blue' } };
    var ClassyContainer = /** @class */ (function () {
        function ClassyContainer() {
        }
        return ClassyContainer;
    }());
    var classyCrocContainer = new ClassyContainer();
    classyCrocContainer.classyCrocUnit = { personality: 'class', color: 'red' };
})();
