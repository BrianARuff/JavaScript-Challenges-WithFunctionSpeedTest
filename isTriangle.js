// is triangle formation is possible

// function isTriangle(a,b,c) {
//   return a+b >c && a+c >b && b+c >a ? true : false;
// }

// using sort method

function isTriangle(a,b,c) {
  var orderedSides = [a,b,c].sort();
  return orderedSides[0] + orderedSides[1] > orderedSides[2] ? true : false
}

// console.log(isTriangle(1,2,2));
isTriangle(7,2,2);
