console.log("Operators | Coersion");

var price = 89;
// price = price + 5;
// console.log(price);

// Increment : Increments the value of a number by 1
price++;
// price = price + 1;
console.log(price); // 90

// Decrement : Decrements the value of a number by 1
price--; // 89
price--; // 88
price--; // 87
console.log(price); // 87

// Increase the value by 5
//price = price + 10;
price += 10;
console.log(price); // 97

// price = price - 20;
price -= 20;
console.log(price); // 77

// -----------------------------

var count = 5;
// console.log("Updated Value",count++); // 5
// console.log("Updated Value",++count); // 6
console.log(count); // 5

// POST INCREMENT/DECREMENT : USE THE OLD VALUE AND THEN UPADTE IT

// PRE INCREMENT/DECREMENT : UPDATE THE VALUE AND THEN USE NEW VALUE

var a = 1;
console.log(a++ + a++ + ++a + a++ + ++a)
/*
             1 + 2 + 4 + 4 + 6
                    17
*/  

/*
if-else statement
if(expression) {
    true block
} else {
    false block
}
*/

var age = 26;
if(age >= 18) {
    console.log("you can give a vote")
} else {
    console.log("you can not give a vote")
}

/*
Ternary Operator
expression ? true block : false block;
*/

var age =30;
age >= 18 ? console.log("you can give a vote") : console.log("you can not give a vote");

var a = true;
a ? console.log("1") : console.log("2");

// Truthy Values : Infinite
// Falsy Values : 
//    1. null
//    2. NaN
//    3. ""
//    4. undefined
//    5. 0
//    6. false

// Practice-----
var x = 12.5;
/*if (x){
    console.log("Yes")
} else {
    console.log("No")
}*/

x ? console.log("Yes") : console.log("No");

12.15 || "undefined"
// true || true
// true

0 || 1
// false || true
// true

"" && true
// false

0 && 15
// false

0 || 17
// true

"undefined" && undefined
// false

var y = "20";
// "true" true

if (y == "20") {
    console.log("1st Exp--> Yes");
} else {
    console.log("1st Exp--> No");
}
/*
if (y === "20") {
    console.log("2nd Exp--> Yes");
} else {
    console.log("2nd Exp--> No");
}
*/
if (y === 20) {
    console.log("2nd Exp--> Yes");
} else {
    console.log("2nd Exp--> No");
}

// ------------------------------

console.log("-------------------");

console.log(10 + 20); // Mathematical Addition

console.log("kavya" +' ' + "kummari"); // String Concatination

console.log("20" + "30"); // String concatination

console.log(10 + "30"); // String Concatination

console.log(5 + "kavya") // string Concatination

console.log(true + "kavya"); // String Concatination
 
// true => 1 and false => 0
console.log(1 + true); // Mathematical Addition

console.log(1 + false); // Mathematical Addition

console.log(true + true); // Mathematical Addition

console.log(true + false); // Mathematical Addition

console.log(false + false); //Mathematical Addition

console.log("----------------------");

var i = 1;
console.log(typeof i);

var j = "1";
console.log(typeof j);

var temp = Number("Hello There");
console.log(temp, typeof temp); 
// NaN = Not a Number

var x = Number("kavya");
x ? console.log("yes") : console.log("No");

var temp2 = Number("123kavya");
console.log(temp2, typeof temp2);

var temp3 = parseInt("123kavya");
console.log(temp3);

var temp4 = parseInt("kavya123");
console.log(temp4);

var temp5 = Number(true);
console.log(temp5);

var temp6 = Number(false);
console.log(temp6);

var temp7 = Boolean(1);
console.log(temp7,typeof temp7);

var temp8 = Boolean(2);;
console.log(temp8);

var temp9 = Boolean(0);
console.log(temp9);

var temp10 = Boolean("");
console.log(temp10);

var temp11 = Boolean(undefined);
console.log(temp11);

var temp12 = Boolean(null);
console.log(temp12);

var temp13 = Boolean(NaN);
console.log(temp13);

var temp14 = Boolean(false);
console.log(temp14);

var temp15 = Boolean(-18);
console.log(temp15);

var temp16 = String(1);
console.log(temp16);

var temp17 = String(undefined);
console.log(temp17, typeof temp17);

var temp18 = parseInt("12.145");
console.log(temp18);    // 12

var temp19 = parseFloat("12.456");
console.log(temp19);   // 12.456