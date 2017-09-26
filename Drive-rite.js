/**
 *   @author Graus, Michael (grausm@student.ncmich.edu)
 *   @version 0.0.1
 *   @summary Project 2 Drive-rite || created: 03.25.2017
 *   @todo
 */

"use strict";
const PROMPT = require('readline-sync');

//Section 1 -----------------------------------------^

let policyId, lastName, firstName, age;
let premiumdDueDate, accidentsThreeYears;
let totalPrice;

const LANGUAGE = 'English';

//Section 2 -----------------------------------------^


function main() {

    setpolicyId();
    setlastName();
    setfirstName();
    setage();
    setpremiumdDueDate();
    setaccidentsThreeYears();
    settotalPrice();
    printResults();
    return main();
}

main();

//Section 3 ----------------------------------------^

function setpolicyId() {
   policyId = Number(PROMPT.question(`\nPlease enter policy number: `));
}
function setlastName() {
    lastName = Number(PROMPT.question(`\nPlease enter last name: `));
}

function setfirstName() {
    firstName = Number(PROMPT.question(`\nPlease enter first name: `));
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

function setotalPrice() {
    totalPrice = 0;
    const BASE_PRICE = 100,
        UNDER_30 = 30,
        THIRTY_TO_45 = 45,
        SIXTY_AND_OVER = 60,
        UNDER_30_FEE = 120,
        THIRTY_TO_45_FEE = 110,
        SIXTY_AND_OVER_FEE = 130;
    if (age > 0) {
        if (age > 0 && age < UNDER_30) {
            totalPrice = UNDER_30_FEE;
        } else if (age < THIRTY_TO_45) {
            totalPrice = THIRTY_TO_45_FEE;
        } else if (age < SIXTY_AND_OVER) {
            totalPrice = SIXTY_AND_OVER_FEE;
        }

    }

}

function printResults() {
    console.log(`Total Price:   ${totalPrice}`);
}

//Section 4 -------------------------------------------^
/*
A program that accepts insurance policy data, including a policy number, customer last name, customer first name,
 birthdate, premium due date (month, day, and year),
and number of at-fault driver accidents in the last three years.
Calculate customer age and set monthly insurance premium using the following criteria:
 */