// console.log('For Each...................................');

// Array.prototype.myForEach = function (cb) {
//   let arr = this;
//   for (let i = 0; i < arr.length; i++) {
//     cb(arr[i], i, arr);
//   }
// };

// let arr = [1, 2, 3, 4, 5];
// arr.myForEach((el) => {
//   console.log(el);
// });

// console.log('Map...................................');

// Array.prototype.myMap = function (cb) {
//   let arr = this;
//   let resArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     resArr.push(cb(arr[i], i, arr));
//   }
//   return resArr;
// };

// let mapArr = arr.myMap((el) => {
//   return 2 * el;
// });

// console.log(mapArr);

// console.log('Filter...................................');

// Array.prototype.myFIlter = function (cb) {
//   let arr = this;
//   let resArr = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (cb(arr[i], i, arr)) {
//       resArr.push(arr[i]);
//     }
//   }
//   return resArr;
// };

// let FilteredArr = arr.myFIlter((el) => el > 2);
// console.log(FilteredArr);

// console.log('Reduce...................................');

// Array.prototype.myReduce = function (cb, initialValue) {
//   let arr = this;
//   let acc = initialValue;

//   for (let i = 0; i < arr.length; i++) {
//     acc = acc ? cb(arr[i], acc) : arr[i];
//   }

//   return acc;
// };

// let reducedArr = arr.myReduce((val, acc) => {
//   return val + acc;
// });

// console.log(reducedArr);

console.log('For Each...................................');

let arr = [1, 2, 3, 4, 5];

Array.prototype.myForEach = function (cb) {
  let arr = this;
  for (let i = 0; i < arr.length; i++) {
    cb(arr[i], i, arr);
  }
};

arr.myForEach((el) => {
  console.log(el);
});

console.log('Map...................................');

Array.prototype.myMap = function (cb) {
  let arr = this;
  let resArr = [];
  for (let i = 0; i < arr.length; i++) {
    cb(arr[i], i, arr);
    resArr.push(arr[i]);
  }
  return resArr;
};

let mapArr = arr.myMap((el) => {
  console.log(el);
});

console.log(mapArr);

console.log('Filter...................................');

Array.prototype.myFilter = function (cb) {
  let arr = this;
  let resArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i], i, arr)) {
      resArr.push(arr[i]);
    }
  }
  return resArr;
};

let filteredArr = arr.myFilter((el) => el > 2);

console.log(filteredArr);

console.log('Reduce...................................');

Array.prototype.myReduce = function (cb, initialValue) {
  let arr = this;
  let acc = initialValue;

  for (let i = 0; i < arr.length; i++) {
    acc = acc ? cb(arr[i], acc) : arr[i];
  }

  return acc;
};

let reducedArr = arr.myReduce((curr, acc) => {
  return curr + acc;
}, 0);

console.log(reducedArr);

console.log('Call...................................');

const name = {
  firstName: 'Mantu',
  lastName: 'Morya',
};

function fullName(city, state) {
  console.log(`${this.firstName} ${this.lastName} from ${city}, ${state}`);
}

// fullName.call(name, 'jaipur', 'Rajsthan');

Function.prototype.myCall = function (context, ...args) {
  context.fullName = this;
  context.fullName(...args);
  delete context.fullName;
};

fullName.myCall(name, 'jaipur', 'Rajsthan');

console.log('Apply...................................');

Function.prototype.myApply = function (context, [...args]) {
  context.fullName = this;
  context.fullName(...args);
  delete context.fullName;
};

fullName.myCall(name, 'jaipur', 'Rajsthan');

console.log('Bind...................................');

Function.prototype.myApply = function (...args) {
  let fn = this;
  let arg = args.slice(1);
  return function () {
    fn.call(args[0], ...arg);
  };
};

let bindFn = fullName.myApply(name, 'jaipur', 'Rajsthan');
bindFn();

//promise.all

let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Resolve from P1');
  }, 1000);
});

let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Resolve from P2');
  }, 1000);
});

let p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Resolve from P3');
  }, 1000);
});

// Promise.all([p1, p2, p3])
//   .then((resArr) => {
//     console.log(resArr);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

function resolveAll(promiseArr) {
  return new Promise((resolve, reject) => {
    let allPromise = promiseArr;
    let resolvedCount = 0;
    let resArr = [];

    allPromise.forEach((promise, index) => {
      promise
        .then((res) => {
          resArr[index] = res;
          resolvedCount++;
          if (resolvedCount === allPromise.length) {
            resolve(resArr);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
}

resolveAll([p1, p2, p3])
  .then((resArr) => {
    console.log(resArr);
  })
  .catch((err) => {
    console.log(err);
  });

function resolveAny(promiseArr) {
  return new Promise((resolve, reject) => {
    let allPromise = promiseArr;
    let rejectedCount = 0;
    let resArr = [];

    allPromise.forEach((promise, index) => {
      promise
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          resArr[index] = err;
          rejectedCount++;
          if (rejectedCount === allPromise.length) {
            reject(resArr);
          }
        });
    });
  });
}

resolveAny([p1, p2, p3])
  .then((res) => {
    console.log(res);
  })
  .catch((errArr) => {
    console.log(errArr);
  });

function resolveRace(promiseArr) {
  return new Promise((resolve, reject) => {
    let allPromise = promiseArr;
    let rejectedCount = 0;
    let resArr = [];

    allPromise.forEach((promise, index) => {
      promise
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
}

resolveRace([p1, p2, p3])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
