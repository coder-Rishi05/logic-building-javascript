// Check if Two Strings Are Anagrams (Without Sorting)

let str1 = "listen";

let str2 = "silentkkk";

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
