// Sort array of 0's,1's and 2's

// Given an array of size N containing only 0s, 1s, and 2s; sort the array in ascending order.

function sortArray(arr) {
  let count = [0, 0, 0];
  for (let i = 0; i < arr.length; i++) {
    count[arr[i]]++;
  }
  let index = 0;
  for (let i = 0; i < count.length; i++) {
    while (count[i] > 0) {
      arr[index] = i;
      index++;
      count[i]--;
    }
  }
  return arr;
}

console.log(sortArray([0, 2, 1, 2, 0]));
