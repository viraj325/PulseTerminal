function getCurrentWeather() {
    let url = 'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch'
    axios.get(url, {headers: {Accept: "application/json"}}).then(res => {
        console.log(chalk.dim(symbol + `: `) + chalk.bgGray(res.data["Global Quote"]["05. price"]))
    })
}

function getCurrentDateTime() {
    let date = new Date(Date.now())
    console.log("\nDate: " + date.toLocaleString('en-US', { month: 'numeric', day: 'numeric', year: 'numeric'})
     + " - Time: " + date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }))
}

module.exports = { getCurrentDateTime, getCurrentWeather }