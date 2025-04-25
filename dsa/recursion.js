function factorial(number) {
    if(number === 1) return 1;
    return number * factorial(number - 1);
}

function sum(arr) {
    if(arr.length === 1) return arr[0];
    return arr[0] + sum(arr.slice(1))
}

function reverseStr(string) {
    if(string.length === 1) return string;

    const lastChar = string[string.length - 1];

    return lastChar + reverseStr(string.slice(0, -1))

}

function fibonnaci(number) {
    if(number <= 1) return 1;
    return fibonnaci(number - 1) + fibonnaci(number - 2);
}

/*
---> The Staircase Problem
Let’s say we have a staircase of N steps, and a person has the ability to climb
one, two, or three steps at a time. How many different possible “paths” can
someone take to reach the top? Write a function that will calculate this for N
steps.
*/
function numberOfPaths(n) {
    if (n < 0) return 0;
    if (n === 1 || n === 0) return 1;
    return numberOfPaths(n - 1) + numberOfPaths(n - 2) + numberOfPaths(n - 3);
}


const arr = [1, 2, 3, 4, 5];
const str = "abcde";

// const result = factorial(6);
// const result = sum(arr);
// const result = reverseStr(str);
// const result = fibonnaci(6);
const result = numberOfPaths(3);

console.log("Result:", result);
