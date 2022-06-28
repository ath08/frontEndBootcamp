const reverse = (array) => {
  const reverseArray = [];

  for (let i = array.length - 1; i >= 0 ; i--) {
    reverseArray.push(array[i]);
  };

  return reverseArray;
};

reverse([1, 2, 3]) // => [3, 2, 1]
