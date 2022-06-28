const fromPairs = (array) => {
  const fromPairsObj = Object.fromEntries(array);
  return fromPairsObj;
};

fromPairs([
  ["a", 1],
  ["b", 2],
]); // => { a: 1, b: 2 }
