// Problem Link: https://www.geeksforgeeks.org/minimum-number-of-operations-required-to-reduce-n-to-1/

function count_minimum_operations(n) {
  // Base cases
  if(n < 1) {
    return null;
  } else if (n == 1) {
      return 0;
  } else if (n == 2) {
      return 1;
  } else if (n % 3 == 0) {
      return 1 + count_minimum_operations(n / 3);
  } else if (n % 3 == 1) {
      return 1 + count_minimum_operations(n - 1);
  } else {
      return 1 + count_minimum_operations(n + 1);
  }
}

// Test Cases
const testCases = [
{ input: 4, output: 2 },
{ input: 8, output: 3 },
{ input: 0, output: null },
];

const executeTestCases = () => {
testCases.forEach(function(obj) {
  const { input, output } = obj;
  if (count_minimum_operations(input) === output) console.log('✅ Passed');
  else console.log('❌ failed');
});
};

executeTestCases();