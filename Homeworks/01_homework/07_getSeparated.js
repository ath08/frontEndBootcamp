const getSeparated = (arr) => {
  const num = [];
  const str = [];
  const separated = [];

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      num.push(arr[i]);
    }

    if (typeof arr[i] === "string") {
      str.push(arr[i]);
    }
  }

  separated.push(num);
  separated.push(str);
  return separated;
};

getSeparated([1, "", 5, "i"]); // => [[1, 5], ['', 'i']]
