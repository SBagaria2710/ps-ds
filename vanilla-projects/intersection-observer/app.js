const DEFAULT_CARD_COUNT = 5;
const bodyElem = document.querySelector("body");

let options = {
    root: null,
    threshold: 0.1
};

let observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("peekaboo");
        } else {
            entry.target.classList.remove("peekaboo");
        }
    });
}, options);

function init(num = DEFAULT_CARD_COUNT) {
    const containerElem = document.createElement("div");
    containerElem.classList.add("container");
    for (let i = 0; i < num; i++) {
        // Create a card
        const cardElem = document.createElement("div");
        cardElem.classList.add("card");
        const strongElem = document.createElement("strong");
        const newContent = document.createTextNode(`Card Number: ${i + 1}`);
        strongElem.appendChild(newContent);
        cardElem.appendChild(strongElem);

        // Observing intersection
        observer.observe(cardElem);

        // Append card on container
        containerElem.appendChild(cardElem);
    }

    // Append containerElem on body
    bodyElem.appendChild(containerElem);
}

init(25);