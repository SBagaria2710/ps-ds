const scoreElem = document.getElementById("score");
const timerElem = document.getElementById("timer");
const resetBtn = document.getElementById("reset-game");
const startBtn = document.getElementById("start-game");
const gridContainer = document.querySelector(".grid-container");
const audioElem = document.getElementById("audio");
const leaderboardElem = document.getElementById("leaderboard");

const n = 3;
let timerId = null;
let score = 0;
let timeRemaining = 30;
let isClicked = false;
const currentLeaderboard = getLeaderboard();

const finishAudio = "https://assets.mixkit.co/sfx/preview/mixkit-cartoon-monkey-applause-103.mp3";
const gameStartAudio = "https://assets.mixkit.co/sfx/preview/mixkit-cartoon-monkey-mocking-laugh-107.mp3";

function getLeaderboard() {
    const leaderboard = JSON.parse(localStorage.getItem("leaderboard"));
    return leaderboard || [];
}

function setLeaderboard(score) {
    currentLeaderboard.push({ score, timestamp: new Date() });
    currentLeaderboard.sort((a, b) => a.score - b.score);
    const trimmedLeaderboard = currentLeaderboard.slice(0, 5);

    localStorage.setItem("leaderboard", JSON.stringify(trimmedLeaderboard));
};

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

    // Prepare leaderboard
    if (currentLeaderboard.length === 0) {
        leaderboardElem.style.display = "none";
    } else {
        for (let i = 0; i < currentLeaderboard.length; i++) {
            const { score, timestamp } = currentLeaderboard[i];

            const rowElem = document.createElement("tr");
            const date = new Date(timestamp);
            const dateStr = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
            rowElem.innerHTML = `<td>${score}</td><td>${dateStr}</td>`
            leaderboardElem.firstElementChild.appendChild(rowElem);
        }
    }
}

gridContainer.addEventListener("click", (e) => {
    if (isClicked || !timerId) return;

    const cell = e.target;
    score = cell.classList.contains("monke") ? score + 1 : score - 1;

    isClicked = true;
    scoreElem.querySelector("span").textContent = score;
    cell.classList.remove("monke")
});

function startGame() {
    audioElem.src = gameStartAudio;
    audioElem.play();

    resetBtn.disabled = false;
    startBtn.disabled = true;

    timerId = setInterval(function() {
        // Show and hide Monke on a random cell
        const randomCell = Math.floor(Math.random()*n*n);
        randomGridElem = document.querySelector(`[data-position='${randomCell}']`);
        randomGridElem.classList.add("monke");
      
        // Timeout will go from 950ms to ~650ms
        const progressiveTimeout = 950 - (11.5*(30 - timeRemaining));
        setTimeout(function() {
            randomGridElem.classList.remove("monke");
            isClicked = false;
        }, progressiveTimeout);

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
    audioElem.src = finishAudio;
    audioElem.play();

    if (timerId) {
        clearInterval(timerId);
        timerId = null;
    }

    setLeaderboard(score);
    resetBtn.disabled = true;
    startBtn.disabled = true;
    alert(`Game Over! Your final score is ${score} *slow claps*`);

    // Reset Everything Back
    resetGame()
};

init();