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

// const sortArray = (arr) => {
//   arr.sort((a, b) => a - b);
//   return arr;
// };

console.log(sortArray([0, 2, 1, 2, 0]));
