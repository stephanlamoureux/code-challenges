/*
You will get a DNA strand sequence and you need to get the pair and return it as a 2D array of the base pairs. Keep in mind that the provided strand should be first always.

Another way to interpret the problem: there are four potential characters that exist in DNA: “A”, “T”, “G”, and “C”.
“A” and “T” are always paired together, and “G” and “C” are always paired together.

This problem presents you with an input, e.g. “ATCGA”. Each of those five characters are missing their pairs.
E.g. the first character “A” needs to be paired with “T” to give the array element [“A”, “T”].
The second character “T” needs to be paired with “A” to give the array element [“T”, “A”].
The number of elements in the final output equals the number of characters in the input.
*/

function pairElement(str) {

  // create the dna pairs based on the character
  function match(char) {
    switch (char) {
      case 'A':
        return ['A', 'T'];
      case 'T':
        return ['T', 'A'];
      case 'G':
        return ['G', 'C'];
      case 'C':
        return ['C', 'G'];
    }
  }

  // Iterate through each character of the string, call the match function on that character, and push it to a new array.
  let dna = []
  for (let i = 0; i < str.length; i++) {
    dna.push(match(str[i]))
  }
  return dna
}

console.log(pairElement('ATCGA')); // [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]
console.log(pairElement('TTGAG')); // [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]]
console.log(pairElement('CTCTA')); // [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]