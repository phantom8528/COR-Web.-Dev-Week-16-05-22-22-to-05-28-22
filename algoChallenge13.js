/*
Write a function that takes in a non-empty array of distinct integers and 
an integer representing a target sum.
If any two numbers in the input array sum
up to the target sum, the function should return them in an array, in any order.
If no two numbers sum up to the target sum, the function should return an empty array.
Note that the target sum has to be obtained by summing two different integers in the array; 
you can't add a single integer to itself in order to obtain
the target sum.
You can assume that there will be at most one pair of numbers summing up
to the target sum.
*/


function twoNumSum(integers, target) {
    integers.sort((a, b) => a - b);
    let leftPointer = 0;
    let rightPointer = integers.length - 1;
    let currentSum = integers[leftPointer] + integers[rightPointer];
    while (leftPointer < rightPointer) {
        if (currentSum === target) {
            return [integers[leftPointer], integers[rightPointer]];
        } else if (currentSum < target) {
            leftPointer++;
        } else if (currentSum > target) {
            rightPointer--;
        }
        currentSum = integers[leftPointer] + integers[rightPointer];
    }
    return [];
}
const numbers = [3, 5, -4, 8, 9, 1, -1, 6];
const targetSum = 10;
console.log(twoNumSum(numbers, targetSum));