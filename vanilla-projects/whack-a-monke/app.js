const scoreElem = document.getElementById("score");
const timerElem = document.getElementById("timer");
const resetBtn = document.getElementById("reset-game");
const startBtn = document.getElementById("start-game");
const gridContainer = document.querySelector(".grid-container");

const n = 3;
let timerId = null;
let score = 0;
let timeRemaining = 30;
let isClicked = false;

function init() {
    for (let i = 0; i < n*n; i++) {
        const cell = document.createElement("div");
        cell.classList.add("grid-cell");
        cell.setAttribute(`data-position`, i);
        gridContainer.style.gridTemplateColumns = `repeat(${n}, auto)`
        gridContainer.append(cell);
    }
    resetBtn.disabled = true;
    timerElem.querySelector("span").textContent = timeRemaining;
}

gridContainer.addEventListener("click", (e) => {
    if (isClicked) return;

    const cell = e.target;
    if (cell.classList.contains("monke")) {
        score += 1;
        isClicked = true;
        scoreElem.querySelector("span").textContent = score;
        cell.classList.remove("monke")
    }
});

function startGame() {
    resetBtn.disabled = false;
    startBtn.disabled = true;

    timerId = setInterval(function() {
        // Show and hide Monke on a random cell
        const randomCell = Math.floor(Math.random()*n*n);
        randomGridElem = document.querySelector(`[data-position='${randomCell}']`);
        randomGridElem.classList.add("monke");
        setTimeout(function() {
            randomGridElem.classList.remove("monke");
            isClicked = false;
        }, 800);

        // Update Timer
        timeRemaining -= 1;
        timerElem.querySelector("span").textContent = timeRemaining;

        // Check if time is up
        if (timeRemaining === -1) {
            clearInterval(timerId);
            gameOver();
        }
    }, 1000);
};

function resetGame() {
    if (timerId) {
        clearInterval(timerId);
        timerId = null;
    }
    score = 0;
    timeRemaining = 30;
    isClicked = false;
    startBtn.disabled = false;
    resetBtn.disabled = true;
    timerElem.querySelector("span").textContent = timeRemaining;
    scoreElem.querySelector("span").textContent = score;
};

function gameOver() {
    resetBtn.disabled = true;
    startBtn.disabled = true;
    alert(`Game Over! Your final score is ${score} *slow claps*`);

    // Reset Everything Back
    resetGame()
};

init();