const resetBtn = document.getElementById("reset");
const playerTurnText = document.getElementById("playerTurn");
const result = document.getElementById("gameResult");
const gameOverMessage = document.getElementById("gameOver");

let xTurn = null;
let xState = [];
let oState = [];
const WINNING_STATES = [
    // ROWS
    [0, 1, 2], 
    [3, 4, 5],
    [6, 7, 8],

    // COLUMNS
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    // DIAGONALS
    [0, 4, 8],
    [2, 4, 6]
];

function init() {
    result.style.visibility = "hidden";
    xTurn = Math.floor(Math.random() * 2);
    resetBtn.classList.remove("myMoneyDont");
    gameOverMessage.style.visibility = "hidden";
    updateTurnText();
}

function updateTurnText() {
    playerTurnText.innerHTML = `<span>Turn</span>: Player ${xTurn ? "X" : "O"}`;
}

document.addEventListener("click", (event) => {
    const cell = event.target;
    const isCell = cell.classList.contains('grid-cell');
    const isDisabled = cell.classList.contains('disabled');

    if (isCell && !isDisabled) {
        const cellValue = Number(cell.dataset.value);
        cell.classList.add("disabled");
        cell.classList.add(xTurn ? "x" : "o");
        xTurn ? xState.push(cellValue) : oState.push(cellValue);
        xTurn = !xTurn;

        updateTurnText();
        setTimeout(checkForWin, 0);
    }
});

function resetGame() {
    result.style.visibility = "hidden";
    gameOverMessage.style.visibility = "hidden";
    playerTurnText.style.visibility = "visible";
    document.querySelectorAll(".grid-cell").forEach(cell => {
        cell.classList.remove("disabled", "x", "o");
    });
    resetBtn.classList.remove("myMoneyDont");
    xTurn = Math.floor(Math.random() * 2);
    xState = [];
    oState = [];
}

function checkForDraw() {
    if (!document.querySelectorAll('.grid-cell:not(.disabled)').length) {
        result.style.visibility = "visible";
        result.innerHTML = `<span>Result</span>: Draw!`;

        gameOverMessage.style.visibility = "visible";
        gameOverMessage.textContent = "Start a new game";

        playerTurnText.style.visibility = "hidden";

        resetBtn.classList.add("myMoneyDont");
        
    }
}

function checkForWin() {
    let xWins = false, oWins = false, hasSomeoneWon = false, winBlocks = [];
    WINNING_STATES.some(winState => {
        winBlocks = [];
        xWins = winState.every(value => xState.includes(value));
        oWins = winState.every(value => oState.includes(value));
        
        hasSomeoneWon = xWins || oWins;
        if (hasSomeoneWon) winBlocks = winState;

        return hasSomeoneWon;
    });


    if (hasSomeoneWon) {
        result.style.visibility = "visible";
        result.innerHTML = `<span>Result</span>: ${xWins ? "X" : "O"} Wins!`;

        gameOverMessage.style.visibility = "visible";
        gameOverMessage.textContent = "Start a new game";

        playerTurnText.style.visibility = "hidden";

        document.querySelectorAll(".grid-cell").forEach(cell => {
            cell.classList.add('disabled');

            const cellValue = Number(cell.dataset.value);
            if (winBlocks.includes(cellValue)) {
                cell.classList.add('ghoomer');
            }
        });
        
        resetBtn.classList.add("myMoneyDont");
    } else {
        checkForDraw();
    }
}

init();