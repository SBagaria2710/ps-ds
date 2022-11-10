const DEFAULT_CARD_COUNT = 5;
const bodyElem = document.querySelector("body");

function init(num = DEFAULT_CARD_COUNT) {
    const containerElem = document.createElement("div");
    containerElem.classList.add("container");
    for (let i = 0; i < num; i++) {
        // Create a card
        const cardElem = document.createElement("div");
        cardElem.classList.add("card");
        const newContent = document.createTextNode(`Card Number: ${i + 1}`);
        cardElem.appendChild(newContent);

        // Append card on container
        containerElem.appendChild(cardElem);
    }

    // Append containerElem on body
    bodyElem.appendChild(containerElem);
}

document.addEventListener("scroll", () => {
    console.log(bodyElem.getBoundingClientRect())
});

init();