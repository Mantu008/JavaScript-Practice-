let currTime = new Date().getSeconds();
console.log("start time :", currTime);
setTimeout(function cb() {
    currTime = new Date().getSeconds();
    console.log("Callback Time :", currTime);
}, 0);

let endTime = currTime + 10;

while (currTime < endTime) {
    currTime = new Date().getSeconds();
}
currTime = new Date().getSeconds();
console.log("End Time :", currTime);
