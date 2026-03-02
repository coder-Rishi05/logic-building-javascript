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

5. **Generate a Decimal Number from Whole and Fractional Digits**
   - Input: `Whole = [1, 2], Fraction = [3, 4]`

6. Palindrome number

```js
function checkPali(num) {
  let prev = num;
  let sum = 0;
  let rem = 0;
  while (num > 0) {
    rem = num % 10;
    sum = sum * 10 + rem;
    num = Math.floor(num / 10);
  }
  if (sum === prev) return true;
  else return false;
}

console.log(checkPali(121));
```

7. **Check if a Number is an Armstrong Number (also called a Narcissistic Number)**

```js
function isArmStrong(num) {
  let org = num;
  const digits = [];
  while (num > 0) {
    digits.unshift(num % 10);
    num = Math.floor(num / 10);
  }
  let difitPowerSum = 0;

  for (let i = 0; i < digits.length; i++) {
    difitPowerSum += digits[i] ** digits.length;
  }

  return difitPowerSum === org;
}

console.log(isArmStrong(1531));
```

1. **Find the Sum of Digits**

```js
Input: `N = 987`;

let n = 987;

function sumDeigits(n) {
  let sum = 0,
    rem = 0;

  while (n > 0) {
    rem = n % 10;
    sum = sum + rem;
    n = Math.floor(n / 10);
  }

  return sum;
}

console.log(sumDeigits(n));
```

2. **Find the Average of Digits**

    * Input: `N = 987`

```js
let n = 4567;

function avg(n) {
  let sum = 0,
    count = 0,
    avg = 0,
    rem = 0;

  while (n > 0) {
    rem = n % 10;
    sum = sum + rem;
    count++;
    n = Math.floor(n / 10);
  }
  return (avg = sum / count);
}

console.log(avg(n));
```
