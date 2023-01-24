
// Q1-----------------------------
console.log("Q1-------------");
var str1 = 'Today is';
var str2 = '      a beautiful day     ';
var str3 = ' In Hawaii.    ';
var res = str2.trim();
console.log(res);
var res2 = str3.trim();
console.log(res2);
var Result = str1 + " " + res  + " " + res2;
console.log(Result);


// Q2-------------------------------
console.log("Q2--------------");
var enteredAlphabet = 'd';
 switch(enteredAlphabet){
  case 'a' :
  case 'e' :
  case 'i' :
  case 'o' :
  case 'u' :

  case 'A' :
  case 'E' :
  case 'I' :
  case 'O' :
  case 'U' :
    console.log(enteredAlphabet + " is a Vowel")
  default :
    console.log(enteredAlphabet + " is a Consonant");
  }


//Q3----------------------------------

console.log("Q3--------------");
var operator = prompt('Enter operator ( either +, -, *, / ): ');
var result = "";
var number1 = parseFloat(prompt('Enter first number: '));
var number2 = parseFloat(prompt('Enter second number: '));

switch(operator) {
    case '+':
        result = number1 + number2;
        console.log(`${number1} + ${number2} = ${result}`);
        break;
    case '-':
        result = number1 - number2;
        console.log(`${number1} - ${number2} = ${result}`);
        break;
    case '*':
        result = number1 * number2;
        console.log(`${number1} * ${number2} = ${result}`);
        break;
    case '/':
        result = number1 / number2;
        console.log(`${number1} / ${number2} = ${result}`);
        break;

    default:
        console.log('Invalid operator');
        break;
}


// Q4------------------------------------
console.log("Q4--------------");
function checkTriangle(a, b, c)
{
  if (a == b && b == c){
        console.log("Equilateral Triangle");
  }
    else if (a == b || b == c || c == a){
        console.log("Isosceles Triangle");
    }
    else{
        console.log("Scalene Triangle");
    }
}
   var a = 8, b = 7, c = 9;
    checkTriangle(a, b, c);
 
    
      



