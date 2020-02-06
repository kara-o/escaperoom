let startTimer;

function setUpTimer() {
  const timer = document.getElementById('timer');
  timer.style.display = 'block';
  timer.textContent = '5:00';
  startTimer = setInterval(() => {
    decreaseTimer();
  }, 1000);
}

function decreaseTimer() {
  const timer = document.getElementById('timer');
  let time = timer.textContent;
  let digits = time.split(':'); // ['5', '00']
  let minutes = parseInt(digits[0], 10);
  let seconds = parseInt(digits[1], 10);

  if (time === '0:00') {
    stopTimer();
    loseGame();
  } else if (seconds <= 10 && seconds > 0) {
    new_seconds = seconds - 1;
    seconds = '0' + new_seconds.toString();
  } else if (seconds > 10 && seconds <= 59) {
    seconds -= 1;
    seconds = seconds.toString();
  } else if (seconds === 0) {
    minutes -= 1;
    minutes = minutes.toString();
    seconds = '59';
  }

  time = minutes + ':' + seconds;
  timer.textContent = time;
}

function stopTimer() {
  clearInterval(startTimer);
  document.getElementById('timer').style.display = 'none';
}

function loseGame() {
  document.getElementById('page-container').style.display = 'none';
  const loseGameMsg = document.createElement('h1');
  loseGameMsg.classList.add('animated', 'jackInTheBox');
  loseGameMsg.style.paddingTop = '30vh';
  loseGameMsg.style.fontSize = '64px';
  loseGameMsg.textContent = `Sorry, ${currentUser.name}, but YOU LOST!`;
  document.body.appendChild(loseGameMsg);
  setTimeout(() => {
    loseGameMsg.style.display = 'none';
    renderEndGame();
  }, 3000);
}
