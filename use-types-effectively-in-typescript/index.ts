(function() {
  function pushSomethingToArray<T>(something: T, collection: T[]): void {
    collection.push(something);
  }

  const user = { name: 'Andrei' };
  const dog = 'Corgi';

  const users = [{ name: 'Karina' }];
  const dogs = ['Pug'];

  interface User { name: string; };

  pushSomethingToArray<User>(user, users);
  pushSomethingToArray<string>(dog, dogs);
})();