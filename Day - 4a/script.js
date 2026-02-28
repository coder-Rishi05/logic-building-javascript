// creating a function to generate a number using digit

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

console.log(a)