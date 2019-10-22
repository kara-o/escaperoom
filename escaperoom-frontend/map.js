const taxi = document.getElementById("taxi")
const mapContainer = document.getElementById("map-container")
let dropTarget = document.getElementById("drop-target")
const seattleMap = document.getElementById("seattle-map-image")
let diffX = 0
let diffY = 0
const karaPuzzleDiv = document.getElementById("kara-puzzle")

let dropFailResponse = document.getElementById("drop-fail-response")
let dropSuccessResponse = document.getElementById("drop-success-response")

function displayTransitionMap() {
  // body.style.backgroundImage = "url('images/forest.jpg')"
  mapContainer.style.display = "block";
  taxi.addEventListener("dragstart", dragstart)

  mapContainer.addEventListener("dragover", dragover)
  mapContainer.addEventListener("dragenter", dragenter)
  mapContainer.addEventListener("drop", drop)

  dropTarget.addEventListener("drop", dropOnTarget)
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

function drop(e) {
  taxi.style.left = e.clientX - diffX + "px"
  taxi.style.top = e.clientY - diffY + "px"
  taxi.style.position = "fixed"

  console.log("NOT TARGET")
  dropFailResponse.style.display = "block"
}

function dropOnTarget(e) {
  taxi.style.left = e.clientX - diffX + "px"
  taxi.style.top = e.clientY - diffY + "px"
  taxi.style.position = "fixed"

  console.log("TARGET!");
  dropSuccessResponse.style.display = "block";
  setTimeout(function() {
    dropSuccessResponse.style.display = "none";
    clearTransitionMap();
    nextPuzzle(trollPuzzle);
  }, 1000);
  e.stopPropagation();
}

function clearTransitionMap() {
  mapContainer.style.display = "none";
}

function nextPuzzle(puzzleFunction) {
  puzzleFunction()
}
