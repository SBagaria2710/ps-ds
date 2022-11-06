// Write a function called that accepts a number n
// and returns the nth number in the Fibonacci sequence.

// Explanation Link: https://www.youtube.com/watch?v=FusB-KqZfXc


// Non-recursive soln
// function fib(n) {
//     if(n < 3) return 1;

//     let prev = 1;
//     let curr = 1;

//     for (let i = 2; i < n; i++) {
//         const next = prev + curr;
//         prev = curr;
//         curr = next;
//     }
//     return curr;
// }


// Recursive Soln
function fib(n) {
    if (n < 3) return 1;
    return fib(n-1) + fib(n-2);
}

console.log(fib(5));