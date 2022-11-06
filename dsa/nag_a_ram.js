/**
 *Problem Link: https://www.hackerearth.com/practice/data-structures/hash-tables/basics-of-hash-tables/practice-problems/algorithm/orring-matrix/
 */

let obj = {
  a: 1,
  b: 2,
  c: 4,
  d: 8,
  e: 16,
  f: 32,
  g: 64,
  h: 128,
};

function calculatePowerValue(str) {
  let map = new Map();
  let powerVal = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charAt(i);
    if (map.get(char)) {
      continue;
    } else {
      map.set(char, 1);
      powerVal += obj[char];
    }
  }
  return powerVal;
}

function findSpecialAnagrams(strArr = []) {
  let powerValArr = strArr.map((str) => ({
    powerVal: calculatePowerValue(str),
    string: str,
  }));
  powerValArr.sort((a, b) => {
    if (a.powerVal === b.powerVal) {
      if (a.string < b.string) return -1;
      else 1;
    }
    return a.powerVal - b.powerVal;
  });
  let result = `${powerValArr[0].string}`;
  for (let i = 1; i < strArr.length; i++) {
    if (powerValArr[i].powerVal === powerValArr[i - 1].powerVal) {
      result += ` ${powerValArr[i].string}`;
    } else {
      result += `\n${powerValArr[i].string}`;
    }
  }
  return result;
}

findSpecialAnagrams(["eah", "hea", "hac", "ahe", "cah", "bah"]);
