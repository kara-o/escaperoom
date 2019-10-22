document.addEventListener("DOMContentLoaded", () => {
  decreaseTimer();
});

function decreaseTimer() {
  let timer = document.getElementById("timer");
  time = timer.textContent;
  timeNum = parseInt(time, 10);
  timeNum -= 1;
  timer.textContent = timeNum;
}
setInterval(decreaseTimer, 1000);
