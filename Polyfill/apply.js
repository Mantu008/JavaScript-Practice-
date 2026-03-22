const name = {
    firstName: "Mantu",
    lastName: "Morya",
};

const fullName = function (city, state) {
    console.log(`${this.firstName} ${this.lastName} from ${city}, ${state}`);
};

//inbuilt apply() function
fullName.apply(name, ["Jaipur", "India"]);

//create own apply() polyfil for function

Function.prototype.myApply = function (context, [...args]) {
    context.fullName = this;
    context.fullName(...args);
    delete context.fullName;
};

fullName.myApply(name, ["Jaipur", "India"]);
