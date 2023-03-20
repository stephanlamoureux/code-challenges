function uniteUnique(...arr) {
  // 1. add the spread operator to the param so it takes in all arrays instead of just the first.
  // 2. use Set to get unique values.
  // 3. use flat() to reduce to a single array.
  let uniqueNumbers = [...new Set(arr.flat())]
  return uniqueNumbers;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]))