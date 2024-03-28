const container = document.querySelector(".container");
const search = document.querySelector(".search-box button");
const weatherBox = document.querySelector(".weather-box");
const weatherDetail = document.querySelector(".weather-detail");

search.addEventListener("click", () => {
  const apiKey = "353c12b76574e3046de542dc19bb064b";
  const city = document.querySelector(".search-box input").value;
  if (city === " ")  return;

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
  ).then((response) => response.json())
  
    .then((data) => {
      if (data.cod == 404) {
        document.querySelector(".error").style.display = "block"
      }else{
        document.querySelector(".error").style.display = "none"
      }
      const image = document.querySelector(".weather-box img");
      const temperature = document.querySelector(".weather-box .temp");
      const description = document.querySelector(".weather-box .description");
      const humidity = document.querySelectorAll(".humidity p");
      const wind = document.querySelectorAll(".wind p");

       console.log(data);

      switch (data.weather[0].main) {
        case "Clear":
          image.src = "images/clear.png";
          break;
        case "Snow":
          image.src = "images/snow.png";
          break;
        case "Clouds":
          image.src = "images/clouds.png";
          break;
        case "Mist":
          image.src = "images/mist.png";
          break;
        case " Haze":
          image.src = "images/drizzle.png";
          break;

        default:
          image.src = "images/mist.png";
      }
      temperature.innerText = `${parseInt(data.main.temp)}°c`;
      description.innerText = `${(data.weather[0].description)}`;
      humidity[0].innerText = `${data.main.humidity}%`;
      humidity[1].innerText = "Humidity"
      wind[0].innerText = `${parseInt(data.wind.speed)}km/h`;
      wind[1].innerText = "Wind"
    });
});
