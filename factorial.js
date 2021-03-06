function factorial(num) {
  for (let i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return num;
};

factorial(4);

// with recursion

function factorial(num) {
  // If the number is less than 0, reject it.
  if (num < 0)
    return -1;

  // If the number is 0, its factorial is 1.
  else if (num == 0)
    return 1;

  else {
    return (num * factorial(num - 1));
  }
};

factorial(4);