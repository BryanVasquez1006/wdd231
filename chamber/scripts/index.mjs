import { initChamber } from "./chamber.mjs";

const currentWeather = document.querySelector('#current-weather');
const weatherIcon = document.querySelector('#weather-icon');
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=13.68&lon=89.18&appid=fbc96fe3d923af47bfc682188e61e0cd&units=metric';
const dailyForecast = 'https://api.openweathermap.org/data/2.5/forecast?lat=13.68&lon=89.18&appid=fbc96fe3d923af47bfc682188e61e0cd&units=metric';
const membersURL = "data/members.json";
const weatherForecast = document.querySelector('#weather-forecast');
const bizCardsCont = document.querySelector('#biz-cards')


async function apiFetch(apiURL, callback) {
    try {
        const response = await fetch(apiURL);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            callback(data)
        } else {

        }
    } catch (error) {
        console.log(error)
    }
}

apiFetch(url, displayCurrentWeather);
apiFetch(dailyForecast, displayForecast);

function displayCurrentWeather(data) {


        //LOGIC FOR THE CURRENT WEATHER SECTION
        const sunrise = convertUnixTime(data.sys.sunrise);
        const sunset = convertUnixTime(data.sys.sunset)
        const weatherInfo = `
        <p><strong>${data.main.temp}</strong>&deg;F</p>
        <p>High: ${data.main.temp_max}</p>
        <p>Low: ${data.main.temp_max}</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Sunrise: ${sunset}</p>
        <p>Sunset: ${sunrise}</p>
        `;

        const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        let desc = data.weather[0].description; 
        document.querySelector('#weather-info').innerHTML = weatherInfo
        weatherIcon.setAttribute("src", iconsrc);
        weatherIcon.setAttribute("alt", desc);
}

function displayForecast(data) {
        //LOGIC FOR THE WEATHER FORECAST SECTION
        const today = data.list[0];
        const tomorrow = data.list[8];
        const thursday = data.list[16];


        const forecast = `
        <p>Today: ${today.main.temp}°F</p>
        <p>Wednesday: ${tomorrow.main.temp}°F</p>
        <p>Thursday: ${thursday.main.temp}°F</p>
        `;

        weatherForecast.innerHTML = forecast;
}

function convertUnixTime(unixSeconds) {
    const date = new Date(unixSeconds * 1000);
    return date.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        
    });
}


async function loadBizCards() {
    try {
        const response = await fetch(membersURL);
        const data = await response.json()
        displayBizCards(data)
    } catch (error) {
        console.log(error)
    }
}

loadBizCards()

function displayBizCards(data) {

    data.companies.slice(0,3).forEach(company => {
        
        const card = document.createElement("article");
        card.classList.add("bizCard");
        card.innerHTML = `
        <div class="bizCard-container"> 
        <div>
        <h2>${company.name}</h2>
        <span></span>
        <p><strong>Email:</strong> ${company.email}</p>
        <p><strong>Phone:</strong> ${company.phone}</p>
        <p><strong>URL:</strong> ${company.website}</p>
        </div>
        <div>
        <img src="${company.image}"class="biz-card-img">
        </div>
        </div>
        `;

        bizCardsCont.appendChild(card);

    })
}

//Last update footer
document.addEventListener("DOMContentLoaded", () => {
    initChamber();
});



