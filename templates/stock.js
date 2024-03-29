const axios = require("axios");
const chalk = require("chalk");
const { randomUUID } = require("crypto");
const yahooFinance = require('yahoo-finance2').default;
const fs = require('fs');

async function getStockPriceFromYahooFinance() {
    const quote = await yahooFinance.quoteSummary('AAPL')
    return quote.price.currency
}

const getStockPrice = new Promise((resolve, reject) => {
    const listOfSymbols = ["AAPL", "IBM", "META", "GOOG", "GOOGL"]
    console.log('\n***************STOCKS**************\n')
    // TODO try string list
    /*
    {
    "Global Quote": {
        "01. symbol": "IBM",
        "02. open": "141.0100",
        "03. high": "142.6600",
        "04. low": "140.6000",
        "05. price": "140.6600",
        "06. volume": "3733697",
        "07. latest trading day": "2023-08-17",
        "08. previous close": "140.6400",
        "09. change": "0.0200",
        "10. change percent": "0.0142%"
    }
}
     */
    for (const symbol of listOfSymbols) {
        let url = "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=" + symbol + "&apikey=QAJ6DWWS4KMBG9CQ"
        axios.get(url, {headers: {Accept: "application/json"}}).then(res => {
            console.log(chalk.dim(symbol + `: `) + chalk.bgGray(res.data["Global Quote"]["05. price"]))
            console.log(res.data["Global Quote"]["05. price"])
            // quotePriceList.set(symbol, "test")
        }).catch(() => {
            console.log("Error: Stock Data not found.")
            reject()
        })
    }
    resolve()
})

function saveListOfStocks(tickers) {
    let listOfSymbols = tickers.split(" ")
    console.log(listOfSymbols)
    var json_symbols_list = {}
    var counter = 0

    for (const symbol of listOfSymbols) {
        json_symbols_list[counter] = symbol
        counter++
    }

    let data = JSON.stringify(json_symbols_list, null, 4)
    fs.writeFileSync('pulse-stocks.json', data)
}

function addStock(ticker) {
    let json_symbols_list = returnSavedListOfStocks()
    if ("stocks" in json_symbols_list) {
        json_symbols_list.stocks[randomUUID()] = ticker
        let data = JSON.stringify(json_symbols_list, null, 4)
        fs.writeFileSync('pulse-stocks.json', data)
    } else {
        let json_main_list = {}
        json_symbols_list[randomUUID()] = ticker
        json_main_list["stocks"] = json_symbols_list
        let data = JSON.stringify(json_main_list, null, 4)
        fs.writeFileSync('pulse-stocks.json', data)
    }
}

function returnSavedListOfStocks() {
    if (!fs.existsSync('pulse-stocks.json')) {
        console.log("File not found...")
        return {}
    }
    
    let rawdata = fs.readFileSync('pulse-stocks.json')
    let json_symbols_list= JSON.parse(rawdata)
    console.log(json_symbols_list)
    return json_symbols_list
}

function removeStockData() {
    fs.truncate('pulse-stocks.json', 0, () => {
        console.log("Stock Info has been removed.")
    })
}

module.exports = { getStockPrice, saveListOfStocks, returnSavedListOfStocks, removeStockData, addStock }