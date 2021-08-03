// First Challenge
function sum(...args) {
  const total = args.reduce((acc, item) => acc+item, 0);
  return function(...params) {
    if (params.length) {
      return sum(total, ...params);
    }
    return total;
  }
}

console.log(sum(10,12,12)(20,21)(32)(40)());


// Second Challenge
const sum = function(a) {
  return function(b) {
    if (b !== 'STOP') {
      return b ? sum(a+b) : sum(a);
    } else {
      return a;
    }
  }
}

console.log(sum(1)(2)()(null)(undefined)()(3)('STOP'));