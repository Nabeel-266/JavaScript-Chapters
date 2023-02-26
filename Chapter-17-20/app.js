// --------------->    CHAPTER : " ARRAYS & LOOP "    <---------------


// Q1. ---->  Declare and initialize an empty multidimensional array. (Array of arrays)
// Solution

let multiArray = [[]];


// Q2. ---->  Declare and initialize a multidimensional array representing the following matrix:
// Solution

const multiArr = [[0,1,2,3], [1,0,1,2], [2,1,0,1]];

document.write(`<br><br><h2> MATRIX </h2> <br>`)
document.write(`<h2>${multiArr[0].join(' ')}</h2>`);
document.write(`<h2>${multiArr[1].join(' ')}</h2>`);
document.write(`<h2>${multiArr[2].join(' ')}</h2>`);
document.write(`<br>-----------------------------------------------------------------------------------<br><br>`);


// Q3. ---->  Write a program to print numeric counting from 1 to 10.
// Solution

document.write(`<h2> Numeric Counting </h2> <br>`);
for(let i = 1; i < 11; i++){
    document.write(`<b> ${i} </b><br>`);
}
document.write(`<br>-----------------------------------------------------------------------------------<br><br>`);


// Q4. ---->  Write a program to print multiplication table of any number using for loop. Table number & length should be taken as an input from user.
// Solution

let tableNumber = +prompt("Enter a number to show its multiplication table");
let tableLength = +prompt("Enter length of multiplication table");

document.write(`<h2> Multiplication Table of ${tableNumber} Length ${tableLength}</h2> <br>`);
for(let a = 1; a <= tableLength; a++){
    document.write(`${tableNumber} x ${a} = ${tableNumber*a} <br>`);
}
document.write(`<br>-----------------------------------------------------------------------------------<br><br>`);


// Q5. ---->  Write a program to print items of the following array using for loop:fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”].
// Solution

var fruits =["Apple", "Banana", "Mango", "Orange", "Strawberry"];

document.write(`<b>${fruits.join('<br>')}</b> <br><br>`);
for(let x = 0; x < fruits.length; x++){
    document.write(`Element at index ${x} is ${fruits[x]} <br>`);
}
document.write(`<br>-----------------------------------------------------------------------------------<br><br>`);


// Q6. ---->  Generate the following series in your browser. See example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
// Solution

document.write(`<h2>Counting :</h2> <br>`);
for(let z = 1; z <= 15; z++){
    document.write(`${z},`)
}

document.write(`<br><br><h2>Reverse Counting :</h2> <br>`);
for(let z = 10; z >= 1; z--){
    document.write(`${z},`)
}

document.write(`<br><br><h2>Even Counting :</h2> <br>`);
for(let z = 1; z <= 20; z++){
    if(z % 2 === 0){
        document.write(`${z},`)
    }
}

document.write(`<br><br><h2>Odd Counting :</h2> <br>`);
for(let z = 1; z <= 20; z++){
    if(z % 2 !== 0){
        document.write(`${z},`)
    }
}

const series = ['2k','4k', '6k', '8k', '10k', '12k', '14k', '16k', '18k', '20k'];
document.write(`<br><br><h2>Series :</h2> <br>`);
for(let z = 0; z <= series.length -1; z++){
    document.write(`${series[z]}, `)
}
document.write(`<br>-----------------------------------------------------------------------------------<br><br>`);


// Q7. ---->  You have an array A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”] Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not.
// Solution

const bakeryItems = ["cake", "apple pie", "cookie", "chips", "patties", "bread", "snacks"];
let searchItem = prompt('Welcomw to ABC Bakery, What do you want to order :');
let foundIndex = -1;

for (let i = 0; i < bakeryItems.length; i++){
    if(bakeryItems[i] === searchItem){
        foundIndex = i;
        break;
    }
}

if(foundIndex !== -1){
    alert(`Yes Sir! ${searchItem} is available at index ${foundIndex} in our bakery`);
} else {
    alert(`We are sorry! ${searchItem} is not available in our bakery`);
}

// Another Method Without Loop

// const bakeryItems = ["cake", "apple pie", "cookie", "chips", "patties"];
// const searchItems = prompt("Enter search Items:");
// const found = bakeryItems.includes(searchItems);

// // Prompt user with search result
// if (found) {
//   alert(`The item "${searchItems}" was found in the list.`);
// } else {
//   alert(`The item "${searchItems}" was not found in the list.`);
// }


// Q8. ---->  . Write a program to identify the largest number in the given array.
// Solution

const numbers = [55, 81,67, 89, 12, 34, 59, 98, 41];
let largestNumber = 0;

for(let c = 0; c < numbers.length; c++){
    if(numbers[c] > largestNumber){
        largestNumber = numbers[c];
    }
}

document.write(`<h3>Array Items: ${numbers.join(', ')}</h3> <br>`);
document.write(`<h3>The largest number of the define array is : ${largestNumber}</h3>`);
document.write(`<br>-----------------------------------------------------------------------------------<br><br>`);


// Q9. ---->  Write a program to identify the smallest number in the given array.
// Solution

const Numbers = [75, 51, 27, 79, 12, 44, 89, 99, 61];
let SmallestNumber = Numbers[0];

for(let b = 0; b < Numbers.length; b++){
    if(Numbers[b] < SmallestNumber){
        SmallestNumber = Numbers[b];
    }
}

document.write(`<h3>Array Items: ${Numbers.join(', ')}</h3> <br>`);
document.write(`<h3>The smallest number of the define array is : ${SmallestNumber}</h3>`);
document.write(`<br>-----------------------------------------------------------------------------------<br><br>`);


// Q10. ---->  Write a program to print multiples of 5 ranging 1 to 100
// Solution

document.write(`<h3>Multiples of 5 ranging 1 to 100</h3> <br>`);

let num = 5;
for(let i = 1; i <= 20; i++){
    document.write(`${i * num}, `);
}
document.write(`<br>-----------------------------------------------------------------------------------<br><br>`);

// OR

// let numb = 1;
// for(let i = 1;i <= 100; i++){
//     if(i % 5 == 0){
//         document.write(`${numb * i}, `)
//     }
// }