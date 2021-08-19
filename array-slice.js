const numbers = [31, 45, 12, 67, 12, 29, 20, 63];
const numberSlice = numbers.slice(numbers.indexOf(12), numbers.indexOf(20));
const numberSpliced = numbers.splice(numbers.indexOf(12), 3, 2063, 1234);
console.log(numberSpliced);
console.log(numbers);
// console.log(numberSlice);
