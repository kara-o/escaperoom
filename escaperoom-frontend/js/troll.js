function trollPuzzleStart() {

  const trollWords = document.createElement('p')
  const trollPuzzleContainer = document.getElementById('troll-puzzle-container')
  const trollImg = document.getElementById('fremont-troll-image')
  const trollWordBox = document.getElementById('left-dialog-box')
  trollWordBox.style.display = "block"
  trollWordBox.appendChild(trollWords)

  trollPuzzleContainer.style.display = "block";
  trollImg.style.display = "block"

  setTimeout(function () {
    trollWords.textContent = "You found me!"
  }, 1000);
  setTimeout(function () {
    trollWords.textContent = "I know where you have to go next."
  }, 2000);
  setTimeout(function () {
    trollWords.textContent = "But first..."
  }, 3000);
  setTimeout(function () {
    trollWords.textContent = "You have to correctly answer my questions!"
  }, 4000);
  setTimeout(function () {
    trollWords.textContent = "";
    trollQuestions()
  }, 5000);

}

function trollQuestions() {

}
