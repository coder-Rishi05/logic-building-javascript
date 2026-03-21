```js
function isSubString(str, substr) {
  for (let i = 0; i <= str.length - substr.length; i++) {
    let match = true;

    for (let j = 0; j < substr.length; j++) {
      if (str[i + j] !== substr[j]) {
        match = false;
        break;
      }
    }
    if (match) return true;
  }

  return false;
}

console.log(isSubString("abcde", "cd"));
```
