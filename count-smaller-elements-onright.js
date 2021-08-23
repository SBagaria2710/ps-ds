// Problem Link: https://www.geeksforgeeks.org/count-smaller-elements-on-right-side/

// Write a function to count number of smaller elements on right of each element in an array.
// Given an unsorted array arr[] of distinct integers, construct another array countSmaller[] such that
// countSmaller[i] contains count of smaller elements on right side of each element arr[i] in array.


// [Note]: Partial Solution

function countSmallElems(arr) {
  const num = arr.length;
  const countSmaller = new Array(num);
  countSmaller[num - 1] = 0;
  let largerRight = arr[num - 1];
  for(let i = num - 2; i >= 0; i--) {
    if (arr[i] > largerRight) {
      largerRight = arr[i];
      countSmaller[i] = num - i - 1;
    } else {
      countSmaller[i] = 0;
    }
  }
  return countSmaller;
}

countSmallElems([12, 1, 2, 3, 0, 11, 4]); // 6, 1, 1, 1, 0, 1, 0
countSmallElems([5, 4, 3, 2, 1]); //  4, 3, 2, 1, 0
countSmallElems([1, 2, 3, 4, 5]); // 0, 0, 0, 0, 0