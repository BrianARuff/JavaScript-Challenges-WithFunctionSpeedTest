// function titleCase(str) {
//   var words = str.toLowerCase().split(' ');
//   for (var i = 0; i < words.length; i++) {
//     words[i] = words[i][0].toUpperCase() + words[i].slice(1);
//   }
//   return words.join(' ');
// }
// console.log(titleCase('hello this is a sentence.'))

// function titleCase(str) {
//   var words = str.split(' ');
//   var final = '';
//   for(var word of words) {
//     final += (word = word[0].toUpperCase() + word.slice(1) + ' ');
//   }
//   return final;
// }

// console.log(titleCase('brian is the man.'));

function titledCase(str) {
  return str.split(' ').map(function(element) {
    return element[0].toUpperCase() + element.slice(1);
  }).join(' ');
}

titledCase('I am a big teapot');