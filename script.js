const apiKey = "XUI90qWucCtY7MyTUPQQFg6iffLnTeyY";

const searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", getWeather);

function getWeather(){

let city = document.getElementById("cityInput").value;

let url = `https://api.tomorrow.io/v4/weather/realtime?location=${city}&apikey=${apiKey}`;

fetch(url)

.then(response => response.json())

.then(data => {

console.log(data);

let weather = data.data.values;

document.getElementById("cityName").innerText = "📍 " + city;

document.getElementById("temperature").innerText = weather.temperature + "°C";

document.getElementById("description").innerText = "Weather Code: " + weather.weatherCode;

document.getElementById("humidity").innerText = weather.humidity + "%";

document.getElementById("wind").innerText = weather.windSpeed + " km/h";

document.getElementById("uv").innerText = weather.uvIndex;

})

.catch(error => {

alert("Error fetching weather");

console.log(error);

});

}