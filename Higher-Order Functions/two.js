const radius = [3, 1, 2, 4, 5];

const area = (radius) => {
    return Math.PI * radius * radius;
};

const Circumference = (radius) => {
    return 2 * Math.PI * radius;
};

const Diameter = (radius) => {
    return 2 * radius;
};

const calculate = (radius, logic) => {
    const output = [];
    for (let i = 0; i < radius.length; i++) {
        output.push(logic(radius[i]));
    }
    console.log(output);
};

//make the prototype of this calculate like map
Array.prototype.calc = (radius, logic) => {
    const output = [];
    for (let i = 0; i < radius.length; i++) {
        output.push(logic(radius[i]));
    }
    console.log(output);
};

calculate(radius, area);
console.log(radius.map(area)); //simallier to the upper function call using inbuilt map
radius.calc(radius, area); // simmiter to map with prototype add awn method into prototype that directly ab=valiable as inuilt function/method   and this .calc() function is abliable for all arrays inbuilt function
calculate(radius, Circumference);
calculate(radius, Diameter);
