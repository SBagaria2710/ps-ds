const arr = [4, -1, 2, -7, 3, 4];
// Q: Largest sum in a non-empty

// O(n^2)
function bruteForce() {
    let maxSum = -Number.MAX_VALUE;

    for(let i = 0; i < arr.length; i++) {
        let currSum = 0;
        for (let j = i; j < arr.length; j++) {
            currSum += arr[j];
            maxSum = Math.max(currSum, maxSum);
        }
    }

    return maxSum;
};

// O(n)
function optimized() {
    let maxSum = -Number.MAX_VALUE, currSum = 0;
    for (let i = 0; i < arr.length; i++) {
        currSum = Math.max(currSum, 0); // 0 4 3 5 0 3
        currSum += arr[i]; // 4 3 5 -2 3 7
        maxSum = Math.max(currSum, maxSum); // 4 4 5 5 5 7
    }
    return maxSum;
}

console.log(bruteForce(), optimized()); // 7, 7
