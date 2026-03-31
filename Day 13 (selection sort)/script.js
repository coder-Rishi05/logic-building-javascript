//Find the Kth Smallest Element Using Selection Logic

let arr = [9, 4, 7, 1, 3];
let k = 3;

function selectionSort(arr, k) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      const temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }

  return arr;
}

console.log(selectionSort(arr, k));
