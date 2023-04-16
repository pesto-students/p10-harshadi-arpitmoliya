function hasDuplicate(arr) {
  if (new Set(arr).size !== arr.length) {
    return true;
  } else {
    return false;
  }
}
console.log(hasDuplicate([1, 5, -1, 5]));
