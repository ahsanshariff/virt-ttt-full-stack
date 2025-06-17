const sumMatchingIntegers = (arr, matchValue) => {
  return arr
    .filter(num => Number.isInteger(num) && num === matchValue)
    .reduce((sum, num) => sum + num, 0);
};

console.log(sumMatchingIntegers([1, 2, 2, 2, 3, 4, 2, "2", 5.5], 2)); // 8
