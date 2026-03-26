1. reverse a string

```js
let str = "javascript";

function reverseStr(str) {
  let revStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    revStr += str[i];
  }
  return revStr;  
}

console.log(reverseStr(str));
```

2. check string palindrome

```js
let str = "madam";

function checkPalindrom(str) {
  let revStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    revStr += str[i];
  }
  return str === revStr;
}

console.log(checkPalindrom(str));
function check(str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] != str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}
console.log(check(str));
```

3. Count Frequency of Each Character

```js
let item = "banana";

function countfreq(str) {
  const freq = {};
  for (let i = 0; i < item.length; i++) {
    console.log(item[i]);
    freq[str[i]] = (freq[str[i]] || 0) + 1;
  }

  return freq;
}

console.log(countfreq(item));
```

4. Find the Most Frequent Character in a String

```js
let item = "banana";

function countfreq(str) {
  const freq = {};
  let maxChar = "",
    maxCount = 0;
  for (let i = 0; i < item.length; i++) {
    const char = str[i];
    freq[char] = (freq[char] || 0) + 1;

    if (maxChar < freq[char]) {
      maxChar = char;
      maxCount = freq[char];
    }
  }

  return maxChar;
}

console.log(countfreq(item));
```

5. Check if Two Strings Are Anagrams (Without Sorting)


```js
let str1 = "listen";

let str2 = "silent";

function ang(str1, str2) {
  if (str1.length !== str2.length) return false;
  for (let i = 0; i < str1.length; i++) {
    for (let j = 0; j < str2.length; j++) {
      if (str1[i] === str2[i]) {
        return true;
      }
    }
  }
  return false;
}

console.log(ang(str1, str2));
```