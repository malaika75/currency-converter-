#!/usr/bin/env node

import inquirer from "inquirer"

let currency:any = {
    USD : 1,
    EUR : 0.92,
    GBP : 0.79, 
    INR : 83,
    PKR : 280,
    SAR : 3.75,
}

const answer:any = await inquirer.prompt([
    {
        name: "fromcurrency",
        type: "list",
        message: "select the source currency?",
        choices: ["USD", "EUR" ,"GBP" ,"INR" ,"PKR", "SAR"]
     },
     


     {
        name: "tocurrency",
        type: "list",
        message: "select the target currency?",
        choices: ["USD", "EUR" ,"GBP" ,"INR" ,"PKR", "SAR"],
     },

     {
        name: "amount",
        type: "number",
        message: "Enter amount"
     },

])

let from = currency[answer.fromcurrency]
let to = currency[answer.tocurrency]
let selectAmount = answer.amount
let total = selectAmount / from
let convertedAmount = total * to

console.log (convertedAmount)