function factorialize(num) {
  var finalResult = 1;
  for (var i = 1; i <= num; i++) {
    finalResult *=  i;
  }
  return finalResult;
}

console.log(factorialize(5));

function recursiveFactorialize(num) {
  if (num === 0) {
    return 1;
  } else {
    return num * recursiveFactorialize(num -1);
  }
}

console.log(recursiveFactorialize(5));