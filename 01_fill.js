const fill = (arraySize, value) => {
  const fillData = [];

  for (let i = 0; i < arraySize; i++) {
    fillData.push(value)
  }

  return fillData;
};

fill(3, 'hi') // => ['hi', 'hi', 'hi']
