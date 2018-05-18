interface User {
  readonly id: number;
  name: string;
}

const user: User = {
  id: 1,
  name: 'Andrei'
};

user.name += ' Fidelman';

// ===============================

class Person {
  readonly id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}

const person = new Person(2, 'Karina');
person.name += ' Fidelman';

// =================================

const weekdays: ReadonlyArray<string> = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday'
];