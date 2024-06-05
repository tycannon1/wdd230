// Get the current year
const currentYear = new Date().getFullYear();
  
// Populate the first paragraph with copyright info
document.getElementById("copyright").innerHTML = `&copy; ${currentYear} Ty Cannon, USA`;
  
// Get the last modified date of the document
const lastModifiedDate = document.lastModified;
  
// Populate the second paragraph with the last modified date
document.getElementById("lastModified").textContent = `Last modified: ${lastModifiedDate}`;

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
    document.querySelector('.close-icon').classList.toggle('show');
});

const darkModeToggle = document.getElementById('darkModeToggle');

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        darkModeToggle.textContent = 'Light Mode';
    } else {
        darkModeToggle.textContent = 'Dark Mode';
    }
});

// 1️⃣ Initialize display element variable
const visitsDisplay = document.querySelector(".visits");

// 2️⃣ Get the stored VALUE for the numVisits-ls KEY in localStorage if it exists. If the numVisits KEY is missing, then assign 0 to the numVisits variable.
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

// 3️⃣ Determine if this is the first visit or display the number of visits. We wrote this example backwards in order for you to think deeply about the logic.
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
}

// 4️⃣ increment the number of visits by one.
numVisits++;

// 5️⃣ store the new visit total into localStorage, key=numVisits-ls
localStorage.setItem("numVisits-ls", numVisits);

// 💡A client can view the localStorage data using the Applications panel in the browsers's DevTools - check it out on any major site.

//weather JS
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const forecastContainer = document.querySelector('#forecast-container');

const apiKey = '6aa83fef24c7b916edbac10801b0cf77';
const lat = 43.4799;  // Latitude for Jackson, Wyoming
const lon = -110.7624;  // Longitude for Jackson, Wyoming
const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        } else {
            throw new Error(await response.text());
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

function displayResults(data) {
    // Current weather
    currentTemp.innerHTML = `${data.list[0].main.temp} &deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.list[0].weather[0].icon}.png`;
    let desc = data.list[0].weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;

    // 3-day forecast
    forecastContainer.innerHTML = ''; // Clear any existing content
    for (let i = 0; i < 3; i++) {
        const forecastIndex = i * 8; // OpenWeatherMap provides data in 3-hour intervals (8 times per day)
        const forecast = data.list[forecastIndex];
        const forecastDate = new Date(forecast.dt * 1000).toLocaleDateString('en-US', { weekday: 'long' });
        const forecastTemp = `${forecast.main.temp} &deg;F`;
        const forecastIconSrc = `https://openweathermap.org/img/w/${forecast.weather[0].icon}.png`;
        const forecastDesc = forecast.weather[0].description;

        forecastContainer.innerHTML += `
            <div class="forecast">
                <h3>${forecastDate}</h3>
                <img src="${forecastIconSrc}" alt="${forecastDesc}">
                <p>${forecastTemp}</p>
                <p>${forecastDesc}</p>
            </div>
        `;
    }
}

// Call the function to fetch and display the weather data
apiFetch();