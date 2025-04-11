// const { sum } = require('./UseModule'); 
// const result = sum(12, 20);
// console.log("sum=" + result);
const { sum, multiplication } = require('./UseModule'); // Correct import

const result = sum(12, 20);
console.log("sum=" + result);

const result1 = multiplication(10, 10);
console.log("multiplication=" + result1);