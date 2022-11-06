let timerId;

const throttle = function(func, delay = 2000) {
  if(timerId) return;
  timerId = setTimeout(function() {
    func();
    timerId = undefined;
  }, delay);
}

const debounceFunction = function(func, delay = 2000) {
	clearTimeout(timerId);
	timerId  =  setTimeout(func, delay)
}