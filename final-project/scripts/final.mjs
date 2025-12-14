import { plans } from "./plans.mjs";

const cardContainer = document.querySelector('#plans');
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=13.68&lon=89.18&appid=fbc96fe3d923af47bfc682188e61e0cd&units=metric';
if (cardContainer) {
  DisplayPlans(plans);
}

//fetching weather:
async function apiFetch(apiURL) {
  try {
    const response = await fetch(apiURL);
    if (response.ok) {
      const data = await response.json();
      displayWeather(data);
      console.log(data)
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log("Weather API error:", error);
  }
}

apiFetch(url);

  // Dynamic footer
  
    function lastUpdateFooter() {
    const current = document.querySelector("#currentyear");
    const lastM = document.querySelector("#lastModified");
    
    const lastModif = new Date(document.lastModified);
    const today = new Date();
  
    lastM.innerHTML = `Last modified: ${new Intl.DateTimeFormat("en-US", {
      dateStyle: "short",
      timeStyle: "short"
    }).format(lastModif)}`;
    current.innerHTML = today.getFullYear();
  }
  lastUpdateFooter();

  //LOGIC FOR THE HAMBURGER MENU

const hamBtn = document.querySelector("#ham-btn");
const navBar = document.querySelector("#nav-bar");

hamBtn.addEventListener("click", () => {
    hamBtn.classList.toggle('show');
    navBar.classList.toggle('show');
})


// creating cards for the plans


function DisplayPlans(plansInfo) {

    plansInfo.forEach(plan => {
        const article = document.createElement("article");
        article.classList.add("plansContainer");

        //Generating lists for the benefits:

        const benefitsList = plan.benefits.map(benefit => `<li>${benefit}</li>`).join("");

        //Unique IDs per plan:

        const dialogId = `dialog-${plan.id}`;
        const btnId = `btn-${plan.id}`;

        article.innerHTML = `
            <h1 class="planName">${plan.name}</h1>
            <img src="${plan.image}" alt="" class="planImg">
            <p class="planDescr">${plan.description}</p>
            <div class="planPriceCont">
                <p class="planPrice">$${plan.price}</p>
                <span> ${plan.billingPeriod}</span>
            </div>
            <a href="#" class="getPlanBtn">GET PLAN</a>
            <button class="moreInfo" id="${btnId}">SEE BENEFITS</button>

            <dialog id="${dialogId}" class="planDial">
                <button class="closeModal">❌</button>
                <div class="planDetails">
                    <h2>${plan.name} BENEFITS:</h2>
                    <ul>
                        ${benefitsList}
                    <ul>
                </div>
            </dialog>
        `;
        cardContainer.appendChild(article);
        
        //Event listener for modal

        const modal = article.querySelector(`#${dialogId}`);
        const openBtn = article.querySelector(`#${btnId}`);
        const closeBtn = article.querySelector(".closeModal")

        openBtn.addEventListener("click", () => modal.showModal());
        closeBtn.addEventListener("click", () => modal.close())
    });
}


//Track how many times a user visits 

const mainMessageEl = document.querySelector('#mainMessage');

if (mainMessageEl !== null) {
    let visits = parseInt(localStorage.getItem("visits")) || 0;
    visits++;

    mainMessageEl.textContent = visits === 1 
        ? "Welcome on your first visit!"
        : `Welcome back!`;

    localStorage.setItem("visits", visits);
}



function displayWeather(data) {
  const weatherSection = document.querySelector(".weatherContainer");

   

  const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  const temp = data.main.feels_like.toFixed(1);
  const desc = data.weather[0].description;

  const weatherInfo = document.createElement("article");
  weatherInfo.classList.add("weatherContainer");

  weatherInfo.innerHTML = `
    <p class="weatherInfo">Today's Weather Feels like: ${temp}°C</p>
  `;

  weatherSection.appendChild(weatherInfo);
}

  const params = new URLSearchParams(window.location.search);


