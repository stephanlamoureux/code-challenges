// Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7

// Heron's formula
// p = a+b+c / 2
// sqrt p(p-a)(p-b)(p-c)

function heron(a, b, c) {
	let p = (a + b + c) / 2;
	return Math.sqrt(p * (p - a) * (p - b) * (p - c));
	};

	console.log(heron(5, 6, 7));