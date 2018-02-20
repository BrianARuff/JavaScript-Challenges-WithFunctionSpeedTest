// function twoDArray(arr, size) {
//   var arrayGroups = [];
//   while (arr.length > 0) {
//     arrayGroups.push(arr.slice(0,size));
//     arr = arr.slice(size);
//   }
//   return arrayGroups;
// }

// twoDArray([1,2,3,4], 3);


function twoDArray(arr, size){
  var arrayGroups = [];
  while (arr.length > 0) {
    arrayGroups.push(arr.splice(0, size));
  }
  return arrayGroups;
}
twoDArray([1,2,3,4], 3);