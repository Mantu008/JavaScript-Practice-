//or   we can done via clousre or nested function or bind

const multiply = (x, y) => {
    console.log(x * y);
};

let multiplyByTwo = multiply.bind(this, 2);

//after bind the function look like
// const multiplyByTwo = (y) => {
//     let x = 2;
//     console.log(x * y);
// };

multiplyByTwo(5);

let multiplyByThree = multiply.bind(this, 3);
multiplyByThree(5);

//or   we can done via clousre or nested function or bind

const mult = (x) => {
    return (y) => {
        console.log(x * y);
    };
};

const multTwo = mult(2);
multTwo(6);
