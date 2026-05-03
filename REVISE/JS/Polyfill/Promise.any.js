let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Reject From P1');
  }, 1000);
});

let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Reject From P2');
  }, 1000);
});

let p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Reject From P3');
  }, 1000);
});

// Promise.any([p1, p2, p3])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

function resolveAny(args) {
  return new Promise((resolve, reject) => {
    let allPromise = [...args];
    let resArr = [];
    let rejectedCount = 0;

    allPromise.forEach((promise, index) => {
      promise
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          resArr[index] = err;
          rejectedCount++;
          if (rejectedCount === allPromise.length) reject(resArr);
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
