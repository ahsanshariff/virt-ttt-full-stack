const countVowelsAndConsonants = (str) => {
  const cleaned = str.toLowerCase().replace(/[^a-z]/g, ""); // keep only letters

  const vowels = cleaned.match(/[aeiou]/g) || [];
  const consonants = cleaned.match(/[^aeiou]/g) || [];

  return {
    vowels: vowels.length,
    consonants: consonants.length
  };
};

console.log(countVowelsAndConsonants("Hello World!")); 
// { vowels: 3, consonants: 7 }
