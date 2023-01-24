console.log("Switch | Objects");
// Concatination
// parseInt

var firstName = "kavya";
var lastName = "kummari";
var fullName = firstName + " " +lastName;
console.log(fullName);

var temp = Number("123.456");
console.log(temp, typeof(temp));

var temp2 = parseInt("123ABC.456");
console.log(temp2, typeof(temp2));

var temp3 = parseInt("ABC123.67");
console.log(temp3, typeof(temp3));

var temp4 = parseFloat("123.567");
console.log(temp4, typeof(temp4));

// ------------------------------------

// Write a program which takes a number as an input between 1-7 and prints respective day of the week.

/*
  1 => Monday
  2 => Tuesday
  3 => Wednesday
  4 => Thursday
  5 => Friday
  6 => Saturday
  7 => Sunday
*/

// IF-ELSE

var input = 7;
var weekDay = "";
// var weekDay;

if (input === 1) {
   weekDay = "Monday";
   console.log(weekDay);
 } else if (input === 2) {
   weekDay = "Tuesday";
   console.log(weekDay);
 } else if (input === 3) {
   weekDay = "Wednesday";
   console.log(weekDay);
 } else if (input === 4) {
   weekDay = "Thursday";
   console.log(weekDay);
 } else if (input === 5) {
   weekDay = "Friday";
   console.log(weekDay);
 } else if (input === 6) {
   weekDay = "Saturday";
   console.log(weekDay);
 } else if (input === 7) {
   weekDay = "Sunday";
   console.log(weekDay);
 } else {
   weekDay = "Invalid Input";
   console.log(weekDay);
 }

/*
Syntax:
   switch(<variable>) {
    case <case1>:
      ToDo : Logic of case1;
      break;
    case <case2>:
      ToDo : Logic of case2;
      break;
    case <case3>:
      ToDo : Logic of case3;
      break;
    default:
      ToDo : Default Logic;
   }
*/

// SWITCH CASE

var input = 4;
var weekDay = "";
// weekDay;
switch(input){
   case 1:
     weekDay = "Monday";
     break;
   case 2:
     weekDay = "Tuesday";
     break;
   case 3:
     weekDay = "Wednesday";
     break;
   case 4:
     weekDay = "Thursday";
     break;
   case 5:
     weekDay = "Friday";
     break;
   case 6:
     weekDay = "Saturday";
   case 7:
     weekDay = "Sunday";
   default:
     weekDay = "Invalid Input";
}
console.log("Output is ", weekDay);

// write a input to take the gender of the person as input and gives the discount based on it.

/*
 m => 0%
 f => 50%
 o (List of genders) => 30%
*/

 var gender = "m";
// var gender = prompt("Enter your gender");
// var discount = 0;
switch(gender){
  case "f":
    discount = 50;
    break;
  case "m":
    discount = 0;
    break;
  case "o":
    discount = 30;
    break;
}
console.log("Discount on Entry Fees ", discount, "%");

// --------------------------------
// alert("hello kavya");
// var input2 = prompt("Enter a value");
// console.log(input2);

/*
var num1 = Number(prompt("Enter number 1"));
var num2 = Number(prompt("Enter number 2"));
var num3 = Number(prompt("Enter number 3"));

num1 = Number(num1);
num2 = Number(num2);

console.log(num1, num2, num3);
console.log(num1 + num2 + num3);
*/

// --------------------------------

/*
Objects : Collection of data which represents a single unit, in the form of key-value pairs.
*/

/*
 firstName,
 lastName,
 rollNo,
 std,
 section,
 address,
 bloodGroup,
 dob,
 mobileNo
*/

// Student

var firstName = "kavya";
var lastName = "kummari";
var rollNo = "586";
var std = 8;
var section = "A";
var address = "671, XYZ Street";
console.log(firstName, lastName, std, section);

/*
Syntax:
  var <name of object> = {
    key : value,
    key2 : value2
  };
*/

var student = {
    firstName : "kavya",
    lastName : "kummari",
    rollNo : "6",
    std : 9,
    section : "B",
    address : "178 Hyd",
};
console.log(student);

var car = {
    maker: "Tata Motors",
    model: "Harrier",
    regNo: "AP-03-1234",
    variant: "XT",
    color: "Black",
    hasAirbags: true,
    engine: {
        type: "Diesel",
        stroke: 4,
        cylinder: 6
    }
};console.log(car.maker); // Access a value from an object

car.color = "Orange"; // Update a value in an object
car.model = "BMW";
console.log(car);

console.log(car.engine.stroke);

console.log(car.mileage); // undefined

car.mileage = 70.5; // Adding new key to the object
console.log(car.mileage);

delete car.variant; // Delete a key-value pair from an object
console.log(car);
