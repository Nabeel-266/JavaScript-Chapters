// ------------------->    CHAPTER : " VARIABLE FOR NUMBERS "    <-------------------


// Q1. ---->  Declare a variable called age & assign to it your age. Show your age in an alert box.
// Solution

let age = 22;
alert('I am ' + age + ' years old');

// Q2. ---->  Declare & initialize a variable to keep track of how many times a visitor has visited a web page. Show his/her number of visits on your web page. For example: “You have visited this site N times”.
// Solution

let visits = 0;
visits++;

alert("You have visited this site " + visits + " times.");

// Q3. ---->  Declare a variable called birthYear & assign to it your birth year. Show the following message in your browser:
// Solution

let birthYear = 2000;
document.write("<br><br>My birth year is " + 2000);

/* Q4. ---->  A visitor visits an online clothing store www.xyzClothing.com . Write a script to store in variables the following information:
        a. Visitor’s name
        b. Product title
        c. Quantity i.e. how many products a visitor wants to order
 Show the following message in your browser: “John Doe ordered 5 T-shirt(s) on XYZ Clothing store”. */
// Solution

let name = "Syed Kashif";
let product = "T-shirt(s)";
let orders = 5;

document.write('<br><br>');
document.write(name + " ordered " + orders + " " + product + " on ABC Clothing Store");