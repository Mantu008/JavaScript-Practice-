const person1 = {
    firstName: "Mantu",
    lastName: "Morya",
};

const person2 = {
    firstName: "Viveak",
    lastName: "Jha",
};

const person3 = {
    firstName: "Satyam",
    lastName: "Kumar",
};

function getFullName(city, country) {
    console.log(
        this.firstName + " " + this.lastName + " from " + city + ", " + country,
    );
}

const getPersion1Data = getFullName.bind(person1, "Surat", "India");
getPersion1Data();
const getPersion2Data = getFullName.bind(person2, "Delhi", "India");
getPersion2Data();
const getPersion3Data = getFullName.bind(person3, "Jaipur", "India");
getPersion3Data();
