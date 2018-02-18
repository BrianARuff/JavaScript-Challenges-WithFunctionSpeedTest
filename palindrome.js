function palindrome(str) {
  var regexp = (/\W_/g);
  var strReverse = str.split('').reverse().join('');
  return str.toLowerCase() === strReverse ? true : false
}

function manualPalindrome(str) {
  var final = '';
  for (var i = str.length - 1; i >= 0; i--) {
    final += str[i];
  }
  var regex = /\W_/g;
  var storageString = ''
  for (var i = 0; i < final.length; i++) {
    if (final[i] !== regex) {
      storageString += final[i];
    }
  }
  return storageString.toLowerCase() === str.toLowerCase() ? true : false; 
}
console.log(manualPalindrome('racecar'));