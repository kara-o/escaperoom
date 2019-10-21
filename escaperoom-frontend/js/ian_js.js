document.addEventListener('DOMContentLoaded', (event)=>{
  main();
})


function main(){
  addButton();
  addImage();
  firstbuttonAction();
}

function addButton(){
  let button = document.createElement("button");
  button.setAttribute('id','button');
  button.innerText = "     ";
  let lowerDiv = document.getElementById('lower-div');
  lowerDiv.append(button);
}

function addImage(){
  let imageAdded = document.createElement('img');
  imageAdded.setAttribute('src','./images/entrance_flatiron.jpg');
  imageAdded.setAttribute('id','image-specific-id');
  imageAdded.setAttribute('alt','flatiron seattle school entrance');
  let imageLocation = document.getElementById('top-div');
  imageLocation.append(imageAdded);
}

function firstbuttonAction(){

  function firstDelayedClue(){
    let firstClue = window.alert("Clue 1 - I have bark, but I am not a dog");
    firstClue;
  }
  window.setTimeout(firstDelayedClue,2000);

  let button = document.getElementById("button");
  button.addEventListener('mouseenter', (event) =>{
    let firstScreen = window.prompt("First Challenge! Which is best for creating constant variables? Var, let or const?","tick tock, tick tock.");
  
    
    if (firstScreen === "const"){
      window.alert("good job!")
      let secondScreen = window.prompt("A list is the same as a queue","true or false?");
      if (secondScreen === "false"){
        window.alert("Nice work!")
      } else {
        window.alert("almost")
      }
    } else {
      window.alert("close but no cigar");
    }
  })
}
