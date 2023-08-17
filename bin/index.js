#!/usr/bin/env node

const yargs = require("yargs/yargs");
const axios = require("axios");
const chalk = require("chalk");

const options = yargs
    .usage("Usage: -n <name>")
    .option("n", { alias: "name", describe: "Your name", type: "string", demandOption: true })
    .argv;

const settingsOptions = yargs
    .usage()
    .option()
    .argv;

/*const blah = yargs
    .command('hello', 'print hello world', () => {
        console.log('Hello, world!');
    })
    .command('greet', 'greet someone', (yargs) => {
        yargs.option('name', {
            describe: 'name of the person to greet',
            demandOption: true,
            type: 'string'
        });
    }, (argv) => {
        console.log(`Hello, ${argv.name}!`);
    })
    .argv;*/

const greeting = `Hello, ${options.name}!`;

console.log(chalk.dim(greeting));
console.log(chalk.red("Here's a random joke for you:"));

const url = "https://icanhazdadjoke.com/";
axios.get(url, { headers: { Accept: "application/json" } }).then(res => {
    console.log(res.data.joke);
});

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