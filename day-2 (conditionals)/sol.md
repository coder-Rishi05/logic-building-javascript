### 1. **Find the Maximum of Three Numbers**

```js
let a = 10,
  b = 30,
  c = 40;

if (a > b) {
  if (a > c) {
    console.log("a is greater");
  } else {
    console.log("c is greater");
  }
} else if (b > a) {
  if (b > c) {
    console.log("b is greater");
  } else {
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

* Input: `Units = 230`
* Output: `Total Bill = ₹1500`
* ✨ *Applies multiple ranges using chained `else if` and cumulative logic.*
* Example Logic:

  * 0–100 units → ₹5 per unit
  * 101–200 units → ₹7 per unit
  * 201–300 units → ₹10 per unit
  * Above 300 units → ₹12 per unit
* 🔍 *Teaches:* cumulative calculation + condition chaining.

---

### 4. **Check if a Character is a Vowel or Consonant**

   * Input: `e`
   * Output: `Vowel`
   * ✨ *Combines logical OR (`||`) operator and string comparisons.*

// ---

```js
let char = 'b';

if(char === 'a' || char === 'e' || char === 'i' || char === 'e' || char === 'u'){
    console.log("vowel")
}else{
    console.log("consonent")

}
```