console.log("DOM | EVENTS");

var h2 = document.createElement("h2");
h2.innerText = "Sample Heading";

var para = document.createElement("p");
para.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit Quam iusto animi unde. Molestias exercitationem iusto, possimus recusandae voluptatibus odio perferendis ipsam, facilis, assumenda provident iure ut magnam! Nam, cumque reiciendis";

var span = document.createElement("span");
span.innerText = "Hello!";

/*
Syntax : append(newElement1,newElement2,.....) // Multiple Items
Syntax : append(newElement) // only 1 item
*/

var article = document.getElementById("article");
// article.append(h2);
// article.append(para);
article.append(h2, para); // By using this, you can append multiple items

var body = document.body;
// body.append(span);
body.appendChild(span); // By using this, you can append only one item at a time

var envArticle = document.getElementById("envArticle");
// console.log(envArticle.children);
// console.log(envArticle.children.length);


var div = document.createElement("div");
div.innerText = "Test values added to div from JavaScript";
// envArticle.append(div);

/*
Syntax : insertBefore(newElement, element before which you want the newElement to be inserted)
*/

envArticle.insertBefore(div, envArticle.children[1]);

/*
Updating the styles of an element
*/

envArticle.style.color = "orange";
envArticle.style.fontSize = "20px";
// font-size : 20px;
// background-color : "green";
// envArticle.style.backgroundColor = "green";
envArticle.style.backgroundColor = "rgb(0,255,120)";

var randomColorCode = parseInt(Math.random() * 255);

/*
setInterval() : setInterval is a function which takes another function as
                an input which is going to run after every 2 seconds or certain time.
*/

// var counter = 1;
// var interval = setInterval(function () {
//     if(counter > 10){
//     clearInterval(interval); // stop the interval timer
// }
// var randomColorCode = parseInt(Math.random() * 255);
// // document.body.style.backgroundColor = `rgb(${randomColorCode}, 120, ${randomColorCode})`;
// document.body.style.backgroundColor = `rgb(${randomColorCode}, ${randomColorCode}, ${randomColorCode})`;
// counter++;
// }, 2000);

/*
Add/Remove css classes from an element : classList.add() and classList.remove()
*/

envArticle.classList.add("my-article");
envArticle.classList.add("class-name");

envArticle.classList.remove("env-class");
envArticle.classList.remove("class-name");

envArticle.remove();  // Delete an element form DOM

//-------------------------------------------------------------------

/*
Events : Any activity happening on the webpage is reffered to as event.
*/

function onButtonClickHandler() {
    console.log("Button is Clicked");
}

function onButtonClickHandler2() {
    console.log("btn clicked 2");
}
var btn = document.getElementById("btn");
// console.log(btn);

/*
Syntax : 
1.element.eventName = eventListener;
2.element.addEventListener("eventName",eventListener);
*/

// This allows only 1 event listener for an event on an element
// btn.onclick = onButtonClickHandler; // Instead of this we can use addEventListener also....  
// btn.onclick = onButtonClickHandler2;

// This allows multiple event listeners for an event on an element
btn.addEventListener("click", onButtonClickHandler);
// btn.addEventListener("click", onButtonClickHandler2);

// ---------EXAMPLE----------
// var btn = {
//     onclick : "kavya",
// }
// btn.onclick = "123";
// btn.onclick = "456";
// console.log(btn);


function onButtonClickHandler() {
    console.log("Button is Clicked");
    var randomColorCode = parseInt(Math.random() * 255);
    document.body.style.backgroundColor = `rgb(${randomColorCode}, 110, 220)`;
}

var myDiv = document.getElementById("mouse-exp");

function onMouseEnter(e) {
        console.log("Mouse Entered",e);
        myDiv.style.backgroundColor = "lightblue";
}

function onMouseLeave(e) {
    console.log("Mouse Leave",e);
    myDiv.style.backgroundColor = "lightgreen";
}

myDiv.addEventListener("mouseenter", onMouseEnter);
myDiv.addEventListener("mouseleave", onMouseLeave);

