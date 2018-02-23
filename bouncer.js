//remove false values from array as well as NaN

// function bouncer(arr) {
//   var falsy = [false, null, 0, '', undefined, NaN];
//   for(var i = 0; i < arr.length; i++) {
//     for (var j = 0; j < falsy.length; j++) {
//       if (arr[i] === falsy[j] || !arr[i] === !NaN) {
//         arr.splice(i, 1);
//       }
//     }
//   }
//   return arr;
// }

function bouncer(arr) {
  return arr.filter(function(item) {
    if (item) {
      return item;
    }
  });
}

bouncer([false, null, 0, '', undefined, NaN, 1, 'hi', true, [], {}, function x(){console.log('hello')}, String]);
