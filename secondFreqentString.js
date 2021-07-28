// Problem Link: https://www.geeksforgeeks.org/second-repeated-word-sequence/

function findSecondFrequent(arr) {
  let map = new Map();
  let first = 0, second = 0;

  // Handle Edge Case
  if(arr.length < 3 || !Array.isArray(arr)) return null;

  // Count Iterations for each string items
  arr.forEach(function(item) {
    if (map.has(item)) {
      map.set(item, map.get(item) + 1);
    } else {
      map.set(item, 1);  
    }
  });
  
  // Figure out second most repeated number
  for ([key, value] of map) {
    if (value > first) {
      second = first;
      first = value;
    } else if (value > second && value !== first) {
      second = value;
    }
  }
  
  // Find the key for the found second most repeated number
  for([key, value] of map) {
    if (value === second) return key;
  }
}


// Test Cases
const testCases = [
  { input: [], output: null },
  { input: ['v', 's'], output: null },
  { input: ['b', 'd', 'd', 'd', 'a', 'd', 'a', 'd', 'e', 'e', 'e'], output: 'e' },
];

const executeTestCases = () => {
  testCases.forEach(function(obj) {
    const { input, output } = obj;
    if (findSecondFrequent(input) === output) console.log('Passed');
    else console.log('failed');
  });
};

executeTestCases();