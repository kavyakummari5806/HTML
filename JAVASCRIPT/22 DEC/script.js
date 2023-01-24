console.log("Document Object Model");

console.log(document);

/* ID
Find/Search :
getElementById()
*/

var heading = document.getElementById("subHeading");
console.log(heading);

var card = document.getElementById("sampleCard");
console.log(card);

var newCard = document.getElementById("test");
console.log(newCard); 
console.log("-----------------------");  

/*  CLASSNAME
getElementsByClassName()
*/

var para = document.getElementsByClassName("paragragh-article");
console.log(para);

var newPara = document.getElementsByClassName("abcde");
console.log(newPara); // RETURNS EMPTY ARRAY

var para = document.getElementsByClassName("paragragh-article");
console.log(para[0]);
console.log("-----------------------");  

/*
getElementsByTagName()
*/

var tagName = document.getElementsByTagName("div");
console.log(tagName);

var p = document.getElementsByTagName("p");
console.log(p);

var article = document.getElementsByTagName("article");
console.log(article);

var header = document.getElementsByTagName("header");
if(header.length === 0){
    alert("No header element found!");
}
console.log("------------------------");

/*
querySelector()
*/

var pInArticle = document.querySelector(".my-article p");
console.log(pInArticle);

var pInArticle = document.querySelector(".my-article k");
console.log(pInArticle); // null

/*
querySelectorAll()
*/

var allInArticle = document.querySelectorAll(".my-article p");
console.log(allInArticle);
console.log("------------------------");

/*
updation of elements
*/

// var heading = {
//     innerText : "Sample Heading",
// };

var heading = document.getElementById("subHeading");
heading.innerText = "Heading";
console.log(heading);

// SetTimeout()

// ...HEADING...

var heading = document.getElementById("subHeading");
setTimeout(function () {
    heading.innerText = "Lorem Ipsum";
}, 5000);

// ...IMAGE...

var img = document.getElementById("cardImg");
setTimeout(function () {
    img.src = "https://www.hdwallpaper.nu/wp-content/uploads/2015/06/1919099.jpg";
}, 2000);
// console.log(img);

// var img = document.getElementById("cardImg");
// setTimeout(function () {
//     if(img){
//         img.src = "https://www.hdwallpaper.nu/wp-content/uploads/2015/06/1919099.jpg";
//     console.log("inside if"); 
//     }
// }, 2000);

// .....HTML structure.....

// var article = document.getElementById("myArticle");
// // article.innerHTML ="<span>Hey!</span><div>Kavya</div>";
// setTimeout(function () {
//     article.innerHTML ="<span>Hey!</span><div>Kavya</div>";
// }, 5000);

// setInterval()

// var counter = 20;
// setInterval(function () {
//     console.log("kavya");
// }, 1000);

// var counter = 5;
// var interval = setInterval(function () {
//     console.log("kavya");
//     if (counter <= 1) {
//         // stop condition
//         clearInterval(interval); // stop the timer
//         // stop the execution
//     }
//     counter--;
// }, 1000);

//---------------------------------------

// var counter = 20;
// var timer = document.getElementById("timer");
// var interval = setInterval(function () {
//     if (counter === 1 ) {
//         // stop condition
//         clearInterval(interval); // stop the timer
//         // stop the execution
//     }
//     timer.innerText = counter;
//     counter--;
// }, 1000);

//-------------------------------------------

var counter = 10;
var timer = document.getElementById("timer");
var interval = setInterval(function () {
  if (counter === 0) {
    alert("Happy New Year!!");
        // stop condition
        clearInterval(interval); // stop the timer
        // stop the execution
    }
    timer.innerText = counter;
    counter--;
}, 1000);

