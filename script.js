const container = document.querySelector(".container");
const search = document.querySelector(".search-box button");
const weatherBox = document.querySelector(".weather-box");
const weatherDetail = document.querySelector(".weather-detail");
// it is representing the html element by there classname

search.addEventListener("click", () => { 
   const apiKey = "353c12b76574e3046de542dc19bb064b";
  const city = document.querySelector(".search-box input").value;
  
  if (city === " ")  return;
// this mean nothing is place in the input field should nothing
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
    // here it should fetch from the apikey with the name of the city inserted
  ).then((response) => response.json())
  // and then converrt to a json format
  
    .then((data) => {
      // and should be save as data
      if (data.code == 404) {
        document.querySelector(".error").style.display = "block"
        // if the condition is met the error should be displayed
      }else{
        document.querySelector(".error").style.display = "none"
        //  else the error should be not be  displayed
      }
      const image = document.querySelector(".weather-box img");
      const temperature = document.querySelector(".weather-box .temp");
      const description = document.querySelector(".weather-box .description");
      const humidity = document.querySelectorAll(".humidity p");
      const wind = document.querySelectorAll(".wind p");
      //  dis is also representing the html element by there classname

       console.log(data);

      switch (data.weather[0].main) {
        // this is a switch statement 
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
      temperature.innerText = `${(data.main.temp)}°c`;
      description.innerText = `${(data.weather[0].description)}`;
      humidity[0].innerText = `${data.main.humidity}%`;
      humidity[1].innerText = "Humidity"
      wind[0].innerText = `${(data.wind.speed)}km/h`;
      wind[1].innerText = "Wind"
    });
});
