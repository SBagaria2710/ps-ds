Promise.myAll = function (promises) {
    return new Promise((resolve, reject) => {
        let counter = 0;
        const result = [];
        for (let i = 0; i < promises.length; i++) {
            Promise.resolve(promises[i]).then(res => {
                result[i] = res;
                counter += 1;
                // this check need to be here, otherwise counter would remain 0 till forloop is done
                if (counter === promises.length) {
                    resolve(result);
                }
            }, err => {
                reject(err);
            });
        }
    });
};

const promise1 = Promise.resolve(27);
const promise2 = 10;
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, 1996);
});

const newPromise = Promise.myAll([promise1, promise2, promise3]).then((values) => {
    console.log(values);
});
