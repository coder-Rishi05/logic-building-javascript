// 3. **Find the Largest and Smallest Digit in a Number**

//    * Input: `N = 9483`
//    * Output: `Largest = 9, Smallest = 3`
//    * ✨ *Enhances comparison logic using loops.*

let n = 9483;

function avg(n) {
  let sum = 0,
    count = 0,
    arr = [];

  while (n > 0) {
    rem = n % 10;
    arr.push(rem);
    count++;
    n = Math.floor(n / 10);
  }

  let l = arr[1],
    s = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (l < arr[i] && l > s) {
      l = arr[i];
    } else if (s < arr[i + 1] && s < l) {
      s = arr[i];
    }
  }

  return { l, s };
}

console.log(avg(n));
