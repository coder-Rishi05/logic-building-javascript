// 5. Check if Array is Sorted
// 6. Count Frequency of Each Element
// 7. Find Second Largest Element
// 8. Remove Duplicates from Sorted Array
// 9. Move Zeroes to End
// 10. Rotate Array by K Steps

let arr = [1, 2, 3, 4, 5, 6];

function isSorted(arr) {
    
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < arr[i + 1]) {
      console.log("sorted") ;
    } else console.log("not sorted");
  }
}

let res = isSorted(arr);
console.log(res);
