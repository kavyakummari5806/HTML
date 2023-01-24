console.log("Operators | Control Flow");

/*
if(expression/condition){
    // Execute code for if condition
} else {
    // Execute code on false value
}
*/

var isDrunk = true;

if (isDrunk) {
    console.log("you cann't drive a vehicle");
} else {
    console.log("you can drive a vehicle");
}

var productPrice = 50;
var tax = 20;

var totalPrice = productPrice + tax;
console.log(totalPrice);

var total = 10 + 20 + 30 + 40 + 50 + 17.5;
console.log(total);

var discount = 10;
var newProductPrice = productPrice - discount;
console.log(newProductPrice);

var product = 20 * 5;
console.log(product);

var division = 10 / 5;
console.log(division);

// calculate SI on amount 600 at the rate of 7% for 2 years

var principle = 600;
var rate = 7;
var time = 2;

var newPrinciple = ((principle * rate * time) / 100) + principle;
console.log(newPrinciple);

// BODMAS => Bracket of Division Multiplication Addition subtraction

var division2 = 30 / 3;
console.log(division2);

var division3 = 30 % 3;
console.log(division3);

var division4 = 20 % 3;
console.log(division4);

var division5 = 10 % 3;
console.log(division5);

var division6 = 10 % 2;
console.log(division6);

// What do we call a number which leaves 0 as remainder when divided by 2
// Even => 2,4,6,8,10 etc..

// What do we call a number which leaves 1 as remainder when divided by 2
// Even => 1,3,5,7,9 etc..

var result = 15 % 3 + 2 - 4; // Expressions
console.log(result); 

var result2 = 15 > 3;
console.log(result2);

var result3 = 15 < 3;
console.log(result3);

var result4 = 6 >= 6;
console.log(result4);

var result5 = 6 <= 6
console.log(result5);

var result6 = 10 <= 3;
console.log(result6);

var result7 = 10 >= 7;
console.log(result7);

var result8 = 9 == 9;
console.log(result8);

var result9 = 10 == 9;
console.log(result9);

var result10 = 10 != 9;
console.log(result10);

var result11 = 13 != 13;
console.log(result11);

var age = 18;
if (age >= 18){
console.log("you can give a vote in elections");
} else {
console.log("you cann't give a vote in elections");
}

// Logical operator
 
// AND OR NOT

/*
AND (&&)
true && true = true
true && false = false
false && true = false
false && false = false

AND OPERATOR WILL RESULT TRUE ONLY IF BOTH OPERANDS ARE TRUE

*/

var res = false && false;
console.log(res);

var res1 = 10 > 3 && 5 > 2;
/*
step1 : true && true;
step2 : true
*/
console.log(res1);

var res2 = 11 <= 11 && 7 < 5;
console.log(res2);

var res3 = 5 != 10 && 5 > 7 && 7 > 9 && true && false;
/*
step1 : false && false && false && true && false;
step2 : false && false && false;
step3 : false && false;
step4 : false
*/
console.log(res3);

/*
OR (||)
true || true = true;
true || false = true;
false || true = true;
false || false = false;
IF ANY ONE OF THE OPERAND IS TRUE, THEN IT WILL RESULT IN TRUE
*/

var res4 = 50 > 15 || false || 25 != 7;
/*
step1 : false || false || true;
step2: false || true;
step3: true;
*/
console.log(res4);

/*
NOT (!)
!true = false;
!false = true;
*/

var res5 = !(40 > 50);
console.log(res5);

var res6 = !(50 < 70);
console.log(res6);

// Write a program which checks the age of user, if the age is betweeen 10-15 yrs, then allow them to enter your park

var age = 15;
if (age >= 10 && age <= 15){
 console.log("you can enter into the park");
} else {
    console.log("you can not enter into the park");
}

/*
write a program to calculate the entry fees for your park based on given age ranges:
0-10 : 0Rs
11-20 : 10Rs
21-30 : 20Rs
31+ : 25Rs
*/

// IF-ELSE LADDER
var age = 25;
var ticketCost = 0;
if (age >= 0 && age < 11){
  ticketCost = 0;
} else if (age >= 11 && age < 21){
  ticketCost = 10;
} else if (age >= 21 && age < 31){
    ticketCost = 20;
} else if (age >= 31){
    ticketCost = 25;
} else {
    console.log("Invalid input given for age");
}

if (age >= 0){
    console.log("Ticket Cost= ", ticketCost);
}




