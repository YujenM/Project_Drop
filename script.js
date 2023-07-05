const url = `https://api.openweathermap.org/data/2.5/weather?lat=27.7172&lon=85.324&appid=052d833aefbf6d6458ff5c8922d25a6a`;

fetch(url)
.then((response) => {
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
})
.then((data) => {
    const weatherData = data; // Assign the weather data to a variable

    // Access the DOM elements
    const locationElement = document.getElementById("location");
    const descriptionElement = document.getElementById("description");
    const temperatureElement = document.getElementById("temperature");
    const humidityElement = document.getElementById("humidity");
    const windElement = document.getElementById("wind");
    const iconElement = document.getElementById("icon");

    // Convert temperature from Kelvin to Celsius
    const temperatureCelsius = Math.round(weatherData.main.temp - 273.15);

    // Set the weather information in the HTML elements
    locationElement.textContent = ` ${weatherData.name}`;
    descriptionElement.textContent = `${weatherData.weather[0].description}`;
    temperatureElement.textContent = `${temperatureCelsius} °C`;
    humidityElement.textContent = `${weatherData.main.humidity}%`;
    windElement.textContent = `${weatherData.wind.speed}m/s`;

    // Set the weather icon
    const iconUrl = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`;
    iconElement.src = iconUrl;
})
.catch((error) => {
    console.log(error);
});
