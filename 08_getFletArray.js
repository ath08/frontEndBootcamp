const getFlatArray = (nestedArray) => {
  let flatArray = [];

  for (let i = 0; i < nestedArray.length; i++) {
    if (Array.isArray(nestedArray[i])) {
      flatArray = flatArray.concat(getFlatArray(nestedArray[i]));
    } else {
      flatArray.push(nestedArray[i]);
    }
  }

  return flatArray;
};
getFlatArray([1, 2, [3, 4, [5]]]); // => [1, 2, 3, 4, 5]
