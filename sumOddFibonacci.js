function sumOddFib(num) {
  let prevNumber = 0
  let currentNumber = 1
  let result = 0

  while (currentNumber <= num) {
    if (currentNumber % 2 !== 0) {
      result += currentNumber
    }
    currentNumber += prevNumber
    prevNumber = currentNumber - prevNumber
  }
  return result
}

console.log(sumOddFib(1000)) // 1785