const name = ['abir', 'sultan', 'kamal', 'rafiq'];
// console.log(name.length);
// console.log(...name);
const number = [2, 4, 56, 33, 24, 24, 78, 85];
const max = Math.max(...number);

const number2 = [24, ...number, 45];
number.pop();
console.log(number2);