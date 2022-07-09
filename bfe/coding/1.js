// Problem Link: https://bigfrontend.dev/problem/implement-curry
// 1. implement curry()

/**
 * @param { (...args: any[]) => any } fn
 * @returns { (...args: any[]) => any }
 */
function curry(fn) {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn.apply(this, args);
        } else {
            return function (...args2) {
                return curried.apply(this, [...args, ...args2]);
            }
        }
    };
}