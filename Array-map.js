const arr = ['apple', 'oranges', ' ', 'mango', ' ', 'lemon'];

const modifiedArr = arr.map(fruit => fruit === ' ' ? 'empty string' : fruit);

console.log(modifiedArr);

