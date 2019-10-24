const trollWordBox = document.getElementById('left-dialog-box')
const trollPuzzleContainer = document.getElementById('troll-puzzle-container')
const jokes = ["What's the object-oriented way to become wealthy?", "Why did the programmer quit his job?"]
const answers = ["Inheritance", "Because he didn't get arrays."]

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

function trollChallenge(jokes, answers) {
  const trollWords = document.getElementById('troll-words')


  const jokeForm = document.createElement('form')
  jokeForm.id = 'joke-form'
  const jokeAnswer = document.createElement('input')
  jokeAnswer.setAttribute("type", "text")
  jokeAnswer.name = 'answer'
  jokeAnswer.id = 'joke-answer'
  const jokeSubmit = document.createElement('input')
  jokeSubmit.setAttribute("type", "submit")
  trollWordBox.appendChild(jokeForm)
  jokeForm.appendChild(jokeAnswer)
  jokeForm.appendChild(jokeSubmit)
  const jokeFeedback = document.createElement("p")
  trollWordBox.appendChild(jokeFeedback)
  jokeFeedback.textContent = ""


  trollWords.textContent = jokes[0]
  jokeForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let input = event.target.elements.answer.value
    if (input.toLowerCase() === answers[0].toLowerCase()) {
        jokeFeedback.textContent = "Good job!"
        jokeForm.remove();
        setTimeout(() => {
          jokeFeedback.textContent = ""
        }, 2000)
        trollWords.textContent = "Wow, you have brains and a sense of humor.  Here are your Ruby gems..."
        let random = Math.floor((Math.random() * 100) + 1);
        let i = 0
        while (i < random) {
          generateRubies();
          i++;
        }
        setTimeout(() => {
        clearTrollPuzzle();
        renderEndGame();
        }, 4000);
      }
      else {
        jokeFeedback.textContent = "Nope, keep trying!"
        setTimeout(() => {
          jokeFeedback.textContent = ""
        }, 2000)
      }
    })
  }

  function generateRubies() {
    let random = () => {
      return Math.floor((Math.random() * 1000) + 1);
    }
    let newRuby = document.createElement('img')
    let pixel = random();
    let pixel2 = random();
    newRuby.src = "images/rubies/ruby1.png"
    newRuby.style.position = "absolute"
    newRuby.className = "ruby"
    newRuby.style.left = `${pixel}px`
    newRuby.style.top = `${pixel2}px`
    trollPuzzleContainer.appendChild(newRuby)
  }
    // const newRuby = document.createElement('img');
    // newRuby.src = "images/rubies/ruby1.png"
    // newRuby.style.position = "absolute"
    // newRuby.style.left = left
    // newRuby.style.top = top
    // newRuby.className = className
    // trollPuzzleContainer.appendChild(newRuby)


  //   //next joke!!!
  //   trollWords.textContent = jokes[1]
  //   if (input.toLowerCase().includes('arrays')) {
  //
  //     jokeFeedback.textContent = "Good job!"
  //     setTimeout(() => {
  //       jokeFeedback.textContent = ""
  //     }, 2000)
  //     trollWords.textContent = "Wow, you have brains and a sense of humor.  Here are your Ruby gems..."
  //     generateRubies();
  //     gameWon();
  //   }
  //   else {
  //
  //     jokeFeedback.textContent = "Nope, keep trying!"
  //     setTimeout(() => {
  //       jokeFeedback.textContent = ""
  //     }, 2000)
  //   }
  // )}

function clearTrollPuzzle() {
  trollPuzzleContainer.style.display = "none";
  trollWordBox.style.display = "none";
}
