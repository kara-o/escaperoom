function puzzleOneStart(){
  startTimer();
  addButton();
  addImage();
  firstbuttonAction();
}

function addButton(){
  let button = document.createElement("button");
  button.setAttribute('id','page-one-specific-button');
  button.innerText = "  ";
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
    let headerId = document.getElementById('header-id');
    let firstClue = document.createElement('div');
    firstClue.setAttribute('id','first-clue-id');
    firstClue.innerText = "first clue!\ndivide by two, click\n opposite of vertical\n gravity center";
    headerId.append(firstClue);
  }

  let showingFirstClue = window.setTimeout(firstDelayedClue,2000);

  function removeClue(){
    let firstClueId = document.getElementById('first-clue-id');
    firstClueId.style.display = 'none';
  }

  window.setTimeout(removeClue, 8000);


  let button = document.getElementById("page-one-specific-button");

  button.addEventListener('click', (event) =>{

    let locationOfFirstChallenge = document.getElementById('header-id');

    locationOfFirstChallenge.innerText = `First Challenge. Which is best for creating constant variables? Var, let or const?`;


    let createForm = document.createElement("FORM");
    createForm.setAttribute('id','form-specific-id');

    let createInput = document.createElement('INPUT');
    createInput.setAttribute('type','text');
    createInput.setAttribute('value','');

    createForm.append(createInput);
    locationOfFirstChallenge.append(createForm);

    let formSpecificId = document.getElementById('form-specific-id');
    formSpecificId.addEventListener('submit', (event)=>{
      event.preventDefault();

      let formInputAnswer = event.target.elements[0].value;
      if (formInputAnswer === "const"){
        let questionSpace = document.getElementById('header-id');
        questionSpace.innerText = "Success!";

        window.setTimeout(() => {
          const clues1 = ['Your next challenge is located...', 'at a local landmark built in 1989...', 'inspired by a Norwegian fairy tale called...', 'Three Billy Goats Gruff']
          const instructions1 = ['Drag the taxi to your next location on the map.', "Need more clues? Click on 'More Clues', but be aware that this will cost you time!"]

          hideAllOnPage();
          displayTransitionMap('drop-target', clues1, instructions1);
        },1000);
        }
    })
  })
}

function hideAllOnPage(){
  let addingClassToHeader = document.getElementById('header-id');
  let addingClassToTop = document.getElementById('top-div');
  let addingClassTolower = document.getElementById('lower-div');
  addingClassToHeader.style.display ='none';
  addingClassToTop.style.display ='none';
  addingClassTolower.style.display ='none';
}
