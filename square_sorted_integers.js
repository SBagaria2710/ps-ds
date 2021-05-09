/*
 Return a sorted array for a non-empty sorted integer(-ve, 0 ,+ve) array.
 @param arr - non-empty sorted array
 @return arr - sorted array with values squared off
*/
function squareOff(arr) {
  const len = arr.length;
  const newArr = new Array(len);
  let start = 0, end = len-1;
  for (let i = 0; i < len; i++) {
    const n1 = Math.abs(arr[start]);
    const n2 = Math.abs(arr[end]);
    if (n1 < n2) {
      end--;
      newArr[len-i-1] = n2*n2;
    } else {
      start++;
      newArr[len-i-1] = n1*n1;
    }
  }
  return newArr;
}


squareOff([-10, -5, -4, -2, 0, 0, 12]);