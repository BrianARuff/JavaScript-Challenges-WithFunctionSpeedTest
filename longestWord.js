function longestWord(str) {
  var wordArray = str.split(' ');
  var longestWordInArray = '';
  for(var word of wordArray) {
    if (word.length > longestWordInArray.length) {
      longestWordInArray = word;
    }
  }
  return longestWordInArray.length;
}
console.log(longestWord('Hello my name is Brian A Ruff'));