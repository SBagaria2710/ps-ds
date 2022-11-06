// Problem Link: https://bigfrontend.dev/problem/implement-Array-prototype.flat
// 1. implement Array.prototype.flat()

const filterSymbolFromArray = (arr) => arr.filter((val) => typeof val !== 'symbol');

/**
 * @param { Array } arr
 * @param { number } depth
 * @returns { Array }
 */
function flat(arr, depth = 1) {
    // your imeplementation here
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'object' && depth > -1) {
            result.push(...flat(arr[i], --depth));
        } else {
            result.push(arr[i]);
        }
    }
    return result;
}