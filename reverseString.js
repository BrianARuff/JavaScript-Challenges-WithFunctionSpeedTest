function reverseString(str) {
  return str.split('').reverse().join('');
}
console.log(reverseString('Hello World'));

var finalString = '';
function manualReverseString(str) {
  for (var i = str.length -1; i >= 0; i--) {
    finalString += str[i]
  }
}
manualReverseString('Hello World');
console.log(finalString);