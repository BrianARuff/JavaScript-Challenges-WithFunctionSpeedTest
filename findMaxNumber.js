// function largestNum(array) {
//   var maxNums = [];
//   for (var i = 0; i < array.length; i++) {
//     var tempMax = -Infinity;
//     for (var j = 0; j < array[i].length; j++) {
//       var currentElement = array[i][j];
//       if (currentElement > tempMax) {
//         tempMax = currentElement;
//       }
//     }
//     maxNums.push(tempMax);
//   }
//   return maxNums;
// }

// function largestNum(arr) {
//   var maxNums = [-Infinity,-Infinity,-Infinity];
//   for (var i = 0; i < arr.length; i++) {
//     for (var j = 0; j < arr[i].length; j++){
//       currentElement = arr[i][j];
//       if (currentElement > maxNums[i]) {
//         maxNums[i] = currentElement;
//       }
//     }
//   }
//   return maxNums;
// }

// largestNum([ [-1,6,2,3], [11,23,10,55], [100, 122,114] ])

function findMaximumNumber(arr) {
  var maxNum = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxNum) {
      maxNum = arr[i];
    }
  }
  return maxNum;
}

function largestNumsOfAll(arr) {
  var maxNumbers = [];
  for (var i = 0; i < arr.length; i++) {
    var innerMaxNum = findMaximumNumber(arr[i]);
    maxNumbers.push(innerMaxNum);
  }
  return maxNumbers;
}

// findMaximumNumber([1,33,4,5]);

largestNumsOfAll([ [55,23,12,-55], [152,300,43] ]);