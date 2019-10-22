document.addEventListener("DOMContentLoaded", () => {
  setInterval(() => {
    decreaseTimer();
  }, 1000);
});

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

//define loseGame
// funciton loseGame() {
//set display to "none" for current level or transition screen
//display end game screen and score(s)
// }
