const img = document.querySelector("img");
const button = document.querySelector("button");
const input = document.querySelector("input");

const key = "";

button.addEventListener("click", (e) => {
  e.preventDefault();

  const url = "63a29a8fa8eb1f1f14a6fc6f868cc076";

  async function getWeather() {
    try {
      const response = await fetch(url, { mode: "cors" });
      console.log(response.json());
    } catch {}
  }
});
