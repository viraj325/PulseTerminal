#!/usr/bin/env node

const { getStockPrice, returnSavedListOfStocks, removeStockData, addStock } = require("../templates/stock")
const { getCurrentDateTime } = require("../templates/weather_date_time")
const startIntro = require("../templates/intro")
const getSources = require("../templates/news")
const yargs = require("yargs")
const axios = require("axios")
const chalk = require("chalk")

// *************************************************************************************************************************************

yargs.command('stocks', 'Stock related command', (yargs) => {
    yargs.option('a', {
        describe: 'Add Ticker Symbol to the current list of saved stocks',
        demandOption: true,
        type: 'string'
    })
}, (argv) => {
    addStock(argv.a)
    //console.log("List of stocks have been saved, if any of the ticker symbols are entered incorrectly then reset using the same command.")
})

// *************************************************************************************************************************************
yargs.command('news', '', () => {
    getSources()
})

yargs.command('stocks-r', 'Review the saved list of stocks', ()=> {
    returnSavedListOfStocks()
})
.command('stocks-d', 'Delete all of the stock related data.', () => {
    removeStockData()
})

yargs.command('u', 'Get Updated Daily Feed', () => {
    startIntro()
    getCurrentDateTime()
    getStockPrice(["AAPL", "IBM", "META", "GOOG", "GOOGL"])
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

//yargs.parse() removes the duplication of logging, if required chain it to the end of the command required