// --------------->    CHAPTER : " MATH EXPRESSIONS "    <---------------


// Q1. ---->  Write a program that take two numbers & add them in a new variable. Show the result in your browser.
// Solution

let num_1 = 7;
let num_2 = 2;
let addition = num_1 + num_2;

alert("Addition of " + num_1 + " and " + num_2 + " is " + addition);

// Q2. ---->  Repeat task1 for subtraction, multiplication, division & modulus.
// Solution

let subtraction = num_1 - num_2;
let multiplication = num_1 * num_2;
let division = num_1 / num_2;
let modulus = num_1 % num_2;

alert("Subtraction of " + num_1 + " from " + num_2 + " is " + subtraction);
alert("Multiplication of " + num_1 + " from " + num_2 + " is " + multiplication);
alert("Division of " + num_1 + " into " + num_2 + " is " + division);
alert("Modulus of " + num_1 + " into " + num_2 + " is " + modulus);

// Q3. ---->  Do the following using JS Mathematic Expressions
/*              a. Declare a variable.
                b. Show the value of variable in your browser like “Value after variable declaration is: ??”.
                c. Initialize the variable with some number.
                d. Show the value of variable in your browser like “Initial value: 5”.
                e. Increment the variable.
                f. Show the value of variable in your browser like “Value after increment is: 6”.
                g. Add 7 to the variable.
                h. Show the value of variable in your browser like “Value after addition is: 13”.
                i. Decrement the variable.
                j. Show the value of variable in your browser like “Value after decrement is: 12”.
                k. Show the remainder after dividing the variable’s value by 3. 
                l. Output : “The remainder is : 0”. */
// Solution

let digit;
document.write("Value after variable declaration is " + digit + "<br>");

digit = 3;
document.write("Initial Value: " + digit + "<br>");

digit++;
document.write("Value after increment is: " + digit + "<br>");

digit+=5;
document.write("Value after addition is: " + digit + "<br>");

digit--;
document.write("Value after decrement is: " + digit + "<br>");

digit%=2;
document.write("The remainder is : " + digit + "<br><br><hr>");

// Q4. ---->  Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie.
// Solution

let movieTicket = 800;
let buyingTicket = 10;
let total_Cost = movieTicket * buyingTicket;
document.write("<br>Total cost to buy 5 tickets to a movie is "+total_Cost+" PKR <br><br><hr>");

// Q5. ---->  Write a script to display multiplication table of any number in your browser. E.g
// Solution

// let $digit = 5;
// let value = 1;
// let multiply = $digit * value;

// document.write("<h3>Table of 5</h3>");
// document.write($digit + " x " + value + " = " + multiply + "<br>");
// value++;
// document.write($digit + " x " + value + " = " + multiply + "<br>");
// value++;
// document.write($digit + " x " + value + " = " + multiply + "<br>");
// value++;
// document.write($digit + " x " + value + " = " + multiply + "<br>");
// value++;
// document.write($digit + " x " + value + " = " + multiply + "<br>");
// value++;
// document.write($digit + " x " + value + " = " + multiply + "<br>");
// value++;
// document.write($digit + " x " + value + " = " + multiply + "<br>");
// value++;
// document.write($digit + " x " + value + " = " + multiply + "<br>");
// value++;
// document.write($digit + " x " + value + " = " + multiply + "<br>");
// value++;
// document.write($digit + " x " + value + " = " + multiply + "<br>");

document.write("<br><h2 style='font-family:monospace;'>Table of 5</h2>");
for(let $digit = 5; $digit == 5; $digit++){
    for(let value = 1; value <= 10; value++){
        let multiply = $digit*value;
        document.write($digit + "x" + value + "=" + multiply + "<br>");
    }
    document.write("<br><hr>");
}

// Q6. ---->  The Temperature Converter: It’s hot out! Let’s make a 
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.
// Solution

document.write("<br><h2 style='font-family:monospace;'>Temperature Converter</h2><br>");

let Celsius = 10;
let celsiusToFahrenheit = (Celsius * 9/5) + 32;
document.write(Celsius+" <sup>o</sup>C is " + celsiusToFahrenheit + " <sup>o</sup>F <br>");

