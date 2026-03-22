const arr = [1, 2, 3, 4, 5];

//inbult forEach
console.log("inbult forEach");
arr.map((x) => {
    console.log(x);
});

//prototype array polyfill forEach()
console.log("prototype array polyfill forEach()");
Array.prototype.myForEach = function (cb) {
    for (let i = 0; i < arr.length; i++) {
        cb(this[i], i, arr);
    }
};
arr.myForEach((x) => {
    console.log(x);
});
