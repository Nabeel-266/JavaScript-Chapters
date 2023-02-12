// --------------->    CHAPTER : " VARIABLE NAMES: LEGAL & ILLEGAL "    <---------------


// Q1. ---->  Declare 3 variables in one statement.
// Solution

let $one = "Variable ONE";
let $two = "Variable TWO";
let $three = "Variable THREE";

alert($one + "\n" + $two + "\n" + $three + "\nThese three variables display through one statement.");

// Q2. ---->  Declare 5 legal & 5 illegal variable names.
// Solution

// -------------- LEGAL VARIABLES --------------
let legal_01 = `let <b style = "color: green;font-family: Courier New;"> firstName </b> = 'Muhammad';`;
let legal_02 = `let <b style = "color: green;font-family: Courier New;"> last_name </b> = 'Nabeel';`;
let legal_03 = `let <b style = "color: green;font-family: Courier New;"> $age </b> = '22';`;
let legal_04 = `let <b style = "color: green;font-family: Courier New;"> course01 </b> = 'CCNA';`;
let legal_05 = `let <b style = "color: green;font-family: Courier New;"> course02_Ongoing </b> = 'Web & Mobile App Development';`;

document.write('<h2 style = "color: rgb(255, 123, 0);font-family: Monospace;">-------------- LEGAL VARIABLE NAMES --------------</h2> <br>' + legal_01 + '<br>' + legal_02+ '<br>'+ legal_03 + '<br>'+ legal_04 + '<br>' + legal_05 + '<br><br>');

// -------------- ILLEGAL VARIABLES --------------
let illegal_01 = `let <b style = "color: red;font-family: Courier New;"> 1stName </b> = 'Muhammad';`;
let illegal_02 = `let <b style = "color: red;font-family: Courier New;"> last-name </b> = 'Nabeel';`;
let illegal_03 = `let <b style = "color: red;font-family: Courier New;"> &age </b> = '22';`;
let illegal_04 = `let <b style = "color: red;font-family: Courier New;"> course 01 </b> = 'CCNA';`;
let illegal_05 = `let <b style = "color: red;font-family: Courier New;"> course02(Ongoing) </b> = 'Web & Mobile App Development';`;

document.write('<h2 style = "color: rgb(255, 123, 0);font-family: Monospace;">-------------- ILLEGAL VARIABLE NAMES --------------</h2> <br>' + illegal_01 + '<br>' + illegal_02+ '<br>'+ illegal_03 + '<br>'+ illegal_04 + '<br>' + illegal_05 + '<br>');


/* Q3. ---->  Display this in your browser
                a) A heading stating “Rules for naming JS variables”
                b) Variable names can only contain ______, ______,
                ______ and ______.
                For example $my_1stVariable
                c) Variables must begin with a ______, ______ or
                _____. For example $name, _name or name
                d) Variable names are case _________
                e) Variable names should not be JS _________ */
// Solution

let heading = `<h2 style = "color: rgb(255, 123, 0);font-family: Monospace;font-size: 32px;text-align: center;margin-top:35px;"> Rules For Naming JS Variables </h2>`;
let line_01 = `<p style = "color: lightgray;font-family: Courier New;text-align: center;"> Variable names can only contain Alphabets, Numbers, $ and _ For example $my_1stVariable </p>`;
let line_02 = `<p style = "color: lightgray;font-family: Courier New;text-align: center;"> Variables must begin with a Alphabets, $ or_. For example name, $name or _name</p>`;
let line_03 = `<p style = "color: lightgray;font-family: Courier New;text-align: center;"> Variable names are case sensitive. </p>`;
let line_04 = `<p style = "color: lightgray;font-family: Courier New;text-align: center;"> Variable names should not be JS Keywords. </p>`;

document.write(heading + '<br>' + line_01 + '<br>' + line_02 + '<br>' + line_03 + '<br>' + line_04 + '<br>');