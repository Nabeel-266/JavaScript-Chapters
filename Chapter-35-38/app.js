// --------------->    CHAPTER : " FUNCTION "    <---------------


// Q1. ---->  Write a function that displays current date & time in your browser.
// Solution

// function currentDateAndTime () {
//     let currentDateTime = new Date();
//     document.write(`<h3><i>Current Date & Time</i> : ${currentDateTime}.</h3><br>`);
// }
// currentDateAndTime();
// document.write(`----------------------------------------------------------------------<br><br>`);



// Q2. ---->  Write a function that takes first & last name and then it greets the user using his full name.
// Solution

// let inputFirstName = prompt('Enter your first name');
// let inputLastName = prompt('Enter your last name');

// const fullName = (first, last) => {
//     let firstName = first.charAt(0).toUpperCase() + first.slice(1);
//     let lastName = last.charAt(0).toUpperCase() + last.slice(1);
//     document.write(`<h3>Your Name : ${firstName} ${lastName}</h3><br>`);
// }
// fullName(inputFirstName, inputLastName);
// document.write(`----------------------------------------------------------------------<br><br>`);



// Q3. ---->  Write a function that adds two numbers (input by user) and returns the sum of two numbers.
// Solution

// let inputFirstNum = Number(prompt('Enter First Number'));
// let inputSecondNum = Number(prompt('Enter Second Number'));

// const addNum = (numOne, numTwo) => {
//     return numOne + numTwo;
// }
// document.write(`<h3>Addition of ${inputFirstNum} & ${inputSecondNum} : ${addNum(inputFirstNum, inputSecondNum)}</h3><br>`);
// document.write(`----------------------------------------------------------------------<br><br>`);



// Q4. ---->  Calculator: Write a function that takes three arguments num1, num2 & operator & compute the desired operation. Return and show the desired result in your browser.
// Solution

// const num1 = Number(prompt("Enter the first number: "));
// const operator = prompt("Enter the operator (+, -, *, or /): ");
// const num2 = Number(prompt("Enter the second number: "));

// function Calculator(num1, num2, operator) {
//     switch(operator){
//         case "+":
//             return num1 + num2;

//         case "-":
//             return num1 - num2;

//         case "*":
//             return num1 * num2;

//         case "/":
//             return num1 / num2;
 
//         default:
//             // alert('Error! Invalid Input')
//             throw new Error("Invalid operator")    
//     }
// }
// // Calculate Result:
// const result = Calculator(num1, num2, operator);

// document.write(`<h3>Result of ${num1} ${operator} ${num2} is equal to ${result} .</h3><br>`)
// document.write(`----------------------------------------------------------------------<br><br>`);



// // Q5. ---->  Write a function that squares its argument.
// // Solution

// function squareRoot(sqrVal1, sqrVal2) {
//     return document.write(`<h3>Square of 4 : ${Math.pow(sqrVal1, 2)} <br> Square of 5 : ${sqrVal2 ** 2} </h3><br>`);
// }
// squareRoot(4,5);
// document.write(`----------------------------------------------------------------------<br><br>`);



// // Q6. ---->  Write a function that computes factorial of a number.
// // Solution

// let factorialLimit = Number(prompt('Enter a Factorial Number!'))

// function factorial(n) {
    
//     let factorial = 1;
//     for(let i = 1; i <= n; i++){
//         factorial *= i;
//         document.write(`<h3>factorial of ${i} is : ${factorial}</h3><br>`)
//     }
    
// }
// factorial(factorialLimit);
// document.write(`----------------------------------------------------------------------<br><br>`);



// Q7. ---->  Write a function that take start and end number as inputs & display counting in your browser.
// Solution

// let startCounting = Number(prompt('Which number you want to Start counting'));
// let endCounting = Number(prompt('Which number you want to End counting'));

// const counting = (start, end) => {
//     if(start > end){
//         for (let i = start; i >= end; i--){
//             document.write(`<h3>${i}</h3>`);
//         }
//     }
//     else{
//         for (let i = start; i <= end; i++){
//             document.write(`<h3>${i}</h3>`);
//         }
//     }
// }
// counting(startCounting, endCounting);
// document.write(`----------------------------------------------------------------------<br><br>`);



// Q8. ---->  Write a nested function that computes hypotenuse of a right angle triangle.
// Hypotenuse2 = Base2 + Perpendicular2
// Take base and perpendicular as inputs.
// Outer function : calculateHypotenuse()
// Inner function: calculateSquare()
// Solution


// let base = Number(prompt('Calculate Hypotenuse :\nEnter a Base value'));
// let perpendicular = Number(prompt('Calculate Hypotenuse :\nEnter a Perpendicular value'));

// // Outer Function calculateHypotenuse()
// const calculateHypotenuse = () => {
    
//     // Inner Function calculateSquare()
//     const calculateSquare = (base, perpendicular) => Math.pow(base, 2) + perpendicular**2;
//     const calculationOfSquare = calculateSquare(base, perpendicular);

