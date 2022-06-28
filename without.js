const without = (array, arg1, arg2) => {
  const withoutArray = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] === arg1 || array[i] === arg2) {
      continue;
    } else {
      withoutArray.push(array[i]);
    }
  }
  return withoutArray;
};
without([1, 2, 3, 4], 2, 4); // => [1, 3];
