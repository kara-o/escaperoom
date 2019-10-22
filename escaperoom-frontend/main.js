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
const loginBtn = document.getElementById('test-login-btn')
loginBtn.addEventListener('click', function() {
  document.getElementById('start-page').style.display = "none"
  displayTransitionMap();
})
