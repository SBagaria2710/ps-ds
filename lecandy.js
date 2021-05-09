process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

function pleaseElephies(a, b) {
  // Hint: Type return a+b below
  var acc = 0;
  var elephiesTotalExpectationIsMore = a.some( exp => { 
    acc+= parseInt(exp);
    return acc > b;
  });
  return elephiesTotalExpectationIsMore ? "No" : "Yes";
}


function main() {
    var totalInputSets = parseInt(readLine());
    while( totalInputSets-- > 0 ) {
      var [numberOfElephants, totalCandies] = readLine().trim().split(" ");
      var elephyExpectations = readLine().trim().split(" ");
      var res = pleaseElephies(elephyExpectations, totalCandies);
      console.log(res);
    }
}