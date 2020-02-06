const dev = false;

let currentUser = null;
let currentGame = null;
main();

function main() {
  const login = document.getElementsByClassName('login')[0];
  const link = document.querySelector('a');
  setTimeout(() => {
    login.style.display = 'block';
    link.style.display = 'block';
  }, 1000);
  getUsers();
  link.addEventListener('click', () => {
    login.style.display = 'none';
    link.style.display = 'none';
    document.getElementsByClassName('signup')[0].style.display = 'block';
    signup();
  });
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

function signup() {
  const errorMsgs = document.getElementsByClassName('errors')[0];
  while (errorMsgs.firstChild) {
    errorMsgs.removeChild(errorMsgs.firstChild);
  }
  const signupForm = document.getElementsByClassName('signup-form')[0];
  signupForm.addEventListener('submit', function(e) {
    while (errorMsgs.firstChild) {
      errorMsgs.removeChild(errorMsgs.firstChild);
    }
    e.preventDefault();
    nameInput = e.target.elements.name.value;
    createNewUser(nameInput);
  });
}

function iterateThroughUsers(nameInput, users) {
  for (const user of users) {
    if (user.name.toLowerCase() === nameInput.toLowerCase()) {
      const loginForm = document.getElementsByClassName('login-form')[0];
      loginForm.style.display = 'none';
      return welcomePage(user);
    }
  }

  const errorMsgs = document.getElementsByClassName('errors')[0];
  while (errorMsgs.firstChild) {
    errorMsgs.removeChild(errorMsgs.firstChild);
  }
  const msg = document.createElement('li');
  nameInput === ''
    ? (msg.textContent = 'Entry cannot be blank')
    : (msg.textContent =
        "We can't find you...please sign up below as a new user!");
  errorMsgs.append(msg);
}

function welcomePage(userJson, status = 'return') {
  const errorMsgs = document.getElementsByClassName('errors')[0];
  if (errorMsgs) {
    errorMsgs.style.display = 'none';
  }
  document.querySelector('a').style.display = 'none';
  currentUser = userJson;
  let selection = 'login-msg';
  let back = ' back';
  if (status === 'new') {
    selection = 'signup-msg';
    back = '';
  }
  const welcomeMsg = document.getElementsByClassName(`${selection}`)[0];
  welcomeMsg.textContent = `Welcome${back}, ${userJson.name}!`;
  viewScores();
  startGame();
}

function createNewUser(nameInput) {
  const errorMsgs = document.getElementsByClassName('errors')[0];
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
    .then(json => {
      if (json.errors) {
        json.errors.full_messages.forEach(error => {
          const msg = document.createElement('li');
          msg.textContent = error;
          errorMsgs.append(msg);
        });
      } else {
        document.getElementsByClassName('signup-form')[0].style.display =
          'none';
        welcomePage(json.user, 'new');
      }
    });
}

function viewScores() {
  const scoresContainer = document.createElement('div');
  const scoresTitle = document.createElement('p');
  scoresTitle.textContent = 'Your Past Scores';
  const scoresList = document.createElement('ul');
  scoresList.id = 'scores-list';
  document.getElementsByClassName('login-text')[0].appendChild(scoresContainer);
  scoresContainer.append(scoresTitle, scoresList);
  let sorted = currentUser.scores
    .filter(score => score.time !== 0)
    .sort(function(a, b) {
      return a.time - b.time;
    });
  sorted = sorted.concat(currentUser.scores.filter(score => score.time === 0));
  sorted.forEach(score => {
    const li = document.createElement('li');
    if (score.time === 0) {
      li.textContent = `LOST - ${moment(score.created_at).format(
        'MMM Do YYYY, hh:mm:ss a'
      )}`;
    } else {
      li.textContent = `${convertScore(score.time)} - ${moment(
        score.created_at
      ).format('MMM Do YYYY, hh:mm:ss a')}`;
    }
    scoresList.append(li);
  });
}

function startGame() {
  const loginText = document.getElementsByClassName('login-text')[0];
  const gameDescription = document.createElement('h3');
  loginText.append(gameDescription);
  gameDescription.textContent = 'Press START GAME if you are ready to begin.';
  const startGameBtn = document.createElement('button');
  startGameBtn.textContent = 'START GAME';
  startGameBtn.id = 'start-game-btn';
  loginText.appendChild(startGameBtn);
  startGameBtn.addEventListener('click', () => {
    currentGame = 1;
    clearLoginText();
    loadNarrative();
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
    'The thief hid clues and puzzles throughout Seattle and is only giving us 5 minutes to solve them all!',
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
    startPage.style.display = 'none';
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
