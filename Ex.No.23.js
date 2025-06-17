const numbers = [10, 20, 30, 40];

const average = numbers.reduce((sum, num) => sum + num, 0) / numbers.length;

console.log(average); // 25
