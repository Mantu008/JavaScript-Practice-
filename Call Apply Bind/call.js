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

getFullName.call(person1, "Surat", "India");
getFullName.call(person2, "Delhi", "India");
getFullName.call(person3, "Jaipur", "India");
