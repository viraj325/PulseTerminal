function getCurrentWeather() {

}

function getCurrentDateTime() {
    let date = new Date(Date.now())
    console.log("\nDate: " + date.toLocaleString('en-US', { month: 'numeric', day: 'numeric', year: 'numeric'})
     + " - Time: " + date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }))
}

module.exports = { getCurrentDateTime, getCurrentWeather }