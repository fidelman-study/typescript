const thing: string | number | string[] | boolean = 3;

function returnSomeThing(someThing: string | number | string[] | boolean):string | number | string[] | boolean {
  return someThing;
}

returnSomeThing(thing);

/* aliase */

type stuffType = string | number | string[] | boolean | { name: string };

const stuff = 3;

function returnSomeStuff(someStuff: stuffType): stuffType {
  return someStuff;
}

console.log(returnSomeStuff(stuff));