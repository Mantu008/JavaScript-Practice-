function apiCall() {
  console.log('Api Call');
}

function throtle(fn, delay) {
  let flag = true;
  return function (...args) {
    if (flag) {
      flag = false;
      setTimeout(() => {
        fn(...args);
        flag = true;
      }, delay);
    }
  };
}

const betterThrotle = throtle(apiCall, 500);
