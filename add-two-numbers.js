// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

//Problem Link - https://leetcode.com/problems/add-two-numbers/

var addTwoNumbers = function (l1, l2) {
  let carryOn = 0,
    temp,
    result = [];
  if (l1.length < l2.length) {
    temp = l1;
    l1 = l2;
    l2 = temp;
  }
  for (let i = 0; i < l1.length; i++) {
    const secondVal = i >= l2.length ? 0 : l2[i];
    temp = l1[i] + secondVal + carryOn;
    console.log(temp, l1[i], secondVal, carryOn);
    if (temp > 9 && i != l1.length - 1) {
      carryOn = 1;
      result[i] = temp - 10;
    } else {
      result[i] = temp;
    }
  }
  return result.reverse();
};

addTwoNumbers([2, 4, 3], [5, 6, 4]);
