// Write a JavaScript program that will return true if the browser tab of the page is focused, false otherwise.


var focused = document.hasFocus();

function isFocused() {
  if (focused) {
    return true;
  } else {
    return false;
  }
};

console.log(isFocused());