const taxi = document.getElementById("taxi")
const mapContainer = document.getElementById("transition-map-container")

let diffX = 0
let diffY = 0

let intervalId = 0

function displayTransitionMap(targetIdTag, clues, instructions) {
  
  let dropTarget = document.getElementById(targetIdTag)

  mapContainer.style.display = "block";
  taxi.addEventListener("dragstart", dragstart);

  mapContainer.addEventListener("dragover", dragover);
  mapContainer.addEventListener("dragenter", dragenter);
  mapContainer.addEventListener("drop", drop);

  dropTarget.addEventListener("drop", dropOnTarget);

  displayClues(clues);
  displayInstructions(instructions);
}

function displayClues(clues) {
  const cluesBox = document.getElementById("left-dialog-box")
  const clueWords = document.createElement("p")
  cluesBox.appendChild(clueWords)
  clueWords.style.padding = "10px"
  clueWords.textContent = clues[0];
  let i=1;
  intervalId = setInterval(function() {
    console.log('hello')
    clueWords.textContent = clues[i % clues.length];
    i++;
  }, 2000);
  const moreCluesBtn = document.createElement('button');
  cluesBox.appendChild(moreCluesBtn)
  moreCluesBtn.textContent = "More Clues";
  moreCluesBtn.style.position = "absolute";
  moreCluesBtn.style.width = "40%"
  moreCluesBtn.style.height = "40px";
}

function displayInstructions(instructions) {
  const instructionsBox = document.getElementById("right-dialog-box")
  const instructionsList = document.createElement('ul')
  instructionsBox.appendChild(instructionsList)

  for (const instruction of instructions) {
    const instructionLi = document.createElement("li")
    instructionLi.style.padding = "10px"
    instructionLi.id = "instructionListItem"
    instructionLi.textContent = instruction
    instructionsList.appendChild(instructionLi)
  }

}

function dragstart(e) {
  const rect = taxi.getBoundingClientRect();
  diffX = e.clientX - rect.left
  diffY = e.clientY - rect.top
  dropFailResponse.style.display = "none"
}

function dragover(e) {
  e.preventDefault()
  console.log("dragging!!!")
}

function dragenter(e) {
  e.preventDefault()
}

// <p id="drop-fail-response">TRY AGAIN!</p>
// <p id="drop-success-response">SUCCESS!!!!!</p>
// let dropFailResponse = document.getElementById("drop-fail-response")
// let dropSuccessResponse = document.getElementById("drop-success-response")

function drop(e) {
  taxi.style.left = e.clientX - diffX + "px"
  taxi.style.top = e.clientY - diffY + "px"
  taxi.style.position = "fixed"

  console.log("NOT TARGET")
  let dropFailResponse = document.createElement("p")
  dropFailResponse.textContent = "Nope, try again!"
  const cluesBox = document.getElementById("left-dialog-box")
  cluesBox.appendChild(dropFailResponse)
}

function dropOnTarget(e) {
  taxi.style.left = e.clientX - diffX + "px"
  taxi.style.top = e.clientY - diffY + "px"
  taxi.style.position = "fixed"

  console.log("TARGET!");
  let dropSuccessResponse = document.createElement("p")
  dropSuccessResponse.textContent = "SUCCESS"
  dropSuccessResponse.style.left = "50%"
  dropSuccessResponse.style.top = "50%"
  dropSuccessResponse.style.transform = "rotate(-45deg)"
  dropSuccessResponse.style.color = "purple"
  mapContainer.appendChild(dropSuccessResponse)
  setTimeout(function() {
    dropSuccessResponse.style.display = "none";
    clearTransitionMap();
    nextPuzzle(trollPuzzleStart);
  }, 1000);
  e.stopPropagation();
}

function clearTransitionMap() {
  clearInterval(intervalId)
  mapContainer.style.display = "none";
  document.querySelectorAll("#instructionListItem").forEach(x => x.remove())
  clueWords.remove()
}

function nextPuzzle(puzzleFunction) {
  puzzleFunction()
}
