function longestSubString(strArr) {
  let start = 0;
  let max = 0;
  let map = new Map();

  for (let i = 0; i < strArr.length; i++) {
    let char = strArr[i];

    if (map.get(char) >= start) {
      start = map.get(char) + 1;
      console.log("start" + start);
    }

    if (i - start + 1 > max) {
      max = i - start + 1;
      console.log("max" + max);
    }
    map.set(char, i)
  }
  return max;
}

console.log(longestSubString('aaaabbbabcb'));