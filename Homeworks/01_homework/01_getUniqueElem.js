const getUniqueElem = (array) => {
  const unique = [];

  for (let i = 0; i < array.length; i++) {
    if (unique.indexOf(array[i]) === -1) {
      unique.push(array[i]);
    }
  }

  return unique;
};

getUniqueElem([1, 2, 2, 1, 3, 5, 3, 5, 6]); // => [1, 2, 3, 5, 6]
