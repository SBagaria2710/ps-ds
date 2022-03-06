function _setInterval(fn, delay, endCount) {
    // Setting initial value for count which will persist across execution because of closure
    let count = 0;

    // wrap the original function, recursively call the wrapper function with setTimeout 
    const wrapper = (endCount) => {
      fn();
      count++;
      if (count !== endCount) {
        return setTimeout(wrapper, delay, endCount);
      }
    }
    setTimeout(wrapper, delay, endCount);
  }
  
// Demo Execution
//   _setInterval(() => console.log("Hello"), 2000, 5);