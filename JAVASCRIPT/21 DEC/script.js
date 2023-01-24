console.log("Functions");

console.log("-------------------------------");
/*
Function : Piece of code which represents one particular solution
Syntax:
function <function-name> (argumnet1 = default value1, arg2 = default value2,....) {
function body
return value;
}
*/

function sum(num1, num2) {
    var result = num1 + num2;
    return result;
}

var res = sum(10, 5);
console.log(res);

var res2 = sum(10, 10);
console.log(res2);

console.log("-------------------------------");

var arr = ["A", "B", "C"];
var temp = arr.slice(1, 2);
console.log(temp);

console.log("-------------------------------");
var num1 = 10;
var num2 = 20;
var res = num1 + num2;
console.log(res);

var num1 = 40;
var num2 = 20;
var res2 = num1 + num2;
console.log(res2);

console.log("-------------------------------");
// Write a program to calculate the new amount after SI given p=20000, r=5%, t=2.5yrs

// si = (p * r * t) /100;
// new principle = p + si;

function getNewPrinciple(principle, rate, time) {
     var si = principle * (rate / 100) * time;
     var newPrinciple = principle + si;
     return newPrinciple;
 }
 
var newPrincipleValue = getNewPrinciple(20000,5,2.5);
console.log(newPrincipleValue);

// var p = parseFloat(prompt("Enter your principle"));
// var r = parseFloat(prompt("Enter your rate"));
// var t = parseFloat(prompt("Enter your time period"));

// var temp2 = getNewPrinciple(p, r, t); // Function call
// console.log(temp2);

console.log("-------------------------------");

var x = 1 + 7;
console.log(x);

function calculateEmiAmount(loanAmount =1, rate = 1, time =1) {
    if (!loanAmount || !rate || !time) {
        alert("Loan Amount, Rate and Time are required");
        return;
    }
    var totalAmount = loanAmount * time * rate;
    var yearlyAmount = totalAmount / time;
    var monthlyAmount = yearlyAmount /12;
    return monthlyAmount;
}

var emi = calculateEmiAmount(2000000, 16, 7.5);
console.log(emi);

var emi2 = calculateEmiAmount(1000000, 7, 20);
console.log(emi2);

var emi3 = calculateEmiAmount(1000, undefined, 20);
console.log(emi3);

console.log("-------------------------------");

function greetUser(userName = "kavya"){
    // var greeting = "Hello " + userName + " " + "welcome to JS Session";
    var greeting = `Hello ${userName}, welcome to Js Session`;
    return greeting;
    // Hello John, welcome to Js Session
}
console.log(greetUser(undefined));
// console.log(greetUser(null));

console.log("-------------------------------");

function test(){
    return "Hello";
}
console.log(test());

console.log("-------------------------------");

console.log(typeof console.log);

console.log("-------------------------------");

// setTimeout
// Print Hello John in the console after 5 seconds
// setTimeout(callback function,time in ms(milliseconds));

function greet() {
    console.log("Hello Kavya");
}
console.log("A");
// setTimeout(greet,0);

setTimeout(function (){
    // Anonymus Function
    console.log("B");
}, 5000); // Execute greet function after 5 secs

// What is happening behind the scenes? (***EVENT LOOP***)
console.log("C");
console.log("D");
console.log("E");