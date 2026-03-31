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
