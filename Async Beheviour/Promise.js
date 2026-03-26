/*

// 1.

const promise = new Promise((resolve, reject) => {
    // resolve("promise resolved");
    reject("Reject Ho Gya");
});

promise
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    });


*/

/*

// 2.

function getPromsie() {
    return new Promise((resolve, reject) => {
        console.log("I am a Promise");
        // resolve("Resolved..");
        reject("Reject...");
    });
}

const promise = getPromsie();
promise
    .then((data) => {
        console.log("Promise Fulfilled..", data);
    })
    .catch((err) => {
        console.log("Promise Rejected", err);
    });


*/

/*

// 3.

function asyncFunction1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Getting Data 1`);
            resolve("Sucess..");
        }, 1000);
    });
}

function asyncFunction2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Getting Data 2`);
            resolve("Sucess..");
        }, 1000);
    });
}

function asyncFunction3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Getting Data 3`);
            resolve("Sucess..");
        }, 1000);
    });
}
console.log("Fetching Data 1");
asyncFunction1().then((data) => {
    console.log("Fetching Data 2");
    asyncFunction2((data) => {}).then((data) => {
        console.log("Fetching Data 3");
        asyncFunction3();
    });
});


*/

/*

// 4.
function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Data with ID ${dataId}`);
            resolve("sucess");
            reject("Rejected");
        }, 1000);
    });
}

// getData(1).then((data) => {
//     getData(2).then((data) => {
//         getData(3).then((data) => {
//             getData(4).then((data) => {
//                 getData(5);
//             });
//         });
//     });
// });

// this ios called promise chaning that looks lenthy and messy so thats we use async awat moder ways to hanle asynchronous programing

getData(1)
    .then((data) => {
        return getData(2);
    })
    .then((data) => {
        return getData(3);
    })
    .then((data) => {
        return getData(4);
    })
    .then((data) => {
        getData(5);
    })
    .catch((err) => {
        console.log(err);
    });


    */
