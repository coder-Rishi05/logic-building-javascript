q1. Linear Search

```js
let arr = [1, 2, 3, 4, 5, 6, 7, 8];

let tar = 4;

function linearSearch(arr, tar) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === tar) {
      return i;
    }
  }
}

console.log(linearSearch(arr, tar));
```

q2. first occurance of arr

```js
let arr = [1, 2, 1, 4, 2, 6, 7, 8];

let tar = 1;

function linearSearch(arr, tar) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === tar) {
      return i;
    }
  }
  return `${tar} not found`;
}

console.log(linearSearch(arr, tar));
```

q3. // last occurance of arr element

```js
let arr = [1, 2, 1, 4, 2, 6, 7, 8];
let occ = [];
let tar = 2;

function linearSearch(arr, tar) {
  for (let i = 0; i < arr.length; i++) {
    if (tar === arr[i]) {
      console.log("element found at index : ", i);
      occ.push(i);
    }
  }
  return !occ.length
    ? `${tar} not found`
    : `last occurence of index is ${occ[occ.length - 1]}`;
}

console.log(linearSearch(arr, tar));
```

q4. last occurance of arr element

```js
let arr = [1, 2, 1, 4, 2, 6, 7, 8];
let occ;
let tar = 2;

function linearSearch(arr, tar) {
  for (let i = 0; i < arr.length; i++) {
    if (tar === arr[i]) {
      occ = i;
    }
  }
  return !occ ? `${tar} not found` : `last occurence of index is ${occ}`;
}

console.log(linearSearch(arr, tar));
```

// last occurance of arr element

let arr = [1, 2, 1, 4, 2, 6, 7, 8];
let occ;
let tar = 2;

function linearSearch(arr, tar) {
for (let i = 0; i < arr.length; i++) {
if (tar === arr[i]) {
occ = i;
}
}
return !occ
? `${tar} not found`
: `last occurence of index is ${occ}`;
}

console.log(linearSearch(arr, tar));

5/ count occurence of arr element

```js
let arr = [1, 2, 1, 4, 2, 6, 2, 2, 2, 2, 2, 7, 8];
let occ = 0;
let tar = 2;

function linearSearch(arr, tar) {
  for (let i = 0; i < arr.length; i++) {
    if (tar === arr[i]) {
      occ += 1;
    }
  }
  return !occ ? `${tar} not found` : `total occurence of item is ${occ}`;
}

console.log(linearSearch(arr, tar));
```

6. // count occurence of arr element

```js
let arr = [1, 2, 1, 4, 2, 6, 2, 2, 2, 2, 2, 7, 8];
let occ = [];
let tar = 2;

function linearSearch(arr, tar) {
  for (let i = 0; i < arr.length; i++) {
    if (tar === arr[i]) {
      occ.push(i);
    }
  }
  return !occ.length
    ? `${tar} not found`
    : `total occurence of item at index is:  ${occ}`;
}

console.log(linearSearch(arr, tar));
```

```js
// linear search in objects

let obj = [
  { id: 1, name: "A" },
  { id: 2, name: "B" },
  { id: 3, name: "C" },
];

// let occ = [];
let tar = 2;

function linearSearch(obj, tar) {
  for (let i = 0; i < obj.length; i++) {
    if (tar === obj[i].id) {
      return obj[i];
    }
  }
  return null;
}

console.log(linearSearch(obj, tar));
```

```js
// min val using linear search

let arr = [9, 3, 5, 1, 7];

let min = arr[0];

function minEle(arr, min) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
      return arr[min];
    }
  }
  return -1;
}

console.log(minEle(arr, min));
```

```js
// max val using linear search

let arr = [1, 3, 5, 1, 7];

function minEle(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]);
    max = arr[i];
  }
  return max;
}

console.log(minEle(arr));
```

```js
// first value greater than x

let arr = [1, 2, 3, 4, 5, 6, 7, 8];

let tar = 5;

function linearSearch(arr, tar) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > tar) {
      return arr[i];
    }
  }
  return null;
}

console.log(linearSearch(arr, tar));
```

```js
// array strictly increasing

let arr = [1, 2, 3, 4, 15, 6, 7, 8];
let check = true;
let tar = 5;

function linearSearch(arr, tar) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      check = false;
    }
  }
  return check;
}

console.log(linearSearch(arr, tar));
```

```js
// string starts with char

let arr = ["pri", "ball", "apple", "rishi"];

let char = "r";

function strStr(arr, char) {
  let val = "";
  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
    if (arr[i].includes(char)) {
      return arr[i];
    }
  }
  return -1;
}

console.log(strStr(arr, char));
```
