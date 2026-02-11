## 🎯 **Day 2 – Conditions & Logic**

### 🧩 **Core Concept Focus**

* Conditional statements (`if`, `else if`, `else`)
* Comparison and logical operators
* Decision making based on different inputs
* Strengthening flow-of-control understanding

---

### 🧠 **Questions List**

1. **Find the Maximum of Three Numbers**

   * Input: `10 20 5`
   * Output: `20`
   * ✨ *Teaches nested or chained conditional logic and comparative reasoning.*


---

2. **Check if a Number is Positive, Negative, or Zero**

   * Input: `-9`
   * Output: `Negative`
   * ✨ *Practices multi-branch conditions and comparison operators.*

---


3. **Calculate Electricity Bill**

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

4. **Check if a Character is a Vowel or Consonant**

   * Input: `e`
   * Output: `Vowel`
   * ✨ *Combines logical OR (`||`) operator and string comparisons.*

---

5. **Check if a Year is a Leap Year**


   * Input: `2024`
   * Output: `Leap Year`
   * ✨ *Builds compound condition logic using multiple `if` statements (`%4`, `%100`, `%400`).*

   A year is a **leap year** if it satisfies these conditions:

   1. It is **divisible by 4**,  
      ➜ `year % 4 === 0`
   2. **But not divisible by 100**,  
      ➜ `year % 100 !== 0`
   3. **Unless** it is also **divisible by 400**,  
      ➜ `year % 400 === 0`

   🧩 **In Simple Words**
   - If a year is divisible by **4**, it’s a leap year.  
   - **Except** if it’s also divisible by **100**, then it’s **not** a leap year.  
   - **But** if it’s divisible by **400**, it **is** a leap year again.

---

### 🏠 **Homework / Practice Challenge**

1. **Check if a Character is Uppercase, Lowercase, Digit, or Special Character**

   * Input: `A`
   * Output: `Uppercase Letter`
   * ✨ *Teaches use of character code ranges (`charCodeAt`) and compound logical conditions.*
   * 🔍 *Concepts:* ASCII range checks, compound `&&` and `||` operators.

---

2. **Check Triangle Type Using Sides and Angles**

* **Input:** `Sides = 3, 4, 5`
* **Output:** `Right-Angled Triangle`
* ✨ *Combines geometric reasoning + Pythagoras theorem check.*
* Example Logic:

  * If `a² + b² = c²` → Right-angled
  * Else if all sides equal → Equilateral
  * Else if any two equal → Isosceles
  * Else → Scalene

---

3. **Calculate Income Tax Based on Slabs**

* **Input:** `Income = ₹7,50,000`
* **Output:** `Tax = ₹62,500`
* ✨ *Applies progressive slab logic similar to electricity bill but with financial context.*
* Example Logic (example slabs):

  * Up to ₹2,50,000 → No tax
  * ₹2,50,001 – ₹5,00,000 → 5%
  * ₹5,00,001 – ₹10,00,000 → 20%
  * Above ₹10,00,000 → 30%
* 🔍 *Requires cumulative calculation using nested `if–else` or multiple slab loops.*