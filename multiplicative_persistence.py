# Have the function MathChallenge(num) take the num parameter being passed which will always be a positive integer and return its multiplicative persistence which is the number of times you must multiply the digits in num until you reach a single digit. For example: if num is 39 then your program should return 3 because 3 * 9 = 27 then 2 * 7 = 14 and finally 1 * 4 = 4 and you stop at 4.

from functools import reduce

def multiplicativePersistence(num):
  count = 0
  num = str(num)

  while len(num) > 1:
    count += 1
    # multiply all digits in the num string
    # convert the string num to an integer first
    # then convert it back to a string before updating the num variable
    num = str(reduce(lambda a, b: int(a) * int(b), num))

  return count

print(multiplicativePersistence(39)) # should return 3
