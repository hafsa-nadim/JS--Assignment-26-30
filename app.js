//                    Question: 01

const num = +prompt("Enter any Number: ");
document.write("Number: " + num + "<br>");
document.write("Round off value: " + Math.round(num) + "<br>");
document.write("Floor value: " + Math.floor(num) + "<br>");
document.write("Ceil value: " + Math.ceil(num) + "<br>");


//                    Question: 02

const negativeNum = +prompt("Enter any negative Number: ");
document.write("Number: " + negativeNum + "<br>");
document.write("Round off value: " + Math.round(negativeNum) + "<br>");
document.write("Floor value: " + Math.floor(negativeNum) + "<br>");
document.write("Ceil value: " + Math.ceil(negativeNum) + "<br>");


//                    Question: 03

let userNumber = +prompt("Enter any Number: ");
if (userNumber < 0) {
let value = -userNumber;
document.write("The absolute value of " + userNumber + " is " + value);
}
else {
document.write("The absolute value of " + userNumber + " is " + userNumber);
}


//                     Question: 04

const dicey = Math.floor(Math.random() * 6) + 1;
 document.write("Random Dice Value: " + dicey);


//                     Question: 05

const cika = Math.floor(Math.random() * 2) + 1
if (cika === 1) {
    document.write(cika + "<br>" +"Random Coin Value: Tails: ");
}
else {
    document.write(cika + "<br>" +"Random Coin Value: Heads: ");
}


//                     Question: 06

const random = Math.floor(Math.random() * 100) + 1;
document.write("Random number between 1 and 100: " + random);


//                     Question: 07

let input = prompt("Enter your weight: ");
let weight = parseFloat(input);
if (!isNaN(weight)) {
  document.write("Your weight is: " + weight + " kgs");
} 
else {
  document.write("Invalid weight input: ");
}


//                    Question :08

const userGuessNum = +prompt("Guess the num between 1 to 10. ");
const secretNum = Math.floor(Math.random() * 10) + 1;
if (userGuessNum === secretNum) {
    alert("Congratulations! It's the Secret Number");
}
else {
    alert("Oops! that's not the Secret Number \n Try again. ");
}
