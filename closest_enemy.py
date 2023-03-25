# Have the function ArrayChallenge(arr) take the array of numbers stored in arr and from the position in the array where a 1 is, return the number of spaces either left or right you must move to reach an enemy which is represented by a 2. For example: if arr is [0, 0, 1, 0, 0, 2, 0, 2] then your program should return 3 because the closest enemy (2) is 3 spaces away from the 1. The array will contain any number of 0's and 2's, but only a single 1. It may not contain any 2's at all as well, where in that case your program should return a 0.

def findEnemy(arr):
  indices = []
  find1 = arr.index(1)

  for i in range(len(arr)):
    if arr[i] == 2:
      indices.append(abs(i - find1))

  if len(indices) > 0:
    lowestIndex = min(indices)
    return lowestIndex
  else:
    return 0

print(findEnemy([1, 0, 0, 0, 2, 2, 2])) # 4
print(findEnemy([0, 1, 0, 3, 4, 6, 7])) # 0
print(findEnemy([2, 0, 0, 0, 2, 2, 1, 0])) # 1
