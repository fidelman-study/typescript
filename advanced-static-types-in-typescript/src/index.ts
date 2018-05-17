const numbers = [1, 2, [3, 4], 5, 6 , [7, 8, 9]];

function flatten<T>(array: (T | T[])[]): T[] {
  const flattened: T[] = [];
  array.forEach((item: T | T[]) => {
    if (Array.isArray(item)) {
      flattened.push(...item);
    } else {
      flattened.push(item);
    }
  });

  return flattened;
}

function isFlat<T>(array: (T | T[])[]): array is T[] {
  return !array.some(Array.isArray);
}

console.log(flatten(numbers));

if (isFlat(numbers)) {
  // numbers: number[]
  numbers;
}