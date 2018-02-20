function repeatString(str, num) {
  var final = '';
  for (var i = 0; i < num; i++ ) {
    if (num < 1) {
      return '';
    }
    final += str;
  }
  return final;
}

// repeatString('Hello world', 0);

// function repeatString(str, num) {
//   return str.repeat(num);
// }

// repeatString('brian', 10);

// function repeatString(str, num) {
//   if (num < 1) return '';
//   if(num === 1) return str;
//   return str + repeatString(str, num - 1);
// }

// repeatString('Hello', 1);
