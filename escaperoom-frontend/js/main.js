const dev = false;

let currentUser = null;
let currentGame = null;
main();

function main() {
  const msg = document.getElementsByClassName('login-msg')[0];
  const form = document.getElementsByClassName('login-form')[0];
  setInterval(() => {
    msg.style.display = 'block';
    form.style.display = 'block';
  }, 1000);
  getUsers();
}

function getUsers() {
  fetch('http://localhost:3000/users')
    .then(response => response.json())
    .then(users => {
      login(users);
    });
}

function login(users) {
  const loginForm = document.getElementsByClassName('login-form')[0];
  loginForm.addEventListener('submit', function(event) {
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
  const loginForm = document.getElementsByClassName('login-form')[0];
  loginForm.remove();
  const welcomeMsg = document.getElementsByClassName('login-msg')[0];
  welcomeMsg.textContent = `Welcome, ${userJson.name}!`;
  // viewScores();
  startGame();
}

function createNewUser(nameInput) {
  fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify({
      name: nameInput
    })
  })
    .then(res => res.json())
    .then(welcomePage);
}

// function viewScores() {
//   const scoresContainer = document.createElement('div');
//   const scoresList = document.createElement('ul');
//   document.getElementById('start-page').appendChild(scoresContainer);
//   scoresContainer.append(scoresList);
// }

function startGame() {
  const loginText = document.getElementsByClassName('login-text')[0];
  const gameDescription = document.createElement('h3');
  loginText.append(gameDescription);
  gameDescription.textContent = 'Press START GAME if you are ready to begin.';
  const startGameBtn = document.createElement('button');
  startGameBtn.textContent = 'START GAME';
  loginText.appendChild(startGameBtn);
  startGameBtn.addEventListener('click', () => {
    currentGame = 1;
    clearLoginText();
    loadNarrative();
    // puzzleOneStart();
  });
}

function clearLoginText() {
  const startPage = document.getElementById('start-page');
  const loginText = document.getElementsByClassName('login-text')[0];
  loginText.remove();
  startPage.style.display = 'none';
}

function loadNarrative() {
  const startPage = document.getElementById('start-page');
  startPage.style.display = 'inline-block';
  startPage.classList.add('animated', 'rotateIn');

  narrativeSentences = [
    'Dear Flatiron Student,',
    'We need your help!',
    'Someone has stolen all of the Ruby gems!',
    'The thief hid clues and puzzles throughout Seattle and is only giving us 10 minutes to solve them all!',
    'PLEASE HURRY!'
  ];

  const narrativeDiv = document.createElement('div');
  narrativeDiv.classList.add('narrative');

  for (let i = 0; i < narrativeSentences.length; i++) {
    let sentence = document.createElement('p');
    sentence.textContent = narrativeSentences[i];
    narrativeDiv.appendChild(sentence);
  }

  startPage.appendChild(narrativeDiv);

  const startTimerBtn = document.createElement('button');
  startTimerBtn.textContent = 'BEGIN';
  startTimerBtn.id = 'start-timer-btn';
  startPage.appendChild(startTimerBtn);

  startTimerBtn.addEventListener('click', () => {
    startPage.remove();
    dev ? trollPuzzleStart() : startFirstChallenge();
  });
}

function startFirstChallenge() {
  const cluesDP = [
    'Your first challenge location...',
    '...is a popular place in Seattle',
    '...along the water',
    '...with a lighthouse'
  ];
  const instructions = ['Drag the taxi to your next location on the map.'];
  document.getElementById('page-container').style.display = 'flex';
  setUpTimer();
  displayTransitionMap(
    'discovery-park-drop-target',
    cluesDP,
    instructions,
    loadTreasurePuzzle
  );
}
