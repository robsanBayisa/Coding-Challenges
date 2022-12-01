//https://www.codewars.com/kata/57f781872e3d8ca2a000007e

/* Given an array of integers, return a new array with each value doubled.

  For example:

  [1, 2, 3] --> [2, 4, 6] */
// p: Is it always going to be integers? Are we going to be given any special character? An empty arr ever?
// R: Return a new arr with each value doubled
// E: If we are given [2,3,4],should return [4,6,8]
// If we are given [4,5,6], should return [8,10,12]
// If we given [2,22],should return [4,44]
// p:
// Make a function that takes in an array
function doubled(arr) {
  if (arr.length === 0) {
    console.log('Array is invalid');
  } else {
    return arr.map((i) => i * 2);
  }
}
// map through the array and multiply each element by 2. also return
console.log(doubled([1, 2, 3]));
// [ 2, 4, 6 ]
console.log(doubled([]));
