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

```