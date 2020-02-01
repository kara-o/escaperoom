function startTimer() {
  const timer = document.getElementById('timer');
  timer.textContent = '5:00';
  setInterval(() => {
    decreaseTimer();
  }, 1000);
}

function decreaseTimer() {
  const timer = document.getElementById('timer');
  let time = timer.textContent;
  let digits = time.split(':'); // ['5', '00']
  let minutes = parseInt(digits[0], 10);
  let seconds = parseInt(digits[1], 10);

  if (time == '0:00') {
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
  document.getElementById('timer').style.display = 'none';
  console.log(
    'TIMER STOPPED, GAME WON!!! Last successful puzzle completion will call this timer'
  );
}

//define loseGame
// funciton loseGame() {
//set display to "none" for current level or transition screen
//display end game screen and score(s)
// }
