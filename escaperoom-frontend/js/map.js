const taxi = document.getElementById('taxi');
const mapContainer = document.getElementById('transition-map-container');
const dropResponse = document.createElement('p');
const cluesBox = document.getElementById('left-dialog-box');

let diffX = 0;
let diffY = 0;

let intervalId = 0;

function displayTransitionMap(targetIdTag, clues, instructions, puzzle) {
  taxi.style.position = 'absolute';
  taxi.style.left = '10px';
  taxi.style.top = '10px';
  let dropTarget = document.getElementById(targetIdTag);
  dropTarget.style.display = 'block';
  mapContainer.style.display = 'block';
  taxi.addEventListener('dragstart', dragstart);

  mapContainer.addEventListener('dragover', dragover);
  mapContainer.addEventListener('dragenter', dragenter);
  mapContainer.addEventListener('drop', drop);

  dropTarget.addEventListener('drop', e => {
    dropOnTarget(e, puzzle);
  });

  dropResponse.style.display = 'block';

  displayClues(clues);
  displayInstructions(instructions);
}

function displayClues(clues) {
  const cluesBox = document.getElementById('left-dialog-box');
  cluesBox.style.display = 'block';
  const cluesHeader = document.createElement('h2');
  cluesHeader.id = 'clues-header';
  cluesHeader.textContent = 'Clues';
  const clueWords = document.createElement('p');
  clueWords.id = 'left-dialog-words';
  cluesBox.append(cluesHeader, clueWords, dropResponse);
  clueWords.style.padding = '10px';
  clueWords.textContent = clues[0];
  let i = 1;
  intervalId = setInterval(function() {
    clueWords.textContent = clues[i % clues.length];
    i++;
  }, 2000);
  // const moreCluesBtn = document.createElement('button');
  // cluesBox.appendChild(moreCluesBtn)
  // moreCluesBtn.textContent = "More Clues";
  // moreCluesBtn.style.position = "absolute";
  // moreCluesBtn.style.width = "40%"
  // moreCluesBtn.style.height = "40px";
}

function displayInstructions(instructions) {
  const instructionsBox = document.getElementById('right-dialog-box');
  instructionsBox.style.display = 'block';
  const instructionsList = document.createElement('ul');
  instructionsBox.appendChild(instructionsList);

  for (const instruction of instructions) {
    const instructionLi = document.createElement('li');
    instructionLi.style.padding = '10px 10px 10px 0px';
    instructionLi.id = 'instructionListItem';
    instructionLi.textContent = instruction;
    instructionsList.appendChild(instructionLi);
  }
}

function dragstart(e) {
  const rect = taxi.getBoundingClientRect();
  diffX = e.clientX - rect.left;
  diffY = e.clientY - rect.top;
  dropResponse.textContent = '';
}

function dragover(e) {
  e.preventDefault();
}

function dragenter(e) {
  e.preventDefault();
}

// <p id="drop-fail-response">TRY AGAIN!</p>
// <p id="drop-success-response">SUCCESS!!!!!</p>
// let dropFailResponse = document.getElementById("drop-fail-response")
// let dropSuccessResponse = document.getElementById("drop-success-response")

function drop(e) {
  taxi.style.left = e.clientX - diffX + 'px';
  taxi.style.top = e.clientY - diffY + 'px';
  taxi.style.position = 'fixed';

  dropResponse.textContent = 'Nope, try again!';
}

function dropOnTarget(e, puzzle) {
  taxi.style.left = e.clientX - diffX + 'px';
  taxi.style.top = e.clientY - diffY + 'px';
  taxi.style.position = 'fixed';
  document.getElementById('clues-header').remove();
  document.getElementById('left-dialog-words').remove();
  dropResponse.textContent = 'SUCCESS!';
  setTimeout(function() {
    dropResponse.textContent = `Off we go!`;
  }, 1000);
  setTimeout(function() {
    dropResponse.textContent = '';
    dropResponse.style.display = 'none';
    clearTransitionMap();
    nextPuzzle(puzzle);
  }, 2000);
  e.stopPropagation();
}

function clearTransitionMap() {
  clearInterval(intervalId);
  mapContainer.style.display = 'none';

  document.querySelectorAll('#instructionListItem').forEach(x => x.remove());

  document.getElementById('right-dialog-box').style.display = 'none';
  document.getElementById('left-dialog-box').style.display = 'none';
}

function nextPuzzle(puzzleFunction) {
  puzzleFunction();
}
