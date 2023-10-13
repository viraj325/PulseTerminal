const {getCurrentWeather, getCurrentDateTime} = require("./weather_date_time");

function randomGreeting() {
    let greetingsList = [
        "Hi Viraj!",
        "Hey there Viraj!",
        "What's cooking Viraj!"
    ]
    
    return greetingsList[Math.floor(Math.random() * greetingsList.length)]
}

const startIntro = async () => {
    console.log("-----------------------------------------------------------------------------------------")
    console.log("\n" + randomGreeting())
    await getCurrentWeather()
    getCurrentDateTime()
    console.log("\n-----------------------------------------------------------------------------------------")
}

module.exports = startIntro