// setInterval(function() {
//   console.log((new Date(Date.now())).toLocaleString());
// }, 2000);

function diySetInterval(func, interval) {
  func();
  return setTimeout(arguments.callee, interval, func, interval);
}

diySetInterval(function() {
  console.log((new Date(Date.now())).toLocaleString());
}, 2000);
