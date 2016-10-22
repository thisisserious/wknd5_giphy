console.log('About to make a promise');

var promise = new Promise(function (resolve) {
    setTimeout(function () {
      console.log('Resolving the promise');
      resolve(42);
  }, 2000);
  });

console.log('promise object', promise);
