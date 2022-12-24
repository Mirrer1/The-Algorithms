const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

const num = +input[0];
const list = input[1].split(' ').map(v => +v);

const stack = [];
const arr = [];
const count = {};

for (let i = 0; i < num; i++) {
  if (!count[list[i]]) count[list[i]] = 1;
  else count[list[i]]++;
}

for (let i = 0; i< num; i++) {
  while (stack.length !== 0 && count[list[i]] > count[list[stack[stack.length - 1]]]) {
    arr[stack.pop()] = list[i];
  }
  stack.push(i);    
}

while (stack.length !== 0) {
  arr[stack.pop()] = -1;
}

console.log(arr.join(' '));