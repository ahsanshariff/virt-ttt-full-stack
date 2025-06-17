// Simulated CSV-like data (arrays of strings, with nested arrays and extra spaces)
const csvData = [
  ["  Karthik  ", ["Math", "Science"]],
  ["Ram", "English", ["History"]],
  ["  Abdul  ", ["Physics"], "Chemistry"],
  ["John", [["Biology", "Art"]]]
];

// Main processing function
const processStudentData = (data) => {
  try {
    const entries = data.map(([rawName, ...courses]) => {
      const name = rawName.trim(); // Trim name
      const flatCourses = courses.flat(Infinity); // Flatten all nested arrays
      return [name, flatCourses];
    });

    return Object.fromEntries(entries); // Group by student name
  } catch {
    console.error("Error processing student data.");
    return {};
  }
};

// Run and print result
const groupedStudents = processStudentData(csvData);
console.log(groupedStudents);
