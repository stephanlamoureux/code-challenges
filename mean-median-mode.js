// Median
function median(arr) {
	arr.sort((a, b) => a - b)
	let median
	// odd number in array so there's only 1 middle number
	if (arr.length % 2 !== 0) {
		median = arr[Math.floor(arr.length / 2)]
	} else {
		// even number in array, has 2 middle numbers
		let middle1 = arr[arr.length / 2]
		let middle2 = arr[arr.length / 2 - 1]
		median = (middle1 + middle2) / 2
	}
	return median
}

// Mean
function mean(arr) {
	let sum = 0
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i]
	}
	return sum / arr.length
}

// Mode
function mode(arr) {
	const obj = {}
	let max = 0
	let count = 0

	// Iterate through the array, adding each number to the object if it's not already there
	for (let i = 0; i < arr.length; i++) {
		const number = arr[i]

		if (!obj.number) {
			obj.number = 1
		// If the number has already been added, increment its key count
		} else {
			obj.number++
		}

		// Check if the highest stored mode (count) is smaller than the processed number
		if (count < obj.number) {
			// If smaller, then the count variable is changed to whatever the key for the current element is and the max value is changed to the current element. If greater, then do nothing.
			count = obj.number
			max = item
		}
	}
	// After the iteration is finished, max stores a number and count - the frequency, so we return max
	return max
}

console.log(mean([1, 2, 3, 4]))
console.log(median([1, 2, 3, 3, 4]))
console.log(mode([12, 1, 3, 3, 4, 6, 7, 7, 7]))
