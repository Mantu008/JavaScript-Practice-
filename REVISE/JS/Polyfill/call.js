function PrintDetail(age) {
  console.log(`${this.name}, ${age} From ${this.city},${this.state}`);
}

const mantuDetail = {
  name: 'Mantu kumar Morya',
  city: 'Jaiput',
  state: 'Rajsthan',
};

// PrintDetail.call(mantuDetail, 21);

Function.prototype.myCall = function (context, ...args) {
  let fn = Symbol('fn');
  context[fn] = this;
  context[fn](...args);
  delete context[fn];
};

PrintDetail.myCall(mantuDetail, 21);
