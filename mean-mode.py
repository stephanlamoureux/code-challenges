# Have the function ArrayChallenge(arr) take the array of numbers stored in arr and return 1 if the mode equals the mean, 0 if they don't equal each other (ie. [5, 3, 3, 3, 1] should return 1 because the mode (3) equals the mean (3)). The array will not be empty, will only contain positive integers, and will not contain more than one mode.

def ArrayChallenge(arr):
  result = None

  def mean(arr):
    sum = 0
    mean = 0

    for i in range(len(arr)):
      sum += arr[i]

    mean = sum / len(arr)
    return int(mean)

  def mode(arr):
    dict = {}
    max = 0
    count = 0

    for i in range(len(arr)):
      number = arr[i]
      # If the number doesn't exist in the dictionary, add it.
      if not dict.get(number):
        dict[number] = 1
      # If it does, add 1 to its count.
      else:
        dict[number] += 1
      # If count is smaller than the current number, count is now equal to that key.
      # The max value is changed to the current element.
      if count < dict[number]:
        count = dict[number]
        max = number

    return max

  if mean(arr) == mode(arr):
    result = 1
  else:
    result = 0

  return result


print(ArrayChallenge([1, 3, 3, 1]))  # return 0
print(ArrayChallenge([1, 2, 3, 3, 3, 4, 5]))  # return 1
