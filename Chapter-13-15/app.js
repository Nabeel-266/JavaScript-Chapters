// --------------->    CHAPTER : " ARRAYS "    <---------------


// Q1. ---->  Declare an empty array using JS literal notation to store student names in future.
// Solution

var students = [];

// Q2. ---->  Declare an empty array using JS object notation to store student names in future.
// Solution

var students = new Array();

// Q3. ---->  Declare and initialize a strings array.
// Solution

var stringsArray = ["Apple", "Mango", "Banana", "Peach", "Orange"];

// Q4. ---->  Declare and initialize a numbers array.
// Solution

var numbersArray = [1, 2, 3, 4, 5];

// Q5. ---->  Declare and initialize a boolean array.
// Solution

var booleanArray = [true, false];

// Q5. ---->  Declare and initialize a mixed array.
// Solution

var variable = 123;
var mixedArray = ["Muhammad Nabeel", 22, true, variable];

// Q6. ---->  Declare and Initialize an array and store available education qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD).
// Solution

var degrees = ["SSC", "HSC", "BSc", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

document.write(`<h2>Qualifications:</h2><br>`)
document.write(`1) ${degrees[0]} <br>`);
document.write(`2) ${degrees[1]} <br>`);
document.write(`3) ${degrees[2]} <br>`);
document.write(`4) ${degrees[3]} <br>`);
document.write(`5) ${degrees[4]} <br>`);
document.write(`6) ${degrees[5]} <br>`);
document.write(`7) ${degrees[6]} <br>`);
document.write(`8) ${degrees[7]} <br>`);
document.write(`------------------------------<br><br>`)


// Q7. ---->  Write a program to store 3 student names in an array.Take another array to store score of these three students. Assume that total marks are 500 for each student, display the scores & percentages of students like:
// Solution

var studentNames = ['Muhammad Bilal', 'Ahmed Ali', 'Zubair Khan'];
var scoringMarks = [370, 320, 450];
var totalMarks = 500;

document.write(`<h2>RESULTS:</h2><br>`)
document.write(`Score of <b>${studentNames[0]}</b> is <b>${scoringMarks[2]}</b> out of <b>${totalMarks}</b>. Percentage: <b>${scoringMarks[2]/totalMarks*100}%</b> .<br>`);
document.write(`Score of <b>${studentNames[1]}</b> is <b>${scoringMarks[0]}</b> out of <b>${totalMarks}</b>. Percentage: <b>${scoringMarks[0]/totalMarks*100}%</b> .<br>`);
document.write(`Score of <b>${studentNames[2]}</b> is <b>${scoringMarks[1]}</b> out of <b>${totalMarks}</b>. Percentage: <b>${scoringMarks[1]/totalMarks*100}%</b> .<br>`);
document.write(`----------------------------------------------------------------------------------<br><br>`)


// Q8. -----> 9. Initialize an array with color names. Display the array elements in your browser.
// a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array. Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end & add that color to the end of the array. Display the updated array in your browser.
// c. Add two more color to the beginning of the array. Display the updated array in your browser.
// d. Delete the first color in the array. Display the updated array in your browser.
// e. Delete the last color in the array. Display the updated array in your browser.
// f. Ask the user at which index he/she wants to add a color & color name. Then add the color to desired position/index. . Display the updated array in your browser.
// g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. Then remove the same number of color(s) from user-definedposition/index. . Display the updated array in your browser.
//Solution

document.write(`<h2>COLORS:</h2><br>`);

let colors = [" Silver ", " Golden ", " Brown "];
let firstColorYouWant = prompt('Enter the First Color Name');
let lastColorYouWant = prompt('Enter the Last Color Name');
let betweenColorYouWant = prompt(' Enter the Between Color Names ');
let indexNumberAddColor = +prompt("Enter the Index Number that where you Add Color Names");
let indexNumberDeleteColor = +prompt("Enter the Index Number that where you start Delete Color Names");
let lengthNumberDeleteColor = +prompt("Enter the Index Number that how many Color Names you want to delete");


document.write(`<b style="font-family:cursive;"><u>Original Array :</u></b> <br>`);
document.write(`${colors} <br><br>`);

// A)
document.write(`<b style="font-family:cursive;"><u>Show Your Add FIRST COLOR As You Want Add In Original Array :</u></b> <br>`);
colors.unshift(` ${firstColorYouWant} `);
document.write(` ${colors} <br><br>`);

// B)
document.write(`<b style="font-family:cursive;"><u>Show Your Add LAST COLOR As You Want In Previous Array :</u></b> <br>`);
colors.push(` ${lastColorYouWant} `);
document.write(` ${colors} <br><br>`);

// C)
document.write(`<b style="font-family:cursive;"><u>Show Add Two Basic COLORS In Previous Array :</u></b> <br>`);
colors.splice(0,0," Black "," White ");
document.write(` ${colors} <br><br>`);

// D)
document.write(`<b style="font-family:cursive;"><u>Show Delete the FIRST COLOR In Previous Array :</u></b> <br>`);
colors.shift();
document.write(` ${colors} <br><br>`);

// E)
document.write(`<b style="font-family:cursive;"><u>Show Delete the LAST COLOR In Previous Array :</u></b> <br>`);
colors.pop();
document.write(` ${colors} <br><br>`);

// F)
document.write(`<b style="font-family:cursive;"><u>Show Your Add COLOR and POSITION As You Want In Previous Array :</u></b> <br>`);
colors.splice(indexNumberAddColor,0,` ${betweenColorYouWant} ` );
document.write(` ${colors} <br><br>`);

// G)
document.write(`<b style="font-family:cursive;"><u>Show Your Delete COLOR and POSITION As You Want In Previous Array :</u></b> <br>`);
colors.splice(indexNumberDeleteColor, lengthNumberDeleteColor);
document.write(` ${colors} <br><br>`);
