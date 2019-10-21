document.addEventListener('DOMContentLoaded', (event)=>{
  main();
})

const mathURL = 'http://numbersapi.com/random/math'

function main(){
  addButton();
  addImage();
  firstbuttonAction();
  goGetMathQuestion();
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
  imageLocation.append(imageAdded)
}

function firstbuttonAction(){

  function firstDelayedClue(){
    let firstClue = window.alert("Clue 1 - I have bark, but I am not a dog");
    firstClue;
  }
  window.setTimeout(firstDelayedClue,4000);

  let button = document.getElementById("button");
  button.addEventListener('mouseenter', (event) =>{
    let firstScreen = window.prompt("First Challenge! Which is best for creating constant variables? Var, let or const?","tick tock, tick tock.");
  
    
    if (firstScreen === "const"){
      window.alert("good job!")
      let secondScreen = window.prompt("A list is the same as a queue","true or false?");
      if (secondScreen === "false"){
        window.alert("Nice work!\n Clue 2\n - Azure is my friend\n Netflix and chill all day\n Living-room needs me ")
        secondButtonCreated();
      } else {
        window.alert("almost")
      }
    } else {
      window.alert("close but no cigar");
    }
  })
}

function secondButtonCreated(){
  //created once you passed the two challenges 
  let secondButton = document.createElement('button');
  secondButton.setAttribute('id','second-button-id');
  let lowerDiv = document.getElementById('lower-div');
  lowerDiv.append(secondButton);
  secondButtonAction();
}

function goGetMathQuestion(){
  fetch(mathURL, {
    headers: {
      "Accept" : 'application/json'
    }
  })
  .then(res => res.json())
  .then(mathFact => {
    console.log(mathFact);
    // displayMathQuestion(mathFact)
  
});
}

function secondButtonAction(){
  let secondButtonId = document.getElementById('second-button-id');
  secondButtonId.addEventListener('mouseenter', (event)=> {
    

  });
}

// function displayMathQuestion(mathFact){
//   console.log("are we even here yet?", mathFact);

// }