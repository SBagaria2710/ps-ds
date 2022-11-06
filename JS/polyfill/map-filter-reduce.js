let arr = [1,2,3,4];

Array.prototype.myMap = function(callback) {
  if (this === null) throw new TypeError( 'Array.prototype.myMap ' + 'called on null or undefined');
  if(!callback) throw new TypeError(callback + ' is not a function');
  let resultArr = [];
  this.forEach((item, index) => {
    const val = callback(item, index, this);
    resultArr.push(val);
  });
  return resultArr;
}

arr.map(item => item*item);
arr.myMap(item => item*item);


Array.prototype.myFilter = function(callback) {
  if (this === null) throw new TypeError( 'Array.prototype.myFilter ' + 'called on null or undefined');
  if(!callback) throw new TypeError(callback + ' is not a function');
  let resultArr = [];
  this.forEach((item, index) => {
    const val = callback(item, index, this);
    if(!!val) resultArr.push(item);
  });
  return resultArr;
}

arr.filter(item => item < 3);
arr.myFilter(item => item < 3);


Array.prototype.myReduce = function(callback, acc = '') {
  if (this === null) throw new TypeError( 'Array.prototype.myReduce ' + 'called on null or undefined');
  if(!callback) throw new TypeError(callback + ' is not a function');
  this.forEach((item, index) => {
    if (acc === '') acc = 0;
    acc = callback(acc, item, index, this);
  });
  return acc;
}

arr.myReduce((acc, item) => item+acc);
arr.reduce((acc, item) => item+acc);