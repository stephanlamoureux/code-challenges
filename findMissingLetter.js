function fearNotLetter(str) {

  for (let i = 0; i < str.length; i++) {
    const code = str.charCodeAt(i)
    // if code of current character is !== to first character + number of iteration, then a letter was skipped.
    if (code !== str.charCodeAt(0) + i) {
      // return previous character
      return String.fromCharCode(code - 1)
    }
  }

  return undefined
}

console.log(fearNotLetter("abce")) // d
console.log(fearNotLetter("abc")) // undefined