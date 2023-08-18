const axios = require("axios");
const chalk = require("chalk");
const yahooFinance = require('yahoo-finance2').default;

async function getStockPriceFromYahooFinance() {
    const quote = await yahooFinance.quoteSummary('AAPL')
    return quote.price.currency
}

function getStockPrice(listOfSymbols) {
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
        })
    }
}

module.exports = getStockPrice