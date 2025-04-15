/*
O(N^2)
Same category as bubble sort, but twice as fast -> O(N^2 / 2)
2 types os steps: comparisons and swaps
*/

function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let lowestNumIndex = i;

        for (let j = i + 1; j < arr.length; j++) {
            const numToCompare = arr[j];

            if (numToCompare < arr[lowestNumIndex]) {
                lowestNumIndex = j;
            } 
        }

        if(i !== lowestNumIndex){
            let temp = arr[i];
            arr[i] = arr[lowestNumIndex];
            arr[lowestNumIndex] = temp;
        }
    }

    return arr;
}

const arr = [5, 134, 44, 51, 1, 31, 200, 12, 22, 3];

selectionSort(arr);
console.log(arr);

