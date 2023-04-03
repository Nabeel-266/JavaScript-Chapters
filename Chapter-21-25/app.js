// // --------------->    CHAPTER : " STRINGS METHOD "    <---------------


// // Q1. ---->  Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable titled fullName. Greet the user using his full name.
// // Solution

// let firstName = prompt('Please enter your first name:');
// let lastName = prompt('Please enter your last name:');

// let fullName1 = `${firstName} ${lastName}`;

// alert('Hello, ' + fullName1 + ' !');


// // Q2. ---->  Write a program to take a user input about his favorite mobile phone model. Find and display the length of user input in your browser.
// // Solution

// let phoneModel = prompt('Enter your favourite mobile phone model');

// document.write('My favourite phone is: ' + phoneModel + '<br>');
// document.write(`Length of String: ${phoneModel.length} <br>`);
// document.write(`------------------------------------------------------------<br><br>`);


// // Q3. ---->  Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser .
// // Solution


// let string1 = 'Pakistani';

// document.write(`<h3>String: Pakistani</h3> <br>`);
// document.write(`<h4>Index of ' t ' : ${string1.indexOf('t')}</h4> <br>`);
// document.write(`------------------------------------------------------------<br><br>`);


// // Q4. ---->  Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser.
// // Solution

// let string2 = 'Hello World';

// document.write(`<h3>String: Hello World</h3> <br>`);
// document.write(`<h4>Last Index of ' l ' : ${string2.lastIndexOf('l')}</h4> <br>`);
// document.write(`------------------------------------------------------------<br><br>`);


// // Q5. ---->  Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browser.
// // Solution

// document.write(`<h3>String: Pakistani</h3> <br>`);
// document.write(`<h4>Charater at index 4 : ${string1.charAt('4')}</h4> <br>`);
// document.write(`------------------------------------------------------------<br><br>`);


// // Q6. ---->  Repeat Q1 using string concat() method.
// // Solution

// let fullName2 = firstName.concat(` ${lastName}`);

// document.write(`<h3>Join String with concat() method</h3> <br>`);
// document.write('Hello, ' + fullName2 + ' ! <br>');
// document.write(`------------------------------------------------------------<br><br>`);


// // Q7. ---->  Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser.
// // Solution

// let city = 'Hyderabad';

// document.write(`<h3>City: ${city}</h3> <br>`);
// document.write(`<h4>After Replacement : ${city.replace('Hyder', 'Islam')}</h4> <br>`);
// document.write(`------------------------------------------------------------<br><br>`);


// // Q8. ---->  Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser. var message = “Ali and Sami are best friends. They play cricket and football together.”
// // Solution

// var message = 'Ali and Sami are best friends. They play cricket and football together.';

// var messageUpdate = message.replace(/and/g, "&");
// document.write(`<h3>and into & by Replace Method</h3> <br>`);
// document.write(`<h4>${messageUpdate}</h4> <br>`);
// document.write(`------------------------------------------------------------<br><br>`);

// // Q9. ---->  Write a program that converts a string “472” to a number 472. Display the values & types in your browser.
// // Solution

// var stringNum = '472';
// var num = Number(stringNum);
// document.write(`<h3>Value : ${stringNum} <br>Type : ${typeof(stringNum)}</h3> <br>`);
// document.write(`<h3>Value : ${num} <br>Type : ${typeof(num)}</h3>`);
// document.write(`------------------------------------------------------------<br><br>`);

// // Q10. ---->  Write a program that takes user input. Convert and show the input in capital letters.
// // Solution

// var userInput1 = prompt('Enter a Fruit Name');
// var userInputToUpperCase = userInput1.toUpperCase();

// document.write(`<h3> User Input : ${userInput1}</h3>`);
// document.write(`<h3> User Input In Uppercase: ${userInputToUpperCase}</h3>`);
// document.write(`------------------------------------------------------------<br><br>`);

// // Q11. ---->  Write a program that takes user input. Convert and show the input in title case
// // Solution

// var userInput2 = prompt('Enter a Vegetable Name');
// var userInputToTitleCase = userInput2.charAt(0).toUpperCase() + userInput2.substring(1).toLowerCase();

