const nonMatchingChars = (str, targetChar) => {
  return [...str].filter(char => char !== targetChar);
};

console.log(nonMatchingChars("Sairam", "a")); // [ 'S', 'i', 'r', 'm' ]
