function renderEndGame() {
  displayFinalScore();
  fetchUsers();
}

function fetchUsers() {
  fetch("http://localhost:3000/users")
    .then(response => response.json())
    .then(users => {
      renderUsers(users);
    });
}

function renderUsers(users) {
  const endGameDiv = document.getElementById("end-game");
  allScores = getAllScores(users);
  top10 = topTenScores(allScores);
  top10.forEach(run => {
    appendScores(run);
  });
  // endGameDiv.append(user.toHTML);
}

function getAllScores(users) {
  scoresHolder = [];
  users.forEach(userJson => {
    let user = new User(userJson);
    let scores = user.name.scores;
    scores.forEach(score => {
      userRun = {};
      userRun["name"] = user.name.name;
      userRun["score"] = score.time;
      scoresHolder.push(userRun);
    });
  });
  return scoresHolder;
  //abstract function to user.js
}

function topTenScores(allScores) {
  sortedScores = allScores.sort((a, b) => {
    return a.score - b.score;
  });
  return sortedScores.slice(0, 10);
}

function appendScores(run) {
  const topScoresNameOl = document.getElementById("top-scores-name");
  const topScoresOl = document.getElementById("top-scores");
  topScoresOl.style.listStyle = "none";
  const liName = document.createElement("li");
  const liScore = document.createElement("li");

  console.log(run);
  liName.textContent = `Name: ${run.name}`;
  liScore.textContent = `Score: ${run.score}`;

  topScoresNameOl.append(liName);
  topScoresOl.append(liScore);
}

function displayFinalScore() {
  const finalScore = document.getElementById("final-score");
  const currentTime = document.getElementById("timer");
  const runTime = 600 - parseInt(currentTime.textContent);
  finalScore.textContent = `Your score is ${runTime}`;
  postScore(currentUser, runTime);
}

function postScore(currentUser, runTime) {
  fetch("http://localhost:3000/scores/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({
      time: runTime,
      user_id: parseInt(currentUser.id),
      game_id: 1
    })
  });
}
