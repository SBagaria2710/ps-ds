const STATE = {
    PENDING: 0,
    FULFILLED: 1,
    REJECTED: 2
};

const isFunction = (value) => {
    if (value && typeof value === "function") {
        return true;
    } else {
        return false;
    }
};

const getThen = (value) => {
    const type = typeof value;
    if (type === "object" || type === "function") {
        const then = value.then;
        if (value && typeof then === "function") {
            return then;
        }
    }
};

function myPromise(fn) {
    let status = STATE.PENDING;
    let value;
    let handlers = [];

    const fulfill = (result) => {
        status = STATE.FULFILLED;
        value = result;
        handlers.forEach(handler => handler.onFulfill(value));
    };

    const reject = (error) => {
        status = STATE.REJECTED;
        value = error;
        handlers.forEach(handler => handler.onReject(value));
    };

    const handle = (onFulfill, onReject) => {
        setTimeout(() => {
            if (status === STATE.PENDING) handlers.push({
                onFulfill, onReject
            });
    
            if (status === STATE.FULFILLED) onFulfill(value);
            if (status === STATE.REJECTED) onReject(value);
        }, 0)
    };

    this.then = (onFulfill, onReject) => {
        return new myPromise((resolve, reject) => {
            handle(
                (result) => {
                    if (isFunction(onFulfill)) {
                        try {
                            resolve(onFulfill(result));
                        } catch(err) {
                            reject(err);
                        }
                        return;
                    };
                    resolve(result);
                },
                (error) => {
                    if (isFunction(onReject)) {
                        try {
                            resolve(onReject(error));
                        } catch (err) {
                            reject(err);
                        }
                        return;
                    };
                    reject(error);
                }
            );
        });
    };

    const process = (fn) => {
        let called = false;
        try {
            fn(
                (result) => {
                    if (result === this) {
                        throw new TypeError();
                    }
                    if (called) return;
                    called = true;
                    try {
                        const then = getThen(result);
                        if (then) {
                            process(then.bind(result));
                            return;
                        }
                    } catch (err) {
                        reject(err);
                        return;
                    }
                    fulfill(result)
                },
                (error) => {
                    if (result === this) {
                        throw new TypeError();
                    }
                    if (called) return;
                    called = true;
                    reject(error)
                },
            );
        } catch (err) {
            if (called) return;
            called = true;
            reject(err);
        };
    };

    process(fn);
};

const p = new myPromise((resolve, reject) => setTimeout(reject, 2000, 5));
p.then(val => {
    console.log("Resolved", val);
    return val;
}, err => {
    console.log("Rejected", err);
    return err;
}).then(val => {
    console.log("Resolved1", val * 2);
    return val;
}, err => {
    console.log("Rejected1", err * 2);
    return err;
});

const promise = new myPromise((resolve, reject) => { resolve(promise); });
