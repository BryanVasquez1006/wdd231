import { places } from "./places.mjs";
const cardArticle = document.querySelector("#cardArticle")
const placesInfo = places

function createPlacesCard() {
    placesInfo.forEach(place => {
        const cardCont = document.createElement("div");
        cardCont.setAttribute("class", "places-card");
        cardArticle.appendChild(cardCont);

        cardCont.innerHTML = `
        <h2 class="card-name">${place.name}</h2>
        <img src="./images/${place.image}" alt="${place.name}" class="card-img" load="lazy">
        <figcaption>${place.name}</figcaption>
        <address>${place.address}</address>
        <p class="card-desc">${place.description}</p>
        <button class="card-button">Learn More</button>
        `;

    });
};

createPlacesCard(placesInfo);


//logic for the Local Storage section

const visitMsgElem = document.querySelector("#visitMessage");

function displayVisitMessage() {
    const lastVisit = localStorage.getItem("lastVisit");
    const now = Date.now()

    if (!lastVisit) {
        //First visit
        visitMsgElem.textContent = "Welcome! Let us know if you have any questions."

    }else{
        const daysDiff = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));

        if (daysDiff < 1) {
            visitMsgElem.textContent = "Back so soon! Awesome!"
        }else if (daysDiff === 1){
            visitMsgElem.textContent = "Your last visited 1 day ago!";
        } else {
            visitMsgElem.textContent `You last visited ${daysDiff} days ago.`;
        }
    }

    //update localStorage for the next visit
    localStorage.setItem("lastVisit", now);
}

displayVisitMessage();