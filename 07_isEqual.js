const isEqual = (arr1, arr2) => {
  if (arr1.length != arr2.length) return false;
  else {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) return false;
      return true;
    }
  }
};
isEqual([1, 2, 3], [1, 2, 3]); // => true
isEqual([1, 5, 3], [1, 2, 3]); // => false
isEqual([1, 2, 3, 4], [1, 2, 3]); // => false
