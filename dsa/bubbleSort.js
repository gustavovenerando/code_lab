/*
O(N^2)
Close to exatly N^2 steps
2 types of steps: comparisons and swaps
*/

function bubbleSort(arr) {
    let isSorted = false;
    let lastIndexSorted = arr.length - 1;

    while (!isSorted) {
        isSorted = true;
        for (let i = 0; i < lastIndexSorted; i++) {
            if (arr[i] > arr[i + 1]) {
                let currTemp = arr[i];

                arr[i] = arr[i + 1];
                arr[i + 1] = currTemp;

                isSorted = false;
            }
        }
        
        lastIndexSorted -= 1;
    }

    return arr;
}

const arr = [5, 134, 44, 51, 1, 31, 200, 12, 22, 3];

bubbleSort(arr);

console.log(arr);
