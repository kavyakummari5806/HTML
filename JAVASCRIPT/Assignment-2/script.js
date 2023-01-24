console.log("Assignment-2");

// QUESTION-1
console.log("Q1------------------------");

var numArr = [1, 2, 3, 4, 5, 1, 3]
var index = numArr.indexOf(4);
console.log(index);


var arr = [1, 2, 3, 4, 5, 1, 3];
var  i = -1;
var indexes = [];
while (i = arr.indexOf(1, i + 1), i !== -1) indexes.push(i);
console.log(indexes);


var numArr3 = [1, 2, 3, 4, 5, 1, 3]
var index3 = numArr.indexOf(7);
console.log(index3);


// QUESTION-2
console.log("Q2------------------------");

var n = 5;
var string = "";
for (var i = 1; i <= n; i++) {
  for (var j = 1; j <= n - i + 1; j++) {
    string += n - j + 1;
  }
  string += "\n";
}
console.log(string);

// QUESTION-3
console.log("Q3------------------------");

/*
var numbers = [3, 2, 1, 4, 5, 45];
numbers.sort((a, b) => a - b);
console.log(numbers);
*/

var nums = [3, 2, 1, 4, 5, 45];
console.log(nums);
nums.sort(
    (a,b)=>{
    if(a>b)
    return 1
    else return -1
   }
)
console.log(nums);

// QUESTION-4
console.log("Q4------------------------");

function checkStringsAnagram(a, b) {
    let len1 = a.length;
    let len2 = b.length;
    if(len1 !== len2){
       console.log('Invalid Input');
       return
    }
    let str1 = a.split('').sort().join('');
    let str2 = b.split('').sort().join('');
    if(str1 === str2){
       console.log("True");
    } else { 
       console.log("False");
    }
 }
 checkStringsAnagram("LISTEN","SILENT");
 checkStringsAnagram("HELLO","JELLO");

// QUESTION-5
 console.log("Q5------------------------");

 function reverse1(str){
    let rev = "";
    for(var i = str.length-1; i >= 0; i--){
      rev += str[i];
    }
    return rev;
  }
  console.log(reverse1("Hello"));




  