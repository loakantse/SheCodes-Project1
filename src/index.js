function updateWeather(response) {
let temperatureElement = document.querySelector("#degree")
let temperature = response.data.temperature.current
let cityElement = document.querySelector("#city")
let descriptionElement = document.querySelector("#description")

temperatureElement.innerHTML = Math.round(temperature)
cityElement.innerHTML = response.data.city
descriptionElement.innerHTML = response.data.condition.description
}

function searchCity(city) {
let apiUrl = "https://api.shecodes.io/weather/v1/current?query=${city}&key=b2a5adcct04b33178913oc335f405433&units=metric"
axios.get(apiUrl).then(updateWeather)
}

function handleSearch(event) {
    event.preventDefault()
    let searchInput = document.querySelector("#search-input-form")

searchCity(searchInput.value)
}

let searchFormElement = document.querySelector("#search-form")
searchFormElement.addEventListener("submit",handleSearch)