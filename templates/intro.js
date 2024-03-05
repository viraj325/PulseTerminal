const {getCurrentWeather, getCurrentDateTime} = require("./weather_date_time");
const chalk = require("chalk");

function randomGreeting() {
    let greetingsList = [
        "Hi Viraj!",
        "Hey there Viraj!",
        "What's cooking Viraj!"
    ]
    
    return greetingsList[Math.floor(Math.random() * greetingsList.length)]
}

const startIntro = new Promise((resolve, reject) => {
    getCurrentWeather((res) => {
        if (res === undefined) {
            console.log("Error: Weather Data not found.")
            reject()
        }

        console.log("-----------------------------------------------------------------------------------------")
        console.log("|\n|   " + randomGreeting())
        console.log("|")
        console.log("|  " + chalk.dim(`🌡 Current Weather: ☀`) + chalk.bgGray(res.data["current_weather"]["temperature"]))
        getCurrentDateTime()
        console.log("|\n-----------------------------------------------------------------------------------------")
        resolve()
    })
})

module.exports = startIntro