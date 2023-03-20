// Find the absolute difference of the main diagonals of a 2d array.

const arr = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
]

function diagDiff(arr) {
	let diag1 = 0
	let diag2 = 0

	for (let i = 0; i < arr.length; i++) {
		diag1 += arr[i][i]
		diag2 += arr[i][arr.length - 1 - i]
	}
	return Math.abs(diag1 - diag2)
}

// for loop does the following for diag1:
arr[0][0]
arr[1][1]
arr[2][2]

// diag 2 starts at the end of the first array with arr.length -1
arr[0][arr.length - 1]
arr[1][arr.length - 1] - 1
arr[2][arr.length - 1] - 2
// to keep subtracting but 1 to create the diagonal, we subtract by i

console.log(diagDiff(arr))