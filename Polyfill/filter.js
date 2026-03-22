const arr = [1, 2, 3, 4, 5];

//inbult filter

console.log("inbult Filter");
const res = arr.filter((x) => x > 3);
console.log(res);

//prototype array polyfill filter

console.log("prototype array polyfill Filter");
Array.prototype.myFilter = function (cb) {
    const result = [];
    const arr = this;
    for (let i = 0; i < arr.length; i++) {
        if (cb(arr[i], i, arr)) {
            result.push(arr[i]);
        }
    }

    return result;
};

const resArr = arr.myFilter((x) => x > 3);

console.log(resArr);
