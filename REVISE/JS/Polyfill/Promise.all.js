let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Resolve From P1');
  }, 1000);
});

let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Resolve From P2');
  }, 1000);
});

let p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Resolve From P3');
  }, 1000);
});

// Promise.all([p1, p2, p3])
//   .then((resArr) => {
//     console.log(resArr);
//   })
//   .catch((errArr) => {
//     console.log(errArr);
//   });

function resolveAll(args) {
  return new Promise((resolve, reject) => {
    let allPromise = [...args];
    let resArr = [];
    let resolveCounte = 0;

    allPromise.forEach((promise, index) => {
      promise
        .then((data) => {
          resolveCounte++;
          resArr[index] = data;
          if (resolveCounte === allPromise.length) resolve(resArr);
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
