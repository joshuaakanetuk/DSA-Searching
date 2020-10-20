

function linearSearch(array, value) {
    let tries = 0;
    console.log(value)

    for (let i = 0; i < array.length; i++) {
        tries++;
        if (array[i] == value) {
            return tries;
        }
        
    }
    // console.log("Value not in dataset. Tries: " + tries)
    return -1;
};

function binarySearch(array, value, start, end, tries) {
    var start = start === undefined ? 0 : start;
    var end = end === undefined ? array.length : end;
    var tries = tries === undefined ? 0 : tries;

    tries++;
    if (start > end) {
        console.log("Value not in dataset")
        return -1;
    }

    const index = Math.floor((start + end) / 2);
    const item = array[index];

    
    if (item == value) {
        console.log(index);
        return tries;
    }
    else if (item < value) {
        return binarySearch(array, value, index + 1, end, tries);
    }
    else if (item > value) {
        return binarySearch(array, value, start, index - 1, tries);
    }
};



module.exports = {
    binarySearch, linearSearch
}