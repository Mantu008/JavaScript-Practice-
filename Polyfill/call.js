const name = {
    firstName: "Mantu",
    lastName: "Morya",
};

const fullName = function (city, state) {
    console.log(`${this.firstName} ${this.lastName} from ${city}, ${state}`);
};

//inbuilt call() function
fullName.call(name, "Jaipur", "India");

//create own call() polyfil for function

Function.prototype.myCall = function (context, ...args) {
    context.fullName = this;
    context.fullName(...args);
    delete context.fullName;
};

fullName.myCall(name, "Jaipur", "India");

//we can also use this but more profetional way
// Function.prototype.myCall = function (context, ...args) {
//     context = context || globalThis;

//     const fnSymbol = Symbol(); // unique key

//     context[fnSymbol] = this;
//     context[fnSymbol](...args);
//     delete context[fnSymbol];
// };
