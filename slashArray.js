// function slasher(arr, howMany) {
//   return arr.slice(howMany, arr.length);
// }
// slasher([1,2,3], 2);

function slasher(arr, howMany) {
  arr.splice(0, howMany);
  return arr;
}
slasher([1,2,3], 2);