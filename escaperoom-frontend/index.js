const taxi = document.getElementById("taxi")
const imageContainer = document.getElementById("image-container")
const dropTarget = document.getElementById("drop-target")
let diffX = 0
let diffY = 0

taxi.addEventListener("dragstart", dragstart)

imageContainer.addEventListener("dragover", dragover)
imageContainer.addEventListener("dragenter", dragenter)
imageContainer.addEventListener("drop", drop)

dropTarget.addEventListener("drop", dropOnTarget)

function dragstart(e) {
  const rect = taxi.getBoundingClientRect();
  diffX = e.clientX - rect.left
  diffY = e.clientY - rect.top
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
}

function dropOnTarget(e) {
  taxi.style.left = e.clientX - diffX + "px"
  taxi.style.top = e.clientY - diffY + "px"
  taxi.style.position = "fixed"

  console.log("TARGET!!!")
  e.stopPropagation()
}



    // var data = dropevent.dataTransfer.getData("text");
    // dropevent.target.appendChild(document.getElementById(data));
    // document.getElementById("drag").style.color = 'black';
