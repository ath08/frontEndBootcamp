const isFirstIncludedInSecond = (first, second) => {
  for (let i = 0; i < first.length; i++) {
    if (second.indexOf(first[i]) === -1) {
      return false;
    }
  }

  return true;
};

isFirstIncludedInSecond(
  ["hi", "good", "nice", 3],
  [1, 2, "hi", "good", "nice", 3]
); // => true
isFirstIncludedInSecond(
  [1, 2, "hi", "Arctica", "nice", 3],
  ["hi", "good", "nice", 3]
); // => false
