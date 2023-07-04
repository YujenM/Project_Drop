const url = `https://api.openweathermap.org/data/2.5/weather?lat=27.7172&lon=85.324&appid=9e7681eeafe9cbbaa8c6fcc05f322f2c`;

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
    locationElement.textContent = `Location: ${weatherData.name}`;
    descriptionElement.textContent = `Description: ${weatherData.weather[0].description}`;
    temperatureElement.textContent = `Temperature: ${temperatureCelsius} °C`;
    humidityElement.textContent = `Humidity: ${weatherData.main.humidity}%`;
    windElement.textContent = `Wind Speed: ${weatherData.wind.speed} m/s`;

    // Set the weather icon
    const iconUrl = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`;
    iconElement.src = iconUrl;
})
.catch((error) => {
    console.log(error);
});
