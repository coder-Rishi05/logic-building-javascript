// function swap(a, b) {
//   let temp = a;
//   a = b;
//   b = temp;
//   return [a, b];
// }

// selection sort

let arr = [7, 2, 9, 4, 1];

for (let i = 0; i < arr.length - 1; i++) {
  let low = i;
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] > arr[j]) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
    console.log(arr[j]);
  }
  console.log(arr[i]);
}

console.log("sorted array : ", arr);

// binary search

let left = 0,
  right = arr.length - 1;
mid = Math.floor(left + right / 2);
let tar = 7;



