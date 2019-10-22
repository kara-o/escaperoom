function trollPuzzle() {

  const trollWords = document.getElementById('troll-words')
  const trollPuzzleContainer = document.getElementById('troll-puzzle-container')
  const trollImg = document.getElementById('fremont-troll-image')
  const trollBtns = document.getElementById('troll-btns')

  trollPuzzleContainer.style.display = "block";
  trollImg.style.display = "block"

  setTimeout(function () {
    trollWords.textContent = "I know where you have to go next."
  }, 1000);
  setTimeout(function () {
    trollWords.textContent = "But first..."
  }, 2000);
  setTimeout(function () {
    trollWords.textContent = "You have to answer some questions!"
  }, 3000);
  setTimeout(function () {
    trollWords.style.display = "none";
    trollQuestions()
  }, 4000);

}

function trollQuestions() {

}
