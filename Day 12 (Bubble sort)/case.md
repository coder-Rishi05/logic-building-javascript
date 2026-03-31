1. Convert String to Uppercase

Problem: Write a function that converts any lowercase letters in a string to uppercase using charCodeAt and fromCharCode.

Input: "hello world"
Output: "HELLO WORLD"

let arr = "javascript";
function convertToUpperCase() {
let u = "";
for (let i = 0; i < arr.length; i++) {
let code = arr[i].charCodeAt(0);
// check for lowercase
if (code >= 97 && code <= 122) {
code = code - 32;
}
u += String.fromCharCode(code);
}
return u;
}

console.log(convertToUpperCase(arr));

2. Convert String to Lowercase

Problem: Write a function that converts any uppercase letters in a string to lowercase using charCodeAt and fromCharCode.

Input: "JAVA SCRIPT"
Output: "java script"

3. Capitalize First Letter of Each Word

Problem: Write a function that converts the first letter of each word to uppercase and the rest to lowercase.

Input: "javascript is fun"
Output: "Javascript Is Fun"

4. Toggle Case

Problem: Write a function that toggles the case of each character in a string.

Uppercase → lowercase
Lowercase → uppercase

Input: "JavaScript"
Output: "jAVAsCRIPT"

5. Capitalize First Letter of the String

Problem: Capitalize only the first letter of a string and make the rest lowercase.

Input: "javascript"
Output: "Javascript"

6. Uppercase Only Vowels

Problem: Convert all vowels to uppercase and keep consonants as lowercase.

Input: "javascript"
Output: "jAvAscrIpt"

7. Lowercase Only Consonants

Problem: Convert all consonants to lowercase and keep vowels as uppercase.

Input: "JAVASCRIPT"
Output: "JaVaScRiPt"

8. Reverse Case

Problem: Write a function that reverses the case and also reverses the string.

Input: "JavaScript"
Output: "TPiRcSaVaJ"

9. Remove Case Sensitivity

Problem: Convert all letters to lowercase, remove non-alphabetic characters, and return the clean string.

Input: "JavaScript 101!"
Output: "javascript"

10. First Letter Uppercase, Rest Lowercase

Problem: For any string, make only the first character uppercase and the rest lowercase, using charCodeAt and fromCharCode.

Input: "hELLO"
Output: "Hello"

```js
let arr = "javascript";
function convertToUpperCase() {
  let u = "";
  for (let i = 0; i < arr.length; i++) {
    let code = arr[i].charCodeAt(0);
    // check for lowercase
    if (code >= 97 && code <= 122) {
      code = code - 32;
    }
    u += String.fromCharCode(code);
  }
  return u;
}

function convertToLowerCase() {
  let l = "";
  for (let i = 0; i < arr.length; i++) {
    let code = arr[i].charCodeAt(0);
    // check for lowercase
    if (code >= 65 && code <= 90) {
      code = code + 32;
    }
    l += String.fromCharCode(code);
  }
  return l;
}

console.log(convertToLowerCase(arr));
```

// splitting string
let str = "abc";

let arr = new Array();
console.log(typeof arr);

for (let i = 0; i < str.length; i++) {
arr[i] = str[i];
}

console.log(arr);

// [1,2,3,4]
// let var =
// = 3
// = 2
// = 1
