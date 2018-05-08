(function() {
  interface Crocodile { personality: string; }
  interface Taxes { year: number; }
  interface Container<T> { unit: T; }

  const crocContainer: Container<Crocodile> = { unit: { personality: 'mean' } };
  const taxContainer: Container<Taxes> = { unit: { year: 2011 } };

  interface RedCroc extends Crocodile { color: 'red'; }
  interface BlueCroc extends Crocodile { color: 'blue'; }
  interface CrocContainer<T extends Crocodile> { crocUnit: T; }

  const redCrocContainer: CrocContainer<RedCroc> = { crocUnit: { personality: 'irate', color: 'red' } };
  const blueCrocContainer: CrocContainer<BlueCroc> = { crocUnit: { personality: 'cool', color: 'blue' } };

  class ClassyContainer<T extends Crocodile> {
    classyCrocUnit?: T;
  }

  const classyCrocContainer = new ClassyContainer<RedCroc>();
  classyCrocContainer.classyCrocUnit = { personality: 'class', color: 'red' };
})();