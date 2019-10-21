const taxi = document.getElementById("taxi")
const imageContainer = document.getElementById("image-container")
let dropTarget = document.getElementById("drop-target")
const seattleMap = document.getElementById("seattle-map-image")
let diffX = 0
let diffY = 0

let dropFailResponse = document.getElementById("drop-fail-response")
let dropSuccessResponse = document.getElementById("drop-success-response")

taxi.addEventListener("dragstart", dragstart)

imageContainer.addEventListener("dragover", dragover)
imageContainer.addEventListener("dragenter", dragenter)
imageContainer.addEventListener("drop", drop)

dropTarget.addEventListener("drop", dropOnTarget)

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

  console.log("TARGET!!!");
  dropSuccessResponse.style.display = "block";
  setTimeout(function() {
    dropSuccessResponse.style.display = "none";
    clearTransitionMapPage();
    nextPuzzle(document.getElementById("kara-puzzle"));
  }, 3900);
  e.stopPropagation();
}

function clearTransitionMapPage() {
  seattleMap.style.display = "none";
  taxi.style.display = "none";
  dropTarget.style.display = "none";
  imageContainer.style.display = "none";
}

function nextPuzzle(puzzle) {
  puzzle.style.display = "block";
}
