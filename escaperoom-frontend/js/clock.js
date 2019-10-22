function startTimer() {
  setInterval(() => {
    decreaseTimer();
  }, 1000);
}

function decreaseTimer() {
  let timer = document.getElementById("timer");
  time = timer.textContent;
  timeNum = parseInt(time, 10);
  timeNum -= 1;
  if (timeNum === 0) {
    loseGame();
  }
  timer.textContent = timeNum;
}

function stopTimer() {
  console.log('TIMER STOPPED, GAME WON!!! Last successful puzzle completion will call this timer')
}

//define loseGame
// funciton loseGame() {
//set display to "none" for current level or transition screen
//display end game screen and score(s)
// }
