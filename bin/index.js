#!/usr/bin/env node

const yargs = require("yargs");
const axios = require("axios");
const chalk = require("chalk");
const startIntro = require("../templates/intro");
const getStockPrice = require("../templates/stock");

startIntro()

/*const options = yargs
    .usage("Usage: -n <name>")
    .option("n", { alias: "name", describe: "Your name", type: "string", demandOption: true })
    .argv;

const settingsOptions = yargs
    .usage()
    .option()
    .argv;*/

const blah = yargs
    .command('stock', 'print hello world', () => {
        //console.log(`Stock Price: ` + getStockPrice());
        getStockPrice(["AAPL", "IBM", "META", "GOOG", "GOOGL"])
    })
    .command('greet', 'greet someone', (yargs) => {
        yargs.option('name', {
            describe: 'name of the person to greet',
            demandOption: true,
            type: 'string'
        })
    }, (argv) => {
        console.log(`Hello, ${argv.name}!`);
    })
    .argv;

const greeting = `Hello, ${blah.name}!`;
console.log(chalk.dim(greeting));

/*const chalk = require("chalk");
const boxen = require("boxen");

const greeting = chalk.white.bold("Hello!");
const boxenOptions = {
    padding: 1,
    margin: 1,
    borderStyle: "round",
    borderColor: "green",
    backgroundColor: "#555555"
};

const msgBox = boxen(greeting, boxenOptions);
console.log(msgBox);*/

/*
// Create add command
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
            (argv.firstNumber+argv.secondNumber))
    }
})

yargs.parse() // To set above changes
 */