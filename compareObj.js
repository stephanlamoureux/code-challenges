function compareObj(obj1, obj2) {
  if (JSON.stringify(obj1) === JSON.stringify(obj2)) {
    return true;
  }
  return false;
};

console.log(compareObj({hi: 1}, {hi: 1}));
console.log(compareObj({hi: 2}, {nope: 2}));