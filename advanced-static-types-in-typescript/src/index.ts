type Primitive =
  | boolean
  | string
  | number
  | symbol
  | null
  | undefined;

// =================

let obj: object;

obj = {};
obj = [];
obj = Math.random;

// =================

let object: Object;
let object1: { [key: string]: any } = {};
object1.name = 'Andrey';