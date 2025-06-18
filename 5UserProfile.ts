const user1 = { name: "Madam", age: 30, city: "Chennai" };
const user2 = { age: 31, profession: "Developer", country: "India" };

// Merge objects (user2 overrides user1)
const mergedUser = { ...user1, ...user2 };

// Destructure name, age, and the rest of the properties
const { name, age, ...otherDetails } = mergedUser;

// Output the values
console.log("Name:", name);
console.log("Age:", age);
console.log("Other Details:", otherDetails);
