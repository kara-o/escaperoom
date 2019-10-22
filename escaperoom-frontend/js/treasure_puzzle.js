document.addEventListener("DOMContentLoaded", () => {
  loadTreasurePuzzle();
});

function loadTreasurePuzzle() {
  const treasureMapPieces = document.querySelectorAll(".map-piece");
  const treasureMapContainers = document.querySelectorAll(".map-container");
  //probably need to push the grid containers to treasureMapContainers
  let draggedItem = null;

  for (let i = 0; i < treasureMapPieces.length; i++) {
    const mapPiece = treasureMapPieces[i];

    mapPiece.addEventListener("dragstart", function(e) {
      draggedItem = this;
      setTimeout(() => {
        this.style.display = "none";
      }, 0);
    });
    mapPiece.addEventListener("dragend", function(e) {
      setTimeout(() => {
        this.style.display = "block";
        draggedItem = null;
      }, 0);
    });

    for (let j = 0; j < treasureMapContainers.length; j++) {
      const mapContainer = treasureMapContainers[j];

      mapContainer.addEventListener("dragenter", e => {
        e.preventDefault();
      });
      mapContainer.addEventListener("dragover", e => {
        e.preventDefault();
      });
      mapContainer.addEventListener("dragleave", function() {});
      mapContainer.addEventListener("drop", function(e) {
        //if !this.child, then append
        this.append(draggedItem);
      });
    }
  }
}
