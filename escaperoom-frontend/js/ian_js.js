document.addEventListener('DOMContentLoaded', (event)=>{
  main();
})

function main(){
  addButton();
  buttonAction();
}

function addButton(){
  let button = document.createElement("button");
  button.setAttribute('id','button');
  button.innerText = "     ";
  let lowerDiv = document.getElementById('lower-div');
  lowerDiv.append(button);
}

function buttonAction(){

  function firstDelayedClue(){
    let firstClue = window.alert("I have bark, but I am not a dog");
    firstClue;
  }
  window.setTimeout(firstDelayedClue,3000);

  let button = document.getElementById("button");
  button.addEventListener('mouseenter', (event) =>{
    let firstScreen = window.prompt("First Challenge! Which is best for creating constant variables? Var, let or const?","tick tock, tick tock.");
    let secondScreen = window.prompt("a list is the same as a queue","true or false?");
    if (firstScreen === "const"){
      window.alert("good job!")
    } else {
      window.alert("close but no cigar");
    }
    // if statement chain is all messed up, seek help from kara and brian.
    if(secondScreen ==="false"){
      window.alert("two for two!")
    } else {
      window.alert("not quite");
    }
  })


}
