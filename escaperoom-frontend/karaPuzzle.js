function karaPuzzle() {

  const trollWords = document.getElementById('troll-words')
  const karaPuzzleDiv = document.getElementById('kara-puzzle')

  document.body.style.backgroundImage = "url('images/fremontTroll.jpg')";
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundSize = "cover";
  karaPuzzleDiv.style.display = "block";
  
  setTimeout(function () {
    trollWords.textContent = "I know where you have to go next."
  }, 1000);
  setTimeout(function () {
    trollWords.textContent = "But first..."
  }, 2000);
  setTimeout(function () {
    trollWords.textContent = "You have to answer some questions!"
  }, 3000);







}
