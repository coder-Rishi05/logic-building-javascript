// shift by 1 element

let k = 1;

let arr = [1, 2, 4, 4, 5, 4, 7, 8, 9];

function leftShiftByOne(arr) {
  let first = arr[0]; // pehla element store karo
  let sec = arr[1];
  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1]; // har element ek left khisak jao
  }

  arr[arr.length - 1] = first; // pehla element end mein daaldo
  arr[arr.length - 2] = sec; // pehla element end mein daaldo
  return arr;
}

console.log(leftShiftByOne(arr));
