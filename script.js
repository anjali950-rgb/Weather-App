async function getWeather() {
    const city = document.getElementById("cityInput").value;
    const apiKey = 'c958725ca02fb36d8d7accb281873a35'; // Replace with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("City not found");
        const data = await response.json();

        const weatherHtml = `
      <h2>${data.name}, ${data.sys.country}</h2>
      <p><strong>Weather:</strong> ${data.weather[0].description}</p>
      <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
      <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
    `;

        document.getElementById('weatherResult').innerHTML = weatherHtml;
    } catch (error) {
        document.getElementById('weatherResult').innerHTML = `<p style="color: red;">${error.message}</p>`;
    }
}
