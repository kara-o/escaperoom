function trollPuzzleStart() {
  const trollPuzzleContainer = document.getElementById('troll-puzzle-container')
  trollPuzzleContainer.style.display = "block"

  const trollWords = document.createElement('p')
  const trollImg = document.getElementById('fremont-troll-image')
  const trollWordBox = document.getElementById('left-dialog-box')
  trollWordBox.style.display = "block"
  trollWordBox.appendChild(trollWords)
  trollImg.style.display = "block"
  trollWords.style.bottom = "50%"

  trollWords.textContent = "TROLL: You found me!"
  setTimeout(function () {
    trollWords.textContent = "TROLL: Are you ready for your final challenge?"
  }, 2000);
  // setTimeout(function () {
  //   trollWords.textContent = "But first..."
  // }, 4000);
  // setTimeout(function () {
  //   trollWords.textContent = "You have to correctly answer my questions!"
  // }, 6000);
  setTimeout(function () {
    trollWords.textContent = "";
    trollQuestions()
  }, 4000);

}

function trollChallenge() {

}
