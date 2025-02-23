function searchCity(city) {
let apiKey ="ebeacdf310b43e22a85a46d12ot9f543"
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