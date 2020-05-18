// init weather class
const weather = new Weather("London", "uk");
const ui = new UI();

// weather.changeLocation("Miami", "us");

document.addEventListener("DOMContentLoaded", getWeather);

function getWeather() {
  weather
    .getWeather()
    .then((results) => {
      console.log(results);
      ui.paint(results);
    })
    .catch((err) => console.log(err));
}
