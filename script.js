async function getWeather() {
    const city = document.getElementById("cityInput").value;
    const apiKey = "c9004ecb0a2110802e86933ff8e35520";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data); // 👈 See what the API returns
  
      const resultDiv = document.getElementById("weatherResult");
  
      if (data.cod === "404") {
        resultDiv.innerHTML = "City not found!";
      } else {
        resultDiv.innerHTML = `
          <h2>${data.name}, ${data.sys.country}</h2>
          <p><strong>${data.weather[0].main}</strong> - ${data.weather[0].description}</p>
          <p>🌡️ Temperature: ${data.main.temp}°C</p>
          <p>💧 Humidity: ${data.main.humidity}%</p>
        `;
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      document.getElementById("weatherResult").innerHTML = "Failed to fetch data.";
    }
  }
  