# String Questions practice

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

```js
// Reverse a string

let str = "Hello";

// function myReverse(str) {
//   let rev = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     rev += str[i];
//   }
// console.log(typeof rev)
//   return rev;
// }

// console.log(myReverse(str));

console.log(myReverse2(str));
```

---

```js
// Reverse a string

let str = "madam";

function isPalindrome(str) {
  let rev = "";
  for (let i = str.length - 1; i >= 0; i--) {
    rev += str[i];
  }

  if (rev === str) {
    return true;
  } else {
    return false;
  }
}

console.log(isPalindrome(str));
```

```js
// count vowel

let str = "alaphabet is strong a e i o u";

function countVowel(str) {
  let vowl = "";
  let vowel = new Set();
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] === "a" ||
      str[i] === "e" ||
      str[i] === "i" ||
      str[i] === "o" ||
      str[i] === "u"
    ) {
      vowl += str[i];
      vowel.add(str[i]);
    }
  }
  console.log(vowel.size);
  return { unique: vowel.size, all: vowl.length };
}

console.log(countVowel(str));
```

```js
// Q4. Find the first non-repeating character in a string.
let str1 = "silent",
  str2 = "listen";
// Output: "c"

function checkAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;
  for (let i = 0; i < str1.length; i++) {
    for (let j = 0; j <= str2.length; j++) {
      if (str2[j] === str1[i]) {
        return true;
      }
    }
  }
  return false;
}

console.log(checkAnagram(str1, str2));

function charFrequency(str) {
  let freq = {};
  for (let i = 0; i < str.length; i++) {
    if (freq[str[i]]) {
      freq[str[i]]++;
    } else {
      freq[str[i]] = 1;
    }
  }
  return freq;
}
```

```js
function charFrequency(str) {
  let freq = {};
  for (let i = 0; i < str.length; i++) {
    if (freq[str[i]]) {
      freq[str[i]]++;
    } else {
      freq[str[i]] = 1;
    }
  }
  for (let i = 0; i < str.length; i++) {
    if (freq[str[i]] === 1) {
      return str[i];
    }
  }
}
console.log(charFrequency("rishabh"));
```

```js
// Q7. Reverse the words in a sentence (words ka order ulta, har word ka spelling same rahe).

/*
Input:  "hello world how are you"
Output: "you are how world hello"
*/

let str = "hello world how are you";
let rev = [];
let word = "";

for (let i = 0; i <= str.length; i++) {
  if (str[i] === " " || i === str.length) {
    console.log(word);
    rev.push(word);
    word = "";
  } else {
    word += str[i];
  }
}

console.log(rev.reverse());

let str = "rishi is brave";
let word = "";
let longest = "";

function checkLongestString(str, longest, word) {
  for (let i = 0; i <= str.length; i++) {
    if (str[i] === " " || i === str.length) {
      if (word.length > longest.length) longest = word;
      word = "";
    } else {
      word += str[i];
    }
  }
  return longest;
}

console.log(checkLongestString(str, longest, word));
```

```js
let str = "hello world from javascript";
let result = "";
let word = "";

for (let i = 0; i <= str.length; i++) {
  if (str[i] === " " || i === str.length) {
    result += word[0].toUpperCase() + word.slice(1);
    word = "";
  } else {
    word += str[i];
  }
}

console.log(result);
```

```js
/*
Input:  "programming"
Output: "progamin"
*/

let str = "programming";
let n = "";
let set = new Set();
for (let i = 0; i < str.length; i++) {
  if (!set.has(str[i])) {
    n += str[i];
    set.add(str[i]);
  }
}

console.log(n);
```

```js
let str = "programming";
let n = "";
let seen = {};

for (let i = 0; i < str.length; i++) {
  if (!seen[str[i]]) {
    // pehli baar mila?
    n += str[i];
    seen[str[i]] = true; // mark kar do
  }
}

console.log(n); // "progamin" ✅
```
