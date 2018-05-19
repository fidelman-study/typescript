function reverse(string: string): string;
function reverse<T>(array: T[]): T[];
function reverse(stringOrArray: string | any[]) {
  return typeof stringOrArray === 'string'
    ? stringOrArray.split('').reverse().join('')
    : stringOrArray.slice().reverse();
}

const reversedString = reverse('Hello');
const reversedArray = reverse([1, 2, 3, 4, 5]);