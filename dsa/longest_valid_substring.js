// Problem Link: https://www.geeksforgeeks.org/length-of-the-longest-valid-substring/

function parenthesisClosing(text) {
  let open = 0, close = 0;
  if (!text.length) return null;
  for (char in text) {
    if (text[char] === '(') {
      open++;
    } else if (text[char] === ')') {
      if (open) {
        close++;
        open--; 
      }
    } else {
      return null;
    }
  }
  return close*2;
}

function executeTestCases(testCases) {
  testCases.forEach((testCase, index) => {
    const { input, output } = testCase;
    if (parenthesisClosing(input) === output) console.log(`${index + 1}. Passed `);
    else console.log(`${index + 1}. Failed `);
  });
}

const testCases = [
  { input: '((()', output: 2 },
  { input: ')()())', output: 4 },
  { input: '()(()))))', output: 6 },
  { input: 'sdf', output: null },
  { input: '()(s()))))', output: null },
];

executeTestCases(testCases);