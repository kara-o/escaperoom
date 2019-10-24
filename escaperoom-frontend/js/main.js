let currentUser = null;
let currentGame = null;
main();

function startFresh() {
  startTimer();
  const loginForm = document.getElementById("login-form");
  loginForm.remove();
  const welcomeMsg = document.getElementById("login-msg");
  welcomeMsg.textContent = "";
  const startPage = document.getElementById("start-page");
  startPage.style.display = "none";
}

function main() {
  getUsers();
  // loadUsers();
  // displayUsers();
}

function getUsers() {
  fetch("http://localhost:3000/users")
    .then(response => response.json())
    .then(users => {
      login(users);
    });
}

function login(users) {
  const loginForm = document.getElementById("login-form");
  loginForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const nameInput = event.target.elements.name.value;
    iterateThroughUsers(nameInput, users);
  });
}

function iterateThroughUsers(nameInput, users) {
  for (const user of users) {
    if (user.name.toLowerCase() === nameInput.toLowerCase()) {
      return welcomePage(user);
    }
  }
  createNewUser(nameInput);
}

function welcomePage(userJson) {
  currentUser = userJson;
  console.log(currentUser.id);
  const loginForm = document.getElementById("login-form");
  loginForm.remove();
  const welcomeMsg = document.getElementById("login-msg");
  welcomeMsg.textContent = `Welcome, ${userJson.name}!`;
  viewScores();
  startGame();
}

function createNewUser(nameInput) {
  fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({
      name: nameInput
    })
  })
    .then(res => res.json())
    .then(welcomePage);
}

function viewScores() {
  const scoresContainer = document.createElement('div')
  // const scoresHeader = document.createElement('h3')
  const scoresList = document.createElement('ul')
  // scoresHeader.textContent = "Your Past Scores: "
  document.getElementById('start-page').appendChild(scoresContainer)
  scoresContainer.append(scoresList)
}

function startGame() {
  const startPage = document.getElementById("start-page");
  const gameDescription = document.createElement("h3");
  startPage.append(gameDescription);

  // gameDescription.textContent = "We are so glad you are here!"
  // setTimeout(function() {
  //   gameDescription.textContent = "Someone stole all of the Ruby gems and left clues and puzzles all over Flatiron Campus and Seattle."
  // }, 2000)
  // setTimeout(function() {
  //   gameDescription.textContent = "We need to get the Ruby gems back.  Please help!"
  // }, 4000)
  gameDescription.textContent = "Press START GAME if you are ready to begin.";
  const startGameBtn = document.createElement("button");
  startGameBtn.textContent = "START GAME";
  startPage.appendChild(startGameBtn);
  startGameBtn.addEventListener("click", () => {
    currentGame = 1;
    clearStartPage();
    loadNarrative();
    // puzzleOneStart();
  });
}
// setTimeout(function() {
//   gameDescription.textContent = "Press START GAME if you are ready to begin."
//   const startGameBtn = document.createElement("button")
//   startGameBtn.textContent = "START GAME"
//   startPage.appendChild(startGameBtn)
//   startGameBtn.addEventListener('click', () => {
//     clearStartPage();
//     puzzleOneStart();
//   })
// }, 2000)

function clearStartPage() {
  const startPage = document.getElementById("start-page");
  startPage.remove();
}

function loadNarrative() {
  const paperMessage = document.createElement("div");
  paperMessage.id = "paper-message";
  document.body.appendChild(paperMessage);

  narrativeSentences = [
    "Dear Flatiron Student,",
    "We need your help.",
    "Someone has stolen all of the Ruby gems!",
    "The thief hid clues and puzzles all throughout campus and Seattle",
    "and is only giving us 10 minutes to solve them all!",
    "HURRY!"
  ];

  // const sentence1 = document.createElement("p")
  // sentence1.textContent = narrativeSentences[0]
  // sentence1.style.padding = "10px 10px 10px 10px"
  // paperMessage.appendChild(sentence1)

  for (let i = 0; i < narrativeSentences.length; i++) {
    let padding = 10;
    let sentence = document.createElement("p");
    sentence.textContent = narrativeSentences[i];
    sentence.style.padding = `${padding + i + 2}px 10px 10px 10px`;
    paperMessage.appendChild(sentence);
  }

  const startTimerBtn = document.createElement("button");
  startTimerBtn.textContent = "Start Timer";
  startTimerBtn.id = "start-timer-btn";
  startTimerBtn.padding = "10px";
  paperMessage.appendChild(startTimerBtn);

  startTimerBtn.addEventListener("click", () => {
    paperMessage.remove();
    puzzleOneStart();
  })
}

// function gameWon() {
//   Ruby.removeAllRubies();
//   const finalPage = document.createElement('div')
//   const finalMessage = document.createElement('p')
//   finalMessage.textContent = "You Won!"
//   finalPage.appendChild(finalMessage)
// }
