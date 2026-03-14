// 6. Enter an array from user and find the k-th smallest value?

const arr = [12, -21, -45, 75, 57];
let min = 0;
let k = 2;

// sorting array

for (let i = 0; i < arr.length - 1; i++) {
  for (let j = i + 1; j < i; j++) {
    if (arr[i] > arr[j]) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
}

console.log(arr);

