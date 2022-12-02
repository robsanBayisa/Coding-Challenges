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
function maps(x) {
  if (x.length === 0) {
    // Check if the input array x is empty
    console.log('Array is invalid');
    return []; // Return an empty array if the input is empty
  } else {
    return x.map((num) => num * 2); // Use x instead of arr and double each element
  }
}
// map through the array and multiply each element by 2. also return
console.log(maps([1, 2, 3]));
// [ 2, 4, 6 ]
console.log(maps([]));
