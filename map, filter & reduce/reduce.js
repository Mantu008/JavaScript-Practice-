const arr = [5, 1, 3, 2, 6];

//reduce() :-take all the value of an array and return/ comeup with single value as result not return an array eg. adding of an array

//sum of each element in array
const add = (acc, curr) => {
    return acc + curr;
};
const additionOfArray = arr.reduce(add);

console.log("Addition OF Each Element in Array :-", additionOfArray);

// find max element in array
const maxEle = arr.reduce((max, curr) => {
    if (curr >= max) {
        max = curr;
    }
    return max;
}, 0);

console.log("Maximam Element of Array :", maxEle);
