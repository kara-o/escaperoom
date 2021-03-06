function puzzleOneStart() {
  document.getElementById('puzzle-one-page-container').style.display = 'flex';
  setUpTimer();
  addImage();
  addButton();
  firstbuttonAction();
}

function addImage() {
  let imageAdded = document.createElement('img');
  imageAdded.setAttribute('src', './images/entrance_flatiron.jpg');
  imageAdded.setAttribute('id', 'image-specific-id');
  imageAdded.setAttribute('alt', 'flatiron seattle school entrance');
  let imageLocation = document.getElementById('top-div');
  imageLocation.style.display = 'block';
  imageLocation.append(imageAdded);
}

function addButton() {
  let button = document.createElement('button');
  button.setAttribute('id', 'page-one-specific-button');
  button.innerText = '  ';
  let buttonContainer = document.getElementById('top-div');
  buttonContainer.style.display = 'block';
  buttonContainer.append(button);
}

function firstbuttonAction() {
  let clueBox = document.getElementById('puzzle-one-clues');
  let puzzleOneInstructions = document.createElement('p');
  puzzleOneInstructions.id = 'first-instructions';
  clueBox.appendChild(puzzleOneInstructions);
  puzzleOneInstructions.style.padding = '10px';
  puzzleOneInstructions.style.bottom = '75%';
  puzzleOneInstructions.textContent =
    'You must first find the secret button...';
  setTimeout(function() {
    puzzleOneInstructions.textContent =
      'hidden somewhere in the Flatiron School lobby...';
  }, 2000);
  setTimeout(function() {
    puzzleOneInstructions.textContent = '';
  }, 4000);

  function firstDelayedClue() {
    let firstClue = document.createElement('div');
    firstClue.id = 'first-clue-id';
    firstClue.innerText =
      'first clue!\ndivide by two, click\n opposite of vertical\n gravity center';
    clueBox.append(firstClue);
    firstClue.style.position = 'absolute';
    firstClue.style.bottom = '50%';
  }

  let showingFirstClue = window.setTimeout(firstDelayedClue, 2000);

  function removeClue() {
    let firstClueId = document.getElementById('first-clue-id');
    firstClueId.style.display = 'none';
  }

  let button = document.getElementById('page-one-specific-button');

  button.addEventListener('click', event => {
    removeClue();

    document.getElementById('first-instructions').textContent = 'You found it!';

    let firstChallenge = document.createElement('p');
    clueBox.appendChild(firstChallenge);
    firstChallenge.style.position = 'absolute';
    firstChallenge.style.bottom = '25%';
    firstChallenge.style.padding = '10px';

    firstChallenge.innerText = `First Challenge:\n Which is best for creating constant variables? Var, let or const?`;

    let createForm = document.createElement('FORM');
    createForm.setAttribute('id', 'form-specific-id');

    let createInput = document.createElement('INPUT');
    createInput.setAttribute('type', 'text');
    createInput.setAttribute('autocomplete', 'off');
    createInput.setAttribute('value', '');

    let submitInput = document.createElement('input');
    submitInput.setAttribute('type', 'submit');
    submitInput.setAttribute('value', 'Submit');

    createForm.append(createInput, submitInput);
    firstChallenge.append(createForm);

    let formSpecificId = document.getElementById('form-specific-id');
    formSpecificId.addEventListener('submit', event => {
      event.preventDefault();

      let formInputAnswer = event.target.elements[0].value;
      if (formInputAnswer === 'const') {
        document.getElementById('first-instructions').textContent = '';
        firstChallenge.style.bottom = '75%';
        firstChallenge.innerText = 'Success!';

        window.setTimeout(() => {
          const cluesDP = [
            'Your next challenge location...',
            '...is a popular place in Seattle',
            '...along the water',
            '...with a lighthouse'
          ];
          const instructions = [
            'Drag the taxi to your next location on the map.'
          ];

          hideAllOnPage();
          displayTransitionMap(
            'discovery-park-drop-target',
            cluesDP,
            instructions,
            loadTreasurePuzzle
          );
        }, 1000);
      } else {
        document.getElementById('first-instructions').textContent =
          'Try again!';
        createInput.value = '';
        setTimeout(() => {
          document.getElementById('first-instructions').textContent = '';
        }, 2000);
      }
    });
  });
}

function hideAllOnPage() {
  document.getElementById('puzzle-one-page-container').style.display = 'none';
  // let addingClassToHeader = document.getElementById('header-id');
  // let addingClassToTop = document.getElementById('top-div');
  // let addingClassTolower = document.getElementById('lower-div');
  // addingClassToHeader.style.display ='none';
  // addingClassToTop.style.display ='none';
  // addingClassTolower.style.display ='none';
}
