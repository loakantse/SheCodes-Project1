function updateWeather(response) {
let temperatureElement = document.querySelector("#degree")
let temperature = response.data.temperature.current
temperatureElement.innerHTML = Math.round(temperature)
}

function searchCity(city) {
let apiKey ="ebeacdf310b43e22a85a46d12ot9f543"
let apiUrl = 'https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric'
axios.get(apiUrl).then(updateWeather)
}

function handleSearch(event) {
    event.preventDefault()
    let searchInput = document.querySelector("#search-input-form")
let cityElement = document.querySelector("#city")
cityElement.innerHTML = searchInput.value
searchCity(searchInput.value)
}

let searchFormElement = document.querySelector("#search-form")
searchFormElement.addEventListener("submit",handleSearch)