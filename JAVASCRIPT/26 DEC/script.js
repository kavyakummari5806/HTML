/**
 * DOM Based Events
 * DOMContentLoaded
 */

 function onDOMContentLoaded() {
    console.log("DOM Content Loaded");
    console.log("Events part-2");

/*
keyboard Events :
*keyup
*keydown
*keypress
*/

var userNameInputField = document.getElementById("userName");
console.log(userNameInputField);

function onKeyUp(e) {
    // console.log("key up event triggered",e.target.value);
    console.log("change event triggered",e);
    // Validation : only alphabets are allowed range of alphabets A-Z => 65-90 and  a-z => 97-122 
    if ((e.which >= 65 && e.which <= 90) || (e.which >= 97 && e.which <= 122)) {

    } else {
        alert ("Only alphabets are allowed");
    }
}
// userNameInputField.addEventListener("keyup",onKeyUp); // "keyup" is the event   // onKeyup is the Eventlistener
// userNameInputField.addEventListener("keydown",onKeyUp);

// function onkeyPress(e) {
//     console.log("Key press event triggered",e.target.value);
// }
// userNameInputField.addEventListener("keypress",onkeyPress);

/**
 * Form events :
 * change
 * focus
 * blur
 * submit
 */

//  userNameInputField.addEventListener("change",onKeyUp);

function onFocus() {
    console.log("On focus event triggered");
}

function onBlur() {
    console.log("On Blur event triggered");
}

userNameInputField.addEventListener("focus", onFocus);
userNameInputField.addEventListener("blur",onBlur);

function onFormSubmit(e) {
    // e.preventDefault();
    console.log("On submit event triggered",e);
}

var form = document.getElementById("registrationForm");
console.log(form);
form.addEventListener("submit", onFormSubmit);

function onImgLoadFailure() {
    console.log("Image load failure");
  }

  function onImgLoadSuccess() {
    console.log("Image loaded");
  }

  var img = document.createElement("img");
  img.src =
    "https://images.pexels.com/photos/3041110/pexels-photo-3041110.jpeg";
  img.addEventListener("error", onImgLoadFailure);
  img.addEventListener("load", onImgLoadSuccess);
  document.body.append(img);
}

document.addEventListener("DOMContentLoaded",onDOMContentLoaded);

