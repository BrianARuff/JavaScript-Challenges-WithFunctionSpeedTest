// seek and destroy

// function destroyer(arr) {
//   var args = Array.from(arguments);
//   args.splice(0, 1);
//   var result = [];
  
//   // for(var num of arr) {
//   //   if (args.indexOf(num) === -1 ) {
//   //     result.push(num);
//   //   }
//   // }
  
//   for (var i = 0; i < arr.length; i++) {
//     args.indexOf(arr[i]) === -1 ? result.push(arr[i]) : null;
//   }
  
//   return result;
// }

function destroyer(arr) {
  var args = Array.from(arguments);
  args.splice(0, 1);
  
  return arr.filter(function(num) {
    return args.indexOf(num) === -1 ? num : null;
  });
}

destroyer([1,2,3,1,2,3],1,2);
