const filterEvAndOdd = (arr) => {
    const evArr = [];
    const oddArr = [];

    for (let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 === 0) {
            evArr.push(arr[i])
        }
        if(arr[i] % 2 === 1) {
            oddArr.push(arr[i])
        }
    }

    return evArr;
};
filterEvAndOdd([1, 2, 3, 4, 5, 6, 7, 8])
