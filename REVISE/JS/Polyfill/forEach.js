let arr = [1, 2, 3, 4, 5];

Array.prototype.myForEach = function (cb) {
  let protoArr = this;

  for (let i = 0; i < protoArr.length; i++) {
    cb(arr[i], i, arr);
  }
};

arr.myForEach((data) => {
  console.log(data);
});
