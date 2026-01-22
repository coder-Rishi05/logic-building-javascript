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

```js
for (let j = 1; j <= 100; j++) {
  let num = (j - 101).toFixed().split("-")[1];
  console.log(Number(num));
}


```