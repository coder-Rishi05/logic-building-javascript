// move 0s element

let arr = [1, ,3, 0,3, 3, 0, 4, 5];

function repeatingElem(arr) {
  let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
    for (const element of arr) {
      if (newArr.includes(element)) return element;
      newArr.push(element);
    }
//   }
  return newArr;
}

console.log(repeatingElem(arr));
