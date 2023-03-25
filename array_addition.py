# Have the function ArrayChallenge(arr) take the array of numbers stored in arr and return the string true if any combination of numbers in the array (excluding the largest number) can be added up to equal the largest number in the array, otherwise return the string false. For example: if arr contains [4, 6, 23, 10, 1, 3] the output should return true because 4 + 6 + 10 + 3 = 23. The array will not be empty, will not contain all the same elements, and may contain negative numbers.

def arrayChallenge(arr):
    arr.sort()
    maximum = arr.pop()
    total = 0

    for i in range(len(arr)):
        total += arr[i]
        for j in range(len(arr)):
            if i != j:
                total += arr[j]
                if total == maximum:
                    return True
        total = 0

    return False

print(arrayChallenge([3, 4, 5, 7])) # true
print(arrayChallenge([5, 7, 16, 1, 2])) # false
print(arrayChallenge([1, 2, 3, 4])) # true
print(arrayChallenge([31, 2, 90, 50, 7])) # true