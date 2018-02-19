// function confirmEnding(str, end) {
//   var longSplitString = str.split(' ');
//   var shortSplitString = longSplitString[0].split('');
  
//   if (str.split(' ').length === 1) {
    
//     return shortSplitString[shortSplitString.length-1] === end ? true : false;
//   } else {
//     var finalLongSplitString = longSplitString[longSplitString.length-1]
//     return finalLongSplitString[finalLongSplitString.length-1] === end ? true : false;
//   }
// }

// console.log(confirmEnding('cool','l'));

// function ending(str, end) {
//   str.endsWith(end) ? true : false;
// }

// console.log(confirmEnding('brian','n'));

// function endsWith(str, target) {
//   return str.substr(-target.length) === target;
// }

// endsWith('brian ruff', 'ran ruff');


function endsWith(str, target) {
  return str.slice(-target.length) === target;
}

endsWith('brian ruff', 'ruff');
