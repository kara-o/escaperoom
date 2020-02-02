function treasurePuzzleOff() {
  const mapGrid = document.getElementById('treasure-map-whole');
  const piecesDiv = document.getElementById('treasure-pieces-div');

  const mapGridDescendants = mapGrid.querySelectorAll('*');
  const piecesDivDescendants = piecesDiv.querySelectorAll('*');
  mapGrid.style.display = 'none';
  piecesDiv.style.display = 'none';
  piecesDivDescendants.forEach(x => (x.style.display = 'none'));
  mapGridDescendants.forEach(x => (x.style.display = 'none'));
  document.body.style.backgroundImage = "url('images/forest.jpg')";
}

function loadTreasurePuzzle() {
  document.body.style.backgroundImage = "url('images/dp_image.jpeg')";
  document.body.style.backgroundSize = 'cover';

  const treasureDialog = document.createElement('div');
  treasureDialog.id = 'treasure-dialog';
  document.getElementById('page-container').append(treasureDialog);
  const treasureInstructions = document.createElement('p');
  treasureInstructions.id = 'treasure-instructions';
  treasureInstructions.textContent =
    'Uh oh, our map has been ripped into small pieces...can you fix it?';
  treasureDialog.appendChild(treasureInstructions);
  treasureDialog.style.backgroundImage = "url('images/dialog_background.jpg')";
  treasureDialog.id = 'treasure-dialog-div';

  const mapGrid = document.getElementById('treasure-map-whole');
  const piecesDiv = document.getElementById('treasure-pieces-div');
  mapGrid.style.display = 'grid';
  piecesDiv.style.display = 'flex';

  const treasureMapPieces = document.querySelectorAll('.map-piece');
  const treasureMapContainers = document.querySelectorAll('.map-container');
  //probably need to push the grid containers to treasureMapContainers
  let draggedItem = null;

  for (let i = 0; i < treasureMapPieces.length; i++) {
    const mapPiece = treasureMapPieces[i];

    mapPiece.addEventListener('dragstart', function(e) {
      draggedItem = this;
      setTimeout(() => {
        this.style.display = 'none';
      }, 0);
    });
    mapPiece.addEventListener('dragend', function(e) {
      setTimeout(() => {
        this.style.display = 'block';
        draggedItem = null;
      }, 0);
    });
  }
  for (let j = 0; j < treasureMapContainers.length; j++) {
    const mapContainer = treasureMapContainers[j];

    mapContainer.addEventListener('dragenter', e => {
      e.preventDefault();
    });
    mapContainer.addEventListener('dragover', e => {
      e.preventDefault();
    });
    mapContainer.addEventListener('dragleave', function() {});
    mapContainer.addEventListener('drop', function(e) {
      //if !this.child, then append
      this.append(draggedItem);
      console.log(checkPuzzleSuccess());
    });
  }
}

function checkPuzzleSuccess() {
  const mapGridContainers = document.querySelectorAll('.map-grid-container');
  const puzzleAnswer = [
    'map-piece-9',
    'map-piece-8',
    'map-piece-7',
    'map-piece-6',
    'map-piece-5',
    'map-piece-4',
    'map-piece-3',
    'map-piece-2',
    'map-piece-1'
  ];
  //check if grid container has child

  // console.log(mapGridContainers[0].firstChild.id);
  let containerChildIds = [];
  for (let i = 0; i < mapGridContainers.length; i++) {
    // debugger;
    if (mapGridContainers[i].firstChild) {
      const childId = mapGridContainers[i].firstChild.id;
      //   console.log(mapGridContainers[i].firstChild.id);

      containerChildIds.push(childId);
    }
  }
  if (arraysEqual(containerChildIds, puzzleAnswer)) {
    const clues2 = [
      'Your next challenge is located...',
      'at a local landmark built in 1989...',
      'inspired by a Norwegian fairy tale called...',
      'Three Billy Goats Gruff'
    ];
    const instructions = ['Drag the taxi to your next location on the map.'];
    document.getElementById('treasure-instructions').textContent = 'Great Job!';
    setTimeout(() => {
      treasurePuzzleOff();
      document.getElementById('treasure-dialog-div').remove();
      displayTransitionMap(
        'troll-drop-target',
        clues2,
        instructions,
        trollPuzzleStart
      );
    }, 2000);
  }
}

function arraysEqual(a, b) {
  if (a.length != b.length) return false;

  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}
