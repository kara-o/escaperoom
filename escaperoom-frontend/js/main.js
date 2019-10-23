
main();

function main() {
  getUsers();
  // loadUsers();
  // displayUsers();

}

function getUsers() {

  fetch('http://localhost:3000/users')
  .then(response => response.json())
  .then(users =>{
    login(users)
  })

}

function login(users) {
  const loginForm = document.getElementById('login-form')
  loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const nameInput = event.target.elements.name.value;
    iterateThroughUsers(nameInput, users);
  })
}


function iterateThroughUsers(nameInput, users) {
  for (const user of users) {
    if (user.name.toLowerCase() === nameInput.toLowerCase()) {
      return welcomePage(user);
    }
  }
  createNewUser();
}

function welcomePage(user){
  const loginForm = document.getElementById('login-form');
  loginForm.remove();
  const welcomeMsg = document.getElementById('login-msg');
  welcomeMsg.textContent = `Welcome, ${user.name}!`;
  viewScores();
  startGame();
}

function createNewUser() {
  welcomePage(user);
}

function viewScores() {
  const scoresContainer = document.createElement('div')
  const scoresHeader = document.createElement('h3')
  const scoresList = document.createElement('ul')
  scoresHeader.textContent = "Your Past Scores: "
  document.getElementById('start-page').appendChild(scoresContainer)
  scoresContainer.append(scoresHeader, scoresList)

}

function startGame() {
  const startPage = document.getElementById('start-page')
  const gameDescription = document.createElement("h3")
  startPage.append(gameDescription)

  // gameDescription.textContent = "We are so glad you are here!"
  // setTimeout(function() {
  //   gameDescription.textContent = "Someone stole all of the Ruby gems and left clues and puzzles all over Flatiron Campus and Seattle."
  // }, 2000)
  // setTimeout(function() {
  //   gameDescription.textContent = "We need to get the Ruby gems back.  Please help!"
  // }, 4000)
  gameDescription.textContent = "Press START GAME if you are ready to begin."
  const startGameBtn = document.createElement("button")
  startGameBtn.textContent = "START GAME"
  startPage.appendChild(startGameBtn)
  startGameBtn.addEventListener('click', () => {
    clearStartPage();
    puzzleOneStart();
  });
}
  // setTimeout(function() {
  //   gameDescription.textContent = "Press START GAME if you are ready to begin."
  //   const startGameBtn = document.createElement("button")
  //   startGameBtn.textContent = "START GAME"
  //   startPage.appendChild(startGameBtn)
  //   startGameBtn.addEventListener('click', () => {
  //     clearStartPage();
  //     puzzleOneStart();
  //   })
  // }, 2000)


function clearStartPage() {
  const startPage = document.getElementById('start-page')
  startPage.remove();
}

function loadNarrative() {
  const paperMessage = document.createElement("div")
  paperMessage.id = 'paper-message'
}

// function login() {
//     //treasure map???
//     const loginBtn = document.getElementById('test-login-btn')
//     loginBtn.addEventListener('click', function() {
//       document.getElementById('start-page').style.display = "none"
//       displayTransitionMap('drop-target', ['Your next challenge is located...', 'at a local landmark built in 1989...', 'inspired by a Norwegian fairy tale called...', 'Three Billy Goats Gruff'], ['Drag the taxi to your next location on the map.', "Need more clues? Click on 'More Clues', but be aware that this will cost you time!"]);
//     })
// }
//
// function login() {
//   loadUsers() //fetching users, put in variable?
//   input.addEventListener('submit', function() {
//       loadUserProfile()
//   })
// }
//
// function loadUserProfile() {
//
//   //if user is new, post new user info and say "welcome!"
//   //else say 'welcome back!'
//
//   //make a user class?
//
//   const startGameButton = document.createElement('button')
//   startGameButton.addEventListener('click', function() {
//     document.getElementsByClassName('dialog-box').forEach(box => box.style.display = "block");
//     // displayTransitionMap('drop-target', clues1, instructions1);
//     puzzleOneMain();
//   })
//
// }








// main()
//
// function main() {
//   loadUsers()
// }
//
// function hideLoading() {
//   let loading = document.getElementById('loading')
//   loading.classList.add('hidden')
// }
//
// function loadUsers() {
//   console.log('loading users')
//   fetch('http://localhost:3000/users')
//   .then(res => res.json())
//   .then(users => {
//     console.log('loaded users', users)
//     hideLoading()
//     displayUsers(users)
//   })
//   .catch(console.log)
// }
//
// function displayUsers(users) {
//   console.log('displayUsers')
//   let userList = document.getElementById('users')
//   users.forEach(userJson => {
//     let user = new User(userJson)
//     userList.append(user.toHTML())
//   })
// }
//



//TEST
