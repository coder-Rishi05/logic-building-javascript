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
