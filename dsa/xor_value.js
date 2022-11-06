// Problem Link: https://www.hackerearth.com/practice/algorithms/greedy/basics-of-greedy-algorithms/practice-problems/algorithm/xor-value-6dc9d9e4/

function dec2Bin(dec) {
  let bitValue;
  if (dec >= 0) bitValue = dec.toString(2);
  else bitValue = (~dec).toString(2);
  while (bitValue.length < 18) bitValue = "0" + bitValue;
  return bitValue;
}

function bin2dec(bin) {
  return parseInt(bin, 2).toString();
}

function getXORVal(arr) {
  let bitArr = arr.map((dec) => dec2Bin(parseInt(dec)));
  let k = new Array(18).fill(0);
  for (let i = 0; i < 18; i++) {
    let ones = 0,
      zeroes = 0;
    for (let j = 0; j < arr.length; j++) {
      if (bitArr[j].charAt(i) === "1") ++ones;
      else ++zeroes;
    }
    k[i] = ones > zeroes ? "1" : "0";
  }
  return parseInt(bin2dec(k.join("")));
}

getXORVal([10]);
