function trimAndLower(text: string | undefined | null) {
  // text: string | undefined | null
  if (typeof text === 'string') {
    // text: string
    return text.trim().toLowerCase();
  }
  // text: undefined | null
  return text;
}

///////////////////////////

let foo: number | undefined;

console.log(foo);