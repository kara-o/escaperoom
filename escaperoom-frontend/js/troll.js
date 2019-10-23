const trollWordBox = document.getElementById('left-dialog-box')
const trollPuzzleContainer = document.getElementById('troll-puzzle-container')

function trollPuzzleStart() {
  trollPuzzleContainer.style.display = "block"

  const trollWords = document.createElement('p')
  trollWords.id = "troll-words"
  const trollImg = document.getElementById('fremont-troll-image')
  trollWordBox.style.display = "block"
  trollWordBox.appendChild(trollWords)
  trollImg.style.display = "block"
  trollWords.style.bottom = "50%"

  setTimeout(function () {
    trollWords.textContent = "TROLL: You found me!"
  }, 1000);
  setTimeout(function () {
    trollWords.textContent = "TROLL: Are you ready for your final challenge?"
  }, 3000);
  // setTimeout(function () {
  //   trollWords.textContent = "But first..."
  // }, 4000);
  // setTimeout(function () {
  //   trollWords.textContent = "You have to correctly answer my questions!"
  // }, 6000);
  setTimeout(function () {
    trollWords.textContent = "";
    trollChallenge(jokes, answers)
  }, 4000);

}

const jokes = ["What's the object-oriented way to become wealthy?", "Why did the programmer quit his job?"]
const answers = ["Inheritance", "Because he didn't get arrays."]

function trollChallenge(jokes, answers) {
  const jokeForm = document.createElement('form')
  jokeForm.id = 'joke-form'
  const jokeAnswer = document.createElement('input')
  jokeAnswer.setAttribute("type", "text")
  jokeAnswer.name = 'answer'
  const jokeSubmit = document.createElement('input')
  jokeSubmit.setAttribute("type", "submit")
  trollWordBox.appendChild(jokeForm)
  jokeForm.append(jokeAnswer, jokeSubmit)
  const jokeFeedback = document.createElement("p")
  trollWordBox.appendChild(jokeFeedback)
  jokeFeedback.textContent = ""

  let i = 0
  while (i < jokes.length) {
  trollWords.textContent = jokes[i]

  jokeForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let input = event.target.elements.answer.value
    if (i = 0) {
      if (input.toLowerCase() === answers[i].toLowerCase()) {
        jokeFeedback.textContent = "Good job!"
        setTimeout(() => {
          jokeFeedback.textContent = ""
        }, 2000)
      }
      else {
        jokeFeedback.textContent = "Nope, keep trying!"
        setTimeout(() => {
          jokeFeedback.textContent = ""
        }, 2000)
      }
    }
    else {
      if (input.toLowerCase().includes('arrays')) {
        jokeFeedback.textContent = "Good job!"
        setTimeout(() => {
          jokeFeedback.textContent = ""
        }, 2000)
        let trollWords = document.getElementById("troll-words")
        trollWords.textContent = "Wow, you have brains and a sense of humor.  Here are your Ruby gems..."
        generateRubies();
        gameWon();
      }
      else {
        jokeFeedback.textContent = "Nope, keep trying!"
        setTimeout(() => {
          jokeFeedback.textContent = ""
        }, 2000)
      }
    }
    i++
  })
 }
}

function clearTrollPuzzle() {
  trollPuzzleContainer.style.display = "none";
  trollWordBox.style.display = "none";
}
