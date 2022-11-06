/**
We are given an array consisting of n elements. At each operation you can select any one element and
increase rest of n-1 elements by 1. You have to make all elements equal performing such operation as
many times you wish. Find the minimum number of operations needed for this.
Examples: 
 

Input : arr[] = {1, 2, 3}
Output : Minimum Operation = 3
Explanation : 
operation | increased elements | after increment
    1     |    1, 2            | 2, 3, 3
    2     |    1, 2            | 3, 4, 3
    3     |    1, 3            | 4, 4, 4

Input : arr[] = {4, 3, 4}
Output : Minimum Operation = 2
Explanation : 
operation | increased elements | after increment
     1    |    1, 2           | 5, 4, 4
     2    |    2, 3           | 5, 5, 5

 */

function printMinOp(arr) {
    let arraySum = 0, smallest = arr[0], len = arr.length;
    for (let i = 0; i < len; i++) {
        if (arr[i]< smallest) smallest = arr[i];
        arraySum += arr[i];
    }
    return minOperation = arraySum - len * smallest;
}

console.log(printMinOp([4,3,4]));
