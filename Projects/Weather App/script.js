document.addEventListener('DOMContentLoaded', () => {
    const weatherForm = document.getElementById('weatherForm');
    const cityInput = document.getElementById('cityInput');
    const weatherInfo = document.getElementById('weatherInfo');
    const pollutionInfo = document.getElementById('pollutionInfo');
    const apiKey = 'f7f1aab2652ec8bad51d8fdbd297f76b';

    weatherForm.addEventListener('submit', async(e) => {
        e.preventDefault();
        const cityName = cityInput.value.trim();

        if (cityName) {
            try {
                const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`);
                if (!weatherResponse.ok) {
                    throw new Error('City not found');
                }
                const weatherData = await weatherResponse.json();
                displayWeather(weatherData);

                const { coord } = weatherData;
                const pollutionResponse = await fetch(`https://api.openweathermap.org/data/2.5/air_pollution?lat=${coord.lat}&lon=${coord.lon}&appid=${apiKey}`);
                if (!pollutionResponse.ok) {
                    throw new Error('Pollution data not found');
                }
                const pollutionData = await pollutionResponse.json();
                displayPollution(pollutionData);

            } catch (error){
                weatherInfo.innerHTML = `<p>${error.message}</p>`;
                pollutionInfo.innerHTML = '';
            }
        } else {
            weatherInfo.innerHTML = `<p>Please enter a city name.</p>`;
            pollutionInfo.innerHTML = '';
        }
    });

    const displayWeather = (data) => {
        const { name, main, weather } = data;
        const weatherHTML = `
            <h2>Weather in ${name}</h2>
            <p>Temperature: ${main.temp} ℃</p>
            <p>Weather: ${weather[0].description}</p>
        `;
        
        weatherInfo.innerHTML = weatherHTML;
    };

    const displayPollution = (data) => {
        const { list } = data;
        const pollutionLevel = list[0].main.aqi;
        const pollutionHTML = `
            <h2>Air Pollution Level</h2>
            <p>AQI: ${pollutionLevel}</p>
        `;
        pollutionInfo.innerHTML = pollutionHTML;
    };

});