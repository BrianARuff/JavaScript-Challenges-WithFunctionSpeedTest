function highAndLow(numbers){
  var highestNum = -Infinity;
  var lowestNum = Infinity;
  var numArray = numbers.split(' ');
  for (var i = 0; i < numArray.length; i++) {
    if (Number(numArray[i]) > highestNum) {
      highestNum = numArray[i];
    } else if (Number(numArray[i]) < lowestNum) {
      lowestNum = numArray[i];
    } else numArray[i];
  }
  if (numArray.length === 1) {
    return numArray[0] + ' ' + numArray[0]
  }
  return (highestNum + ' ' + lowestNum);
}

function highAndLow(numbers) {
  Math.max.apply(0, numbers.split(' ').map(Number)) + ' ' + Math.min.apply(0, numbers.split(' ').map(Number));
}