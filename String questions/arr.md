1. reverse array

```js
let arr = [1, 2, 3, 4],
  tar = 3;

let l = 0,
  h = arr.length - 1;
while (l < h) {
  let temp = arr[l];
  arr[l] = arr[h];
  arr[h] = temp;
  l++;
  h--;
}

console.log(arr);
```

2. linear search

```js
let arr = [1, 2, 3, 4],
  tar = 3;
// linear search
console.log(tar);
for (let i = 0; i < arr.length; i++) {
  if (tar === arr[i]) {
    console.log(i);
    break;
  }
}
```

3. max and min

```js
let arr = [1, 2, 3, 4],
  max = arr[0],
  min = arr[0];
// linear search

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

```js
let arr = [1, 2, 3, 4, 5, 6];

function isSorted(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}

console.log(isSorted(arr));
```

```js
// Remove Duplicates from Sorted Array

let arr = [1, 1, 2, 3, 3, 4];

let j = 0;
for (let i = 1; i < arr.length; i++) {
  // ✅ no -1
  if (arr[i] !== arr[j]) {
    j++;
    arr[j] = arr[i];
  }
}

console.log(arr);
console.log(arr.length);
```

```js
// rem dup
let arr = [12, 23, 45, 6, 5, 4, 4, 5, 4];

function remDup(arr) {
  return arr.filter((item, index) => {
    return arr.indexOf(item) === index;
  });
}
console.log(remDup(arr));
```

```js
let arr = [12, 3, 4, 5, 6],
  arr1 = [1, 2, 3, 4];

let arr3 = [];

for (let i = 0; i < arr.length; i++) {
  arr3.push(arr[i]);
}
for (let i = 0; i < arr1.length; i++) {
  arr3.push(arr1[i]);
}

console.log(arr3);
```

```js
let arr = [1, 2, 3, 4, 5],
  k = 2;
let l = 0,
  h = arr.length - 1;

function reverse(arr, l, h) {
  while (l < h) {
    let temp = arr[l];
    arr[l] = arr[h];
    arr[h] = temp;
    l++;
    h--;
  }
  return arr;
}

// console.log(reverse(arr, 0, k - 1)); // sirf pehle k elements pe reverse function chalao
// console.log(reverse(arr, k, arr.length - 1)); // sirf baaki elements pe chalao
console.log(reverse(arr, 0, arr.length - 1)); // poore array pe chalao
```

```js
// equal array or not ?

let arr1 = [1, 2, 3];
let arr2 = [3, 2, 1];

function isEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

console.log(isEqual(arr1, arr2));
```

```js
// count even and odd

let even = 0,
  odd = 0;

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    even++;
  } else {
    odd++;
  }
}

console.log(even, odd);
```

```js
// count even and odd

let count = 0,
  tar = 4;

let arr = [1, 2, 4, 4, 5, 4, 7, 8, 9];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === tar) {
    count++;
  }
}

console.log(count);
```

```js
// shift by 1 element

let arr = [1, 2, 4, 4, 5, 4, 7, 8, 9];

function leftShiftByOne(arr) {
  let first = arr[0]; // pehla element store karo

  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1]; // har element ek left khisak jao
  }

  arr[arr.length - 1] = first; // pehla element end mein daaldo

  return arr;
}

console.log(leftShiftByOne(arr));
```

```js
// missing element

let arr = [1, 3, 4, 5];

function isMiss(arr) {
  let n = arr.length + 1; // total elements hone chahiye the
  let expectedSum = (n * (n + 1)) / 2; // formula: 1 to n ka sum

  let actualSum = 0;
  for (let i = 0; i < arr.length; i++) {
    actualSum += arr[i];
  }

  return expectedSum - actualSum; // 3 ✅
}

console.log(isMiss(arr));
```

```js
// move 0s element

let arr = [1, 0, 0, 3, 0, 4, 5];

function isMiss(arr) {
  let c = 0,
    ar = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      c++;
    } else {
      ar.push(arr[i]);
    }
  }
  for (let i = 0; i < c; i++) {
    ar.push(0);
  }

  //   return expectedSum - actualSum; // 3 ✅
  return ar;
}

console.log(isMiss(arr));
```

```js
// move 0s element

let arr = [1, 0, 0, 3, 0, 4, 5];

function isMiss(arr) {
  let pos = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[pos] = arr[i];
      pos++;
    }
  }
  while (pos < arr.length) {
    arr[pos] = 0;
    pos++;
  }
  return arr;
}

console.log(isMiss(arr));
```

```js
// move 0s element

let arr = [1, 0, 0, 3, 0, 4, 5];

function isMiss(arr) {
  let pos = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[pos] = arr[i];
      pos++;
    }
  }
  while (pos < arr.length) {
    arr[pos] = 0;
    pos++;
  }
  return arr;
}

console.log(isMiss(arr));
```
