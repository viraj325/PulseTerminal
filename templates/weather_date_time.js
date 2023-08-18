function getCurrentWeather() {

}

function getCurrentDateTime() {
    let ts = Date.now()
    let date_ob = new Date(ts)
    let day = date_ob.getDay()
    let month = date_ob.getMonth()
    let year = date_ob.getFullYear()

    // prints date & time in YYYY-MM-DD format
    console.log("Current Date:" + year + "-" + month + "-" + day)
    console.log("Current Time:" + date_ob.getHours() + ":" + date_ob.getMinutes() + ":" + date_ob.getSeconds)
}

module.exports = { getCurrentDateTime, getCurrentWeather }