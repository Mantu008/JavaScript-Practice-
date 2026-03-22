const arr = [5, 1, 3, 2, 6];

//filter odd values
const isOdd = (x) => x % 2 !== 0;
const resultOdd = arr.filter(isOdd);
console.log("Odd Values :", resultOdd);

//filter Even values
const isEven = (x) => x % 2 == 0;
const resultEven = arr.filter(isEven);
console.log("Even Values :", resultEven);

//filter value grator then 4

const valueGraterThenFour = arr.filter((x) => x < 4);
console.log("Value Grater Then 4 :", valueGraterThenFour);
