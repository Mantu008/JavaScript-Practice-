function PrintDetail(age) {
  console.log(`${this.name}, ${age} From ${this.city}, ${this.state}`);
}

const mantuDetail = {
  name: 'Mantu kumar Morya',
  city: 'Jaiput',
  state: 'Rajsthan',
};

// PrintDetail.call(mantuDetail, 21);

Function.prototype.myCall = function (context, ...args) {
  const fn = this;
  return function () {
    fn.call(context, ...args);
  };
};

let detail = PrintDetail.myCall(mantuDetail, 21);
detail();
