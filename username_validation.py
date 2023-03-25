# Have the function SearchingChallenge(str) take the str parameter being passed and determine if the string is a valid username according to the following rules:

# 1. The username is between 4 and 25 characters.
# 2. It must start with a letter.
# 3. It can only contain letters, numbers, and the underscore character.
# 4. It cannot end with an underscore character.

# If the username is valid then your program should return the string true, otherwise return the string false.

import re

def validate(s):
  correctLength = False # between 4 and 25 characters
  firstLetter = False # has to be a letter
  lastChar = False # cant be an underscore
  allowedChars = False # only letters, numbers, and underscore

  if 3 < len(s) < 26:
    correctLength = True

  if s[0].isalpha():
    firstLetter = True

  if s[-1] != '_':
    lastChar = True

  if re.match("^[A-Za-z0-9_]*$", s):
    allowedChars = True

  if correctLength and firstLetter and lastChar and allowedChars:
    return True
  else:
    return False

print(validate('abc_')) # False
print(validate('1abckdas')) # False
print(validate('abc123')) # True