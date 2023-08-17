function randomGreeting() {
    let greetingsList = ["Hi Viraj!", "Hey there Viraj!", "What's cooking Viraj!"]
    return greetingsList[Math.floor(Math.random() * greetingsList.length)]
}

const startIntro = () => {
    console.log(randomGreeting())
}

module.exports = startIntro