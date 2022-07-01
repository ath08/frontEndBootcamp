const getGenericElements = (array1, array2) => {
  const genericElements = [];

  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (array1[i] === array2[j]) {
        genericElements.push(array1[i]);
      }
    }
  }
  return genericElements;
};

getGenericElements(["dog", "cat", "parrot"], ["lizard", "rat", "cat"]); // => ["cat"]
