// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter Please check below console in right side pane</h1>`;

var prevConsoleLog = console.log;

console.log = function () {
  var newArgs = [];
  for (var arg of arguments) {
    newArgs = [...newArgs, arg, typeof arg];
  }
  prevConsoleLog.apply(this, newArgs);
};

console.log(3); // 3 "number"
console.log('a'); // "a" "string"
console.log(2, 'a'); // 2 "number" "a" "string"

function getValues(obj, rest) {
  for (let item of Object.keys(obj)) {
    if (!rest[obj[item]]) {
      if (typeof obj[item] === 'object') {
        getValues(obj[item], rest);
      } else {
        rest[obj[item]] = obj[item];
      }
    }
  }
  return Object.keys(rest).map((item) => parseInt(item));//way -1
}

function getUniqueSortedNumbers(obj) {
  console.log(getValues(obj, {}));
}

getUniqueSortedNumbers({
  a: {
    x: 3,
    y: {
      d: 2,
      e: 2,
      f: {
        g: 4,
      },
      z: 8,
    },
  },
}); // [2, 3, 4, 8];
