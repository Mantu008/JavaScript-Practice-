const arr = [5, 1, 3, 2, 6];

//Dobule [10,2,6,4,12]
//Triple [15,3,9,6,18]
//Binary ["101","1","11","10","110"]

const double = (x) => {
    return x * 2;
};

const doubleOpt = arr.map(double);
console.log("Double :", doubleOpt);

const tripal = (x) => {
    return x * 3;
};

const tripleOpt = arr.map(tripal);
console.log("Double :", tripleOpt);

const binary = (x) => {
    return x.toString(2);
};

const binaryOpt = arr.map(binary);
console.log("Double :", binaryOpt);
