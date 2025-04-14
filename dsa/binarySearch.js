function binarySearch(arr, value) {
    lowerBound = 0; 
    upperBound = arr.length - 1;

    while (lowerBound <= upperBound) {
        middleIndex = Math.floor((lowerBound + upperBound) / 2);

        middleValue = arr[middleIndex];

        if (value === middleValue) return value;
        else if(value > middleValue) lowerBound = middleIndex + 1;
        else if(value < middleValue) upperBound = middleIndex - 1;
    }

    return null;
}


let orderedArr = [3, 5, 8, 13, 15, 16, 20, 28, 31, 35, 50, 53];
// let orderedArr = [3, 5, 8, 13, 15, 16, 20, 28, 31, 35, 50];

const result = binarySearch(orderedArr, 13);
console.log( "Result: ", result);
