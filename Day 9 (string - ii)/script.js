let str = "rishabh";
let substr = "rish";

function subString(str, substr) {
  for (let i = 0; i <= str.length - substr.length; i++) {
    let match = true;
    for (let j = 0; j < substr.length; j++) {
      if (str[i + j] !== substr[j]) {
        match = false;
        break;
      }
    }
    if (match) return i;
  }
  return -1;
}

console.log(subString(str, substr));
