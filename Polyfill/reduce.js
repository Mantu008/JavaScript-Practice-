const arr = [1, 2, 3, 4, 5];

//inbult reduce()

console.log("inbult reduce()");
const res = arr.reduce((acc, curr) => {
    return acc + curr;
}, 0);
console.log("Total Of the given Number is:", res);

//prototype array polyfill reduce()

console.log("prototype array polyfill reduce()");
Array.prototype.myFilter = function (cb, initialValue) {
    let acc = initialValue;
    let arr = this;
    for (let i = 0; i < arr.length; i++) {
        acc = acc ? cb(acc, arr[i]) : arr[i];
    }
    return acc;
};

const resArr = arr.myFilter((acc, curr) => {
    return acc + curr;
}, 0);

console.log("Total Of the given Number is:", resArr);
