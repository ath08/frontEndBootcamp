const getNonRepeated = (array) => {
  let nonRepeated = [];

  for (let i = 0; i < array.length; i++) {
    for (j = 0; j < array.length; j++) {
      if (i === j) {
        continue;
      }
      if (array[i] === array[j]) {
        break;
      }
    }
    if (j === array.length) {
      nonRepeated.push(array[i]);
    }
  }
  return nonRepeated;
};

getNonRepeated(["a", "b", "a", "a", "b", 5, 3, 3, 7]); // => [5, 7]
