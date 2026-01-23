### q1. and Task 1

```js
let n = Number(prompt("Enter you number"));

for (let i = 1; i <= n; i++) {
  console.log(i);
}
```

---

### task 2

<form action="">
        <input class="inp" type="text">
        <input type="submit" value="submit">
    </form>
    <p></p>

```js
const form = document.querySelector("form");

const inp = document.querySelector(".inp");
form.addEventListener("submit", (e) => {
e.preventDefault();
let p = document.querySelector("p");
let v = inp.value;
p.innerText = "";
for (let i = 1; i <= v; i++) {
p.innerHTML += i + "<br>";
}
});

---
```

### q2

- 1st type

```js
for (let j = 1; j <= 100; j++) {
  let num = (j - 101).toFixed().split("-")[1];
  console.log(Number(num));
}

- 2nd type

let a = 101;
for (let j = 1; j <= 100; j++) {
  console.log(a - j);
}


```

### q3

```js
let a = 101;
for (let j = 1; j <= a; j++) {
  if (j % 2 === 0) {
    console.log(j);
  }
}
```

### q4

```js
let n = 5;
let sum = 0;
for (let i = 1; i <= n; i++) {
  sum = sum + i;
}
console.log(sum);
```

### 5. **Product (Factorial) of N**

```js
let n = 5;
let sum = 1;
for (let i = 1; i <= n; i++) {
  sum = sum * i;
}
console.log(sum);
```

### 6. **Sum of All Even Numbers up to N**

```js
let n = 5;
let sum = 0;
for (let i = 1; i <= n; i++) {
  if (i % 2 === 0) {
    console.log(i)
    sum = sum + i;
  }
}
console.log(sum);


```

### 7 **Print Squares of Numbers from 1 to N**

```js
let n = 5;
for (let i = 1; i <= n; i++) {
  console.log(i * i);
}

```

### 🏠 **Homework / Practice Challenge**

1. **Print all numbers divisible by 3 and 5 up to N**

```js

let n = 100

for (let i = 0; i < n; i++) {

    if(i%3===0 && i%5===0){
        console.log(i)
    }
    
}


```

2. **Find the sum of all odd numbers up to N**

```js
let n = 5;
let sum = 0;
for (let i = 1; i <= n; i++) {

  if (i % 2 !== 0) {
    console.log("odd : ", i);
    sum = sum + i;
    console.log("sum of odd : ",sum);
  }
}
```


---

3. **Print the cubes of numbers from 1 to N**

```js
let n = 10;

for (let i = 1; i <= n; i++) {
  console.log(i * i * i);
}
```
 
---

4. **Print only the numbers that are both even and perfect squares**

let n = 10;
let sq = 1;
for (let i = 1; i <= n; i++) {
    sq = i * i;
    // console.log(sq)
  if (sq % 2 === 0) {
    console.log(sq);
  }
}
