const obj = {
    num: 10,
};

function multiply(a, b) {
    return this.num * a * b;
}

console.log("The Result of Call :", multiply.call(obj, 2, 3));
console.log("The Result of Apply :", multiply.apply(obj, [2, 3]));

const newFunc = multiply.bind(obj, 2, 3);
console.log("The Result of Bind :", newFunc());
