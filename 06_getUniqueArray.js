const getUnique = (array) => {
  const uniqueArray = [];

  for (let i = 0; i < array.length; i++) {
    if (uniqueArray.indexOf(array[i]) === -1) {
      uniqueArray.push(array[i]);
    }
  }

  return uniqueArray;
};

getUnique([1, 2, 2, 1, 3, 5, 3, 5, 6]); // => [1, 2, 3, 5, 6]
