# Have the function ArrayChallenge(arr) take the array of numbers stored in arr which will contain 5 positive integers, the first two representing a range of numbers (a to b), the next 2 also representing another range of integers (c to d), and a final 5th element (x) which will also be a positive integer, and return the string true if both sets of ranges overlap by at least x numbers. For example: if arr is [4, 10, 2, 6, 3] then your program should return the string true. The first range of numbers are 4, 5, 6, 7, 8, 9, 10 and the second range of numbers are 2, 3, 4, 5, 6. The last element in the array is 3, and there are 3 numbers that overlap between both ranges: 4, 5, and 6. If both ranges do not overlap by at least x numbers, then your program should return the string false.

def overlappingRange(arr):
  a = arr[0]
  b = arr[1]
  c = arr[2]
  d = arr[3]
  x = arr[4]

  range1 = list(range(a, b + 1))
  range2 = list(range(c, d + 1))

  overlap = list(filter(lambda number: number in range2, range1))

  if len(overlap) >= x:
    result = True
  else:
    result = False

  return result

print(overlappingRange([1, 8, 2, 4, 4])) # should be false
print(overlappingRange([4, 10, 2, 6, 3])) # should be true
