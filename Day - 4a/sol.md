1. creating a function to generate a number using digit

```js
let digit = [2, 4, 6, 5];
let mul = 0;
let num = 1;

let digitsToNumber = (digit) => {
  for (let i = 0; i < digit.length; i++) {
    num = digit[i] * Math.pow(10, i);
    mul += num;
  }

  return mul;
};

let a = digitsToNumber(digit);

console.log(a);
```

2. **Split Number into Digits**

```js
let n = 12345;
let rem = 0;
let sum = 0;
let arr = [];
while (n > 0) {
  rem = Math.abs(n % 10);
  arr.push(rem);
  n = Math.trunc(n / 10);
}

console.log(arr.reverse());
```

3.  **Revesrse the number**

```js
let num = 1234;

let rem = 0;
let rev = 0;
let sum = 0;

function reverse(num, rev, sum) {
  while (num > 0) {
    rem = num % 10;
    rev = rev * 10 + rem;
    num = Math.floor(num / 10);
  }
  return rev;
}

reverse(num, rev, sum);
```

4. **Remove the Decimal Point Mathematically**

```js
function removeDecimal(number) {
  while (!Number.isInteger(number)) {
    number = number * 10;
  }
  return number;
}

console.log(removeDecimal(12.34));
```

4. **Separate Whole and Fractional Parts of a Number**

```js
function seperateParts(num) {
  const fraction = Number((num % 1).toFixed(10));
  let whole = Number((num - fraction).toFixed(10));
  return { whole, fraction };
}

console.log(seperateParts(12.5));
```
