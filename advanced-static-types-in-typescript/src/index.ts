// void returns undefined
// never returns nothing

enum ShirtSize {
  XS,
  S,
  M,
  L,
  XL
}

function assertNever(value: never): never {
  throw Error(`Error with value: ${value}`);
}

function prettyPaint(size: ShirtSize) {
  switch (size) {
    case ShirtSize.S: return 'Small';
    case ShirtSize.M: return 'Medium';
    case ShirtSize.L: return 'Large';
    case ShirtSize.XL: return 'Extra Large';
    default: return assertNever(size); // error, above forget about XS
  }
}

console.log(prettyPaint(0)); // Small
console.log(prettyPaint(ShirtSize.M)); // Medium