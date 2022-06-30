const separateOddAndEven = (arr) => {
  const even = [];
  const odd = [];
  const OddAndEven = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      even.push(arr[i]);
    }
    if (arr[i] % 2 === 1) {
      odd.push(arr[i]);
    }
  }

  OddAndEven.push(odd);
  OddAndEven.push(even);
  return OddAndEven;
};
separateOddAndEven([1, 2, 3, 4, 5, 6, 7, 8]); // => [[1, 3, 5, 7],  [2, 4, 6, 8]]
