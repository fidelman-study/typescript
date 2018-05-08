(function() {

type UserConstructor = {
  name: string;
  surname: string;
  phone?: string;
};

class User {
  name: string;
  surname: string;
  phone?: string;

  constructor({ name, surname, phone }: UserConstructor) {
    this.name = name;
    this.surname = surname;
    this.phone = phone;
  }

  static getName(name: string, surname: string): string {
    return `${name} ${surname}`;
  }

  greeting(): string {
    return `Hey ${User.getName(this.name, this.surname)}`;
  }
}

const andrei = new User({
  name: 'Andrei',
  surname: 'Fidelman'
});

console.log('​andrei.greeting()', andrei.greeting());

})();