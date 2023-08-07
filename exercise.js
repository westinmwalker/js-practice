// using individual callbacks
// setTimeout(function () {
//   console.log("First task done!");
// }, 2000);

// setTimeout(function () {
//   console.log("Second task done!");
// }, 4000);

// setTimeout(function () {
//   console.log("Third task done!");
// }, 6000);

// using nested callbacks
setTimeout(function () {
  console.log("First task done!");
  setTimeout(function () {
    console.log("Second task done!");
    setTimeout(function () {
      console.log("Third task done!");
    }, 2000);
  }, 2000);
}, 2000);
