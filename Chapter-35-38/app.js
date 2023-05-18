// --------------->    CHAPTER : " FUNCTION "    <---------------


// Q1. ---->  Write a function that displays current date & time in your browser.
// Solution

function currentDateAndTime () {
    let currentDateTime = new Date();
    document.write(`<h3><i>Current Date & Time</i> : ${currentDateTime}.</h3><br>`);
}
currentDateAndTime();
document.write(`----------------------------------------------------------------------<br><br>`);


// Q2. ---->  Write a function that takes first & last name and then it greets the user using his full name.
// Solution

let inputFirstName = prompt('Enter your first name');
let inputLastName = prompt('Enter your last name');

const fullName = (first, last) => {
    let firstName = first.charAt(0).toUpperCase() + first.slice(1);
    let lastName = last.charAt(0).toUpperCase() + last.slice(1);
    document.write(`<h3>Your Name : ${firstName} ${lastName}</h3><br>`);
}
fullName(inputFirstName, inputLastName);
document.write(`----------------------------------------------------------------------<br><br>`);

// Q3. ---->  Write a function that adds two numbers (input by user) and returns the sum of two numbers.
// Solution

let inputFirstNum = Number(prompt('Enter First Number'));
let inputSecondNum = Number(prompt('Enter Second Number'));

const addNum = (numOne, numTwo) => {
    return numOne + numTwo;
}
document.write(`<h3>Addition of ${inputFirstNum} & ${inputSecondNum} : ${addNum(inputFirstNum, inputSecondNum)}</h3><br>`);
document.write(`----------------------------------------------------------------------<br><br>`)

// Q4. ---->  Calculator: Write a function that takes three arguments num1, num2 & operator & compute the desired operation. Return and show the desired result in your browser.
// Solution

const num1 = Number(prompt("Enter the first number: "));
const operator = prompt("Enter the operator (+, -, *, or /): ");
const num2 = Number(prompt("Enter the second number: "));

function Calculator(num1, num2, operator) {
    switch(operator){
        case "+":
            return num1 + num2;

        case "-":
            return num1 - num2;

        case "*":
            return num1 * num2;

        case "/":
            return num1 / num2;
 
        default:
            // alert('Error! Invalid Input')
            throw new Error("Invalid operator")    
    }
}
// Calculate Result:
const result = Calculator(num1, num2, operator);

document.write(`<h3>Result of ${num1} ${operator} ${num2} is equal to ${result} .</h3><br>`)
document.write(`----------------------------------------------------------------------<br><br>`)
