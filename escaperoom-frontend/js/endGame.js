function renderEndGame() {
  displayFinalScore();
}

function displayFinalScore() {
  const finalScore = document.getElementById('final-score');
  const timer = document.getElementById('timer');
  let time = timer.textContent;
  let digits = time.split(':');
  let minutes = parseInt(digits[0], 10);
  let seconds = parseInt(digits[1], 10);
  let seconds_string;

  minutes = 4 - minutes;
  if (seconds === 0) {
    seconds_string = '0' + seconds.toString();
  } else {
    seconds = 60 - seconds;
    seconds_string = seconds.toString();
    if (seconds < 10) {
      seconds_string = '0' + seconds.toString();
    }
  }

  const runTime = minutes.toString() + ':' + seconds_string;
  finalScore.textContent = `Your score is ${runTime}`;
  runSeconds = minutes * 60 + seconds;
  postScore(currentUser, runSeconds);
}

function postScore(currentUser, runSeconds) {
  fetch('http://localhost:3000/scores/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify({
      time: runSeconds,
      user_id: currentUser.id,
      game_id: 1
    })
  }).then(() => {
    fetchScores();
  });
}

function fetchScores() {
  fetch('http://localhost:3000/scores')
    .then(res => res.json())
    .then(scores => {
      renderScores(scores);
    });
}

function convertScore(score_seconds) {
  let seconds = score_seconds % 60;
  let minutes = (score_seconds - seconds) / 60;
  if (seconds < 10) {
    seconds = '0' + seconds.toString();
  } else {
    seconds = seconds.toString();
  }
  return minutes.toString() + ':' + seconds;
}

function renderScores(scores) {
  document.getElementById('top-scores-container').style.display = 'flex';
  const topScoresNamesList = document.getElementById('top-scores-names');
  const topScoresList = document.getElementById('top-scores');
  topScoresList.style.listStyle = 'none';
  topScoresNamesList.style.listStyle = 'none';
  const nameTitle = document.createElement('li');
  const scoreTitle = document.createElement('li');
  nameTitle.classList.add('list-header');
  scoreTitle.classList.add('list-header');
  nameTitle.textContent = 'Name';
  scoreTitle.textContent = 'Score';
  topScoresNamesList.append(nameTitle);
  topScoresList.append(scoreTitle);

  topTenScores = scores.slice(0, 10);
  topTenScores.forEach(score => {
    const convertedScore = convertScore(score.time);
    const liName = document.createElement('li');
    const liScore = document.createElement('li');

    liName.textContent = score.user;
    liScore.textContent = convertedScore;

    topScoresNamesList.append(liName);
    topScoresList.append(liScore);
  });
}

// function appendScores(run) {
// const topScoresNameOl = document.getElementById("top-scores-name");
// const topScoresOl = document.getElementById("top-scores");
// topScoresOl.style.listStyle = "none";
// const liName = document.createElement("li");
// const liScore = document.createElement("li");

// console.log(run);
// liName.textContent = `Name: ${run.name}`;
// liScore.textContent = `Score: ${run.score}`;

// topScoresNameOl.append(liName);
// topScoresOl.append(liScore);
// }
// parseInt(currentUser.id)
