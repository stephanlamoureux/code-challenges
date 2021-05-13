/*
Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
[ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
Expected Output :
60°C is 140 °F
45°F is 7.222222222222222°C

https://replit.com/@SteveLamoureux/KlutzyMistyEvent#script.js
*/

let choice = prompt('Would you like to convert from [C]elsius or [F]ahrenheit?');
let temp = prompt("Enter the temperature:");
let degree = Number(temp);

if (choice.toLowerCase() === 'f') {
  console.log(degree + "°" + " fahrenheit is " + convertFahrenheitToCelsius(degree) + "°" + " celsius.");
} else if (choice.toLowerCase() === 'c') {
  console.log(degree + "°" + " celsius is " + convertCelsiusToFarenheit(degree) + "°" + " fahrenheit.");
} else {
  console.log("Invalid entry!");
}

function convertFahrenheitToCelsius(f) {
  celsius = (f - 32) * .5556;
  return Math.floor(celsius);
}

function convertCelsiusToFarenheit(c) {
  fahrenheit = (c * 1.8) + 32;
  return Math.floor(fahrenheit);
}