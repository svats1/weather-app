const stats = document.querySelector(".stats");
const button = document.querySelector("button");
const input = document.querySelector("input");
const cityDiv = document.querySelector(".city-name");

const key = "63a29a8fa8eb1f1f14a6fc6f868cc076";

button.addEventListener("click", (e) => {
  e.preventDefault();

  const city = input.value;

  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${key}`;

  async function getWeather() {
    try {
      const response = await fetch(url, { mode: "cors" });
      const data = await response.json();
      console.log(data);
      let temp_C = Math.round(data.main.temp - 273, 3);
      let temp_F = Math.round((temp_C * 9) / 5 + 32);

      cityDiv.textContent = city;
      stats.textContent = `Current temp in ${city} is ${temp_C} C or ${temp_F} F. Wind is about ${data.wind.speed} m/s. Humidity is about ${data.main.humidity}%. Cloud cover around ${data.clouds.all}%.`;
    } catch {
      alert("Please pass a legitimate value");
    }
  }

  getWeather();
  input.value = "";
});
