// --------------->    CHAPTER : " USER INPUT & CONDITIONAL STATEMENT "    <---------------


// Q1. ---->  Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this: “Welcome to city of lights”
// Solution

let cityName = prompt('Enter Your City Name');

if(cityName == "karachi" || cityName == "Karachi"){
    alert('Welcome to City of Lights');
} else {
    alert(`Welcome to City of ${cityName}`);
}

// Q2. ---->  Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the user is female, give the message: Good Morning Ma’am.
// Solution

let gender = prompt('Enter Your Gender');

if(gender === "male" || gender === "Male"){
    alert('Good Morning Sir');
} else if (gender === "female" || gender === "Female"){
    alert("Good Morning Ma'am");
} else {
    alert(`Good Morning`);
}

// Q3. ---->  Write a program to take input color of road traffic signal from the user & show the message according to this table:
// Solution

let trafficSignal_Color = prompt('Enter Traffic Signal Colour');


if(trafficSignal_Color === "red" || trafficSignal_Color === "Red" || trafficSignal_Color === "RED"){
    document.write(`<center><table style="border-spacing:10px;border:2px solid white;">
    <tr> <th style="width:100px;text-align:left;color:rgb(255, 0, 98);font-family:cursive;">Signal Colour</th> <th style="width:120px;text-align:center;color:rgb(255, 0, 98);font-family:cursive;">Message</th> </tr>

    <tr> <td style="width:100px;text-align:left;color:red;font-family:Monospace;">Red</td> <td style="width:120px;text-align:center;color:red;font-family:Monospace;">Must Stop</td> </tr>
    </table></center>`)
}
else if (trafficSignal_Color === "yellow" || trafficSignal_Color === "Yellow" || trafficSignal_Color === "YELLOW"){
    document.write(`<center><table style="border-spacing:10px;border:2px solid white;">
    <tr> <th style="width:100px;text-align:left;color:rgb(255, 0, 98);font-family:cursive;">Signal Colour</th> <th style="width:120px;text-align:center;color:rgb(255, 0, 98);font-family:cursive;">Message</th> </tr>

    <tr> <td style="width:100px;text-align:left;color:yellow;font-family:Monospace;">Yellow</td> <td style="width:120px;text-align:center;color:yellow;font-family:Monospace;">Ready to Move</td> </tr>
    </table></center>`)
}
else if (trafficSignal_Color === "green" || trafficSignal_Color === "Green" || trafficSignal_Color === "GREEN"){
    document.write(`<center><table style="border-spacing:10px;border:2px solid white;">
    <tr> <th style="width:100px;text-align:left;color:rgb(255, 0, 98);font-family:cursive;">Signal Colour</th> <th style="width:120px;text-align:center;color:rgb(255, 0, 98);font-family:cursive;">Message</th> </tr>

    <tr> <td style="width:100px;text-align:left;color:green;font-family:Monospace;">Green</td> <td style="width:120px;text-align:center;color:green;font-family:Monospace;">Move Now</td> </tr>
    </table></center>`)
}
else {
    document.write(`<center><table style="border-spacing:10px;border:2px solid white;">
    <tr> <th style="width:100px;text-align:left;color:rgb(255, 0, 98);font-family:cursive;">Signal Colour</th> <th style="width:120px;text-align:center;color:rgb(255, 0, 98);font-family:cursive;">Message</th> </tr>

    <tr> <td style="width:100px;text-align:left;color:red;font-family:Monospace;">Red</td> <td style="width:120px;text-align:center;color:red;font-family:Monospace;">Must Stop</td> </tr>

    <tr> <td style="width:100px;text-align:left;color:yellow;font-family:Monospace;">Yellow</td> <td style="width:120px;text-align:center;color:yellow;font-family:Monospace;">Ready to Move</td> </tr>

    <tr> <td style="width:100px;text-align:left;color:green;font-family:Monospace;">Green</td> <td style="width:120px;text-align:center;color:green;font-family:Monospace;">Move Now</td> </tr>
    </table></center>`)
}

// Q4. ---->  Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 0.25litres, show the message “Please refill the fuel in your car”
// Solution

let carFuel = Number(prompt('Enter your remaning Car Fuel'));

if(carFuel <= 0.25){
    alert(`Please! Refill a fuel in your car`);
} else {
    alert(`You have enough fuel in your car`);
}

// // Q5. ---->  Run this script, & check whether alert message would be displayed or not. Record the outputs.
// // Solution

//Task - A
let a = 4;
if (++a === 5){
    alert("given condition for variable a is true");
} else {
    alert("given condition for variable a is false");
}

//Task - B
let b = 82;
if (b++ === 83){
    alert("given condition for variable b is true");
} else {
    alert("given condition for variable b is false");
}

//Task - C
let c = 12;
if (c++ === 13){
    alert("condition 1 for variable c is true");
} else if (c === 13){
    alert("condition 2 for variable c is true");
} else if (++c < 14){
    alert("condition 3 for variable c is true");
} else if (c === 14){
    alert("condition 4 for variable c is true");
} else {
    alert("all conditions is false");
}

//Task - D
let materialCost = 20000;
let labourCost = 2000;
let totalCost = materialCost + labourCost;
if (totalCost === materialCost + labourCost){
    alert("The Cost is equal");
}else {
    alert("the Cost is not equal");
}

//Task - E
let trueOrFalse = prompt('Enter TRUE or FALSE');
if(trueOrFalse === "true" || trueOrFalse === "True" || trueOrFalse === "TRUE"){
    alert(true);
} else if(trueOrFalse === "false" || trueOrFalse === "False" || trueOrFalse === "FALSE"){
    alert(false);
} else {
    alert("Error");
}

