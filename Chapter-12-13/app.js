// --------------->    CHAPTER : " IF ELSE & ELSE IF STATEMENTS  "    <---------------


// Q1. ---->  Write a program that takes a character (number or string) in a variable & checks whether the given input is a number, uppercase letter or lower case letter. (Hint: ASCII codes:- A=65, Z=90, a=97, z=122).
// Solution

let char = prompt("Enter a character: ");

if(char >= '0' && char <= '9'){
    alert('Your Input Character is a Number');
} else if (char >= 'A' && char <= 'Z'){
    alert('Your Input Character is a Uppercase Letter');
} else if (char >= 'a' && char<= 'z'){
    alert('Your Input Character is a Lowercase Letter');
} else {
    alert('Your Input Character is not a Number OR Letter');
}

// Q2. ----> Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal.
// Solution

let integer1 = +prompt('Enter the First Integer Number');
let integer2 = +prompt('Enter the Second Integer Number');

if(integer1 > integer2){
    alert(`First Integer Number is Larger than Second Integer Number which is ${integer1}`);
} else if(integer1 < integer2){
    alert(`Second Integer Number is Larger than First Integer Number which is ${integer2}`);
} else if (integer1 === integer2){
    alert('Both Integers are Equal');
} else {
    alert('Error');
}

// Q3. ----> Write a program that takes input a number from user & state whether the number is positive, negative or zero.
// Solution

let num = +prompt('Enter the Number');

if(num > 0){
    alert(`Your Enter Number is Positive`);
} else if(num < 0){
    alert(`Your Enter Number is Negative`);
} else {
    alert(`Your Enter Number is Zero`);
}

// Q4. ----> Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise
// Solution

let character = prompt('Enter a letter and check it is a vowel letter or not');
let vowels_lwr = ['a','e','i','o','u'];
let vowels_upr = ['A','E','I','O','U'];

if (character === vowels_lwr[0] || character === vowels_lwr[1] || character === vowels_lwr[2] || character === vowels_lwr[3] || character === vowels_lwr[4] || character === vowels_upr[0] || character === vowels_upr[1] || character === vowels_upr[2]|| character === vowels_upr[3] || character === vowels_upr[4]){

    alert(true);   
} else {
    alert(false);
}

// Q5. ----> Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
//     i. Check if user has entered password. If not, then 
//     give message “ Please enter your password”
//     ii. Check if both passwords are same. If they are 
//     same, show message “Correct! The password you 
//     entered matches the original password”. Show 
//     “Incorrect password” otherwise
// Solution

let inputPassword = prompt('Enter Password');
let verifyInputPassword = prompt('Verify Your Password');

if(inputPassword === ''){
    alert(`Please enter your password`);
} else if (inputPassword === verifyInputPassword){
    alert(`Correct! The password you entered matches the original password`);
} else if (inputPassword !== verifyInputPassword){
    alert(`Incorrect! The password you entered not matches the original password`);
} else {
    alert(`Sorry!`);
}

// Q6. ----> This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }
// Solution

var greeting;
var hour = 13;

if (hour < 18) {
    greeting = "Good day";
} else{
    greeting = "Good evening";
}

console.log(greeting);

// Q7. ----> Write a program that takes time as input from user in 24 hours clock format like: 1900 = 7pm. Implement the following case using if, else & else if statements
// Solution

let time = +prompt('Enter the Time Zone Period between 0 to 24 hours like (0000 to 2359)'); //7pm

if(time >= 0000 && time < 1200){
   alert("Good Morning!");
} else if(time >= 1200 && time < 1700){
   alert("Good Afternoon!");
} else if(time >= 1700 && time < 2100){
   alert("Good Evening!");
} else if(time >= 2100 && time < 2359){
   alert("Good Night!");
} else {
   alert("Sorry! Time zone is'nt correct");
}


