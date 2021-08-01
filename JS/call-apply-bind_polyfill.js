// Polyfills
Function.prototype.myCall = function(ctx, ...args) {
  ctx.fn = this;
  return ctx.fn(...args);
}

Function.prototype.myApply = function(ctx, args) {
  ctx.fn = this;
  return ctx.fn(...args);
}

Function.prototype.myBind = function(...args) {
  let obj = this,
      params = args.slice(1);
  return function(...secondaryArgs) {
    obj.apply(args[0], [...params, ...secondaryArgs]);
  };
};


// Bhumika
let obj = {
  firstName: 'Shashwat'
}

function printMyName(lastName, hometown) {
  console.log(`My name is ${this.firstName} ${lastName} and I live in ${hometown}`);
}

// Trying things out
printMyName.bind(obj, 'Bagaria')('Lucknow');
printMyName.myBind(obj, 'Bagaria')('Lucknow');

printMyName.call(obj, 'Bagaria', 'Lucknow');
printMyName.myCall(obj, 'Bagaria', 'Lucknow');

printMyName.apply(obj, ['Bagaria', 'Lucknow']);
printMyName.myApply(obj, ['Bagaria', 'Lucknow']);