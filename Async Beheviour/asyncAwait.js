/*

// 1.

function api() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Weather Data");
            resolve("Sucess");
        }, 2000);
    });
}

async function getApiData() {
    await api();
}

getApiData();


*/

/*
// 2

function api(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Api Data with ID ${dataId}`);
            resolve("sucess");
            reject("Rejected");
        }, 1000);
    });
}

//thats why the async await is better approch to handle async programing

(async function () {
    console.log("Getting Data 1");
    await api(1);
    console.log("Getting Data 2");
    await api(2);
    console.log("Getting Data 3");
    await api(3);
    console.log("Getting Data 4");
    await api(4);
    console.log("Getting Data 5");
    await api(5);
})();


*/
