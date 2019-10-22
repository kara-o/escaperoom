// // document.addEventListener('DOMContentLoaded', (event)=>{
// //   mainWelcomePage();
// // })

// // function mainWelcomePage(){
// //   login();
// // }

// function login(){
//
//   fetch('http://localhost:3000/users')
//   .then(response => response.json())
//   .then(users =>{
//     displayUsers(users)
//
//   })
//
//
//   let midDiv = document.getElementById("mid-div");
//   let welcomeHeader = document.createElement('h3');
//   welcomeHeader.innerText = "Enter Your Name";
//   midDiv.append(welcomeHeader);
//
//   let loginUserName = document.getElementById("login-user-name");
//
//   loginUserName.addEventListener('submit', (event)=> {
//     event.preventDefault();
//     let userNameInput = event.target.elements.name.value;
// 
//     function compareUsers(users){
//       if (userNameInput === users.name){
//         return `Welcome back, ${userNameInput}`;
//       } else {
//         fetch('http://localhost:3000/users', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//             Accept : 'application/json'
//
//           },
//           body: JSON.stringify({
//             name: userNameInput
//           })
//         }
//         .then(response => response.json())
//         .then(newUser => welcomeFirstTime(newUser)));
//       }
//     }
//   })
// }
//
// // function displayUsers(users){
// //   let userList = document.getElementById("lower-div");
// //   users.forEach(user =>{
// //     addUser(userList, user)
// //   })
// // }
//
// // function addUser(list,user){
// //   let individualUserDiv = document.createElement('div');
// //   let titleOfUsers = document.createElement('h5');
// //   titleOfUsers.innerText = "Previous Gamer";
// //   individualUserDiv.innerText = user.name;
// //   list.append(titleOfUsers,individualUserDiv);
// // }
//
// // function welcomeFirstTime(newUser){
// //   console.log("firstime user", newUser)
// // }
