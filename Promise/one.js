const task = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("task completed");
        }, 2000);
    });
};

const runTask = async () => {
    console.log("start");   
    const result = await task();
    console.log(result);
    console.log("end");
};

runTask();
