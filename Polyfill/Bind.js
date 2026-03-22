const name = {
    firstName: "Mantu",
    lastName: "Morya",
};

const fullName = function (city, state) {
    console.log(`${this.firstName} ${this.lastName} from ${city}, ${state}`);
};

//inbuilt bind function
const getName = fullName.bind(name, "Jaipur", "India");
getName();

//create own bind polyfil for function

Function.prototype.myBind = function (...args) {
    let obj = this;
    let param = args.slice(1);
    return function () {
        obj.call(args[0], ...param);
    };
};

const getMyName = fullName.myBind(name, "Jaipur", "India");
getMyName();
