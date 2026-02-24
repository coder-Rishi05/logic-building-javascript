1. Reverse an Array

```js
let arr = [12, 3, 4, 6, 7];

for (let i = arr.length; i >= 0; i--) {
  console.log(arr[i]);
}

let i = 0,
  size = arr.length - 1;
while (size > i) {
  let temp = arr[i];
  arr[i] = arr[size];
  arr[size] = temp;
  i++;
  size--;
}
console.log(arr);
```

2.  Find Sum of All Elements in an Array

```js
let arr = [12, 3, 4, 6, 7];
let sum = 0;
for (let i = 0; i < arr.length - 1; i++) {
  sum += arr[i];
}
console.log(sum);
```

3.  Find Maximum and Minimum Element

```js
let arr = [10, 34, 53, 1, 34, 9];

let max = arr[0];
let min = arr[0];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  } else if (arr[i] < min) {
    min = arr[i];
  }
}

console.log(max);
console.log(min);
```

4. Linear Search (Find Index of Target)

```js
let arr = [10, 34, 53, 1, 34, 9];
let tar = 10;

function Search(arr, tar) {
for (let i = 0; i < arr.length; i++) {
if (arr[i] === tar) {
return "target found at index " + i;
} else {
return "target not found";
}
}
}

let res = Search(arr, tar);

console.log(res);
```