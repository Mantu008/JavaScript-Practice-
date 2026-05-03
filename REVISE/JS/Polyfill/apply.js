function PrintDetail(age) {
  console.log(`${this.name}, ${age} From ${this.city},${this.state}`);
}

const mantuDetail = {
  name: 'Mantu kumar Morya',
  city: 'Jaiput',
  state: 'Rajsthan',
};

// PrintDetail.apply(mantuDetail, 21);

Function.prototype.myApply = function (context, args) {
  console.log(args);
  let fn = Symbol('fn');
  context[fn] = this;
  context[fn](...args);
  delete context[fn];
};

PrintDetail.myApply(mantuDetail, [21, 'Software Developer']);
