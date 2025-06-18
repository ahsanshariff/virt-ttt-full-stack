function checkEvenOrOdd(num: number): string {
  if (num % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

console.log(checkEvenOrOdd(4));  // Output: Even
console.log(checkEvenOrOdd(7));  // Output: Odd
