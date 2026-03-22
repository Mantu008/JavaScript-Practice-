const radius = [3, 1, 2, 4, 5];

const calculateArea = () => {
    const output = [];
    for (let i = 0; i < radius.length; i++) {
        output.push(Math.PI * radius[i] * radius[i]);
    }
    console.log(output);
};

calculateArea(radius);

const calculateCircumference = () => {
    const output = [];
    for (let i = 0; i < radius.length; i++) {
        output.push(2 * Math.PI * radius[i]);
    }
    console.log(output);
};

calculateCircumference(radius);

const calculateDiameter = () => {
    const output = [];
    for (let i = 0; i < radius.length; i++) {
        output.push(2 * radius[i]);
    }
    console.log(output);
};

calculateDiameter(radius);
