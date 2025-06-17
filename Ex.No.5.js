const user1 = { name: "Kannan", age: 30, city: "Chennai" };
const user2 = { age: 31, profession: "Developer", country: "India" };

// Merge user1 and user2 (user2 overrides user1 on conflict)
const mergedUser = { ...user1, ...user2 };

// Destructure name and age, collect the rest into `others`
const { name, age, ...others } = mergedUser;

// Print extracted values
console.log("Name:", name);
console.log("Age:", age);
console.log("Other Properties:", others);