//Task - F
if("car" > "cat"){
    alert('car is smaller than cat');
} else {
    alert('cat is smaller than car');
}

// Q6. ---->  Write a program to take input the marks obtained in three subjects & total marks. Compute & show the resulting percentage on your page. Show the total marks, marks obtained, percentage, grade & remarks like:
// Solution

let subject_1 = +prompt("Enter Your Subject-1 Obtained Marks");
let subject_2 = +prompt("Enter Your Subject-2 Obtained Marks");
let subject_3 = +prompt("Enter Your Subject-3 Obtained Marks");
let totalMarksObtained = subject_1 + subject_2 + subject_3;
let totalMarks = 300;
let percentage = totalMarksObtained / 300 * 100;

document.write(`<br><hr><br><h2 style="font-size:35px;font-family:sans-serif;color:rgb(255, 0, 98);">Marks Sheet</h2><br>`)
document.write(`<h4 style="font-size:20px;font-family:Monospace;margin-bottom:8px">Total Marks : 300</h4>`);
document.write(`<h4 style="font-size:20px;font-family:Monospace;margin-bottom:8px">Marks Obtained : ${totalMarksObtained}</h4>`);
document.write(`<h4 style="font-size:20px;font-family:Monospace;margin-bottom:8px">Percentage : ${percentage}%</h4>`);

if(percentage >= 80){
    document.write(`<h4 style="font-size:20px;font-family:Monospace;margin-bottom:8px">Grade : A-1</h4>`);
    document.write(`<h4 style="font-size:20px;font-family:Monospace;margin-bottom:8px">Remarks : Excellent</h4>`);
} else if(percentage >= 70){
    document.write(`<h4 style="font-size:20px;font-family:Monospace;margin-bottom:8px">Grade : A</h4>`);
    document.write(`<h4 style="font-size:20px;font-family:Monospace;margin-bottom:8px">Remarks : Good</h4>`);
} else if(percentage >= 60){
    document.write(`<h4 style="font-size:20px;font-family:Monospace;margin-bottom:8px">Grade : B</h4>`);
    document.write(`<h4 style="font-size:20px;font-family:Monospace;margin-bottom:8px">Remarks : You need to improve</h4>`);
} else if(percentage < 60){
    document.write(`<h4 style="font-size:20px;font-family:Monospace;margin-bottom:8px">Grade : F</h4>`);
    document.write(`<h4 style="font-size:20px;font-family:Monospace;margin-bottom:8px">Remarks : Sorry! You are fail</h4>`);
} else {
    document.write(`<h4 style="font-size:20px;font-family:Monospace;margin-bottom:8px">Error</h4>`);
    document.write(`<h4 style="font-size:20px;font-family:Monospace;margin-bottom:8px">Error</h4>`);
}

// Q7. ---->  Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.
// Solution

let secret = 7;
let guess = +prompt("Guess the Number between 1 to 10");

if (guess === secret){
    alert(`Bingo! Correct answer`);
} else if (guess === secret + 1 || guess === secret - 1){
    alert(`Close enough to the correct answer`)
} else {
    alert(`Your guess is wrong`)
}

// Q8. ---->  Write a program to check whether the given number is divisible by 3. Show the message to the user if the number is divisible by 3.
// Solution

let randomNumber = +prompt('Enter the Random Numbers and Show you is it Divisible by 3');

if(randomNumber % 3 == 0){
    alert(`It's a Possible Number to Divisible by 3`);
} else {
    alert(`It's not a Possible Number to Divisible by 3`);
}

// Q9. ---->  Write a program that checks whether the given input is an even number or an odd number.
// Solution

let anyNumber = +prompt('Enter the Random Numbers and Show you is it Even or Odd');

if(anyNumber % 2 == 0){
    alert(`It's a Even Number`);
} else {
    alert(`It's a Odd Number`);
}

// Q10. ---->  Write a program that takes temperature as input and shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”
// Solution

let temperature = +prompt("Enter Your City Temperature");

if (temperature > 35){
    alert(`It is too Hot Outside.`);
} else if (temperature > 20){
    alert(`The Weather today is Normal.`);
} else if (temperature > 5){
    alert(`Today’s Weather is cool.`);
} else if (temperature <= 5){
    alert(`OMG! Today’s weather is so Cool.`);
} else {
    alert(`Undefined Weather`);
}

// Q11. ---->  Write a program to create a calculator for +,-,*, / & % using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.
// Solution

let value_01 = Number(prompt('Enter Your First Number'));
let airthmetic_Op = prompt('Enter Your Wanted Operators e.g: [ + , - , * , / , % , power ]');
let value_02 = Number(prompt('Enter Your Second Number'));
let answer;

document.write("<br><hr><br>");
switch(airthmetic_Op){
    case '+':
        answer = value_01 + value_02;
        document.write(`<h3>${value_01} + ${value_02} = ${answer}</h3>`);
        break;

    case '-':
        answer = value_01 - value_02;
        document.write(`<h3>${value_01} - ${value_02} = ${answer}</h3>`);
        break; 
    
    case '*':
        answer = value_01 * value_02;
        document.write(`<h3>${value_01} * ${value_02} = ${answer}</h3>`);
        break;
     
    case '/':
        answer = value_01 / value_02;
        document.write(`<h3>${value_01} / ${value_02} = ${answer}</h3>`);
        break; 
        
    case '%':
        answer = value_01 / 100 * value_02;
        document.write(`<h3>${value_01} % ${value_02} = ${answer}</h3>`);
        break; 
        
    case 'power':
        answer = value_01 ** value_02;
        document.write(`<h3>( ${value_01} )<sup>${value_02}</sup> = ${answer}</h3>`);
        break;    
}
