let arr = [1, 2, 3, 4, 5];

Array.prototype.myMap = function (cb) {
  let protoArr = this;
  let resArr = [];

  for (let i = 0; i < protoArr.length; i++) {
    resArr.push(cb(arr[i], i, arr));
  }

  return resArr;
};

let mapArr = arr.myMap((data) => data * 2);

console.log(mapArr);
