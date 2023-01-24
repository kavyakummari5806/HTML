console.log("Loops");

/*
Loop : Repetition
 3 things are required to run a loop
 Initialization, Condition, Increment/Decrement
Types of loops:
  1.For loop
  2.While loop
*/

// You got a punishment to write "I will not my class" 100 times

/*
while loop:
 Syntax : initialization
          while(condition) {
           // ToDo : Write the code you want to repeat
           increment/decrement
          }
*/
console.log("--------------------------------");
var counter = 1; // Initialization
while (counter <= 100) {
    console.log("I will not miss my class", counter);
    counter++;
    // counter--; (Infinity times)
}

// write a program to print a table of 24

console.log("--------------------------------");
var counter = 1;
// var tabNum = prompt("Enter a number to print table");
while (counter <= 10){
   // console.log(24 * counter); // 24 x 1 = 24
   // console.log(tabNum + " x " + counter + " = " + tabNum * counter);
   console.log(24 + " x " + counter + " = " + counter * 24);
   counter++;
}

var users = [
    "Undertaker",
    "Batista",
    "John Cena",
    "Ray Mysterio",
    "Roman Reigns",
    "Jindal Mahal",
    "The Rock",
    "Big Show",
    "The Great Khali"
];

// console.log(users.length);
// console.log(users[0]);
// console.log(users[1]);
// console.log(users[2]);
// console.log(users[3]);
// console.log(users[4]);
// console.log(users[5]);
// console.log(users[6]);
// console.log(users[7]);
// console.log(users[8]);

/*
  Hello Undertaker
  Hello John Cena
  Hello Batista

  Hello <user-name>
*/

// Iterate over an array

console.log("--------------------------------");
var counter = 0;
while (counter < users.length) {
    // console.log("Hello", users[counter]); DISPLAYS ALL USER NAMES
    // console.log(users.length); // 9
    console.log("Hello", users[2]);
    counter++;
}

/*
For loop:
  Syntax: for(initialization; condition; increment/decrement){
          // ToDo : Write your repetition code here
          } 
*/

console.log("--------------------------------");
for (var counter = 0; counter < 10; counter++){
    console.log("Hello");
}

console.log("--------------------------------");
var tabNum = 58;
for (var counter = 1; counter < 10; counter++){
    // console.log(58 * counter);
    console.log(tabNum + " x " + counter + " = " + counter * tabNum);
}

console.log("--------------------------------");
for (var counter = 0; counter < users.length; counter++){
    // console.log(users.length);
    // console.log(users[1]);
    console.log("Hello", users[counter]);
}

console.log("--------------------------------");
for (var counter = 10; counter <= 10; counter += 5){
    console.log(counter);
}

console.log("--------------------------------");
for (var counter = 3; counter <= 10; counter += 6){
     console.log(counter);
}

console.log("--------------------------------");
for (var counter = 5; counter >= 0; counter--){
    console.log(counter);
}

console.log("--------------------------------");
for (var counter = 5; counter > 0; counter--){
    console.log(counter);
}

console.log("--------------------------------");
// --------------------------------------------
/*
break : Used to stop a loop in between on a certain condition
continue : Used to skip an iteration in between the loop execution
*/

for (var i = 1; i <= 10; i++){
    if (i === 5){
        break;
    }
    console.log(i);
}

console.log("--------------------------------");
for (var i = 1; i <= 10; i++){
    if (i === 8){
    continue;
    }
    console.log(i);
}

console.log("--------------------------------");

// print all the even numbers between 1 - 10

for (var i = 1; i <= 10; i++){
    if (i % 2 === 0){
        console.log(i);
    }
}

console.log("--------------------------------");

// print all the odd numbers between 1 - 10

for (var i = 1; i <= 10; i++){
    if (i % 2 === 1){
        console.log(i);
    }
}

