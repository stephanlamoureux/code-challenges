/*
 * Using modulo (%) alows you to wrap back around to the beginning
 * 3 % 26 = 3
 * 26 % 26 = 0
 * 27 % 26 = 1
 */

const alphabet = 'abcdefghijklmnopqrstuvwxyz';
let shiftedAlphabet = '';

function caesar(s, k) {
  k = shiftAlphabet(k)
  let message = encode(s)
  return message
}

// create alphabet shifted by k numbers
function shiftAlphabet(k) {
  for (let i = 0; i < alphabet.length; i++) {
    let shift = (i + k) % alphabet.length;
    shiftedAlphabet += alphabet[shift];
  }
  return shiftedAlphabet;
}

// create new text string with shifted alphabet
function encode(s) {
  let result = '';
  for (let i = 0; i < s.length; i++) {
    let index = alphabet.indexOf(s[i]);
    result += shiftedAlphabet[index];
  }
  return result;
}

// tests
console.log(caesar("abc", 3))
