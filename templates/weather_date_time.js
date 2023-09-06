const axios = require("axios")
const chalk = require("chalk")

function getCurrentWeather() {
    let lat = 40.18835
    let lon = -82.99606
    let url = 'https://api.open-meteo.com/v1/forecast?latitude=' + lat + '&longitude=' + lon + '&current_weather=true&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch'
    axios.get(url, {headers: {Accept: "application/json"}}).then(res => {
        console.log()
        console.log(chalk.dim(`🌡 Current Temperature: ☀`) + chalk.bgGray(res.data["current_weather"]["temperature"]))
    })
}

function getCurrentDateTime() {
    let date = new Date(Date.now())
    console.log("\nDate: " + date.toLocaleString('en-US', { month: 'numeric', day: 'numeric', year: 'numeric'})
     + " - Time: " + date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }))
}

module.exports = { getCurrentDateTime, getCurrentWeather }