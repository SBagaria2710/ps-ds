/*
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2

Link - https://leetcode.com/problems/majority-element/
*/

function majorityElement(nums) {
    const map = new Map();
    const len = nums.length;
    const majorityThreshold = Math.ceil(len/2);
    if (majorityThreshold === 1) {
      return nums[0];
    }
    for (let i = 0; i < len; i++) {
      let cachedVal = map.get(nums[i]);
      if (map.get(nums[i])) {
        map.set(nums[i], cachedVal+1);
        if (map.get(nums[i]) >= majorityThreshold) {
          return nums[i];
        }
      } else {
        map.set(nums[i], 1);
      }
    }
  }
  
  majorityElement([3,2,3]);
