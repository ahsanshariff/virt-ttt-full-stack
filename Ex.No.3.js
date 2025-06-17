const students = [
  { name: "Ahsan", grades: [90, 85, 92] },
  { name: "Sharff" },
  { name: "John", grades: [] },
  { name: "Joseph", grades: [70, 75] }
];

const getStudentMessages = (students) =>
  students.map(student => {
    const grades = student.grades;
    if (grades?.length > 0) {
      const avg = grades.reduce((sum, grade) => sum + grade, 0) / grades.length;
      return `Student ${student.name} has an average grade of ${avg.toFixed(2)}`;
    } else {
      return `Student ${student.name} has no grades.`;
    }
  });

const messages = getStudentMessages(students);
console.log(messages);
