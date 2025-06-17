// Simulated user score data
const userScores = {
  "Mohan": 123,
  "Kumar": 42,
  "Raja": 9876,
  "Rajan": 7
};

// Async function to simulate fetching and printing leaderboard
const displayLeaderboard = async () => {
  const fetchScores = () => {
    return new Promise(resolve => {
      setTimeout(() => resolve(userScores), 2000);
    });
  };

  const scores = await fetchScores();

  console.log("🏆 Leaderboard:");
  console.log("-----------------------------");

  Object.entries(scores).forEach(([username, score]) => {
    const paddedName = username.padEnd(15, ' ');
    const paddedScore = String(score).padStart(5, '0');
    console.log(`${paddedName} : ${paddedScore}`);
  });

  console.log("-----------------------------");
};

// Run the leaderboard display
displayLeaderboard();
