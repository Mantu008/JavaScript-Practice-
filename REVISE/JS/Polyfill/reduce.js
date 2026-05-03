let arr = [1, 2, 3, 4, 5];

Array.prototype.myMap = function (cb, initialValue) {
  let protoArr = this;
  let acc = initialValue;

  for (let i = 0; i < protoArr.length; i++) {
    acc = acc ? cb(arr[i], acc) : arr[i];
  }

  return acc;
};

let mapArr = arr.myMap((curr, acc) => {
  return curr + acc;
}, 0);

console.log(mapArr);
