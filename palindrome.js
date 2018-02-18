function palindrone(str) {
  var regex = /[\W_]/g;
  var lowerCaseString = str.toLowerCase().replace(regex, '');
  var reversedString = lowerCaseString.split('').reverse().join('').toLowerCase();
  return lowerCaseString === reversedString ? true : false;
}
console.log(palindrone('mom--'));

function manualPalindrone(str) {
  var regex = /[\W_]/g;
  
  var lowerCaseString = '';
  for (var i = 0; i >= str.length; i++) {
    if (str[i].toLowerCase() === regex) {
      lowerCaseString += '';
    } else {
      lowerCaseString += str[i];
    }
  }
  
  var reversedString = '';
  for (var j = lowerCaseString.length -1; j >= 0; j++) {
    reversedString += lowerCaseString[j];
  }
  return reversedString === lowerCaseString ? true : false;
}

console.log(manualPalindrone('---mom--'));