function findAverage(numbers: number[]): number {
  const sum = numbers.reduce((acc, val) => acc + val, 0);
  return numbers.length === 0 ? 0 : sum / numbers.length;
}

// Example usage:
const nums = [60, 20, 30, 20];
console.log(findAverage(nums)); // Output: 32.5
