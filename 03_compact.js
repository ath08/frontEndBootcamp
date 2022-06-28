const compact = (array) => {
    const compactArray = [];

    for(let i = 0; i < array.length; i++) {
        if(Boolean(array[i])) {
            compactArray.push(array[i])
        };
    };

    return compactArray;    
};

compact([0, 1, false, 2, undefined, '', 3, null]); // => [1, 2, 3]
