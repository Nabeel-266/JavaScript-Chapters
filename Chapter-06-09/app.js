// --------------->    CHAPTER : " MATH EXPRESSIONs - 02  "    <---------------


// Q1. ---->  Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser:
// Solution

let number = 5;
document.write("<h2 style='font-family:Monospace'>RESULT:</h2>");
document.write("The value of number is: " + number + "<br>---------------------------------------");

document.write("<br><br>The value of ++number is: " + ++number + "<br>");
document.write("Now the value of number is: " + number + "<br>");

document.write("<br><br>The value of number++ is: " + number++ + "<br>");
document.write("Now the value of number is: " + number + "<br>");

document.write("<br><br>The value of --number is: " + --number + "<br>");
document.write("Now the value of number is: " + number + "<br>");

document.write("<br><br>The value of number-- is: " + number-- + "<br>");
document.write("Now the value of number is: " + number + "<br><br><hr><br>");

// Q2. ---->  What will be the output in variables a, b & result after execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;
// Solution

let a = 2,b = 1;
document.write(`a is ${a} <br>`);
document.write(`b is ${b} <br><br>`);

let result = --a;
document.write(`result is --a: ${result} <br>`);

result = --a - --b;
document.write(`result is --a - --b: ${result} <br>`);

result = --a - --b + ++b;
document.write(`result is --a - --b + ++b: ${result} <br>`);

result = --a - --b + ++b + b--;
document.write(`result is --a - --b + ++b + b--: ${result} <br><br><hr><br>`);

// Q3. ---->  Write a program that takes input a name from user & greet the user.
// Solution

let yourName = prompt("Please! Enter your name");
alert(`Welcome ${yourName}`);

// Q4/5. ---->  Write a program to take input a number from user & display it’s multiplication table on your browser. If user does not enter a new number, multiplication table of 5 should be displayed by default.
// Solution

let inputNumber = Number(prompt("Enter a Number"));

if(inputNumber){
    document.write(`${inputNumber} x 1 = ${inputNumber * 1}<br>`);
    document.write(`${inputNumber} x 2 = ${inputNumber * 2}<br>`);
    document.write(`${inputNumber} x 3 = ${inputNumber * 3}<br>`);
    document.write(`${inputNumber} x 4 = ${inputNumber * 4}<br>`);
    document.write(`${inputNumber} x 5 = ${inputNumber * 5}<br>`);
    document.write(`${inputNumber} x 6 = ${inputNumber * 6}<br>`);
    document.write(`${inputNumber} x 7 = ${inputNumber * 7}<br>`);
    document.write(`${inputNumber} x 8 = ${inputNumber * 8}<br>`);
    document.write(`${inputNumber} x 9 = ${inputNumber * 9}<br>`);
    document.write(`${inputNumber} x 10 = ${inputNumber * 10}<br>`);
} else {
    document.write(`5 x 1 = ${5 * 1}<br>`);
    document.write(`5 x 2 = ${5 * 2}<br>`);
    document.write(`5 x 3 = ${5 * 3}<br>`);
    document.write(`5 x 4 = ${5 * 4}<br>`);
    document.write(`5 x 5 = ${5 * 5}<br>`);
    document.write(`5 x 6 = ${5 * 6}<br>`);
    document.write(`5 x 7 = ${5 * 7}<br>`);
    document.write(`5 x 8 = ${5 * 8}<br>`);
    document.write(`5 x 9 = ${5 * 9}<br>`);
    document.write(`5 x 10 = ${5 * 10}<br><br><hr><br><br>`);
}


// Q6. ---->  Take
// a) Take three subjects name from user and store them in 3 
// different variables.
// b) Total marks for each subject is 100, store it in another 
// variable.
// c) Take obtained marks for first subject from user and 
// stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user 
// and store them in variables.
// e) Now calculate total marks and percentage and show the 
// result in browser like this.(Hint: user table)
// Solution

let subject_1 = prompt('Enter Your First Subject');
let subject_2 = prompt('Enter Your Second Subject');
let subject_3 = prompt('Enter Your Third Subject');
let totalMarksOfEachSubject = 100;
let totalMarksAllSubject = totalMarksOfEachSubject * 3;
let subject_1_Obtained_Marks = Number(prompt('Enter Your First Subject Obtained Marks'));
let subject_2_Obtained_Marks = Number(prompt('Enter Your Second Subject Obtained Marks'));
let subject_3_Obtained_Marks = Number(prompt('Enter Your Third Subject Obtained Marks'));
let totalObtMarks = subject_1_Obtained_Marks + subject_2_Obtained_Marks + subject_3_Obtained_Marks;


document.write(`<table style="border-spacing:10px;border:3px solid white;">
<tr> <th style="width:100px;">Subject</th> <th>Total Marks</th> <th>Obtained Marks</th> <th>Percentage</th> </tr>
<tr> <td>${subject_1}</td> <td>${totalMarksOfEachSubject}</td> <td>${subject_1_Obtained_Marks}</td> <td>${subject_1_Obtained_Marks / totalMarksOfEachSubject * 100}%</td> </tr>
<tr> <td>${subject_2}</td> <td>${totalMarksOfEachSubject}</td> <td>${subject_2_Obtained_Marks}</td> <td>${subject_2_Obtained_Marks / totalMarksOfEachSubject * 100}%</td> </tr>
<tr> <td>${subject_3}</td> <td>${totalMarksOfEachSubject}</td> <td>${subject_3_Obtained_Marks}</td> <td>${subject_3_Obtained_Marks / totalMarksOfEachSubject * 100}%</td> </tr>
<tr> <td></td> <td>${totalMarksAllSubject}</td> <td>${totalObtMarks}</td> <td>${totalObtMarks / totalMarksAllSubject * 100}%</td> </tr>
</table> <br><br><hr><br>`);

