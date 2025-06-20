const isPalindrome = str => {
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  return cleaned === cleaned.split("").reverse().join("");
};

console.log(isPalindrome("RaceCar"));           // true
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("Hello, world!"));     // false
console.log(isPalindrome("Malayalam"));     // true
