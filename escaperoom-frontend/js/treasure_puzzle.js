function treasurePuzzleOff() {
  const page = document.getElementById('page-container');
  const mapGrid = document.getElementById('treasure-map-whole');
  const treasureDialog = document.getElementById('treasure-dialog-div');
  const piecesDiv = document.getElementById('pieces-div');
  mapGrid.remove();
  treasureDialog.remove();
  piecesDiv.remove();
  page.style.flexDirection = 'row';
  document.body.style.backgroundImage = "url('images/forest.jpg')";
}

function loadTreasurePuzzle() {
  const page = document.getElementById('page-container');
  page.style.flexDirection = 'column';
  document.body.style.backgroundImage = "url('images/dp_image.jpeg')";
  document.body.style.backgroundSize = 'cover';

  const treasureDialog = document.getElementById('treasure-dialog-div');
  const treasureInstructions = document.createElement('p');
  treasureInstructions.id = 'treasure-instructions';
  treasureInstructions.textContent =
    'Uh oh, our map has been ripped into small pieces...can you fix it?';
  treasureDialog.appendChild(treasureInstructions);
  treasureDialog.style.display = 'block';
  treasureDialog.style.backgroundImage = "url('images/dialog_background.jpg')";

  const mapGrid = document.getElementById('treasure-map-whole');
  mapGrid.style.display = 'grid';

  const piecesDiv = document.getElementById('pieces-div');
  piecesDiv.style.display = 'block';
  piecesDiv.style.position = 'relative';

  const treasureMapPieces = document.querySelectorAll('.map-piece');
  const treasureMapContainers = document.querySelectorAll('.map-container');
  let draggedItem = null;
  let container = null;

  for (let i = 0; i < treasureMapPieces.length; i++) {
    const mapPiece = treasureMapPieces[i];
    mapPiece.style.position = 'absolute';

    let random = () => {
      return Math.floor(Math.random() * 95 + 1);
    };
    let pixel = random();
    let pixel2 = random();

    mapPiece.style.left = `${pixel}%`;
    mapPiece.style.top = `${pixel2}%`;

    mapPiece.addEventListener('dragstart', () => {
      draggedItem = mapPiece;
    });
  }
  for (let j = 0; j < treasureMapContainers.length; j++) {
    const mapContainer = treasureMapContainers[j];

    let coordinates = mapContainer.getBoundingClientRect();

    mapContainer.addEventListener('dragenter', e => {
      e.preventDefault();
    });
    mapContainer.addEventListener('dragover', e => {
      e.preventDefault();
    });
    mapContainer.addEventListener('drop', () => {
      container = mapContainer;
      dropOnMap(coordinates, draggedItem, container);
    });
  }
}

const dropOnMap = (coordinates, draggedItem, container) => {
  const mapPiece = draggedItem;
  mapPiece.style.position = 'static';
  mapPiece.style.left = `${coordinates.left}px`;
  mapPiece.style.top = `${coordinates.top}px`;
  if (container.firstChild) {
    const previousPiece = container.firstChild;
    console.log(previousPiece);
    container.removeChild(container.firstChild);
    let random = () => {
      return Math.floor(Math.random() * 95 + 1);
    };
    let pixel = random();
    let pixel2 = random();

    previousPiece.style.left = `${pixel}%`;
    previousPiece.style.top = `${pixel2}%`;
    previousPiece.style.position = 'absolute';
    document.getElementById('pieces-div').appendChild(previousPiece);
  }
  container.appendChild(mapPiece);
  checkPuzzleSuccess();
};

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
  let containerChildIds = [];
  for (let i = 0; i < mapGridContainers.length; i++) {
    if (mapGridContainers[i].firstChild) {
      const childId = mapGridContainers[i].firstChild.id;
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
    document.getElementById('treasure-instructions').textContent = 'Nice job!';
    setTimeout(() => {
      treasurePuzzleOff();
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

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}
