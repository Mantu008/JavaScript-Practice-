const users = [
    { firstName: "John", lastName: "Doe", age: 26 },
    { firstName: "Jane", lastName: "Smith", age: 75 },
    { firstName: "Aman", lastName: "Verma", age: 26 },
    { firstName: "Riya", lastName: "Shah", age: 50 },
];

//list of full names
//["Jhon Doe","Jane Smith"...]

const fullName = users.map((user) => {
    return user.firstName + " " + user.lastName;
});

console.log(fullName);

//  how many people is from particular age

const getAgeCount = users.reduce((acc, curr) => {
    if (acc[curr.age]) {
        acc[curr.age] = ++acc[curr.age];
    } else {
        acc[curr.age] = 1;
    }
    return acc;
}, {});

console.log(getAgeCount);

//find first name of each user whose age is <30

const ageLess30One = users
    .filter((user) => user.age < 30)
    .map((user) => user.firstName);
console.log(ageLess30One);

//or using reduce

const ageLess30Two = users.reduce((acc, curr) => {
    if (curr.age < 30) {
        acc.push(curr.firstName);
    }
    return acc;
}, []);
console.log(ageLess30Two);
