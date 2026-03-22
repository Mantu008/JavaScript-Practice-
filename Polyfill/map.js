const arr = [1, 2, 3, 4, 5];

//inbult map

console.log("inbult map");
const res = arr.map((x) => {
    return x * 4;
});
console.log(res);

//prototype array polyfill map

console.log("prototype array polyfill map");
Array.prototype.myMap = function (cb) {
    const result = [];
    const arr = this;
    for (let i = 0; i < arr.length; i++) {
        result.push(cb(arr[i], i, arr));
    }

    return result;
};

const resArr = arr.myMap((x, i, arr) => {
    return x * 4;
});

console.log(resArr);
