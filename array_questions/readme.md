1. Enter an array from user and copy the array into second array?

```js
const arr = [12, 21, 45, 75, 57];

let newArr = [];

for (let i = 0; i < arr.length; i++) {
  newArr[i] = arr[i];
}

console.log(newArr);
```

2. copy it into another array in reverse order?

```js
const arr = [12, 21, 45, 75, 57];

let newArr = [];

function reverseArr(arr) {
  let first = 0,
    last = arr.length - 1;

  while (last > first) {
    let temp = arr[first];
    arr[first] = arr[last];
    arr[last] = temp;
    last--;
    first++;
  }

  for (let i = 0; i < arr.length; i++) {
    newArr[i] = arr[i];
  }

  return newArr;
}

console.log(newArr);
```

3.  print the number which is even ?

```js
const arr = [12, 21, 45, 75, 57];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    console.log(arr[i]);
  }
}
```

4.  print the number which is even ?

```js
const arr = [12, -21, -45, 75, 57];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 0) {
    console.log(arr[i]);
  }
}
```

5. Enter an array from user and find maximum and minimum value?

```js
const arr = [12, -21, -45, 75, 57];

let max = 0,
  min = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
  if (arr[i] < min) {
    min = arr[i];
  }
}

console.log(max, min);
```

6. Enter an array from user and find the duplicate values?

```js
let arr = [12, 24, 56, 12, 34, 55, 12];

for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] === arr[j]) {
      console.log("duplicate at : ", j, i);
    }
  }
}
```
