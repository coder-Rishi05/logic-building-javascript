1. Max and Min

````js
let arr = [12, 32, 6];
function maxMin(arr) {
  let max = arr[0];
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) max = arr[i];
  }
  return { max, min };
}

console.log(maxMin(arr));
````

2. Reverse an Array (Manual Method Only)

```js
let arr = [1, 2, 3, 4, 5];
function reverse(arr) {
  let st = 0,
    l = arr.length - 1;
  while (l > st) {
    let temp = arr[st];
    arr[st] = arr[l];
    arr[l] = temp;
    l--;
    st++;
  }
  return arr;
}

console.log(reverse(arr));
```

3. Check if an Array is Sorted (Ascending)

```js
let arr = [1, 2, 3, 4, 5];
function isSorted(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      return "array not sorted";
    }
  }
  return true
}

console.log(isSorted(arr));
```