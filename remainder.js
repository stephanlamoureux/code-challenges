/*
Make a function that takes two numbers as parameters. The first parameter divided by the second parameter will have a remainder, possibly zero. Make a function that returns that value.
Examples
remainder(1, 3) ➞ 1
remainder(3, 4) ➞ 3
remainder(-9, 45) ➞ -9
remainder(5, 5) ➞ 0

https://replit.com/@SteveLamoureux/PeacefulVioletInterpreter#index.js
*/

function remainder(num1, num2) {
  return num1 % num2;
};

console.log(remainder(1, 3));
console.log(remainder(3, 4));
console.log(remainder(-9, 45));
console.log(remainder(5, 5));