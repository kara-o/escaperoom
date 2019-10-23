class Map {

  constructor(dropTargetId) {
    this.dropTargetId = dropTargetId;
    this.clues = [];
    this.instructions = [];
  }

  displayTransitionMap(targetIdTag, clues, instructions) {

    let dropTarget = document.getElementById(targetIdTag)

    mapContainer.style.display = "block";
    taxi.addEventListener("dragstart", dragstart);

    mapContainer.addEventListener("dragover", dragover);
    mapContainer.addEventListener("dragenter", dragenter);
    mapContainer.addEventListener("drop", drop);

    dropTarget.addEventListener("drop", dropOnTarget);

    const dropResponse = document.createElement("p")
    const cluesBox = document.getElementById("left-dialog-box")
    cluesBox.appendChild(dropResponse)

    displayClues(clues);
    displayInstructions(instructions);
  }




}



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

  const dropResponse = document.createElement("p")
  const cluesBox = document.getElementById("left-dialog-box")
  cluesBox.appendChild(dropResponse)

  displayClues(clues);
  displayInstructions(instructions);
}

function displayClues(clues) {
  const cluesBox = document.getElementById("left-dialog-box")
  cluesBox.style.display = "block"
  const clueWords = document.createElement("p")
  clueWords.id = "left-dialog-words"
  cluesBox.appendChild(clueWords)
  clueWords.style.padding = "10px"
  clueWords.textContent = clues[0];
  let i=1;
  intervalId = setInterval(function() {
    console.log('hello')
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
  const instructionsBox = document.getElementById("right-dialog-box")
  instructionsBox.style.display = "block"
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
  dropResponse.textContent = ""
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
  dropResponse.textContent = "Nope, try again!"
}

function dropOnTarget(e) {
  taxi.style.left = e.clientX - diffX + "px"
  taxi.style.top = e.clientY - diffY + "px"
  taxi.style.position = "fixed"

  console.log("TARGET!");
  dropResponse.textContent = "SUCCESS!"
  setTimeout(function() {
    dropResponse.textContent = `Off we go!`
  }, 1000)
  setTimeout(function() {
    dropResponse.style.display = "none";
    clearTransitionMap();
    nextPuzzle(trollPuzzleStart);
  }, 2000);
  e.stopPropagation();
}

function clearTransitionMap() {
  clearInterval(intervalId)
  mapContainer.style.display = "none";
  document.getElementById("right-dialog-box").style.display = "none"
  document.getElementById("left-dialog-box").innerHTML = ""

  // document.querySelectorAll("#instructionListItem").forEach(x => x.remove())
  // document.getElementById("left-dialog-words").style.display = 'none';
}

function nextPuzzle(puzzleFunction) {
  puzzleFunction()
}



const clues1 = ['Your next challenge is located...', 'at a local landmark built in 1989...', 'inspired by a Norwegian fairy tale called...', 'Three Billy Goats Gruff']
const instructions1 = ['Drag the taxi to your next location on the map.', "Need more clues? Click on 'More Clues', but be aware that this will cost you time!"]
