#!/usr/bin/env node

const yargs = require("yargs")
const axios = require("axios")
const chalk = require("chalk")
const startIntro = require("../templates/intro")
const getStockPrice = require("../templates/stock")
const { getCurrentDateTime } = require("../templates/weather_date_time")

yargs.command('u', 'Get Updated Daily Feed', () => {
    startIntro()
    getCurrentDateTime()
})
.command('stock', 'print hello world', () => {
    //console.log(`Stock Price: ` + getStockPrice())
    getStockPrice(["AAPL", "IBM", "META", "GOOG", "GOOGL"])
})
.command('greet', 'greet someone', (yargs) => {
    yargs.option('name', {
        describe: 'name of the person to greet',
        demandOption: true,
        type: 'string'
    })
}, (argv) => {
    console.log(`Hello, ${argv.name}!`)
})
.argv

yargs.command({
    command: 'add',
    describe: 'Adds two number',
    builder: {
        firstNumber: {
            describe: 'First Number',
            demandOption: true,  // Required
            type: 'number'
        },
        secondNumber: {
            describe: 'Second Number',
            demandOption: true,
            type: 'number'
        }
    },

    // Function for your command
    handler(argv) {
        console.log("Result:",
            (argv.firstNumber + argv.secondNumber))
    }
})

yargs.parse()