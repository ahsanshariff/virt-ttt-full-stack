const people = [
  { name: "Ahsan", birthdate: "1990-06-17" },
  { name: "Shariff", birthdate: "1985-12-25" },
  { name: "David", birthdate: "1992-06-17" }
];

const checkBirthdaysToday = (people) => {
  const today = new Date();
  const todayMonth = today.getMonth(); // 0-based
  const todayDate = today.getDate();

  const birthdayMessages = people
    .map(person => ({
      name: person.name,
      birthDateObj: new Date(person.birthdate)
    }))
    .filter(({ birthDateObj }) =>
      birthDateObj.getDate() === todayDate &&
      birthDateObj.getMonth() === todayMonth
    )
    .map(({ name }) => `Today is ${name}'s birthday!`);

  return birthdayMessages.length > 0 ? birthdayMessages : ["No birthdays today."];
};

const messages = checkBirthdaysToday(people);
console.log(messages);