// document.write(`<h3> User Input : ${userInput2}</h3>`);
// document.write(`<h3> User Input In Titlecase: ${userInputToTitleCase}</h3>`);
// document.write(`------------------------------------------------------------<br><br>`);


// // Q12. ---->  Write a program that converts the variable num to string.
// //             var num = 35.36 ; Remove the dot to display “3536” display in your browser.
// // Solution

// var numBer = 35.36;
// var strIng = numBer.toString();

// document.write(`<h3> Number : ${numBer}</h3>`);
// document.write(`<h3> Result : ${strIng.replace(".", "")}</h3>`);
// document.write(`------------------------------------------------------------<br><br>`);


// Q13. ---->  Write a program to take user input and store username in a variable. If the username contains any special symbol among [@ . , !], prompt the user to enter a valid username. For character codes of [@ .
// Solution

let username = prompt('Enter a Username');

if(username.includes('@') || username.includes('.') || username.includes(',') || username.includes('!')){
    alert("Please enter a valid username without special symbols [@ . , !]");
    username = prompt('Enter a Username');
}

document.write("<h3>Username: " + username + "</h3>");
document.write(`------------------------------------------------------------<br><br>`);


// Q14. ---->  You have an array A = [cake”, “apple pie”, “cookie”, “chips”, “patties”] Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not.Note: Perform case insensitive search. Whether the user enters cookie, Cookie, COOKIE or coOkIE, program should inform about its availability.
// Solution

var ABC_Bakery = ["Cake", "apple pie", "cOokie", "chips", "patties"];
var userSearch = prompt("Welcome to ABC Bakery, What do you want to order Sir/Ma'am ?");
var searchInput = userSearch.toLowerCase();

var isFound = false;
var indexNum;

for (let i = 0; i < ABC_Bakery.length; i++){
    if (searchInput === ABC_Bakery[i].toLowerCase()){
        isFound = true;
        indexNum = i;
        break;
    }
}

if (isFound == true){
    alert(`${userSearch} is available at index ${indexNum} in our bakery`)
} else {
    alert(userSearch + " is not available in the list.");
}


// Q15. ---->  Write a program to take password as an input from user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements, prompt the user to enter a valid password. For character codes of a-z, A-Z & 0-9, refer to ASCII table at the end of this document.
// Solution

var userPassword = prompt("Enter a password");

if(userPassword.match(/[A-Z]/) && userPassword.match(/[a-z]/) && userPassword.match(/[0-9]/) && userPassword.length >= 6 && userPassword.charAt(0) != userPassword.match(/[0-9]/)){
    alert('Your Password is valid');
} 
else {
    alert('Please! entered a valid password\n\nIt should contain alphabets and numbers.\nIt should contain Capital & Small Letters\nIt should not start with a number\nIt should not contain any special characters\nIt must at least 6 characters long')
    userPassword = prompt("Enter a password");
}

// Q16. ---->  Write a program to convert the following string to an array using string split method. var university = “University of Karachi”;Display the elements of array in your browser
// Solution

var university = 'University of Karachi';
var splitUniversity = university.split('')

for (let u = 0; u < splitUniversity.length; u++){
    document.write(`${splitUniversity[u]} <br>`)
}
document.write(`------------------------------------------------------------<br><br>`);


// Q17. ---->  Write a program to display the last character of a user input.
// Solution

let userInput3 = prompt('Enter a Random Word');
let lastChar = userInput3.charAt(userInput3.length - 1);

document.write(`<h3> User Input : ${userInput3}</h3>`);
document.write(`<h3> Last Character of Input : ${lastChar}</h3>`);
document.write(`------------------------------------------------------------<br><br>`);


// Q18. ---->  You have a string “The quick brown fox jumps over the lazy dog”. Write a program to count number of occurrences of word “the” in given strin
// Solution

var string3 = "The quick brown fox jumps over the lazy dog";
var word_the = "the";
var count = 0; 

var spltSting3 = string3.split(' ');

for (let i = 0; i < spltSting3.length; i++){
    if(spltSting3[i].toLowerCase() === word_the){
        count++;
    }
}

document.write(`<h3> Text : ${string3}</h3>`);
document.write(`<h3> There are ${count} occurrence(s) of word '${word_the}'</h3>`);
document.write(`------------------------------------------------------------<br><br>`);