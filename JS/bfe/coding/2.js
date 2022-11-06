// Problem Link: https://bigfrontend.dev/problem/implement-curry-with-placeholder
// 1. implement curry() with placeholder support

const filterSymbolFromArray = (arr) => arr.filter((val) => typeof val !== 'symbol');

/**
 * @param { (...args: any[]) => any } fn
 * @returns { (...args: any[]) => any }
 */
function curry(fn) {
    return function curried(...args) {
        const slicedArgs = args.slice(0, fn.length);
        const filteredArgs = slicedArgs.filter((val) => val !== curry.placeholder);
        if (filteredArgs.length >= fn.length) {
            filteredArgs.sort((a, b) => a - b);
            return fn.apply(this, filteredArgs);
        } else {
            return function (...args2) {
                return curried.apply(this, [...filteredArgs, ...args2]);
            }
        }
    }
}

curry.placeholder = Symbol()