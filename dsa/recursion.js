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

function anagram(str) {
    const result = [];

    if(str.length === 1) return str[0];

    const prevAnagrams = anagram(str.slice(1));

    for (let anagram of prevAnagrams) {
        for (let i = 0; i < anagram.length; i++) {
            const substring = anagram.substring(0, i);
            const substring2 = anagram.substring(i);
            
            result.push(substring + str[0] + substring2); 
        }
        result.push(anagram + str[0]);
    }

    return result;
}



const arr = [1, 2, 3, 4, 5];
const str = "abcde";

// const result = factorial(5);
// const result = sum(arr);
// const result = reverseStr(str);
// const result = fibonnaci(6);
// const result = numberOfPaths(3);
const result = anagram('abcdef');

console.log("Result:", result);
