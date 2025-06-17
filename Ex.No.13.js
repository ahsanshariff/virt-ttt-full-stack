const countDigits = (str) => {
  const matches = str.match(/\d/g); // \d matches any digit (0–9), 'g' = global
  return matches ? matches.length : 0;
};

console.log(countDigits("abc123"));      // 3
console.log(countDigits("room no. 42")); // 2
console.log(countDigits("hello world"));       // 0
