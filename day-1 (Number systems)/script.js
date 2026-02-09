console.time();
let n = 50000000;
let sum = 0;
for (let i = 1; i <= n; i++) {
  sum += i;
}
console.log(sum);
console.timeEnd();

// optimizing this solution
console.log("optimizing this solution");
console.time();
for (let i = 1; i <= n; i++) {
  sum = (n * (n + 1)) / 2;
}
console.log(sum);
console.timeEnd();

// there is a limit of max_safe numbers in javascript agr usse bda number use krta hun to vo calculate nhi kr paatha.
// there for we use bigInt for big calculations
// also always follow optimize approach