1. Sort an Array in Ascending Order Using Bubble Sort

```js
let arr = [5, 3, 8, 4, 2];

for (let i = 0; i < arr.length - 1; i++) {
  for (let j = 0; j < arr.length - 1; j++) {
    if (arr[j] > arr[j + 1]) {
      let temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
}

console.log(arr);
```

2. Optimized buble sort

```js
// let arr = [5, 3, 8, 4, 2, 100, 98, 344, 13, 67];

let arr = [2, 3, 4, 5, 8, 13, 67, 98, 100, 344];
function bubbleSort(arr) {
  let loopCount = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    let sorted = false;
    for (let j = 0; j < arr.length - 1 - i; j++) {
      loopCount++;
      if (arr[j] < arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        sorted = true;
      }
    }
    if (!sorted) break;
  }

  console.log(loopCount);
  console.log(arr);

  // best tc = O(n) and worst O(n^2)
}

console.log(bubbleSort(arr));
```

3. Decending bubble sort

```js
// let arr = [5, 3, 8, 4, 2, 100, 98, 344, 13, 67];

let arr = [2, 3, 4, 5, 8, 13, 67, 98, 100, 344];
function bubbleSort(arr) {
  let loopCount = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    let sorted = false;
    for (let j = 0; j < arr.length - 1 - i; j++) {
      loopCount++;
      if (arr[j] < arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        sorted = true;
      }
    }
    if (!sorted) break;
  }

  console.log(loopCount);
  console.log(arr);

  // best tc = O(n) and worst O(n^2)
}

console.log(bubbleSort(arr));
```

4. sort an string

```js
// let arr = [5, 3, 8, 4, 2, 100, 98, 344, 13, 67];

let str = "javascript";

function bubbleSort(arr) {
  let loopCount = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    let sorted = false;
    for (let j = 0; j < arr.length - 1 - i; j++) {
      loopCount++;
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        sorted = true;
      }
    }
    if (!sorted) break;
  }

  console.log(loopCount);
  console.log(arr);
}

console.log(bubbleSort(str.split("")));

a = ["a", "a", "c", "i", "j", "p", "r", "s", "t", "v"];
```

5. count swap performed

```js
let arr1 = [6, 4, 3, 2, 1];

let c = 0;
for (let i = 0; i < arr1.length - 1; i++) {
  let sort = false;
  //   c++;
  for (let j = 0; j < arr1.length - 1 - i; j++) {
    if (arr1[j] > arr1[j + 1]) {
      let temp = arr1[j];
      arr1[j] = arr1[j + 1];
      arr1[j + 1] = temp;
      sort = true;
      c++;
    }
  }
  if (!sort) break;
}

console.log(arr1, c);
```

```js
let arr1 = [9, 4, 2, 7, 6, 5];

let c = 0;
for (let i = 0; i < arr1.length - 1; i++) {
  let sort = false;
  //   c++;
  for (let j = 0; j < arr1.length - 1 - i; j++) {
    if (arr1[j] % 2 === 0) {
      if (arr1[j] > arr1[j + 1]) {
        let temp = arr1[j];
        arr1[j] = arr1[j + 1];
        arr1[j + 1] = temp;
        sort = true;
        c++;
      }
    }
  }
  if (!sort) break;
}

console.log(arr1, c);
```

```js
let arr = ["b", "A", "d", "C"];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i].charCodeAt(0));
}

function strSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let sorted = false;

    for (let j = 0; j < arr.length - 1; j++) {
      if (
        arr[j].toLowerCase().charCodeAt(0) >
        arr[j + 1].toLowerCase().charCodeAt(0)
      ) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        sorted = true;
      }
    }
    if (!sorted) break;
  }
  return arr;
}

console.log(strSort(arr));
```

```js
let arr = [5, 4, 3, 2, 1],
  k = 2,
  c = 0;
function strSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let sorted = false;
    if (c === k) break;
    c++;

    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        sorted = true;
        // }
      }
    }
    if (!sorted) break;
  }
  return arr;
}

console.log(strSort(arr));
```
