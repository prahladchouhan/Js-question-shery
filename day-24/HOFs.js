// Delayed Execution Using Callback (HOF + Callback)
// Concept ; -
// A function can accept another function as an argument (callback) and
// execute it after a delay using setTimeout.

function delayExe(callback) {
  setTimeout(callback, 3000);
}

delayExe(() => console.log("execute in 3 sec."));
