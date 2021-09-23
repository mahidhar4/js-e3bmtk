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
