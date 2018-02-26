// function rot13(str) {
//   var final = '';
//   for(var i = 0; i < str.length; i++) {
//     var ascii = str[i].charCodeAt();
//     if (ascii >= 65 && ascii <= 77) {
//       final += String.fromCharCode(ascii+13);
//     } else if (ascii >= 78 && ascii <= 90) {
//       final += String.fromCharCode(ascii-13);
//     } else {
//       final += str[i];
//     }
//   }
//   return final;
// }

// rot13('SERR PBQR PNZC');


//map method

function rot13(str) {
  var strArr = str.split('');
  var strMapped = strArr.map(function(letter){
    asciiNum = letter.charCodeAt();
    if (asciiNum >= 65 && asciiNum < 77) {
      letter = String.fromCharCode(letter.charCodeAt()+13);
      return letter;
    } else if (asciiNum >= 78 && asciiNum <= 90) {
      letter = String.fromCharCode(letter.charCodeAt()-13);
      return letter;
    } else {
      return letter;
    }
  });
  return strMapped.join('');
}

rot13('SERR PBQR PNZC');

