function updateWeather(response) {
let temperatureElement = document.querySelector("#degree")
let temperature = response.data.temperature.current
let cityElement = document.querySelector("#city")
let descriptionElement = document.querySelector("#description")
let humidityElement = document.querySelector("#humidity")
let windElement = document.querySelector("#wind")
let timeElement = document.querySelector("#time")
let date = new Date(response.data.time * 1000)

console.log(response.data)
temperatureElement.innerHTML = Math.round(temperature) + "°C"
cityElement.innerHTML = response.data.city
descriptionElement.innerHTML = response.data.condition.description
humidityElement.innerHTML = `${response.data.temperature.humidity}%`
windElement.innerHTML = `${response.data.wind.speed}km/h`
timeElement.innerHTML = formatDate(date)
}

function formatDate(date) {
    let minutes = date.getMinutes()
    let hours = date.getHours()
    let days =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    let day = days[date.getDay()]

    return `${day} ${hours}:${minutes}`
}

function searchCity(city) {
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=b2a5adcct04b33178913oc335f405433&units=metric`
axios.get(apiUrl).then(updateWeather)
}

function handleSearch(event) {
    event.preventDefault()
    let searchInput = document.querySelector("#search-input-form")

searchCity(searchInput.value)
}

let searchFormElement = document.querySelector("#search-form")
searchFormElement.addEventListener("submit",handleSearch)