// // 2d array

// let matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// for (let row of matrix) {
//   const rowString = row.join();
//   // console.log(row)
//   console.log(rowString);
// }

// // multi array

// let arr1 = [
//   [1, 2, 3],
//   [4, 5, 6],
// ];

// for (let i = 0; i < arr1.length; i++) {
//   for (let j = 0; j < arr1.length; j++) {
//     console.log(arr1[i][j]);
//   }
// }

let arr = [4, 1, 5, 7, 8];
let sum = 0,
  maxSum = 0,
  k = 3;

for (let i = 0; i < k; i++) {
  maxSum += arr[i];
}

for (let i = k; i < arr.length; i++) {
  maxSum += arr[i] - arr[i - k];
  if (maxSum < sum) {
    maxSum = sum;
  }
}

console.log(maxSum);
