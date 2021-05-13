// --- Directions
// Write a program to implement a circular array
// You MUST use the "%" modular operator
// Use only a single Loop
// This takes two arguments, an array and an integer, n
// It console.logs every value of the array `n` times.
// It returns a new array of the array, duplicated `n` times.
// Think of the index as going in a "circle" around the array `n` times.
// --- Example
//   circularArray([1,2,3], 3);
//   1
//   2
//   3
//   1
//   2
//   3
//   1
//   2
//   3
// Return value = [1,2,3,1,2,3,1,2,3]

const circularArray = (array = [], n = 1) => {
  const result = [];

  // We will iterate over the the array `n` times
  const totalLoops = array.length * n;

  let iterator = 0;

  while (iterator < totalLoops) {
    // Idx will be BOUNDED by the array's length
    let idx = iterator % array.length;
    iterator++;

    console.log(array[idx]);
    result.push(array[idx]);
  }

  return result;
};

circularArray([1, 2, 3], 2);