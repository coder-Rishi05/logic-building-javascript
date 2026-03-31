# 1️⃣ Find an Element Using Binary Search

```js
// sorting the array

let arr = [1, 3, 5, 7, 9];

let l = 0,
  h = arr.length - 1;

let tar = 7;

// binary search used on sorted arrays.

function bsearch(arr, tar) {
  while (l <= h) {
    let mid = Math.floor((l + h) / 2);

    if (tar === arr[mid]) {
      return mid;
    }
    if (arr[mid] < tar) {
      l = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
}

console.log(bsearch(arr, tar));
```

---

# 2️⃣ Find the First Occurrence of a Repeated Number

```js
// Find the First Occurrence of a Repeated Number

let arr = [2, 4, 4, 4, 9, 11];
// to find on first occurence reverse the array first

let l = 0,
  h = arr.length - 1;

let tar = 4;

// binary search used on sorted arrays.

function rev(arr) {
  let low = 0,
    high = arr.length - 1;
  while (low < high) {
    let temp = arr[low];
    arr[low] = arr[high];
    arr[high] = temp;
    high--;
    low++;
  }
  return arr;
}

function bsearch(arr, tar) {
  let revArr = rev(arr);
  while (l <= h) {
    let mid = Math.floor((l + h) / 2);

    if (tar === revArr[mid]) {
      return mid;
    }
    if (revArr[mid] < tar) {
      l = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
}

console.log(bsearch(arr, tar));
```

---

# 3️⃣ Find the Last Occurrence of a Repeated Number

```js
// Find the First Occurrence of a Repeated Number

let arr = [2, 4, 4, 4, 9, 11];

let l = 0,
  h = arr.length - 1;

let tar = 4;
let ans = -1;

function bsearch(arr, tar) {
  while (l <= h) {
    let mid = Math.floor((l + h) / 2);

    if (tar === arr[mid]) {
      ans = mid;
      h = mid - 1;
    }
    if (arr[mid] < tar) {
      ans = mid;
      l = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
}

console.log(bsearch(arr, tar));
```

### **4️⃣ Find the Peak Element in a Mountain Array (Binary Search Variant)**

- **Input:** `[1, 3, 5, 7, 6, 4, 2]`
- **Output:** `Peak = 7` at index 3
let arr = [1, 3, 5, 7, 6, 4, 2];
tar = 7;
let low = 0,
  high = arr.length - 1;

while (low < high) {
  let mid = Math.floor((low + high) / 2);
  if (arr[mid] === tar) {
    console.log(mid);
    return;
  }
  if (arr[mid] > tar) {
    high = mid - 1;
  } else {
    low = mid + 1;
  }
}
