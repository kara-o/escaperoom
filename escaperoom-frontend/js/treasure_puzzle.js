function treasurePuzzleOff() {
  const mapGrid = document.getElementById('treasure-map-whole');
  const treasureDialog = document.getElementById('treasure-dialog-div');
  mapGrid.remove();
  treasureDialog.remove();
  document.body.style.backgroundImage = "url('images/forest.jpg')";
}

function loadTreasurePuzzle() {
  document.body.style.backgroundImage = "url('images/dp_image.jpeg')";
  document.body.style.backgroundSize = 'cover';

  const treasureDialog = document.createElement('div');
  document.getElementById('page-container').append(treasureDialog);
  const treasureInstructions = document.createElement('p');
  treasureInstructions.id = 'treasure-instructions';
  treasureInstructions.textContent =
    'Uh oh, our map has been ripped into small pieces...can you fix it?';
  treasureDialog.appendChild(treasureInstructions);
  treasureDialog.style.backgroundImage = "url('images/dialog_background.jpg')";
  treasureDialog.id = 'treasure-dialog-div';

  const mapGrid = document.getElementById('treasure-map-whole');
  mapGrid.style.display = 'grid';

  const treasureMapPieces = document.querySelectorAll('.map-piece');
  const treasureMapContainers = document.querySelectorAll('.map-container');
  let draggedItem = null;
  let container = null;

  for (let i = 0; i < treasureMapPieces.length; i++) {
    const mapPiece = treasureMapPieces[i];
    mapPiece.style.display = 'block';

    let random = () => {
      return Math.floor(Math.random() * 1000 + 1);
    };
    let pixel = random();
    let pixel2 = random();

    mapPiece.style.left = `${pixel}px`;
    mapPiece.style.top = `${pixel2}px`;

    mapPiece.addEventListener('dragstart', function(e) {
      draggedItem = this;
    });
  }
  for (let j = 0; j < treasureMapContainers.length; j++) {
    const mapContainer = treasureMapContainers[j];

    let coordinates = mapContainer.getBoundingClientRect();
    console.log(coordinates);

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
  console.log(coordinates, draggedItem, container);
  const mapPiece = draggedItem;
  mapPiece.style.left = `${coordinates.left}px`;
  mapPiece.style.top = `${coordinates.top}px`;
  if (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  container.appendChild(mapPiece);
  checkPuzzleSuccess();
};

function checkPuzzleSuccess() {
  console.log('checking puzzle!');
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
  console.log(containerChildIds);
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
