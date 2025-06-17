const areAnagrams = (str1, str2) => {
  const normalize = str =>
    str.toLowerCase().replace(/[^a-z0-9]/g, "").split("").sort().join("");

  return normalize(str1) === normalize(str2);
};

console.log(areAnagrams("listen", "silent"));         // true
console.log(areAnagrams("Conversation", "Voices rant on")); // true
console.log(areAnagrams("hello", "world"));           // false
console.log(areAnagrams("hello", "eolhl"));           // true
