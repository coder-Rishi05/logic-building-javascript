### 1. **Find the Maximum of Three Numbers**

```js
let a = 10,
  b = 30,
  c = 40;

if (a >= b && a >= c) {
  console.log("a is greater");
} else if (b >= a && b>=c) {
    console.log("b is greater");
   else {
    console.log("c is greater");
  }
}
```

### 2. **Check if a Number is Positive, Negative, or Zero**

```js
let a = -10;

if (a > 0) console.log("number is positive");
else if (a === 0) console.log("number is zero");
else console.log("number is negative");
```

### 3. **Calculate Electricity Bill**

- Input: `Units = 230`
- Output: `Total Bill = ₹1500`
- ✨ _Applies multiple ranges using chained `else if` and cumulative logic._
- Example Logic:
  - 0–100 units → ₹5 per unit
  - 101–200 units → ₹7 per unit
  - 201–300 units → ₹10 per unit
  - Above 300 units → ₹12 per unit

- 🔍 _Teaches:_ cumulative calculation + condition chaining.

```js
let units = 230;
if (units <= 100) {
  total = units * 5;
} else if (units <= 200) {
  total = 100 * 5 + (units - 100) * 7;
} else if (units <= 300) {
  total = 100 * 5 + 100 * 7 + (units - 200) * 10;
} else {
  total = 100 * 5 + 100 * 7 + 100 * 10 + (units - 300) * 12;
}
```

---

### 4. **Check if a Character is a Vowel or Consonant**

- Input: `e`
- Output: `Vowel`
- ✨ _Combines logical OR (`||`) operator and string comparisons._

// ---

```js
let char = "b";

if (
  char === "a" ||
  char === "e" ||
  char === "i" ||
  char === "e" ||
  char === "u"
) {
  console.log("vowel");
} else {
  console.log("consonent");
}
```

5. **Check if a Year is a Leap Year**

```js
const year = 2024;

if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
  console.log("Leap year");
} else {
  console.log("Not a leap year");
}
```
