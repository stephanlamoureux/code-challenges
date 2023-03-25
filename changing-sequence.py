# Have the function ChangingSequence(arr) take the array of numbers stored in arr and return the index at which the numbers stop increasing and begin decreasing or stop decreasing and begin increasing. For example: if arr is [1, 2, 4, 6, 4, 3, 1] then your program should return 3 because 6 is the last point in the array where the numbers were increasing and the next number begins a decreasing sequence. The array will contain at least 3 numbers and it may contain only a single sequence, increasing or decreasing. If there is only a single sequence in the array, then your program should return -1. Indexing should begin with 0.

def ArrayChallenge(arr):
  result = 0

  if len(arr) < 3:
    result = -1

  lastAscendValue = 0
  lastDescendValue = 0

  fwdAscending = False
  backwardAscending = False

  fwdDescending = False
  backwardDescending = False

  # ASCENDING CHECK:
  if arr[0] < arr[1]:
    # Ascending forwards
    for num in range(len(arr) - 1):
      if arr[num] < arr[num + 1]:
        fwdAscending = True
        lastAscendValue = num + 1

    # Ascending backwards
    for num in range(len(arr) - 1, 0, -1):
      if arr[num] < arr[num - 1]:
        backwardAscending = True

  # DESCENDING CHECK:
  else:
    # Descending forwards
    for num in range(len(arr) - 1):
      if arr[num] > arr[num + 1]:
        fwdDescending = True
        lastDescendValue = num + 1

    # Descending backwards
    for num in range(len(arr) - 1, 0, -1):
      if arr[num] > arr[num - 1]:
        backwardDescending = True

  if fwdAscending and backwardAscending:
    result = lastAscendValue
  elif fwdDescending and backwardDescending:
    result = lastDescendValue

  # If there is only a single sequence return -1
  if not result:
    return -1
  else:
    return result


print(ArrayChallenge([-4, -2, 9, 10])) # -1
print(ArrayChallenge([1, 2, 4, 6, 4, 3, 1])) # 3
