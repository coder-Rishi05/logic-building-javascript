// 3. **Calculate Income Tax Based on Slabs**

/*
* **Input:** `Income = ₹7,50,000`
* **Output:** `Tax = ₹62,500`
* ✨ *Applies progressive slab logic similar to electricity bill but with financial context.*
* Example Logic (example slabs):

  * Up to ₹2,50,000 → No tax
  * ₹2,50,001 – ₹5,00,000 → 5%
  * ₹5,00,001 – ₹10,00,000 → 20%
  * Above ₹10,00,000 → 30%
* 🔍 *Requires cumulative calculation using nested `if–else` or multiple slab loops.*
*/

let income = 750000;
let tax = 0;
if (income > 1000000) {
  tax = Math.abs((2500001 * 5) / 100) + Math.abs((500001 * 20) / 100) + ();
}