//     // Calculate Hypotenuse
//     const calculationOfHypotenuse = Math.sqrt(calculationOfSquare);
//     return calculationOfHypotenuse.toFixed(2);
// }
// document.write(`<h2>Calculate Hypotenuse</h2><br>`);
// document.write(`<h3>Hypotenuse<sup>2</sup> = base<sup>2</sup> + perpendicular<sup>2</sup></h3>`);
// document.write(`<h3>Hypotenuse<sup>2</sup> = ${base}<sup>2</sup> + ${perpendicular}<sup>2</sup></h3>`);
// document.write(`<h3>Hypotenuse = ${calculateHypotenuse()}cm <br><br>`);
// document.write(`----------------------------------------------------------------------<br><br>`);



// Q9. ---->  Write a function that calculates the area of a rectangle.
// A = width * height
// Pass width and height in following manner:
// i. Arguments as value
// ii. Arguments as variables
// Solution

// // To pass arguments as values :
// const areaOfRectangle = (width, height) => width * height; 
// console.log(areaOfRectangle(15, 30));

// // To pass arguments as variables :
// function areaOfRectangle() {
//     return width * height;
// }

// let width = +(prompt('Calculates the area of a rectangle\nEnter a value of width of a rectangle'));
// let height = +(prompt('Calculates the area of a rectangle\nEnter a value of height of a rectangle'));

// document.write(`<h2>Area of a rectangle</h2><br>`);
// document.write(`<h3>Area = width * height</h3>`);
// document.write(`<h3>Area = ${width} * ${height}</h3>`);
// document.write(`<h3>Area of a Rectangle = ${areaOfRectangle(width, height)}</h3><br>`);
// document.write(`----------------------------------------------------------------------<br><br>`);



// Q10. ----> Write a JavaScript function that checks whether a passed string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam.
// Solution

// let string = prompt('Enter a random word and check its palindrome or not');
// function isPalindrome(str) {

//     // First Method :
//     // let reverseStr = str.split('').reverse('').join('');
//     // if(str === reverseStr){
//     //     alert('Yes! Your word is palindrome');
//     // }
//     // else{
//     //     alert('No! Your word is not palindrome');
//     // }

//     // Second Method :
//     let reverseStr = "";
//     for(let i = str.length - 1; i >= 0 ; i--){
//         reverseStr += str[i];
//     }
//     if(str === reverseStr){
//         alert('Yes! Your word is palindrome');
//     }
//     else{
//         alert('No! Your word is not palindrome');
//     }
// }
// isPalindrome(string);



// Q11. ----> Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'
// Solution

// let userText = prompt('Enter your full name or any phrase');

// function capitalizeFirstLetterOfEachWord(text){
//     // split the user text each word  
//     const words = text.split(' ');

//     // Capitalize first letter of each index of an array of words
//     for(let i = 0; i < words.length; i++){
//         words[i] = words[i].slice(0,1).toUpperCase() + words[i].slice(1);
//     }

//     return words.join(' ');
// }

// document.write(`<h2>Uppercase first letter of each word of the string :</h2><br>`);
// document.write(`<h3>Your String : ${userText}</h3>`);
// document.write(`<h3>Modified String : ${capitalizeFirstLetterOfEachWord(userText)}</h3><br>`);
// document.write(`----------------------------------------------------------------------<br><br>`);


// Q12. ----> Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development' 
// Solution

// const longestWordOfString = (str) => {
//     const words = str.split(' ');
//     let longestWord = words[0];

//     for(let i = 0; i < words.length; i++){
//         if(words[i].length > longestWord.length){
//             longestWord = words[i];
//         } 
//     }

//     return (longestWord);
// }

// document.write(`<h2>Longest Word within the String :</h2><br>`);
// document.write(`<h3>String : ${'Javascript is a object-oriented programming language'}</h3>`);
// document.write(`<h3>Longest Word : ${longestWordOfString('Javascript is a object-oriented programming language')}</h3><br>`);
// document.write(`----------------------------------------------------------------------<br><br>`);



// Q13. ----> Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string.Sample arguments : 'JSResourceS.com','o'
// Solution

// const letterCount = (quote, letter) => {
//     let counter = 0;

//     for(let i = 0; i < quote.length; i++){
//         if(quote[i].toLowerCase() === letter.toLowerCase()){
//             counter++;
//         }
//     }

//     return counter;
// } 

// console.log(letterCount('Eat sleep code repeat', 'e'));


// Q13. ----> The Geometrizer
// Create 2 functions that calculate properties of a circle, using the definitions here.

// Create a function called calcCircumference:
// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output "The circumference is NN".

// Create a function called calcArea:
// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area is NN".

// Circumference of circle = 2πr
// Area of circle = πr2
// Solution

const radiusOfCircle = 5;

// Function 1 : calcCircumference
function calcCircumference(rad) {
    return `The circumference is : ${(2 * 3.142 * rad).toFixed(2)}cm`
}
console.log(calcCircumference(radiusOfCircle));

// Function 2 : calcArea
function calcArea(rad) {
    return `The area is : ${(3.142 * rad**2).toFixed(2)}cm`
}
console.log(calcArea(radiusOfCircle));