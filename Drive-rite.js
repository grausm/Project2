/**
 *   @author Graus, Michael (grausm@student.ncmich.edu)
 *   @version 0.0.1
 *   @summary Project 2 Drive-rite || created: 03.25.2017
 *   @todo
 */

"use strict";
const PROMPT = require('readline-sync');

//Section 1 -----------------------------------------^

let continueResponse;
let policyId, lastName, firstName, age;
let premiumdDueDate, accidentsThreeYears;
let totalPrice;

const LANGUAGE = 'English';

//Section 2 -----------------------------------------^


function main() {
    process.stdout.write('\x1Bc');
    if (continueResponse == null) {
            setContinueResponse();
    }
    if (continueResponse === 1) {
        setpolicyId();
        setfirstName();
        setlastName();
        setage();
        setpremiumdDueDate();
        setaccidentsThreeYears();
        settotalPrice();
        printResults();
        setContinueResponse();
        return main();
    }
    printGoodbye();

}

main();

function setContinueResponse() {
    if (continueResponse === 1) {
            continueResponse = Number(PROMPT.question(`\nDo you want to continue? [0=no, 1=yes]: `));
            if (continueResponse !== 0 && continueResponse !== 1) {
                 console.log(`${continueResponse} is a incorrect value. Please try again.`);
                 continueResponse = 1;
                setContinueResponse();
            }
    } else {
        continueResponse = 1;
    }
}

//Section 3 ----------------------------------------^

function setpolicyId() {
   policyId = Math.floor((Math.random()* 5000) + 1);
}
function setlastName() {
    lastName = (PROMPT.question(`\nPlease enter last name: `));
}

function setfirstName() {
    firstName = (PROMPT.question(`\nPlease enter first name: `));
}

function setage() {
    age = Number(PROMPT.question(`\nPlease enter age: `));
}

function setpremiumdDueDate() {
    premiumdDueDate = Number(PROMPT.question(`\nPlease enter premium due date: `));
}

function setaccidentsThreeYears() {
   accidentsThreeYears = Number(PROMPT.question(`\nHow many at fault accidents in the last 3 years: `));
}

function settotalPrice() {
    totalPrice = 0;
    const BASE_PRICE = 100,
        UNDER_30 = 30,
        THIRTY_TO_45 = 45,
        SIXTY_AND_OVER = 60,
        UNDER_30_FEE = 20,
        THIRTY_TO_45_FEE = 10,
        SIXTY_AND_OVER_FEE = 30,
        ACCIDENTS = 50;
    if (age > 0) {
        if (age > 15 && age < UNDER_30) {
            totalPrice = UNDER_30_FEE + BASE_PRICE + (accidentsThreeYears * ACCIDENTS);
        } else if (age >= UNDER_30 && age < THIRTY_TO_45) {
            totalPrice = THIRTY_TO_45_FEE + BASE_PRICE + (accidentsThreeYears * ACCIDENTS);
        } else if (age >= SIXTY_AND_OVER) {
            totalPrice = SIXTY_AND_OVER_FEE + BASE_PRICE + (accidentsThreeYears * ACCIDENTS);
        }
    }


}

function printResults() {
    process.stdout.write('\x1Bc'); //Clears the screen
    console.log(`\n\t${firstName}'s bill: \$${totalPrice}. Customer#: ${policyId}`);
}

function printGoodbye() {
    process.stdout.write('\x1bc');
    console.log('\n\tGoodbye.');

}

//Section 4 -------------------------------------------^
/*
A program that accepts insurance policy data, including a policy number, customer last name, customer first name,
 birthdate, premium due date (month, day, and year),
and number of at-fault driver accidents in the last three years.
Calculate customer age and set monthly insurance premium using the following criteria:
 */