let Fahrenheit = 75;
let fahrenheittoCelsius = (Fahrenheit - 32) * 5/9;
document.write(Fahrenheit+" <sup>o</sup>F is " + fahrenheittoCelsius + " <sup>o</sup>C <br><br><hr>");


// Q7. ---->  Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges
// Compute the total cost & show the receipt in your browser.
// Solution

let priceItem_1 = 700;
let priceItem_2 = 500;
let quantityItem_1 = 4;
let quantityItem_2 = 6;
let shippingCharges = 100;
let totalCost = (priceItem_1 * quantityItem_1) + (priceItem_2 * quantityItem_2) + shippingCharges;

document.write("<br><h2 style='font-family:monospace;'>Shopping Cart</h2>")
document.write('<br>Price of Item 01 is ' + priceItem_1 + '<br>Quantity of Item 01 is ' + quantityItem_1 + '<br>Price of Item 02 is ' + priceItem_2 + '<br>Quantity of Item 02 is ' + quantityItem_2 + '<br>Shipping Charges is' + shippingCharges + '<br>');
document.write("<br>Total cost of your order is " + totalCost + "<br><br><hr>");

// Q8. ---->  Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser.
// Solution

let totalMarks = 950;
let marksObtained = 787;
let result = marksObtained / totalMarks * 100;
document.write("<br><h2 style='font-family:monospace;'>Mark Sheet</h2>");
document.write("<br>Total Marks : " + totalMarks + "<br>Marks Obtained : " + marksObtained + "<br>Percentage : " + result + "<br><br><hr>");

// Q9. ---->  Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. Perform all calculations in a single expression.(Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee)
// Solution

document.write("<br><h2 style='font-family:monospace;'>Calculate Currency</h2>")
let totalCurrency = 10 * 275 + 25 * 73;
document.write("<br>The total currency in PKR: " + totalCurrency + "<br><br><hr>")

// Q10. ---->  Write a program to initialize a variable with some number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression
// Solution

let number = 5;
let $Result = ((number + 5) * 10) / 2;
document.write("<br><h2 style='font-family:monospace;'>Airthmetic Operations</h2>");
document.write("<br>The answer is : " + $Result + "<br><br><hr>");

// Q11. ---->  The Age Calculator: Forgot how old someone is? Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored values
// Solution

document.write("<br><h2 style='font-family:monospace;'>Age Calculator</h2>");
let currentYear = 2023;
let birthYear = 1988;
let yourAge = currentYear - birthYear;
document.write("<br>Current Year : " + currentYear + "<br>Birth Year : " + birthYear + "<br>Your age is : " + yourAge + "<br><br><hr>");

// Q12. ---->  The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The area is NN”. (Hint : Area of a circle = π r2)
// Solution

document.write("<br><h2 style='font-family:monospace;'>The Geometrizer</h2>");
let radius = 30;
let circumference = 2 * 3.142 * 30;
let area = 3.142 * radius**2;

document.write("<br>Radius of a Circle : " + radius);
document.write("<br>The Circumference is : " + circumference);
document.write("<br>The Area is : " + area + "<br><br><hr>");

// Q13. ---->  The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is? Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of your life.
// Output the result to the screen like so: “You will need NNNN to last you until the ripe old age of NN”.
// Solution

document.write("<br><h2 style='font-family:monospace;'>The Lifetime Supply Calculator</h2>");
let snack = "Lays";
let currentAge = 22;
let estimatedAge = 60;
let perDay_snacks = 2;
let totalSnaks = perDay_snacks * 365 * (estimatedAge - currentAge); 

document.write("<br>Favourite Snack: " + snack);
document.write("<br>Current Age: " + currentAge);
document.write("<br>Estimate Maximum Age: " + estimatedAge);
document.write("<br>Amount of Snacks per day: " + perDay_snacks + "<br><br>");
document.write("<br>You will need " + totalSnaks + " " + snack + " to last you intil the ripe old age of " + estimatedAge + "<br><br><br>")