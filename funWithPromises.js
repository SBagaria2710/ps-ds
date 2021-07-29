// CONTEXT: https://stackoverflow.com/questions/57359074/synchronous-callback-with-different-timeout

let f1 = (cb) => {
  return new Promise(function(resolve) {
    setTimeout(() => {
        resolve(cb(null, {a: 1}));
    }, 100);
  });
}

let f2 = (cb) => { 
  return new Promise(function(resolve) {
    setTimeout(() => {
        resolve(cb(null, {a: 2}));
    }, 50);
  });
}

let f3 = (cb) => { 
  return new Promise(function(resolve) {
    setTimeout(() => {
        resolve(cb(null, {a: 3}));
    }, 10);
  });
}

function parallelConsole(arr, cb) {
  // First Way
  let promisedArr = arr.map(func => func((temp, val) => val));
  Promise.all(promisedArr).then(val => cb(val));
  
  //Second Way
  let result = [];
  arr.forEach((func, index) => {
    func((temp, val) => val).then(function(val) {
      result[index] = val;
      if(arr.length === result.length && !result.includes(undefined)) {
        cb(result);
      }
    });
  });
};

parallelConsole([f1, f2, f3], (res) => {
  console.log(res) //[{a: 3}, {a: 2}, {a: 1}]
});


// Un - Related

// function wait(value, ms = 2000) {
//   return new Promise(function(resolve) {
//     setTimeout(resolve, ms, value);
//   });
// }

// let result = ['Shashwat', 'Anurag'];
// result.reduce((acc, item) => {
//   return acc.then(function() {
//     return wait(item);
//   }).then(function(val) {
//     console.log(val);
//   });
// }, Promise.resolve());
