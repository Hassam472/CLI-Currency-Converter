#! /usr/bin/env node
import inquirer from "inquirer";
const currency = {
    USD: 1,
    SAR: 3.75,
    AED: 3.67,
    INR: 83.50,
    PKR: 278.25,
    IRR: 42000,
    EUR: 0.92,
    BTC: 0.000018,
    JPY: 160.72,
    KWD: 0.31,
    YER: 249.85,
    AFN: 70.99,
    BDT: 117
};
let user_Answer = await inquirer.prompt([
    {
        name: "From",
        message: "From Currency",
        type: "list",
        choices: [
            "USD",
            "SAR",
            "AED",
            "INR",
            "PKR",
            "IRR",
            "EUR",
            "BTC",
            "JPY",
            "KWD",
            "YER",
            "AFN",
            "BDT"
        ]
    },
    {
        name: "To",
        message: "To Currency",
        type: "list",
        choices: [
            "USD",
            "SAR",
            "AED",
            "INR",
            "PKR",
            "IRR",
            "EUR",
            "BTC",
            "JPY",
            "KWD",
            "YER",
            "AFN",
            "BDT"
        ]
    },
    {
        name: "Amount",
        type: "number",
        message: "Please Enter Your Amount"
    }
]);
let fromAmount = currency[user_Answer.From];
let toAmount = currency[user_Answer.To];
let amount = user_Answer.Amount;
let base_Curreny = amount / fromAmount;
let converted_Currency = base_Curreny * toAmount;
console.log(converted_Currency);
