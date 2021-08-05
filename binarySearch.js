function binarySearch(arr, n) {
  let start = 0, end = arr.length, mid = Math.floor((start + end)/2), i = 0;
  while(start < end) {
    let temp = mid;
    if (arr[mid] === n) return mid;
    else if(arr[mid] <= n) start = mid;
    else end = mid;
    mid = Math.floor((start+end)/2);
    if (temp === mid) break;
  }
  return -1;
}

binarySearch([1,2], 1);