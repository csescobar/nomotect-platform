"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ej2_react_diagrams_1 = require("@syncfusion/ej2-react-diagrams");
var sample_base_1 = require("../common/sample-base");
var diagram;
var gameBoard = new Array(16);
var emptyIndex = 0;
var moveCount = 0;
var gameTimer = null;
var elapsedSeconds = 0;
var timeDisplay = "00:00";
var isPaused = false;
var gameStarted = false;
var showClue = false;
var isPuzzleSolved = false;
var diagramCreated = false;
var nodes = [];
// Image collections
var imageCollections = [];
var currentImageMap;
var currentThemeIndex = 0;
var imageRandom = Math.random;
// Constants
var TILE_WIDTH = 130;
var TILE_HEIGHT = 130;
var GRID_SIZE = 4;
initializeImageCollections();
initializeGame();
setupTimer();
function initializeImageCollections() {
    // bridge theme
    var bridgeTheme = {};
    // Nature theme
    var natureTheme = {};
    // Man theme
    var manTheme = {};
    for (var i = 1; i <= 16; i++) {
        var row = Math.ceil(i / 4);
        var col = ((i - 1) % 4) + 1;
        bridgeTheme[i] = "./src/diagram/Images/puzzle/bridge".concat(col, "x").concat(row, ".png");
        natureTheme[i] = "./src/diagram/Images/puzzle/image".concat(col, "x").concat(row, ".png");
        manTheme[i] = "./src/diagram/Images/puzzle/man".concat(col, "x").concat(row, ".png");
    }
    imageCollections = [bridgeTheme, natureTheme, manTheme];
    currentImageMap = imageCollections[0];
    currentThemeIndex = 0;
}
function onCreated() {
    diagramCreated = true;
    diagram.fitToPage();
}
function onLoad() {
    if (diagramCreated) {
        setTimeout(function () { return diagram.fitToPage(); }, 10);
    }
}
function createNodes() {
    nodes = [];
    // Background Node
    var backgroundNode = {
        id: "backgroundNode",
        offsetX: 788,
        offsetY: 392,
        height: 755,
        width: 639,
        style: {
            fill: "#B0C4DE",
            opacity: 0.5
        },
        constraints: ej2_react_diagrams_1.NodeConstraints.None,
        shape: {
            type: 'Basic',
            shape: 'Rectangle',
            cornerRadius: 5
        }
    };
    nodes.push(backgroundNode);
    // Moves counter node
    var moveNode = {
        id: "moves",
        offsetX: 615,
        offsetY: 80,
        width: 160, height: 100,
        constraints: ej2_react_diagrams_1.NodeConstraints.None,
        shape: {
            type: 'HTML',
            content: getMovesTemplate()
        }
    };
    nodes.push(moveNode);
    // Time node
    var timeNode = {
        id: "time",
        offsetX: 976,
        offsetY: 80,
        width: 160, height: 100,
        constraints: ej2_react_diagrams_1.NodeConstraints.None,
        shape: {
            type: 'HTML',
            content: getTimeTemplate()
        }
    };
    nodes.push(timeNode);
    // New game button
    var newGameNode = {
        id: "newgame",
        offsetX: 610,
        offsetY: 725,
        width: 150, height: 50,
        constraints: ej2_react_diagrams_1.NodeConstraints.PointerEvents,
        shape: {
            type: 'HTML',
            content: getNewGameTemplate()
        }
    };
    nodes.push(newGameNode);
    // Pause button
    var pauseNode = {
        id: "pause",
        offsetX: 980,
        offsetY: 725,
        width: 150, height: 50,
        constraints: ej2_react_diagrams_1.NodeConstraints.PointerEvents,
        shape: {
            type: 'HTML',
            content: getPauseTemplate()
        }
    };
    nodes.push(pauseNode);
    // Clue button
    var clueNode = {
        id: "clue",
        offsetX: 795,
        offsetY: 725,
        width: 150, height: 50,
        constraints: ej2_react_diagrams_1.NodeConstraints.PointerEvents,
        shape: {
            type: 'HTML',
            content: getClueTemplate()
        }
    };
    nodes.push(clueNode);
    // Create puzzle tiles
    for (var i = 0; i < gameBoard.length; i++) {
        if (gameBoard[i] !== 0) {
            var pieceNumber = gameBoard[i];
            var node = {
                id: "tile".concat(pieceNumber),
                width: TILE_WIDTH,
                height: TILE_HEIGHT,
                offsetX: getTileX(i),
                offsetY: getTileY(i),
                annotations: [{
                        id: "annotation".concat(pieceNumber),
                        width: 25,
                        height: 25,
                        template: getAnnotationTemplate(pieceNumber),
                        visibility: false,
                        offset: { x: 0.7, y: 0.1 },
                        horizontalAlignment: 'Center',
                        verticalAlignment: 'Center'
                    }],
                style: {
                    strokeColor: "white"
                },
                shape: {
                    type: 'Image',
                    source: getImageSourceForTile(pieceNumber)
                }
            };
            if (canMoveTile(i)) {
                node.constraints = ej2_react_diagrams_1.NodeConstraints.PointerEvents;
            }
            else {
                node.constraints = ej2_react_diagrams_1.NodeConstraints.None;
            }
            nodes.push(node);
        }
    }
}
function getMovesTemplate() {
    return "<div class=\"moves-counter\">\n                    <span class=\"label\">MOVES: </span>\n                    <span class=\"count\">".concat(moveCount, "</span>\n                </div>");
}
function getTimeTemplate() {
    return "<div class=\"timer\">\n                    <span class=\"label\">TIME: </span>\n                    <span class=\"time-display\">".concat(timeDisplay, "</span>\n                </div>");
}
function getNewGameTemplate() {
    return "<button class=\"new-game-btn\" id=\"newGameBtn\">\n                    <span class=\"icon\">\uD83C\uDFAE</span>\n                    NEW GAME\n                </button>";
}
function getClueTemplate() {
    return "<button class=\"clue-btn\" id=\"clueBtn\">\n                    <span class=\"icon\">\uD83D\uDCA1</span>\n                    <span class=\"text\">".concat(showClue ? "HIDE CLUE" : "SHOW CLUE", "</span>\n                </button>");
}
function getPauseTemplate() {
    return "<button class=\"pause-btn\" id=\"pauseBtn\">\n                    <span class=\"icon\">".concat(isPaused ? "▶️" : "⏸️", "</span>\n                    <span class=\"text\">").concat(isPaused ? "RESUME" : "PAUSE", "</span>\n                </button>");
}
function getAnnotationTemplate(pieceNumber) {
    return "<div class=\"number-badge\">".concat(pieceNumber, "</div>");
}
function initializeGame() {
    // Initialize solved state
    gameBoard[0] = 1;
    gameBoard[1] = 2;
    gameBoard[2] = 3;
    gameBoard[3] = 4;
    gameBoard[4] = 5;
    gameBoard[5] = 6;
    gameBoard[6] = 7;
    gameBoard[7] = 8;
    gameBoard[8] = 9;
    gameBoard[9] = 10;
    gameBoard[10] = 11;
    gameBoard[11] = 12;
    gameBoard[12] = 13;
    gameBoard[13] = 14;
    gameBoard[14] = 15;
    gameBoard[15] = 0;
    emptyIndex = 15;
    shuffleBoard();
    moveCount = 0;
    isPuzzleSolved = false;
    elapsedSeconds = 0;
    updateTimeDisplay();
    gameStarted = false;
    createNodes();
}
function setupTimer() {
    gameTimer = setInterval(function () {
        onTimerElapsed();
    }, 1000);
}
function clearTimer() {
    clearInterval(gameTimer);
}
function onTimerElapsed() {
    if (!isPaused && gameStarted && !isPuzzleSolved) {
        elapsedSeconds++;
        updateTimeDisplay();
        updateUI();
    }
}
function updateTimeDisplay() {
    var minutes = Math.floor(elapsedSeconds / 60);
    var seconds = elapsedSeconds % 60;
    timeDisplay = padZero(minutes) + ':' + padZero(seconds);
}
function padZero(num) {
    return (num < 10 ? '0' : '') + num;
}
function getTileX(index) {
    var col = index % GRID_SIZE;
    var startX = 600;
    return startX + (col * TILE_WIDTH);
}
function getTileY(index) {
    var row = Math.floor(index / GRID_SIZE);
    var startY = 200;
    return startY + (row * TILE_HEIGHT);
}
function canMoveTile(tileIndex) {
    var tileRow = Math.floor(tileIndex / 4);
    var tileCol = tileIndex % 4;
    var emptyRow = Math.floor(emptyIndex / 4);
    var emptyCol = emptyIndex % 4;
    var isVerticallyAdjacent = (Math.abs(tileRow - emptyRow) === 1 && tileCol === emptyCol);
    var isHorizontallyAdjacent = (Math.abs(tileCol - emptyCol) === 1 && tileRow === emptyRow);
    return isVerticallyAdjacent || isHorizontallyAdjacent;
}
function addFinalPiece() {
    var finalPiece = {
        id: "tile16final",
        width: 130,
        height: 130,
        offsetX: getTileX(15),
        offsetY: getTileY(15),
        style: {
            fill: "transparent",
            strokeColor: "#FFD700",
            strokeWidth: 4
        },
        shape: {
            type: 'Image',
            source: getImageSourceForTile(16)
        },
        annotations: [{
                id: "annotation16",
                width: 25,
                height: 25,
                template: getAnnotationTemplate(16),
                offset: { x: 0.7, y: 0.1 },
                horizontalAlignment: 'Center',
                verticalAlignment: 'Center'
            }],
        constraints: ej2_react_diagrams_1.NodeConstraints.None
    };
    diagram.add(finalPiece);
}
function checkPuzzleSolved() {
    var solved = true;
    for (var i = 0; i < 15; i++) {
        if (gameBoard[i] !== i + 1) {
            solved = false;
            break;
        }
    }
    if (solved && gameBoard[15] !== 0) {
        solved = false;
    }
    if (solved && emptyIndex === 15) {
        isPuzzleSolved = true;
        if (gameTimer) {
            clearInterval(gameTimer);
        }
        addFinalPiece();
        showCompletionMessage();
    }
}
function moveTileToEmptySpace(tileNumber) {
    var tileIndex = gameBoard.indexOf(tileNumber);
    if (!canMoveTile(tileIndex))
        return;
    if (!gameStarted) {
        gameStarted = true;
        elapsedSeconds = 0;
        updateTimeDisplay();
    }
    var oldEmptyIndex = emptyIndex;
    gameBoard[emptyIndex] = tileNumber;
    gameBoard[tileIndex] = 0;
    emptyIndex = tileIndex;
    moveCount++;
    var node = diagram.getObject("tile".concat(tileNumber));
    if (node) {
        node.offsetX = getTileX(oldEmptyIndex);
        node.offsetY = getTileY(oldEmptyIndex);
        diagram.dataBind();
    }
    enableAdjacentNodes();
    checkPuzzleSolved();
    updateUI();
}
function newGame() {
    if (gameTimer) {
        clearInterval(gameTimer);
    }
    selectRandomImageCollection();
    moveCount = 0;
    elapsedSeconds = 0;
    gameStarted = false;
    isPaused = false;
    isPuzzleSolved = false;
    showClue = false;
    // Reset board
    gameBoard[0] = 1;
    gameBoard[1] = 2;
    gameBoard[2] = 3;
    gameBoard[3] = 4;
    gameBoard[4] = 5;
    gameBoard[5] = 6;
    gameBoard[6] = 7;
    gameBoard[7] = 8;
    gameBoard[8] = 9;
    gameBoard[9] = 10;
    gameBoard[10] = 11;
    gameBoard[11] = 12;
    gameBoard[12] = 13;
    gameBoard[13] = 14;
    gameBoard[14] = 15;
    gameBoard[15] = 0;
    emptyIndex = 15;
    updateTimeDisplay();
    shuffleBoard();
    clearDiagramNodes();
    createNodes();
    diagram.nodes = nodes;
    enableAdjacentNodes();
    setupTimer();
    updateUI();
}
function shuffleBoard() {
    for (var i = 0; i < 1000; i++) {
        var validMoves = getValidMoves();
        if (validMoves.length > 0) {
            var randomMove = validMoves[Math.floor(imageRandom() * validMoves.length)];
            gameBoard[emptyIndex] = gameBoard[randomMove];
            gameBoard[randomMove] = 0;
            emptyIndex = randomMove;
        }
    }
}
function getValidMoves() {
    var validMoves = [];
    var emptyRow = Math.floor(emptyIndex / 4);
    var emptyCol = emptyIndex % 4;
    var directions = [-4, 4, -1, 1];
    for (var _i = 0, directions_1 = directions; _i < directions_1.length; _i++) {
        var dir = directions_1[_i];
        var newIndex = emptyIndex + dir;
        if (newIndex >= 0 && newIndex < 16) {
            var newRow = Math.floor(newIndex / 4);
            var newCol = newIndex % 4;
            if ((dir === -1 || dir === 1) && Math.abs(newRow - emptyRow) === 0 && Math.abs(newCol - emptyCol) === 1) {
                validMoves.push(newIndex);
            }
            else if ((dir === -4 || dir === 4) && Math.abs(newRow - emptyRow) === 1 && Math.abs(newCol - emptyCol) === 0) {
                validMoves.push(newIndex);
            }
        }
    }
    return validMoves;
}
function togglePause() {
    isPaused = !isPaused;
    if (isPaused) {
        if (gameTimer) {
            clearInterval(gameTimer);
        }
        disableAllNodes();
    }
    else {
        setupTimer();
        enableAdjacentNodes();
    }
    updateUI();
}
function disableAllNodes() {
    var _a;
    for (var _i = 0, _b = diagram.nodes; _i < _b.length; _i++) {
        var node = _b[_i];
        if ((_a = node.id) === null || _a === void 0 ? void 0 : _a.startsWith("tile")) {
            node.constraints = ej2_react_diagrams_1.NodeConstraints.None;
        }
    }
    diagram.dataBind();
}
function clearDiagramNodes() {
    if (diagram) {
        var existingNodes = __spreadArray([], diagram.nodes, true);
        for (var _i = 0, existingNodes_1 = existingNodes; _i < existingNodes_1.length; _i++) {
            var node = existingNodes_1[_i];
            diagram.remove(node);
        }
    }
    nodes = [];
}
function enableAdjacentNodes() {
    var _a;
    for (var _i = 0, _b = diagram.nodes; _i < _b.length; _i++) {
        var node = _b[_i];
        if ((_a = node.id) === null || _a === void 0 ? void 0 : _a.startsWith("tile")) {
            var tileNumber = parseInt(node.id.substring(4));
            var tileIndex = gameBoard.indexOf(tileNumber);
            if (canMoveTile(tileIndex)) {
                node.constraints = ej2_react_diagrams_1.NodeConstraints.PointerEvents;
            }
            else {
                node.constraints = ej2_react_diagrams_1.NodeConstraints.None;
            }
        }
    }
    diagram.dataBind();
}
function toggleClue() {
    showClue = !showClue;
    for (var _i = 0, _a = diagram.nodes; _i < _a.length; _i++) {
        var node = _a[_i];
        if (node.annotations && node.annotations.length > 0) {
            node.annotations[0].visibility = showClue;
        }
    }
    diagram.dataBind();
    updateUI();
}
function selectRandomImageCollection() {
    if (imageCollections.length > 1) {
        var newIndex = void 0;
        do {
            newIndex = Math.floor(imageRandom() * imageCollections.length);
        } while (newIndex === currentThemeIndex);
        currentThemeIndex = newIndex;
        currentImageMap = imageCollections[currentThemeIndex];
    }
}
function getImageSourceForTile(tileNumber) {
    return currentImageMap && currentImageMap[tileNumber]
        ? currentImageMap[tileNumber]
        : "";
}
function showCompletionMessage() {
    var winDialog = document.getElementById('winDialog');
    var finalMoves = document.getElementById('finalMoves');
    debugger;
    if (winDialog) {
        winDialog.style.display = 'flex';
    }
    if (finalMoves) {
        finalMoves.textContent = moveCount.toString();
    }
}
function closeWinDialog() {
    var winDialog = document.getElementById('winDialog');
    if (winDialog) {
        winDialog.style.display = 'none';
    }
    newGame();
}
function updateUI() {
    // Update moves counter
    var moveNode = diagram.getObject('moves');
    if (moveNode && moveNode.shape && moveNode.shape.content) {
        moveNode.shape.content = getMovesTemplate();
    }
    // Update timer
    var timeNode = diagram.getObject('time');
    if (timeNode && timeNode.shape && timeNode.shape.content) {
        timeNode.shape.content = getTimeTemplate();
    }
    // Update pause button
    var pauseNode = diagram.getObject('pause');
    if (pauseNode && pauseNode.shape && pauseNode.shape.content) {
        pauseNode.shape.content = getPauseTemplate();
    }
    // Update clue button
    var clueNode = diagram.getObject('clue');
    if (clueNode && clueNode.shape && clueNode.shape.content) {
        clueNode.shape.content = getClueTemplate();
    }
    diagram.dataBind();
}
function click(args) {
    var _a;
    if (args.actualObject instanceof ej2_react_diagrams_1.Node) {
        var node = args.actualObject;
        if (node.id === 'newgame') {
            newGame();
        }
        else if (node.id === 'pause') {
            togglePause();
        }
        else if (node.id === 'clue') {
            toggleClue();
        }
        else if ((_a = node.id) === null || _a === void 0 ? void 0 : _a.startsWith("tile")) {
            if (isPaused || isPuzzleSolved)
                return;
            if (!gameStarted) {
                gameStarted = true;
                elapsedSeconds = 0;
                updateTimeDisplay();
            }
            var nodeId = node.id;
            if (nodeId === null || nodeId === void 0 ? void 0 : nodeId.startsWith("tile")) {
                var tileNumber = parseInt(nodeId.substring(4));
                moveTileToEmptySpace(tileNumber);
            }
        }
    }
}
function InteractiveImagePuzzle() {
    React.useEffect(function () {
        (0, sample_base_1.updateSampleSection)();
        setTimeout(function () {
            document.getElementById('winClose').addEventListener('click', function () { return closeWinDialog(); });
        }, 1000);
        return function () {
            clearTimer();
        };
    }, []);
    return (React.createElement("div", { className: "control-pane diagram-puzzle-container" },
        React.createElement("style", null, SAMPLE_CSS),
        React.createElement("div", { className: "control-section" },
            React.createElement("div", { className: "content-wrapper", style: { width: '100%' } },
                React.createElement(ej2_react_diagrams_1.DiagramComponent, { id: "diagram", ref: function (diagramref) { return (diagram = diagramref); }, height: "800px", nodes: nodes, snapSettings: {
                        constraints: ej2_react_diagrams_1.SnapConstraints.None
                    }, selectedItems: {
                        constraints: ej2_react_diagrams_1.SelectorConstraints.None
                    }, click: click, created: onCreated, load: onLoad, className: "puzzle-diagram" }),
                React.createElement("div", { id: "winDialog", style: {
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'rgba(0,0,0,0.7)',
                        display: 'none',
                        justifyContent: 'center',
                        alignItems: 'center',
                        zIndex: 1000
                    } },
                    React.createElement("div", { style: {
                            background: '#2c2c2c',
                            padding: '40px',
                            borderRadius: '20px',
                            textAlign: 'center',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
                            color: 'white',
                            fontFamily: 'Arial, sans-serif',
                            position: 'relative',
                            display: 'inline-block'
                        } },
                        React.createElement("div", { id: "winClose", style: {
                                position: 'absolute',
                                top: '15px',
                                right: '20px',
                                fontSize: '24px',
                                cursor: 'pointer',
                                color: '#ccc'
                            }, title: "Close", onClick: closeWinDialog }, "\u2715"),
                        React.createElement("div", { style: { fontSize: '80px', marginBottom: '20px' } }, "\uD83C\uDF89"),
                        React.createElement("h1", { style: { color: 'white', marginBottom: '20px', fontSize: '36px', fontWeight: 'bold' } }, "Congratulations!"),
                        React.createElement("p", { style: { color: '#ccc', fontSize: '18px', marginBottom: '30px' } },
                            "you did it in ",
                            React.createElement("span", { id: "finalMoves" }, moveCount),
                            " steps in ",
                            timeDisplay))))),
        React.createElement("div", { id: "action-description" },
            React.createElement("p", null,
                "This sample showcases an interactive sliding image puzzle game built using the Syncfusion",
                React.createElement("sup", null, "\u00AE"),
                " EJ2 Diagram component, transforming images into a 4x4 grid of draggable tiles, with features like move and time tracking.")),
        React.createElement("div", { id: "description" },
            React.createElement("p", null, "This interactive 4x4 sliding image puzzle challenges users to reconstruct an image by moving tiles adjacent to an empty space. The game dynamically tracks moves and time, offering multiple image themes, pause/resume functionality, and a \"Clue\" option. A congratulatory message with statistics appears upon puzzle completion."))));
}
exports.default = InteractiveImagePuzzle;
var SAMPLE_CSS = "\n    .diagram-puzzle-container .timer {\n        display: flex;\n        align-items: center;\n        background: linear-gradient(135deg, #2196F3 0%, #1976D2 100%);\n        color: white;\n        padding: 10px 20px;\n        border-radius: 14px;\n        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1), 0 0 15px rgba(173, 216, 230, 0.2);\n        border: 1px solid rgba(33, 150, 243, 0.3);\n        transition: all 0.2s ease-in-out;\n        gap: 10px;\n    }\n\n    .diagram-puzzle-container .moves-counter {\n        display: flex;\n        align-items: center;\n        background: linear-gradient(135deg, #4CAF50 0%, #45a049 100%);\n        color: white;\n        padding: 10px 20px;\n        border-radius: 14px;\n        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1), 0 0 15px rgba(144, 238, 144, 0.2);\n        border: 1px solid rgba(76, 175, 80, 0.3);\n        transition: all 0.2s ease-in-out;\n        gap: 10px;\n    }\n\n    .diagram-puzzle-container .moves-counter .label,\n    .diagram-puzzle-container .timer .label {\n        font-weight: 700;\n        text-transform: uppercase;\n        font-size: 15px;\n        color: white;\n    }\n\n    .diagram-puzzle-container .moves-counter .count,\n    .diagram-puzzle-container .timer .time-display {\n        font-size: 18px;\n        font-weight: 700;\n        letter-spacing: 0.5px;\n        color: white;\n    }\n\n    .diagram-puzzle-container .pause-btn {\n        background-color: #2196F3;\n        color: white;\n        border: none;\n        border-radius: 12px;\n        padding: 12px 24px;\n        font-size: 14px;\n        font-weight: bold;\n        cursor: pointer;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        width: 150px;\n        gap: 8px;\n        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n        transition: background-color 0.3s ease;\n    }\n\n    .diagram-puzzle-container .pause-btn:hover {\n        background-color: #1976D2;\n    }\n\n    .diagram-puzzle-container .pause-btn .icon {\n        font-size: 16px;\n    }\n\n    .diagram-puzzle-container .new-game-btn {\n        background-color: #4CAF50;\n        color: white;\n        border: none;\n        border-radius: 12px;\n        padding: 12px 24px;\n        font-size: 14px;\n        font-weight: bold;\n        cursor: pointer;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        width: 150px;\n        gap: 8px;\n        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n        transition: background-color 0.3s ease;\n        white-space: nowrap;\n    }\n\n    .diagram-puzzle-container .new-game-btn:hover {\n        background-color: #45a049;\n    }\n\n    .diagram-puzzle-container .new-game-btn .icon {\n        font-size: 16px;\n    }\n\n    .diagram-puzzle-container .number-badge {\n        display: inline-flex;\n        align-items: center;\n        justify-content: center;\n        margin-top: 2px;\n        margin-left: 2px;\n        width: 40px;\n        height: 40px;\n        border-radius: 50%;\n        background: linear-gradient(135deg, #333333 0%, #000000 100%);\n        border: 3px solid #666;\n        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5), inset 0 2px 4px rgba(255, 255, 255, 0.2), inset 0 -2px 4px rgba(0, 0, 0, 0.8);\n        font-family: 'Arial Black', Arial, sans-serif;\n        font-size: 18px;\n        font-weight: bold;\n        color: white;\n        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8), -1px -1px 1px rgba(255, 255, 255, 0.1);\n        position: relative;\n        overflow: hidden;\n    }\n\n    .diagram-puzzle-container .number-badge::before {\n        content: '';\n        position: absolute;\n        top: -50%;\n        left: -50%;\n        width: 200%;\n        height: 200%;\n        background: linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.1) 50%, transparent 70%);\n        transform: rotate(45deg);\n        pointer-events: none;\n    }\n\n    .diagram-puzzle-container .game-button {\n        padding: 12px 24px;\n        border: none;\n        border-radius: 8px;\n        font-size: 16px;\n        font-weight: 600;\n        cursor: pointer;\n        transition: all 0.3s ease;\n        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n        text-transform: uppercase;\n        letter-spacing: 1px;\n        min-width: 140px;\n        position: relative;\n        overflow: hidden;\n    }\n\n    .diagram-puzzle-container .game-button::before {\n        content: '';\n        position: absolute;\n        top: 0;\n        left: -100%;\n        width: 100%;\n        height: 100%;\n        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);\n        transition: left 0.5s;\n    }\n\n    .diagram-puzzle-container .game-button:hover::before {\n        left: 100%;\n    }\n\n    .diagram-puzzle-container .new-game-btn {\n        background: linear-gradient(135deg, #4CAF50 0%, #45a049 100%);\n        color: white;\n        border: 2px solid #45a049;\n    }\n\n    .diagram-puzzle-container .new-game-btn:hover {\n        background: linear-gradient(135deg, #45a049 0%, #3d8b40 100%);\n        transform: translateY(-2px);\n        box-shadow: 0 6px 12px rgba(76, 175, 80, 0.4);\n    }\n\n    .diagram-puzzle-container .new-game-btn:active {\n        transform: translateY(0);\n        box-shadow: 0 2px 4px rgba(76, 175, 80, 0.4);\n    }\n\n    .diagram-puzzle-container .pause-btn {\n        background: linear-gradient(135deg, #2196F3 0%, #1976D2 100%);\n        color: white;\n        border: 2px solid #1976D2;\n    }\n\n    .diagram-puzzle-container .pause-btn:hover {\n        background: linear-gradient(135deg, #1976D2 0%, #1565C0 100%);\n        transform: translateY(-2px);\n        box-shadow: 0 6px 12px rgba(33, 150, 243, 0.4);\n    }\n\n    .diagram-puzzle-container .pause-btn:active {\n        transform: translateY(0);\n        box-shadow: 0 2px 4px rgba(33, 150, 243, 0.4);\n    }\n\n    .diagram-puzzle-container .game-button:disabled {\n        opacity: 0.6;\n        cursor: not-allowed;\n        transform: none !important;\n    }\n\n    .diagram-puzzle-container .game-button:disabled:hover {\n        transform: none;\n        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n    }\n\n    .diagram-puzzle-container .puzzle-tile {\n        position: relative;\n        width: 90px;\n        height: 90px;\n        background: linear-gradient(135deg, #d4a574 0%, #c49660 50%, #b8864d 100%);\n        border: 3px solid #8b6914;\n        border-radius: 8px;\n        box-shadow: inset 2px 2px 4px rgba(255, 255, 255, 0.3), inset -2px -2px 4px rgba(0, 0, 0, 0.2), 2px 2px 8px rgba(0, 0, 0, 0.3);\n        cursor: pointer;\n        transition: all 0.2s ease;\n        overflow: hidden;\n    }\n\n    .diagram-puzzle-container .puzzle-tile:hover {\n        transform: translateY(-2px);\n        box-shadow: inset 2px 2px 4px rgba(255, 255, 255, 0.4), inset -2px -2px 4px rgba(0, 0, 0, 0.3), 2px 4px 12px rgba(0, 0, 0, 0.4);\n    }\n\n    .diagram-puzzle-container .puzzle-tile.selected {\n        border-color: #ffd700;\n        box-shadow: 0 0 0 3px #ffd700, inset 2px 2px 4px rgba(255, 255, 255, 0.4), inset -2px -2px 4px rgba(0, 0, 0, 0.3), 2px 4px 12px rgba(255, 215, 0, 0.5);\n    }\n\n    .diagram-puzzle-container .tile-content {\n        position: relative;\n        width: 100%;\n        height: 100%;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        background: repeating-linear-gradient( 90deg, transparent, transparent 1px, rgba(139, 105, 20, 0.1) 1px, rgba(139, 105, 20, 0.1) 2px ), repeating-linear-gradient( 0deg, transparent, transparent 1px, rgba(139, 105, 20, 0.1) 1px, rgba(139, 105, 20, 0.1) 2px );\n    }\n\n    .diagram-puzzle-container .tile-number {\n        font-family: 'Arial Black', Arial, sans-serif;\n        font-size: 32px;\n        font-weight: bold;\n        color: #4a3728;\n        text-shadow: 1px 1px 0px rgba(255, 255, 255, 0.3), -1px -1px 0px rgba(0, 0, 0, 0.3);\n        user-select: none;\n    }\n\n    .diagram-puzzle-container .tile-highlight {\n        position: absolute;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        background: linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, transparent 50%);\n        pointer-events: none;\n        border-radius: 5px;\n    }\n\n    .diagram-puzzle-container .puzzle-tile::before {\n        content: '';\n        position: absolute;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        background-image: radial-gradient(circle at 20% 50%, rgba(139, 105, 20, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(139, 105, 20, 0.1) 0%, transparent 50%), radial-gradient(circle at 40% 80%, rgba(139, 105, 20, 0.1) 0%, transparent 50%);\n        pointer-events: none;\n        border-radius: 5px;\n    }\n\n    .diagram-puzzle-container .puzzle-tile.disabled {\n        opacity: 0.6;\n        cursor: not-allowed;\n        transform: none !important;\n    }\n\n    .diagram-puzzle-container .puzzle-tile.disabled:hover {\n        transform: none;\n        box-shadow: inset 2px 2px 4px rgba(255, 255, 255, 0.3), inset -2px -2px 4px rgba(0, 0, 0, 0.2), 2px 2px 8px rgba(0, 0, 0, 0.3);\n    }\n\n    .diagram-puzzle-container .diagram-panel {\n        width: 100%;\n        height: 100%;\n        background: linear-gradient(135deg, #20B2AA 0%, #7B68EE 100%);\n        border-radius: 20px;\n        margin-right: 20px;\n        box-shadow: 0 15px 35px rgba(32, 178, 170, 0.4);\n        position: relative;\n        overflow: hidden;\n    }\n\n    .diagram-puzzle-container .diagram-panel::before {\n        content: '';\n        position: absolute;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        background-image: radial-gradient(circle, rgba(255, 255, 255, 0.1) 1px, transparent 1px);\n        background-size: 30px 30px;\n        pointer-events: none;\n    }\n\n    .diagram-puzzle-container .clue-btn {\n        background: linear-gradient(135deg, #FF9800 0%, #F57C00 100%);\n        color: white;\n        border: 2px solid #F57C00;\n        border-radius: 12px;\n        padding: 12px 24px;\n        font-size: 14px;\n        font-weight: bold;\n        cursor: pointer;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        width: 150px;\n        gap: 8px;\n        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n        transition: all 0.3s ease;\n        white-space: nowrap;\n    }\n\n    .diagram-puzzle-container .clue-btn:hover {\n        background: linear-gradient(135deg, #F57C00 0%, #E65100 100%);\n        transform: translateY(-2px);\n        box-shadow: 0 6px 12px rgba(255, 152, 0, 0.4);\n    }\n\n    .diagram-puzzle-container .clue-btn:active {\n        transform: translateY(0);\n        box-shadow: 0 2px 4px rgba(255, 152, 0, 0.4);\n    }\n\n    .diagram-puzzle-container .clue-btn .icon {\n        font-size: 16px;\n    }\n\n    .diagram-puzzle-container .puzzle-diagram .e-diagram-selector {\n        stroke-width: 0;\n    }\n";
