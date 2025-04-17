/*
O(N^2)
(N^2 + 2N - 2) steps -> Worse case
(N^2 / 2) steps -> Average case ('break' avoid unecessary looping)
*/

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let currElem = arr[i];
        let index = -1;
        for (let j = i - 1; j >= 0; j--) {
            let elemToCompare = arr[j];
            if (currElem < elemToCompare) {
                arr[j + 1] = elemToCompare;
                index = j
            }
            else break;
        }
        if(index > 0) arr[index] = currElem;
    }

    return arr;
}

const arr = [5, 134, 44, 51, 1, 31, 200, 12, 22, 3];
insertionSort(arr);
console.log(arr);
