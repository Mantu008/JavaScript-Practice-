function getData(dataId, getNextData) {
    setTimeout(() => {
        console.log(`Data with ID ${dataId}`);
        if (getNextData) {
            getNextData();
        }
    }, 1000);
}

//callback hell so to avoid this callback hell we sue promises
getData(1, () => {
    console.log("getting Data 2...");
    getData(2, () => {
        console.log("getting Data 3...");
        getData(3, () => {
            console.log("getting Data 4...");
            getData(4);
        });
    });
});
