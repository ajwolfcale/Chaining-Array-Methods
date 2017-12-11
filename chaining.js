
var integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

console.log(integers.sort((a,b) => a-b).reverse().filter(number => number < 19)
.map(number => (number * 1.5) - 1).reduce((a,b) => a+b));

