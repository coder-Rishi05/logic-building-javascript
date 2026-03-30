// string starts with char

let arr = ["pri", "ball", "apple", "rishi"];

let char = "r";

function strStr(arr, char) {
  let val = "";
  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
    if (arr[i].includes(char)) {
      return arr[i];
    }
  }
  return -1;
}

console.log(strStr(arr, char));
