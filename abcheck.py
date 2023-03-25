# Have the function ABCheck(str) take the str parameter being passed and return the string true if the characters a and b are separated by exactly 3 places anywhere in the string at least once (ie. "lane borrowed" would result in true because there is exactly three characters between a and b). Otherwise return the string false.

def StringChallenge(strParam):

  strParam = strParam.lower()

  for x in range(len(strParam)-4):
    if strParam[x] == 'a' and strParam[x + 4] == 'b':
      return "true"
    elif strParam[x] == 'b' and strParam[x + 4] == 'a':
      return "true"
    elif strParam[x] == 'a' and strParam[x - 4] == 'b':
      return "true"
    elif strParam[x] == 'b' and strParam[x - 4] == 'a':
      return "true"

  return "false"

print(StringChallenge(('laura sobs'))) # true
print(StringChallenge(('after badly'))) # false
print(StringChallenge(('bzzza'))) # true