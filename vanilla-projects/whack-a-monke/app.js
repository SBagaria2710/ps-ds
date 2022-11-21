const scoreElem = document.getElementById("score");
const timerElem = document.getElementById("timer");
const initCta = document.getElementById("initCta");
const gridElem = document.querySelector(".grid");

const MAX_SIZE = 5;
const n = 3;
let timerId = null;
let score = 0;
let count = 0;

function init(n) {
    if (n > MAX_SIZE) n = 5;
    for (let i = 1; i <= n*n; i++) {
        const cell = document.createElement("div");
        cell.classList.add("grid-cell");
        cell.setAttribute(`data-position`, i);
        gridElem.style.gridTemplateColumns = `repeat(${n}, auto)`
        gridElem.append(cell);
    }
}

gridElem.addEventListener("click", (e) => {
    const cell = e.target;
    console.log(cell.dataset.position);
    if (cell.classList.contains("monke")) {
        score += 1;
        scoreElem.textContent = score;
    }
});

function startGame() {
    let elem;
    timerId = setInterval(function() {
        if (!!elem) {
            elem.classList.remove("monke");
        }
        if (count === 5 && timerId) {
            clearInterval(timerId);
        }

        elem = document.querySelector(`[data-position='${Math.floor(Math.random()*n*n)}']`);
        elem.classList.add("monke");
        count = count + 1;
    }, 2000);
}

init(n);