const apikey = "3265874a2c77ae4a04bb96236a642d2f";

const formEl = document.getElementById("form");
const inputEl = document.getElementById("input");
const mainEl = document.getElementById("main");



const url = (city) =>
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;


getWeatherByLocation("danang")
async function getWeatherByLocation(city) {
    const resp = await fetch(url(city)); // + { origin: "cors" }
    const respData = await resp.json();

    console.log(respData);
    getWeather(respData,city);
    
}



function KtoC(K){
    return (K - 273.15).toFixed(2);
}
function getWeather(data,city){
    mainEl.innerHTML = "";
    const divEl = document.createElement("div");
    divEl.classList.add("weather");
    divEl.innerHTML = `
    <h3>The temperature:${KtoC(data.main.temp)}°C </h3>
    <p>Location:${city}</p>
    <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" />
    `
    mainEl.appendChild(divEl);
}


formEl.addEventListener("submit", e => {
    e.preventDefault();
  const searchByLocation = inputEl.value;
  if(searchByLocation){
  getWeatherByLocation(searchByLocation)
  inputEl.value = "";
  }
 




})