function dropElements(arr, func) {
	// while the array is not empty and the returned value of the function (second arg) isn't equal to the first number in the array, remove that number from the array.
		while (arr.length > 0 && !func(arr[0])) {
			arr.shift();
		}
		return arr;
	}

	// test case
	const test = dropElements([1, 2, 3, 4], function(n) {
		return n >= 3;
	});

	console.log(test) // [3, 4]