const getMaxAndMinElem = (arr) => {
    let maxAndMin = [];
    let max = arr[0];
    let min = arr[0];

    for(let i = 0; i < arr.length; i++) {
        if(max < arr[i]) {
            max = arr[i];
        }
        if (min > arr[i]) {
            min = arr[i];
        }
    }
    maxAndMin.push(max);
    maxAndMin.push(min);
    return maxAndMin;
}

getMaxAndMinElem([14, 28, 3, 8, 2]) // =>  [2, 28];
