let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Reject From P1');
  }, 4000);
});

let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Reject From P2');
  }, 1000);
});

let p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Reject From P3');
  }, 1000);
});

// Promise.race([p1, p2, p3])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

function resolveRace(args) {
  return new Promise((resolve, reject) => {
    let allPromise = [...args];

    allPromise.forEach((promise, index) => {
      promise
        .then((data) => {
          resolve(data);
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
