const clues1 = ['Your next challenge is located...', 'at a local landmark built in 1989...', 'inspired by a Norwegian fairy tale called...', 'Three Billy Goats Gruff']
const instructions1 = ['Drag the taxi to your next location on the map.', "Need more clues? Click on 'More Clues', but be aware that this will cost you time!"]


main();

function main() {

  testLogin()
  // loadUsers();
  // displayUsers();

}

function testLogin() {
    //treasure map???
    const loginBtn = document.getElementById('test-login-btn')
    loginBtn.addEventListener('click', function() {
      document.getElementById('start-page').style.display = "none"
      displayTransitionMap('drop-target', ['Your next challenge is located...', 'at a local landmark built in 1989...', 'inspired by a Norwegian fairy tale called...', 'Three Billy Goats Gruff'], ['Drag the taxi to your next location on the map.', "Need more clues? Click on 'More Clues', but be aware that this will cost you time!"]);
    })
}

function login() {
  loadUsers() //fetching users, put in variable?
  input.addEventListener('submit', function() {
      loadUserProfile()
  })
}

function loadUserProfile() {

  //if user is new, post new user info and say "welcome!"
  //else say 'welcome back!'

  //make a user class?

  const startGameButton = document.createElement('button')
  startGameButton.addEventListener('click', function() {
    document.getElementsByClassName('dialog-box').forEach(box => box.style.display = "block");
    displayTransitionMap('drop-target', clues1, instructions1);
  })

}







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
